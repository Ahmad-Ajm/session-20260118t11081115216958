import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-10 w-full rounded-md border bg-bg px-3 text-sm shadow-sm transition-colors placeholder:text-muted-fg",
          "border-input focus:border-ring",
          hasError ? "border-danger focus:border-danger" : "",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
