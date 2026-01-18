# Implementation Plan – FEAT-001

## 1. Executive Summary
- تنفيذ واجهة Baseline عبر Next.js + Tailwind تتضمن Layout عام، صفحة رئيسية، وتوجيهات (Routes) لصفحات Placeholder تمثل الميزات القادمة.
- بدون أي تكامل API أو تفاعل (فورم/حفظ) في هذا الإصدار.

## 2. Architecture & Components

### Frontend (Next.js + Tailwind)
- **Routing (App Router)**:
  - `app/layout.tsx`: Root layout (HTML shell, header/footer, container).
  - `app/page.tsx`: Home.
  - Placeholders (static pages):
    - `app/cv/page.tsx` (إدخال/تعديل CV – لاحقًا FEAT-002)
    - `app/cvs/page.tsx` (قائمة السير الذاتية – لاحقًا FEAT-010)
    - `app/search/page.tsx` (بحث – لاحقًا FEAT-012)
    - `app/filters/page.tsx` (تصفية – لاحقًا FEAT-013)
    - `app/auth/page.tsx` (تسجيل/دخول – لاحقًا FEAT-008)
    - `app/export/page.tsx` (تصدير – لاحقًا FEAT-011)
- **Shared UI Components**:
  - `components/AppHeader.tsx`: شعار/اسم المشروع + NavLinks.
  - `components/AppFooter.tsx`: حقوق/روابط مساعدة.
  - `components/NavLink.tsx`: Link مع حالة active (اختياري بدون تعقيد).
  - `components/PlaceholderPage.tsx`: عنوان + وصف + (Coming soon) + روابط.
- **Styling**:
  - Tailwind CSS مع إعدادات بسيطة:
    - `tailwind.config.*` لتفعيل paths.
    - `globals.css` لإضافة base styles (font, bg, link styles).

### Backend
- غير مطلوب في هذه الميزة (API لاحقًا).

## 3. Data Model Definition
- لا يوجد نموذج بيانات/Entities في هذه الميزة.

## 4. FR-to-Implementation Mapping
| FR ID | Frontend Components |
|-------|---------------------|
| FR-FEAT-001-001 | `app/layout.tsx`, `components/AppHeader.tsx`, `components/AppFooter.tsx` |
| FR-FEAT-001-002 | `app/page.tsx` |
| FR-FEAT-001-003 | `app/*/page.tsx`, `components/PlaceholderPage.tsx` |
| FR-FEAT-001-004 | `components/AppHeader.tsx` (Nav) |
| FR-FEAT-001-005 | `globals.css`, Tailwind utility usage |

## 5. Implementation Phases

### Phase 1: Project/UI Setup
1. تهيئة Next.js (TypeScript) وإضافة Tailwind.
2. إعداد `globals.css` وتثبيت base styles.

### Phase 2: Layout + Navigation
1. إنشاء `app/layout.tsx`.
2. بناء `AppHeader` مع روابط للصفحات.
3. بناء `AppFooter`.

### Phase 3: Pages
1. الصفحة الرئيسية (Home) مع تعريف + CTA links.
2. صفحات Placeholder لكل مسار مستهدف.
3. صفحة 404 بسيطة (اختياري حسب الافتراضي).

### Phase 4: Polish
1. مراجعة responsive (mobile-first).
2. مراجعة accessiblity (headings, landmarks, focus).
3. مراجعة consistency وlint/format.

## 6. Non-Functional Implementation
- **Performance (NFR-001)**: صفحات ثابتة، minimal JS، استخدام مكونات بسيطة بدون مكتبات ثقيلة.
- **Security**: لا توجد بيانات حساسة ولا auth حالياً.
- **Testing**: Smoke test يدوي + (اختياري) basic lint/build.

## 7. Dependencies & Risks
- **Dependencies**: Node.js, Next.js, Tailwind.
- **Risks**:
  - عدم وضوح RTL/i18n قد يسبب إعادة عمل لاحقًا.
  - قد تتغير أسماء الصفحات/المسارات لاحقًا حسب تصميم IA النهائي.

## 8. Assumptions
- المستودع لا يحتوي كود جاهز؛ سننشئ بنية ملفات UI داخل `app/`.
- الواجهة العربية مبدئيًا بدون إلزام RTL، مع إمكانية تفعيلها لاحقًا عند اعتمادها.
