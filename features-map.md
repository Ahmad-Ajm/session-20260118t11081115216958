# Features Map – Project Feature Inventory

هذا الملف هو الخريطة المركزية لجميع الميزات (Features / Epics) في المشروع.
الهدف منه:

- إعطاء صورة واضحة عن **كل ميزة**: ماذا تفعل؟ لمن؟ وأين توجد مواصفاتها؟
- ربط كل ميزة بنوعها **FeatureType** لاختيار قالب الـ KPI والـ Prompt المناسب.
- أن يكون نقطة البداية لأي عمل جديد على الميزات (Spec Kit, Feature Factory, Testing).

## Feature Types & KPI Templates

لكل ميزة يتم تحديدها في جدول الـ Features يجب تعيين قيمة **FeatureType** بدقة.  
ويتم استخدام **قوالب KPI Templates المتخصصة** لضمان جودة ثابتة لكل نوع من الميزات.

---

## 1. أنواع الميزات (FeatureType)

استخدم أحد القيم التالية في عمود `FeatureType`:

- `CRUD`          – ميزات إنشاء/عرض/تعديل/حذف لكيان معيّن (Full Stack).
- `Reporting`     – تقارير ولوحات تحكم وتحليلات.
- `Search`        – بحث وفلاتر وترتيب ونتائج.
- `Workflow`      – حالات وموافقات وتدفقات عمل.
- `Notifications` – إشعارات Email / SMS / Push / In-App.
- `Integration`   – تكامل مع أنظمة أو APIs خارجية.
- `AI`            – ميزات ذكاء صناعي (Chat, RAG, Agents, Recommendations...).
- `Security`      – صلاحيات، أدوار، سياسات أمان، Auth / AuthZ.

يمكن إضافة أنواع أخرى لاحقًا 

### العلاقة الإلزامية بين FeatureType وقالب الـ KPI:

- عند تحديد `FeatureType = CRUD`  
  يجب استخدام قالب الـ KPI التالي كـ **Definition of Done** للميزة:  
  `specifications/12-testing/kpi-crud-template.md`

- عند تحديد `FeatureType = Reporting`  
  يجب استخدام قالب الـ KPI التالي:  
  `specifications/12-testing/kpi-reporting-template.md`

- عند تحديد `FeatureType = Search`  
  يجب استخدام قالب الـ KPI التالي:  
  `specifications/12-testing/kpi-search-template.md`

- عند تحديد `FeatureType = Workflow`  
  يجب استخدام قالب الـ KPI التالي:  
  `specifications/12-testing/kpi-workflow-template.md`

- عند تحديد `FeatureType = Notifications`  
  يجب استخدام قالب الـ KPI التالي:  
  `specifications/12-testing/kpi-notifications-template.md`

- عند تحديد `FeatureType = Integration`  
  يجب استخدام قالب الـ KPI التالي:  
  `specifications/12-testing/kpi-integration-template.md`

- عند تحديد `FeatureType = AI`  
  يجب استخدام قالب الـ KPI التالي:  
  `specifications/12-testing/kpi-ai-template.md`

- عند تحديد `FeatureType = Security`  
  يجب استخدام قالب الـ KPI التالي:  
  `specifications/12-testing/kpi-security-template.md`
---

## 2. نظرة عامة – جدول الميزات

املأ هذا الجدول لكل Feature رئيسية في المشروع.

- **FeatureId**: معرف قصير ثابت (FEAT-XXXX).
- **FeatureName**: اسم الميزة بشكل مفهوم للبشر.
- **FeatureType**: أحد الأنواع المذكورة أعلاه.
- **Summary**: ملخّص قصير (سطر واحد) لوظيفة الميزة.
- **Personas**: من سيستخدم هذه الميزة؟ (User, Admin, Owner, Broker, ...).
- **Requirements**: معرفات المتطلبات المرتبطة (FR-01, NFR-02, ... إن وُجدت).
- **SpecFolders**: المجلدات/الملفات في `specifications/*` التي تتعلق بهذه الميزة.
- **Priority**: أولوية التنفيذ (P0, P1, P2, ...).
- **Status**: حالة الميزة (Planned, In-Progress, Done, Deprecated, ...).

> 👇 النموذج التالي يحتوي صفًا واحدًا **مثالًا فقط**.
> عدّل القيم أو انسخ الصف وأضف صفوفًا جديدة لكل ميزة.

