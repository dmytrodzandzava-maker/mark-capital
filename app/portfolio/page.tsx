import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioFilterGrid from "@/components/PortfolioFilterGrid";
import VideoHero from "@/components/VideoHero";
import { portfolioHighlights } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "MARK's landmark assets across Europe — repositioned and created using deep asset management expertise to enhance value and attract a broader range of occupiers.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <VideoHero
          videoSrc="/videos/portfolio-hero.mp4"
          eyebrow="Portfolio"
          heading="Our Portfolio"
          paragraph="We have successfully created or repositioned a number of landmark assets in multiple cities, using our deep asset management expertise to reconfigure space to enhance value, drive rents and attract a broader range of occupiers."
        />

        <section data-header-theme="light" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <PortfolioFilterGrid items={portfolioHighlights} />
          </div>
        </section>

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
