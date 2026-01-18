import type { Metadata } from "next";
import { Cairo } from "next/font/google";

import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "صانع السيرة الذاتية",
    template: "%s | صانع السيرة الذاتية",
  },
  description: "واجهة تأسيسية (Baseline) للتطبيق مع دعم RTL ومكوّنات مشتركة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
