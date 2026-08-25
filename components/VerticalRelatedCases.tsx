"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioHighlight } from "@/lib/data";
import useParallaxY from "./useParallaxY";

// Matches the first row's drift pattern on the main Portfolio grid: still,
// up, down — so a 3-card row reads with the same rhythm as it does there.
const DIRECTIONS = [0, -1, 1];

function Card({ item, direction }: { item: PortfolioHighlight; direction: number }) {
  const { ref, y } = useParallaxY(direction);

  return (
    <motion.div ref={ref} style={{ y }}>
      <Link href={`/portfolio/${item.slug}`} className="group block">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs bg-ink/5">
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
        <div className="mt-1 text-xs uppercase tracking-widest text-ink/40">{item.location}</div>
      </Link>
    </motion.div>
  );
}

export default function VerticalRelatedCases({ items }: { items: PortfolioHighlight[] }) {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
      {items.map((item, i) => (
        <Card key={item.slug} item={item} direction={DIRECTIONS[i % DIRECTIONS.length]} />
      ))}
    </div>
  );
}
