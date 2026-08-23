"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { verticals as verticalsData } from "@/lib/data";

export default function VerticalsGallery({
  verticals,
}: {
  verticals: typeof verticalsData;
}) {
  const [active, setActive] = useState(0);
  const activeVertical = verticals[active];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs bg-ink/5 lg:sticky lg:top-32 lg:self-start">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeVertical.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeVertical.image}
              alt={`${activeVertical.name} — ${activeVertical.subtitle}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {verticals.map((v, i) => (
          <Link
            key={v.slug}
            href={`/verticals/${v.slug}`}
            onMouseEnter={() => setActive(i)}
            className={`group flex flex-col justify-between gap-10 rounded-xs border p-8 transition-colors duration-300 sm:min-h-[280px] ${
              i === 2 ? "sm:col-span-2" : ""
            } ${
              active === i
                ? "border-ink bg-ink text-white"
                : "border-hairline text-ink hover:border-ink/30"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <span
                className={`text-xs uppercase tracking-widest transition-colors duration-300 ${
                  active === i ? "text-white/50" : "text-ink/40"
                }`}
              >
                {v.subtitle}
              </span>
              <ArrowUpRight
                size={18}
                className={`shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  active === i ? "text-white/70" : "text-ink/30"
                }`}
              />
            </div>

            <div>
              <div className="text-2xl">{v.name}</div>
              <p
                className={`mt-3 text-sm leading-relaxed transition-colors duration-300 ${
                  active === i ? "text-white/70" : "text-ink/60"
                }`}
              >
                {v.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
