"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactBadge() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("main")?.firstElementChild;
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href="/contact"
      className={`fixed right-0 bottom-10 z-40 hidden items-center gap-2 rounded-l-full bg-accent py-3.5 pr-6 pl-4 text-sm text-white shadow-lg shadow-black/20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-0 sm:flex ${
        visible
          ? "translate-x-[calc(100%-2.5rem)] opacity-100"
          : "pointer-events-none translate-x-full opacity-0"
      }`}
    >
      <MessageCircle size={18} className="shrink-0" />
      <span className="whitespace-nowrap">Contact Us</span>
    </Link>
  );
}
