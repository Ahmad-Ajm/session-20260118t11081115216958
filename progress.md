# Progress

## 2026-01-18

- Reviewed `conversation-summary.md` (approved; not modified).
- Verified `features-map.md` is already populated (not a template) and matches the current approved feature list (FEAT-001 … FEAT-013).

## Current status snapshot

- FEAT-001 (UX/UI Baseline/System): **In-Progress**
- FEAT-002 … FEAT-013: **Not-Start**

## Execution plan (high-level)

1) FEAT-001 – UX/UI baseline
   - Establish global layout, navigation shell, base components, and performance baseline (NFR-001).
   - Output enables consistent UI implementation for upcoming screens.

2) FEAT-008 – Auth (registration/login)
   - Required before enabling add/edit of CVs.

3) FEAT-009 + FEAT-002 + CV field features (FEAT-003..FEAT-007)
   - Define CV domain model + API and implement the single-page CV form (create/update).

4) Public browsing/search/export
   - FEAT-010 list/details, then FEAT-012 search + FEAT-013 filters, then FEAT-011 export with masking.

## Dependencies (as captured in features-map.md)

- FEAT-002 depends on: FEAT-008, FEAT-003, FEAT-004, FEAT-005, FEAT-006, FEAT-007, FEAT-009.
- FEAT-009 depends on: FEAT-008, FEAT-002.
- FEAT-010 depends on: FEAT-009.
- FEAT-011 depends on: FEAT-010.
- FEAT-012 depends on: FEAT-010.
- FEAT-013 depends on: FEAT-010.

## Open questions / clarifications needed

- Visibility: who can view “all available CVs” (public visitors vs logged-in only)?
- Privacy: what counts as “sensitive data” to mask in export (e.g., mobile)?
- Export format: PDF vs printable page vs file.
- Data model: single CV per user vs multiple.
- Auth method: email/phone/password/OTP.
- Publish/visibility control for CV availability.
- Search fields and filter criteria.
- UI languages: Arabic only vs multilingual.
