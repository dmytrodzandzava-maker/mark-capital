import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import { offices, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MARK Capital Management — investment enquiries, press, careers, and our office locations across Europe.",
  alternates: { canonical: "/contact" },
};

const ceo = team[0];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section
          data-header-theme="dark"
          className="relative overflow-hidden bg-ink px-5 pb-20 pt-40 sm:px-8 sm:pb-28 sm:pt-48"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/contact-header.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />

          <div className="relative z-10 mx-auto max-w-[1400px]">
            <Reveal>
              <Eyebrow light>Contact</Eyebrow>
            </Reveal>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,7vw,5.5rem)] font-normal leading-[1.05] text-white">
              <RevealText delay={0.05}>Let&rsquo;s talk.</RevealText>
            </h1>
            <Reveal delay={0.15} className="mt-8 max-w-xl">
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                Whether you&rsquo;re an investor, a journalist, or exploring a
                career at MARK, our team is ready to hear from you.
              </p>
            </Reveal>
          </div>
        </section>

        <section data-header-theme="light" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-[1fr_360px]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1} className="lg:border-l lg:border-hairline lg:pl-16">
              <div className="flex flex-col gap-10">
                <div>
                  <Eyebrow>Direct</Eyebrow>
                  <a
                    href="mailto:info@thisismark.com"
                    className="mt-4 block text-xl text-ink transition-colors hover:text-accent"
                  >
                    info@thisismark.com
                  </a>
                  <a
                    href="https://www.linkedin.com/company/thisismark"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm text-ink/60 transition-colors hover:text-ink"
                  >
                    LinkedIn →
                  </a>
                </div>
                <div>
                  <Eyebrow>Headquarters</Eyebrow>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    {offices[0].address}
                    <br />
                    {offices[0].phone}
                  </p>
                </div>
                <div>
                  <Eyebrow>From Our CEO</Eyebrow>
                  <p className="font-serif mt-4 text-lg italic leading-relaxed text-ink/80">
                    &ldquo;We unlock the potential value in properties. Our
                    expertise in urban, mixed-use real estate allows us to
                    transform a property through hands-on management.
                    It&rsquo;s an approach that has enabled us to source
                    opportunities that generally don&rsquo;t appear on the
                    general market and to generate attractive returns for our
                    clients and investors.&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={ceo.image}
                        alt={ceo.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm text-ink">{ceo.name}</div>
                      <div className="text-xs text-ink/50">CEO of MARK</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section data-header-theme="light" className="bg-light px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Eyebrow>Our Offices</Eyebrow>
            </Reveal>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] text-ink">
              <RevealText delay={0.05}>Local teams, across 8 European offices.</RevealText>
            </h2>

            <Reveal delay={0.1} className="mt-14 sm:mt-16">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {offices.map((office) => (
                  <div
                    key={office.name}
                    className="group overflow-hidden rounded-xs border border-hairline bg-white transition-colors hover:border-ink/20"
                  >
                    <div className="relative aspect-[2/1] w-full overflow-hidden bg-ink/5">
                      <Image
                        src={office.image}
                        alt={`MARK's ${office.name} office`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <div className="text-lg text-ink">{office.name}</div>
                      <p className="mt-3 text-sm leading-relaxed text-ink/60">{office.address}</p>
                      {office.phone && <p className="mt-2 text-sm text-ink/60">{office.phone}</p>}
                    </div>
                  </div>
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
