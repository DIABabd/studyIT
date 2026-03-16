import type { TopicGroup } from '../../../types';

export const searchingAlgorithms: TopicGroup = {
  id: 'group06-searching-algorithms',
  name: {
    de: 'Suchalgorithmen',
    ar: 'خوارزميات البحث',
  },
  description: {
    de: 'Lineare Suche, binäre Suche, Min/Max-Bestimmung und Zählung',
    ar: 'البحث الخطي، البحث الثنائي، تحديد الحد الأدنى/الأقصى والعد',
  },
  topics: [
    {
      id: 'linear-search',
      name: { de: 'Lineare Suche', ar: 'البحث الخطي' },
      content: {
        definition: {
          de: 'Die lineare Suche (Sequential Search) durchsucht ein Array Element für Element von Anfang bis Ende, bis der gesuchte Wert gefunden wird oder das Ende erreicht ist. Sie funktioniert auf unsortierten und sortierten Arrays.',
          ar: 'البحث الخطي (Sequential Search) يبحث في المصفوفة عنصراً تلو الآخر من البداية إلى النهاية حتى يتم العثور على القيمة المطلوبة أو الوصول إلى النهاية. يعمل على المصفوفات المرتبة وغير المرتبة.',
        },
        keyPoints: [
          {
            de: 'Zeitkomplexität: O(n) – Im schlimmsten Fall muss jedes Element geprüft werden',
            ar: 'التعقيد الزمني: O(n) – في أسوأ حالة يجب فحص كل عنصر',
          },
          {
            de: 'Funktioniert auf unsortierten Daten – keine Vorsortierung erforderlich',
            ar: 'يعمل على بيانات غير مرتبة – لا يتطلب ترتيباً مسبقاً',
          },
          {
            de: 'Rückgabewert: Index des gefundenen Elements oder -1, wenn nicht gefunden',
            ar: 'القيمة المُرجعة: فهرس العنصر الموجود أو -1 إذا لم يُعثر عليه',
          },
        ],
        examples: [
          {
            de: '`public static int lineareSuche(int[] arr, int gesucht) { for (int i = 0; i < arr.length; i++) { if (arr[i] == gesucht) return i; } return -1; }` – Gibt den Index des gesuchten Werts zurück.',
            ar: '`public static int lineareSuche(int[] arr, int gesucht) { for (int i = 0; i < arr.length; i++) { if (arr[i] == gesucht) return i; } return -1; }` – يُرجع فهرس القيمة المطلوبة.',
          },
        ],
        examRelevance: {
          de: 'Die lineare Suche ist ein Basisalgorithmus der IHK-Prüfung. Man muss sie implementieren und ihren Aufwand im Vergleich zur binären Suche einordnen können.',
          ar: 'البحث الخطي هو خوارزمية أساسية في امتحان IHK. يجب تنفيذه وتصنيف تكلفته مقارنة بالبحث الثنائي.',
        },
        summary: {
          de: 'Lineare Suche prüft jedes Element der Reihe nach. Einfach, aber bei großen Datenmengen langsam (O(n)).',
          ar: 'البحث الخطي يفحص كل عنصر بالترتيب. بسيط، لكنه بطيء مع مجموعات البيانات الكبيرة (O(n)).',
        },
      },
    },
    {
      id: 'binary-search',
      name: { de: 'Binäre Suche', ar: 'البحث الثنائي' },
      content: {
        definition: {
          de: 'Die binäre Suche halbiert den Suchbereich in jedem Schritt, indem sie den mittleren Wert mit dem Suchwert vergleicht. Voraussetzung: Das Array muss sortiert sein.',
          ar: 'البحث الثنائي يقسم منطقة البحث إلى النصف في كل خطوة بمقارنة القيمة الوسطى مع قيمة البحث. الشرط: يجب أن تكون المصفوفة مرتبة.',
        },
        keyPoints: [
          {
            de: 'Voraussetzung: Array muss sortiert sein',
            ar: 'الشرط: يجب أن تكون المصفوفة مرتبة',
          },
          {
            de: 'Zeitkomplexität: O(log n) – Wesentlich schneller als lineare Suche bei großen Datenmengen',
            ar: 'التعقيد الزمني: O(log n) – أسرع بكثير من البحث الخطي مع مجموعات البيانات الكبيرة',
          },
          {
            de: 'Mitte berechnen: `int mitte = (links + rechts) / 2;` – Dann mit Suchwert vergleichen und Bereich einschränken',
            ar: 'حساب الوسط: `int mitte = (links + rechts) / 2;` – ثم المقارنة مع قيمة البحث وتضييق المنطقة',
          },
          {
            de: 'Wenn Suchwert < Mitte: Im linken Teil weitersuchen. Wenn > Mitte: Im rechten Teil weitersuchen',
            ar: 'إذا كانت قيمة البحث < الوسط: متابعة البحث في الجزء الأيسر. إذا كانت > الوسط: في الجزء الأيمن',
          },
        ],
        examples: [
          {
            de: '`int binaereSuche(int[] arr, int gesucht) { int links = 0, rechts = arr.length - 1; while (links <= rechts) { int mitte = (links + rechts) / 2; if (arr[mitte] == gesucht) return mitte; else if (arr[mitte] < gesucht) links = mitte + 1; else rechts = mitte - 1; } return -1; }` – Suche in sortiertem Array.',
            ar: '`int binaereSuche(int[] arr, int gesucht) { int links = 0, rechts = arr.length - 1; while (links <= rechts) { int mitte = (links + rechts) / 2; if (arr[mitte] == gesucht) return mitte; else if (arr[mitte] < gesucht) links = mitte + 1; else rechts = mitte - 1; } return -1; }`',
          },
          {
            de: 'Beispiel: Suche 7 in [1,3,5,7,9,11]. Mitte=5→rechts suchen. Neue Mitte=9→links suchen. Neue Mitte=7→gefunden!',
            ar: 'مثال: بحث عن 7 في [1,3,5,7,9,11]. الوسط=5→بحث يميناً. وسط جديد=9→بحث يساراً. وسط جديد=7→وُجد!',
          },
        ],
        examRelevance: {
          de: 'Die binäre Suche ist ein Schlüsselthema der IHK-Prüfung. Man muss den Algorithmus nachvollziehen, die Schritte dokumentieren und den Unterschied zur linearen Suche erklären können.',
          ar: 'البحث الثنائي هو موضوع رئيسي في امتحان IHK. يجب تتبع الخوارزمية وتوثيق الخطوات وشرح الفرق عن البحث الخطي.',
        },
        summary: {
          de: 'Binäre Suche halbiert den Suchbereich wiederholt. Setzt sortiertes Array voraus, ist mit O(log n) sehr effizient.',
          ar: 'البحث الثنائي يقسم منطقة البحث إلى النصف بشكل متكرر. يتطلب مصفوفة مرتبة، وهو فعال جداً بـ O(log n).',
        },
      },
    },
    {
      id: 'find-min-max',
      name: { de: 'Minimum und Maximum finden', ar: 'إيجاد القيمة الدنيا والقصوى' },
      content: {
        definition: {
          de: 'Das Finden des Minimums oder Maximums in einem Array erfordert einen Durchlauf durch alle Elemente, wobei der bisher kleinste bzw. größte Wert in einer Variablen gespeichert wird.',
          ar: 'إيجاد القيمة الدنيا أو القصوى في مصفوفة يتطلب المرور عبر جميع العناصر، مع تخزين أصغر أو أكبر قيمة حتى الآن في متغير.',
        },
        keyPoints: [
          {
            de: 'Initialisierung: Erstes Element als vorläufiges Min/Max setzen',
            ar: 'التهيئة: تعيين العنصر الأول كقيمة دنيا/قصوى مؤقتة',
          },
          {
            de: 'Vergleich: Jedes Element mit dem aktuellen Min/Max vergleichen und bei Bedarf aktualisieren',
            ar: 'المقارنة: مقارنة كل عنصر مع القيمة الدنيا/القصوى الحالية وتحديثها عند الحاجة',
          },
          {
            de: 'Zeitkomplexität: O(n) – Jedes Element muss einmal betrachtet werden',
            ar: 'التعقيد الزمني: O(n) – يجب النظر إلى كل عنصر مرة واحدة',
          },
        ],
        examples: [
          {
            de: '`int min = arr[0]; int minIndex = 0; for (int i = 1; i < arr.length; i++) { if (arr[i] < min) { min = arr[i]; minIndex = i; } }` – Findet den kleinsten Wert und seinen Index.',
            ar: '`int min = arr[0]; int minIndex = 0; for (int i = 1; i < arr.length; i++) { if (arr[i] < min) { min = arr[i]; minIndex = i; } }` – يجد أصغر قيمة وفهرسها.',
          },
          {
            de: 'Bei Objekten: `Produkt teuerstes = produkte[0]; for (Produkt p : produkte) { if (p.getPreis() > teuerstes.getPreis()) teuerstes = p; }` – Findet das teuerste Produkt.',
            ar: 'في الكائنات: `Produkt teuerstes = produkte[0]; for (Produkt p : produkte) { if (p.getPreis() > teuerstes.getPreis()) teuerstes = p; }` – يجد أغلى منتج.',
          },
        ],
        examRelevance: {
          de: 'Min/Max-Suche ist eine Grundaufgabe in der IHK-Prüfung, sowohl für primitive Arrays als auch für Objekt-Arrays.',
          ar: 'البحث عن القيمة الدنيا/القصوى هي مهمة أساسية في امتحان IHK، سواء للمصفوفات البدائية أو مصفوفات الكائنات.',
        },
        summary: {
          de: 'Min/Max finden: Erstes Element als Startwert, dann alle anderen vergleichen und aktualisieren. O(n).',
          ar: 'إيجاد القيمة الدنيا/القصوى: العنصر الأول كقيمة ابتدائية، ثم مقارنة وتحديث الباقي. O(n).',
        },
      },
    },
    {
      id: 'counting-matching',
      name: { de: 'Passende Elemente zählen', ar: 'عد العناصر المطابقة' },
      content: {
        definition: {
          de: 'Das Zählen passender Elemente ermittelt, wie viele Werte in einem Array oder einer Collection eine bestimmte Bedingung erfüllen. Dies ist die Grundlage für statistische Auswertungen.',
          ar: 'عد العناصر المطابقة يحدد كم عدد القيم في مصفوفة أو مجموعة تستوفي شرطاً معيناً. هذا هو الأساس للتحليلات الإحصائية.',
        },
        keyPoints: [
          {
            de: 'Muster: Zähler initialisieren → Array durchlaufen → bei Treffer Zähler erhöhen',
            ar: 'النمط: تهيئة العداد → تمرير المصفوفة → زيادة العداد عند التطابق',
          },
          {
            de: 'Kombination mit Prozentberechnung: `(double) zaehler / gesamt * 100`',
            ar: 'الجمع مع حساب النسبة المئوية: `(double) zaehler / gesamt * 100`',
          },
          {
            de: 'Auch auf Objekt-Arrays anwendbar: `if (m.getAbteilung().equals("IT")) count++;`',
            ar: 'قابل للتطبيق على مصفوفات الكائنات أيضاً: `if (m.getAbteilung().equals("IT")) count++;`',
          },
        ],
        examples: [
          {
            de: '`int bestanden = 0; for (int note : noten) { if (note <= 4) bestanden++; } double quote = (double) bestanden / noten.length * 100;` – Berechnet die Bestehensquote in Prozent.',
            ar: '`int bestanden = 0; for (int note : noten) { if (note <= 4) bestanden++; } double quote = (double) bestanden / noten.length * 100;` – يحسب نسبة النجاح بالمئة.',
          },
          {
            de: '`int anzahl = 0; for (Kunde k : kunden) { if (k.getAlter() >= 18 && k.getAlter() <= 30) anzahl++; }` – Zählt Kunden zwischen 18 und 30 Jahren.',
            ar: '`int anzahl = 0; for (Kunde k : kunden) { if (k.getAlter() >= 18 && k.getAlter() <= 30) anzahl++; }` – يعد العملاء بين 18 و 30 سنة.',
          },
        ],
        examRelevance: {
          de: 'Zählen und Filtern sind Kernkompetenzen für die IHK-AP2-Prüfung. Oft kombiniert mit Prozent- oder Durchschnittsberechnungen.',
          ar: 'العد والتصفية هي كفاءات أساسية لامتحان IHK-AP2. غالباً ما تُجمع مع حسابات النسب المئوية أو المتوسطات.',
        },
        summary: {
          de: 'Passende Elemente zählen: Zähler + Schleife + Bedingung. Oft Basis für Prozent- und Statistikberechnungen.',
          ar: 'عد العناصر المطابقة: عداد + حلقة + شرط. غالباً أساس لحسابات النسب المئوية والإحصائيات.',
        },
      },
    },
  ],
};
