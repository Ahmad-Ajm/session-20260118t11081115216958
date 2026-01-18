import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  hasError?: boolean;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "h-10 w-full rounded-md border bg-bg px-3 text-sm shadow-sm transition-colors",
          "border-input focus:border-ring",
          hasError ? "border-danger focus:border-danger" : "",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    );
  },
);
Select.displayName = "Select";
