"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { Insight } from "@/lib/data";

const ALL = "All";

const TAG_LABELS: Record<string, string> = {
  "MARK NEWS": "Mark News",
  "PRESS RELEASE": "Press Release",
};

function InsightRow({ item }: { item: Insight }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col gap-4 border-b border-hairline px-4 py-12 transition-colors duration-300 hover:bg-accent sm:flex-row sm:items-center sm:gap-10 sm:px-6 sm:py-16"
    >
      <div className="sm:w-28 sm:shrink-0">
        <span className="text-sm text-ink/40 transition-colors duration-300 group-hover:text-white/70">
          {item.date}
        </span>
        <div className="mt-1 text-[11px] uppercase tracking-widest text-ink/50 transition-colors duration-300 group-hover:text-white/60">
          {TAG_LABELS[item.tag] ?? item.tag}
        </div>
      </div>

      <p className="flex-1 text-lg leading-snug text-ink transition-colors duration-300 group-hover:text-white sm:text-xl">
        {item.title}
      </p>

      <div className="relative h-40 w-56 shrink-0 overflow-hidden rounded-xs">
        <Image src={item.image} alt={item.title} fill sizes="224px" className="object-cover" />
      </div>

      <ArrowUpRight
        size={20}
        className="hidden shrink-0 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block"
      />
    </a>
  );
}

export default function InsightsFilterList({ items }: { items: Insight[] }) {
  const categories = useMemo(
    () => [...new Set(items.map((item) => item.tag))].sort((a, b) => a.localeCompare(b)),
    [items]
  );
  const [active, setActive] = useState(ALL);

  const filtered = useMemo(
    () => (active === ALL ? items : items.filter((item) => item.tag === active)),
    [items, active]
  );

  return (
    <div>
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] text-ink">
        Latest News <span className="text-ink/35">({filtered.length})</span>
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
              {category === ALL ? ALL : (TAG_LABELS[category] ?? category)}
            </button>
          ))}
        </div>

        <div className="border-t border-hairline">
          {filtered.map((item) => (
            <InsightRow key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
