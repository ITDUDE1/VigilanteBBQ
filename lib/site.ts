/**
 * Single source of truth for the business's identity.
 *
 * If the name changes (e.g. to "Vigilante Smoke"), edit `name` below and it
 * updates everywhere it appears: the page title, the hero location line, and
 * the scorecard's home-team row.
 */
export const SITE = {
  name: "Vigilante BBQ",
  city: "Austin, TX",
  tagline: "The best brisket in Austin doesn’t have a restaurant. Yet.",

  /** Placeholders — swap in the real details when they exist. */
  contact: {
    emailLabel: "email@placeholder.com",
    emailHref: "#", // e.g. "mailto:hello@vigilantebbq.com"
    instagramHref: "#", // e.g. "https://instagram.com/vigilantebbq"
  },
} as const;

export type NavLink = {
  label: string;
  /** A route ("/menu") or a homepage anchor ("/#story"). */
  href: string;
};

/**
 * The nav bar renders straight from this list — add, reorder or rename here
 * and <SiteNav /> follows. Anchors are written "/#id" rather than "#id" so
 * they still reach the homepage section when read from another route; the ids
 * match the sections in components/home/.
 */
export const NAV_LINKS: NavLink[] = [
  { label: "Menu", href: "/menu" },
  { label: "Story", href: "/#story" },
  { label: "Scorecard", href: "/#scorecard" },
  { label: "Events", href: "/#events" },
  { label: "Contact", href: "/#contact" },
];
