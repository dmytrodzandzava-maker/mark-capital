import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

/**
 * The accent-tinted halftone/duotone photo treatment used on the About Us
 * hero — extracted here so it's a single source of truth. Pass `interactive`
 * for card usage: hover lifts the treatment to reveal the full-color photo
 * and fades in a corner arrow; omit it for static backgrounds like the hero.
 */
export default function DuotoneImage({
  src,
  alt,
  sizes,
  priority,
  className = "",
  interactive = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div className={`group/image relative h-full w-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover grayscale contrast-125 ${
          interactive
            ? "transition-[filter] duration-700 ease-out group-hover/image:grayscale-0 group-hover/image:contrast-100"
            : ""
        }`}
      />
      <div
        className={`absolute inset-0 bg-accent mix-blend-color ${
          interactive ? "transition-opacity duration-700 ease-out group-hover/image:opacity-0" : ""
        }`}
      />
      <div
        className={`halftone-dots absolute inset-0 opacity-60 mix-blend-overlay ${
          interactive ? "transition-opacity duration-700 ease-out group-hover/image:opacity-0" : ""
        }`}
      />
      {interactive && (
        <ArrowUpRight
          size={18}
          className="absolute bottom-3 right-3 z-10 text-white opacity-0 transition-opacity duration-300 ease-out group-hover/image:opacity-100"
        />
      )}
    </div>
  );
}
