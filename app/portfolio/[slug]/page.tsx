import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { portfolioHighlights } from "@/lib/data";

export function generateStaticParams() {
  return portfolioHighlights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioHighlights.find((p) => p.slug === slug);
  if (!item) return {};

  const title = `${item.name} — ${item.location}`;
  return {
    title,
    description: item.description,
    alternates: { canonical: `/portfolio/${item.slug}` },
    openGraph: { title, description: item.description, images: [{ url: item.image }] },
    twitter: { title, description: item.description, images: [item.image] },
  };
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioHighlights.find((p) => p.slug === slug);
  if (!item) notFound();

  const others = portfolioHighlights.filter((p) => p.slug !== item.slug);

  return (
    <>
      <Header />
      <main>
        <section
          data-header-theme="dark"
          className="relative flex min-h-[75vh] items-end overflow-hidden bg-ink"
        >
          <Image
            src={item.image}
            alt={`${item.name}, ${item.location} — a MARK development`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />

          <div className="relative z-10 w-full px-5 pb-16 sm:px-8 sm:pb-20">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <ArrowLeft size={15} />
                  Back to Portfolio
                </Link>
              </Reveal>
              <Reveal delay={0.05} className="mt-8">
                <Eyebrow light>{item.tag}</Eyebrow>
              </Reveal>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] font-normal leading-[1.05] text-white">
                {item.name}
              </h1>
              <div className="mt-3 text-base text-white/60">{item.location}</div>
            </div>
          </div>
        </section>

        <section data-header-theme="light" className="bg-white px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="max-w-2xl text-lg leading-relaxed text-ink/70 md:text-xl">
                {item.description}
              </p>
            </Reveal>
          </div>
        </section>

        <section data-header-theme="light" className="bg-light px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Eyebrow>Other Projects</Eyebrow>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 sm:mt-12">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/portfolio/${p.slug}`}
                    className="group relative flex h-56 items-end overflow-hidden rounded-xs"
                  >
                    <Image
                      src={p.image}
                      alt={`${p.name}, ${p.location}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                    <div className="relative z-10 p-6">
                      <div className="text-lg text-white">{p.name}</div>
                      <div className="text-sm text-white/60">{p.location}</div>
                    </div>
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
