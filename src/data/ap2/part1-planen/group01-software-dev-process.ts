import type { TopicGroup } from '../../../types';

export const softwareDevProcess: TopicGroup = {
  id: 'group01',
  name: {
    de: 'Softwareentwicklungsprozesse',
    ar: 'عمليات تطوير البرمجيات',
  },
  description: {
    de: 'Überblick über klassische und agile Vorgehensmodelle in der Softwareentwicklung',
    ar: 'نظرة عامة على النماذج التقليدية والمرنة في تطوير البرمجيات',
  },
  priority: 'high',
  topics: [
    {
      id: 'classical-project-management',
      name: {
        de: 'Klassisches Projektmanagement',
        ar: 'إدارة المشاريع التقليدية',
      },
      content: {
        definition: {
          de: 'Klassisches Projektmanagement ist ein plangetriebener Ansatz, bei dem Projekte in klar definierte Phasen unterteilt werden. Alle Anforderungen werden zu Beginn vollständig erfasst, und der Projektverlauf folgt einem festgelegten Plan mit definierten Meilensteinen.',
          ar: 'إدارة المشاريع التقليدية هي نهج يعتمد على التخطيط المسبق، حيث يتم تقسيم المشاريع إلى مراحل محددة بوضوح. يتم جمع جميع المتطلبات بالكامل في البداية، ويتبع سير المشروع خطة محددة مع معالم رئيسية واضحة.',
        },
        keyPoints: [
          {
            de: 'Phasen werden sequenziell durchlaufen: Planung → Analyse → Entwurf → Implementierung → Test → Einführung',
            ar: 'يتم المرور بالمراحل بشكل تسلسلي: التخطيط ← التحليل ← التصميم ← التنفيذ ← الاختبار ← الإطلاق',
          },
          {
            de: 'Änderungen sind nach Abschluss einer Phase schwer und kostspielig umzusetzen',
            ar: 'التغييرات بعد إتمام مرحلة ما تكون صعبة ومكلفة التنفيذ',
          },
          {
            de: 'Umfangreiche Dokumentation ist ein zentrales Element des klassischen Vorgehens',
            ar: 'التوثيق الشامل هو عنصر أساسي في النهج التقليدي',
          },
          {
            de: 'Geeignet für Projekte mit stabilen, klar definierten Anforderungen',
            ar: 'مناسب للمشاريع ذات المتطلبات المستقرة والمحددة بوضوح',
          },
        ],
        examples: [
          {
            de: 'Ein Unternehmen entwickelt eine Buchhaltungssoftware nach gesetzlichen Vorgaben. Da die Anforderungen klar definiert und stabil sind, wird das Wasserfallmodell eingesetzt.',
            ar: 'تقوم شركة بتطوير برنامج محاسبة وفقاً للمتطلبات القانونية. نظراً لأن المتطلبات واضحة ومستقرة، يتم استخدام نموذج الشلال.',
          },
          {
            de: 'Bei der Entwicklung eines Steuerungssystems für eine Produktionsanlage werden alle Anforderungen vorab dokumentiert und in einem Pflichtenheft festgehalten.',
            ar: 'عند تطوير نظام تحكم لمنشأة إنتاجية، يتم توثيق جميع المتطلبات مسبقاً وتسجيلها في دفتر الشروط.',
          },
        ],
        examRelevance: {
          de: 'In der IHK-Prüfung wird häufig nach den Unterschieden zwischen klassischem und agilem Projektmanagement gefragt. Verstehen Sie die Vor- und Nachteile und wann welches Modell eingesetzt wird.',
          ar: 'في امتحان IHK يُسأل كثيراً عن الفروقات بين إدارة المشاريع التقليدية والمرنة. افهم المزايا والعيوب ومتى يُستخدم كل نموذج.',
        },
        summary: {
          de: 'Klassisches Projektmanagement eignet sich für Projekte mit stabilen Anforderungen und legt Wert auf umfassende Planung und Dokumentation.',
          ar: 'إدارة المشاريع التقليدية مناسبة للمشاريع ذات المتطلبات المستقرة وتركز على التخطيط والتوثيق الشامل.',
        },
      },
    },
    {
      id: 'agile-project-management',
      name: {
        de: 'Agiles Projektmanagement',
        ar: 'إدارة المشاريع المرنة (Agile)',
      },
      content: {
        definition: {
          de: 'Agiles Projektmanagement ist ein iterativer und inkrementeller Ansatz, bei dem Anforderungen und Lösungen durch die Zusammenarbeit selbstorganisierter Teams entwickelt werden. Es basiert auf dem Agilen Manifest und betont Flexibilität, Kundenfeedback und schnelle Lieferung.',
          ar: 'إدارة المشاريع المرنة هي نهج تكراري وتزايدي، حيث يتم تطوير المتطلبات والحلول من خلال التعاون بين فرق ذاتية التنظيم. يستند إلى بيان Agile ويركز على المرونة وملاحظات العملاء والتسليم السريع.',
        },
        keyPoints: [
          {
            de: 'Das Agile Manifest betont: Individuen und Interaktionen über Prozesse und Werkzeuge',
            ar: 'يؤكد بيان Agile على: الأفراد والتفاعلات فوق العمليات والأدوات',
          },
          {
            de: 'Kurze Iterationszyklen (Sprints) ermöglichen schnelles Feedback und Anpassung',
            ar: 'دورات التكرار القصيرة (Sprints) تتيح التغذية الراجعة السريعة والتكيف',
          },
          {
            de: 'Funktionierende Software hat Vorrang vor umfassender Dokumentation',
            ar: 'البرمجيات العاملة لها الأولوية على التوثيق الشامل',
          },
          {
            de: 'Reagieren auf Veränderung ist wichtiger als das Befolgen eines starren Plans',
            ar: 'الاستجابة للتغيير أهم من اتباع خطة جامدة',
          },
        ],
        examples: [
          {
            de: 'Ein Startup entwickelt eine neue App. Da sich die Anforderungen durch Nutzerfeedback ständig ändern, wird Scrum als agile Methode eingesetzt.',
            ar: 'شركة ناشئة تطور تطبيقاً جديداً. نظراً لتغير المتطلبات باستمرار من خلال ملاحظات المستخدمين، يتم استخدام Scrum كمنهجية مرنة.',
          },
        ],
        examRelevance: {
          de: 'Die vier Werte des Agilen Manifests und die Unterschiede zum klassischen Vorgehen sind häufige Prüfungsthemen. Kennen Sie die Werte und Prinzipien auswendig.',
          ar: 'القيم الأربع لبيان Agile والفروقات مع النهج التقليدي هي مواضيع امتحان شائعة. احفظ القيم والمبادئ.',
        },
        summary: {
          de: 'Agiles Projektmanagement setzt auf Flexibilität, Teamarbeit und iterative Entwicklung, um schnell auf Änderungen reagieren zu können.',
          ar: 'إدارة المشاريع المرنة تعتمد على المرونة والعمل الجماعي والتطوير التكراري للاستجابة السريعة للتغييرات.',
        },
      },
    },
    {
      id: 'waterfall-model',
      name: {
        de: 'Wasserfallmodell',
        ar: 'نموذج الشلال',
      },
      content: {
        definition: {
          de: 'Das Wasserfallmodell ist ein lineares, sequenzielles Vorgehensmodell, bei dem jede Phase vollständig abgeschlossen sein muss, bevor die nächste beginnt. Der Name leitet sich von der Darstellung ab, bei der die Phasen wie ein Wasserfall von oben nach unten fließen.',
          ar: 'نموذج الشلال هو نموذج تطوير خطي متسلسل، حيث يجب إتمام كل مرحلة بالكامل قبل بدء المرحلة التالية. يُشتق الاسم من التمثيل البصري حيث تتدفق المراحل كشلال من أعلى إلى أسفل.',
        },
        keyPoints: [
          {
            de: 'Phasen: Anforderungsanalyse → Entwurf → Implementierung → Test → Betrieb/Wartung',
            ar: 'المراحل: تحليل المتطلبات ← التصميم ← التنفيذ ← الاختبار ← التشغيل/الصيانة',
          },
          {
            de: 'Kein Rücksprung in vorherige Phasen vorgesehen (in der reinen Form)',
            ar: 'لا يُسمح بالعودة إلى المراحل السابقة (في الشكل الأصلي)',
          },
          {
            de: 'Vorteil: Klare Struktur, gute Planbarkeit und einfache Dokumentation',
            ar: 'الميزة: هيكل واضح وقابلية تخطيط جيدة وسهولة التوثيق',
          },
          {
            de: 'Nachteil: Unflexibel bei Anforderungsänderungen, späte Fehlererkennung',
            ar: 'العيب: غير مرن عند تغيير المتطلبات، اكتشاف الأخطاء متأخر',
          },
        ],
        examples: [
          {
            de: 'Ein Softwareprojekt für eine Behörde: Alle Anforderungen werden im Lastenheft fixiert, dann wird der Entwurf erstellt, danach programmiert und zum Schluss getestet.',
            ar: 'مشروع برمجي لجهة حكومية: يتم تثبيت جميع المتطلبات في دفتر المتطلبات، ثم يُعد التصميم، ثم البرمجة وأخيراً الاختبار.',
          },
        ],
        examRelevance: {
          de: 'Das Wasserfallmodell ist ein Klassiker in der IHK-Prüfung. Sie müssen die Phasen benennen können und die Vor- und Nachteile kennen.',
          ar: 'نموذج الشلال كلاسيكي في امتحان IHK. يجب أن تتمكن من تسمية المراحل ومعرفة المزايا والعيوب.',
        },
        summary: {
          de: 'Das Wasserfallmodell ist ein sequenzielles Vorgehensmodell mit klaren Phasen, geeignet für stabile Anforderungen, aber unflexibel bei Änderungen.',
          ar: 'نموذج الشلال هو نموذج تطوير متسلسل بمراحل واضحة، مناسب للمتطلبات المستقرة لكنه غير مرن عند التغييرات.',
        },
      },
    },
    {
      id: 'scrum',
      name: {
        de: 'Scrum',
        ar: 'سكرام (Scrum)',
      },
      content: {
        definition: {
          de: 'Scrum ist ein agiles Rahmenwerk (Framework) für die Entwicklung komplexer Produkte. Es definiert Rollen (Product Owner, Scrum Master, Entwicklungsteam), Ereignisse (Sprint, Daily Scrum, Sprint Review, Sprint Retrospektive) und Artefakte (Product Backlog, Sprint Backlog, Inkrement).',
          ar: 'سكرام هو إطار عمل مرن لتطوير المنتجات المعقدة. يحدد الأدوار (مالك المنتج، سكرام ماستر، فريق التطوير) والأحداث (Sprint، Daily Scrum، Sprint Review، Sprint Retrospective) والمخرجات (Product Backlog، Sprint Backlog، Increment).',
        },
        keyPoints: [
          {
            de: 'Product Owner: Verantwortlich für das Product Backlog und die Priorisierung der Anforderungen',
            ar: 'مالك المنتج: مسؤول عن Product Backlog وترتيب أولويات المتطلبات',
          },
          {
            de: 'Scrum Master: Beseitigt Hindernisse und stellt sicher, dass Scrum korrekt angewendet wird',
            ar: 'سكرام ماستر: يزيل العقبات ويضمن تطبيق سكرام بشكل صحيح',
          },
          {
            de: 'Sprints sind zeitlich begrenzte Iterationen (typisch 2-4 Wochen) mit einem lieferbaren Ergebnis',
            ar: 'السبرنتات هي تكرارات محددة زمنياً (عادة 2-4 أسابيع) مع نتيجة قابلة للتسليم',
          },
          {
            de: 'Daily Scrum: Tägliches 15-Minuten-Meeting zur Synchronisation des Teams',
            ar: 'Daily Scrum: اجتماع يومي مدته 15 دقيقة لمزامنة الفريق',
          },
        ],
        examples: [
          {
            de: 'Ein Entwicklungsteam plant einen zweiwöchigen Sprint. Im Sprint Planning werden User Stories aus dem Product Backlog ausgewählt und in das Sprint Backlog übernommen. Am Ende des Sprints wird im Sprint Review das Inkrement vorgestellt.',
            ar: 'يخطط فريق تطوير لسبرنت مدته أسبوعان. في Sprint Planning يتم اختيار قصص المستخدم من Product Backlog ونقلها إلى Sprint Backlog. في نهاية السبرنت يتم عرض الزيادة في Sprint Review.',
          },
        ],
        examRelevance: {
          de: 'Scrum ist eines der wichtigsten Themen in der AP2-Prüfung. Kennen Sie alle Rollen, Events und Artefakte. Häufige Frage: Welche Rolle ist für was zuständig?',
          ar: 'سكرام من أهم المواضيع في امتحان AP2. احفظ جميع الأدوار والأحداث والمخرجات. سؤال شائع: أي دور مسؤول عن ماذا؟',
        },
        summary: {
          de: 'Scrum ist ein agiles Framework mit definierten Rollen, Events und Artefakten für die iterative Produktentwicklung in kurzen Sprints.',
          ar: 'سكرام هو إطار عمل مرن بأدوار وأحداث ومخرجات محددة للتطوير التكراري للمنتجات في سبرنتات قصيرة.',
        },
      },
    },
    {
      id: 'v-modell',
      name: {
        de: 'V-Modell',
        ar: 'نموذج V',
      },
      content: {
        definition: {
          de: 'Das V-Modell ist eine Erweiterung des Wasserfallmodells, bei dem jeder Entwicklungsphase auf der linken Seite eine korrespondierende Testphase auf der rechten Seite gegenübersteht. Die V-Form verdeutlicht die Zuordnung von Verifikation und Validierung zu den jeweiligen Entwicklungsphasen.',
          ar: 'نموذج V هو امتداد لنموذج الشلال، حيث تقابل كل مرحلة تطوير على الجانب الأيسر مرحلة اختبار مقابلة على الجانب الأيمن. يوضح شكل V ارتباط التحقق والمصادقة بمراحل التطوير المعنية.',
        },
        keyPoints: [
          {
            de: 'Linke Seite (Spezifikation): Anforderungen → Grobentwurf → Feinentwurf → Implementierung',
            ar: 'الجانب الأيسر (التحديد): المتطلبات ← التصميم العام ← التصميم التفصيلي ← التنفيذ',
          },
          {
            de: 'Rechte Seite (Test): Komponententest → Integrationstest → Systemtest → Abnahmetest',
            ar: 'الجانب الأيمن (الاختبار): اختبار المكونات ← اختبار التكامل ← اختبار النظام ← اختبار القبول',
          },
          {
            de: 'Verifikation prüft: Wird das Produkt richtig gebaut? Validierung prüft: Wird das richtige Produkt gebaut?',
            ar: 'التحقق يفحص: هل يُبنى المنتج بشكل صحيح؟ المصادقة تفحص: هل يُبنى المنتج الصحيح؟',
          },
          {
            de: 'Frühe Testplanung: Tests werden parallel zur Spezifikation geplant',
            ar: 'التخطيط المبكر للاختبارات: يتم تخطيط الاختبارات بالتوازي مع التحديد',
          },
        ],
        examples: [
          {
            de: 'Im V-Modell wird bei der Anforderungsanalyse gleichzeitig der Abnahmetest geplant. Der Grobentwurf korrespondiert mit dem Systemtest, der Feinentwurf mit dem Integrationstest.',
            ar: 'في نموذج V يتم تخطيط اختبار القبول بالتزامن مع تحليل المتطلبات. يتوافق التصميم العام مع اختبار النظام والتصميم التفصيلي مع اختبار التكامل.',
          },
        ],
        examRelevance: {
          de: 'Das V-Modell wird oft im Vergleich zum Wasserfallmodell abgefragt. Wichtig: Verstehen Sie die Zuordnung der Testphasen zu den Entwicklungsphasen und den Unterschied zwischen Verifikation und Validierung.',
          ar: 'غالباً ما يُسأل عن نموذج V بالمقارنة مع نموذج الشلال. مهم: افهم ارتباط مراحل الاختبار بمراحل التطوير والفرق بين التحقق والمصادقة.',
        },
        summary: {
          de: 'Das V-Modell ergänzt das Wasserfallmodell um korrespondierende Testphasen und betont die frühzeitige Testplanung.',
          ar: 'يكمل نموذج V نموذج الشلال بمراحل اختبار مقابلة ويؤكد على التخطيط المبكر للاختبارات.',
        },
      },
    },
    {
      id: 'kanban',
      name: {
        de: 'Kanban',
        ar: 'كانبان (Kanban)',
      },
      content: {
        definition: {
          de: 'Kanban ist eine agile Methode zur Steuerung von Arbeitsprozessen mithilfe eines visuellen Boards. Aufgaben werden als Karten dargestellt, die durch verschiedene Spalten (z.B. To Do, In Progress, Done) bewegt werden. Ein zentrales Prinzip ist die Begrenzung der gleichzeitig bearbeiteten Aufgaben (WIP-Limit).',
          ar: 'كانبان هو أسلوب مرن لإدارة عمليات العمل باستخدام لوحة مرئية. يتم تمثيل المهام كبطاقات تُنقل عبر أعمدة مختلفة (مثل: للعمل، قيد التنفيذ، مكتمل). مبدأ أساسي هو تحديد عدد المهام المتزامنة (WIP-Limit).',
        },
        keyPoints: [
          {
            de: 'Kanban-Board visualisiert den Arbeitsfluss mit Spalten für verschiedene Zustände',
            ar: 'لوحة كانبان تعرض تدفق العمل بأعمدة للحالات المختلفة',
          },
          {
            de: 'WIP-Limit (Work in Progress): Maximale Anzahl gleichzeitiger Aufgaben pro Spalte',
            ar: 'WIP-Limit (العمل الجاري): الحد الأقصى للمهام المتزامنة لكل عمود',
          },
          {
            de: 'Kontinuierlicher Fluss: Keine festen Iterationen wie bei Scrum',
            ar: 'تدفق مستمر: لا توجد تكرارات ثابتة كما في سكرام',
          },
          {
            de: 'Pull-Prinzip: Neue Aufgaben werden erst begonnen, wenn Kapazität frei ist',
            ar: 'مبدأ السحب: لا تبدأ مهام جديدة إلا عند توفر السعة',
          },
        ],
        examples: [
          {
            de: 'Ein Support-Team verwendet ein Kanban-Board mit den Spalten „Neu", „In Bearbeitung" (WIP-Limit: 3), „Review" und „Erledigt". Neue Tickets werden erst gezogen, wenn ein Platz in „In Bearbeitung" frei wird.',
            ar: 'فريق دعم يستخدم لوحة كانبان بالأعمدة "جديد"، "قيد التنفيذ" (WIP-Limit: 3)، "مراجعة" و "مكتمل". لا تُسحب تذاكر جديدة إلا عند توفر مكان في "قيد التنفيذ".',
          },
        ],
        examRelevance: {
          de: 'In der Prüfung wird Kanban oft mit Scrum verglichen. Wichtig: WIP-Limits verstehen und den Unterschied zwischen Pull- und Push-Prinzip erklären können.',
          ar: 'في الامتحان غالباً ما يُقارن كانبان بسكرام. مهم: فهم WIP-Limits والقدرة على شرح الفرق بين مبدأ السحب والدفع.',
        },
        summary: {
          de: 'Kanban steuert Arbeitsprozesse visuell über ein Board mit WIP-Limits und einem kontinuierlichen Pull-Fluss.',
          ar: 'كانبان يدير عمليات العمل بصرياً عبر لوحة مع حدود WIP وتدفق سحب مستمر.',
        },
      },
    },
    {
      id: 'iterative-development',
      name: {
        de: 'Iterative Entwicklung',
        ar: 'التطوير التكراري',
      },
      content: {
        definition: {
          de: 'Iterative Entwicklung ist ein Vorgehensmodell, bei dem das Softwareprodukt in wiederholten Durchläufen (Iterationen) schrittweise verfeinert wird. Jede Iteration durchläuft alle Phasen des Entwicklungsprozesses und liefert eine verbesserte Version des Produkts.',
          ar: 'التطوير التكراري هو نموذج تطوير يتم فيه تحسين المنتج البرمجي تدريجياً في دورات متكررة (تكرارات). تمر كل تكرار بجميع مراحل عملية التطوير وتقدم نسخة محسنة من المنتج.',
        },
        keyPoints: [
          {
            de: 'Jede Iteration umfasst Analyse, Entwurf, Implementierung und Test',
            ar: 'كل تكرار يشمل التحليل والتصميم والتنفيذ والاختبار',
          },
          {
            de: 'Feedback aus jeder Iteration fließt in die nächste ein',
            ar: 'التغذية الراجعة من كل تكرار تُدمج في التكرار التالي',
          },
          {
            de: 'Risiken werden früh erkannt, da regelmäßig lauffähige Versionen entstehen',
            ar: 'يتم اكتشاف المخاطر مبكراً لأنه يتم إنتاج نسخ قابلة للتشغيل بانتظام',
          },
        ],
        examples: [
          {
            de: 'Ein Team entwickelt ein Webportal. In der ersten Iteration wird ein einfacher Login erstellt. In der zweiten Iteration wird die Benutzeroberfläche verbessert. In der dritten Iteration kommen Sicherheitsfeatures hinzu.',
            ar: 'فريق يطور بوابة ويب. في التكرار الأول يتم إنشاء تسجيل دخول بسيط. في التكرار الثاني يتم تحسين واجهة المستخدم. في التكرار الثالث تُضاف ميزات الأمان.',
          },
        ],
        examRelevance: {
          de: 'Verstehen Sie den Unterschied zwischen iterativer und inkrementeller Entwicklung. Iterativ bedeutet Verfeinerung, inkrementell bedeutet Erweiterung.',
          ar: 'افهم الفرق بين التطوير التكراري والتزايدي. التكراري يعني التحسين، والتزايدي يعني التوسيع.',
        },
        summary: {
          de: 'Iterative Entwicklung verfeinert das Produkt in wiederholten Zyklen und ermöglicht frühes Feedback und Risikominimierung.',
          ar: 'التطوير التكراري يحسن المنتج في دورات متكررة ويتيح التغذية الراجعة المبكرة وتقليل المخاطر.',
        },
      },
    },
    {
      id: 'incremental-development',
      name: {
        de: 'Inkrementelle Entwicklung',
        ar: 'التطوير التزايدي',
      },
      content: {
        definition: {
          de: 'Inkrementelle Entwicklung ist ein Vorgehensmodell, bei dem das Softwareprodukt in aufeinander aufbauenden Teillieferungen (Inkrementen) entwickelt wird. Jedes Inkrement fügt neue Funktionalität zum bestehenden System hinzu.',
          ar: 'التطوير التزايدي هو نموذج تطوير يتم فيه بناء المنتج البرمجي في تسليمات جزئية متتالية (زيادات). كل زيادة تضيف وظائف جديدة إلى النظام الحالي.',
        },
        keyPoints: [
          {
            de: 'Jedes Inkrement liefert eine neue, funktionsfähige Teilmenge des Gesamtsystems',
            ar: 'كل زيادة تقدم مجموعة فرعية جديدة وعاملة من النظام الكامل',
          },
          {
            de: 'Die Kernfunktionalität wird zuerst entwickelt und schrittweise erweitert',
            ar: 'يتم تطوير الوظائف الأساسية أولاً ثم توسيعها تدريجياً',
          },
          {
            de: 'Kombination mit iterativem Vorgehen möglich (iterativ-inkrementell)',
            ar: 'يمكن دمجه مع النهج التكراري (تكراري-تزايدي)',
          },
        ],
        examples: [
          {
            de: 'Ein Online-Shop wird inkrementell entwickelt: 1. Inkrement: Produktkatalog, 2. Inkrement: Warenkorb, 3. Inkrement: Bezahlfunktion, 4. Inkrement: Benutzerkonto.',
            ar: 'متجر إلكتروني يُطور بشكل تزايدي: الزيادة الأولى: كتالوج المنتجات، الزيادة الثانية: سلة التسوق، الزيادة الثالثة: وظيفة الدفع، الزيادة الرابعة: حساب المستخدم.',
          },
        ],
        examRelevance: {
          de: 'Häufige Prüfungsfrage: Was ist der Unterschied zwischen iterativ und inkrementell? Iterativ = Verfeinerung des Bestehenden, Inkrementell = Hinzufügen neuer Funktionen.',
          ar: 'سؤال امتحان شائع: ما الفرق بين التكراري والتزايدي؟ التكراري = تحسين الموجود، التزايدي = إضافة وظائف جديدة.',
        },
        summary: {
          de: 'Inkrementelle Entwicklung baut das System schrittweise durch aufeinander aufbauende Teillieferungen mit neuer Funktionalität auf.',
          ar: 'التطوير التزايدي يبني النظام تدريجياً من خلال تسليمات جزئية متتالية بوظائف جديدة.',
        },
      },
    },
  ],
};
