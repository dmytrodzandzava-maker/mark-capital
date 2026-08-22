import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { recognitions, stats } from "@/lib/data";

export default function StatsBand() {
  return (
    <section id="impact" className="bg-white">
      <div data-header-theme="light" className="px-5 pt-16 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Eyebrow as="h2">Core Stats</Eyebrow>
          </Reveal>
        </div>
      </div>

      <div data-header-theme="dark" className="relative mt-8 overflow-hidden">
        <div className="relative h-[640px] w-full sm:h-[700px]">
          <Image
            src="/images/abstract/blue-abstract-dark.jpg"
            alt="Abstract blue glass render"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/40" />

          <div className="relative z-10 flex h-full items-center px-5 sm:px-8">
            <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.1} y={64}>
                  <div className="flex h-full min-h-[240px] flex-col justify-between gap-10 rounded-xs border border-white/15 bg-white/10 p-8 backdrop-blur-md [will-change:backdrop-filter] sm:min-h-[300px] sm:p-10">
                    <span className="font-serif-num text-[clamp(2rem,5vw,3.5rem)] leading-none text-white">
                      {stat.value}
                    </span>
                    <div>
                      <div className="mb-3 h-px w-full bg-white/25" />
                      <span className="text-sm text-white/80">{stat.label}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div data-header-theme="light" className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Eyebrow as="h3">Recognition</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70 md:text-xl">
              Independently recognised for performance, governance, and
              responsible investment across the markets we operate in.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 sm:mt-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {recognitions.map((item) => (
                <div
                  key={item.name}
                  title={`${item.name} — ${item.detail}`}
                  className="flex h-32 items-center justify-center rounded-xs border border-hairline bg-white p-6 grayscale opacity-70 transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-36"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={item.image}
                      alt={`${item.name} — ${item.detail}`}
                      fill
                      sizes="220px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
