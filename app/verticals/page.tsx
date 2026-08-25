import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import VerticalRelatedCases from "@/components/VerticalRelatedCases";
import VerticalsGallery from "@/components/VerticalsGallery";
import VideoHero from "@/components/VideoHero";
import WhoWeAre from "@/components/WhoWeAre";
import { portfolioHighlights, verticals } from "@/lib/data";

const flagshipCases = portfolioHighlights.slice(0, 3);

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
        <VideoHero
          videoSrc="/videos/verticals-hero.mp4"
          theme="light"
          eyebrow="Verticals"
          heading="Our Verticals"
          paragraph="MARK invests thematically across three verticals, executed by local acquisitions, asset management, and development teams."
        />

        <section data-header-theme="light" className="bg-white px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-20">
          <div className="mx-auto max-w-[1400px]">
            <VerticalsGallery verticals={verticals} />
          </div>
        </section>

        <WhoWeAre
          buttons={[
            { href: "/about-us", label: "About Us →" },
            { href: "/contact", label: "Contact Us →", accent: true },
          ]}
        />
        <section data-header-theme="light" className="bg-light px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Eyebrow>Portfolio</Eyebrow>
            </Reveal>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] text-ink">
              <RevealText delay={0.05}>Landmark assets, reimagined.</RevealText>
            </h2>

            <Reveal delay={0.15} className="mt-12 sm:mt-14">
              <VerticalRelatedCases items={flagshipCases} />
            </Reveal>
          </div>
        </section>
      </main>
      <ClosingCta />
      <Footer />
    </>
  );
}
