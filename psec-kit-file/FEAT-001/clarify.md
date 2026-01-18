# Clarification & Decisions – FEAT-001

## 1. Executive Summary
- هذه الميزة تُعرّف **Baseline UI** للتطبيق: تخطيط عام (Layout) + تنقل أساسي + صفحة رئيسية + صفحات Placeholder للميزات القادمة.
- النطاق المطلوب: **واجهة فقط بدون تفاعل/CRUD فعلي** وبدون ربط API في الوقت الحالي.

## 2. Scope Confirmation
- **Confirmed In-Scope**:
  - إعداد مشروع Frontend بسيط قابل للتطوير (نفترض Next.js + Tailwind).
  - تخطيط عام للتطبيق: Header/Nav + Footer + Container.
  - صفحة رئيسية تعرض تعريفًا موجزًا للتطبيق وروابط للصفحات القادمة.
  - صفحات Placeholder للميزات القادمة (CV form, CV list, search, export, auth...).
  - اتساق بصري أساسي (Typography/Spacing/Colors) عبر Tailwind.
- **Confirmed Out-of-Scope**:
  - أي منطق CRUD أو حفظ بيانات.
  - أي تكامل API أو مصادقة حقيقية.
  - إدارة حالة متقدمة/نماذج تفاعلية (Form validation, submit...).
  - تصميم نهائي/هوية بصرية كاملة (branding) أو نظام تصميم متقدم.

## 3. Ambiguity Resolution (Decisions Catalog)

| Decision ID | Topic | Uncertainty | Decision Taken | Rationale |
|-------------|-------|-------------|----------------|-----------|
| DEC-FEAT-001-001 | Tech Stack | لا يوجد كود/ستاك محدد | اعتماد Next.js (App Router) + TypeScript + Tailwind CSS | ستاك خفيف وسهل التوسع وملائم لواجهة ثابتة + دعم صفحات بسرعة |
| DEC-FEAT-001-002 | Interactivity | هل نحتاج نماذج/تفاعل؟ | لا: صفحات ثابتة/Placeholder فقط | حسب طلب Orchestrator: baseline بدون تفاعل |
| DEC-FEAT-001-003 | Routing | ما هي الصفحات المطلوبة الآن؟ | صفحة رئيسية + صفحات placeholders لمسارات تمثل الميزات القادمة | لتمكين فريق العمل من البناء التدريجي وتثبيت IA مبكرًا |
| DEC-FEAT-001-004 | Navigation | هل نجعل الوصول للصفحات من قائمة؟ | نعم: Header يحتوي روابط واضحة + يمكن إضافة Sidebar لاحقًا | يدعم قابلية التوسع دون تعقيد |
| DEC-FEAT-001-005 | UI Language | عربي أم متعدد اللغات؟ | عربي مبدئيًا (RTL اختياري) مع ترك مساحة لدعم i18n لاحقًا | المشروع عربي في الخريطة؛ i18n مؤجل لتجنب تعقيد مبكر |
| DEC-FEAT-001-006 | Accessibility | مستوى الالتزام؟ | التزام أساسي: semantic HTML + focus states | تحسين UX وتقليل ديون تصميم مبكرة |

## 4. Key Business Rules Identified
- لا توجد قواعد أعمال معقدة ضمن هذه الميزة؛ الهدف هو تأسيس بنية UI فقط.
- كل صفحة Placeholder يجب أن توضّح أنها غير مكتملة وتحتوي رابط رجوع للصفحة الرئيسية.

## 5. Implementation Recommendations
- اعتماد بنية `app/` في Next.js مع:
  - `app/layout.tsx` للتخطيط العام.
  - `app/page.tsx` للصفحة الرئيسية.
  - مسارات placeholders مثل: `app/cv/page.tsx`, `app/cvs/page.tsx`, `app/search/page.tsx`, `app/auth/page.tsx`, `app/export/page.tsx`.
- إنشاء مكوّنات بسيطة قابلة لإعادة الاستخدام:
  - `components/AppHeader.tsx`, `components/AppFooter.tsx`, `components/PlaceholderPage.tsx`.
- إضافة Tailwind base config + طبقات بسيطة للـ typography.

