# Clarification & Decisions – FEAT-001

## 1. Executive Summary
تهدف هذه الميزة إلى وضع **Baseline** واضح لواجهة المستخدم (UI) وتجربة الاستخدام (UX) للتطبيق، بحيث تكون هناك هوية بصرية ومكوّنات نظام قابلة لإعادة الاستخدام (Design System) وبنية Frontend جاهزة لبناء بقية الميزات بسرعة وباتساق.

## 2. Scope Confirmation
- **Confirmed In-Scope**:
  - إعداد ستاك الواجهة الأمامية (افتراضيًا): **Next.js (App Router) + TypeScript + TailwindCSS**.
  - إعداد Design System بسيط: ألوان، Typography، Spacing، Tokens.
  - إنشاء مكتبة Components أساسية قابلة لإعادة الاستخدام:
    - Button, Input, Textarea, Select (أساسيات النماذج)
    - Card, Badge, Avatar
    - Modal/Dialog, Toast/Notification
    - Loading/Skeleton, Empty state
    - Header/Nav, Footer (Skeleton)
  - Layouts أساسية للصفحات: Public layout + Authenticated layout (قابلة للاستخدام لاحقًا).
  - دعم RTL (عربي) بشكل افتراضي + إمكانية LTR لاحقًا.
  - إعداد نظام Routing + صفحات Placeholder لأهم المسارات (Home, CV List, CV Form, Login/Register placeholders).
  - إعداد طبقة استهلاك API بشكل عام مع **Mock API** (MSW أو mock داخل Next) لحين اكتمال الـ Backend.
  - تحسينات NFR-001: سرعة تحميل/تصفح (أساسيات الأداء: code-splitting, image optimization, caching headers حيث ينطبق).

- **Confirmed Out-of-Scope**:
  - بناء وظائف ميزات CV نفسها (الحقول، CRUD، البحث، التصدير...)؛ هذه ضمن ميزات لاحقة.
  - نظام تصميم كامل متقدم (Storybook/Design QA متقدم) إن لم يكن مطلوبًا الآن.
  - i18n كامل متعدد اللغات (سنجهّز البنية لاتجاه RTL وطباعيات عربية، دون ترجمة كاملة لكل النصوص).
  - تكامل Auth فعلي (FEAT-008)؛ هنا فقط تجهيز Layout/Navigation وواجهات Placeholder.

## 3. Ambiguity Resolution (Decisions Catalog)

| Decision ID | Topic | Uncertainty | Decision Taken | Rationale |
|-------------|-------|-------------|----------------|-----------|
| DEC-FEAT-001-001 | Frontend framework | غير محدد | اعتماد Next.js (App Router) + TS | مناسب لتطبيق صفحات عامة + SEO لقائمة السير، ومناسب لتطوير سريع. |
| DEC-FEAT-001-002 | Styling system | غير محدد | TailwindCSS + tokens عبر CSS variables | سرعة بناء UI واتساق، وقابل للتوسعة لاحقًا. |
| DEC-FEAT-001-003 | UI components | هل نستخدم مكتبة جاهزة؟ | اعتماد مكوّنات خفيفة داخلية (مع إمكانية استخدام Radix UI للـ Dialog/Popover) | يقلل الوقت ويوفر Accessibility جيد بدون ثقل. |
| DEC-FEAT-001-004 | API integration during UI build | الـ Backend غير جاهز | استخدام Mock API عبر MSW أو route handlers | يسمح ببناء الشاشات مبكرًا مع فصل واضح لطبقة البيانات. |
| DEC-FEAT-001-005 | Directionality | هل RTL مطلوب؟ | افتراض RTL افتراضي + دعم LTR اختياري | المشروع عربي غالبًا، ويقلل إعادة العمل لاحقًا. |
| DEC-FEAT-001-006 | State management | غير محدد | الاعتماد على React hooks + TanStack Query لاحقًا (اختياري) | baseline بسيط؛ تجنّب تعقيد مبكر. |

## 4. Key Business Rules Identified
- الاتساق البصري وتجربة موحّدة عبر كامل التطبيق.
- أي شاشة في الميزات القادمة يجب أن تبنى باستخدام Components المشتركة قدر الإمكان.
- تحسين الأداء كشرط غير وظيفي أساسي (NFR-001).

## 5. Implementation Recommendations
- اعتماد بنية مجلدات واضحة:
  - `app/` للـ routes والـ layouts
  - `components/ui/*` لمكوّنات النظام
  - `components/layout/*` للترويسات والـ layouts
  - `lib/api/*` لطبقة الـ API client
  - `lib/mocks/*` لبيانات mock + MSW handlers
  - `styles/` للتوكنز والـ globals
- توحيد أنماط النماذج: حالات الخطأ، required indicator، help text.
- إضافة لقطات UI بسيطة (Playwright/Story snapshots) كحد أدنى لتجنب كسر الـ UI.
