import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageTitle } from "@/components/layout/page-title";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <Container>
      <PageTitle
        title="Baseline UI/UX"
        description="واجهة أساسية جاهزة لبناء الميزات القادمة بسرعة وباتساق (RTL + Tailwind + Components)."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent>
            <h2 className="text-base font-semibold">قائمة السير الذاتية</h2>
            <p className="mt-1 text-sm text-muted-fg">
              Placeholder يعرض بيانات وهمية من Mock API.
            </p>
            <div className="mt-4">
              <Link href="/cv">
                <Button variant="primary">فتح</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-base font-semibold">نموذج CV</h2>
            <p className="mt-1 text-sm text-muted-fg">
              مثال على حقول نموذج باستخدام UI kit.
            </p>
            <div className="mt-4">
              <Link href="/cv/edit">
                <Button variant="secondary">فتح</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-base font-semibold">UI Kit</h2>
            <p className="mt-1 text-sm text-muted-fg">
              صفحة داخلية لعرض المكوّنات.
            </p>
            <div className="mt-4">
              <Link href="/ui-kit">
                <Button variant="ghost">عرض</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
