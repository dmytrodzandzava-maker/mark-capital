"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus, X } from "lucide-react";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SUPPORTING_LINE, navLinks, offices, team } from "@/lib/data";
import Logo from "./Logo";

const ceo = team[0];

function MenuBody({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_200px] sm:gap-10">
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wide text-white/40">Navigate</span>
        <div className="mt-3 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className="cursor-pointer border-t border-white/10 py-3 text-base text-white/80 transition-all duration-200 ease-out first:border-t-0 hover:translate-x-1 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 border-t border-white/10 pt-6 sm:border-t-0 sm:border-l sm:border-white/10 sm:pl-8 sm:pt-0">
        <div>
          <span className="text-xs uppercase tracking-wide text-white/40">Leadership</span>
          <div className="mt-3 flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <Image src={ceo.image} alt={ceo.name} fill sizes="48px" className="object-cover" />
            </div>
            <div>
              <div className="text-sm text-white/90">{ceo.name}</div>
              <div className="text-xs text-white/50">{ceo.title}</div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-wide text-white/40">Headquarters</span>
          <p className="mt-3 text-sm leading-relaxed text-white/60">{offices[0].address}</p>
        </div>

        <div>
          <span className="text-xs uppercase tracking-wide text-white/40">Get in Touch</span>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="mailto:info@thisismark.com"
              onClick={onNavigate}
              className="group flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              info@thisismark.com
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/thisismark"
              target="_blank"
              rel="noreferrer"
              onClick={onNavigate}
              className="group flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              LinkedIn
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-header-theme]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const value = entry.target.getAttribute("data-header-theme");
            if (value === "dark" || value === "light") setTheme(value);
          }
        });
      },
      { rootMargin: "-1px 0px -98% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock background scroll while the fullscreen mobile menu is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const [hideLogo, setHideLogo] = useState(false);

  useLenis((lenis) => {
    if (lenis.scroll < 80) {
      setHideLogo(false);
    } else if (lenis.direction === 1) {
      setHideLogo(true);
    } else if (lenis.direction === -1) {
      setHideLogo(false);
    }
  });

  const isDark = theme === "dark";
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative z-10 mx-auto flex max-w-[1600px] items-start justify-between px-5 pt-5 sm:px-8 sm:pt-8">
        <motion.div
          animate={{ opacity: hideLogo && !open ? 0 : 1, y: hideLogo && !open ? -16 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: hideLogo && !open ? "none" : "auto" }}
        >
          <Link href="/#top" aria-label="MARK — back to top">
            <Logo
              className={`h-6 w-auto transition-colors duration-300 sm:h-7 ${
                isDark || open ? "text-white" : "text-ink"
              }`}
            />
          </Link>
        </motion.div>

        <div className="flex flex-col items-end gap-3">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`hidden max-w-xs text-right text-sm leading-relaxed transition-colors duration-300 md:block ${
              isDark ? "text-white/90" : "text-ink/70"
            }`}
          >
            {SUPPORTING_LINE}
          </motion.p>

          <div className="overflow-hidden rounded-xs border border-white/15 bg-ink-alt/50 backdrop-blur-xl [will-change:backdrop-filter]">
            <button
              onClick={() => setOpen((v) => !v)}
              className={`group flex w-full cursor-pointer items-center justify-end gap-2 px-5 py-3 text-sm text-white transition-colors duration-200 ease-out ${
                open ? "" : "hover:bg-white/10"
              }`}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "menu"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                  className="flex items-center gap-2"
                >
                  {open ? "Close" : "Menu"}
                  {open ? (
                    <X
                      size={16}
                      className="transition-all duration-200 ease-out group-hover:rotate-90 group-hover:text-white/45"
                    />
                  ) : (
                    <Plus
                      size={16}
                      className="transition-transform duration-200 ease-out group-hover:rotate-90"
                    />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Desktop: small anchored dropdown card */}
            <AnimatePresence initial={false}>
              {open && (
                <motion.nav
                  initial={{ height: 0, width: 0, opacity: 0 }}
                  animate={{ height: "auto", width: "auto", opacity: 1 }}
                  exit={{ height: 0, width: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    width: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.25, ease: "easeInOut" },
                  }}
                  className="hidden overflow-hidden sm:block"
                >
                  <div className="px-8 pb-7 pt-1 sm:w-[520px]">
                    <MenuBody onNavigate={close} />
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile: fullscreen menu, not a scaled-down copy of the desktop layout */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-0 h-dvh w-full overflow-y-auto bg-ink px-6 pb-10 pt-24 sm:hidden"
          >
            <MenuBody onNavigate={close} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
