import type { Metadata } from "next";
import Link from "next/link";
import { Photos } from "@/components/menu/photos";
import { MENU } from "@/lib/menu";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Menu — ${SITE.name}`,
  description: `What comes off the smoker at ${SITE.name}.`,
};

export default function MenuPage() {
  return (
    <>
      <header className="grain bg-charcoal px-5 py-14 text-bone mob:px-6 mob:py-22">
        <div className="mx-auto max-w-[760px]">
          <div className="mb-7 h-[3px] w-12 bg-ember-bright" />
          <h1 className="text-[clamp(2.6rem,8vw,4.2rem)] text-bone">
            The Menu
          </h1>
          <p className="mt-4 max-w-[46ch] text-[1.15rem] text-kraft">
            Everything comes off a wood-fired offset, cooked the morning of.
            When it&rsquo;s gone, it&rsquo;s gone.
          </p>
        </div>
      </header>

      <section className="bg-bone px-5 py-14 mob:px-6 mob:py-22">
        <div className="mx-auto max-w-[760px]">
          <ul className="list-none">
            {MENU.map((item) => (
              <li
                key={item.name}
                className="border-b border-oak/15 py-6 last:border-b-0"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-[1.45rem]">{item.name}</h2>
                  <span className="font-display text-[1.2rem] font-semibold whitespace-nowrap text-ember">
                    {item.price}
                    <span className="ml-1.5 font-body text-[0.8rem] font-normal italic text-smoke">
                      {item.unit}
                    </span>
                  </span>
                </div>
                <p className="mt-1 max-w-[58ch] text-[1.05rem] text-oak">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <p className="placeholder mt-10 text-[0.95rem]">
            Placeholder lineup and pricing — nothing here is final.
          </p>
        </div>
      </section>

      <Photos />

      <footer className="grain bg-oak px-5 py-14 text-kraft mob:px-6 mob:py-22">
        <div className="mx-auto max-w-[760px]">
          <h2 className="mb-4 text-[clamp(2rem,5.5vw,2.6rem)] text-bone">
            Want this at your place?
          </h2>
          <p className="mb-8 max-w-[50ch] text-[1.1rem] text-kraft">
            Pop-ups, competitions, and anything else worth firing the smoker
            for.
          </p>
          <Link
            href="/#contact"
            className="border-b border-ember pb-[2px] font-display text-[1.1rem] text-bone no-underline"
          >
            Get in touch
          </Link>
        </div>
      </footer>
    </>
  );
}
