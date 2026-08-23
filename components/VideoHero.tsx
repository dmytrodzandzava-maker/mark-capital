import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

export default function VideoHero({
  videoSrc,
  eyebrow,
  heading,
  paragraph,
  theme = "dark",
}: {
  videoSrc: string;
  eyebrow: string;
  heading: string;
  paragraph: string;
  theme?: "dark" | "light";
}) {
  const isLight = theme === "light";

  return (
    <section
      data-header-theme={isLight ? "light" : "dark"}
      className={`relative overflow-hidden px-5 pb-20 pt-40 sm:px-8 sm:pb-28 sm:pt-48 ${
        isLight ? "bg-light" : "bg-ink"
      }`}
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
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        className={`absolute inset-0 bg-gradient-to-t ${
          isLight ? "from-white via-white/40 to-white/20" : "from-ink via-ink/40 to-ink/20"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <Reveal>
          <Eyebrow light={!isLight}>{eyebrow}</Eyebrow>
        </Reveal>
        <h1
          className={`mt-6 max-w-3xl text-[clamp(2.75rem,7vw,5.5rem)] font-normal leading-[1.05] ${
            isLight ? "text-ink" : "text-white"
          }`}
        >
          <RevealText delay={0.05}>{heading}</RevealText>
        </h1>
        <Reveal delay={0.15} className="mt-8 max-w-xl">
          <p
            className={`text-base leading-relaxed md:text-lg ${
              isLight ? "text-ink/70" : "text-white/70"
            }`}
          >
            {paragraph}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
