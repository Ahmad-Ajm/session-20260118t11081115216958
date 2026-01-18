import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

export function FormField({
  id,
  label,
  required,
  hint,
  error,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
        {required ? <span className="text-danger"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-sm text-danger" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="text-sm text-muted-fg">{hint}</p>
      ) : null}
    </div>
  );
}
