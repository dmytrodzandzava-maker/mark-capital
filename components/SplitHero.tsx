import Image from "next/image";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

const headlineClasses =
  "w-full uppercase text-[clamp(2.75rem,8vw,7rem)] font-normal leading-[1.02] tracking-tight";

export default function SplitHero({
  eyebrow,
  headlineTop,
  headlineBottom,
  paragraph,
  image,
  imageAlt,
}: {
  eyebrow: string;
  headlineTop: string;
  headlineBottom: string;
  paragraph: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      <div
        data-header-theme="light"
        className="absolute inset-x-0 top-0 flex h-[38%] items-end bg-light px-5 pb-6 sm:px-8 sm:pb-10"
      >
        <h1 className={`${headlineClasses} text-left text-accent`}>
          <RevealText delay={0.2}>{headlineTop}</RevealText>
        </h1>
      </div>

      <div
        data-header-theme="dark"
        className="absolute inset-x-0 bottom-0 h-[62%] overflow-hidden bg-ink"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-accent mix-blend-color" />
        <div className="halftone-dots absolute inset-0 opacity-60 mix-blend-overlay" />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/25" />

        <div className="relative z-10 flex h-full w-full flex-col justify-between px-5 pt-6 pb-8 sm:px-8 sm:pt-10 sm:pb-12">
          <div className={`${headlineClasses} text-right text-white`}>
            <RevealText delay={0.35}>{headlineBottom}</RevealText>
          </div>

          <div className="max-w-full sm:max-w-sm">
            <Reveal delay={0.5}>
              <span className="text-xs uppercase tracking-widest text-white/70">{eyebrow}</span>
              <p className="mt-3 text-sm leading-relaxed text-white sm:text-base">{paragraph}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
