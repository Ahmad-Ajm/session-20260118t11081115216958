export type CvListItem = {
  id: string;
  fullName: string;
  avatarUrl?: string;
  headline?: string;
  updatedAt: string;
};

export const mockCvList: CvListItem[] = [
  {
    id: "cv_1",
    fullName: "سارة أحمد",
    headline: "مصممة واجهات وتجربة مستخدم",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
  },
  {
    id: "cv_2",
    fullName: "محمد علي",
    headline: "مهندس برمجيات — Frontend",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  },
  {
    id: "cv_3",
    fullName: "ريم خالد",
    headline: "محللة بيانات",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
  },
];
