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
        <section data-header-theme="dark" className="bg-ink px-5 pb-20 pt-40 sm:px-8 sm:pb-28 sm:pt-48">
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

            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-[280px_1fr] sm:gap-16">
              <Reveal delay={0.05}>
                <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-xs">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 280px, 60vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

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
                    <p className="mt-6 text-sm text-white/40">
                      Member of the Investment Committee
                    </p>
                  )}
                </Reveal>
                <Reveal delay={0.2} className="mt-10">
                  <Button href="/contact" variant="light">
                    Get in Touch
                  </Button>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {member.bio && member.bio.length > 0 && (
          <section data-header-theme="light" className="bg-white px-5 py-20 sm:px-8">
            <div className="mx-auto flex max-w-[1400px] flex-col gap-6">
              {member.bio.map((paragraph, i) => (
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
