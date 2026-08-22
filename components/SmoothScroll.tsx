"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Safari's trackpad already applies its own inertia/momentum to wheel
  // scrolling. Layering Lenis's wheel-driven easing on top of that native
  // momentum double-smooths the motion, which reads as loose and "dizzy"
  // rather than smooth. Chrome doesn't do this, so Lenis's wheel smoothing
  // is only disabled for Safari — native momentum takes over there instead.
  const [smoothWheel, setSmoothWheel] = useState(true);
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) setSmoothWheel(false);
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
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
