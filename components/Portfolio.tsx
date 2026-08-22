"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, type RefObject } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { portfolioHighlights, type PortfolioHighlight } from "@/lib/data";

const CARD_HEIGHT = 560;
const BASE_TOP = 96;
const STACK_STEP = 18;

function PortfolioCard({
  item,
  index,
  cardRef,
  nextCardRef,
  hasNext,
}: {
  item: PortfolioHighlight;
  index: number;
  cardRef: RefObject<HTMLDivElement | null>;
  nextCardRef: RefObject<HTMLDivElement | null>;
  hasNext: boolean;
}) {
  // Driven by the NEXT card's arrival, not this card's own scroll —
  // so this card visibly recedes exactly as the next one lands on top of it.
  const { scrollYProgress } = useScroll({
    target: nextCardRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.55]);
  const filter = useMotionTemplate`brightness(${brightness})`;

  return (
    <div
      ref={cardRef}
      className="sticky mb-5 sm:mb-6"
      style={{ top: BASE_TOP + index * STACK_STEP, height: CARD_HEIGHT, zIndex: index + 1 }}
    >
      {/* Scale + brightness apply here, on the same element that owns the frame
          (rounded corners, shadow, overflow-hidden) — so the image and the frame
          shrink together as one unit instead of the image shrinking inside a
          frame that stays full size. */}
      <motion.div
        style={hasNext ? { scale, filter } : undefined}
        className="relative h-full w-full origin-top overflow-hidden rounded-xs bg-ink shadow-2xl shadow-black/40"
      >
        <Link
          href={`/portfolio/${item.slug}`}
          className="group relative block h-full w-full overflow-hidden"
        >
          <Image
            src={item.image}
            alt={`${item.name}, ${item.location} — a MARK development`}
            fill
            priority={index === 0}
            quality={90}
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/5" />

          <div className="relative z-10 flex h-full w-full flex-col justify-end p-8 sm:p-12">
            <span className="font-serif-num text-[clamp(2rem,4.5vw,3rem)] leading-none text-white/30">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 max-w-xl text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.05] text-white">
              {item.name}
            </h3>
            <div className="mt-2 text-sm text-white/60">
              {item.location} · {item.tag}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
              {item.description}
            </p>
            <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-white transition-colors group-hover:text-accent-40">
              View Project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function Portfolio() {
  // Fixed at 3 real items — individual refs keep this lint-safe (no hooks in a loop).
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const refs = [ref0, ref1, ref2];

  return (
    <section id="portfolio" data-header-theme="light" className="relative bg-light">
      <div className="px-5 pb-10 pt-24 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Eyebrow>Portfolio</Eyebrow>
          </Reveal>
          <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4.5vw,3.375rem)] font-normal leading-[1.15] text-ink">
            <RevealText delay={0.05}>Landmark assets, reimagined.</RevealText>
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 sm:pb-32">
        {portfolioHighlights.map((item, i) => (
          <PortfolioCard
            key={item.slug}
            item={item}
            index={i}
            cardRef={refs[i]}
            nextCardRef={refs[i + 1]}
            hasNext={i < portfolioHighlights.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
