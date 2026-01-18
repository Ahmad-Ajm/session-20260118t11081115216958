import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageTitle } from "@/components/layout/page-title";
import { Card, CardContent } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <Container>
      <PageTitle title="تسجيل الدخول" description="Placeholder — لا يوجد تكامل Auth في FEAT-001." />
      <Card>
        <CardContent className="space-y-4">
          <FormField id="email" label="البريد الإلكتروني">
            <Input id="email" type="email" placeholder="name@example.com" />
          </FormField>
          <FormField id="password" label="كلمة المرور">
            <Input id="password" type="password" placeholder="••••••••" />
          </FormField>
          <Button disabled>دخول (قريبًا)</Button>
          <p className="text-sm text-muted-fg">
            ليس لديك حساب؟ <Link className="underline" href="/auth/register">إنشاء حساب</Link>
          </p>
        </CardContent>
      </Card>
    </Container>
  );
}
