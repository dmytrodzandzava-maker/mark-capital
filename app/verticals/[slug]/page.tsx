import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InsightCard from "@/components/InsightCard";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import SplitHero from "@/components/SplitHero";
import VerticalRelatedCases from "@/components/VerticalRelatedCases";
import VerticalsGallery from "@/components/VerticalsGallery";
import { insights, portfolioHighlights, verticals } from "@/lib/data";

export function generateStaticParams() {
  return verticals.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vertical = verticals.find((v) => v.slug === slug);
  if (!vertical) return {};

  const title = `${vertical.name} — ${vertical.subtitle}`;
  return {
    title,
    description: vertical.description,
    alternates: { canonical: `/verticals/${vertical.slug}` },
    openGraph: { title, description: vertical.description },
    twitter: { title, description: vertical.description },
  };
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vertical = verticals.find((v) => v.slug === slug);
  if (!vertical) notFound();

  const others = verticals.filter((v) => v.slug !== vertical.slug);
  const relatedCases = portfolioHighlights
    .filter((item) => item.verticals?.includes(vertical.slug))
    .slice(0, 3);
  const relatedNews = insights
    .filter((item) => item.verticals?.includes(vertical.slug))
    .slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <SplitHero
          eyebrow={vertical.subtitle}
          headlineTop={vertical.heroHeadlineTop}
          headlineBottom={vertical.heroHeadlineBottom}
          paragraph={vertical.heroParagraph}
          image={vertical.heroImage}
          imageAlt={`${vertical.name} — ${vertical.subtitle}`}
        />

        <section data-header-theme="light" className="bg-white px-5 pt-16 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Link
                href="/verticals"
                className="inline-flex items-center gap-2 text-sm text-ink/50 transition-colors hover:text-ink"
              >
                <ArrowLeft size={15} />
                Back to Verticals
              </Link>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <Reveal delay={0.05}>
                <Eyebrow as="h2">{vertical.name}</Eyebrow>
                <p className="mt-6 text-lg leading-relaxed text-ink/80 md:text-xl">
                  {vertical.description}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="space-y-5 md:mt-[3.75rem]">
                  <p className="text-base leading-relaxed text-ink/60">{vertical.description2}</p>
                  {vertical.description3 && (
                    <p className="text-base leading-relaxed text-ink/60">{vertical.description3}</p>
                  )}
                  {vertical.websiteLink && (
                    <a
                      href={vertical.websiteLink.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-ink"
                    >
                      {vertical.websiteLink.label}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>
              </Reveal>
            </div>

            {vertical.facts && vertical.facts.length > 0 && (
              <Reveal delay={0.15}>
                <div className="mt-14 grid grid-cols-2 gap-y-10 border-t border-hairline pt-10 sm:grid-cols-4">
                  {vertical.facts.map((fact, i) => (
                    <div
                      key={fact.label}
                      className={`${i % 2 !== 0 ? "border-l border-hairline pl-6" : "pl-0"} ${
                        i % 2 !== 1 ? "pr-6" : "pr-0"
                      } ${
                        i % 4 !== 0
                          ? "sm:border-l sm:border-hairline sm:pl-8"
                          : "sm:border-l-0 sm:pl-0"
                      } ${i % 4 !== 3 ? "sm:pr-8" : "sm:pr-0"}`}
                    >
                      <div className="font-serif-num text-[clamp(1.75rem,4vw,3rem)] leading-none text-ink">
                        {fact.value}
                      </div>
                      <div className="mt-3 text-sm leading-relaxed text-ink/50">{fact.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {vertical.awardHighlight && (
              <Reveal delay={0.2}>
                <a
                  href={vertical.awardHighlight.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-14 flex flex-col gap-6 rounded-xs border border-hairline p-8 transition-colors hover:bg-ink sm:flex-row sm:items-center sm:gap-8 sm:p-10"
                >
                  {vertical.awardHighlight.image && (
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xs bg-white p-3 sm:h-28 sm:w-28">
                      <div className="relative h-full w-full">
                        <Image
                          src={vertical.awardHighlight.image}
                          alt={vertical.awardHighlight.heading}
                          fill
                          sizes="112px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-lg leading-snug text-ink transition-colors group-hover:text-white sm:text-xl">
                      {vertical.awardHighlight.heading}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-white/70">
                      {vertical.awardHighlight.body}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white sm:self-center"
                  />
                </a>
              </Reveal>
            )}
          </div>
        </section>

        {vertical.leadershipQuotes && vertical.leadershipQuotes.length > 0 && (
          <section data-header-theme="dark" className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <Eyebrow light>Leadership Perspectives</Eyebrow>
              </Reveal>
              {vertical.leadershipTitle && (
                <h2 className="mt-6 max-w-3xl text-[clamp(1.5rem,3.5vw,2.25rem)] font-normal leading-[1.25] text-white">
                  <RevealText delay={0.05}>{vertical.leadershipTitle}</RevealText>
                </h2>
              )}
              <Reveal delay={0.1} className="mt-12 sm:mt-14">
                <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-12 sm:grid-cols-3 sm:gap-10">
                  {vertical.leadershipQuotes.map((q) => (
                    <blockquote key={q.attribution}>
                      <p className="font-serif text-lg leading-relaxed text-white/90 italic sm:text-xl">
                        &ldquo;{q.text}&rdquo;
                      </p>
                      <footer className="mt-5 text-sm text-white/50">{q.attribution}</footer>
                    </blockquote>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {vertical.quote && (
          <section data-header-theme="dark" className="relative overflow-hidden bg-ink px-5 py-24 sm:px-8 sm:py-32">
            {vertical.quoteImage && (
              <>
                <Image
                  src={vertical.quoteImage}
                  alt={`${vertical.name} — a MARK asset`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/75" />
              </>
            )}
            <div className="relative z-10 mx-auto max-w-[1000px]">
              <Reveal>
                <p className="font-serif text-[clamp(1.5rem,3.2vw,2.5rem)] italic leading-[1.3] text-white">
                  &ldquo;{vertical.quote.text}&rdquo;
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="mt-6 block text-sm text-white/60">{vertical.quote.attribution}</span>
              </Reveal>
            </div>
          </section>
        )}

        {relatedCases.length > 0 && (
          <section data-header-theme="light" className="bg-light px-5 py-20 sm:px-8">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <Eyebrow>Related Cases</Eyebrow>
              </Reveal>
              <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] text-ink">
                <RevealText delay={0.05}>Portfolio in {vertical.name}</RevealText>
              </h2>

              <Reveal delay={0.15} className="mt-12 sm:mt-14">
                <VerticalRelatedCases items={relatedCases} />
              </Reveal>
            </div>
          </section>
        )}

        {relatedNews.length > 0 && (
          <section data-header-theme="light" className="bg-white px-5 pt-20 pb-10 sm:px-8 sm:pt-20 sm:pb-12">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <Eyebrow>Related News</Eyebrow>
              </Reveal>
              <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] text-ink">
                <RevealText delay={0.05}>{vertical.name} in the News</RevealText>
              </h2>

              <Reveal delay={0.15} className="mt-12 sm:mt-14">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
                  {relatedNews.map((item) => (
                    <InsightCard key={item.title} item={item} />
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        <section data-header-theme="light" className="bg-white px-5 pt-10 pb-20 sm:px-8 sm:pt-12 sm:pb-20">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Eyebrow>Other Verticals</Eyebrow>
            </Reveal>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] text-ink">
              <RevealText delay={0.05}>Explore our other verticals.</RevealText>
            </h2>
            <Reveal delay={0.15} className="mt-10 sm:mt-12">
              <VerticalsGallery verticals={others} />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