| FeatureId      | FeatureName        | FeatureType | Summary                                      | Personas         | Requirements      | SpecFolders                             | Priority | Status      |
|----------------|--------------------|-------------|----------------------------------------------|------------------|-------------------|------------------------------------------|----------|------------|
| FEAT-EXAMPLE01 | Example Feature    | CRUD        | مثال لميزة CRUD كاملة (إنشاء/عرض/تعديل/حذف) | Admin, User      | FR-EX-01, FR-EX-02 | 04-domain, 07-api, 08-ui                | P1       | Planned    |
| FEAT-001 | UX/UI (Baseline/System) | CRUD | إعداد أساسيات الواجهة والتصميم العام ومكونات النظام الأساسية للتطبيق. | User, Visitor | NFR-001 | 08-ui | P0 | Not-Start |
| FEAT-002 | صفحة واحدة لإدخال بيانات CV | CRUD | شاشة واحدة تجمع إدخال وتعديل بيانات السيرة الذاتية في نموذج موحّد. | User |  | 08-ui, 07-api, 04-domain | P0 | Not-Start |
| FEAT-003 | حقول: الاسم | CRUD | دعم إدخال/تخزين/عرض حقل الاسم ضمن بيانات السيرة الذاتية. | User, Visitor |  | 04-domain, 07-api, 08-ui | P0 | Not-Start |
| FEAT-004 | حقول: الموبايل | CRUD | دعم إدخال/تخزين/عرض رقم الموبايل ضمن بيانات السيرة الذاتية. | User |  | 04-domain, 07-api, 08-ui | P0 | Not-Start |
| FEAT-005 | حقول: الصورة | CRUD | رفع/تخزين/عرض صورة شخصية ضمن السيرة الذاتية. | User, Visitor |  | 04-domain, 07-api, 08-ui | P1 | Not-Start |
| FEAT-006 | حقول: الخبرات | CRUD | إدارة عناصر الخبرات المهنية ضمن السيرة الذاتية (إضافة/تعديل/حذف). | User, Visitor |  | 04-domain, 07-api, 08-ui | P0 | Not-Start |
| FEAT-007 | حقول: التعليم | CRUD | إدارة عناصر التعليم ضمن السيرة الذاتية (إضافة/تعديل/حذف). | User, Visitor |  | 04-domain, 07-api, 08-ui | P0 | Not-Start |
| FEAT-008 | تسجيل المستخدمين لإضافة/تعديل السير الذاتية | Security | تمكين التسجيل/تسجيل الدخول لحماية تعديل/إضافة السير الذاتية للمستخدمين. | User |  | 07-api, 08-ui | P0 | Not-Start |
| FEAT-009 | إنشاء سيرة ذاتية من المعلومات المدخلة | CRUD | إنشاء/حفظ كيان سيرة ذاتية من البيانات المدخلة وربطه بالمستخدم. | User |  | 04-domain, 07-api | P0 | Not-Start |
| FEAT-010 | عرض جميع السير الذاتية المتاحة | CRUD | عرض قائمة بالسير الذاتية المتاحة للعرض مع الانتقال لصفحة التفاصيل. | Visitor, User |  | 07-api, 08-ui | P0 | Not-Start |
| FEAT-011 | تصدير السيرة الذاتية للزوار مع إخفاء البيانات الحساسة | Workflow | تصدير/طباعة سيرة ذاتية بنسخة للزوار مع إخفاء بيانات حساسة (لم تُحدد بعد). | Visitor, User |  | 07-api, 08-ui | P1 | Not-Start |
| FEAT-012 | بحث سريع في السير الذاتية | Search | بحث سريع نصّي ضمن السير الذاتية المتاحة وإظهار النتائج. | Visitor, User |  | 07-api, 08-ui | P0 | Not-Start |
| FEAT-013 | تصفية سريعة للسير الذاتية | Search | فلاتر سريعة على السير الذاتية المتاحة حسب معايير تُحدد لاحقًا. | Visitor, User |  | 07-api, 08-ui | P1 | Not-Start |

أضف الصفوف الحقيقية هنا أسفل المثال ↑.

---

## 3. تفاصيل الميزات (Feature Details)

اكتب سكشن منفصل لكل Feature، بنفس القالب التالي.
يمكنك نسخ الـ Template ولصقه لكل ميزة ثم تعبئته.

> لا تحذف هذا القالب؛ فقط انسخه أسفله لكل ميزة.

### Template – انسخ هذا البلوك لكل ميزة جديدة

