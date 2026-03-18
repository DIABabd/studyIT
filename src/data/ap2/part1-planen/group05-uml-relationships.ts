import type { TopicGroup } from '../../../types';

export const umlRelationships: TopicGroup = {
  id: 'group05',
  name: {
    de: 'UML-Beziehungen',
    ar: 'علاقات UML',
  },
  description: {
    de: 'Beziehungstypen in UML-Klassendiagrammen: Assoziation, Aggregation, Komposition, Vererbung und mehr',
    ar: 'أنواع العلاقات في مخططات فئات UML: الارتباط، التجميع، التركيب، الوراثة والمزيد',
  },
  priority: 'high',
  topics: [
    {
      id: 'association',
      name: {
        de: 'Assoziation',
        ar: 'الارتباط (Association)',
      },
      content: {
        definition: {
          de: 'Eine Assoziation beschreibt eine allgemeine Beziehung zwischen zwei Klassen. Sie zeigt an, dass Objekte der einen Klasse Objekte der anderen Klasse kennen oder nutzen. Assoziationen werden als durchgezogene Linie zwischen den Klassen dargestellt.',
          ar: 'الارتباط يصف علاقة عامة بين فئتين. يشير إلى أن كائنات إحدى الفئتين تعرف أو تستخدم كائنات الفئة الأخرى. تُمثل الارتباطات كخط متصل بين الفئات.',
        },
        keyPoints: [
          {
            de: 'Darstellung als durchgezogene Linie (ggf. mit Pfeil für Navigierbarkeit)',
            ar: 'تُمثل كخط متصل (مع سهم اختياري للتوجيه)',
          },
          {
            de: 'Können benannt werden und Rollen an den Enden tragen',
            ar: 'يمكن تسميتها وتحمل أدواراً عند الأطراف',
          },
          {
            de: 'Multiplizitäten definieren die Anzahl der beteiligten Objekte (z.B. 1..*, 0..1)',
            ar: 'التعددية تحدد عدد الكائنات المشاركة (مثل 1..*، 0..1)',
          },
        ],
        examples: [
          {
            de: 'Klasse „Lehrer" ——— „Schüler" mit Multiplizität 1..* zu *: Ein Lehrer unterrichtet mehrere Schüler, ein Schüler wird von mehreren Lehrern unterrichtet.',
            ar: 'فئة "معلم" ——— "طالب" بتعددية 1..* إلى *: معلم واحد يدرّس عدة طلاب، وطالب واحد يُدرَّس من عدة معلمين.',
          },
        ],
        examRelevance: {
          de: 'Assoziationen sind die häufigste Beziehung in Klassendiagrammen. Achten Sie auf Multiplizitäten und Navigierbarkeit in der Prüfung.',
          ar: 'الارتباطات هي أكثر العلاقات شيوعاً في مخططات الفئات. انتبه للتعددية والتوجيه في الامتحان.',
        },
        summary: {
          de: 'Eine Assoziation ist eine allgemeine Beziehung zwischen Klassen, dargestellt als Linie mit optionaler Navigierbarkeit und Multiplizität.',
          ar: 'الارتباط هو علاقة عامة بين الفئات، تُمثل كخط مع توجيه وتعددية اختيارية.',
        },
      },
    },
    {
      id: 'aggregation',
      name: {
        de: 'Aggregation',
        ar: 'التجميع (Aggregation)',
      },
      content: {
        definition: {
          de: 'Eine Aggregation ist eine spezielle Form der Assoziation, die eine „Hat-ein"-Beziehung (Ganzes-Teil) darstellt. Das Teil kann unabhängig vom Ganzen existieren. Sie wird durch eine leere Raute am Ganzen dargestellt.',
          ar: 'التجميع هو شكل خاص من الارتباط يمثل علاقة "لديه" (كل-جزء). يمكن للجزء أن يوجد مستقلاً عن الكل. يُمثل بمعين فارغ عند الكل.',
        },
        keyPoints: [
          {
            de: 'Leere Raute (◇) am Ende des Ganzen',
            ar: 'معين فارغ (◇) عند طرف الكل',
          },
          {
            de: 'Teile können ohne das Ganze existieren (schwache Zugehörigkeit)',
            ar: 'الأجزاء يمكن أن توجد بدون الكل (انتماء ضعيف)',
          },
          {
            de: 'Ein Teil kann zu mehreren Ganzen gehören',
            ar: 'يمكن أن ينتمي الجزء لعدة كيانات كلية',
          },
        ],
        examples: [
          {
            de: 'Klasse „Abteilung" ◇——— „Mitarbeiter": Eine Abteilung hat Mitarbeiter, aber ein Mitarbeiter existiert auch ohne die Abteilung (z.B. bei Umstrukturierung).',
            ar: 'فئة "قسم" ◇——— "موظف": القسم لديه موظفون، لكن الموظف يوجد أيضاً بدون القسم (مثلاً عند إعادة الهيكلة).',
          },
        ],
        examRelevance: {
          de: 'Der Unterschied zwischen Aggregation und Komposition ist eine Kernfrage in der Prüfung. Aggregation = leere Raute = Teile können unabhängig existieren.',
          ar: 'الفرق بين التجميع والتركيب سؤال محوري في الامتحان. التجميع = معين فارغ = الأجزاء يمكن أن توجد مستقلة.',
        },
        summary: {
          de: 'Aggregation ist eine Ganzes-Teil-Beziehung (leere Raute), bei der die Teile unabhängig vom Ganzen existieren können.',
          ar: 'التجميع هو علاقة كل-جزء (معين فارغ) حيث يمكن للأجزاء أن توجد مستقلة عن الكل.',
        },
      },
    },
    {
      id: 'composition',
      name: {
        de: 'Komposition',
        ar: 'التركيب (Composition)',
      },
      content: {
        definition: {
          de: 'Die Komposition ist eine starke Form der Aggregation, bei der die Teile nicht ohne das Ganze existieren können. Wird das Ganze gelöscht, werden auch die Teile gelöscht. Sie wird durch eine gefüllte Raute am Ganzen dargestellt.',
          ar: 'التركيب هو شكل قوي من التجميع حيث لا يمكن للأجزاء أن توجد بدون الكل. عند حذف الكل تُحذف الأجزاء أيضاً. يُمثل بمعين ممتلئ عند الكل.',
        },
        keyPoints: [
          {
            de: 'Gefüllte Raute (◆) am Ende des Ganzen',
            ar: 'معين ممتلئ (◆) عند طرف الكل',
          },
          {
            de: 'Teile können NICHT ohne das Ganze existieren (starke Zugehörigkeit)',
            ar: 'الأجزاء لا يمكن أن توجد بدون الكل (انتماء قوي)',
          },
          {
            de: 'Ein Teil gehört zu genau einem Ganzen (exklusive Zugehörigkeit)',
            ar: 'ينتمي الجزء لكيان كلي واحد فقط (انتماء حصري)',
          },
        ],
        examples: [
          {
            de: 'Klasse „Haus" ◆——— „Raum": Ein Haus enthält Räume. Wird das Haus abgerissen, existieren die Räume nicht mehr.',
            ar: 'فئة "منزل" ◆——— "غرفة": المنزل يحتوي غرفاً. عند هدم المنزل لا توجد الغرف بعد ذلك.',
          },
          {
            de: 'Klasse „Bestellung" ◆——— „Bestellposition": Wird eine Bestellung gelöscht, werden auch alle Bestellpositionen gelöscht.',
            ar: 'فئة "طلب" ◆——— "بند الطلب": عند حذف الطلب تُحذف جميع بنود الطلب أيضاً.',
          },
        ],
        examRelevance: {
          de: 'Komposition vs. Aggregation: Komposition = gefüllte Raute = Teil kann nicht ohne Ganzes existieren. Dies ist eine der häufigsten Unterscheidungsfragen.',
          ar: 'التركيب مقابل التجميع: التركيب = معين ممتلئ = الجزء لا يمكن أن يوجد بدون الكل. هذا من أكثر أسئلة التمييز شيوعاً.',
        },
        summary: {
          de: 'Komposition ist eine starke Ganzes-Teil-Beziehung (gefüllte Raute), bei der die Teile ohne das Ganze nicht existieren.',
          ar: 'التركيب هو علاقة كل-جزء قوية (معين ممتلئ) حيث لا توجد الأجزاء بدون الكل.',
        },
      },
    },
    {
      id: 'inheritance',
      name: {
        de: 'Vererbung (Generalisierung)',
        ar: 'الوراثة (التعميم)',
      },
      content: {
        definition: {
          de: 'Vererbung (Generalisierung/Spezialisierung) beschreibt eine „Ist-ein"-Beziehung zwischen einer Oberklasse und Unterklassen. Die Unterklasse erbt alle Attribute und Methoden der Oberklasse und kann diese erweitern oder überschreiben.',
          ar: 'الوراثة (التعميم/التخصيص) تصف علاقة "هو نوع من" بين فئة أب وفئات أبناء. ترث الفئة الابن جميع خصائص وأساليب الفئة الأب ويمكنها توسيعها أو تجاوزها.',
        },
        keyPoints: [
          {
            de: 'Darstellung: Pfeil mit leerer Dreiecksspitze (△) zeigt zur Oberklasse',
            ar: 'التمثيل: سهم برأس مثلث فارغ (△) يشير للفئة الأب',
          },
          {
            de: 'Unterklasse erbt Attribute und Methoden der Oberklasse',
            ar: 'الفئة الابن ترث خصائص وأساليب الفئة الأب',
          },
          {
            de: 'Liskovsches Substitutionsprinzip: Objekte der Unterklasse müssen überall einsetzbar sein, wo Objekte der Oberklasse erwartet werden',
            ar: 'مبدأ ليسكوف للاستبدال: كائنات الفئة الابن يجب أن تكون قابلة للاستخدام في كل مكان تُتوقع فيه كائنات الفئة الأب',
          },
        ],
        examples: [
          {
            de: 'Oberklasse „Fahrzeug" mit Attribut geschwindigkeit und Methode fahren(). Unterklassen: „PKW" (zusätzlich: anzahlSitze), „LKW" (zusätzlich: ladekapazität). Beide erben geschwindigkeit und fahren().',
            ar: 'فئة أب "مركبة" بخاصية السرعة وأسلوب قيادة(). فئات أبناء: "سيارة" (إضافي: عدد المقاعد)، "شاحنة" (إضافي: سعة التحميل). كلاهما يرث السرعة وقيادة().',
          },
        ],
        examRelevance: {
          de: 'Vererbung ist ein zentrales OOP-Konzept und kommt in fast jeder Prüfung vor. Kennen Sie die Notation und das Substitutionsprinzip.',
          ar: 'الوراثة مفهوم OOP محوري وتظهر في كل امتحان تقريباً. اعرف الترميز ومبدأ الاستبدال.',
        },
        summary: {
          de: 'Vererbung ist eine Ist-ein-Beziehung (leeres Dreieck), bei der Unterklassen Attribute und Methoden der Oberklasse erben.',
          ar: 'الوراثة هي علاقة "هو نوع من" (مثلث فارغ) حيث ترث الفئات الأبناء خصائص وأساليب الفئة الأب.',
        },
      },
    },
    {
      id: 'multiplicity',
      name: {
        de: 'Multiplizität',
        ar: 'التعددية (Multiplicity)',
      },
      content: {
        definition: {
          de: 'Die Multiplizität (Kardinalität) gibt an, wie viele Objekte einer Klasse in einer Beziehung zu einem Objekt der anderen Klasse stehen können. Sie wird an den Enden einer Assoziation notiert und definiert die erlaubte Anzahl von Verknüpfungen.',
          ar: 'التعددية (الكاردينالية) تشير إلى عدد كائنات فئة ما يمكن أن تكون في علاقة مع كائن من الفئة الأخرى. تُدوّن عند أطراف الارتباط وتحدد العدد المسموح من الروابط.',
        },
        keyPoints: [
          {
            de: '1 = genau eins, 0..1 = optional (null oder eins), * = beliebig viele (null oder mehr)',
            ar: '1 = واحد بالضبط، 0..1 = اختياري (صفر أو واحد)، * = أي عدد (صفر أو أكثر)',
          },
          {
            de: '1..* = mindestens eins (eins oder mehr), 0..* = gleich wie *',
            ar: '1..* = واحد على الأقل (واحد أو أكثر)، 0..* = مثل *',
          },
          {
            de: 'Multiplizitäten werden an BEIDEN Enden einer Assoziation angegeben',
            ar: 'التعددية تُحدد عند كلا طرفي الارتباط',
          },
        ],
        examples: [
          {
            de: 'Kunde 1 ——— 0..* Bestellung: Ein Kunde hat null oder mehrere Bestellungen, jede Bestellung gehört zu genau einem Kunden.',
            ar: 'عميل 1 ——— 0..* طلب: عميل واحد لديه صفر أو أكثر من الطلبات، كل طلب ينتمي لعميل واحد بالضبط.',
          },
          {
            de: 'Student * ——— 1..* Kurs: Ein Student besucht mindestens einen Kurs, ein Kurs hat beliebig viele Studenten.',
            ar: 'طالب * ——— 1..* مادة: طالب يحضر مادة واحدة على الأقل، ومادة لديها أي عدد من الطلاب.',
          },
        ],
        examRelevance: {
          de: 'Multiplizitäten sind in Klassendiagrammen Pflicht. Sie müssen die Notation lesen und die richtige Multiplizität für ein Szenario bestimmen können.',
          ar: 'التعددية إلزامية في مخططات الفئات. يجب أن تتمكن من قراءة الترميز وتحديد التعددية الصحيحة لسيناريو.',
        },
        summary: {
          de: 'Multiplizitäten definieren die Anzahl erlaubter Objektverknüpfungen an den Enden einer Assoziation (z.B. 1, 0..1, 1..*, *).',
          ar: 'التعددية تحدد عدد الروابط المسموحة للكائنات عند أطراف الارتباط (مثل 1، 0..1، 1..*، *).',
        },
      },
    },
    {
      id: 'dependency',
      name: {
        de: 'Abhängigkeit (Dependency)',
        ar: 'التبعية (Dependency)',
      },
      content: {
        definition: {
          de: 'Eine Abhängigkeit zeigt, dass eine Klasse eine andere Klasse nutzt, ohne eine dauerhafte Beziehung zu haben. Änderungen an der unabhängigen Klasse können Auswirkungen auf die abhängige Klasse haben. Sie wird als gestrichelter Pfeil dargestellt.',
          ar: 'التبعية تُظهر أن فئة تستخدم فئة أخرى دون أن يكون هناك علاقة دائمة. التغييرات في الفئة المستقلة يمكن أن تؤثر على الفئة التابعة. تُمثل كسهم متقطع.',
        },
        keyPoints: [
          {
            de: 'Gestrichelter Pfeil (--→) von der abhängigen zur unabhängigen Klasse',
            ar: 'سهم متقطع (--←) من الفئة التابعة إلى الفئة المستقلة',
          },
          {
            de: 'Schwächste Form der Beziehung – nur temporäre Nutzung',
            ar: 'أضعف شكل للعلاقة – استخدام مؤقت فقط',
          },
          {
            de: 'Typisch: Klasse wird als Parameter, lokale Variable oder Rückgabetyp verwendet',
            ar: 'نموذجي: الفئة تُستخدم كمعامل أو متغير محلي أو نوع إرجاع',
          },
        ],
        examples: [
          {
            de: 'Klasse „Drucker" --→ „Dokument": Die Klasse Drucker verwendet Dokument als Parameter in der Methode drucken(doc: Dokument), besitzt es aber nicht dauerhaft.',
            ar: 'فئة "طابعة" --← "مستند": فئة الطابعة تستخدم المستند كمعامل في أسلوب طباعة(doc: مستند) لكن لا تمتلكه بشكل دائم.',
          },
        ],
        examRelevance: {
          de: 'Abhängigkeiten werden seltener direkt abgefragt, aber kommen in Klassendiagrammen vor. Kennen Sie die gestrichelte Pfeilnotation.',
          ar: 'التبعيات تُسأل نادراً بشكل مباشر لكن تظهر في مخططات الفئات. اعرف ترميز السهم المتقطع.',
        },
        summary: {
          de: 'Eine Abhängigkeit ist eine schwache, temporäre Beziehung (gestrichelter Pfeil), bei der eine Klasse eine andere nutzt.',
          ar: 'التبعية هي علاقة ضعيفة ومؤقتة (سهم متقطع) حيث تستخدم فئة فئة أخرى.',
        },
      },
    },
  ],
};
