import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-fg hover:opacity-90",
  secondary: "bg-secondary text-secondary-fg hover:bg-muted",
  ghost: "bg-transparent hover:bg-muted",
  danger: "bg-danger text-danger-fg hover:opacity-90",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3",
  md: "h-10 px-4",
  lg: "h-11 px-5 text-base",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  loading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  return (
    <button
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading ? <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> : null}
      <span>{children}</span>
    </button>
  );
}
