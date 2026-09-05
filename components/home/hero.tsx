import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <header id="top" className="hero-gradient grain flex min-h-[92vh] flex-col justify-center px-5 py-14 text-left text-bone mob:px-6 mob:py-22">
      <div className="mx-auto w-full max-w-[760px]">
        <div className="mb-7 h-[3px] w-12 bg-ember-bright" />
        <h1 className="placeholder text-[clamp(3.2rem,11vw,6.5rem)] text-bone">
          Your Dad’s Name
        </h1>
        <p className="mt-5 max-w-[34ch] font-body text-[clamp(1.15rem,2.6vw,1.5rem)] text-kraft">
          {SITE.tagline}
        </p>
        <p className="mt-12 font-display text-[1.05rem] text-smoke">
          {SITE.city} — {SITE.name}
        </p>
      </div>
    </header>
  );
}
