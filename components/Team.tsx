"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { team } from "@/lib/data";

export default function Team() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="team"
      data-header-theme="light"
      className="relative bg-light px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <Eyebrow>Our People</Eyebrow>
        </Reveal>
        <h2 className="mt-6 max-w-3xl text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-[1.15] text-ink">
          <RevealText delay={0.05}>Our Team</RevealText>
        </h2>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            Local presence across 8 European offices, with full-lifecycle
            expertise from acquisition through asset and portfolio
            management.
          </p>
        </Reveal>

        {/* Mobile / tablet: photo grid — no hover to rely on, so show the images up front */}
        <Reveal delay={0.15} className="mt-14 lg:hidden">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
            {team.map((member) => (
              <Link key={member.name} href={`/about-us/team/${member.slug}`}>
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-xs bg-ink/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 text-base text-ink">{member.name}</div>
                <div className="mt-0.5 text-sm leading-snug text-ink/50">
                  {member.title} — {member.location}
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        {/* Desktop: hover-to-reveal row list */}
        <Reveal delay={0.15} className="mt-14 hidden md:mt-16 lg:block">
          <div className="border-t border-hairline">
            {team.map((member, i) => (
              <Link
                key={member.name}
                href={`/about-us/team/${member.slug}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative flex cursor-pointer flex-col items-start justify-between gap-1 border-b border-hairline py-6 transition-colors duration-300 sm:flex-row sm:items-center sm:py-8 ${
                  hovered === null
                    ? "text-ink/50"
                    : hovered === i
                      ? "text-ink"
                      : "text-ink/30"
                }`}
              >
                <span className="text-xl sm:text-2xl md:text-3xl">{member.name}</span>
                <span className="text-base text-current/80 sm:text-lg">
                  {member.title} — {member.location}
                </span>

                <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="relative h-72 w-56 overflow-hidden rounded-xs shadow-2xl"
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="224px"
                          className="object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
