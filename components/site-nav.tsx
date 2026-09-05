"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_LINKS, SITE, type NavLink } from "@/lib/site";

const linkBase =
  "border-b pb-[2px] font-display text-[1.05rem] no-underline transition-colors";
const linkIdle =
  "border-transparent text-kraft hover:border-ember hover:text-bone";
const linkActive = "border-ember text-bone";

/** Homepage anchors are "/#id"; plain routes have no section to track. */
const HOME_ANCHOR = "/#";

function sectionIdOf(href: string) {
  return href.startsWith(HOME_ANCHOR) ? href.slice(HOME_ANCHOR.length) : null;
}

const SECTION_IDS = NAV_LINKS.map((link) => sectionIdOf(link.href)).filter(
  (id): id is string => id !== null,
);

/** Reads --nav-offset (set in globals.css) so CSS stays the single source. */
function readNavOffset() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(
    "--nav-offset",
  );
  return Number.parseFloat(raw) || 88;
}

/**
 * Tracks which linked section the reader is currently on.
 *
 * Returns null above the first section (while the hero fills the screen) and on
 * pages that contain none of the linked sections, so the nav simply shows no
 * highlight rather than guessing.
 *
 * `pin` exists because the last screenful of a page can hold more than one
 * section: clicking "Events" may bottom the page out with Contact on screen
 * too, and no scroll position can tell those apart. A clicked link therefore
 * holds the highlight until the reader scrolls under their own steam.
 */
function useActiveSection() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);
  const pinnedRef = useRef<string | null>(null);

  useEffect(() => {
    if (SECTION_IDS.length === 0) return;

    // Moving to another route drops any highlight the last click pinned.
    pinnedRef.current = null;

    let frame = 0;
    let offset = readNavOffset();

    const update = () => {
      frame = 0;

      if (pinnedRef.current !== null) {
        setActiveId(pinnedRef.current);
        return;
      }

      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      let current: string | null = null;
      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.getBoundingClientRect().top + scrolled;

        // Scroll position at which this section's top reaches the nav line.
        // A section at the end of the page never gets there — the page runs out
        // of scroll first (the footer, always) — so clamp to the last
        // scrollable pixel. Clamping also keeps activation points in document
        // order, so an earlier section can't be skipped.
        const activation = Math.min(top - offset, maxScroll);

        // -1 absorbs sub-pixel rounding when a link lands its target exactly.
        if (scrolled >= activation - 1) current = id;
      }

      setActiveId(current);
    };

    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    // Any real input gesture means the reader has taken over from their click.
    const release = () => {
      if (pinnedRef.current !== null) {
        pinnedRef.current = null;
        schedule();
      }
    };

    const onResize = () => {
      offset = readNavOffset();
      schedule();
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("wheel", release, { passive: true });
    window.addEventListener("touchmove", release, { passive: true });
    window.addEventListener("keydown", release);
    window.addEventListener("mousedown", release);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchmove", release);
      window.removeEventListener("keydown", release);
      window.removeEventListener("mousedown", release);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  const pin = useCallback((id: string | null) => {
    pinnedRef.current = id;
    if (id !== null) setActiveId(id);
  }, []);

  return { activeId, pathname, pin };
}

function NavItem({
  link,
  active,
  onNavigate,
}: {
  link: NavLink;
  active: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={link.href}
      aria-current={active ? "true" : undefined}
      onClick={onNavigate}
      className={`${linkBase} ${active ? linkActive : linkIdle}`}
    >
      {link.label}
    </Link>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { activeId, pathname, pin } = useActiveSection();

  const handleNavigate = (link: NavLink) => {
    pin(sectionIdOf(link.href));
    setOpen(false);
  };

  // Anchors light up from scroll position, but only while the homepage is the
  // one on screen; routes light up from the URL.
  const isActive = (link: NavLink) => {
    const sectionId = sectionIdOf(link.href);
    return sectionId === null
      ? pathname === link.href
      : pathname === "/" && sectionId === activeId;
  };

  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-50 border-b border-ticket-edge bg-charcoal"
    >
      <div className="mx-auto flex max-w-[760px] items-center justify-between px-5 py-4 mob:px-6">
        <Link
          href="/#top"
          onClick={() => pin(null)}
          className="font-display text-[1.15rem] font-bold tracking-[0.01em] text-bone no-underline"
        >
          {SITE.name}
        </Link>

        {/* Wide screens: links inline. */}
        <ul className="hidden list-none gap-x-6 mob:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavItem
                link={link}
                active={isActive(link)}
                onNavigate={() => handleNavigate(link)}
              />
            </li>
          ))}
        </ul>

        {/* Narrow screens: disclosure toggle. */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-nav-menu"
          onClick={() => setOpen((wasOpen) => !wasOpen)}
          className="-mr-2 cursor-pointer p-2 text-kraft transition-colors hover:text-bone mob:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            {open ? (
              <path
                d="M5 5l12 12M17 5L5 17"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <ul
        id="site-nav-menu"
        className={`mx-auto max-w-[760px] list-none flex-col gap-y-4 px-5 pb-5 mob:hidden ${
          open ? "flex" : "hidden"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <NavItem
              link={link}
              active={isActive(link)}
              onNavigate={() => handleNavigate(link)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
