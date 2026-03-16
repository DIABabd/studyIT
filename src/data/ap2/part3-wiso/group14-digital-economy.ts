import type { TopicGroup } from '../../../types';

export const digitalEconomy: TopicGroup = {
  id: 'group14-digital-economy',
  name: {
    de: 'Digitale Wirtschaft',
    ar: 'الاقتصاد الرقمي',
  },
  description: {
    de: 'Digitalisierung, Automatisierung und Industrie 4.0 im wirtschaftlichen Kontext',
    ar: 'الرقمنة والأتمتة والصناعة 4.0 في السياق الاقتصادي',
  },
  topics: [
    {
      id: 'digitalisierung',
      name: { de: 'Digitalisierung', ar: 'الرقمنة' },
      content: {
        definition: {
          de: 'Digitalisierung bezeichnet den Prozess der Umwandlung von analogen Informationen und Prozessen in digitale Formate sowie die Integration digitaler Technologien in alle Bereiche von Wirtschaft und Gesellschaft (digitale Transformation). Sie verändert Geschäftsmodelle, Arbeitsweisen und Kundenbeziehungen grundlegend.',
          ar: 'الرقمنة تشير إلى عملية تحويل المعلومات والعمليات التناظرية إلى صيغ رقمية وكذلك دمج التقنيات الرقمية في جميع مجالات الاقتصاد والمجتمع (التحول الرقمي). تُغير نماذج الأعمال وأساليب العمل وعلاقات العملاء بشكل جوهري.',
        },
        keyPoints: [
          {
            de: 'Digitale Transformation: Grundlegende Veränderung von Geschäftsprozessen durch digitale Technologien',
            ar: 'التحول الرقمي: تغيير جوهري في عمليات الأعمال من خلال التقنيات الرقمية',
          },
          {
            de: 'Auswirkungen auf die Arbeitswelt: Neue Berufsbilder, Remote Work, agile Methoden, Flexibilisierung',
            ar: 'التأثيرات على عالم العمل: صور مهنية جديدة، العمل عن بُعد، الأساليب المرنة، المرونة',
          },
          {
            de: 'Chancen: Effizienzsteigerung, neue Geschäftsmodelle, bessere Kundeninteraktion. Risiken: Jobverlust, digitale Spaltung, Datenschutzprobleme',
            ar: 'الفرص: زيادة الكفاءة، نماذج أعمال جديدة، تفاعل أفضل مع العملاء. المخاطر: فقدان الوظائف، الفجوة الرقمية، مشاكل حماية البيانات',
          },
        ],
        examples: [
          {
            de: 'Ein traditionelles Handelsunternehmen eröffnet einen Online-Shop mit automatisierter Lagerverwaltung, KI-basierter Produktempfehlung und digitaler Buchhaltung.',
            ar: 'تفتح شركة تجارية تقليدية متجراً إلكترونياً مع إدارة مستودع آلية وتوصيات منتجات قائمة على الذكاء الاصطناعي ومحاسبة رقمية.',
          },
        ],
        examRelevance: {
          de: 'Die Digitalisierung und ihre Auswirkungen auf Wirtschaft und Arbeitswelt sind ein zunehmend wichtiges Prüfungsthema.',
          ar: 'الرقمنة وتأثيراتها على الاقتصاد وعالم العمل هي موضوع امتحاني متزايد الأهمية.',
        },
        summary: {
          de: 'Digitalisierung transformiert Wirtschaft und Gesellschaft durch digitale Technologien. Sie bietet Chancen wie Effizienz, birgt aber auch Risiken wie Jobverlust.',
          ar: 'تحول الرقمنة الاقتصاد والمجتمع من خلال التقنيات الرقمية. تقدم فرصاً مثل الكفاءة لكنها تنطوي أيضاً على مخاطر مثل فقدان الوظائف.',
        },
      },
    },
    {
      id: 'automatisierung',
      name: { de: 'Automatisierung', ar: 'الأتمتة' },
      content: {
        definition: {
          de: 'Automatisierung ist der Einsatz von Technologie, um Prozesse und Aufgaben ohne oder mit minimalem menschlichen Eingriff durchzuführen. In der IT umfasst dies Robotic Process Automation (RPA), CI/CD-Pipelines, automatisierte Tests und Infrastructure as Code. Automatisierung steigert Effizienz, reduziert Fehler und ermöglicht Skalierung.',
          ar: 'الأتمتة هي استخدام التكنولوجيا لتنفيذ العمليات والمهام بدون أو بأقل تدخل بشري. في تكنولوجيا المعلومات تشمل أتمتة العمليات الروبوتية (RPA) وخطوط CI/CD والاختبارات الآلية والبنية التحتية ككود. تزيد الأتمتة الكفاءة وتقلل الأخطاء وتمكّن من التوسع.',
        },
        keyPoints: [
          {
            de: 'Vorteile: Höhere Produktivität, weniger Fehler, Kostensenkung, 24/7-Betrieb möglich',
            ar: 'المزايا: إنتاجية أعلى، أخطاء أقل، خفض التكاليف، إمكانية التشغيل على مدار الساعة',
          },
          {
            de: 'Herausforderungen: Investitionskosten, Qualifizierungsbedarf, möglicher Arbeitsplatzabbau, Abhängigkeit von Technologie',
            ar: 'التحديات: تكاليف الاستثمار، الحاجة إلى التأهيل، تخفيض محتمل للوظائف، الاعتماد على التكنولوجيا',
          },
          {
            de: 'Gesellschaftliche Auswirkungen: Wandel der Arbeitswelt, Bedarf an neuen Qualifikationen, Diskussion über Grundeinkommen',
            ar: 'التأثيرات الاجتماعية: تغير عالم العمل، الحاجة إلى مؤهلات جديدة، نقاش حول الدخل الأساسي',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Team automatisiert den Software-Deployment-Prozess mit einer CI/CD-Pipeline: Code wird automatisch gebaut, getestet und auf den Server deployed, was den Prozess von Stunden auf Minuten verkürzt.',
            ar: 'يؤتمت فريق تكنولوجيا معلومات عملية نشر البرمجيات بخط CI/CD: يتم بناء الكود واختباره ونشره على الخادم تلقائياً، مما يختصر العملية من ساعات إلى دقائق.',
          },
        ],
        examRelevance: {
          de: 'Automatisierung im Kontext von Industrie 4.0 und die Auswirkungen auf den Arbeitsmarkt werden in WiSo-Prüfungen behandelt.',
          ar: 'يتم تناول الأتمتة في سياق الصناعة 4.0 والتأثيرات على سوق العمل في امتحانات WiSo.',
        },
        summary: {
          de: 'Automatisierung ersetzt manuelle Prozesse durch Technologie. Sie steigert Effizienz, erfordert aber neue Qualifikationen und verändert den Arbeitsmarkt.',
          ar: 'تستبدل الأتمتة العمليات اليدوية بالتكنولوجيا. تزيد الكفاءة لكنها تتطلب مؤهلات جديدة وتغير سوق العمل.',
        },
      },
    },
    {
      id: 'industrie-4-0',
      name: { de: 'Industrie 4.0', ar: 'الصناعة 4.0' },
      content: {
        definition: {
          de: 'Industrie 4.0 bezeichnet die vierte industrielle Revolution, die durch die Vernetzung von Maschinen, Produkten und Menschen über das Internet der Dinge (IoT) gekennzeichnet ist. Kernelemente sind Cyber-Physische Systeme (CPS), Smart Factories, Big Data und Künstliche Intelligenz. Ziel ist die intelligente, selbststeuernde Produktion.',
          ar: 'الصناعة 4.0 تشير إلى الثورة الصناعية الرابعة التي تتميز بربط الآلات والمنتجات والبشر عبر إنترنت الأشياء (IoT). العناصر الأساسية هي الأنظمة السيبرانية-الفيزيائية (CPS) والمصانع الذكية والبيانات الضخمة والذكاء الاصطناعي. الهدف هو الإنتاج الذكي ذاتي التحكم.',
        },
        keyPoints: [
          {
            de: 'Vier industrielle Revolutionen: 1. Dampfmaschine, 2. Fließband/Elektrizität, 3. Computer/Automatisierung, 4. Vernetzung/IoT/KI',
            ar: 'أربع ثورات صناعية: 1. المحرك البخاري، 2. خط التجميع/الكهرباء، 3. الكمبيوتر/الأتمتة، 4. الربط الشبكي/إنترنت الأشياء/الذكاء الاصطناعي',
          },
          {
            de: 'Kernelemente: IoT (vernetzte Geräte), Big Data (Datenanalyse), KI (intelligente Entscheidungen), Cloud Computing, Robotik',
            ar: 'العناصر الأساسية: إنترنت الأشياء (أجهزة مترابطة)، البيانات الضخمة (تحليل البيانات)، الذكاء الاصطناعي (قرارات ذكية)، الحوسبة السحابية، الروبوتات',
          },
          {
            de: 'Smart Factory: Selbststeuernde Produktionsanlage, in der Maschinen, Werkstücke und Logistiksysteme miteinander kommunizieren',
            ar: 'المصنع الذكي: منشأة إنتاج ذاتية التحكم تتواصل فيها الآلات وقطع العمل وأنظمة اللوجستيات مع بعضها البعض',
          },
        ],
        examples: [
          {
            de: 'In einer Smart Factory erkennt ein Werkstück über einen RFID-Chip selbst, welche Bearbeitungsschritte nötig sind, und kommuniziert dies automatisch an die entsprechenden Maschinen.',
            ar: 'في مصنع ذكي تتعرف قطعة العمل عبر رقاقة RFID بنفسها على خطوات المعالجة المطلوبة وتتواصل تلقائياً مع الآلات المناسبة.',
          },
        ],
        examRelevance: {
          de: 'Industrie 4.0 und die vier industriellen Revolutionen sind ein wichtiges Prüfungsthema, besonders für IT-Berufe.',
          ar: 'الصناعة 4.0 والثورات الصناعية الأربع هي موضوع امتحاني مهم، خاصة لمهن تكنولوجيا المعلومات.',
        },
        summary: {
          de: 'Industrie 4.0 vernetzt Produktion durch IoT, KI und Big Data. Die Smart Factory produziert intelligent und selbststeuernd.',
          ar: 'تربط الصناعة 4.0 الإنتاج من خلال إنترنت الأشياء والذكاء الاصطناعي والبيانات الضخمة. ينتج المصنع الذكي بذكاء وبشكل ذاتي التحكم.',
        },
      },
    },
  ],
};