```md
### <FeatureId> – <FeatureName>
**Type:** <FeatureType>  
**Summary:** وصف مختصر للميزة في سطر أو سطرين يوضح الهدف التجاري.  
**Personas:** اذكر المستخدمين أو الأدوار المستهدفة (مثال: Admin, Owner, Buyer).  
**Requirements:** FR-xx, NFR-xx (إن وُجدت) أو اتركها فارغة مؤقتًا.  
**Spec Folders / Files:**  
- `specifications/XX-something/...`
- `specifications/YY-other/...`

**Dependencies / Relations:**  
- تعتمد على: (مثال: FEAT-AUTH, FEAT-SEARCH)  
- تؤثر على: (مثال: FEAT-REPORTS)

**KPI Template:**  
- إذا كان النوع `CRUD` → استخدم: `specifications/12-testing/kpi-crud-template.md`  
- إذا كان `Reporting` → استخدم: `specifications/12-testing/kpi-reporting-template.md`  
- إذا كان `Search` → استخدم: `specifications/12-testing/kpi-search-template.md`  
- إذا كان `Workflow` → استخدم: `specifications/12-testing/kpi-workflow-template.md`  
- إذا كان `Notifications` → استخدم: `specifications/12-testing/kpi-notifications-template.md`  
- إذا كان `Integration` → استخدم: `specifications/12-testing/kpi-integration-template.md`  
- إذا كان `AI` → استخدم: `specifications/12-testing/kpi-ai-template.md`  
- إذا كان `Security` → استخدم: `specifications/12-testing/kpi-security-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-<type>.txt`

**Notes / Open Questions:**  
- ضع هنا أي أسئلة أو نقاط غير محسومة بعد.
```

---

## 4. مثال عملي مكتمل لميزة واحدة (يمكنك حذفه أو تعديله)

المثال التالي فقط لتوضيح كيفية تعبئة التفاصيل. غيّره بما يناسب مشروعك.

### FEAT-CITIES – City Management
**Type:** CRUD  
**Summary:** إدارة المدن (إضافة مدينة جديدة، تعديل بيانات مدينة، حذف/تعطيل مدينة، عرض قائمة المدن مع البحث والفلاتر البسيطة).  
**Personas:** Admin  
**Requirements:** FR-10, FR-11 (أمثلة؛ غيّرها بما يناسبك)  
**Spec Folders / Files:**  
- `specifications/04-domain/locations.md`  
- `specifications/07-api/cities-api.md`  
- `specifications/08-ui/cities-screens.md`  

**Dependencies / Relations:**  
- تعتمد على: FEAT-AUTH (لمنع الوصول لغير المديرين)  
- تؤثر على: FEAT-REPORTS (تقارير تعتمد على المدن)، FEAT-SEARCH (بحث حسب المدينة)  

**KPI Template:**  
- `specifications/12-testing/kpi-crud-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-crud.txt`

**Notes / Open Questions:**  
- هل نحتاج حقل كود المدينة (Code) موحّد مع نظام خارجي؟  
- هل نسمح بالتعطيل بدل الحذف النهائي؟

---

بعد هذا المثال، ابدأ بإضافة سكاشن حقيقية لكل Feature في مشروعك بنفس القالب.
يمكنك ترتيبها حسب الأولوية أو حسب الدومين (Auth, Users, Search, Reporting, AI, Integration, ...).

---

### FEAT-001 – UX/UI (Baseline/System)
**Type:** CRUD  
**Summary:** إعداد أساسيات الواجهة والتصميم العام ومكونات النظام الأساسية للتطبيق.  
**Personas:** User, Visitor  
**Requirements:** NFR-001  
**Spec Folders / Files:**  
- `specifications/08-ui/`

**Dependencies / Relations:**  
- تعتمد على: —  
- تؤثر على: FEAT-002, FEAT-010, FEAT-012, FEAT-013

**KPI Template:**  
- `specifications/12-testing/kpi-crud-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-crud.txt`

**Notes / Open Questions:**  
- متطلبات التصميم (تعدد اللغات/RTL) لم تُحدد بعد.

### FEAT-002 – صفحة واحدة لإدخال بيانات CV
**Type:** CRUD  
**Summary:** شاشة واحدة تجمع إدخال وتعديل بيانات السيرة الذاتية في نموذج موحّد.  
**Personas:** User  
**Requirements:**  
**Spec Folders / Files:**  
- `specifications/08-ui/`
- `specifications/07-api/`
- `specifications/04-domain/`

