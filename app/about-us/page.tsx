import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutHero from "@/components/AboutHero";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import TeamDirectory from "@/components/TeamDirectory";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MARK is a multi-platform investment manager with specialised strategies that run parallel to our closed-ended, value-add funds — a vertically integrated real estate business across Europe.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />

        <section data-header-theme="light" className="bg-white px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
            <Reveal>
              <div>
                <Eyebrow as="h2">Strategy</Eyebrow>
                <p className="mt-6 text-lg leading-relaxed text-ink/80 md:text-xl">
                  We create and execute location-based strategies that
                  combine a strong creative vision with integrated
                  development and asset management expertise that minimises
                  risk, while also developing macro-strategies that tap into
                  mega-trends and structural changes within real estate.
                </p>
                <p className="mt-5 text-base leading-relaxed text-ink/60">
                  This allows us to respond to growing demand from
                  institutional investors to gain exposure to emerging,
                  structurally supported asset classes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <Eyebrow as="h2">Our Approach</Eyebrow>
                <p className="mt-6 text-lg leading-relaxed text-ink/80 md:text-xl">
                  We use our network of teams with genuine local market
                  presence and knowledge to source attractive off-market
                  opportunities. Our ownership and management structure
                  allow us to move nimbly and respond quickly to market
                  conditions and emerging trends.
                </p>
                <p className="mt-5 text-base leading-relaxed text-ink/60">
                  Above all, we are experts at creating brands, whether at
                  an asset, location or portfolio level, which drive a
                  premium and create value for our partners.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section data-header-theme="dark" className="bg-ink px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1000px]">
            <Reveal>
              <Eyebrow light>Mark Team</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-serif mt-8 text-[clamp(1.5rem,3.2vw,2.5rem)] italic leading-[1.3] text-white">
                &ldquo;Our team of visionaries has hundreds of years combined
                experience across the industry. From acquisition and
                leasing, to marketing, financing and structuring, our people
                have a competitive edge in delivering excellence with every
                investment.&rdquo;
              </p>
            </Reveal>
          </div>
        </section>

        <section id="team" data-header-theme="light" className="bg-white px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Eyebrow>Leadership</Eyebrow>
            </Reveal>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] text-ink">
              <RevealText delay={0.05}>Our Team</RevealText>
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
                Local presence across 8 European offices, with
                full-lifecycle expertise from acquisition through asset and
                portfolio management.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-14 sm:mt-16">
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
                {team.map((member) => (
                  <Link key={member.slug} href={`/about-us/team/${member.slug}`} className="group">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xs bg-ink/5">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 text-base text-ink transition-colors group-hover:text-accent">
                      {member.name}
                    </div>
                    <div className="mt-0.5 text-sm leading-snug text-ink/50">
                      {member.title}
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section data-header-theme="light" className="bg-light px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Eyebrow>Directory</Eyebrow>
            </Reveal>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] text-ink">
              <RevealText delay={0.05}>The wider team.</RevealText>
            </h2>

            <Reveal delay={0.1} className="mt-14 sm:mt-16">
              <TeamDirectory />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
