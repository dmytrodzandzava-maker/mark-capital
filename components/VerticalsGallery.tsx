"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { verticals as verticalsData } from "@/lib/data";

type Verticals = typeof verticalsData;

// Card border/span pattern depends on count: 3 items form a 2-over-1 grid
// (first card spans both columns), 2 items sit side by side in one row.
function cardLayoutClasses(i: number, count: number) {
  if (count >= 3) {
    return `${i < 2 ? "border-b" : ""} ${i === 1 ? "border-b-0 border-r" : ""} ${
      i === 0 ? "col-span-2" : ""
    }`;
  }
  return i < count - 1 ? "border-r" : "";
}

export default function VerticalsGallery({ verticals }: { verticals: Verticals }) {
  return (
    <>
      <DesktopGallery verticals={verticals} />
      <MobileGallery verticals={verticals} />
    </>
  );
}

function DesktopGallery({ verticals }: { verticals: Verticals }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const activeVertical = verticals[active];

  return (
    <div className="hidden items-stretch gap-2 lg:grid lg:grid-cols-2">
      <div className="relative h-[480px] w-full overflow-hidden rounded-xs bg-ink/5 lg:sticky lg:top-32 lg:h-auto lg:self-stretch">
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
              sizes="50vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-2 overflow-hidden rounded-xs">
        {verticals.map((v, i) => (
          <Link
            key={v.slug}
            href={`/verticals/${v.slug}`}
            onMouseEnter={() => {
              setActive(i);
              setHovered(i);
            }}
            onMouseLeave={() => setHovered(null)}
            className={`group relative flex min-h-[320px] flex-col justify-between gap-8 border-hairline p-10 transition-colors duration-300 ${cardLayoutClasses(
              i,
              verticals.length,
            )} ${active === i ? "text-white" : "text-ink"}`}
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
                  className="absolute right-px top-px z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-xs bg-white"
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
              <div className="mt-2 text-2xl">{v.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const HEADER_CLEARANCE = 80;
const FALLBACK_PINNED_HEIGHT = 600;
const FALLBACK_SCROLL_DISTANCE = 500;

function MobileGallery({ verticals }: { verticals: Verticals }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pinnedHeight, setPinnedHeight] = useState(FALLBACK_PINNED_HEIGHT);
  const [scrollDistance, setScrollDistance] = useState(FALLBACK_SCROLL_DISTANCE);
  const activeVertical = verticals[active];

  useEffect(() => {
    function measure() {
      if (pinnedRef.current) setPinnedHeight(pinnedRef.current.offsetHeight);
      if (trackRef.current?.parentElement) {
        setScrollDistance(
          Math.max(
            trackRef.current.scrollWidth - trackRef.current.parentElement.clientWidth,
            0,
          ),
        );
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.round(v * (verticals.length - 1));
    setActive(Math.min(Math.max(idx, 0), verticals.length - 1));
  });

  return (
    <div
      ref={wrapperRef}
      className="relative lg:hidden"
      style={{ height: pinnedHeight + scrollDistance }}
    >
      <div
        ref={pinnedRef}
        className="sticky flex flex-col gap-4"
        style={{ top: HEADER_CLEARANCE }}
      >
        <div className="relative h-[300px] w-full overflow-hidden rounded-xs bg-ink/5 sm:h-[380px]">
          <AnimatePresence initial={false}>
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
                sizes="100vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="overflow-hidden">
          <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-2">
            {verticals.map((v, i) => (
              <Link
                key={v.slug}
                href={`/verticals/${v.slug}`}
                className={`relative flex w-[80vw] shrink-0 flex-col justify-between gap-8 rounded-xs p-6 transition-colors duration-300 sm:w-[60vw] sm:p-8 ${
                  active === i ? "bg-ink text-white" : "bg-light text-ink"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`font-serif-num text-2xl transition-colors duration-300 ${
                      active === i ? "text-white/50" : "text-ink/30"
                    }`}
                  >
                    {v.index}
                  </span>
                  <AnimatePresence>
                    {active === i && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xs bg-white"
                      >
                        <ArrowUpRight size={24} strokeWidth={1.5} className="text-ink" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <span
                    className={`text-xs uppercase tracking-widest transition-colors duration-300 ${
                      active === i ? "text-white/50" : "text-ink/40"
                    }`}
                  >
                    {v.subtitle}
                  </span>
                  <div className="mt-2 text-xl">{v.name}</div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
