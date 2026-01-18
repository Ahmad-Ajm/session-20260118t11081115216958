import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export function Avatar({
  name,
  src,
  size = 40,
  className,
}: {
  name: string;
  src?: string;
  size?: number;
  className?: string;
}) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join("");

  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-fg",
        className,
      )}
      style={{ width: size, height: size }}
      aria-label={name}
      title={name}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      ) : (
        <span className="text-sm font-semibold">{initials}</span>
      )}
    </div>
  );
}
