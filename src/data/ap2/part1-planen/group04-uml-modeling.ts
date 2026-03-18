import type { TopicGroup } from '../../../types';

export const umlModeling: TopicGroup = {
  id: 'group04',
  name: {
    de: 'UML-Modellierung',
    ar: 'نمذجة UML',
  },
  description: {
    de: 'Unified Modeling Language (UML) Diagrammtypen zur Modellierung von Softwaresystemen',
    ar: 'أنواع مخططات لغة النمذجة الموحدة (UML) لنمذجة أنظمة البرمجيات',
  },
  priority: 'very-high',
  topics: [
    {
      id: 'klassendiagramm',
      name: {
        de: 'Klassendiagramm',
        ar: 'مخطط الفئات (Klassendiagramm)',
      },
      content: {
        definition: {
          de: 'Das Klassendiagramm ist das zentrale Strukturdiagramm der UML. Es zeigt Klassen mit ihren Attributen und Methoden sowie die Beziehungen zwischen den Klassen (Assoziation, Aggregation, Komposition, Vererbung). Es ist die Grundlage für die objektorientierte Softwareentwicklung.',
          ar: 'مخطط الفئات هو المخطط الهيكلي المركزي في UML. يُظهر الفئات بخصائصها وأساليبها وكذلك العلاقات بين الفئات (الارتباط، التجميع، التركيب، الوراثة). هو الأساس لتطوير البرمجيات كائنية التوجه.',
        },
        keyPoints: [
          {
            de: 'Eine Klasse wird als Rechteck mit drei Bereichen dargestellt: Name, Attribute, Methoden',
            ar: 'تُمثل الفئة كمستطيل بثلاثة أقسام: الاسم، الخصائص، الأساليب',
          },
          {
            de: 'Sichtbarkeiten: + (public), - (private), # (protected), ~ (package)',
            ar: 'مستويات الرؤية: + (عام)، - (خاص)، # (محمي)، ~ (حزمة)',
          },
          {
            de: 'Attribute: Sichtbarkeit name: Typ = Standardwert',
            ar: 'الخصائص: مستوى الرؤية الاسم: النوع = القيمة الافتراضية',
          },
          {
            de: 'Methoden: Sichtbarkeit name(Parameter): Rückgabetyp',
            ar: 'الأساليب: مستوى الرؤية الاسم(المعاملات): نوع الإرجاع',
          },
        ],
        examples: [
          {
            de: 'Klasse „Kunde": Attribute: - kundenNr: int, - name: String, - email: String. Methoden: + bestellen(): void, + getKundenNr(): int. Beziehung: Kunde 1..* → Bestellung (Ein Kunde hat mehrere Bestellungen).',
            ar: 'فئة "عميل": الخصائص: - رقم العميل: int، - الاسم: String، - البريد: String. الأساليب: + طلب(): void، + getKundenNr(): int. العلاقة: عميل 1..* ← طلب (عميل واحد لديه عدة طلبات).',
          },
        ],
        examRelevance: {
          de: 'Klassendiagramme sind eines der wichtigsten Prüfungsthemen. Sie müssen Diagramme lesen, erstellen und Beziehungen korrekt benennen können.',
          ar: 'مخططات الفئات من أهم مواضيع الامتحان. يجب أن تتمكن من قراءة وإنشاء المخططات وتسمية العلاقات بشكل صحيح.',
        },
        summary: {
          de: 'Klassendiagramme zeigen Klassen mit Attributen, Methoden und deren Beziehungen als Grundlage der OO-Modellierung.',
          ar: 'مخططات الفئات تُظهر الفئات بخصائصها وأساليبها وعلاقاتها كأساس للنمذجة كائنية التوجه.',
        },
      },
    },
    {
      id: 'zustandsdiagramm',
      name: {
        de: 'Zustandsdiagramm',
        ar: 'مخطط الحالات (Zustandsdiagramm)',
      },
      content: {
        definition: {
          de: 'Ein Zustandsdiagramm (State Machine Diagram) modelliert die verschiedenen Zustände eines Objekts und die Übergänge (Transitionen) zwischen diesen Zuständen, ausgelöst durch Ereignisse. Es zeigt den gesamten Lebenszyklus eines Objekts.',
          ar: 'مخطط الحالات يُنمذج الحالات المختلفة لكائن والانتقالات بين هذه الحالات التي تُفعّلها الأحداث. يُظهر دورة الحياة الكاملة لكائن.',
        },
        keyPoints: [
          {
            de: 'Startzustand (gefüllter Kreis) und Endzustand (Kreis mit Punkt) markieren Anfang und Ende',
            ar: 'حالة البداية (دائرة ممتلئة) وحالة النهاية (دائرة بنقطة) تُعلّم البداية والنهاية',
          },
          {
            de: 'Zustände werden als abgerundete Rechtecke dargestellt',
            ar: 'تُمثل الحالات كمستطيلات مستديرة الزوايا',
          },
          {
            de: 'Transitionen: Pfeile mit Beschriftung [Bedingung] / Aktion',
            ar: 'الانتقالات: أسهم مع تسمية [شرط] / إجراء',
          },
        ],
        examples: [
          {
            de: 'Zustandsdiagramm einer Bestellung: Startzustand → „Erstellt" --[Zahlung eingegangen]-→ „Bezahlt" --[Versand]-→ „Versendet" --[Zugestellt]-→ „Abgeschlossen" → Endzustand.',
            ar: 'مخطط حالات لطلب: حالة البداية ← "مُنشأ" --[تم استلام الدفع]-← "مدفوع" --[الشحن]-← "مُرسل" --[تم التسليم]-← "مكتمل" ← حالة النهاية.',
          },
        ],
        examRelevance: {
          de: 'Zustandsdiagramme werden in der Prüfung als Lese- oder Erstellungsaufgabe gestellt. Kennen Sie die Notation (Start, Ende, Zustand, Transition).',
          ar: 'مخططات الحالات تُطرح في الامتحان كمهمة قراءة أو إنشاء. اعرف الترميز (البداية، النهاية، الحالة، الانتقال).',
        },
        summary: {
          de: 'Zustandsdiagramme modellieren den Lebenszyklus eines Objekts durch Zustände und ereignisgesteuerte Übergänge.',
          ar: 'مخططات الحالات تُنمذج دورة حياة كائن من خلال حالات وانتقالات مدفوعة بالأحداث.',
        },
      },
    },
    {
      id: 'aktivitaetsdiagramm',
      name: {
        de: 'Aktivitätsdiagramm',
        ar: 'مخطط النشاط (Aktivitätsdiagramm)',
      },
      content: {
        definition: {
          de: 'Ein Aktivitätsdiagramm modelliert Abläufe und Workflows als geordnete Folge von Aktivitäten. Es unterstützt Verzweigungen (Entscheidungen), Parallelisierung (Fork/Join) und Swimlanes zur Zuordnung von Verantwortlichkeiten.',
          ar: 'مخطط النشاط يُنمذج العمليات وسير العمل كتسلسل مرتب من الأنشطة. يدعم التفرعات (القرارات) والتوازي (Fork/Join) ومسارات السباحة لتعيين المسؤوليات.',
        },
        keyPoints: [
          {
            de: 'Aktivitäten werden als abgerundete Rechtecke dargestellt',
            ar: 'تُمثل الأنشطة كمستطيلات مستديرة الزوايا',
          },
          {
            de: 'Entscheidungsknoten (Raute): Verzweigung basierend auf Bedingungen',
            ar: 'عقدة القرار (معين): تفرع بناءً على شروط',
          },
          {
            de: 'Fork/Join (schwarzer Balken): Aufspaltung und Zusammenführung paralleler Aktivitäten',
            ar: 'Fork/Join (شريط أسود): تقسيم ودمج الأنشطة المتوازية',
          },
          {
            de: 'Swimlanes teilen Aktivitäten verschiedenen Akteuren oder Abteilungen zu',
            ar: 'مسارات السباحة تعيّن الأنشطة لفاعلين أو أقسام مختلفة',
          },
        ],
        examples: [
          {
            de: 'Aktivitätsdiagramm „Bestellprozess": Start → Produkt auswählen → [Auf Lager?] Ja: → Warenkorb → Bezahlung → Versand → Ende. Nein: → Benachrichtigung senden → Ende.',
            ar: 'مخطط نشاط "عملية الطلب": البداية ← اختيار المنتج ← [متوفر؟] نعم: ← السلة ← الدفع ← الشحن ← النهاية. لا: ← إرسال إشعار ← النهاية.',
          },
        ],
        examRelevance: {
          de: 'Aktivitätsdiagramme werden häufig in der Prüfung eingesetzt, besonders mit Entscheidungsknoten und Swimlanes. Üben Sie das Lesen und Erstellen.',
          ar: 'مخططات النشاط تُستخدم كثيراً في الامتحان خاصة مع عقد القرار ومسارات السباحة. تدرب على القراءة والإنشاء.',
        },
        summary: {
          de: 'Aktivitätsdiagramme modellieren Abläufe mit Aktivitäten, Entscheidungen, Parallelisierung und Verantwortlichkeitszuordnung.',
          ar: 'مخططات النشاط تُنمذج العمليات بأنشطة وقرارات وتوازي وتعيين المسؤوليات.',
        },
      },
    },
    {
      id: 'use-case-diagramm',
      name: {
        de: 'Use-Case-Diagramm',
        ar: 'مخطط حالات الاستخدام',
      },
      content: {
        definition: {
          de: 'Ein Use-Case-Diagramm zeigt die Funktionalitäten (Use Cases) eines Systems und die Akteure, die diese nutzen. Es definiert die Systemgrenzen und stellt die Beziehungen zwischen Akteuren und Use Cases sowie zwischen Use Cases untereinander dar (include, extend).',
          ar: 'مخطط حالات الاستخدام يُظهر وظائف النظام (حالات الاستخدام) والفاعلين الذين يستخدمونها. يحدد حدود النظام ويعرض العلاقات بين الفاعلين وحالات الاستخدام وبين حالات الاستخدام نفسها (include، extend).',
        },
        keyPoints: [
          {
            de: 'Akteure (Strichmännchen) stehen außerhalb der Systemgrenze',
            ar: 'الفاعلون (رموز الأشخاص) يقفون خارج حدود النظام',
          },
          {
            de: '<<include>>: Ein Use Case enthält immer einen anderen (obligatorisch)',
            ar: '<<include>>: حالة استخدام تتضمن دائماً حالة أخرى (إلزامي)',
          },
          {
            de: '<<extend>>: Ein Use Case kann optional um einen anderen erweitert werden',
            ar: '<<extend>>: حالة استخدام يمكن توسيعها اختيارياً بحالة أخرى',
          },
          {
            de: 'Systemgrenze wird als Rechteck dargestellt, Use Cases als Ellipsen',
            ar: 'حدود النظام تُمثل كمستطيل وحالات الاستخدام كأشكال بيضاوية',
          },
        ],
        examples: [
          {
            de: 'Use-Case-Diagramm „Online-Banking": Akteur „Kunde" → Use Cases: „Kontostand prüfen", „Überweisung tätigen" (<<include>> „Authentifizierung"), „Dauerauftrag einrichten" (<<extend>> „Benachrichtigung senden").',
            ar: 'مخطط حالات استخدام "الخدمات المصرفية عبر الإنترنت": الفاعل "عميل" ← حالات الاستخدام: "فحص الرصيد"، "إجراء تحويل" (<<include>> "المصادقة")، "إعداد أمر دائم" (<<extend>> "إرسال إشعار").',
          },
        ],
        examRelevance: {
          de: 'Include und Extend sind häufige Prüfungsfragen. Merken Sie sich: Include = immer, Extend = optional. Die Pfeilrichtung ist wichtig!',
          ar: 'Include و Extend أسئلة امتحان شائعة. تذكر: Include = دائماً، Extend = اختياري. اتجاه السهم مهم!',
        },
        summary: {
          de: 'Use-Case-Diagramme zeigen Akteure und Systemfunktionalitäten mit include- und extend-Beziehungen innerhalb der Systemgrenze.',
          ar: 'مخططات حالات الاستخدام تُظهر الفاعلين ووظائف النظام مع علاقات include و extend داخل حدود النظام.',
        },
      },
    },
    {
      id: 'sequenzdiagramm',
      name: {
        de: 'Sequenzdiagramm',
        ar: 'مخطط التسلسل (Sequenzdiagramm)',
      },
      content: {
        definition: {
          de: 'Ein Sequenzdiagramm modelliert die zeitliche Abfolge von Nachrichten (Methodenaufrufen) zwischen Objekten. Es zeigt, welche Objekte in welcher Reihenfolge miteinander kommunizieren, und eignet sich besonders zur Darstellung von Interaktionsabläufen.',
          ar: 'مخطط التسلسل يُنمذج التسلسل الزمني للرسائل (استدعاءات الأساليب) بين الكائنات. يُظهر أي كائنات تتواصل مع بعضها وبأي ترتيب، ويناسب بشكل خاص عرض تدفقات التفاعل.',
        },
        keyPoints: [
          {
            de: 'Objekte stehen oben im Diagramm mit senkrechten Lebenslinien',
            ar: 'الكائنات تقف في أعلى المخطط مع خطوط حياة عمودية',
          },
          {
            de: 'Nachrichten (Pfeile): synchron (gefüllte Pfeilspitze), asynchron (offene Pfeilspitze)',
            ar: 'الرسائل (الأسهم): متزامنة (رأس سهم ممتلئ)، غير متزامنة (رأس سهم مفتوح)',
          },
          {
            de: 'Rückantworten werden als gestrichelte Pfeile dargestellt',
            ar: 'الردود تُمثل كأسهم متقطعة',
          },
          {
            de: 'Aktivierungsbalken zeigen, wann ein Objekt aktiv ist',
            ar: 'أشرطة التفعيل تُظهر متى يكون الكائن نشطاً',
          },
        ],
        examples: [
          {
            de: 'Sequenzdiagramm „Login": Benutzer → LoginController: login(user, pw) → AuthService: authenticate(user, pw) → Datenbank: findUser(user). Rückantwort: User-Objekt → AuthService: Token erstellen → LoginController: Token → Benutzer: Erfolg.',
            ar: 'مخطط تسلسل "تسجيل الدخول": المستخدم ← LoginController: login(user, pw) ← AuthService: authenticate(user, pw) ← قاعدة البيانات: findUser(user). الرد: كائن المستخدم ← AuthService: إنشاء Token ← LoginController: Token ← المستخدم: نجاح.',
          },
        ],
        examRelevance: {
          de: 'Sequenzdiagramme kommen häufig in der Prüfung vor. Achten Sie auf die korrekte Pfeilnotation und die Reihenfolge der Nachrichten.',
          ar: 'مخططات التسلسل تظهر كثيراً في الامتحان. انتبه لترميز الأسهم الصحيح وترتيب الرسائل.',
        },
        summary: {
          de: 'Sequenzdiagramme zeigen die zeitliche Abfolge von Nachrichten zwischen Objekten entlang ihrer Lebenslinien.',
          ar: 'مخططات التسلسل تُظهر التسلسل الزمني للرسائل بين الكائنات على طول خطوط حياتها.',
        },
      },
    },
    {
      id: 'komponenten-diagramm',
      name: {
        de: 'Komponenten-Diagramm',
        ar: 'مخطط المكونات',
      },
      content: {
        definition: {
          de: 'Ein Komponenten-Diagramm zeigt die physische Struktur eines Systems durch seine Softwarekomponenten und deren Abhängigkeiten. Komponenten sind modulare, austauschbare Teile eines Systems, die über definierte Schnittstellen kommunizieren.',
          ar: 'مخطط المكونات يُظهر البنية الفيزيائية للنظام من خلال مكوناته البرمجية وتبعياتها. المكونات هي أجزاء معيارية قابلة للتبديل من النظام تتواصل عبر واجهات محددة.',
        },
        keyPoints: [
          {
            de: 'Komponenten werden als Rechtecke mit dem <<component>>-Stereotyp dargestellt',
            ar: 'تُمثل المكونات كمستطيلات مع النمط <<component>>',
          },
          {
            de: 'Provided Interface (Halbkreis): Schnittstelle, die eine Komponente anbietet',
            ar: 'واجهة مقدمة (نصف دائرة): واجهة تقدمها المكونة',
          },
          {
            de: 'Required Interface (Bogen): Schnittstelle, die eine Komponente benötigt',
            ar: 'واجهة مطلوبة (قوس): واجهة تحتاجها المكونة',
          },
        ],
        examples: [
          {
            de: 'Komponenten-Diagramm einer Webanwendung: <<component>> WebUI → benötigt → <<component>> REST-API → benötigt → <<component>> Datenbankzugriff → benötigt → <<component>> PostgreSQL.',
            ar: 'مخطط مكونات لتطبيق ويب: <<component>> WebUI ← يحتاج ← <<component>> REST-API ← يحتاج ← <<component>> وصول قاعدة البيانات ← يحتاج ← <<component>> PostgreSQL.',
          },
        ],
        examRelevance: {
          de: 'Komponentendiagramme werden seltener abgefragt, aber kennen Sie die Grundnotation und den Unterschied zu Paketdiagrammen.',
          ar: 'مخططات المكونات تُسأل نادراً لكن اعرف الترميز الأساسي والفرق مع مخططات الحزم.',
        },
        summary: {
          de: 'Komponentendiagramme zeigen Softwarekomponenten und ihre Abhängigkeiten über Schnittstellen.',
          ar: 'مخططات المكونات تُظهر المكونات البرمجية وتبعياتها عبر الواجهات.',
        },
      },
    },
    {
      id: 'paketdiagramm',
      name: {
        de: 'Paketdiagramm',
        ar: 'مخطط الحزم (Paketdiagramm)',
      },
      content: {
        definition: {
          de: 'Ein Paketdiagramm organisiert Modellelemente (Klassen, Use Cases, etc.) in logische Gruppen (Pakete). Es zeigt die Abhängigkeiten zwischen Paketen und hilft bei der Strukturierung großer Systeme in überschaubare Module.',
          ar: 'مخطط الحزم ينظم عناصر النموذج (فئات، حالات استخدام، إلخ) في مجموعات منطقية (حزم). يُظهر التبعيات بين الحزم ويساعد في هيكلة الأنظمة الكبيرة إلى وحدات يمكن إدارتها.',
        },
        keyPoints: [
          {
            de: 'Pakete werden als Ordner-Symbol (Rechteck mit Reiter) dargestellt',
            ar: 'تُمثل الحزم كرمز مجلد (مستطيل مع لسان)',
          },
          {
            de: 'Abhängigkeiten zwischen Paketen werden als gestrichelte Pfeile dargestellt',
            ar: 'تُمثل التبعيات بين الحزم كأسهم متقطعة',
          },
          {
            de: 'Pakete können verschachtelt werden (Unterpakete)',
            ar: 'يمكن تداخل الحزم (حزم فرعية)',
          },
        ],
        examples: [
          {
            de: 'Paketdiagramm einer Anwendung: Paket „Präsentation" → abhängig von → Paket „Geschäftslogik" → abhängig von → Paket „Datenzugriff". Jedes Paket enthält die zugehörigen Klassen.',
            ar: 'مخطط حزم لتطبيق: حزمة "العرض" ← تعتمد على ← حزمة "منطق الأعمال" ← تعتمد على ← حزمة "الوصول للبيانات". كل حزمة تحتوي الفئات المرتبطة.',
          },
        ],
        examRelevance: {
          de: 'Paketdiagramme kommen selten als eigenständige Aufgabe, aber häufig in Kombination mit Klassendiagrammen vor.',
          ar: 'مخططات الحزم تظهر نادراً كمهمة مستقلة لكن كثيراً بالاشتراك مع مخططات الفئات.',
        },
        summary: {
          de: 'Paketdiagramme gruppieren Modellelemente in logische Pakete und zeigen deren Abhängigkeiten zur Systemstrukturierung.',
          ar: 'مخططات الحزم تجمع عناصر النموذج في حزم منطقية وتُظهر تبعياتها لهيكلة النظام.',
        },
      },
    },
  ],
};
