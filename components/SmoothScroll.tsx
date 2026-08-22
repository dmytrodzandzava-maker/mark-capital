"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Safari's trackpad already applies its own inertia/momentum to wheel
  // scrolling. Layering Lenis's full-strength wheel smoothing on top of that
  // native momentum double-smoothed the motion (felt "dizzy"), so it was
  // previously disabled outright for Safari — but that removed the glide
  // entirely, leaving plain native scroll. The middle ground: keep Lenis's
  // easing on, but shrink how far each wheel tick pushes the target (lower
  // wheelMultiplier) and how long it takes to catch up (lower duration), so
  // its glide settles before it can stack with the trackpad's own momentum.
  const [wheelTuning, setWheelTuning] = useState({ duration: 1.2, wheelMultiplier: 1 });
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) setWheelTuning({ duration: 0.8, wheelMultiplier: 0.65 });
  }, []);

  useEffect(() => {
    // Skip on mount so a direct link with a #hash (e.g. /#portfolio) still
    // lands where the browser's native anchor scroll put it. Only reset on
    // actual client-side navigations between routes.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: wheelTuning.duration,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: wheelTuning.wheelMultiplier,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
