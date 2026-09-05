import { SITE } from "@/lib/site";

type Ranking = {
  name: string;
  /** Small italic line under the name, e.g. "home team". */
  place?: string;
  score: string;
  winner?: boolean;
};

const RANKINGS: Ranking[] = [
  { name: SITE.name, place: "home team", score: "10", winner: true },
  { name: "Franklin Barbecue", score: "9.5" },
  { name: "Valentina’s / Church Row", score: "9.3" },
  { name: "Snow’s BBQ", score: "8.7" },
];

export function Scorecard() {
  return (
    <section id="scorecard" className="grain bg-charcoal px-5 py-14 text-bone mob:px-6 mob:py-22">
      <div className="mx-auto max-w-[760px]">
        <h2 className="text-[clamp(2.2rem,6vw,3rem)] text-bone">
          The Scorecard
        </h2>
        <p className="mt-2 mb-12 max-w-[50ch] text-[1.05rem] text-smoke">
          A totally biased, zero-regrets comparison against the names everyone in
          Austin already knows.
        </p>

        <div className="border border-ticket-edge bg-ticket">
          {RANKINGS.map((row, index) => {
            const accent = row.winner ? "text-ember-bright" : "text-smoke";

            return (
              <div
                key={row.name}
                className={`grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b p-[1.1rem] last:border-b-0 mob:grid-cols-[2.5rem_1fr_auto] mob:gap-5 mob:px-6 mob:py-[1.35rem] ${
                  row.winner
                    ? "border-ticket-rule-winner bg-[linear-gradient(90deg,rgba(193,68,14,0.16),transparent)]"
                    : "border-ticket-rule"
                }`}
              >
                <span className={`font-display text-[1.4rem] ${accent}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[1.35rem] font-semibold">
                  {row.name}
                  {row.place && (
                    <span className="mt-[0.15rem] block font-body text-[0.85rem] italic text-smoke">
                      {row.place}
                    </span>
                  )}
                </span>
                <span
                  className={`font-display text-[1.75rem] font-bold ${accent}`}
                >
                  {row.score}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-[0.95rem] italic text-smoke">
          Scores courtesy of one very well-traveled brisket eater.
        </p>
      </div>
    </section>
  );
}
