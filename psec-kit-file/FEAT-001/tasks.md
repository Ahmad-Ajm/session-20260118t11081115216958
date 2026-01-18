# Tasks – FEAT-001

## 1. Overview
تجهيز مشروع الواجهة وDesign System ومكتبة مكونات UI + Layouts ومسارات placeholder + Mock API لدعم تطوير بقية الميزات بسرعة وباتساق.

## 2. Task List

### Phase 1: Setup (Frontend)
- [ ] T-FEAT-001-001 Create/verify Next.js (App Router) project with TypeScript (Target: `/`)
- [ ] T-FEAT-001-002 Install & configure TailwindCSS + PostCSS (Target: `tailwind.config.*`, `postcss.config.*`)
- [ ] T-FEAT-001-003 Add global styles + CSS variables tokens scaffold (Target: `styles/globals.css` or `app/globals.css`)
- [ ] T-FEAT-001-004 Configure Arabic font via `next/font` and set default `dir="rtl"` (Target: `app/layout.tsx`)

### Phase 2: Design Tokens
- [ ] T-FEAT-001-005 Define color palette + semantic tokens (primary/neutral/status) (Target: `tailwind.config.*`, `globals.css`)
- [ ] T-FEAT-001-006 Define typography scale + base spacing/radius (Target: `tailwind.config.*`, `globals.css`)

### Phase 3: UI Kit Components
- [ ] T-FEAT-001-007 Implement `Button` (variants/sizes/loading/disabled) (Target: `components/ui/button.tsx`)
- [ ] T-FEAT-001-008 Implement `Input`, `Textarea`, `Select` (Target: `components/ui/*`)
- [ ] T-FEAT-001-009 Implement `FormField` wrapper (label/error/hint) (Target: `components/ui/form-field.tsx`)
- [ ] T-FEAT-001-010 Implement `Card`, `Badge`, `Avatar` (Target: `components/ui/*`)
- [ ] T-FEAT-001-011 Implement `Dialog/Modal` primitive (Target: `components/ui/dialog.tsx`)
- [ ] T-FEAT-001-012 Implement Toast + `useToast` hook (Target: `components/ui/toast.tsx`, `hooks/use-toast.ts`)
- [ ] T-FEAT-001-013 Implement `Spinner`, `Skeleton`, `EmptyState` (Target: `components/ui/*`)

### Phase 4: Layouts & Placeholder Pages
- [ ] T-FEAT-001-014 Build `Header/Nav` + `Footer` + `Container` (Target: `components/layout/*`)
- [ ] T-FEAT-001-015 Create Public layout group and pages (Home, CV list placeholder, CV form placeholder) (Target: `app/(public)/**`, `app/cv/**`)
- [ ] T-FEAT-001-016 Create Auth placeholder pages (Login/Register) (Target: `app/auth/**`)

### Phase 5: Mock API & Data Layer
- [ ] T-FEAT-001-017 Define API client wrapper (fetcher) (Target: `lib/api/client.ts`)
- [ ] T-FEAT-001-018 Add mock data + handlers (MSW or route handlers) and connect to CV list placeholder (Target: `lib/mocks/*` OR `app/api/cv/route.ts`)

### Phase 6: Quality & Baseline Checks
- [ ] T-FEAT-001-019 Add minimal UI regression coverage (Playwright smoke for main routes) (Target: `tests/e2e/*`)
- [ ] T-FEAT-001-020 Run Lighthouse locally and record baseline (Target: `docs/perf-baseline.md` or `progress.md` entry)

## 3. Dependencies Graph
- T-FEAT-001-007 يعتمد على T-FEAT-001-005 و T-FEAT-001-006.
- T-FEAT-001-015 يعتمد على T-FEAT-001-014 ووجود مكونات UI الأساسية.
- T-FEAT-001-018 يعتمد على T-FEAT-001-017.

## 4. Execution Notes
- إبقاء المكوّنات “headless قدر الإمكان” لتسهيل التغيير لاحقًا.
- أي مكوّن جديد يجب أن يدعم RTL (padding/margin logical أو classes مناسبة).
