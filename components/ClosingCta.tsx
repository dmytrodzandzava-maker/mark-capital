import Image from "next/image";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import Button from "./Button";

export default function ClosingCta() {
  return (
    <section
      id="contact"
      data-header-theme="dark"
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink"
    >
      <Image
        src="/images/abstract/glass2.webp"
        alt="Abstract blue glass render"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8">
        <h2 className="max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] text-white">
          <RevealText>Partner with MARK</RevealText>
        </h2>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
            Whether you&rsquo;re an investor, press, or exploring a career at
            MARK, we&rsquo;d like to hear from you.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-10">
          <div className="inline-block rounded-xs border border-white/15 bg-white/10 p-1.5 backdrop-blur-xl [will-change:backdrop-filter]">
            <Button href="mailto:info@thisismark.com" variant="light" className="border-0">
              Get in Touch
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
