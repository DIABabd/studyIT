import type { TopicGroup } from '../../../types';

export const sortingAlgorithms: TopicGroup = {
  id: 'group05-sorting-algorithms',
  name: {
    de: 'Sortieralgorithmen',
    ar: 'خوارزميات الترتيب',
  },
  description: {
    de: 'Bubble Sort, Selection Sort, Insertion Sort und Sortierung von Objekten',
    ar: 'Bubble Sort و Selection Sort و Insertion Sort وترتيب الكائنات',
  },
  topics: [
    {
      id: 'bubble-sort',
      name: { de: 'Bubble Sort', ar: 'الترتيب الفقاعي' },
      content: {
        definition: {
          de: 'Bubble Sort vergleicht benachbarte Elemente und tauscht sie, wenn sie in der falschen Reihenfolge stehen. Dieser Vorgang wird wiederholt, bis das Array sortiert ist. Große Werte "blubbern" wie Blasen nach oben.',
          ar: 'الترتيب الفقاعي يقارن العناصر المتجاورة ويبدلها إذا كانت بالترتيب الخاطئ. تتكرر هذه العملية حتى يتم ترتيب المصفوفة. القيم الكبيرة "تطفو" مثل الفقاعات للأعلى.',
        },
        keyPoints: [
          {
            de: 'Zwei verschachtelte Schleifen: Äußere für die Durchläufe, innere für die Vergleiche',
            ar: 'حلقتان متداخلتان: الخارجية للدورات، والداخلية للمقارنات',
          },
          {
            de: 'Tausch mit Hilfsvariable: `int temp = arr[i]; arr[i] = arr[i+1]; arr[i+1] = temp;`',
            ar: 'التبديل بمتغير مساعد: `int temp = arr[i]; arr[i] = arr[i+1]; arr[i+1] = temp;`',
          },
          {
            de: 'Zeitkomplexität: O(n²) – Für große Datenmengen ineffizient',
            ar: 'التعقيد الزمني: O(n²) – غير فعال لمجموعات البيانات الكبيرة',
          },
          {
            de: 'Optimierung: Wenn in einem Durchlauf kein Tausch stattfindet, ist das Array bereits sortiert',
            ar: 'تحسين: إذا لم يحدث تبديل في دورة، فإن المصفوفة مرتبة بالفعل',
          },
        ],
        examples: [
          {
            de: 'Array [5, 3, 8, 1]: 1. Durchlauf: [3,5,1,8] → [3,1,5,8] → ... Nach allen Durchläufen: [1,3,5,8]. Code: `for (int i = 0; i < arr.length-1; i++) { for (int j = 0; j < arr.length-1-i; j++) { if (arr[j] > arr[j+1]) { int temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp; } } }`',
            ar: 'مصفوفة [5, 3, 8, 1]: الدورة الأولى: [3,5,1,8] → [3,1,5,8] → ... بعد كل الدورات: [1,3,5,8]. الكود: `for (int i = 0; i < arr.length-1; i++) { for (int j = 0; j < arr.length-1-i; j++) { if (arr[j] > arr[j+1]) { int temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp; } } }`',
          },
        ],
        examRelevance: {
          de: 'Bubble Sort ist der am häufigsten in der IHK-Prüfung abgefragte Sortieralgorithmus. Man muss den Ablauf nachvollziehen, Zwischenergebnisse angeben und den Code vervollständigen können.',
          ar: 'Bubble Sort هو خوارزمية الترتيب الأكثر سؤالاً في امتحان IHK. يجب تتبع السير وتحديد النتائج الوسيطة وإكمال الكود.',
        },
        summary: {
          de: 'Bubble Sort vergleicht und tauscht benachbarte Elemente wiederholt. Einfach zu verstehen, aber O(n²) langsam.',
          ar: 'Bubble Sort يقارن ويبدل العناصر المتجاورة بشكل متكرر. سهل الفهم، لكنه بطيء O(n²).',
        },
      },
    },
    {
      id: 'selection-sort',
      name: { de: 'Selection Sort', ar: 'ترتيب الاختيار' },
      content: {
        definition: {
          de: 'Selection Sort sucht in jedem Durchlauf das kleinste (oder größte) Element im unsortierten Teil und tauscht es an die richtige Position. Das Array wird schrittweise von links nach rechts sortiert.',
          ar: 'ترتيب الاختيار يبحث في كل دورة عن أصغر (أو أكبر) عنصر في الجزء غير المرتب ويبدله إلى الموقع الصحيح. يتم ترتيب المصفوفة تدريجياً من اليسار إلى اليمين.',
        },
        keyPoints: [
          {
            de: 'In jedem Durchlauf wird das Minimum im unsortierten Bereich gesucht und an den Anfang getauscht',
            ar: 'في كل دورة يتم البحث عن الحد الأدنى في المنطقة غير المرتبة وتبديله إلى البداية',
          },
          {
            de: 'Weniger Tauschoperationen als Bubble Sort, aber gleiche Zeitkomplexität O(n²)',
            ar: 'عمليات تبديل أقل من Bubble Sort، لكن نفس التعقيد الزمني O(n²)',
          },
          {
            de: 'Nicht stabil: Gleiche Elemente können ihre relative Reihenfolge ändern',
            ar: 'غير مستقر: العناصر المتساوية قد تغير ترتيبها النسبي',
          },
        ],
        examples: [
          {
            de: 'Array [64, 25, 12, 22]: 1. Min=12 an Index 2 → Tausch mit Index 0 → [12, 25, 64, 22]. 2. Min=22 → [12, 22, 64, 25]. 3. Min=25 → [12, 22, 25, 64]. Code: `for (int i = 0; i < arr.length-1; i++) { int minIdx = i; for (int j = i+1; j < arr.length; j++) { if (arr[j] < arr[minIdx]) minIdx = j; } int temp = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = temp; }`',
            ar: 'مصفوفة [64, 25, 12, 22]: 1. الحد الأدنى=12 في فهرس 2 → تبديل مع فهرس 0 → [12, 25, 64, 22]. 2. الحد الأدنى=22 → [12, 22, 64, 25]. 3. الحد الأدنى=25 → [12, 22, 25, 64].',
          },
        ],
        examRelevance: {
          de: 'Selection Sort wird in der IHK-Prüfung gerne als Trace-Aufgabe gestellt: Zwischenstände nach jedem Durchlauf angeben.',
          ar: 'Selection Sort يُطرح كثيراً في امتحان IHK كمهمة تتبع: تحديد الحالات الوسيطة بعد كل دورة.',
        },
        summary: {
          de: 'Selection Sort wählt das Minimum und tauscht es an die richtige Position. O(n²), aber weniger Tauschvorgänge als Bubble Sort.',
          ar: 'ترتيب الاختيار يختار الحد الأدنى ويبدله إلى الموقع الصحيح. O(n²)، لكن تبديلات أقل من Bubble Sort.',
        },
      },
    },
    {
      id: 'insertion-sort',
      name: { de: 'Insertion Sort', ar: 'ترتيب الإدراج' },
      content: {
        definition: {
          de: 'Insertion Sort nimmt nacheinander jedes Element und fügt es an der richtigen Stelle im bereits sortierten Teil ein – ähnlich dem Sortieren von Spielkarten auf der Hand.',
          ar: 'ترتيب الإدراج يأخذ كل عنصر بالتتابع ويدرجه في المكان الصحيح في الجزء المرتب بالفعل – مشابه لترتيب أوراق اللعب في اليد.',
        },
        keyPoints: [
          {
            de: 'Das erste Element gilt als sortiert, ab dem zweiten Element wird eingefügt',
            ar: 'العنصر الأول يُعتبر مرتباً، من العنصر الثاني يتم الإدراج',
          },
          {
            de: 'Elemente im sortierten Teil werden nach rechts verschoben, um Platz für das einzufügende Element zu schaffen',
            ar: 'العناصر في الجزء المرتب تُزاح لليمين لتوفير مكان للعنصر المُدرج',
          },
          {
            de: 'Stabil: Gleiche Elemente behalten ihre relative Reihenfolge',
            ar: 'مستقر: العناصر المتساوية تحتفظ بترتيبها النسبي',
          },
          {
            de: 'Effizient bei fast sortierten Daten: Best Case O(n)',
            ar: 'فعال مع البيانات شبه المرتبة: أفضل حالة O(n)',
          },
        ],
        examples: [
          {
            de: 'Array [5, 2, 4, 1]: Schritt 1: 2 einfügen → [2, 5, 4, 1]. Schritt 2: 4 einfügen → [2, 4, 5, 1]. Schritt 3: 1 einfügen → [1, 2, 4, 5]. Code: `for (int i = 1; i < arr.length; i++) { int key = arr[i]; int j = i - 1; while (j >= 0 && arr[j] > key) { arr[j+1] = arr[j]; j--; } arr[j+1] = key; }`',
            ar: 'مصفوفة [5, 2, 4, 1]: خطوة 1: إدراج 2 → [2, 5, 4, 1]. خطوة 2: إدراج 4 → [2, 4, 5, 1]. خطوة 3: إدراج 1 → [1, 2, 4, 5].',
          },
        ],
        examRelevance: {
          de: 'Insertion Sort wird in der IHK-Prüfung oft im Vergleich mit anderen Sortieralgorithmen abgefragt. Das Verständnis des Einfüge-Prinzips ist wichtig.',
          ar: 'ترتيب الإدراج يُسأل عنه في امتحان IHK غالباً بالمقارنة مع خوارزميات ترتيب أخرى. فهم مبدأ الإدراج مهم.',
        },
        summary: {
          de: 'Insertion Sort fügt jedes Element an der richtigen Stelle im sortierten Teil ein. Stabil und effizient bei fast sortierten Daten.',
          ar: 'ترتيب الإدراج يدرج كل عنصر في المكان الصحيح في الجزء المرتب. مستقر وفعال مع البيانات شبه المرتبة.',
        },
      },
    },
    {
      id: 'sorting-with-comparator',
      name: { de: 'Sortierung mit Vergleichsfunktionen', ar: 'الترتيب بدوال المقارنة' },
      content: {
        definition: {
          de: 'Vergleichsfunktionen (Comparator) definieren eine benutzerdefinierte Sortierreihenfolge. Sie ermöglichen das Sortieren nach beliebigen Kriterien, z.B. nach Name, Preis oder Datum.',
          ar: 'دوال المقارنة (Comparator) تحدد ترتيباً مخصصاً. وهي تتيح الترتيب حسب أي معيار، مثل الاسم أو السعر أو التاريخ.',
        },
        keyPoints: [
          {
            de: 'Comparator-Interface: `compare(a, b)` gibt negativ (a<b), 0 (a==b) oder positiv (a>b) zurück',
            ar: 'واجهة Comparator: `compare(a, b)` تُرجع سالب (a<b)، 0 (a==b) أو موجب (a>b)',
          },
          {
            de: 'Comparable-Interface: Die Klasse selbst definiert ihre natürliche Ordnung mit `compareTo()`',
            ar: 'واجهة Comparable: الفئة نفسها تحدد ترتيبها الطبيعي بـ `compareTo()`',
          },
          {
            de: 'Arrays.sort() und Collections.sort() können einen Comparator als Parameter erhalten',
            ar: 'Arrays.sort() و Collections.sort() يمكنهما استقبال Comparator كمعامل',
          },
        ],
        examples: [
          {
            de: '`Arrays.sort(produkte, (a, b) -> Double.compare(a.getPreis(), b.getPreis()));` – Sortiert Produkte nach Preis aufsteigend.',
            ar: '`Arrays.sort(produkte, (a, b) -> Double.compare(a.getPreis(), b.getPreis()));` – يرتب المنتجات حسب السعر تصاعدياً.',
          },
          {
            de: '`Arrays.sort(namen, (a, b) -> a.compareTo(b));` – Sortiert Strings alphabetisch.',
            ar: '`Arrays.sort(namen, (a, b) -> a.compareTo(b));` – يرتب النصوص أبجدياً.',
          },
        ],
        examRelevance: {
          de: 'Comparator-basierte Sortierung kommt in der IHK-Prüfung vor, wenn Objekte nach bestimmten Attributen sortiert werden sollen.',
          ar: 'الترتيب المبني على Comparator يظهر في امتحان IHK عندما يجب ترتيب الكائنات حسب خصائص معينة.',
        },
        summary: {
          de: 'Comparator definiert benutzerdefinierte Sortierung. compare() bestimmt die Reihenfolge zweier Elemente.',
          ar: 'Comparator يحدد ترتيباً مخصصاً. compare() تحدد ترتيب عنصرين.',
        },
      },
    },
    {
      id: 'sorting-objects',
      name: { de: 'Sortierung von Objekten nach Attributen', ar: 'ترتيب الكائنات حسب الخصائص' },
      content: {
        definition: {
          de: 'Das Sortieren von Objekten nach Attributen verwendet den gleichen Algorithmus wie das Sortieren primitiver Werte, aber die Vergleichsbedingung basiert auf Getter-Methoden der Objekte.',
          ar: 'ترتيب الكائنات حسب الخصائص يستخدم نفس الخوارزمية كترتيب القيم البدائية، لكن شرط المقارنة يعتمد على طرق Getter للكائنات.',
        },
        keyPoints: [
          {
            de: 'Vergleich über Getter: `if (arr[j].getPreis() > arr[j+1].getPreis())` statt `if (arr[j] > arr[j+1])`',
            ar: 'المقارنة عبر Getter: `if (arr[j].getPreis() > arr[j+1].getPreis())` بدلاً من `if (arr[j] > arr[j+1])`',
          },
          {
            de: 'Beim Tauschen werden die Objektreferenzen getauscht, nicht die einzelnen Attribute',
            ar: 'عند التبديل يتم تبديل مراجع الكائنات، وليس الخصائص الفردية',
          },
          {
            de: 'Sortierrichtung umkehren: `>` statt `<` für absteigende Sortierung',
            ar: 'عكس اتجاه الترتيب: `>` بدلاً من `<` للترتيب التنازلي',
          },
        ],
        examples: [
          {
            de: 'Mitarbeiter nach Gehalt sortieren (Bubble Sort): `for (int i = 0; i < ma.length-1; i++) { for (int j = 0; j < ma.length-1-i; j++) { if (ma[j].getGehalt() > ma[j+1].getGehalt()) { Mitarbeiter temp = ma[j]; ma[j] = ma[j+1]; ma[j+1] = temp; } } }`',
            ar: 'ترتيب الموظفين حسب الراتب (Bubble Sort): `for (int i = 0; i < ma.length-1; i++) { for (int j = 0; j < ma.length-1-i; j++) { if (ma[j].getGehalt() > ma[j+1].getGehalt()) { Mitarbeiter temp = ma[j]; ma[j] = ma[j+1]; ma[j+1] = temp; } } }`',
          },
        ],
        examRelevance: {
          de: 'Das Sortieren von Objekt-Arrays nach einem bestimmten Attribut ist eine der häufigsten Aufgabentypen in der IHK-AP2-Prüfung.',
          ar: 'ترتيب مصفوفات الكائنات حسب خاصية معينة هو أحد أكثر أنواع المهام شيوعاً في امتحان IHK-AP2.',
        },
        summary: {
          de: 'Objekte nach Attributen sortieren: Gleicher Algorithmus, aber Vergleich über Getter-Methoden, Tausch ganzer Objektreferenzen.',
          ar: 'ترتيب الكائنات حسب الخصائص: نفس الخوارزمية، لكن المقارنة عبر طرق Getter، تبديل مراجع الكائنات بالكامل.',
        },
      },
    },
  ],
};