**Dependencies / Relations:**  
- تعتمد على: FEAT-008, FEAT-003, FEAT-004, FEAT-005, FEAT-006, FEAT-007, FEAT-009  
- تؤثر على: FEAT-009

**KPI Template:**  
- `specifications/12-testing/kpi-crud-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-crud.txt`

**Notes / Open Questions:**  
- هل لكل مستخدم سيرة واحدة أم عدة سير؟ (تؤثر على تصميم النموذج)

### FEAT-003 – حقول: الاسم
**Type:** CRUD  
**Summary:** دعم إدخال/تخزين/عرض حقل الاسم ضمن بيانات السيرة الذاتية.  
**Personas:** User, Visitor  
**Requirements:**  
**Spec Folders / Files:**  
- `specifications/04-domain/`
- `specifications/07-api/`
- `specifications/08-ui/`

**Dependencies / Relations:**  
- تعتمد على: FEAT-002, FEAT-009  
- تؤثر على: FEAT-010, FEAT-011, FEAT-012, FEAT-013

**KPI Template:**  
- `specifications/12-testing/kpi-crud-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-crud.txt`

**Notes / Open Questions:**  
- هل الاسم متعدد الأجزاء؟ وهل يدعم العربية/الإنجليزية؟

### FEAT-004 – حقول: الموبايل
**Type:** CRUD  
**Summary:** دعم إدخال/تخزين/عرض رقم الموبايل ضمن بيانات السيرة الذاتية.  
**Personas:** User  
**Requirements:**  
**Spec Folders / Files:**  
- `specifications/04-domain/`
- `specifications/07-api/`
- `specifications/08-ui/`

**Dependencies / Relations:**  
- تعتمد على: FEAT-002, FEAT-009  
- تؤثر على: FEAT-011

**KPI Template:**  
- `specifications/12-testing/kpi-crud-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-crud.txt`

**Notes / Open Questions:**  
- هل رقم الموبايل يُعتبر “بيانات حساسة” يجب إخفاؤها عند التصدير؟

### FEAT-005 – حقول: الصورة
**Type:** CRUD  
**Summary:** رفع/تخزين/عرض صورة شخصية ضمن السيرة الذاتية.  
**Personas:** User, Visitor  
**Requirements:**  
**Spec Folders / Files:**  
- `specifications/04-domain/`
- `specifications/07-api/`
- `specifications/08-ui/`

**Dependencies / Relations:**  
- تعتمد على: FEAT-002, FEAT-009  
- تؤثر على: FEAT-010, FEAT-011

**KPI Template:**  
- `specifications/12-testing/kpi-crud-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-crud.txt`

**Notes / Open Questions:**  
- سياسات الحجم/النوع/القصّ (crop) غير محددة.

### FEAT-006 – حقول: الخبرات
**Type:** CRUD  
**Summary:** إدارة عناصر الخبرات المهنية ضمن السيرة الذاتية (إضافة/تعديل/حذف).  
**Personas:** User, Visitor  
**Requirements:**  
**Spec Folders / Files:**  
- `specifications/04-domain/`
- `specifications/07-api/`
- `specifications/08-ui/`

**Dependencies / Relations:**  
- تعتمد على: FEAT-002, FEAT-009  
- تؤثر على: FEAT-010, FEAT-011, FEAT-012, FEAT-013

**KPI Template:**  
- `specifications/12-testing/kpi-crud-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-crud.txt`

**Notes / Open Questions:**  
- ما هي حقول الخبرة المطلوبة (مسمى، شركة، مدة، وصف...)؟

### FEAT-007 – حقول: التعليم
**Type:** CRUD  
**Summary:** إدارة عناصر التعليم ضمن السيرة الذاتية (إضافة/تعديل/حذف).  
**Personas:** User, Visitor  
**Requirements:**  
**Spec Folders / Files:**  
- `specifications/04-domain/`
- `specifications/07-api/`
- `specifications/08-ui/`

**Dependencies / Relations:**  
- تعتمد على: FEAT-002, FEAT-009  
- تؤثر على: FEAT-010, FEAT-011, FEAT-012, FEAT-013

**KPI Template:**  
- `specifications/12-testing/kpi-crud-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-crud.txt`

**Notes / Open Questions:**  
- ما هي حقول التعليم المطلوبة (الدرجة، الجهة، السنة...)؟

