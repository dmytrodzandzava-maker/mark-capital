import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      data-header-theme="light"
      className="bg-white px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <Eyebrow as="h2">This is MARK</Eyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-6 max-w-5xl text-[clamp(1.75rem,4.2vw,3rem)] font-normal leading-[1.2] text-ink">
            MARK is an independent, pan-European real estate investment and
            asset manager that has deployed more than €20bn of private
            capital since it was founded in 2004. Institutional investors,
            sovereign wealth funds, and family offices are served through
            on-the-ground teams in each target market.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-[1fr_1fr] md:gap-16">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/about-us"
                className="flex-1 rounded-xs bg-light px-6 py-6 text-base text-ink transition-colors hover:bg-ink hover:text-white"
              >
                About Us →
              </a>
              <a
                href="#verticals"
                className="flex-1 rounded-xs bg-light px-6 py-6 text-base text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Verticals →
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base leading-relaxed text-ink/70 md:text-lg">
              MARK builds location-based strategies around a strong creative
              vision, paired with integrated development and asset
              management that keeps risk in check, while tracking macro
              themes that open new, institutionally under-served real estate
              categories. Local teams source attractive off-market
              opportunities directly, and a lean ownership structure lets the
              firm move quickly as market conditions shift.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
