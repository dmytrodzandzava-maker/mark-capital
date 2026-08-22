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
          className="flex min-h-[100svh] flex-col justify-center bg-ink px-5 py-40 sm:px-8"
        >
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="font-serif-num text-[clamp(4rem,14vw,10rem)] leading-none text-white/15">
              404
            </div>
            <h1 className="mt-6 max-w-2xl text-[clamp(2rem,6vw,4rem)] font-normal leading-[1.05] text-white">
              <RevealText>This page has moved on.</RevealText>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
              The page you&rsquo;re looking for doesn&rsquo;t exist or has
              been moved. Let&rsquo;s get you back on track.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
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
