import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import VerticalRelatedCases from "./VerticalRelatedCases";
import { portfolioHighlights } from "@/lib/data";

const flagshipProjects = portfolioHighlights.slice(0, 3);

// Experimental alt layout for the homepage Portfolio section, matching the
// grid + vertical-parallax treatment used on /verticals instead of the
// sticky-stacking cards in Portfolio.tsx. Kept as a separate component so
// swapping back is a one-line import change in app/page.tsx.
export default function PortfolioAlt() {
  return (
    <section
      id="portfolio"
      data-header-theme="light"
      className="bg-light px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Eyebrow>Portfolio</Eyebrow>
            </Reveal>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4.5vw,3.375rem)] font-normal leading-[1.15] text-ink">
              <RevealText delay={0.05}>Landmark assets, reimagined.</RevealText>
            </h2>
          </div>

          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2.5 rounded-xs bg-accent px-6 py-4 text-sm text-white transition-colors hover:bg-ink"
            >
              View All Projects
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12 sm:mt-14">
          <VerticalRelatedCases items={flagshipProjects} />
        </Reveal>
      </div>
    </section>
  );
}
