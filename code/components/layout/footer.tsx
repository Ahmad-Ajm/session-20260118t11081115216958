import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container className="py-8 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} صانع السيرة الذاتية</p>
      </Container>
    </footer>
  );
}
