import { ChevronDown } from "lucide-react";
import RevealText from "./RevealText";
import { SUPPORTING_LINE } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      data-header-theme="dark"
      className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-ink"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
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

      <div className="absolute right-5 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-2 text-white/70 sm:right-8 sm:top-auto sm:bottom-8 sm:translate-y-0">
        <span className="text-xs tracking-widest uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
