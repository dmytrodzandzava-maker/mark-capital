import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { insights } from "@/lib/data";

export default function Insights() {
  return (
    <section
      id="insights"
      data-header-theme="light"
      className="bg-light px-5 pb-24 sm:px-8 md:pb-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <Eyebrow>Insights</Eyebrow>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-[320px_1fr] md:gap-16">
          <div className="md:sticky md:top-32 md:self-start">
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-ink">
              <RevealText delay={0.05}>Explore More News &amp; Insights</RevealText>
            </h2>
            <Reveal delay={0.15}>
              <Link
                href="/news-insights"
                className="mt-8 inline-flex items-center gap-2.5 rounded-xs bg-accent px-6 py-4 text-sm text-white transition-colors hover:bg-ink"
              >
                Explore More News &amp; Insights
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="border-t border-hairline">
              {insights.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-3 border-b border-hairline py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <div className="flex-1">
                    <span
                      className={`inline-block rounded-full px-2.5 py-1 text-[11px] tracking-wide uppercase ${
                        item.tag === "MARK NEWS"
                          ? "bg-accent/10 text-accent"
                          : "bg-ink/5 text-ink/60"
                      }`}
                    >
                      {item.tag}
                    </span>
                    <p className="mt-3 text-base leading-snug text-ink transition-colors group-hover:text-accent sm:text-lg">
                      {item.title}
                    </p>
                    <span className="mt-2 block text-sm text-ink/40">{item.date}</span>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-ink/30 transition-colors group-hover:text-accent"
                  />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
