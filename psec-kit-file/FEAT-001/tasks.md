# Tasks – FEAT-001

## 1. Overview
- الهدف: تسليم Baseline UI ثابتة (Layout + Navigation + Home + Placeholder Pages) على ستاك Next.js + Tailwind.

## 2. Task List

### Phase 1: Project Setup
- [ ] T-FEAT-001-001 Initialize Next.js app (TypeScript, App Router) (Target: `/`)
- [ ] T-FEAT-001-002 Install & configure Tailwind CSS + PostCSS (Target: `tailwind.config.*`, `postcss.config.*`, `app/globals.css`)
- [ ] T-FEAT-001-003 Add basic lint/format scripts (optional) (Target: `package.json`)

### Phase 2: Layout & Shared Components
- [ ] T-FEAT-001-004 Create Root Layout with header/footer and main container (Target: `app/layout.tsx`)
- [ ] T-FEAT-001-005 Implement `AppHeader` with navigation links (Target: `components/AppHeader.tsx`)
- [ ] T-FEAT-001-006 Implement `AppFooter` (Target: `components/AppFooter.tsx`)
- [ ] T-FEAT-001-007 Implement `PlaceholderPage` component (Target: `components/PlaceholderPage.tsx`)

### Phase 3: Pages (Static)
- [ ] T-FEAT-001-008 Build Home page content + links to placeholders (Target: `app/page.tsx`)
- [ ] T-FEAT-001-009 Create placeholder: CV Form (Target: `app/cv/page.tsx`)
- [ ] T-FEAT-001-010 Create placeholder: CVs List (Target: `app/cvs/page.tsx`)
- [ ] T-FEAT-001-011 Create placeholder: Search (Target: `app/search/page.tsx`)
- [ ] T-FEAT-001-012 Create placeholder: Filters (Target: `app/filters/page.tsx`)
- [ ] T-FEAT-001-013 Create placeholder: Export (Target: `app/export/page.tsx`)
- [ ] T-FEAT-001-014 Create placeholder: Auth (Target: `app/auth/page.tsx`)

### Phase 4: Polish
- [ ] T-FEAT-001-015 Ensure responsive layout (mobile/tablet/desktop) (Target: all pages/components)
- [ ] T-FEAT-001-016 Basic accessibility pass (headings order, nav landmark, focus styles) (Target: header/nav, links)
- [ ] T-FEAT-001-017 Manual smoke test: navigation to all pages, no console errors (Target: runtime)

## 3. Dependencies Graph
- T-FEAT-001-004 depends on T-FEAT-001-001, T-FEAT-001-002.
- T-FEAT-001-005, T-FEAT-001-006 depend on T-FEAT-001-004.
- T-FEAT-001-008..014 depend on T-FEAT-001-004 and (optionally) T-FEAT-001-007.

## 4. Execution Notes
- حافظ على الصفحات static قدر الإمكان.
- لا تضف state management أو form libraries ضمن هذه الميزة.
