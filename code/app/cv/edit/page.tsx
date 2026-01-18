"use client";

import * as React from "react";
import { Container } from "@/components/layout/container";
import { PageTitle } from "@/components/layout/page-title";
import { Card, CardContent } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function CvEditPage() {
  const { push } = useToast();

  const [fullName, setFullName] = React.useState("");
  const [headline, setHeadline] = React.useState("");
  const [level, setLevel] = React.useState("mid");
  const [summary, setSummary] = React.useState("");

  return (
    <Container>
      <PageTitle title="نموذج السيرة الذاتية" description="Placeholder — لا يوجد حفظ فعلي في هذه المرحلة." />

      <Card>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id="fullName" label="الاسم الكامل" required>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="مثال: سارة أحمد"
              />
            </FormField>

            <FormField id="headline" label="المسمى الوظيفي" hint="يظهر تحت الاسم في البطاقة">
              <Input
                id="headline"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="مثال: مهندس برمجيات"
              />
            </FormField>
          </div>

          <FormField id="level" label="المستوى">
            <Select id="level" value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="junior">Junior</option>
              <option value="mid">Mid</option>
              <option value="senior">Senior</option>
            </Select>
          </FormField>

          <FormField id="summary" label="نبذة مختصرة" hint="سطرين إلى ثلاثة بشكل مختصر">
            <Textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="اكتب نبذة مختصرة..."
            />
          </FormField>

          <div className="flex gap-2">
            <Button
              onClick={() => {
                push({
                  title: "تم الحفظ (وهميًا)",
                  description: "هذه الصفحة Placeholder ولا يوجد backend في FEAT-001.",
                });
              }}
            >
              حفظ
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setFullName("");
                setHeadline("");
                setLevel("mid");
                setSummary("");
              }}
            >
              مسح
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
