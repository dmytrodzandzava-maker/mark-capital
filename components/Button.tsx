import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "accent";
  className?: string;
}) {
  const styles = {
    dark: "border-ink text-ink hover:bg-ink hover:text-white",
    light: "border-white/40 text-white hover:bg-white hover:text-ink",
    accent: "border-accent text-accent hover:bg-accent hover:text-white",
  }[variant];

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-xs border px-6 py-3.5 text-sm md:text-base transition-colors duration-200 ease-out ${styles} ${className}`}
    >
      {children}
      <ArrowRight
        size={16}
        className="transition-transform duration-200 ease-out group-hover:translate-x-1"
      />
    </Link>
  );
}
