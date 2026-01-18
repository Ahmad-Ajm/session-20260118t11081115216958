import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ToastProvider } from "@/hooks/use-toast";
import { ToastViewport } from "@/components/ui/toast";

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ToastProvider>
      <div className="min-h-dvh">
        <Header />
        <main className="py-8">{children}</main>
        <Footer />
        <ToastViewport />
      </div>
    </ToastProvider>
  );
}
