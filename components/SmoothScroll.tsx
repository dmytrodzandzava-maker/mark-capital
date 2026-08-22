"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import type { LenisOptions } from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

const defaultTuning: Partial<LenisOptions> = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  wheelMultiplier: 1,
};

// Chrome's trackpad wheel events are infrequent enough that a fresh
// duration/easing tween per event reads as one continuous glide. Safari
// fires wheel events for the same gesture more often, so each one restarts
// the tween before the last finishes — the animation keeps getting
// interrupted and re-accelerated mid-flight, which is what reads as
// "dizzy" rather than smooth, no matter how short the tween is made.
// Dropping duration/easing switches Lenis to its lerp (exponential damping)
// mode instead: it continuously chases the accumulating scroll target every
// frame rather than replaying a tween per event, so repeated events just
// feed the same steady chase instead of restarting it.
const safariTuning: Partial<LenisOptions> = {
  lerp: 0.1,
  wheelMultiplier: 1,
};

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  const [tuning, setTuning] = useState(defaultTuning);
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) setTuning(safariTuning);
  }, []);

  useEffect(() => {
    // Let our own logic below own the scroll position instead of the
    // browser's history-restoration heuristics, which is what was landing
    // reloads at "random" places — especially on mobile, where fonts and
    // images shift layout as they load, so whatever position the browser
    // tried to restore no longer lines up with the freshly laid-out page.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      // On mount, a direct link with a #hash (e.g. /#portfolio) should still
      // land where the browser's native anchor scroll puts it. Without a
      // hash, force a deterministic top-of-page instead of leaving whatever
      // the browser's (now-disabled-going-forward) restoration left behind.
      if (!window.location.hash) {
        lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);
      }
      return;
    }
    // Actual client-side navigations between routes always reset to top.
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        smoothWheel: true,
        touchMultiplier: 1.5,
        ...tuning,
      }}
    >
      {children}
    </ReactLenis>
  );
}
