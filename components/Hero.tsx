import { ChevronDown } from "lucide-react";
import Image from "next/image";
import RevealText from "./RevealText";

export default function Hero() {
  return (
    <section
      id="top"
      data-header-theme="dark"
      className="relative flex h-screen min-h-[720px] w-full items-end overflow-hidden bg-ink"
    >
      <Image
        src="/images/hero/dawn-mareterra.jpg"
        alt="Mareterra, Monaco, at dawn — a MARK development"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-24">
        <h1 className="max-w-4xl font-sans text-[clamp(2.75rem,8vw,7rem)] font-normal leading-[1.02] tracking-tight text-white">
          <RevealText delay={0.2}>Making our MARK</RevealText>
        </h1>
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
