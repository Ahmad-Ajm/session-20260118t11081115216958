import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/cv", label: "السير الذاتية" },
  { href: "/cv/edit", label: "نموذج السيرة" },
  { href: "/auth/login", label: "الدخول" },
];

export function Header() {
  return (
    <header className="border-b border-border bg-bg/90 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="font-bold">
          PSEC Kit
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm hover:bg-muted"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" asChild={false}>
            إنشاء CV
          </Button>
        </div>
      </Container>
    </header>
  );
}
