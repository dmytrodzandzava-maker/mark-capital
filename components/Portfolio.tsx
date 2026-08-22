"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { portfolioHighlights, type PortfolioHighlight } from "@/lib/data";

function PortfolioCard({ item, index }: { item: PortfolioHighlight; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <div ref={ref} className="relative h-screen">
      <div className="sticky top-0 h-screen overflow-hidden" style={{ zIndex: index + 1 }}>
        <motion.div style={{ scale }} className="relative h-full w-full origin-top">
          <Link
            href={`/portfolio/${item.slug}`}
            className="group relative block h-full w-full overflow-hidden bg-ink"
          >
            <Image
              src={item.image}
              alt={`${item.name}, ${item.location} — a MARK development`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10" />
            <motion.div style={{ opacity: dim }} className="absolute inset-0 bg-ink" />

            <div className="relative z-10 flex h-full w-full flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-24">
              <div className="mx-auto w-full max-w-[1400px]">
                <span className="font-serif-num text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 max-w-2xl text-[clamp(2rem,5.5vw,4rem)] font-normal leading-[1.05] text-white">
                  {item.name}
                </h3>
                <div className="mt-2 text-sm text-white/60">
                  {item.location} · {item.tag}
                </div>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                  {item.description}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm text-white transition-colors group-hover:text-accent-40">
                  View Project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" data-header-theme="dark" className="relative bg-ink">
      <div className="px-5 pb-12 pt-24 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Eyebrow light>Portfolio</Eyebrow>
          </Reveal>
          <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4.5vw,3.375rem)] font-normal leading-[1.15] text-white">
            <RevealText delay={0.05}>Landmark assets, reimagined.</RevealText>
          </h2>
        </div>
      </div>

      {portfolioHighlights.map((item, i) => (
        <PortfolioCard key={item.slug} item={item} index={i} />
      ))}
    </section>
  );
}