### FEAT-008 – تسجيل المستخدمين لإضافة/تعديل السير الذاتية
**Type:** Security  
**Summary:** تمكين التسجيل/تسجيل الدخول لحماية تعديل/إضافة السير الذاتية للمستخدمين.  
**Personas:** User  
**Requirements:**  
**Spec Folders / Files:**  
- `specifications/07-api/`
- `specifications/08-ui/`

**Dependencies / Relations:**  
- تعتمد على: —  
- تؤثر على: FEAT-002, FEAT-009

**KPI Template:**  
- `specifications/12-testing/kpi-security-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-security.txt`

**Notes / Open Questions:**  
- آلية التسجيل/الدخول غير محددة (بريد/هاتف/OTP/كلمة مرور).

### FEAT-009 – إنشاء سيرة ذاتية من المعلومات المدخلة
**Type:** CRUD  
**Summary:** إنشاء/حفظ كيان سيرة ذاتية من البيانات المدخلة وربطه بالمستخدم.  
**Personas:** User  
**Requirements:**  
**Spec Folders / Files:**  
- `specifications/04-domain/`
- `specifications/07-api/`

**Dependencies / Relations:**  
- تعتمد على: FEAT-008, FEAT-002  
- تؤثر على: FEAT-010, FEAT-011, FEAT-012, FEAT-013

**KPI Template:**  
- `specifications/12-testing/kpi-crud-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-crud.txt`

**Notes / Open Questions:**  
- هل هناك حالة “متاح للعرض” أم النشر تلقائي؟

### FEAT-010 – عرض جميع السير الذاتية المتاحة
**Type:** CRUD  
**Summary:** عرض قائمة بالسير الذاتية المتاحة للعرض مع الانتقال لصفحة التفاصيل.  
**Personas:** Visitor, User  
**Requirements:**  
**Spec Folders / Files:**  
- `specifications/07-api/`
- `specifications/08-ui/`

**Dependencies / Relations:**  
- تعتمد على: FEAT-009  
- تؤثر على: FEAT-012, FEAT-013, FEAT-011

**KPI Template:**  
- `specifications/12-testing/kpi-crud-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-crud.txt`

**Notes / Open Questions:**  
- من يحق له رؤية جميع السير الذاتية المتاحة؟ (زوار بدون تسجيل أم مسجلون فقط؟)

### FEAT-011 – تصدير السيرة الذاتية للزوار مع إخفاء البيانات الحساسة
**Type:** Workflow  
**Summary:** تصدير/طباعة سيرة ذاتية بنسخة للزوار مع إخفاء بيانات حساسة (لم تُحدد بعد).  
**Personas:** Visitor, User  
**Requirements:**  
**Spec Folders / Files:**  
- `specifications/07-api/`
- `specifications/08-ui/`

**Dependencies / Relations:**  
- تعتمد على: FEAT-010  
- تؤثر على: —

**KPI Template:**  
- `specifications/12-testing/kpi-workflow-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-workflow.txt`

**Notes / Open Questions:**  
- ما هي “البيانات الحساسة” تحديدًا؟
- صيغة التصدير المطلوبة (PDF/صفحة قابلة للطباعة/ملف...)

### FEAT-012 – بحث سريع في السير الذاتية
**Type:** Search  
**Summary:** بحث سريع نصّي ضمن السير الذاتية المتاحة وإظهار النتائج.  
**Personas:** Visitor, User  
**Requirements:**  
**Spec Folders / Files:**  
- `specifications/07-api/`
- `specifications/08-ui/`

**Dependencies / Relations:**  
- تعتمد على: FEAT-010  
- تؤثر على: —

**KPI Template:**  
- `specifications/12-testing/kpi-search-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-search.txt`

**Notes / Open Questions:**  
- حقول البحث المستهدفة غير محددة.

### FEAT-013 – تصفية سريعة للسير الذاتية
**Type:** Search  
**Summary:** فلاتر سريعة على السير الذاتية المتاحة حسب معايير تُحدد لاحقًا.  
**Personas:** Visitor, User  
**Requirements:**  
**Spec Folders / Files:**  
- `specifications/07-api/`
- `specifications/08-ui/`

**Dependencies / Relations:**  
- تعتمد على: FEAT-010  
- تؤثر على: —

**KPI Template:**  
- `specifications/12-testing/kpi-search-template.md`

**Recommended Feature Prompt (Cursor):**  
- `cursor_prompt_feature-search.txt`

**Notes / Open Questions:**  
- معايير التصفية غير محددة بعد.
