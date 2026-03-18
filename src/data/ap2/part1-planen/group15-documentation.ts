import type { TopicGroup } from '../../../types';

export const documentation: TopicGroup = {
  id: 'group15',
  name: {
    de: 'Dokumentation',
    ar: 'التوثيق',
  },
  description: {
    de: 'Arten der Softwaredokumentation: Technische, Benutzer-, Projekt- und Wartungsdokumentation',
    ar: 'أنواع توثيق البرمجيات: التوثيق التقني وتوثيق المستخدم والمشروع والصيانة',
  },
  priority: 'low',
  topics: [
    {
      id: 'technical-documentation',
      name: {
        de: 'Technische Dokumentation',
        ar: 'التوثيق التقني',
      },
      content: {
        definition: {
          de: 'Technische Dokumentation beschreibt die interne Struktur und Funktionsweise einer Software für Entwickler und Administratoren. Sie umfasst Architekturdiagramme, API-Dokumentation, Code-Kommentare, Datenbankschema und Installationsanleitungen.',
          ar: 'التوثيق التقني يصف البنية الداخلية وطريقة عمل البرمجية للمطورين والمسؤولين. يشمل مخططات الهندسة المعمارية وتوثيق API وتعليقات الكود ومخطط قاعدة البيانات وتعليمات التثبيت.',
        },
        keyPoints: [
          {
            de: 'API-Dokumentation: Beschreibung aller Endpunkte, Parameter, Rückgabewerte (z.B. Swagger/OpenAPI)',
            ar: 'توثيق API: وصف جميع نقاط النهاية والمعاملات وقيم الإرجاع (مثل Swagger/OpenAPI)',
          },
          {
            de: 'Code-Kommentare: JavaDoc, JSDoc – automatisch generierbare Dokumentation aus dem Code',
            ar: 'تعليقات الكود: JavaDoc، JSDoc – توثيق قابل للتوليد تلقائياً من الكود',
          },
          {
            de: 'Architektur-Dokumentation: Systemübersicht, Komponentendiagramme, Deployment-Diagramme',
            ar: 'توثيق الهندسة المعمارية: نظرة عامة على النظام، مخططات المكونات، مخططات النشر',
          },
        ],
        examples: [
          {
            de: 'Technische Dokumentation einer REST-API mit Swagger: Jeder Endpunkt ist dokumentiert mit URL, HTTP-Methode, Parametern, Request-Body, Response-Codes und Beispielantworten. Entwickler können die API direkt in der Swagger-UI testen.',
            ar: 'توثيق تقني لـ REST-API مع Swagger: كل نقطة نهاية موثقة بـ URL وأسلوب HTTP والمعاملات وجسم الطلب وأكواد الاستجابة وأمثلة الردود. المطورون يمكنهم اختبار API مباشرة في Swagger-UI.',
          },
        ],
        examRelevance: {
          de: 'Unterscheiden Sie technische Dokumentation (für Entwickler) von Benutzerdokumentation (für Anwender). Kennen Sie Swagger/OpenAPI.',
          ar: 'ميّز التوثيق التقني (للمطورين) عن توثيق المستخدم (للمستخدمين). اعرف Swagger/OpenAPI.',
        },
        summary: {
          de: 'Technische Dokumentation beschreibt die Software-Interna für Entwickler, einschließlich API-Docs, Architektur und Code-Kommentare.',
          ar: 'التوثيق التقني يصف الأجزاء الداخلية للبرمجية للمطورين بما في ذلك توثيق API والهندسة المعمارية وتعليقات الكود.',
        },
      },
    },
    {
      id: 'user-documentation',
      name: {
        de: 'Benutzerdokumentation',
        ar: 'توثيق المستخدم',
      },
      content: {
        definition: {
          de: 'Benutzerdokumentation richtet sich an die Endanwender und beschreibt, wie die Software bedient wird. Sie umfasst Benutzerhandbücher, Online-Hilfe, Tutorials, FAQ und Kurzanleitungen (Quick Start Guides). Die Sprache ist nicht-technisch und verständlich.',
          ar: 'توثيق المستخدم يتوجه للمستخدمين النهائيين ويصف كيفية استخدام البرمجية. يشمل أدلة المستخدم والمساعدة عبر الإنترنت والدروس التعليمية والأسئلة الشائعة وأدلة البدء السريع. اللغة غير تقنية ومفهومة.',
        },
        keyPoints: [
          {
            de: 'Benutzerhandbuch: Vollständige Beschreibung aller Funktionen und Bedienungsschritte',
            ar: 'دليل المستخدم: وصف كامل لجميع الوظائف وخطوات التشغيل',
          },
          {
            de: 'Online-Hilfe: Kontextsensitive Hilfe direkt in der Anwendung',
            ar: 'المساعدة عبر الإنترنت: مساعدة حساسة للسياق مباشرة في التطبيق',
          },
          {
            de: 'Verständliche Sprache: Keine Fachbegriffe, Schritt-für-Schritt-Anleitungen mit Screenshots',
            ar: 'لغة مفهومة: بدون مصطلحات تقنية، تعليمات خطوة بخطوة مع لقطات شاشة',
          },
        ],
        examples: [
          {
            de: 'Benutzerhandbuch für eine Buchhaltungssoftware: Kapitel 1: Installation und Ersteinrichtung. Kapitel 2: Rechnungen erstellen (mit Screenshots jeden Schritts). Kapitel 3: Berichte generieren. Anhang: Häufige Probleme und Lösungen.',
            ar: 'دليل مستخدم لبرنامج محاسبة: الفصل 1: التثبيت والإعداد الأولي. الفصل 2: إنشاء الفواتير (مع لقطات شاشة لكل خطوة). الفصل 3: إنشاء التقارير. الملحق: مشاكل شائعة وحلولها.',
          },
        ],
        examRelevance: {
          de: 'In der Prüfung wird nach der Zielgruppe gefragt: Benutzerdokumentation = Anwender, Technische Dokumentation = Entwickler/Administratoren.',
          ar: 'في الامتحان يُسأل عن الفئة المستهدفة: توثيق المستخدم = المستخدمون، التوثيق التقني = المطورون/المسؤولون.',
        },
        summary: {
          de: 'Benutzerdokumentation erklärt Endanwendern die Bedienung der Software in verständlicher Sprache mit Schritt-für-Schritt-Anleitungen.',
          ar: 'توثيق المستخدم يشرح للمستخدمين النهائيين كيفية استخدام البرمجية بلغة مفهومة مع تعليمات خطوة بخطوة.',
        },
      },
    },
    {
      id: 'project-documentation',
      name: {
        de: 'Projektdokumentation',
        ar: 'توثيق المشروع',
      },
      content: {
        definition: {
          de: 'Projektdokumentation umfasst alle Dokumente, die im Verlauf eines Projekts erstellt werden. Sie dokumentiert Entscheidungen, Fortschritte und Ergebnisse und dient der Nachvollziehbarkeit und als Wissensbasis für zukünftige Projekte.',
          ar: 'توثيق المشروع يشمل جميع الوثائق التي تُنشأ خلال سير المشروع. يوثق القرارات والتقدم والنتائج ويعمل كأساس للتتبع وقاعدة معرفية للمشاريع المستقبلية.',
        },
        keyPoints: [
          {
            de: 'Umfasst: Projektauftrag, Projektplan, Statusberichte, Protokolle, Lastenheft, Pflichtenheft',
            ar: 'يشمل: تفويض المشروع، خطة المشروع، تقارير الحالة، المحاضر، دفتر المتطلبات، دفتر الشروط',
          },
          {
            de: 'Projekttagebuch: Chronologische Aufzeichnung aller wichtigen Ereignisse und Entscheidungen',
            ar: 'يوميات المشروع: تسجيل زمني لجميع الأحداث والقرارات المهمة',
          },
          {
            de: 'Dient der Nachvollziehbarkeit: Warum wurden bestimmte Entscheidungen getroffen?',
            ar: 'يخدم التتبع: لماذا اتُخذت قرارات معينة؟',
          },
        ],
        examples: [
          {
            de: 'Projektdokumentation eines Softwareprojekts: Projektauftrag (Ziel, Budget, Zeitrahmen) → Statusberichte (wöchentlich) → Meeting-Protokolle → Änderungsprotokolle → Abschlussbericht mit Lessons Learned.',
            ar: 'توثيق مشروع برمجي: تفويض المشروع (الهدف، الميزانية، الإطار الزمني) ← تقارير الحالة (أسبوعياً) ← محاضر الاجتماعات ← سجلات التغيير ← التقرير الختامي مع الدروس المستفادة.',
          },
        ],
        examRelevance: {
          de: 'Kennen Sie die verschiedenen Projektdokumente und deren Zweck. Welches Dokument wird in welcher Phase erstellt?',
          ar: 'اعرف وثائق المشروع المختلفة وأغراضها. أي وثيقة تُنشأ في أي مرحلة؟',
        },
        summary: {
          de: 'Projektdokumentation zeichnet den gesamten Projektverlauf auf und sichert die Nachvollziehbarkeit von Entscheidungen.',
          ar: 'توثيق المشروع يسجل سير المشروع بالكامل ويضمن إمكانية تتبع القرارات.',
        },
      },
    },
    {
      id: 'maintenance-documentation',
      name: {
        de: 'Wartungsdokumentation',
        ar: 'توثيق الصيانة',
      },
      content: {
        definition: {
          de: 'Wartungsdokumentation beschreibt alle Informationen, die für den Betrieb und die Wartung einer Software nach der Auslieferung benötigt werden. Sie umfasst Betriebshandbücher, Deployment-Anleitungen, Konfigurationshinweise und Fehlerbehebungsprozeduren.',
          ar: 'توثيق الصيانة يصف جميع المعلومات المطلوبة لتشغيل وصيانة البرمجية بعد التسليم. يشمل أدلة التشغيل وتعليمات النشر وملاحظات التكوين وإجراءات إصلاح الأخطاء.',
        },
        keyPoints: [
          {
            de: 'Betriebshandbuch: Startprozeduren, Backup-Strategien, Monitoring-Konfiguration',
            ar: 'دليل التشغيل: إجراءات البدء، استراتيجيات النسخ الاحتياطي، تكوين المراقبة',
          },
          {
            de: 'Deployment-Anleitung: Schritte zur Installation und Aktualisierung der Software',
            ar: 'تعليمات النشر: خطوات تثبيت وتحديث البرمجية',
          },
          {
            de: 'Troubleshooting-Guide: Bekannte Probleme und deren Lösungen',
            ar: 'دليل استكشاف الأخطاء: مشاكل معروفة وحلولها',
          },
        ],
        examples: [
          {
            de: 'Wartungsdokumentation für einen Webserver: 1. Systemanforderungen (Java 17, 8 GB RAM). 2. Deployment: docker-compose up -d. 3. Konfiguration: application.yml mit Datenbankverbindung. 4. Monitoring: Health-Check unter /api/health. 5. Backup: Tägliches DB-Backup um 02:00 Uhr.',
            ar: 'توثيق صيانة لخادم ويب: 1. متطلبات النظام (Java 17، 8 GB RAM). 2. النشر: docker-compose up -d. 3. التكوين: application.yml مع اتصال قاعدة البيانات. 4. المراقبة: فحص الصحة تحت /api/health. 5. النسخ الاحتياطي: نسخ احتياطي يومي للـ DB الساعة 02:00.',
          },
        ],
        examRelevance: {
          de: 'Wartungsdokumentation wird oft im Kontext der Wartbarkeit von Software gefragt. Kennen Sie die typischen Inhalte.',
          ar: 'توثيق الصيانة يُسأل غالباً في سياق قابلية صيانة البرمجيات. اعرف المحتويات النموذجية.',
        },
        summary: {
          de: 'Wartungsdokumentation liefert alle Informationen für Betrieb, Deployment und Fehlerbehebung einer ausgelieferten Software.',
          ar: 'توثيق الصيانة يوفر جميع المعلومات للتشغيل والنشر وإصلاح الأخطاء لبرمجية مُسلّمة.',
        },
      },
    },
    {
      id: 'project-evaluation',
      name: {
        de: 'Projektevaluation',
        ar: 'تقييم المشروع',
      },
      content: {
        definition: {
          de: 'Projektevaluation ist die systematische Bewertung eines Projekts nach dessen Abschluss. Sie analysiert den Grad der Zielerreichung, vergleicht Soll- und Ist-Werte und dokumentiert Erfahrungen und Verbesserungsvorschläge für zukünftige Projekte.',
          ar: 'تقييم المشروع هو التقييم المنهجي للمشروع بعد اكتماله. يحلل درجة تحقيق الأهداف ويقارن القيم المخططة بالفعلية ويوثق الخبرات ومقترحات التحسين للمشاريع المستقبلية.',
        },
        keyPoints: [
          {
            de: 'Soll-Ist-Vergleich: Wurden Budget, Zeitplan und Qualitätsziele eingehalten?',
            ar: 'مقارنة المخطط بالفعلي: هل تم الالتزام بالميزانية والجدول الزمني وأهداف الجودة؟',
          },
          {
            de: 'Ergebnisbewertung: Entspricht das Produkt den Anforderungen des Auftraggebers?',
            ar: 'تقييم النتائج: هل يتوافق المنتج مع متطلبات صاحب العمل؟',
          },
          {
            de: 'Prozessbewertung: War die gewählte Vorgehensweise effektiv? Was könnte verbessert werden?',
            ar: 'تقييم العملية: هل كانت المنهجية المختارة فعالة؟ ما الذي يمكن تحسينه؟',
          },
          {
            de: 'Ergebnisse fließen in Lessons Learned und die Wissensdatenbank ein',
            ar: 'النتائج تُدمج في الدروس المستفادة وقاعدة المعرفة',
          },
        ],
        examples: [
          {
            de: 'Projektevaluation: Geplant: 6 Monate, 80.000€ Budget. Ergebnis: 7 Monate (+1 Monat Verzögerung), 85.000€ (+6% Überschreitung). Ursache: Anforderungsänderung in Monat 4. Empfehlung: Frühzeitigere Anforderungsstabilisierung und Change-Request-Prozess einführen.',
            ar: 'تقييم المشروع: المخطط: 6 أشهر، ميزانية 80,000€. النتيجة: 7 أشهر (+شهر تأخير)، 85,000€ (+6% تجاوز). السبب: تغيير متطلبات في الشهر 4. التوصية: تثبيت المتطلبات مبكراً وتطبيق عملية طلبات التغيير.',
          },
        ],
        examRelevance: {
          de: 'Projektevaluation gehört zur Abschlussphase eines Projekts. Verbinden Sie sie mit Lessons Learned und dem Soll-Ist-Vergleich.',
          ar: 'تقييم المشروع ينتمي لمرحلة إغلاق المشروع. اربطه مع الدروس المستفادة ومقارنة المخطط بالفعلي.',
        },
        summary: {
          de: 'Projektevaluation bewertet Zielerreichung durch Soll-Ist-Vergleiche und dokumentiert Verbesserungsvorschläge für künftige Projekte.',
          ar: 'تقييم المشروع يقيم تحقيق الأهداف من خلال مقارنة المخطط بالفعلي ويوثق مقترحات التحسين للمشاريع المستقبلية.',
        },
      },
    },
  ],
};
