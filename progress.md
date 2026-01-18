# Progress

## 2026-01-18

- Initialized `features-map.md` from the approved `conversation-summary.md` (do not modify the summary).
- Current overall feature status: all features are **Not-Start** (per orchestration rule).
- Noted open questions in feature detail sections (visibility of CVs, sensitive fields masking, export format, auth method, etc.).

### Known tooling issue
- `Call_app_build_GitHub_Get_Files_` sometimes returns 404 due to confusion between `filespath` and `path`.
- Workaround used: `Call_app_build_GitHub_Files_Gateway_` with `upsert_file` + later verification via `get_dir_tree`/`get_files_tree`.
