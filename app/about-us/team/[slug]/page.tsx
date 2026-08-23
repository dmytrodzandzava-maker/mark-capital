import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { team } from "@/lib/data";

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};

  const title = `${member.name} — ${member.title}`;
  return {
    title,
    description: `${member.name}, ${member.title}, based in ${member.location} — MARK Capital Management.`,
    alternates: { canonical: `/about-us/team/${member.slug}` },
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <Header />
      <main>
        <section data-header-theme="dark" className="bg-ink px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-48">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Link
                href="/about-us#team"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <ArrowLeft size={15} />
                Back to Team
              </Link>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-[280px_1fr] sm:gap-16">
              <Reveal delay={0.05}>
                <div className="relative aspect-[3/4] w-24 overflow-hidden rounded-xs sm:w-full sm:max-w-xs">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 280px, 96px"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className="flex flex-col">
                <div>
                  <Reveal delay={0.1}>
                    <Eyebrow light>{member.location}</Eyebrow>
                  </Reveal>
                  <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.05] text-white">
                    {member.name}
                  </h1>
                  <Reveal delay={0.15}>
                    <p className="mt-3 text-lg text-white/70">{member.title}</p>
                    {member.investmentCommittee && (
                      <p className="mt-4 text-sm text-white/40 sm:mt-6">
                        Member of the Investment Committee
                      </p>
                    )}
                  </Reveal>
                  <Reveal delay={0.2} className="mt-6 flex items-center gap-3 sm:mt-10">
                    <Button href="/contact" variant="light">
                      Get in Touch
                    </Button>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="inline-flex rounded-xs border border-white/40 p-3.5 text-white transition-colors hover:bg-white hover:text-ink"
                      >
                        <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                        </svg>
                      </a>
                    )}
                  </Reveal>
                </div>

                {member.bio && member.bio.length > 0 && (
                  <Reveal delay={0.25} className="mt-4 border-t border-white/15 pt-4 sm:mt-16 sm:pt-10">
                    <p className="font-serif line-clamp-2 max-w-xl text-base italic leading-snug text-white/90 sm:line-clamp-none sm:text-[clamp(1.25rem,2.8vw,1.875rem)] sm:leading-[1.4]">
                      &ldquo;{member.bio[0]}&rdquo;
                    </p>
                  </Reveal>
                )}
              </div>
            </div>
          </div>
        </section>

        {member.bio && member.bio.length > 1 && (
          <section data-header-theme="light" className="bg-white px-5 py-20 sm:px-8">
            <div className="mx-auto flex max-w-[1400px] flex-col gap-6">
              {member.bio.slice(1).map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="max-w-2xl text-lg leading-relaxed text-ink/70 md:text-xl">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
