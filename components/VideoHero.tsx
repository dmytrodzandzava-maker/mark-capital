import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

export default function VideoHero({
  videoSrc,
  eyebrow,
  heading,
  paragraph,
}: {
  videoSrc: string;
  eyebrow: string;
  heading: string;
  paragraph: string;
}) {
  return (
    <section
      data-header-theme="dark"
      className="relative overflow-hidden bg-ink px-5 pb-20 pt-40 sm:px-8 sm:pb-28 sm:pt-48"
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
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <Reveal>
          <Eyebrow light>{eyebrow}</Eyebrow>
        </Reveal>
        <h1 className="mt-6 max-w-3xl text-[44px] font-normal leading-[1.05] text-white">
          <RevealText delay={0.05}>{heading}</RevealText>
        </h1>
        <Reveal delay={0.15} className="mt-8 max-w-xl">
          <p className="text-base leading-relaxed text-white/70 md:text-lg">{paragraph}</p>
        </Reveal>
      </div>
    </section>
  );
}
