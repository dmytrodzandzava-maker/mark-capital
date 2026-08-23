import type { Metadata } from "next";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InsightsFilterList from "@/components/InsightsFilterList";
import NewsHero from "@/components/NewsHero";
import { insights } from "@/lib/data";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "The latest news, press releases, and insights from MARK Capital Management across our investment platforms.",
  alternates: { canonical: "/news-insights" },
};

export default function NewsInsightsPage() {
  const featured = insights.find((item) => item.featured) ?? insights[0];
  const rest = insights.filter((item) => item !== featured);

  return (
    <>
      <Header />
      <main>
        <NewsHero featured={featured} />

        <section data-header-theme="light" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <InsightsFilterList items={rest} />
          </div>
        </section>
      </main>
      <ClosingCta />
      <Footer />
    </>
  );
}
