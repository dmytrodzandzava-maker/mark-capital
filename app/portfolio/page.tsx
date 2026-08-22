import type { Metadata } from "next";
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
          videoSrc="/videos/contact-header.mp4"
          eyebrow="Portfolio"
          heading="Our Portfolio"
          paragraph="We have successfully repositioned landmark assets across multiple cities, using deep asset management expertise to enhance value, drive rents, and attract a broader range of occupiers."
        />

        <section data-header-theme="light" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <PortfolioFilterGrid items={portfolioHighlights} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
