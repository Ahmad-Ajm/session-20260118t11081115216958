import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border">
      <Container className="py-6 text-sm text-muted-fg">
        <p>© {new Date().getFullYear()} PSEC Kit — Baseline UI.</p>
      </Container>
    </footer>
  );
}
