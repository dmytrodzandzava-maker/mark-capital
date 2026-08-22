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
    isFirstRender.current = false;
    // Always reset to top — on mount (reload) and on every later client-side
    // route change alike. A #hash left over from in-page nav clicks (e.g.
    // the header's "Portfolio" link sets /#portfolio without a full
    // navigation) previously made reloads jump back to that section instead
    // of just refreshing in place, which read as "stuck". In-page anchor
    // clicks don't change `pathname` (only the hash does), so they never run
    // through this effect and keep working via the browser's native anchor
    // scroll — only reload/first-load and real route changes land here.
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // On a fresh load with a leftover #hash, the browser's native
    // scroll-to-fragment can fire late — re-applied as images above the
    // target finish loading and push it further down the page — which was
    // overriding the reset above. Force it again once everything (images
    // included) has actually finished loading, since that's the last point
    // the browser would still try to adjust scroll for the fragment.
    const forceTop = () => {
      lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    };
    if (document.readyState === "complete") {
      forceTop();
      return;
    }
    window.addEventListener("load", forceTop, { once: true });
    return () => window.removeEventListener("load", forceTop);
  }, []);

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
