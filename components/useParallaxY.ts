"use client";

import { useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

// Per-card drift direction: -1 drifts up, 0 stays put, 1 drifts down.
export default function useParallaxY(direction: number) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const magnitude = direction === 0 ? 0 : 84;
  const range =
    direction < 0 ? [magnitude, -magnitude] : direction > 0 ? [-magnitude, magnitude] : [0, 0];
  const rawY = useTransform(scrollYProgress, [0, 1], range);
  const springY = useSpring(rawY, { stiffness: 90, damping: 24, mass: 0.4 });

  return { ref, y: prefersReducedMotion ? 0 : springY };
}
