import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { verticals } from "@/lib/data";

export default function Verticals() {
  return (
    <section
      id="verticals"
      data-header-theme="dark"
      className="bg-ink px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <Eyebrow light>Verticals</Eyebrow>
        </Reveal>
        <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4.5vw,3.375rem)] font-normal leading-[1.15] text-white">
          <RevealText delay={0.05}>Thematic strategies, built by sector specialists.</RevealText>
        </h2>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            MARK invests thematically across three verticals, executed by
            local acquisitions, asset management, and development teams.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 md:mt-16">
          <div className="border-t border-hairline-light">
            {verticals.map((v) => (
              <Link
                key={v.index}
                href={`/verticals/${v.slug}`}
                className="group flex flex-col gap-6 border-b border-hairline-light py-8 transition-colors duration-300 hover:bg-white/[0.03] md:flex-row md:items-center md:gap-10 md:py-12 md:px-6 md:-mx-6"
              >
                <div className="md:w-[220px] shrink-0">
                  <div className="flex items-center gap-2 text-xl text-white transition-colors md:text-2xl">
                    {v.name}
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-40"
                    />
                  </div>
                  <div className="mt-1 text-sm text-accent-40">{v.subtitle}</div>
                </div>

                <div className="flex-1 space-y-3 text-white/70">
                  <p className="text-sm leading-relaxed sm:text-base">{v.description}</p>
                  <p className="text-sm leading-relaxed sm:text-base">{v.description2}</p>
                </div>

                <div className="font-serif-num text-[clamp(3rem,8vw,6rem)] leading-none text-white/15 transition-colors duration-300 group-hover:text-white/30 md:w-[180px] md:text-right">
                  {v.index}
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
