import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import VerticalsGallery from "@/components/VerticalsGallery";
import VideoHero from "@/components/VideoHero";
import WhoWeAre from "@/components/WhoWeAre";
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

        <WhoWeAre secondaryLink={{ href: "/portfolio", label: "Portfolio →" }} />
        <Portfolio />
      </main>
      <ClosingCta />
      <Footer />
    </>
  );
}
