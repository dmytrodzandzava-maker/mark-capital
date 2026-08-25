import Image from "next/image";
import type { Insight } from "@/lib/data";

const TAG_LABELS: Record<string, string> = {
  "MARK NEWS": "Mark News",
  "PRESS RELEASE": "Press Release",
  UNCATEGORIZED: "Uncategorized",
};

export default function InsightCard({ item }: { item: Insight }) {
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
