import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageTitle } from "@/components/layout/page-title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { apiGet } from "@/lib/api/client";
import type { CvListItem } from "@/lib/mocks/cv";

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("ar", {
      dateStyle: "medium",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function CvListPage() {
  const result = await apiGet<CvListItem[]>(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/cv`);

  const items = result.ok ? result.data : [];

  return (
    <Container>
      <div className="flex items-start justify-between gap-4">
        <PageTitle title="السير الذاتية" description="بيانات تجريبية للعرض فقط." />
        <Link href="/cv/edit">
          <Button>سيرة جديدة</Button>
        </Link>
      </div>

      {!result.ok ? (
        <EmptyState
          title="تعذر تحميل البيانات"
          description={result.error}
          action={
            <Link href="/cv">
              <Button variant="secondary">إعادة المحاولة</Button>
            </Link>
          }
        />
      ) : items.length === 0 ? (
        <EmptyState
          title="لا توجد سير ذاتية"
          description="ابدأ بإنشاء سيرة ذاتية جديدة."
          action={
            <Link href="/cv/edit">
              <Button>إنشاء</Button>
            </Link>
          }
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((cv) => (
            <Card key={cv.id}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name={cv.fullName} src={cv.avatarUrl} />
                  <div>
                    <p className="font-semibold">{cv.fullName}</p>
                    <p className="text-sm text-muted-fg">{cv.headline ?? "—"}</p>
                  </div>
                </div>
                <Badge variant="default">Mock</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-fg">آخر تحديث: {formatDate(cv.updatedAt)}</p>
                <div className="mt-4 flex gap-2">
                  <Button variant="secondary" size="sm" disabled>
                    عرض
                  </Button>
                  <Link href="/cv/edit">
                    <Button size="sm">تعديل</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
}
