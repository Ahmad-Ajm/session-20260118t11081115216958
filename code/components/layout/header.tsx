import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b bg-background">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold no-underline">
            صانع السيرة الذاتية
          </Link>
        </div>

        <nav className="flex items-center gap-2">
          <Link href="/cv" className="text-sm text-muted-foreground">
            السير الذاتية
          </Link>
          <Link href="/cv/edit" className="text-sm text-muted-foreground">
            إنشاء/تعديل
          </Link>
          <Link href="/auth/login" className="text-sm text-muted-foreground">
            الدخول
          </Link>
          <Button asChild variant="secondary" size="sm">
            <Link href="/cv">ابدأ</Link>
          </Button>
        </nav>
      </Container>
    </header>
  );
}
