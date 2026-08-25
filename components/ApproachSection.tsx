"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { approachPillars } from "@/lib/data";

export default function ApproachSection() {
  const [active, setActive] = useState(0);
  const pillar = approachPillars[active];

  return (
    <section data-header-theme="dark" className="bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <Eyebrow light>How We Operate</Eyebrow>
        </Reveal>
        <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] text-white">
          <RevealText delay={0.05}>Four disciplines, one process.</RevealText>
        </h2>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            Every MARK investment moves through the same four disciplines,
            each refined through two decades of acquisitions, asset
            management, and development across Europe.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <div className="inline-block rounded-xs border border-white/15 bg-white/10 p-1.5 backdrop-blur-xl [will-change:backdrop-filter]">
            <Button href="/contact" variant="light" className="border-0">
              Contact Us
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:mt-16 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-24">
          <Reveal delay={0.2}>
            <div className="flex flex-col">
              {approachPillars.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setActive(i)}
                  className={`group relative flex cursor-pointer flex-col gap-1 border-l py-6 pl-6 text-left transition-colors duration-300 ${
                    active === i ? "border-transparent" : "border-white/10"
                  }`}
                >
                  {active === i && (
                    <motion.div
                      layoutId="approach-indicator"
                      className="absolute inset-y-0 left-0 w-px bg-accent"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span
                    className={`text-xl transition-colors duration-300 sm:text-2xl ${
                      active === i ? "text-white" : "text-white/40 group-hover:text-white/70"
                    }`}
                  >
                    {p.title}
                  </span>
                  <span
                    className={`text-sm transition-colors duration-300 ${
                      active === i ? "text-white/60" : "text-white/25"
                    }`}
                  >
                    {p.subtitle}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="relative max-w-md overflow-hidden rounded-xs border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-lg text-white sm:text-xl">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    {pillar.description}
                  </p>

                  <span className="mt-8 block text-xs uppercase tracking-widest text-white/40">
                    Key Components
                  </span>
                  <ul className="mt-3 space-y-2.5">
                    {pillar.components.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span className="text-sm leading-relaxed text-white/80">{c}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
