"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Insight } from "@/lib/data";

const ALL = "All";

const TAG_LABELS: Record<string, string> = {
  "MARK NEWS": "Mark News",
  "PRESS RELEASE": "Press Release",
};

function InsightCard({ item }: { item: Insight }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-xs bg-light transition-colors duration-300 hover:bg-accent"
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="inline-block rounded-xs bg-ink/5 px-2.5 py-1 text-[11px] uppercase tracking-wide text-ink/60 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white/80">
            {TAG_LABELS[item.tag] ?? item.tag}
          </span>
          <span className="inline-block rounded-xs bg-ink/5 px-2.5 py-1 text-[11px] uppercase tracking-wide text-ink/60 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white/80">
            {item.date}
          </span>
        </div>

        <p className="mt-4 text-lg leading-snug text-ink transition-colors duration-300 group-hover:text-white sm:text-xl">
          {item.title}
        </p>
      </div>
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
        <div className="flex flex-col gap-4 lg:sticky lg:top-32 lg:self-start">
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {filtered.map((item) => (
            <InsightCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
