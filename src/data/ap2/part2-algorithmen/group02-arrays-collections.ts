import type { TopicGroup } from '../../../types';

export const arraysCollections: TopicGroup = {
  id: 'group02-arrays-collections',
  name: {
    de: 'Arrays und Collections',
    ar: 'المصفوفات والمجموعات',
  },
  description: {
    de: 'Eindimensionale und mehrdimensionale Arrays, Traversierung, Suche und Filterung',
    ar: 'المصفوفات أحادية ومتعددة الأبعاد، التمرير، البحث والتصفية',
  },
  priority: 'very-high',
  topics: [
    {
      id: 'arrays-1d',
      name: { de: 'Arrays (eindimensional)', ar: 'المصفوفات (أحادية البعد)' },
      content: {
        definition: {
          de: 'Ein eindimensionales Array ist eine geordnete Datenstruktur fester Größe, die mehrere Werte desselben Datentyps unter einem Namen speichert. Auf einzelne Elemente wird über einen Index zugegriffen, der bei 0 beginnt.',
          ar: 'المصفوفة أحادية البعد هي هيكل بيانات مرتب بحجم ثابت يخزن عدة قيم من نفس نوع البيانات تحت اسم واحد. يتم الوصول إلى العناصر الفردية عبر فهرس يبدأ من 0.',
        },
        keyPoints: [
          {
            de: 'Deklaration: `int[] zahlen = new int[5];` erstellt ein Array mit 5 Elementen (Index 0 bis 4)',
            ar: 'الإعلان: `int[] zahlen = new int[5];` ينشئ مصفوفة بـ 5 عناصر (فهرس 0 إلى 4)',
          },
          {
            de: 'Initialisierung: `int[] zahlen = {10, 20, 30, 40, 50};` erstellt und füllt das Array direkt',
            ar: 'التهيئة: `int[] zahlen = {10, 20, 30, 40, 50};` ينشئ ويملأ المصفوفة مباشرة',
          },
          {
            de: 'Die Länge eines Arrays ist fest und kann nach der Erstellung nicht geändert werden: `zahlen.length` gibt die Größe zurück',
            ar: 'طول المصفوفة ثابت ولا يمكن تغييره بعد الإنشاء: `zahlen.length` يُرجع الحجم',
          },
          {
            de: 'ArrayIndexOutOfBoundsException tritt auf, wenn auf einen ungültigen Index zugegriffen wird',
            ar: 'ArrayIndexOutOfBoundsException يحدث عند الوصول إلى فهرس غير صالح',
          },
        ],
        examples: [
          {
            de: '`int[] noten = {2, 1, 3, 4, 2}; System.out.println(noten[0]);` – Gibt 2 aus (erstes Element, Index 0).',
            ar: '`int[] noten = {2, 1, 3, 4, 2}; System.out.println(noten[0]);` – يطبع 2 (العنصر الأول، فهرس 0).',
          },
          {
            de: '`noten[2] = 5;` – Ändert das dritte Element (Index 2) von 3 auf 5.',
            ar: '`noten[2] = 5;` – يغير العنصر الثالث (فهرس 2) من 3 إلى 5.',
          },
        ],
        examRelevance: {
          de: 'Arrays sind die häufigste Datenstruktur in IHK-Prüfungsaufgaben. Man muss Arrays deklarieren, befüllen, durchlaufen und manipulieren können.',
          ar: 'المصفوفات هي هيكل البيانات الأكثر شيوعاً في مهام امتحان IHK. يجب أن تكون قادراً على إعلان المصفوفات وملؤها وتمريرها ومعالجتها.',
        },
        summary: {
          de: 'Eindimensionale Arrays speichern mehrere Werte gleichen Typs. Zugriff über Index (ab 0), feste Größe nach Erstellung.',
          ar: 'المصفوفات أحادية البعد تخزن عدة قيم من نفس النوع. الوصول عبر الفهرس (من 0)، حجم ثابت بعد الإنشاء.',
        },
      },
    },
    {
      id: 'multidimensional-arrays',
      name: { de: 'Mehrdimensionale Arrays', ar: 'المصفوفات متعددة الأبعاد' },
      content: {
        definition: {
          de: 'Ein mehrdimensionales Array ist ein Array von Arrays. Am häufigsten werden zweidimensionale Arrays (Matrizen) verwendet, die wie eine Tabelle mit Zeilen und Spalten aufgebaut sind.',
          ar: 'المصفوفة متعددة الأبعاد هي مصفوفة من المصفوفات. الأكثر استخداماً هي المصفوفات ثنائية الأبعاد (المصفوفات الرياضية) التي تشبه جدولاً بصفوف وأعمدة.',
        },
        keyPoints: [
          {
            de: 'Deklaration: `int[][] matrix = new int[3][4];` – 3 Zeilen, 4 Spalten',
            ar: 'الإعلان: `int[][] matrix = new int[3][4];` – 3 صفوف، 4 أعمدة',
          },
          {
            de: 'Zugriff: `matrix[zeile][spalte]` – Erster Index ist die Zeile, zweiter die Spalte',
            ar: 'الوصول: `matrix[zeile][spalte]` – الفهرس الأول هو الصف، والثاني هو العمود',
          },
          {
            de: 'Traversierung mit verschachtelten Schleifen: äußere Schleife für Zeilen, innere für Spalten',
            ar: 'التمرير بحلقات متداخلة: الحلقة الخارجية للصفوف، والداخلية للأعمدة',
          },
        ],
        examples: [
          {
            de: '`int[][] matrix = {{1,2,3},{4,5,6}}; System.out.println(matrix[1][2]);` – Gibt 6 aus (Zeile 1, Spalte 2).',
            ar: '`int[][] matrix = {{1,2,3},{4,5,6}}; System.out.println(matrix[1][2]);` – يطبع 6 (صف 1، عمود 2).',
          },
          {
            de: 'Alle Elemente ausgeben: `for (int i = 0; i < matrix.length; i++) { for (int j = 0; j < matrix[i].length; j++) { System.out.print(matrix[i][j] + " "); } }`',
            ar: 'طباعة جميع العناصر: `for (int i = 0; i < matrix.length; i++) { for (int j = 0; j < matrix[i].length; j++) { System.out.print(matrix[i][j] + " "); } }`',
          },
        ],
        examRelevance: {
          de: 'Zweidimensionale Arrays kommen in IHK-Prüfungen vor, z.B. für Stundenplan-Darstellungen, Sitzpläne oder Spielfelder. Verschachtelte Schleifen müssen sicher beherrscht werden.',
          ar: 'المصفوفات ثنائية الأبعاد تظهر في امتحانات IHK، مثل تمثيل جداول الحصص أو مخططات الجلوس أو ساحات اللعب. يجب إتقان الحلقات المتداخلة.',
        },
        summary: {
          de: 'Mehrdimensionale Arrays sind Arrays von Arrays. Zugriff über mehrere Indizes, Traversierung mit verschachtelten Schleifen.',
          ar: 'المصفوفات متعددة الأبعاد هي مصفوفات من مصفوفات. الوصول عبر فهارس متعددة، التمرير بحلقات متداخلة.',
        },
      },
    },
    {
      id: 'array-traversal',
      name: { de: 'Array-Traversierung', ar: 'تمرير المصفوفات' },
      content: {
        definition: {
          de: 'Array-Traversierung bedeutet, alle Elemente eines Arrays der Reihe nach zu durchlaufen, um sie zu lesen, zu verarbeiten oder zu verändern. Dies geschieht typischerweise mit einer for-Schleife oder einer for-each-Schleife.',
          ar: 'تمرير المصفوفات يعني المرور على جميع عناصر المصفوفة بالترتيب لقراءتها أو معالجتها أو تغييرها. يتم هذا عادةً بحلقة for أو حلقة for-each.',
        },
        keyPoints: [
          {
            de: 'Index-basiert: `for (int i = 0; i < arr.length; i++)` – Zugriff auf Index und Wert möglich',
            ar: 'بناءً على الفهرس: `for (int i = 0; i < arr.length; i++)` – الوصول إلى الفهرس والقيمة ممكن',
          },
          {
            de: 'For-each: `for (int wert : arr)` – Einfacher, aber kein Zugriff auf den Index',
            ar: 'For-each: `for (int wert : arr)` – أبسط، لكن بدون وصول إلى الفهرس',
          },
          {
            de: 'Rückwärts traversieren: `for (int i = arr.length - 1; i >= 0; i--)` – Nützlich z.B. beim Löschen von Elementen',
            ar: 'التمرير للخلف: `for (int i = arr.length - 1; i >= 0; i--)` – مفيد مثلاً عند حذف العناصر',
          },
        ],
        examples: [
          {
            de: 'Summe berechnen: `int summe = 0; for (int wert : zahlen) { summe += wert; }` – Addiert alle Werte im Array.',
            ar: 'حساب المجموع: `int summe = 0; for (int wert : zahlen) { summe += wert; }` – يجمع جميع القيم في المصفوفة.',
          },
          {
            de: 'Alle Elemente verdoppeln: `for (int i = 0; i < arr.length; i++) { arr[i] = arr[i] * 2; }` – Hier ist die index-basierte Schleife nötig.',
            ar: 'مضاعفة جميع العناصر: `for (int i = 0; i < arr.length; i++) { arr[i] = arr[i] * 2; }` – هنا الحلقة المبنية على الفهرس ضرورية.',
          },
        ],
        examRelevance: {
          de: 'Array-Traversierung ist die Grundlage für fast alle Array-Aufgaben in der IHK-Prüfung. Man muss sicher zwischen index-basierter und for-each-Schleife wählen können.',
          ar: 'تمرير المصفوفات هو الأساس لجميع مهام المصفوفات تقريباً في امتحان IHK. يجب أن تكون قادراً على الاختيار بين الحلقة المبنية على الفهرس وحلقة for-each.',
        },
        summary: {
          de: 'Array-Traversierung durchläuft alle Elemente. Index-basierte Schleife für Zugriff auf Position, for-each für einfaches Lesen.',
          ar: 'تمرير المصفوفات يمر على جميع العناصر. الحلقة المبنية على الفهرس للوصول إلى الموقع، for-each للقراءة البسيطة.',
        },
      },
    },
    {
      id: 'searching-in-arrays',
      name: { de: 'Suchen in Arrays', ar: 'البحث في المصفوفات' },
      content: {
        definition: {
          de: 'Das Suchen in Arrays bedeutet, ein bestimmtes Element oder einen Wert innerhalb eines Arrays zu finden. Die einfachste Methode ist die lineare Suche, die jedes Element nacheinander prüft.',
          ar: 'البحث في المصفوفات يعني إيجاد عنصر أو قيمة معينة داخل مصفوفة. أبسط طريقة هي البحث الخطي الذي يفحص كل عنصر بالتتابع.',
        },
        keyPoints: [
          {
            de: 'Lineare Suche: Durchlaufe das Array von Anfang bis Ende und vergleiche jedes Element mit dem Suchwert',
            ar: 'البحث الخطي: تمرير المصفوفة من البداية إلى النهاية ومقارنة كل عنصر بقيمة البحث',
          },
          {
            de: 'Bei Fund: Position (Index) zurückgeben oder `true` liefern; sonst -1 oder `false`',
            ar: 'عند العثور: إرجاع الموقع (الفهرس) أو إرجاع `true`؛ وإلا -1 أو `false`',
          },
          {
            de: 'Optimierung mit `break`: Schleife abbrechen, sobald das Element gefunden wurde',
            ar: 'تحسين مع `break`: إنهاء الحلقة بمجرد العثور على العنصر',
          },
        ],
        examples: [
          {
            de: '`int pos = -1; for (int i = 0; i < arr.length; i++) { if (arr[i] == gesucht) { pos = i; break; } }` – Findet die Position des gesuchten Werts.',
            ar: '`int pos = -1; for (int i = 0; i < arr.length; i++) { if (arr[i] == gesucht) { pos = i; break; } }` – يجد موقع القيمة المطلوبة.',
          },
          {
            de: 'Existenzprüfung: `boolean gefunden = false; for (String name : namen) { if (name.equals("Max")) { gefunden = true; break; } }`',
            ar: 'فحص الوجود: `boolean gefunden = false; for (String name : namen) { if (name.equals("Max")) { gefunden = true; break; } }`',
          },
        ],
        examRelevance: {
          de: 'Suchaufgaben in Arrays sind ein Klassiker der IHK-Prüfung. Man muss den Suchalgorithmus implementieren oder das Ergebnis einer Suche nachvollziehen können.',
          ar: 'مهام البحث في المصفوفات هي كلاسيكية في امتحان IHK. يجب أن تكون قادراً على تنفيذ خوارزمية البحث أو تتبع نتيجة البحث.',
        },
        summary: {
          de: 'Suchen in Arrays: Jedes Element prüfen, bei Fund Index zurückgeben oder Schleife mit break beenden.',
          ar: 'البحث في المصفوفات: فحص كل عنصر، عند العثور إرجاع الفهرس أو إنهاء الحلقة بـ break.',
        },
      },
    },
    {
      id: 'counting-values',
      name: { de: 'Werte zählen in Arrays', ar: 'عد القيم في المصفوفات' },
      content: {
        definition: {
          de: 'Das Zählen von Werten in Arrays bedeutet, die Häufigkeit bestimmter Elemente oder das Vorkommen von Elementen, die eine Bedingung erfüllen, zu ermitteln.',
          ar: 'عد القيم في المصفوفات يعني تحديد تكرار عناصر معينة أو عدد العناصر التي تستوفي شرطاً ما.',
        },
        keyPoints: [
          {
            de: 'Zähler mit 0 initialisieren, dann in einer Schleife bei jeder Übereinstimmung erhöhen',
            ar: 'تهيئة العداد بالقيمة 0، ثم زيادته في حلقة عند كل تطابق',
          },
          {
            de: 'Bedingte Zählung: Nur Elemente zählen, die eine bestimmte Bedingung erfüllen (z.B. gerade Zahlen)',
            ar: 'العد المشروط: عد العناصر التي تستوفي شرطاً معيناً فقط (مثل الأعداد الزوجية)',
          },
          {
            de: 'Häufigkeitsverteilung: Wie oft kommt jeder Wert vor? Kann mit einem zweiten Array gelöst werden',
            ar: 'التوزيع التكراري: كم مرة تظهر كل قيمة؟ يمكن حلها بمصفوفة ثانية',
          },
        ],
        examples: [
          {
            de: '`int anzahl = 0; for (int note : noten) { if (note == 1) anzahl++; }` – Zählt, wie oft die Note 1 vorkommt.',
            ar: '`int anzahl = 0; for (int note : noten) { if (note == 1) anzahl++; }` – يعد كم مرة تظهر الدرجة 1.',
          },
          {
            de: '`int geradeAnzahl = 0; for (int z : zahlen) { if (z % 2 == 0) geradeAnzahl++; }` – Zählt die geraden Zahlen im Array.',
            ar: '`int geradeAnzahl = 0; for (int z : zahlen) { if (z % 2 == 0) geradeAnzahl++; }` – يعد الأعداد الزوجية في المصفوفة.',
          },
        ],
        examRelevance: {
          de: 'Zählaufgaben sind häufig in der IHK-Prüfung. Typisch: Wie viele Elemente erfüllen eine Bedingung? Ergebnis als Zahl oder Prozentwert.',
          ar: 'مهام العد شائعة في امتحان IHK. نموذجي: كم عنصر يستوفي شرطاً؟ النتيجة كرقم أو قيمة مئوية.',
        },
        summary: {
          de: 'Werte zählen: Zähler initialisieren, Array durchlaufen, bei Bedingung erhöhen. Grundmuster für statistische Auswertungen.',
          ar: 'عد القيم: تهيئة العداد، تمرير المصفوفة، الزيادة عند الشرط. نمط أساسي للتحليلات الإحصائية.',
        },
      },
    },
    {
      id: 'filtering-elements',
      name: { de: 'Filtern von Array-Elementen', ar: 'تصفية عناصر المصفوفات' },
      content: {
        definition: {
          de: 'Beim Filtern werden aus einem Array nur die Elemente ausgewählt, die eine bestimmte Bedingung erfüllen. Die gefilterten Elemente werden in ein neues Array oder eine Liste kopiert.',
          ar: 'عند التصفية يتم اختيار العناصر التي تستوفي شرطاً معيناً فقط من المصفوفة. يتم نسخ العناصر المصفاة في مصفوفة جديدة أو قائمة.',
        },
        keyPoints: [
          {
            de: 'Erst die Anzahl der passenden Elemente zählen, dann ein neues Array der richtigen Größe erstellen',
            ar: 'أولاً عد العناصر المطابقة، ثم إنشاء مصفوفة جديدة بالحجم الصحيح',
          },
          {
            de: 'Alternative: Eine ArrayList verwenden, die dynamisch wachsen kann',
            ar: 'بديل: استخدام ArrayList التي يمكن أن تنمو ديناميكياً',
          },
          {
            de: 'Filterbedingung in der if-Anweisung innerhalb der Schleife definieren',
            ar: 'تعريف شرط التصفية في عبارة if داخل الحلقة',
          },
        ],
        examples: [
          {
            de: 'Mit ArrayList: `ArrayList<Integer> ergebnis = new ArrayList<>(); for (int z : zahlen) { if (z > 10) ergebnis.add(z); }` – Filtert alle Zahlen größer als 10.',
            ar: 'مع ArrayList: `ArrayList<Integer> ergebnis = new ArrayList<>(); for (int z : zahlen) { if (z > 10) ergebnis.add(z); }` – يصفي جميع الأرقام الأكبر من 10.',
          },
          {
            de: 'Strings filtern: `for (String name : namen) { if (name.startsWith("A")) System.out.println(name); }` – Gibt nur Namen aus, die mit "A" beginnen.',
            ar: 'تصفية النصوص: `for (String name : namen) { if (name.startsWith("A")) System.out.println(name); }` – يطبع فقط الأسماء التي تبدأ بـ "A".',
          },
        ],
        examRelevance: {
          de: 'Filteraufgaben kommen häufig vor: Aus einer Datenmenge bestimmte Einträge auswählen und in einem neuen Array oder als Ausgabe darstellen.',
          ar: 'مهام التصفية شائعة: اختيار إدخالات معينة من مجموعة بيانات وتمثيلها في مصفوفة جديدة أو كمخرجات.',
        },
        summary: {
          de: 'Filtern wählt Elemente nach Bedingung aus. Ergebnis in neuem Array oder ArrayList speichern.',
          ar: 'التصفية تختار العناصر حسب الشرط. تخزين النتيجة في مصفوفة جديدة أو ArrayList.',
        },
      },
    },
    {
      id: 'comparing-elements',
      name: { de: 'Vergleichen von Array-Elementen', ar: 'مقارنة عناصر المصفوفات' },
      content: {
        definition: {
          de: 'Beim Vergleichen von Array-Elementen werden Werte innerhalb eines Arrays miteinander verglichen, um z.B. das Maximum, Minimum oder Duplikate zu finden.',
          ar: 'عند مقارنة عناصر المصفوفات تتم مقارنة القيم داخل المصفوفة ببعضها البعض للعثور مثلاً على القيمة القصوى أو الدنيا أو المكررات.',
        },
        keyPoints: [
          {
            de: 'Maximum finden: Erstes Element als Maximum annehmen, dann mit allen weiteren vergleichen',
            ar: 'إيجاد القيمة القصوى: افتراض العنصر الأول كقيمة قصوى، ثم المقارنة مع جميع العناصر الأخرى',
          },
          {
            de: 'Duplikate finden: Verschachtelte Schleifen – jedes Element mit allen nachfolgenden vergleichen',
            ar: 'إيجاد المكررات: حلقات متداخلة – مقارنة كل عنصر مع جميع العناصر اللاحقة',
          },
          {
            de: 'Zwei Arrays vergleichen: Element für Element prüfen, ob alle Werte übereinstimmen',
            ar: 'مقارنة مصفوفتين: فحص عنصر بعنصر ما إذا كانت جميع القيم متطابقة',
          },
        ],
        examples: [
          {
            de: 'Maximum: `int max = arr[0]; for (int i = 1; i < arr.length; i++) { if (arr[i] > max) max = arr[i]; }` – Findet den größten Wert.',
            ar: 'القيمة القصوى: `int max = arr[0]; for (int i = 1; i < arr.length; i++) { if (arr[i] > max) max = arr[i]; }` – يجد أكبر قيمة.',
          },
          {
            de: 'Duplikate: `for (int i = 0; i < arr.length; i++) { for (int j = i+1; j < arr.length; j++) { if (arr[i] == arr[j]) System.out.println("Duplikat: " + arr[i]); } }`',
            ar: 'المكررات: `for (int i = 0; i < arr.length; i++) { for (int j = i+1; j < arr.length; j++) { if (arr[i] == arr[j]) System.out.println("Duplikat: " + arr[i]); } }`',
          },
        ],
        examRelevance: {
          de: 'Das Finden von Minimum und Maximum in Arrays ist eine häufige IHK-Aufgabe. Auch Duplikaterkennung und Arrayvergleiche sind prüfungsrelevant.',
          ar: 'إيجاد القيمة الدنيا والقصوى في المصفوفات هي مهمة شائعة في IHK. اكتشاف المكررات ومقارنة المصفوفات مهمة للامتحان أيضاً.',
        },
        summary: {
          de: 'Array-Elemente vergleichen für Min/Max, Duplikate oder Gleichheit. Verschachtelte Schleifen für paarweise Vergleiche.',
          ar: 'مقارنة عناصر المصفوفة لإيجاد القيمة الدنيا/القصوى والمكررات والتساوي. حلقات متداخلة للمقارنات الثنائية.',
        },
      },
    },
    {
      id: 'array-indexing',
      name: { de: 'Array-Indizierung', ar: 'فهرسة المصفوفات' },
      content: {
        definition: {
          de: 'Array-Indizierung bezeichnet den Zugriff auf einzelne Elemente eines Arrays über ihre Position (Index). In den meisten Programmiersprachen beginnt der Index bei 0.',
          ar: 'فهرسة المصفوفات تعني الوصول إلى عناصر فردية في المصفوفة عبر موقعها (الفهرس). في معظم لغات البرمجة يبدأ الفهرس من 0.',
        },
        keyPoints: [
          {
            de: 'Index beginnt bei 0: Das erste Element hat Index 0, das letzte hat Index `length - 1`',
            ar: 'الفهرس يبدأ من 0: العنصر الأول له فهرس 0، والأخير له فهرس `length - 1`',
          },
          {
            de: 'Lesen: `int wert = arr[2];` – Liest das dritte Element',
            ar: 'القراءة: `int wert = arr[2];` – يقرأ العنصر الثالث',
          },
          {
            de: 'Schreiben: `arr[2] = 99;` – Setzt das dritte Element auf 99',
            ar: 'الكتابة: `arr[2] = 99;` – يعين العنصر الثالث على 99',
          },
        ],
        examples: [
          {
            de: '`String[] tage = {"Mo","Di","Mi","Do","Fr"}; System.out.println(tage[4]);` – Gibt "Fr" aus (Index 4 = 5. Element).',
            ar: '`String[] tage = {"Mo","Di","Mi","Do","Fr"}; System.out.println(tage[4]);` – يطبع "Fr" (فهرس 4 = العنصر الخامس).',
          },
          {
            de: 'Letztes Element: `int letztes = arr[arr.length - 1];` – Zugriff auf das letzte Element unabhängig von der Arraygröße.',
            ar: 'العنصر الأخير: `int letztes = arr[arr.length - 1];` – الوصول إلى العنصر الأخير بغض النظر عن حجم المصفوفة.',
          },
        ],
        examRelevance: {
          de: 'Off-by-one-Fehler bei der Indizierung sind ein häufiges Thema in der IHK-Prüfung. Man muss sicher mit 0-basierter Indizierung umgehen können.',
          ar: 'أخطاء Off-by-one في الفهرسة هي موضوع شائع في امتحان IHK. يجب إتقان الفهرسة المبنية على 0.',
        },
        summary: {
          de: 'Array-Indizierung: Zugriff über Position ab Index 0. Letztes Element bei `length - 1`. Vorsicht vor Off-by-one-Fehlern.',
          ar: 'فهرسة المصفوفات: الوصول عبر الموقع من فهرس 0. العنصر الأخير عند `length - 1`. احذر من أخطاء Off-by-one.',
        },
      },
    },
    {
      id: 'lists-collections',
      name: { de: 'Listen und Collections', ar: 'القوائم والمجموعات' },
      content: {
        definition: {
          de: 'Listen (z.B. ArrayList in Java) sind dynamische Datenstrukturen, die im Gegensatz zu Arrays ihre Größe automatisch anpassen können. Sie gehören zum Java Collections Framework.',
          ar: 'القوائم (مثل ArrayList في Java) هي هياكل بيانات ديناميكية يمكنها تعديل حجمها تلقائياً على عكس المصفوفات. وهي تنتمي إلى إطار عمل Java Collections.',
        },
        keyPoints: [
          {
            de: 'ArrayList: `ArrayList<String> liste = new ArrayList<>();` – Dynamische Größe, Generics für Typsicherheit',
            ar: 'ArrayList: `ArrayList<String> liste = new ArrayList<>();` – حجم ديناميكي، Generics لأمان النوع',
          },
          {
            de: 'Methoden: `add()` (hinzufügen), `get()` (lesen), `set()` (ändern), `remove()` (entfernen), `size()` (Größe)',
            ar: 'الطرق: `add()` (إضافة)، `get()` (قراءة)، `set()` (تغيير)، `remove()` (حذف)، `size()` (الحجم)',
          },
          {
            de: 'ArrayList speichert nur Objekte, keine primitiven Typen – Autoboxing wandelt z.B. `int` in `Integer` um',
            ar: 'ArrayList تخزن الكائنات فقط، وليس الأنواع البدائية – Autoboxing يحول مثلاً `int` إلى `Integer`',
          },
        ],
        examples: [
          {
            de: '`ArrayList<String> namen = new ArrayList<>(); namen.add("Anna"); namen.add("Ben"); namen.remove(0); System.out.println(namen.get(0));` – Gibt "Ben" aus.',
            ar: '`ArrayList<String> namen = new ArrayList<>(); namen.add("Anna"); namen.add("Ben"); namen.remove(0); System.out.println(namen.get(0));` – يطبع "Ben".',
          },
        ],
        examRelevance: {
          de: 'ArrayLists werden in der IHK-Prüfung seltener als Arrays abgefragt, aber das Verständnis der Unterschiede (fest vs. dynamisch) ist wichtig.',
          ar: 'يتم سؤال ArrayLists في امتحان IHK بشكل أقل من المصفوفات، لكن فهم الفروق (ثابت مقابل ديناميكي) مهم.',
        },
        summary: {
          de: 'Listen sind dynamische Arrays mit flexibler Größe. ArrayList bietet Methoden zum Hinzufügen, Entfernen und Zugreifen auf Elemente.',
          ar: 'القوائم هي مصفوفات ديناميكية بحجم مرن. ArrayList توفر طرقاً للإضافة والحذف والوصول إلى العناصر.',
        },
      },
    },
    {
      id: 'iteration-over-collections',
      name: { de: 'Iteration über Collections', ar: 'التكرار عبر المجموعات' },
      content: {
        definition: {
          de: 'Iteration über Collections bedeutet, alle Elemente einer Sammlung (ArrayList, LinkedList etc.) der Reihe nach zu durchlaufen. Dies kann mit for-each, Index-basierter Schleife oder Iterator erfolgen.',
          ar: 'التكرار عبر المجموعات يعني المرور على جميع عناصر مجموعة (ArrayList, LinkedList إلخ) بالترتيب. يمكن أن يتم بـ for-each أو حلقة مبنية على الفهرس أو Iterator.',
        },
        keyPoints: [
          {
            de: 'For-each (empfohlen): `for (String s : liste) { ... }` – Einfach und sicher',
            ar: 'For-each (مُوصى به): `for (String s : liste) { ... }` – بسيط وآمن',
          },
          {
            de: 'Index-basiert: `for (int i = 0; i < liste.size(); i++) { liste.get(i); }` – Wenn Index benötigt wird',
            ar: 'مبني على الفهرس: `for (int i = 0; i < liste.size(); i++) { liste.get(i); }` – عندما يكون الفهرس مطلوباً',
          },
          {
            de: 'Iterator: `Iterator<String> it = liste.iterator(); while (it.hasNext()) { String s = it.next(); }` – Ermöglicht sicheres Entfernen während der Iteration',
            ar: 'Iterator: `Iterator<String> it = liste.iterator(); while (it.hasNext()) { String s = it.next(); }` – يتيح الحذف الآمن أثناء التكرار',
          },
        ],
        examples: [
          {
            de: '`ArrayList<Integer> zahlen = new ArrayList<>(Arrays.asList(1,2,3,4,5)); for (int z : zahlen) { System.out.println(z * z); }` – Gibt die Quadrate aller Zahlen aus.',
            ar: '`ArrayList<Integer> zahlen = new ArrayList<>(Arrays.asList(1,2,3,4,5)); for (int z : zahlen) { System.out.println(z * z); }` – يطبع مربعات جميع الأرقام.',
          },
        ],
        examRelevance: {
          de: 'Die Wahl der richtigen Iterationsmethode ist prüfungsrelevant. Besonders der Unterschied zwischen for-each und index-basierter Iteration wird gerne abgefragt.',
          ar: 'اختيار طريقة التكرار الصحيحة مهم للامتحان. خاصة الفرق بين for-each والتكرار المبني على الفهرس يُسأل عنه كثيراً.',
        },
        summary: {
          de: 'Collections können mit for-each, Index oder Iterator durchlaufen werden. For-each ist am einfachsten, Iterator erlaubt Änderungen.',
          ar: 'المجموعات يمكن تمريرها بـ for-each أو الفهرس أو Iterator. For-each هو الأبسط، Iterator يسمح بالتعديلات.',
        },
      },
    },
  ],
};
