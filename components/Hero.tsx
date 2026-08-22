"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import RevealText from "./RevealText";
import { SUPPORTING_LINE } from "@/lib/data";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // autoPlay can start playback before hydration attaches React's event
    // listeners, so the "playing" event fires and is missed entirely if we
    // only listen for it as a prop. Check the element's own state directly
    // first — if it's already playing by the time this effect runs, mark it
    // ready immediately instead of waiting on an event that already fired.
    if (!video.paused) {
      setVideoReady(true);
      return;
    }
    const markReady = () => setVideoReady(true);
    video.addEventListener("playing", markReady, { once: true });
    return () => video.removeEventListener("playing", markReady);
  }, []);

  return (
    <section
      id="top"
      data-header-theme="dark"
      className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-ink"
    >
      {/* Stays underneath permanently — the video crossfades in over it once it's
          actually playing, instead of popping in and replacing it outright. */}
      <Image
        src="/images/hero/dawn-mareterra.jpg"
        alt="Mareterra, Monaco, at dawn — a MARK development"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-24">
        <h1 className="max-w-4xl font-sans text-[clamp(2.75rem,8vw,7rem)] font-normal leading-[1.02] tracking-tight text-white">
          <RevealText delay={0.2}>Making our MARK</RevealText>
        </h1>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80 md:hidden">
          <RevealText delay={0.35}>{SUPPORTING_LINE}</RevealText>
        </p>
      </div>

      <div className="absolute bottom-8 right-5 z-10 flex flex-col items-center gap-2 text-white/70 sm:right-8">
        <span className="text-xs tracking-widest uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
