import { cn } from "@/lib/utils/cn";

export function PageTitle({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-6", className)}>
      <h1 className="text-2xl font-bold">{title}</h1>
      {description ? <p className="mt-1 text-sm text-muted-fg">{description}</p> : null}
    </div>
  );
}
