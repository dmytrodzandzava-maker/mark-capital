export default function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 text-sm md:text-base tracking-wide ${
        light ? "text-white/80" : "text-ink/70"
      } ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
      {children}
    </div>
  );
}
