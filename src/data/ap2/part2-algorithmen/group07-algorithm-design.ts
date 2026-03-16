import type { TopicGroup } from '../../../types';

export const algorithmDesign: TopicGroup = {
  id: 'group07-algorithm-design',
  name: {
    de: 'Algorithmusentwurf',
    ar: 'تصميم الخوارزميات',
  },
  description: {
    de: 'Schrittweise Verfeinerung, Flussdiagramme, Pseudocode und Algorithmus-Komplexität',
    ar: 'التحسين التدريجي، المخططات الانسيابية، الشفرة الوهمية وتعقيد الخوارزميات',
  },
  topics: [
    {
      id: 'stepwise-refinement',
      name: { de: 'Schrittweise Verfeinerung', ar: 'التحسين التدريجي' },
      content: {
        definition: {
          de: 'Schrittweise Verfeinerung (Top-Down-Entwurf) ist eine Methode, bei der ein komplexes Problem in immer kleinere, überschaubare Teilprobleme zerlegt wird, bis jeder Schritt direkt implementierbar ist.',
          ar: 'التحسين التدريجي (التصميم من أعلى إلى أسفل) هو طريقة يتم فيها تقسيم مشكلة معقدة إلى مشكلات فرعية أصغر وأبسط حتى يصبح كل خطوة قابلة للتنفيذ مباشرة.',
        },
        keyPoints: [
          {
            de: 'Schritt 1: Problem grob beschreiben (z.B. "Berechne Durchschnittsnote")',
            ar: 'الخطوة 1: وصف المشكلة بشكل عام (مثل "احسب متوسط الدرجات")',
          },
          {
            de: 'Schritt 2: Jeden groben Schritt in Teilschritte zerlegen (z.B. "Summe berechnen", "Durch Anzahl teilen")',
            ar: 'الخطوة 2: تقسيم كل خطوة عامة إلى خطوات فرعية (مثل "حساب المجموع"، "القسمة على العدد")',
          },
          {
            de: 'Schritt 3: Teilschritte weiter verfeinern, bis sie als Code umsetzbar sind',
            ar: 'الخطوة 3: تحسين الخطوات الفرعية أكثر حتى تصبح قابلة للتنفيذ ككود',
          },
        ],
        examples: [
          {
            de: 'Grob: "Finde den besten Schüler". Verfeinerung 1: "Durchlaufe alle Schüler, vergleiche Noten, merke den Besten". Verfeinerung 2: "Initialisiere bester = erster Schüler. Für jeden Schüler: Wenn Note besser als bester, aktualisiere bester."',
            ar: 'عام: "أوجد أفضل طالب". تحسين 1: "مرّ على جميع الطلاب، قارن الدرجات، احفظ الأفضل". تحسين 2: "هيئ الأفضل = أول طالب. لكل طالب: إذا كانت الدرجة أفضل من الأفضل، حدّث الأفضل."',
          },
        ],
        examRelevance: {
          de: 'In der IHK-Prüfung wird häufig verlangt, einen Algorithmus schrittweise zu entwickeln oder die Teilschritte eines gegebenen Algorithmus zu identifizieren.',
          ar: 'في امتحان IHK غالباً ما يُطلب تطوير خوارزمية تدريجياً أو تحديد الخطوات الفرعية لخوارزمية معطاة.',
        },
        summary: {
          de: 'Schrittweise Verfeinerung zerlegt komplexe Probleme in einfache Teilschritte. Top-Down-Ansatz von der Gesamtlösung zu den Details.',
          ar: 'التحسين التدريجي يقسم المشكلات المعقدة إلى خطوات فرعية بسيطة. نهج من أعلى إلى أسفل من الحل الكلي إلى التفاصيل.',
        },
      },
    },
    {
      id: 'flowcharts',
      name: { de: 'Flussdiagramme', ar: 'المخططات الانسيابية' },
      content: {
        definition: {
          de: 'Flussdiagramme (Programmablaufpläne, PAP) stellen den Ablauf eines Algorithmus grafisch dar. Verschiedene Symbole repräsentieren Operationen, Entscheidungen, Ein-/Ausgabe und Start/Ende.',
          ar: 'المخططات الانسيابية (مخططات سير البرنامج) تمثل سير الخوارزمية بصرياً. رموز مختلفة تمثل العمليات والقرارات والإدخال/الإخراج والبداية/النهاية.',
        },
        keyPoints: [
          {
            de: 'Oval/Kreis: Start und Ende des Programms',
            ar: 'بيضاوي/دائرة: بداية ونهاية البرنامج',
          },
          {
            de: 'Rechteck: Verarbeitungsschritt (Anweisung, Berechnung)',
            ar: 'مستطيل: خطوة معالجة (تعليمة، حساب)',
          },
          {
            de: 'Raute: Entscheidung (Bedingung mit Ja/Nein-Verzweigung)',
            ar: 'معين: قرار (شرط بتفرع نعم/لا)',
          },
          {
            de: 'Parallelogramm: Ein-/Ausgabeoperation',
            ar: 'متوازي الأضلاع: عملية إدخال/إخراج',
          },
          {
            de: 'Pfeile: Verbinden die Symbole und zeigen die Ablaufrichtung',
            ar: 'أسهم: تربط الرموز وتُظهر اتجاه السير',
          },
        ],
        examples: [
          {
            de: 'Flussdiagramm für "Ist eine Zahl gerade?": Start → Eingabe Zahl → Entscheidung: zahl % 2 == 0? → Ja: Ausgabe "gerade" → Ende / Nein: Ausgabe "ungerade" → Ende',
            ar: 'مخطط انسيابي لـ "هل العدد زوجي؟": بداية → إدخال العدد → قرار: zahl % 2 == 0? → نعم: إخراج "زوجي" → نهاية / لا: إخراج "فردي" → نهاية',
          },
        ],
        examRelevance: {
          de: 'Flussdiagramme sind ein fester Bestandteil der IHK-Prüfung. Man muss sie lesen, erstellen und in Code übersetzen können.',
          ar: 'المخططات الانسيابية جزء ثابت من امتحان IHK. يجب قراءتها وإنشائها وترجمتها إلى كود.',
        },
        summary: {
          de: 'Flussdiagramme visualisieren Algorithmen mit Standardsymbolen: Oval (Start/Ende), Rechteck (Verarbeitung), Raute (Entscheidung), Parallelogramm (E/A).',
          ar: 'المخططات الانسيابية تصور الخوارزميات برموز قياسية: بيضاوي (بداية/نهاية)، مستطيل (معالجة)، معين (قرار)، متوازي أضلاع (إدخال/إخراج).',
        },
      },
    },
    {
      id: 'pseudocode',
      name: { de: 'Pseudocode schreiben', ar: 'كتابة الشفرة الوهمية' },
      content: {
        definition: {
          de: 'Pseudocode ist eine informelle Beschreibung eines Algorithmus in einer Mischung aus natürlicher Sprache und programmiersprachen-ähnlicher Syntax. Er ist unabhängig von einer bestimmten Programmiersprache.',
          ar: 'الشفرة الوهمية هي وصف غير رسمي لخوارزمية بمزيج من اللغة الطبيعية وصياغة شبيهة بلغات البرمجة. وهي مستقلة عن لغة برمجة معينة.',
        },
        keyPoints: [
          {
            de: 'Schlüsselwörter: WENN/DANN/SONST, SOLANGE, FÜR, EINGABE, AUSGABE, WIEDERHOLE',
            ar: 'كلمات مفتاحية: WENN/DANN/SONST (إذا/فإن/وإلا)، SOLANGE (طالما)، FÜR (لكل)، EINGABE (إدخال)، AUSGABE (إخراج)، WIEDERHOLE (كرر)',
          },
          {
            de: 'Einrückung zeigt die Verschachtelung von Blöcken an',
            ar: 'المسافة البادئة تُظهر تداخل الكتل',
          },
          {
            de: 'Pseudocode muss eindeutig und nachvollziehbar sein, ohne sich um Syntax-Details zu kümmern',
            ar: 'الشفرة الوهمية يجب أن تكون واضحة وقابلة للتتبع دون الاهتمام بتفاصيل الصياغة',
          },
        ],
        examples: [
          {
            de: 'Durchschnitt berechnen:\nEINGABE zahlen[]\nsetze summe = 0\nFÜR jede zahl IN zahlen\n    summe = summe + zahl\nENDE FÜR\nsetze durchschnitt = summe / LÄNGE(zahlen)\nAUSGABE durchschnitt',
            ar: 'حساب المتوسط:\nإدخال zahlen[]\nعيّن summe = 0\nلكل zahl في zahlen\n    summe = summe + zahl\nنهاية لكل\nعيّن durchschnitt = summe / طول(zahlen)\nإخراج durchschnitt',
          },
        ],
        examRelevance: {
          de: 'Pseudocode wird in der IHK-Prüfung sowohl zum Lesen als auch zum Schreiben verlangt. Man muss Pseudocode in lauffähigen Code übersetzen und umgekehrt.',
          ar: 'الشفرة الوهمية مطلوبة في امتحان IHK للقراءة والكتابة. يجب ترجمة الشفرة الوهمية إلى كود قابل للتنفيذ والعكس.',
        },
        summary: {
          de: 'Pseudocode beschreibt Algorithmen sprachunabhängig mit einfachen Schlüsselwörtern und Einrückung. Brücke zwischen Idee und Code.',
          ar: 'الشفرة الوهمية تصف الخوارزميات بشكل مستقل عن اللغة بكلمات مفتاحية بسيطة ومسافات بادئة. جسر بين الفكرة والكود.',
        },
      },
    },
    {
      id: 'algorithm-complexity',
      name: { de: 'Algorithmische Komplexität (Grundidee)', ar: 'تعقيد الخوارزميات (الفكرة الأساسية)' },
      content: {
        definition: {
          de: 'Die algorithmische Komplexität (Big-O-Notation) beschreibt, wie sich die Laufzeit oder der Speicherbedarf eines Algorithmus in Abhängigkeit von der Eingabegröße n verhält.',
          ar: 'تعقيد الخوارزميات (ترميز Big-O) يصف كيف يتصرف وقت التنفيذ أو استهلاك الذاكرة لخوارزمية بالنسبة لحجم المدخلات n.',
        },
        keyPoints: [
          {
            de: 'O(1): Konstant – Laufzeit unabhängig von n (z.B. Array-Zugriff per Index)',
            ar: 'O(1): ثابت – وقت التنفيذ مستقل عن n (مثل الوصول للمصفوفة بالفهرس)',
          },
          {
            de: 'O(n): Linear – Laufzeit wächst proportional zu n (z.B. lineare Suche)',
            ar: 'O(n): خطي – وقت التنفيذ ينمو بشكل متناسب مع n (مثل البحث الخطي)',
          },
          {
            de: 'O(n²): Quadratisch – Doppelte Eingabe → vierfache Laufzeit (z.B. Bubble Sort)',
            ar: 'O(n²): تربيعي – مدخلات مضاعفة → وقت تنفيذ أربعة أضعاف (مثل Bubble Sort)',
          },
          {
            de: 'O(log n): Logarithmisch – Sehr effizient, Suchbereich halbiert sich (z.B. binäre Suche)',
            ar: 'O(log n): لوغاريتمي – فعال جداً، منطقة البحث تنقسم للنصف (مثل البحث الثنائي)',
          },
        ],
        examples: [
          {
            de: 'Bei 1000 Elementen: Lineare Suche braucht bis zu 1000 Vergleiche, binäre Suche nur ca. 10 (log₂ 1000 ≈ 10). Bubble Sort braucht bis zu 1.000.000 Vergleiche (1000²).',
            ar: 'مع 1000 عنصر: البحث الخطي يحتاج حتى 1000 مقارنة، البحث الثنائي فقط حوالي 10 (log₂ 1000 ≈ 10). Bubble Sort يحتاج حتى 1,000,000 مقارنة (1000²).',
          },
        ],
        examRelevance: {
          de: 'In der IHK-Prüfung wird ein grundlegendes Verständnis von O(n), O(n²) und O(log n) erwartet. Man muss Algorithmen ihrer Komplexitätsklasse zuordnen können.',
          ar: 'في امتحان IHK يُتوقع فهم أساسي لـ O(n) و O(n²) و O(log n). يجب تصنيف الخوارزميات حسب فئة التعقيد.',
        },
        summary: {
          de: 'Big-O beschreibt die Laufzeit relativ zur Eingabegröße: O(1) < O(log n) < O(n) < O(n²). Wichtig für Algorithmenvergleich.',
          ar: 'Big-O يصف وقت التنفيذ نسبة لحجم المدخلات: O(1) < O(log n) < O(n) < O(n²). مهم لمقارنة الخوارزميات.',
        },
      },
    },
    {
      id: 'algorithm-efficiency',
      name: { de: 'Effizienz von Algorithmen', ar: 'كفاءة الخوارزميات' },
      content: {
        definition: {
          de: 'Die Effizienz eines Algorithmus beschreibt, wie gut er Ressourcen (Zeit und Speicher) nutzt. Ein effizienter Algorithmus löst das Problem mit möglichst wenig Schritten und Speicherverbrauch.',
          ar: 'كفاءة الخوارزمية تصف مدى جودة استخدامها للموارد (الوقت والذاكرة). الخوارزمية الفعالة تحل المشكلة بأقل عدد ممكن من الخطوات واستهلاك الذاكرة.',
        },
        keyPoints: [
          {
            de: 'Zeiteffizienz: Wie viele Operationen/Vergleiche werden benötigt?',
            ar: 'كفاءة الوقت: كم عدد العمليات/المقارنات المطلوبة؟',
          },
          {
            de: 'Speichereffizienz: Wie viel zusätzlicher Speicher wird benötigt?',
            ar: 'كفاءة الذاكرة: كم من الذاكرة الإضافية مطلوبة؟',
          },
          {
            de: 'Best Case, Average Case, Worst Case: Die Effizienz kann je nach Eingabe variieren',
            ar: 'أفضل حالة، حالة متوسطة، أسوأ حالة: الكفاءة يمكن أن تختلف حسب المدخلات',
          },
          {
            de: 'Trade-Off: Manchmal wird mehr Speicher für weniger Laufzeit eingetauscht oder umgekehrt',
            ar: 'المقايضة: أحياناً يتم استبدال ذاكرة أكثر بوقت تنفيذ أقل أو العكس',
          },
        ],
        examples: [
          {
            de: 'Lineare vs. binäre Suche: Bei 1.000.000 Elementen braucht die lineare Suche bis zu 1.000.000 Schritte, die binäre Suche nur ca. 20 Schritte – ein enormer Effizienzunterschied.',
            ar: 'البحث الخطي مقابل الثنائي: مع 1,000,000 عنصر يحتاج البحث الخطي حتى 1,000,000 خطوة، البحث الثنائي فقط حوالي 20 خطوة – فرق كفاءة هائل.',
          },
        ],
        examRelevance: {
          de: 'In der IHK-Prüfung wird erwartet, dass man die Effizienz verschiedener Lösungsansätze bewerten und den geeigneteren Algorithmus wählen kann.',
          ar: 'في امتحان IHK يُتوقع تقييم كفاءة مناهج حل مختلفة واختيار الخوارزمية الأنسب.',
        },
        summary: {
          de: 'Algorithmus-Effizienz misst den Ressourcenverbrauch. Wahl des richtigen Algorithmus kann massive Leistungsunterschiede bewirken.',
          ar: 'كفاءة الخوارزمية تقيس استهلاك الموارد. اختيار الخوارزمية الصحيحة يمكن أن يحدث فروقاً هائلة في الأداء.',
        },
      },
    },
  ],
};
