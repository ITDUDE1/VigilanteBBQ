import { SITE } from "@/lib/site";

const linkClasses =
  "placeholder border-b border-ember pb-[2px] text-bone no-underline";

export function Contact() {
  return (
    <footer id="contact" className="grain bg-oak px-5 py-14 text-kraft mob:px-6 mob:py-22">
      <div className="mx-auto max-w-[760px]">
        <h2 className="mb-4 text-[clamp(2rem,5.5vw,2.6rem)] text-bone">
          Get in touch
        </h2>
        <p className="mb-8 max-w-[50ch] text-[1.1rem] text-kraft">
          For pop-up bookings, competition invites, or just to say the brisket
          looks unreal.
        </p>
        <div className="flex flex-wrap gap-x-9 gap-y-6 font-display text-[1.1rem]">
          <a href={SITE.contact.emailHref} className={linkClasses}>
            {SITE.contact.emailLabel}
          </a>
          <a href={SITE.contact.instagramHref} className={linkClasses}>
            Instagram
          </a>
        </div>
        <p className="mt-14 font-body text-[0.85rem] text-fine-print">
          Built by a very proud kid, one weekend at a time.
        </p>
      </div>
    </footer>
  );
}
