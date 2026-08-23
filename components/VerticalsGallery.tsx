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
  const [hovered, setHovered] = useState<number | null>(null);
  const activeVertical = verticals[active];

  return (
    <div className="grid grid-cols-1 items-stretch gap-2 lg:grid-cols-2">
      <div className="relative h-[360px] w-full overflow-hidden rounded-xs bg-ink/5 sm:h-[480px] lg:sticky lg:top-32 lg:h-auto lg:self-stretch">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeVertical.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

      <div className="grid grid-cols-1 overflow-hidden rounded-xs sm:grid-cols-2">
        {verticals.map((v, i) => (
          <Link
            key={v.slug}
            href={`/verticals/${v.slug}`}
            onMouseEnter={() => {
              setActive(i);
              setHovered(i);
            }}
            onMouseLeave={() => setHovered(null)}
            className={`group relative flex min-h-[260px] flex-col justify-between gap-8 border-hairline p-6 transition-colors duration-300 sm:min-h-[320px] sm:p-10 ${
              i < 2 ? "border-b" : ""
            } ${i === 1 ? "sm:border-b-0 sm:border-r" : ""} ${i === 0 ? "sm:col-span-2" : ""} ${
              active === i ? "text-white" : "text-ink"
            }`}
          >
            {active === i && (
              <motion.div
                layoutId="active-vertical-bg"
                className="absolute inset-0 bg-ink"
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
              />
            )}

            <div className="relative z-10">
              <span
                className={`font-serif-num text-2xl transition-colors duration-300 ${
                  active === i ? "text-white/50" : "text-ink/30"
                }`}
              >
                {v.index}
              </span>
            </div>

            <AnimatePresence>
              {hovered === i && (
                <motion.span
                  key="arrow-box"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "top right" }}
                  className="absolute right-px top-px z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-xs bg-white sm:h-20 sm:w-20"
                >
                  <ArrowUpRight size={32} strokeWidth={1.5} className="text-ink" />
                </motion.span>
              )}
            </AnimatePresence>

            <div className="relative z-10">
              <span
                className={`text-xs uppercase tracking-widest transition-colors duration-300 ${
                  active === i ? "text-white/50" : "text-ink/40"
                }`}
              >
                {v.subtitle}
              </span>
              <div className="mt-2 text-xl sm:text-2xl">{v.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
