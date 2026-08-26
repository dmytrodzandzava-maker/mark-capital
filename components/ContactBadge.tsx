import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactBadge() {
  return (
    <Link
      href="/contact"
      className="fixed right-0 bottom-8 z-40 flex translate-x-[calc(100%-3.25rem)] items-center gap-2 rounded-l-full bg-accent py-3.5 pr-6 pl-4 text-sm text-white shadow-lg shadow-black/20 transition-transform duration-300 ease-out hover:translate-x-0 sm:bottom-10"
    >
      <MessageCircle size={18} className="shrink-0" />
      <span className="whitespace-nowrap">Contact Us</span>
    </Link>
  );
}
