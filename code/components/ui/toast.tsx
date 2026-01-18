"use client";

import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils/cn";

export function ToastViewport({ className }: { className?: string }) {
  const { toasts, dismiss } = useToast();

  return (
    <div
      className={cn(
        "fixed bottom-4 start-4 z-50 flex w-[min(92vw,360px)] flex-col gap-2",
        className,
      )}
      aria-live="polite"
      aria-relevant="additions"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className="rounded-lg border border-border bg-card p-3 text-card-fg shadow-soft"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold">{t.title}</p>
              {t.description ? (
                <p className="mt-0.5 text-sm text-muted-fg">{t.description}</p>
              ) : null}
            </div>
            <button
              className="text-sm text-muted-fg hover:text-fg"
              onClick={() => dismiss(t.id)}
              aria-label="Dismiss"
            >
              إغلاق
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
