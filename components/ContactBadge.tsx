import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ContactBadge() {
  return (
    <Link
      href="/contact"
      className="group fixed right-5 bottom-6 z-40 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm text-white shadow-lg shadow-black/20 transition-colors duration-200 hover:bg-ink sm:right-8 sm:bottom-8"
    >
      Contact Us
      <ArrowUpRight
        size={15}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
