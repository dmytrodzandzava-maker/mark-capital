"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import Logo from "./Logo";

const SUPPORTING_LINE =
  "An independent real estate investment and asset manager, managing private real estate across Europe since 2004.";

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

  const isDark = theme === "dark";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-start justify-between px-5 pt-5 sm:px-8 sm:pt-8">
        <Link href="/#top" aria-label="MARK — back to top">
          <Logo
            className={`h-6 w-auto transition-colors duration-300 sm:h-7 ${
              isDark ? "text-white" : "text-ink"
            }`}
          />
        </Link>

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

          <div className="overflow-hidden rounded-xs border border-white/15 bg-ink-alt/50 backdrop-blur-xl">
            <button
              onClick={() => setOpen((v) => !v)}
              className="group flex w-full cursor-pointer items-center justify-end gap-2 px-5 py-3 text-sm text-white transition-colors duration-200 ease-out hover:bg-white/10"
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
                      className="transition-transform duration-200 ease-out group-hover:rotate-90"
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

            <AnimatePresence initial={false}>
              {open && (
                <motion.nav
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.25, ease: "easeInOut" },
                  }}
                  className="flex flex-col items-end overflow-hidden px-5 pb-4"
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="cursor-pointer py-2 text-base text-white/80 transition-all duration-200 ease-out hover:translate-x-[-3px] hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
