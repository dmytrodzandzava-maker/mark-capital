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
                </div>
              </Reveal>
            </div>

            {vertical.facts && vertical.facts.length > 0 && (
              <Reveal delay={0.15}>
                <div className="mt-14 grid grid-cols-2 gap-8 border-t border-hairline pt-10 sm:grid-cols-3">
                  {vertical.facts.map((fact) => (
                    <div key={fact.label}>
                      <div className="font-serif-num text-[clamp(1.75rem,4vw,3rem)] leading-none text-ink">
                        {fact.value}
                      </div>
                      <div className="mt-3 text-sm text-ink/50">{fact.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {vertical.quote && (
              <Reveal delay={0.2}>
                <blockquote className="mt-14 border-l-2 border-accent pl-6 sm:pl-8">
                  <p className="font-serif text-xl leading-relaxed text-ink/80 italic sm:text-2xl">
                    &ldquo;{vertical.quote.text}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm text-ink/50">{vertical.quote.attribution}</footer>
                </blockquote>
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

        {vertical.featuredStories && vertical.featuredStories.length > 0 && (
          <section data-header-theme="light" className="bg-white px-5 py-20 sm:px-8">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <Eyebrow>Latest from {vertical.subtitle}</Eyebrow>
              </Reveal>
              <Reveal delay={0.15} className="mt-12 sm:mt-14">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
                  {vertical.featuredStories.map((story) => (
                    <a
                      key={story.href}
                      href={story.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block overflow-hidden rounded-xs bg-light transition-colors duration-300 hover:bg-accent"
                    >
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={story.image}
                          alt={story.heading}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 sm:p-8">
                        <p className="text-lg leading-snug text-ink transition-colors duration-300 group-hover:text-white sm:text-xl">
                          {story.heading}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors duration-300 group-hover:text-white/80">
                          {story.body}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
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
          <section data-header-theme="light" className="bg-white px-5 py-20 sm:px-8">
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

        <section data-header-theme="light" className="bg-white px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Eyebrow>Other Verticals</Eyebrow>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 sm:mt-12">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {others.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/verticals/${v.slug}`}
                    className="group flex items-center justify-between gap-6 rounded-xs border border-hairline bg-light px-8 py-8 transition-colors hover:bg-ink"
                  >
                    <div>
                      <div className="text-xl text-ink transition-colors group-hover:text-white sm:text-2xl">
                        {v.name}
                      </div>
                      <div className="mt-1 text-sm text-accent">{v.subtitle}</div>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
