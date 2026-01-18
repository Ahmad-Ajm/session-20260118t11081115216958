import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hasError?: boolean;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "min-h-24 w-full rounded-md border bg-bg px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-fg",
          "border-input focus:border-ring",
          hasError ? "border-danger focus:border-danger" : "",
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";
