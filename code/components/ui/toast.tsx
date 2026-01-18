"use client";

import * as React from "react";

import { cn } from "@/lib/utils/cn";
import { ToastStoreProvider, useToast } from "@/hooks/use-toast";

function ToastViewport() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed bottom-4 start-4 z-[60] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "rounded-lg border bg-card text-card-foreground shadow-lg p-4",
            t.variant === "success" && "border-success/30",
            t.variant === "danger" && "border-danger/30"
          )}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <div className="min-w-0 flex-1">
              {t.title ? <p className="font-medium">{t.title}</p> : null}
              {t.description ? (
                <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
              ) : null}
            </div>
            <button
              type="button"
              className="rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => dismiss(t.id)}
              aria-label="إغلاق"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <ToastStoreProvider>
      {children}
      <ToastViewport />
    </ToastStoreProvider>
  );
}
