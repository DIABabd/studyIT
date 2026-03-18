import type { TopicGroup } from '../../../types';

export const projectManagement: TopicGroup = {
  id: 'group02',
  name: {
    de: 'Projektmanagement',
    ar: 'إدارة المشاريع',
  },
  description: {
    de: 'Grundlagen des Projektmanagements: Planung, Steuerung und Kontrolle von IT-Projekten',
    ar: 'أساسيات إدارة المشاريع: التخطيط والتوجيه والرقابة على مشاريع تكنولوجيا المعلومات',
  },
  priority: 'very-high',
  topics: [
    {
      id: 'stakeholder',
      name: {
        de: 'Stakeholder',
        ar: 'أصحاب المصلحة (Stakeholder)',
      },
      content: {
        definition: {
          de: 'Stakeholder sind alle Personen, Gruppen oder Organisationen, die ein Interesse am Projekt haben oder von dessen Ergebnis betroffen sind. Sie können das Projekt positiv oder negativ beeinflussen und müssen daher identifiziert und aktiv einbezogen werden.',
          ar: 'أصحاب المصلحة هم جميع الأشخاص أو المجموعات أو المنظمات التي لديها اهتمام بالمشروع أو تتأثر بنتائجه. يمكنهم التأثير على المشروع إيجاباً أو سلباً ولذلك يجب تحديدهم وإشراكهم بفعالية.',
        },
        keyPoints: [
          {
            de: 'Interne Stakeholder: Projektteam, Management, andere Abteilungen',
            ar: 'أصحاب المصلحة الداخليون: فريق المشروع، الإدارة، الأقسام الأخرى',
          },
          {
            de: 'Externe Stakeholder: Kunden, Lieferanten, Behörden, Endbenutzer',
            ar: 'أصحاب المصلحة الخارجيون: العملاء، الموردون، الجهات الرسمية، المستخدمون النهائيون',
          },
          {
            de: 'Stakeholder-Analyse: Identifikation, Bewertung von Einfluss und Interesse, Ableitung von Strategien',
            ar: 'تحليل أصحاب المصلحة: التعرف عليهم، تقييم التأثير والاهتمام، استخلاص الاستراتيجيات',
          },
        ],
        examples: [
          {
            de: 'Bei der Entwicklung eines neuen ERP-Systems sind die Fachabteilungen (Nutzer), die IT-Abteilung (Betreiber), die Geschäftsführung (Auftraggeber) und der externe Softwareanbieter Stakeholder.',
            ar: 'عند تطوير نظام ERP جديد، فإن الأقسام المتخصصة (المستخدمون) وقسم تكنولوجيا المعلومات (المشغل) والإدارة العليا (صاحب العمل) ومزود البرمجيات الخارجي هم أصحاب مصلحة.',
          },
        ],
        examRelevance: {
          de: 'In der Prüfung wird häufig nach der Identifikation von Stakeholdern gefragt. Können Sie Stakeholder eines gegebenen Szenarios benennen und deren Einfluss bewerten.',
          ar: 'في الامتحان يُسأل كثيراً عن تحديد أصحاب المصلحة. كن قادراً على تسمية أصحاب المصلحة في سيناريو معين وتقييم تأثيرهم.',
        },
        summary: {
          de: 'Stakeholder sind alle am Projekt interessierten oder betroffenen Parteien, die identifiziert und einbezogen werden müssen.',
          ar: 'أصحاب المصلحة هم جميع الأطراف المهتمة بالمشروع أو المتأثرة به ويجب تحديدهم وإشراكهم.',
        },
      },
    },
    {
      id: 'meilenstein',
      name: {
        de: 'Meilenstein',
        ar: 'المعلم الرئيسي (Meilenstein)',
      },
      content: {
        definition: {
          de: 'Ein Meilenstein ist ein wichtiger Zeitpunkt im Projektverlauf, der den Abschluss einer Phase oder das Erreichen eines Zwischenziels markiert. Meilensteine haben keine Dauer (Dauer = 0) und dienen als Kontrollpunkte zur Überprüfung des Projektfortschritts.',
          ar: 'المعلم الرئيسي هو نقطة زمنية مهمة في سير المشروع تُعلّم اكتمال مرحلة أو تحقيق هدف وسيط. المعالم ليس لها مدة (المدة = 0) وتعمل كنقاط تحكم لمراجعة تقدم المشروع.',
        },
        keyPoints: [
          {
            de: 'Meilensteine haben keine Dauer – sie markieren Zeitpunkte, keine Zeiträume',
            ar: 'المعالم ليس لها مدة – تُعلّم نقاط زمنية وليس فترات زمنية',
          },
          {
            de: 'Typische Meilensteine: Projektstart, Anforderungen freigegeben, Prototyp fertig, Go-Live',
            ar: 'معالم نموذجية: بداية المشروع، اعتماد المتطلبات، النموذج الأولي جاهز، الإطلاق',
          },
          {
            de: 'Meilensteine werden im Meilensteinplan oder Gantt-Diagramm dargestellt',
            ar: 'تُعرض المعالم في خطة المعالم أو مخطط جانت',
          },
        ],
        examples: [
          {
            de: 'In einem Webprojekt werden folgende Meilensteine definiert: M1: Lastenheft abgenommen (Woche 2), M2: Design-Prototyp freigegeben (Woche 5), M3: Beta-Version bereit (Woche 10), M4: Go-Live (Woche 14).',
            ar: 'في مشروع ويب تُعرّف المعالم التالية: M1: اعتماد دفتر المتطلبات (الأسبوع 2)، M2: اعتماد النموذج التصميمي (الأسبوع 5)، M3: النسخة التجريبية جاهزة (الأسبوع 10)، M4: الإطلاق (الأسبوع 14).',
          },
        ],
        examRelevance: {
          de: 'Meilensteine sind ein grundlegendes Prüfungsthema. Wichtig: Wissen, dass ein Meilenstein keine Dauer hat und als Kontrollpunkt dient.',
          ar: 'المعالم موضوع أساسي في الامتحان. مهم: معرفة أن المعلم ليس له مدة ويعمل كنقطة تحكم.',
        },
        summary: {
          de: 'Meilensteine sind dauerlose Kontrollpunkte im Projektverlauf, die den Abschluss wichtiger Phasen markieren.',
          ar: 'المعالم هي نقاط تحكم بلا مدة في سير المشروع تُعلّم اكتمال مراحل مهمة.',
        },
      },
    },
    {
      id: 'change-request-management',
      name: {
        de: 'Change Request Management',
        ar: 'إدارة طلبات التغيير',
      },
      content: {
        definition: {
          de: 'Change Request Management (Änderungsmanagement) ist der strukturierte Prozess zur Behandlung von Änderungsanfragen während eines Projekts. Jede Änderung wird dokumentiert, bewertet (hinsichtlich Kosten, Zeit, Qualität) und durch einen definierten Genehmigungsprozess gesteuert.',
          ar: 'إدارة طلبات التغيير هي العملية المنظمة للتعامل مع طلبات التغيير أثناء المشروع. يتم توثيق كل تغيير وتقييمه (من حيث التكلفة والوقت والجودة) وإدارته من خلال عملية موافقة محددة.',
        },
        keyPoints: [
          {
            de: 'Jeder Change Request wird formal dokumentiert und einem Change Advisory Board (CAB) vorgelegt',
            ar: 'كل طلب تغيير يُوثق رسمياً ويُقدم إلى لجنة استشارية للتغيير (CAB)',
          },
          {
            de: 'Impact-Analyse: Auswirkungen auf Kosten, Zeitplan und Qualität werden bewertet',
            ar: 'تحليل التأثير: يتم تقييم التأثيرات على التكلفة والجدول الزمني والجودة',
          },
          {
            de: 'Ohne Change Management besteht die Gefahr von Scope Creep (unkontrolliertes Wachsen des Projektumfangs)',
            ar: 'بدون إدارة التغيير هناك خطر Scope Creep (النمو غير المنضبط لنطاق المشروع)',
          },
        ],
        examples: [
          {
            de: 'Ein Kunde wünscht eine zusätzliche Berichtsfunktion. Der Change Request wird dokumentiert, die Auswirkung auf Budget (+5.000€) und Zeitplan (+1 Woche) bewertet und dem Lenkungsausschuss zur Genehmigung vorgelegt.',
            ar: 'يرغب عميل في وظيفة تقارير إضافية. يتم توثيق طلب التغيير وتقييم التأثير على الميزانية (+5,000€) والجدول الزمني (+أسبوع واحد) وتقديمه للجنة التوجيهية للموافقة.',
          },
        ],
        examRelevance: {
          de: 'Verstehen Sie den Prozess: Antrag → Analyse → Bewertung → Genehmigung/Ablehnung → Umsetzung. Wichtig ist auch der Begriff „Scope Creep".',
          ar: 'افهم العملية: طلب ← تحليل ← تقييم ← موافقة/رفض ← تنفيذ. مهم أيضاً مصطلح "Scope Creep".',
        },
        summary: {
          de: 'Change Request Management steuert Änderungsanfragen strukturiert, um unkontrollierte Projektänderungen zu vermeiden.',
          ar: 'إدارة طلبات التغيير تُدير طلبات التغيير بشكل منظم لتجنب التغييرات غير المنضبطة في المشروع.',
        },
      },
    },
    {
      id: 'lessons-learned',
      name: {
        de: 'Lessons Learned',
        ar: 'الدروس المستفادة',
      },
      content: {
        definition: {
          de: 'Lessons Learned ist ein strukturierter Prozess zur Erfassung und Dokumentation von Erfahrungen und Erkenntnissen aus einem Projekt. Ziel ist es, positive Erfahrungen zu wiederholen und Fehler in zukünftigen Projekten zu vermeiden.',
          ar: 'الدروس المستفادة هي عملية منظمة لجمع وتوثيق الخبرات والمعارف من مشروع ما. الهدف هو تكرار التجارب الإيجابية وتجنب الأخطاء في المشاريع المستقبلية.',
        },
        keyPoints: [
          {
            de: 'Wird typischerweise am Ende eines Projekts oder einer Projektphase durchgeführt',
            ar: 'يُنفذ عادة في نهاية المشروع أو مرحلة من مراحله',
          },
          {
            de: 'Umfasst sowohl positive Erkenntnisse (Best Practices) als auch negative (Fehlerquellen)',
            ar: 'يشمل المعارف الإيجابية (أفضل الممارسات) والسلبية (مصادر الأخطاء)',
          },
          {
            de: 'Die Ergebnisse werden in einer Wissensdatenbank gespeichert und für zukünftige Projekte zugänglich gemacht',
            ar: 'يتم حفظ النتائج في قاعدة معرفية وإتاحتها للمشاريع المستقبلية',
          },
        ],
        examples: [
          {
            de: 'Nach Abschluss eines ERP-Einführungsprojekts wird ein Workshop durchgeführt. Ergebnis: Die frühe Einbindung der Endbenutzer war ein Erfolgsfaktor, während die unzureichende Testphase zu Problemen beim Go-Live führte.',
            ar: 'بعد إتمام مشروع تطبيق ERP يتم إجراء ورشة عمل. النتيجة: إشراك المستخدمين النهائيين مبكراً كان عامل نجاح، بينما مرحلة الاختبار غير الكافية أدت لمشاكل عند الإطلاق.',
          },
        ],
        examRelevance: {
          de: 'Lessons Learned werden oft im Kontext der Projektabschlussphase gefragt. Wissen Sie, wann und warum sie durchgeführt werden.',
          ar: 'الدروس المستفادة تُسأل غالباً في سياق مرحلة إغلاق المشروع. اعرف متى ولماذا تُنفذ.',
        },
        summary: {
          de: 'Lessons Learned dokumentieren Projekterfahrungen systematisch, um aus Erfolgen und Fehlern für künftige Projekte zu lernen.',
          ar: 'الدروس المستفادة توثق تجارب المشاريع بشكل منهجي للتعلم من النجاحات والأخطاء للمشاريع المستقبلية.',
        },
      },
    },
    {
      id: 'projektziele',
      name: {
        de: 'Projektziele',
        ar: 'أهداف المشروع',
      },
      content: {
        definition: {
          de: 'Projektziele beschreiben die zu erreichenden Ergebnisse eines Projekts. Sie werden nach dem SMART-Prinzip formuliert: Spezifisch, Messbar, Attraktiv/Akzeptiert, Realistisch und Terminiert. Man unterscheidet zwischen Sachzielen, Terminzielen und Kostenzielen (Magisches Dreieck).',
          ar: 'أهداف المشروع تصف النتائج المراد تحقيقها. تُصاغ وفق مبدأ SMART: محددة، قابلة للقياس، جذابة/مقبولة، واقعية ومحددة زمنياً. يُميَّز بين أهداف المحتوى وأهداف الوقت وأهداف التكلفة (المثلث السحري).',
        },
        keyPoints: [
          {
            de: 'Magisches Dreieck: Qualität/Leistung, Zeit und Kosten stehen in Wechselwirkung',
            ar: 'المثلث السحري: الجودة/الأداء والوقت والتكلفة في تفاعل متبادل',
          },
          {
            de: 'SMART-Kriterien: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert',
            ar: 'معايير SMART: محدد، قابل للقياس، جذاب، واقعي، محدد زمنياً',
          },
          {
            de: 'Unterscheidung: Mussziele (verpflichtend), Sollziele (wichtig), Kannziele (optional)',
            ar: 'التمييز: أهداف إلزامية (Muss)، أهداف مطلوبة (Soll)، أهداف اختيارية (Kann)',
          },
        ],
        examples: [
          {
            de: 'SMART-Ziel: „Die neue Webanwendung soll bis zum 31.03.2026 mit einem Budget von 50.000€ fertiggestellt sein und eine Ladezeit von unter 2 Sekunden erreichen."',
            ar: 'هدف SMART: "يجب أن يكتمل تطبيق الويب الجديد بحلول 31.03.2026 بميزانية 50,000€ ويحقق وقت تحميل أقل من ثانيتين."',
          },
        ],
        examRelevance: {
          de: 'SMART-Ziele und das Magische Dreieck sind Prüfungsklassiker. Sie müssen ein Ziel als SMART oder nicht-SMART bewerten können.',
          ar: 'أهداف SMART والمثلث السحري كلاسيكيات الامتحان. يجب أن تتمكن من تقييم هدف على أنه SMART أو غير SMART.',
        },
        summary: {
          de: 'Projektziele werden SMART formuliert und bewegen sich im Spannungsfeld des Magischen Dreiecks aus Qualität, Zeit und Kosten.',
          ar: 'تُصاغ أهداف المشروع بطريقة SMART وتتحرك في مجال التوتر للمثلث السحري من الجودة والوقت والتكلفة.',
        },
      },
    },
    {
      id: 'projektphasen',
      name: {
        de: 'Projektphasen',
        ar: 'مراحل المشروع',
      },
      content: {
        definition: {
          de: 'Projektphasen unterteilen ein Projekt in zeitlich abgegrenzte Abschnitte. Typische Phasen sind: Initialisierung, Planung, Durchführung, Überwachung/Steuerung und Abschluss. Jede Phase hat spezifische Aufgaben und Ergebnisse (Deliverables).',
          ar: 'مراحل المشروع تقسم المشروع إلى أقسام زمنية محددة. المراحل النموذجية هي: التهيئة، التخطيط، التنفيذ، المراقبة/التوجيه والإغلاق. لكل مرحلة مهام ونتائج محددة.',
        },
        keyPoints: [
          {
            de: 'Initialisierung: Projektidee, Machbarkeitsstudie, Projektauftrag',
            ar: 'التهيئة: فكرة المشروع، دراسة الجدوى، تفويض المشروع',
          },
          {
            de: 'Planung: Projektstrukturplan, Ressourcenplanung, Risikoanalyse',
            ar: 'التخطيط: هيكل تقسيم المشروع، تخطيط الموارد، تحليل المخاطر',
          },
          {
            de: 'Durchführung: Umsetzung der geplanten Aufgaben, Erstellung der Deliverables',
            ar: 'التنفيذ: تنفيذ المهام المخطط لها، إنشاء المخرجات',
          },
          {
            de: 'Abschluss: Abnahme, Lessons Learned, Projektdokumentation',
            ar: 'الإغلاق: القبول، الدروس المستفادة، توثيق المشروع',
          },
        ],
        examples: [
          {
            de: 'Ein Softwareprojekt durchläuft: 1. Initialisierung (Projektauftrag erstellen), 2. Planung (Pflichtenheft, Zeitplan), 3. Durchführung (Programmierung), 4. Steuerung (Fortschrittskontrolle), 5. Abschluss (Abnahme und Übergabe).',
            ar: 'مشروع برمجي يمر بـ: 1. التهيئة (إنشاء تفويض المشروع)، 2. التخطيط (دفتر الشروط، الجدول الزمني)، 3. التنفيذ (البرمجة)، 4. التوجيه (مراقبة التقدم)، 5. الإغلاق (القبول والتسليم).',
          },
        ],
        examRelevance: {
          de: 'Kennen Sie die fünf Phasen und deren typische Aktivitäten und Ergebnisse. Ordnen Sie Aktivitäten den richtigen Phasen zu.',
          ar: 'اعرف المراحل الخمس وأنشطتها ونتائجها النموذجية. قم بتعيين الأنشطة للمراحل الصحيحة.',
        },
        summary: {
          de: 'Projekte werden in Phasen (Initialisierung, Planung, Durchführung, Steuerung, Abschluss) unterteilt, die jeweils spezifische Aufgaben umfassen.',
          ar: 'تُقسم المشاريع إلى مراحل (التهيئة، التخطيط، التنفيذ، التوجيه، الإغلاق) تشمل كل منها مهام محددة.',
        },
      },
    },
    {
      id: 'projektplanung',
      name: {
        de: 'Projektplanung',
        ar: 'تخطيط المشروع',
      },
      content: {
        definition: {
          de: 'Projektplanung umfasst die systematische Festlegung von Zielen, Aufgaben, Ressourcen, Zeitplänen und Budgets für ein Projekt. Zentrale Instrumente sind der Projektstrukturplan, Netzplan, Gantt-Diagramm und die Ressourcenplanung.',
          ar: 'تخطيط المشروع يشمل التحديد المنهجي للأهداف والمهام والموارد والجداول الزمنية والميزانيات. الأدوات المركزية هي هيكل تقسيم المشروع ومخطط الشبكة ومخطط جانت وتخطيط الموارد.',
        },
        keyPoints: [
          {
            de: 'Gantt-Diagramm: Visualisiert Aufgaben als Balken auf einer Zeitachse',
            ar: 'مخطط جانت: يعرض المهام كأشرطة على محور زمني',
          },
          {
            de: 'Netzplantechnik: Ermittlung des kritischen Pfads und der Pufferzeiten',
            ar: 'تقنية مخطط الشبكة: تحديد المسار الحرج وأوقات التخزين المؤقت',
          },
          {
            de: 'Kritischer Pfad: Die längste Kette abhängiger Aufgaben ohne Pufferzeit',
            ar: 'المسار الحرج: أطول سلسلة مهام مترابطة بدون وقت احتياطي',
          },
        ],
        examples: [
          {
            de: 'Ein Projektleiter erstellt ein Gantt-Diagramm mit drei parallelen Arbeitspaketen und identifiziert den kritischen Pfad: Datenbankdesign (3 Tage) → Backend-Entwicklung (10 Tage) → Integration (5 Tage) = 18 Tage Mindestlaufzeit.',
            ar: 'مدير مشروع ينشئ مخطط جانت مع ثلاث حزم عمل متوازية ويحدد المسار الحرج: تصميم قاعدة البيانات (3 أيام) ← تطوير الخلفية (10 أيام) ← التكامل (5 أيام) = 18 يوماً كحد أدنى.',
          },
        ],
        examRelevance: {
          de: 'Netzplantechnik und kritischer Pfad sind häufige Rechenaufgaben in der Prüfung. Üben Sie die Berechnung von frühesten/spätesten Anfangs- und Endzeitpunkten.',
          ar: 'تقنية مخطط الشبكة والمسار الحرج تظهر كثيراً كمسائل حسابية في الامتحان. تدرب على حساب أبكر/أحدث أوقات البدء والانتهاء.',
        },
        summary: {
          de: 'Projektplanung definiert Aufgaben, Termine und Ressourcen mithilfe von Gantt-Diagrammen und Netzplänen.',
          ar: 'تخطيط المشروع يحدد المهام والمواعيد والموارد بمساعدة مخططات جانت ومخططات الشبكة.',
        },
      },
    },
    {
      id: 'projektstrukturplan',
      name: {
        de: 'Projektstrukturplan (PSP)',
        ar: 'هيكل تقسيم العمل (PSP)',
      },
      content: {
        definition: {
          de: 'Der Projektstrukturplan (PSP) ist eine hierarchische Gliederung aller Aufgaben eines Projekts in Teilprojekte und Arbeitspakete. Er bildet die Grundlage für die weitere Projektplanung und stellt sicher, dass alle Aufgaben erfasst werden.',
          ar: 'هيكل تقسيم العمل (PSP) هو تقسيم هرمي لجميع مهام المشروع إلى مشاريع فرعية وحزم عمل. يشكل الأساس للتخطيط الإضافي للمشروع ويضمن تسجيل جميع المهام.',
        },
        keyPoints: [
          {
            de: 'Hierarchische Struktur: Projekt → Teilprojekte → Arbeitspakete',
            ar: 'هيكل هرمي: المشروع ← المشاريع الفرعية ← حزم العمل',
          },
          {
            de: 'Arbeitspakete sind die kleinsten Einheiten und werden einzelnen Verantwortlichen zugeordnet',
            ar: 'حزم العمل هي أصغر الوحدات ويتم تعيينها لمسؤولين محددين',
          },
          {
            de: 'Vollständigkeitsprinzip: Alle Aufgaben müssen im PSP enthalten sein',
            ar: 'مبدأ الشمولية: يجب أن تكون جميع المهام موجودة في PSP',
          },
        ],
        examples: [
          {
            de: 'PSP für ein Webprojekt: Projekt → Teilprojekte (Frontend, Backend, Datenbank) → Arbeitspakete (z.B. Frontend: Login-Seite erstellen, Dashboard gestalten, Navigation implementieren).',
            ar: 'PSP لمشروع ويب: المشروع ← المشاريع الفرعية (الواجهة الأمامية، الخلفية، قاعدة البيانات) ← حزم العمل (مثلاً الواجهة الأمامية: إنشاء صفحة تسجيل الدخول، تصميم لوحة التحكم، تنفيذ التنقل).',
          },
        ],
        examRelevance: {
          de: 'Der PSP wird häufig als Grafik in Prüfungsaufgaben dargestellt. Können Sie einen PSP erstellen und Arbeitspakete zuordnen.',
          ar: 'يُعرض PSP غالباً كرسم بياني في مهام الامتحان. كن قادراً على إنشاء PSP وتعيين حزم العمل.',
        },
        summary: {
          de: 'Der PSP gliedert ein Projekt hierarchisch in Teilprojekte und Arbeitspakete und sichert die Vollständigkeit der Planung.',
          ar: 'يقسم PSP المشروع هرمياً إلى مشاريع فرعية وحزم عمل ويضمن شمولية التخطيط.',
        },
      },
    },
    {
      id: 'aufwandsschaetzung',
      name: {
        de: 'Aufwandsschätzung',
        ar: 'تقدير الجهد',
      },
      content: {
        definition: {
          de: 'Aufwandsschätzung ist die Abschätzung des Zeit-, Personal- und Kostenaufwands für Projektaufgaben. Gängige Methoden sind Expertenschätzung, Dreipunktschätzung, Analogiemethode, Function-Point-Analyse und Planning Poker (agil).',
          ar: 'تقدير الجهد هو تقدير الوقت والموظفين والتكلفة لمهام المشروع. الأساليب الشائعة هي تقدير الخبراء، تقدير النقاط الثلاث، طريقة القياس، تحليل نقاط الوظائف و Planning Poker (مرن).',
        },
        keyPoints: [
          {
            de: 'Dreipunktschätzung: Erwartungswert = (optimistisch + 4×wahrscheinlich + pessimistisch) / 6',
            ar: 'تقدير النقاط الثلاث: القيمة المتوقعة = (متفائل + 4×محتمل + متشائم) / 6',
          },
          {
            de: 'Analogiemethode: Schätzung basierend auf Erfahrungswerten aus ähnlichen Projekten',
            ar: 'طريقة القياس: تقدير بناءً على قيم الخبرة من مشاريع مماثلة',
          },
          {
            de: 'Planning Poker: Agile Schätzmethode mit Story Points durch das gesamte Team',
            ar: 'Planning Poker: أسلوب تقدير مرن بنقاط القصة من قبل الفريق بأكمله',
          },
        ],
        examples: [
          {
            de: 'Dreipunktschätzung für ein Arbeitspaket: Optimistisch: 3 Tage, Wahrscheinlich: 5 Tage, Pessimistisch: 10 Tage → Erwartungswert = (3 + 4×5 + 10) / 6 ≈ 5,5 Tage.',
            ar: 'تقدير النقاط الثلاث لحزمة عمل: متفائل: 3 أيام، محتمل: 5 أيام، متشائم: 10 أيام ← القيمة المتوقعة = (3 + 4×5 + 10) / 6 ≈ 5.5 أيام.',
          },
        ],
        examRelevance: {
          de: 'Die Dreipunktschätzung ist eine klassische Rechenaufgabe in der Prüfung. Lernen Sie die Formel auswendig und üben Sie Berechnungen.',
          ar: 'تقدير النقاط الثلاث مسألة حسابية كلاسيكية في الامتحان. احفظ الصيغة وتدرب على الحسابات.',
        },
        summary: {
          de: 'Aufwandsschätzung ermittelt den benötigten Aufwand mit Methoden wie Dreipunktschätzung oder Planning Poker.',
          ar: 'تقدير الجهد يحدد الجهد المطلوب بأساليب مثل تقدير النقاط الثلاث أو Planning Poker.',
        },
      },
    },
    {
      id: 'risikomanagement',
      name: {
        de: 'Risikomanagement',
        ar: 'إدارة المخاطر',
      },
      content: {
        definition: {
          de: 'Risikomanagement ist der systematische Prozess zur Identifikation, Analyse, Bewertung und Steuerung von Projektrisiken. Ziel ist es, potenzielle Probleme frühzeitig zu erkennen und geeignete Gegenmaßnahmen zu planen.',
          ar: 'إدارة المخاطر هي العملية المنهجية لتحديد وتحليل وتقييم والتحكم في مخاطر المشروع. الهدف هو التعرف على المشاكل المحتملة مبكراً وتخطيط الإجراءات المضادة المناسبة.',
        },
        keyPoints: [
          {
            de: 'Risikoidentifikation: Brainstorming, Checklisten, Erfahrungswerte aus früheren Projekten',
            ar: 'تحديد المخاطر: العصف الذهني، قوائم التحقق، قيم الخبرة من مشاريع سابقة',
          },
          {
            de: 'Risikobewertung: Eintrittswahrscheinlichkeit × Schadensausmaß = Risikowert',
            ar: 'تقييم المخاطر: احتمال الحدوث × حجم الضرر = قيمة المخاطرة',
          },
          {
            de: 'Risikostrategien: Vermeiden, Vermindern, Übertragen (Versicherung), Akzeptieren',
            ar: 'استراتيجيات المخاطر: تجنب، تقليل، نقل (تأمين)، قبول',
          },
        ],
        examples: [
          {
            de: 'Risiko: Ausfall eines Schlüsselentwicklers. Eintrittswahrscheinlichkeit: 20%, Schadensausmaß: hoch (50.000€). Maßnahme: Wissenstransfer und Dokumentation sicherstellen, um die Abhängigkeit zu reduzieren.',
            ar: 'مخاطرة: غياب مطور رئيسي. احتمال الحدوث: 20%، حجم الضرر: عالي (50,000€). الإجراء: ضمان نقل المعرفة والتوثيق لتقليل الاعتماد.',
          },
        ],
        examRelevance: {
          de: 'Risikomanagement wird oft als Szenario-Aufgabe gestellt. Können Sie Risiken identifizieren, bewerten und passende Strategien zuordnen.',
          ar: 'إدارة المخاطر تُطرح غالباً كمهمة سيناريو. كن قادراً على تحديد المخاطر وتقييمها وتعيين الاستراتيجيات المناسبة.',
        },
        summary: {
          de: 'Risikomanagement identifiziert und bewertet Risiken systematisch und plant Gegenmaßnahmen zur Risikominimierung.',
          ar: 'إدارة المخاطر تحدد وتقيم المخاطر بشكل منهجي وتخطط إجراءات مضادة لتقليلها.',
        },
      },
    },
    {
      id: 'projektcontrolling',
      name: {
        de: 'Projektcontrolling',
        ar: 'مراقبة المشروع',
      },
      content: {
        definition: {
          de: 'Projektcontrolling umfasst die kontinuierliche Überwachung und Steuerung des Projektfortschritts durch Soll-Ist-Vergleiche. Es sichert die Einhaltung von Terminen, Kosten und Qualität und ermöglicht rechtzeitige Korrekturmaßnahmen bei Abweichungen.',
          ar: 'مراقبة المشروع تشمل المتابعة والتوجيه المستمرين لتقدم المشروع من خلال مقارنة المخطط بالفعلي. تضمن الالتزام بالمواعيد والتكاليف والجودة وتتيح إجراءات تصحيحية في الوقت المناسب عند الانحرافات.',
        },
        keyPoints: [
          {
            de: 'Soll-Ist-Vergleich: Geplante Werte werden mit tatsächlichen Werten verglichen',
            ar: 'مقارنة المخطط بالفعلي: تُقارن القيم المخططة بالقيم الفعلية',
          },
          {
            de: 'Earned Value Analyse: Methode zur Messung des Projektfortschritts in Bezug auf Zeit und Kosten',
            ar: 'تحليل القيمة المكتسبة: أسلوب لقياس تقدم المشروع من حيث الوقت والتكلفة',
          },
          {
            de: 'Statusberichte: Regelmäßige Kommunikation des Projektfortschritts an Stakeholder',
            ar: 'تقارير الحالة: التواصل المنتظم لتقدم المشروع لأصحاب المصلحة',
          },
        ],
        examples: [
          {
            de: 'Ein Projektleiter stellt in der Mitte des Projekts fest: Geplante Kosten (Soll): 30.000€, Tatsächliche Kosten (Ist): 35.000€. Abweichung: +5.000€ (17% über Budget). Maßnahme: Priorisierung der verbleibenden Features.',
            ar: 'مدير مشروع يكتشف في منتصف المشروع: التكاليف المخططة (المستهدف): 30,000€، التكاليف الفعلية: 35,000€. الانحراف: +5,000€ (17% فوق الميزانية). الإجراء: ترتيب أولويات الميزات المتبقية.',
          },
        ],
        examRelevance: {
          de: 'Soll-Ist-Vergleiche und Earned Value Analysis können als Berechnungsaufgaben vorkommen. Verstehen Sie die Grundprinzipien.',
          ar: 'مقارنات المخطط بالفعلي وتحليل القيمة المكتسبة يمكن أن تظهر كمسائل حسابية. افهم المبادئ الأساسية.',
        },
        summary: {
          de: 'Projektcontrolling überwacht den Projektfortschritt durch Soll-Ist-Vergleiche und ermöglicht rechtzeitige Steuerungsmaßnahmen.',
          ar: 'مراقبة المشروع تتابع تقدم المشروع من خلال مقارنة المخطط بالفعلي وتتيح إجراءات توجيهية في الوقت المناسب.',
        },
      },
    },
  ],
};
