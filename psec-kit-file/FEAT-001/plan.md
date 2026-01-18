# Implementation Plan – FEAT-001

## 1. Executive Summary
تنفيذ Baseline للواجهة الأمامية يتضمن: إعداد مشروع Next.js + Tailwind، تصميم هوية بصرية أولية، بناء مكوّنات UI مشتركة، إعداد Layouts ومسارات أولية، وتجهيز Mock API لتطوير الشاشات قبل جاهزية الـ Backend.

## 2. Architecture & Components

### Frontend (Next.js)
- **Stack**:
  - Next.js (App Router)
  - TypeScript
  - TailwindCSS
  - (اختياري) Radix UI primitives للـ Dialog/Dropdown
  - (اختياري) MSW لموكات API
- **App Structure**:
  - `app/layout.tsx`: Root layout (HTML, body, fonts, direction)
  - `app/(public)/layout.tsx`: Public layout
  - `app/(public)/page.tsx`: Home
  - `app/cv/page.tsx`: CV list (placeholder)
  - `app/cv/edit/page.tsx`: CV form (placeholder)
  - `app/auth/login/page.tsx`: Login placeholder
  - `app/auth/register/page.tsx`: Register placeholder
- **Design System**:
  - Tokens: color palette, typography scale, spacing, radius, shadows
  - CSS vars in `styles/globals.css` + Tailwind config
- **UI Components (components/ui)**:
  - `Button`, `Input`, `Textarea`, `Select`
  - `FormField` wrapper (label, error, hint)
  - `Card`, `Badge`, `Avatar`
  - `Dialog/Modal`
  - `Toast` (بسيط) + `useToast` hook
  - `Spinner`, `Skeleton`, `EmptyState`
- **Layout Components (components/layout)**:
  - `Header`, `Nav`, `Footer`
  - `Container` + `PageTitle`

### Backend / API (Assumption for this feature)
- لا يتم بناء Backend فعلي ضمن FEAT-001.
- **Mock API**:
  - طريقان مقترحان:
    1) MSW interceptors + handlers
    2) Next.js Route Handlers في `app/api/*` تعيد بيانات ثابتة
  - الهدف: تمكين صفحات placeholder من عرض بيانات تجريبية (قائمة CV مختصرة مثلًا) دون الاعتماد على FEAT-009/010.

## 3. Data Model Definition
لا يوجد نموذج بيانات Domain رسمي ضمن هذه الميزة. فقط نماذج TypeScript مؤقتة لمساعدة الـ UI:
```ts
export type CvListItem = {
  id: string;
  fullName: string;
  avatarUrl?: string;
  headline?: string;
  updatedAt: string;
};
```

## 4. FR-to-Implementation Mapping
> لا توجد FRs رقمية في Feature Map لهذه الميزة. الربط هنا حسب مخرجات الميزة.

| Deliverable | Frontend Components |
|-----------|----------------------|
| Design tokens + base styles | `styles/globals.css`, `tailwind.config.*` |
| Shared UI components | `components/ui/*` |
| Layouts + routes | `app/**/layout.tsx`, `app/**/page.tsx` |
| Mock API layer | `lib/api/*`, `lib/mocks/*` أو `app/api/*` |
| Performance baseline | next config + usage patterns (Image, dynamic import) |

## 5. Implementation Phases

### Phase 1: Project Setup
1. إنشاء/تأكيد إعداد Next.js + TS.
2. إعداد TailwindCSS + PostCSS.
3. إعداد خطوط عربية (مثال: Cairo/Noto Kufi) عبر `next/font`.
4. إعداد RTL افتراضي في `app/layout.tsx` (dir="rtl") + CSS support.

### Phase 2: Design Tokens & Global Styles
1. تعريف لوحة ألوان (primary/secondary, success/warn/danger, gray scale).
2. تعريف Typography scale ومسافات قياسية.
3. تطبيق tokens عبر CSS variables + Tailwind theme extension.

### Phase 3: UI Kit (System Components)
1. بناء Button variants + sizes + states.
2. بناء Form controls + حالات الخطأ.
3. بناء Card/Badge/Avatar.
4. Dialog/Modal + Toast.
5. Loading/Skeleton + EmptyState.

### Phase 4: Layouts & Pages (Placeholders)
1. Public layout مع Header بسيط وروابط أساسية.
2. صفحات placeholder للمسارات الأساسية.
3. ربط الصفحات ببيانات mock لإظهار شكل حقيقي.

### Phase 5: Quality & NFR-001 (Performance)
1. استخدام `next/image` للصور.
2. تفعيل `dynamic()` حيث يلزم.
3. قياس سريع: Lighthouse baseline (محلي) وتوثيق النتائج.

## 6. Non-Functional Implementation
- **Performance (NFR-001)**:
  - تجنّب تحميل مكتبات ثقيلة غير لازمة.
  - استخدام `next/font` لتقليل CLS.
  - اعتماد skeleton بدل spinners للصفحات القائمة على بيانات.
- **Accessibility**:
  - عناصر form مرتبطة بـ labels.
  - تباين ألوان مقبول.
  - دعم keyboard focus.
- **Maintainability**:
  - توثيق استخدام كل component ضمن comments + أمثلة استعمال بسيطة داخل صفحة `/ui-kit` (داخلية/مخفية لاحقًا).

## 7. Dependencies & Risks
- **Dependencies**:
  - لا يوجد.
- **Risks**:
  - عدم وضوح متطلبات اللغات بالكامل (RTL/LTR) قد يؤدي لتعديلات لاحقة.
  - عدم وضوح UI المطلوب (Minimal vs. Rich)؛ سنعتمد Baseline بسيط قابل للتوسعة.

## 8. Assumptions
- التطبيق موجه أساسًا للمستخدم العربي (RTL).
- سيتم بناء باقي الميزات على نفس Next.js project.
- Backend غير جاهز الآن؛ نعتمد Mock API لتقدم الواجهة.
