import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { verticals } from "@/lib/data";

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

  return (
    <>
      <Header />
      <main>
        <section
          data-header-theme="dark"
          className="bg-ink px-5 pb-20 pt-40 sm:px-8 sm:pb-28 sm:pt-48"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Link
                href="/#verticals"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <ArrowLeft size={15} />
                Back to Verticals
              </Link>
            </Reveal>

            <Reveal delay={0.05} className="mt-8">
              <Eyebrow light>{vertical.subtitle}</Eyebrow>
            </Reveal>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] font-normal leading-[1.05] text-white">
              {vertical.name}
            </h1>

            <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-white/70 md:text-lg">
              <p>{vertical.description}</p>
              <p>{vertical.description2}</p>
            </div>

            <div className="mt-14 font-serif-num text-[clamp(3rem,8vw,6rem)] leading-none text-white/15">
              {vertical.index}
            </div>
          </div>
        </section>

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
                    <ArrowLeft
                      size={20}
                      className="shrink-0 rotate-180 text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
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
