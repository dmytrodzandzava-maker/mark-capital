import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import PortfolioAlt from "@/components/PortfolioAlt";
import StatsBand from "@/components/StatsBand";
import Team from "@/components/Team";
import Transactions from "@/components/Transactions";
import Verticals from "@/components/Verticals";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <StatsBand />
        <Team />
        <Verticals />
        <PortfolioAlt />
        <Transactions />
        <Insights />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
