import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import VerticalsGallery from "@/components/VerticalsGallery";
import { verticals } from "@/lib/data";

export const metadata: Metadata = {
  title: "Verticals",
  description:
    "MARK invests thematically via three main verticals — Logistics, Residential, and Retail — with targeted strategies devised by sector specialists.",
  alternates: { canonical: "/verticals" },
};

export default function VerticalsPage() {
  return (
    <>
      <Header />
      <main>
        <section
          data-header-theme="light"
          className="bg-white px-5 pb-16 pt-40 sm:px-8 sm:pb-20 sm:pt-48"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Eyebrow>Verticals</Eyebrow>
            </Reveal>
            <h1 className="mt-6 max-w-2xl text-[clamp(2.75rem,7vw,5.5rem)] font-normal leading-[1.02] text-ink">
              <RevealText delay={0.05}>Thematic strategies, built by sector specialists.</RevealText>
            </h1>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
                MARK invests thematically across three verticals, executed by local
                acquisitions, asset management, and development teams.
              </p>
            </Reveal>
          </div>
        </section>

        <section data-header-theme="light" className="bg-white px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <VerticalsGallery verticals={verticals} />
          </div>
        </section>
      </main>
      <ClosingCta />
      <Footer />
    </>
  );
}
