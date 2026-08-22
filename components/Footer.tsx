import { footerNav, offices } from "@/lib/data";

export default function Footer() {
  return (
    <footer data-header-theme="dark" className="bg-ink px-5 pt-16 pb-8 sm:px-8 md:pt-24">
      <div className="mx-auto max-w-[1400px]">
        <a href="/#top" className="text-sm text-white/50 transition-colors hover:text-white">
          ↑ Back To Top
        </a>

        <div className="mt-12 grid grid-cols-2 gap-10 border-t border-hairline-light pt-12 sm:grid-cols-3 md:grid-cols-4">
          <div>
            <div className="text-xs uppercase tracking-wide text-white/40">Navigation</div>
            <ul className="mt-5 space-y-3">
              {footerNav.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-white/40">Links</div>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/thisismark"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/70 transition-colors hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/70 transition-colors hover:text-white">
                  Data Room
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 md:col-span-2">
            <div className="text-xs uppercase tracking-wide text-white/40">Offices</div>
            <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {offices.map((office) => (
                <div key={office.name} className="text-sm">
                  <div className="text-white/90">{office.name}</div>
                  <div className="mt-1 text-white/50">{office.address}</div>
                  {office.phone && <div className="mt-0.5 text-white/50">{office.phone}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl border-t border-hairline-light pt-8 text-xs leading-relaxed text-white/35">
          This website is for informational purposes only and does not
          constitute an offer or solicitation to invest. Past performance is
          not indicative of future results. MARK Capital Management and its
          affiliates are not liable for any decisions made based on the
          information provided herein.
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-hairline-light pt-8 sm:flex-row sm:items-end">
          <div className="font-serif-num text-4xl text-white sm:text-5xl">MARK</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40">
            <a href="#contact" className="hover:text-white/70">Accessibility</a>
            <a href="#contact" className="hover:text-white/70">Privacy</a>
            <a href="#contact" className="hover:text-white/70">Legal</a>
            <span>© 2026 MARK. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
