import type { Exam } from '../../types';

export const ap1: Exam = {
  id: 'ap1',
  name: {
    de: 'AP1 – Einrichten eines IT-gestützten Arbeitsplatzes',
    ar: 'AP1 – إعداد بيئة عمل مدعومة بتقنية المعلومات',
  },
  description: {
    de: 'Teil 1 der gestreckten Abschlussprüfung',
    ar: 'الجزء الأول من الامتحان النهائي الممتد',
  },
  icon: '📘',
  parts: [
    {
      id: 'part1',
      name: {
        de: 'Arbeitsplatz einrichten',
        ar: 'إعداد مكان العمل',
      },
      description: {
        de: 'Hardware, Software und Netzwerk einrichten',
        ar: 'إعداد الأجهزة والبرمجيات والشبكة',
      },
      topicGroups: [],
    },
    {
      id: 'part2',
      name: {
        de: 'IT-Systeme und Netzwerke',
        ar: 'أنظمة تقنية المعلومات والشبكات',
      },
      description: {
        de: 'Grundlagen der IT-Systeme und Netzwerktechnik',
        ar: 'أساسيات أنظمة تقنية المعلومات وتقنيات الشبكات',
      },
      topicGroups: [],
    },
    {
      id: 'part3',
      name: {
        de: 'IT-Sicherheit und Datenschutz',
        ar: 'أمن تقنية المعلومات وحماية البيانات',
      },
      description: {
        de: 'Sicherheitskonzepte und Datenschutzgrundlagen',
        ar: 'مفاهيم الأمان وأساسيات حماية البيانات',
      },
      topicGroups: [],
    },
  ],
  isPlaceholder: true,
};
