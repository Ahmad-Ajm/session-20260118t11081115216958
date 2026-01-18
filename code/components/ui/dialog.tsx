"use client";

import * as React from "react";

import { cn } from "@/lib/utils/cn";

export type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
}: DialogProps) {
  const panelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };

    window.addEventListener("keydown", onKeyDown);
    // Basic focus on open
    setTimeout(() => panelRef.current?.focus(), 0);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 grid place-items-center p-4">
        <div
          ref={panelRef}
          tabIndex={-1}
          className={cn(
            "w-full max-w-lg rounded-lg border bg-card text-card-foreground shadow-lg outline-none animate-fade-in",
            className
          )}
        >
          {(title || description) && (
            <div className="border-b p-5">
              {title ? <h2 className="text-lg font-semibold">{title}</h2> : null}
              {description ? (
                <p className="mt-1 text-sm text-muted-foreground">{description}</p>
              ) : null}
            </div>
          )}

          <div className="p-5">{children}</div>

          {footer ? <div className="border-t p-5">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
}
