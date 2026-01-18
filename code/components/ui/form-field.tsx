import * as React from "react";

import { cn } from "@/lib/utils/cn";

export type FormFieldProps = {
  label: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

export function FormField({
  label,
  htmlFor,
  required,
  hint,
  error,
  className,
  children,
}: FormFieldProps) {
  const describedById = htmlFor ? `${htmlFor}-desc` : undefined;

  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-foreground"
      >
        {label}
        {required ? <span className="text-danger"> *</span> : null}
      </label>

      <div className="space-y-1">
        {children}
        {error ? (
          <p
            id={describedById}
            className="text-sm text-danger"
            role="alert"
          >
            {error}
          </p>
        ) : hint ? (
          <p id={describedById} className="text-sm text-muted-foreground">
            {hint}
          </p>
        ) : null}
      </div>
    </div>
  );
}
