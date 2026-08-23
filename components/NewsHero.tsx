import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import type { Insight } from "@/lib/data";

const TAG_LABELS: Record<string, string> = {
  "MARK NEWS": "Mark News",
  "PRESS RELEASE": "Press Release",
};

export default function NewsHero({ featured }: { featured: Insight }) {
  return (
    <section data-header-theme="light" className="bg-white px-5 pb-16 pt-40 sm:px-8 sm:pb-20 sm:pt-48">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <Eyebrow>News</Eyebrow>
        </Reveal>
        <h1 className="mt-6 text-[clamp(2.5rem,7vw,5.5rem)] font-normal leading-[1.02] text-ink">
          <RevealText delay={0.05}>News &amp; Insights</RevealText>
        </h1>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-14 max-w-[1400px] sm:mt-16">
        <div className="grid grid-cols-1 overflow-hidden rounded-xs lg:grid-cols-2">
          <div className="flex min-h-[320px] flex-col justify-between gap-10 bg-ink p-8 sm:min-h-[420px] sm:p-12">
            <div className="flex flex-wrap gap-2">
              <span className="inline-block rounded-full bg-white/10 px-2.5 py-1 text-[11px] uppercase tracking-wide text-white/80">
                {TAG_LABELS[featured.tag] ?? featured.tag}
              </span>
              <span className="inline-block rounded-full bg-white/10 px-2.5 py-1 text-[11px] uppercase tracking-wide text-white/80">
                {featured.date}
              </span>
            </div>

            <div>
              <h2 className="max-w-xl text-[clamp(1.5rem,3.2vw,2.5rem)] font-normal leading-[1.15] text-white">
                {featured.title}
              </h2>
              <a
                href={featured.href}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2.5 rounded-xs border border-white/40 px-6 py-3.5 text-sm text-white transition-colors duration-200 ease-out hover:bg-white hover:text-ink md:text-base"
              >
                Read Now
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          <div className="relative min-h-[280px] sm:min-h-[420px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
