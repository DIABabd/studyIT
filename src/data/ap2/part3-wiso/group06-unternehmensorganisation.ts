import type { TopicGroup } from '../../../types';

export const unternehmensorganisation: TopicGroup = {
  id: 'group06-unternehmensorganisation',
  name: {
    de: 'Unternehmensorganisation',
    ar: 'تنظيم الشركات',
  },
  description: {
    de: 'Aufbau- und Ablauforganisation: Organisationsformen und Strukturen von Unternehmen',
    ar: 'التنظيم الهيكلي والعملي: أشكال التنظيم وهياكل الشركات',
  },
  priority: 'high',
  topics: [
    {
      id: 'aufbauorganisation',
      name: { de: 'Aufbauorganisation', ar: 'التنظيم الهيكلي' },
      content: {
        definition: {
          de: 'Die Aufbauorganisation beschreibt die hierarchische Struktur eines Unternehmens, also die Gliederung in Abteilungen, Stellen und die Über-/Unterordnungsverhältnisse. Sie wird im Organigramm dargestellt und beantwortet die Frage: Wer ist wem unterstellt? Welche Abteilungen gibt es? Wie sind Kompetenzen und Verantwortlichkeiten verteilt?',
          ar: 'يصف التنظيم الهيكلي البنية الهرمية للشركة، أي التقسيم إلى أقسام ومناصب وعلاقات الرئاسة والمرؤوسية. يُعرض في المخطط التنظيمي ويجيب على السؤال: من يخضع لمن؟ ما هي الأقسام الموجودة؟ كيف يتم توزيع الصلاحيات والمسؤوليات؟',
        },
        keyPoints: [
          {
            de: 'Stellenbildung: Zusammenfassung von Aufgaben zu Stellen (kleinste organisatorische Einheit)',
            ar: 'تشكيل المناصب: تجميع المهام في مناصب (أصغر وحدة تنظيمية)',
          },
          {
            de: 'Abteilungsbildung: Zusammenfassung von Stellen zu Abteilungen (nach Funktion, Produkt, Region oder Kunden)',
            ar: 'تشكيل الأقسام: تجميع المناصب في أقسام (حسب الوظيفة أو المنتج أو المنطقة أو العملاء)',
          },
          {
            de: 'Darstellung im Organigramm: Zeigt Hierarchie, Weisungsbefugnisse und Kommunikationswege',
            ar: 'العرض في المخطط التنظيمي: يُظهر الهرمية وصلاحيات إصدار التعليمات وقنوات الاتصال',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Unternehmen gliedert sich in Abteilungen: Geschäftsführung → Entwicklung, Vertrieb, Support, Personal, Finanzen. Jede Abteilung hat einen Abteilungsleiter.',
            ar: 'تُقسم شركة تكنولوجيا معلومات إلى أقسام: الإدارة → التطوير، المبيعات، الدعم، الموارد البشرية، المالية. لكل قسم مدير قسم.',
          },
        ],
        examRelevance: {
          de: 'Die Aufbauorganisation wird häufig im Zusammenhang mit Organigrammen und Organisationsformen (Linien-, Stablinien-, Matrixorganisation) geprüft.',
          ar: 'يتم فحص التنظيم الهيكلي بشكل متكرر فيما يتعلق بالمخططات التنظيمية وأشكال التنظيم (التنظيم الخطي، الخطي المعاون، المصفوفي).',
        },
        summary: {
          de: 'Die Aufbauorganisation gliedert das Unternehmen in Stellen und Abteilungen mit klaren Hierarchien und wird im Organigramm dargestellt.',
          ar: 'يُقسم التنظيم الهيكلي الشركة إلى مناصب وأقسام بتسلسل هرمي واضح ويُعرض في المخطط التنظيمي.',
        },
      },
    },
    {
      id: 'ablauforganisation',
      name: { de: 'Ablauforganisation', ar: 'التنظيم العملي' },
      content: {
        definition: {
          de: 'Die Ablauforganisation regelt die zeitliche und räumliche Abfolge von Arbeitsprozessen. Sie beantwortet die Frage: Wer macht was, wann, wo und in welcher Reihenfolge? Ziel ist die optimale Gestaltung der Arbeitsabläufe hinsichtlich Zeit, Kosten und Qualität. Werkzeuge sind Flussdiagramme, Prozessbeschreibungen und BPMN-Modelle.',
          ar: 'ينظم التنظيم العملي التسلسل الزمني والمكاني لعمليات العمل. يجيب على السؤال: من يفعل ماذا، متى، أين وبأي ترتيب؟ الهدف هو التصميم الأمثل لسير العمل من حيث الوقت والتكلفة والجودة. الأدوات هي مخططات التدفق ووصف العمليات ونماذج BPMN.',
        },
        keyPoints: [
          {
            de: 'Fokus auf Prozesse und Arbeitsabläufe im Gegensatz zur Aufbauorganisation (Strukturen)',
            ar: 'التركيز على العمليات وسير العمل على عكس التنظيم الهيكلي (الهياكل)',
          },
          {
            de: 'Ziele: Vermeidung von Leerlauf, Minimierung von Durchlaufzeiten, Qualitätssicherung',
            ar: 'الأهداف: تجنب فترات التوقف، تقليل أوقات المعالجة، ضمان الجودة',
          },
          {
            de: 'Darstellung durch Flussdiagramme, Gantt-Diagramme oder BPMN-Notation',
            ar: 'العرض من خلال مخططات التدفق أو مخططات غانت أو تدوين BPMN',
          },
        ],
        examples: [
          {
            de: 'Der Prozess einer Softwarebereitstellung: Anforderung → Entwicklung → Testing → Code Review → Staging → Deployment → Monitoring. Jeder Schritt hat definierte Verantwortlichkeiten und Zeitvorgaben.',
            ar: 'عملية نشر البرمجيات: المتطلبات → التطوير → الاختبار → مراجعة الكود → التجهيز → النشر → المراقبة. كل خطوة لها مسؤوليات ومواعيد زمنية محددة.',
          },
        ],
        examRelevance: {
          de: 'Die Ablauforganisation wird oft im Zusammenhang mit Prozessoptimierung und Qualitätsmanagement abgefragt.',
          ar: 'يتم السؤال عن التنظيم العملي غالباً فيما يتعلق بتحسين العمليات وإدارة الجودة.',
        },
        summary: {
          de: 'Die Ablauforganisation regelt die zeitliche und räumliche Abfolge von Arbeitsprozessen mit dem Ziel der Effizienzsteigerung.',
          ar: 'ينظم التنظيم العملي التسلسل الزمني والمكاني لعمليات العمل بهدف زيادة الكفاءة.',
        },
      },
    },
    {
      id: 'linienorganisation',
      name: { de: 'Linienorganisation', ar: 'التنظيم الخطي' },
      content: {
        definition: {
          de: 'Die Linienorganisation (Einliniensystem) ist die einfachste Organisationsform. Jeder Mitarbeiter hat genau einen Vorgesetzten (Einheit der Auftragserteilung nach Fayol). Weisungen werden von oben nach unten weitergegeben. Der Dienstweg muss eingehalten werden.',
          ar: 'التنظيم الخطي (نظام الخط الواحد) هو أبسط شكل تنظيمي. كل موظف لديه رئيس واحد فقط (وحدة إصدار الأوامر وفقاً لفايول). يتم تمرير التعليمات من الأعلى إلى الأسفل. يجب الالتزام بالمسار الرسمي.',
        },
        keyPoints: [
          {
            de: 'Jeder Mitarbeiter hat genau einen Vorgesetzten (Einlinienprinzip)',
            ar: 'كل موظف لديه رئيس واحد فقط (مبدأ الخط الواحد)',
          },
          {
            de: 'Vorteile: Klare Zuständigkeiten, einfache Struktur, eindeutige Weisungswege',
            ar: 'المزايا: مسؤوليات واضحة، هيكل بسيط، مسارات تعليمات واضحة',
          },
          {
            de: 'Nachteile: Lange Kommunikationswege, Überlastung der Führungskräfte, geringe Flexibilität',
            ar: 'العيوب: مسارات اتصال طويلة، إرهاق القيادات، مرونة منخفضة',
          },
        ],
        examples: [
          {
            de: 'Kleines IT-Unternehmen: Geschäftsführer → 3 Teamleiter → je 5 Entwickler. Ein Entwickler berichtet nur an seinen Teamleiter, nicht direkt an die Geschäftsführung.',
            ar: 'شركة تكنولوجيا معلومات صغيرة: المدير العام → 3 قادة فرق → 5 مطورين لكل فريق. يرفع المطور تقاريره فقط لقائد فريقه وليس مباشرة للإدارة.',
          },
        ],
        examRelevance: {
          de: 'Vor- und Nachteile der Linienorganisation im Vergleich zu anderen Organisationsformen sind ein häufiges Prüfungsthema.',
          ar: 'مزايا وعيوب التنظيم الخطي بالمقارنة مع أشكال التنظيم الأخرى هي موضوع امتحاني متكرر.',
        },
        summary: {
          de: 'In der Linienorganisation hat jeder Mitarbeiter genau einen Vorgesetzten. Sie ist einfach und klar, aber unflexibel bei großen Organisationen.',
          ar: 'في التنظيم الخطي لكل موظف رئيس واحد فقط. بسيط وواضح لكنه غير مرن في المنظمات الكبيرة.',
        },
      },
    },
    {
      id: 'stablinienorganisation',
      name: { de: 'Stablinienorganisation', ar: 'التنظيم الخطي المعاون' },
      content: {
        definition: {
          de: 'Die Stablinienorganisation ergänzt die Linienorganisation um Stabsstellen. Stabsstellen sind beratende Einheiten ohne Weisungsbefugnis, die Linienvorgesetzte bei Entscheidungen unterstützen. Sie haben Fachkompetenz in bestimmten Bereichen (z.B. Recht, IT-Sicherheit, Controlling) und bereiten Entscheidungen vor.',
          ar: 'يُكمل التنظيم الخطي المعاون التنظيم الخطي بمناصب استشارية. المناصب الاستشارية هي وحدات استشارية بدون صلاحية إصدار تعليمات تدعم الرؤساء المباشرين في القرارات. لديها كفاءة مهنية في مجالات معينة (مثل القانون، أمن تكنولوجيا المعلومات، الرقابة) وتُعد القرارات.',
        },
        keyPoints: [
          {
            de: 'Stabsstellen beraten, haben aber kein Weisungsrecht gegenüber der Linie',
            ar: 'المناصب الاستشارية تقدم المشورة لكن ليس لها حق إصدار تعليمات تجاه الخط',
          },
          {
            de: 'Vorteile: Fachliche Beratung, Entlastung der Linienvorgesetzten, bessere Entscheidungsgrundlage',
            ar: 'المزايا: المشورة المهنية، تخفيف العبء عن الرؤساء المباشرين، أساس أفضل للقرارات',
          },
          {
            de: 'Nachteile: Mögliche Konflikte zwischen Stab und Linie, höhere Kosten, Gefahr der „grauen Eminenz"',
            ar: 'العيوب: صراعات محتملة بين المعاون والخط، تكاليف أعلى، خطر "القوة الخفية"',
          },
        ],
        examples: [
          {
            de: 'In einem IT-Unternehmen berät ein Datenschutzbeauftragter (Stabsstelle) die Geschäftsführung bei DSGVO-Fragen, ohne selbst Weisungen an Mitarbeiter geben zu können.',
            ar: 'في شركة تكنولوجيا معلومات يقدم مسؤول حماية البيانات (منصب استشاري) المشورة للإدارة في مسائل DSGVO، دون أن يتمكن من إصدار تعليمات للموظفين بنفسه.',
          },
        ],
        examRelevance: {
          de: 'Die Abgrenzung zwischen Stab und Linie sowie die Merkmale der Stablinienorganisation werden regelmäßig geprüft.',
          ar: 'يتم فحص التمييز بين المعاون والخط وكذلك خصائص التنظيم الخطي المعاون بانتظام.',
        },
        summary: {
          de: 'Die Stablinienorganisation ergänzt die Linienorganisation um beratende Stabsstellen ohne Weisungsbefugnis.',
          ar: 'يُكمل التنظيم الخطي المعاون التنظيم الخطي بمناصب استشارية بدون صلاحية إصدار تعليمات.',
        },
      },
    },
    {
      id: 'matrixorganisation',
      name: { de: 'Matrixorganisation', ar: 'التنظيم المصفوفي' },
      content: {
        definition: {
          de: 'Die Matrixorganisation ist ein Mehrliniensystem, bei dem Mitarbeiter zwei Vorgesetzte haben: einen funktionalen (z.B. Abteilungsleiter Entwicklung) und einen objektbezogenen (z.B. Projektleiter). Sie kombiniert funktionale und divisionale Organisation und wird häufig in projektorientierten IT-Unternehmen eingesetzt.',
          ar: 'التنظيم المصفوفي هو نظام متعدد الخطوط حيث يكون للموظفين رئيسان: واحد وظيفي (مثل مدير قسم التطوير) وواحد موضوعي (مثل مدير المشروع). يجمع بين التنظيم الوظيفي والقسمي ويُستخدم بشكل متكرر في شركات تكنولوجيا المعلومات الموجهة للمشاريع.',
        },
        keyPoints: [
          {
            de: 'Zwei Weisungslinien: Funktionale Dimension (Abteilungen) und objektbezogene Dimension (Projekte/Produkte/Regionen)',
            ar: 'خطا تعليمات: البعد الوظيفي (الأقسام) والبعد الموضوعي (المشاريع/المنتجات/المناطق)',
          },
          {
            de: 'Vorteile: Hohe Flexibilität, kurze Kommunikationswege, gute Nutzung von Spezialwissen, Förderung von Teamarbeit',
            ar: 'المزايا: مرونة عالية، مسارات اتصال قصيرة، استخدام جيد للمعرفة المتخصصة، تعزيز العمل الجماعي',
          },
          {
            de: 'Nachteile: Kompetenzüberschneidungen, Konflikte zwischen den Vorgesetzten, hoher Kommunikations- und Abstimmungsbedarf',
            ar: 'العيوب: تداخل الصلاحيات، صراعات بين الرؤساء، حاجة عالية للتواصل والتنسيق',
          },
        ],
        examples: [
          {
            de: 'Ein Entwickler arbeitet in der Abteilung „Backend-Entwicklung" (funktional) und gleichzeitig im Projekt „Kundenportal" (projektbezogen). Er berichtet an den Abteilungsleiter und den Projektleiter.',
            ar: 'يعمل مطور في قسم "تطوير الخلفية" (وظيفي) وفي الوقت نفسه في مشروع "بوابة العملاء" (مرتبط بالمشروع). يرفع تقاريره لمدير القسم ومدير المشروع.',
          },
        ],
        examRelevance: {
          de: 'Die Matrixorganisation ist besonders für IT-Unternehmen relevant. Prüfungsfragen betreffen Vor-/Nachteile und den Vergleich mit anderen Organisationsformen.',
          ar: 'التنظيم المصفوفي ذو صلة خاصة بشركات تكنولوجيا المعلومات. أسئلة الامتحان تتعلق بالمزايا/العيوب والمقارنة مع أشكال التنظيم الأخرى.',
        },
        summary: {
          de: 'In der Matrixorganisation haben Mitarbeiter zwei Vorgesetzte (funktional und projektbezogen). Sie ist flexibel, erfordert aber viel Abstimmung.',
          ar: 'في التنظيم المصفوفي لدى الموظفين رئيسان (وظيفي ومرتبط بالمشروع). مرن لكنه يتطلب الكثير من التنسيق.',
        },
      },
    },
  ],
};
