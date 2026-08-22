import Image from "next/image";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

export default function AboutHero() {
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      <div data-header-theme="light" className="absolute inset-x-0 top-0 h-[38%] bg-light" />

      <div
        data-header-theme="dark"
        className="absolute inset-x-0 bottom-0 h-[62%] overflow-hidden bg-ink"
      >
        <Image
          src="/images/about-us-hero.jpg"
          alt="MARK, viewed from street level among the towers of a European city"
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-accent mix-blend-color" />
        <div className="halftone-dots absolute inset-0 opacity-60 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-x-0 top-[38%] bottom-0 z-10 flex flex-col justify-between px-5 pb-8 sm:px-8 sm:pb-12">
        <h1 className="-translate-y-[0.56em] text-[clamp(1.9rem,7vw,6.5rem)] font-normal leading-[0.95] tracking-tight">
          <span className="block text-right text-accent">
            <RevealText delay={0.2}>A Multi-Platform</RevealText>
          </span>
          <span className="block text-left text-white">
            <RevealText delay={0.35}>Investment Manager</RevealText>
          </span>
        </h1>

        <div className="max-w-full sm:ml-auto sm:max-w-sm">
          <Reveal delay={0.5}>
            <span className="text-xs uppercase tracking-widest text-white/70">About Us</span>
            <p className="mt-3 text-sm leading-relaxed text-white sm:text-base">
              As a vertically integrated real estate investment business, we
              have assets across multiple geographies and sectors, including
              retail, offices, residential and most recently, last-mile
              logistics.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
