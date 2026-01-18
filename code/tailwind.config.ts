import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        card: "hsl(var(--card))",
        "card-fg": "hsl(var(--card-fg))",
        muted: "hsl(var(--muted))",
        "muted-fg": "hsl(var(--muted-fg))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: "hsl(var(--primary))",
        "primary-fg": "hsl(var(--primary-fg))",
        secondary: "hsl(var(--secondary))",
        "secondary-fg": "hsl(var(--secondary-fg))",
        danger: "hsl(var(--danger))",
        "danger-fg": "hsl(var(--danger-fg))",
        success: "hsl(var(--success))",
        "success-fg": "hsl(var(--success-fg))",
        warning: "hsl(var(--warning))",
        "warning-fg": "hsl(var(--warning-fg))"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.06)"
      }
    }
  }
} satisfies Config;
