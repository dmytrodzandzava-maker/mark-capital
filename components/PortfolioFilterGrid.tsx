"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import DuotoneImage from "./DuotoneImage";
import type { PortfolioHighlight } from "@/lib/data";

const ALL = "All";

function chunk<T>(items: T[], size: number): T[][] {
  const groups: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    groups.push(items.slice(i, i + size));
  }
  return groups;
}

function PortfolioCard({
  item,
  index,
  tall,
}: {
  item: PortfolioHighlight;
  index: number;
  tall?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/portfolio/${item.slug}`} className="group block">
        <div
          className={`relative w-full overflow-hidden rounded-xs bg-ink/5 ${
            tall ? "aspect-[4/5]" : "aspect-[4/3]"
          }`}
        >
          <DuotoneImage
            src={item.image}
            alt={`${item.name}, ${item.location}`}
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
            interactive
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

function PortfolioGroup({ items, reverse }: { items: PortfolioHighlight[]; reverse: boolean }) {
  if (items.length === 1) {
    return <PortfolioCard item={items[0]} index={0} tall />;
  }

  const [large, ...rest] = items;

  return (
    <div
      className={`flex flex-col gap-10 md:items-start md:gap-8 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="md:w-3/5">
        <PortfolioCard item={large} index={0} tall />
      </div>
      <div className="flex flex-col gap-10 md:w-2/5">
        {rest.map((item, i) => (
          <div key={item.slug} className={i === 1 ? "md:mt-16" : ""}>
            <PortfolioCard item={item} index={i + 1} />
          </div>
        ))}
      </div>
    </div>
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

  const groups = useMemo(() => chunk(filtered, 3), [filtered]);

  return (
    <div>
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] text-ink">
        Our Portfolio{" "}
        <span className="text-ink/35">({filtered.length})</span>
      </h2>
      <div className="mt-8 h-px w-full bg-hairline" />

      <div className="mt-10 -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:hidden">
        {[ALL, ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`shrink-0 rounded-xs border px-4 py-2 text-sm transition-colors ${
              active === category
                ? "border-ink bg-ink text-white"
                : "border-hairline text-ink/50 hover:text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
        <div className="hidden lg:block">
          <div className="sticky top-32 flex flex-col gap-4">
            {[ALL, ...categories].map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`text-left text-base transition-colors ${
                  active === category ? "text-ink" : "text-ink/35 hover:text-ink/70"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-16 sm:gap-20">
          {groups.map((group, i) => (
            <PortfolioGroup key={group.map((item) => item.slug).join("-")} items={group} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
