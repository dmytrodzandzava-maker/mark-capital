import type { Metadata } from "next";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RevealText from "@/components/RevealText";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section
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
              <RevealText delay={0.2}>404</RevealText>
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80 sm:max-w-md sm:text-base">
              <RevealText delay={0.35}>
                This page has moved on, or never existed. Let&rsquo;s get you
                back on track.
              </RevealText>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/" variant="light">
                Back to Home
              </Button>
              <Button href="/contact" variant="light">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
