"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import type { PortfolioHighlight } from "@/lib/data";

const ALL = "All";
const COLUMN_COUNT = 3;

// Cycled by absolute card index so neighboring cards in a column vary in shape.
const ASPECTS = ["aspect-[4/5]", "aspect-[4/3]", "aspect-[1/1]", "aspect-[3/4]"];

// Per-column drift direction: -1 drifts up, 0 stays put, 1 drifts down.
// Three alternating patterns keep the rhythm readable without every row
// repeating the same still/up/down combination.
const DIRECTION_PATTERNS = [
  [0, -1, 1],
  [-1, 1, 1],
  [1, 0, -1],
];

function useParallaxY(direction: number) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const magnitude = direction === 0 ? 0 : 84;
  const range =
    direction < 0 ? [magnitude, -magnitude] : direction > 0 ? [-magnitude, magnitude] : [0, 0];
  const rawY = useTransform(scrollYProgress, [0, 1], range);
  const springY = useSpring(rawY, { stiffness: 90, damping: 24, mass: 0.4 });

  return { ref, y: prefersReducedMotion ? 0 : springY };
}

function PortfolioCard({
  item,
  aspectClass,
  direction,
}: {
  item: PortfolioHighlight;
  aspectClass: string;
  direction: number;
}) {
  const { ref, y } = useParallaxY(direction);

  return (
    <motion.div ref={ref} style={{ y }}>
      <Link href={`/portfolio/${item.slug}`} className="group block">
        <div className={`relative w-full overflow-hidden rounded-xs bg-ink/5 ${aspectClass}`}>
          <Image
            src={item.image}
            alt={`${item.name}, ${item.location}`}
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="mt-4 text-lg text-ink transition-colors group-hover:text-accent sm:text-xl">
          {item.name}
        </div>
        <div className="mt-1 text-xs uppercase tracking-widest text-ink/40">{item.tag}</div>
      </Link>
    </motion.div>
  );
}

// Static, uniform-size card for mobile — no parallax, no varied aspect ratio.
function MobileCard({ item }: { item: PortfolioHighlight }) {
  return (
    <Link href={`/portfolio/${item.slug}`} className="group block">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs bg-ink/5">
        <Image
          src={item.image}
          alt={`${item.name}, ${item.location}`}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4 text-lg text-ink transition-colors group-hover:text-accent">
        {item.name}
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-ink/40">{item.tag}</div>
    </Link>
  );
}

export default function PortfolioFilterGrid({ items }: { items: PortfolioHighlight[] }) {
  const categories = useMemo(
    () => [...new Set(items.map((item) => item.tag))].sort((a, b) => a.localeCompare(b)),
    [items]
  );
  const [active, setActive] = useState(ALL);

  const filtered = useMemo(
    () => (active === ALL ? items : items.filter((item) => item.tag === active)),
    [items, active]
  );

  const columns = useMemo(() => {
    const cols: { item: PortfolioHighlight; index: number }[][] = Array.from(
      { length: COLUMN_COUNT },
      () => []
    );
    filtered.forEach((item, index) => {
      cols[index % COLUMN_COUNT].push({ item, index });
    });
    return cols;
  }, [filtered]);

  return (
    <div>
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] text-ink">
        Our Portfolio <span className="text-ink/35">({filtered.length})</span>
      </h2>
      <div className="mt-8 h-px w-full bg-hairline" />

      <div className="grid grid-cols-1 gap-20 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div className="flex flex-col gap-4 lg:sticky lg:top-32">
          {[ALL, ...categories].map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`cursor-pointer text-left text-base transition-colors ${
                active === category ? "text-ink" : "text-ink/35 hover:text-ink/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-10 sm:hidden">
          {filtered.map((item) => (
            <MobileCard key={item.slug} item={item} />
          ))}
        </div>

        <div className="hidden sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-28">
              {column.map(({ item, index }) => {
                const rowGroup = Math.floor(index / COLUMN_COUNT);
                const pattern = DIRECTION_PATTERNS[rowGroup % DIRECTION_PATTERNS.length];
                return (
                  <PortfolioCard
                    key={item.slug}
                    item={item}
                    aspectClass={ASPECTS[index % ASPECTS.length]}
                    direction={pattern[colIndex]}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
