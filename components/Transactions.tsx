"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { transactions, proofStats } from "@/lib/data";

export default function Transactions() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <section
      id="portfolio"
      data-header-theme="light"
      className="bg-light px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow>Portfolio</Eyebrow>
            </Reveal>
            <h2 className="mt-6 max-w-xl text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-[1.15] text-ink">
              <RevealText delay={0.05}>Recent Transactions</RevealText>
            </h2>
          </div>

          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="rounded-xs border border-hairline p-3 text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="rounded-xs border border-hairline p-3 text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3">
          {proofStats.map((s) => (
            <div key={s.label} className="rounded-xs border border-hairline bg-white p-6">
              <span className="font-serif-num text-3xl text-accent">{s.value}</span>
              <p className="mt-2 text-sm text-ink/60">{s.label}</p>
            </div>
          ))}
        </Reveal>

        <div
          ref={scroller}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:mt-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {transactions.map((t) => (
            <div
              key={t.name}
              className="w-[300px] shrink-0 snap-start rounded-xs border border-hairline bg-white p-8"
            >
              {t.figure && (
                <div className="font-serif-num mb-4 text-3xl text-ink">{t.figure}</div>
              )}
              <div className="text-xs uppercase tracking-wide text-accent">{t.tag}</div>
              <div className="mt-2 text-lg text-ink">{t.name}</div>
              <div className="text-sm text-ink/50">{t.location}</div>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">{t.description}</p>
            </div>
          ))}
        </div>

        <Reveal delay={0.05}>
          <a
            href="#portfolio"
            className="mt-4 inline-block text-sm text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-ink"
          >
            View All →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
