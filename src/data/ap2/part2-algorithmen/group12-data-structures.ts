import type { TopicGroup } from '../../../types';

export const dataStructures: TopicGroup = {
  id: 'group12-data-structures',
  name: {
    de: 'Datenstrukturen',
    ar: 'هياكل البيانات',
  },
  description: {
    de: 'Stacks, Queues, Bäume, Graphen und Hash-Tabellen',
    ar: 'المكدسات والطوابير والأشجار والرسوم البيانية وجداول التجزئة',
  },
  topics: [
    {
      id: 'stacks',
      name: { de: 'Stacks (Stapel)', ar: 'المكدسات (Stacks)' },
      content: {
        definition: {
          de: 'Ein Stack (Stapel) ist eine Datenstruktur nach dem LIFO-Prinzip (Last In, First Out): Das zuletzt eingefügte Element wird zuerst entnommen – wie ein Stapel Teller.',
          ar: 'المكدس (Stack) هو هيكل بيانات يعمل بمبدأ LIFO (آخر ما يدخل أول ما يخرج): العنصر المُدرج أخيراً يُسحب أولاً – مثل كومة الأطباق.',
        },
        keyPoints: [
          { de: 'push(element): Legt ein Element oben auf den Stack', ar: 'push(element): يضع عنصراً على قمة المكدس' },
          { de: 'pop(): Entfernt und gibt das oberste Element zurück', ar: 'pop(): يزيل ويُرجع العنصر الأعلى' },
          { de: 'peek()/top(): Gibt das oberste Element zurück, ohne es zu entfernen', ar: 'peek()/top(): يُرجع العنصر الأعلى دون إزالته' },
          { de: 'isEmpty(): Prüft, ob der Stack leer ist', ar: 'isEmpty(): يفحص ما إذا كان المكدس فارغاً' },
        ],
        examples: [
          { de: 'Undo-Funktion: Jede Aktion wird auf den Stack gelegt. Undo holt die letzte Aktion mit pop() und macht sie rückgängig.', ar: 'وظيفة التراجع: كل إجراء يُوضع على المكدس. التراجع يسحب آخر إجراء بـ pop() ويلغيه.' },
          { de: 'Klammerprüfung: `Stack<Character> s = new Stack<>();` Für jede \'(\': push. Für jede \')\': pop. Am Ende muss Stack leer sein.', ar: 'فحص الأقواس: `Stack<Character> s = new Stack<>();` لكل \'(\': push. لكل \')\': pop. في النهاية يجب أن يكون المكدس فارغاً.' },
        ],
        examRelevance: { de: 'Stacks und das LIFO-Prinzip werden in der IHK-Prüfung abgefragt. Typische Aufgabe: Reihenfolge der Elemente nach push/pop-Operationen bestimmen.', ar: 'المكدسات ومبدأ LIFO يُسأل عنها في امتحان IHK. مهمة نموذجية: تحديد ترتيب العناصر بعد عمليات push/pop.' },
        summary: { de: 'Stack = LIFO. Operationen: push (oben drauf), pop (oben runter), peek (anschauen). Anwendung: Undo, Klammerprüfung.', ar: 'Stack = LIFO. العمليات: push (إضافة للأعلى)، pop (إزالة من الأعلى)، peek (النظر). التطبيق: التراجع، فحص الأقواس.' },
      },
    },
    {
      id: 'queues',
      name: { de: 'Queues (Warteschlangen)', ar: 'الطوابير (Queues)' },
      content: {
        definition: {
          de: 'Eine Queue (Warteschlange) ist eine Datenstruktur nach dem FIFO-Prinzip (First In, First Out): Das zuerst eingefügte Element wird zuerst entnommen – wie eine Warteschlange an der Kasse.',
          ar: 'الطابور (Queue) هو هيكل بيانات يعمل بمبدأ FIFO (أول ما يدخل أول ما يخرج): العنصر المُدرج أولاً يُسحب أولاً – مثل طابور الانتظار عند الكاسة.',
        },
        keyPoints: [
          { de: 'enqueue(element): Fügt ein Element am Ende der Queue hinzu', ar: 'enqueue(element): يضيف عنصراً في نهاية الطابور' },
          { de: 'dequeue(): Entfernt und gibt das vorderste Element zurück', ar: 'dequeue(): يزيل ويُرجع العنصر الأمامي' },
          { de: 'peek()/front(): Gibt das vorderste Element zurück, ohne es zu entfernen', ar: 'peek()/front(): يُرجع العنصر الأمامي دون إزالته' },
          { de: 'Anwendungen: Druckerwarteschlange, Auftragsverarbeitung, Nachrichtenpuffer', ar: 'التطبيقات: طابور الطابعة، معالجة الطلبات، مخزن الرسائل المؤقت' },
        ],
        examples: [
          { de: 'Druckerwarteschlange: `queue.enqueue("Dokument1"); queue.enqueue("Dokument2"); queue.dequeue();` – "Dokument1" wird zuerst gedruckt.', ar: 'طابور الطابعة: `queue.enqueue("Dokument1"); queue.enqueue("Dokument2"); queue.dequeue();` – "Dokument1" يُطبع أولاً.' },
        ],
        examRelevance: { de: 'Queues und das FIFO-Prinzip sind IHK-relevant. Der Unterschied zu Stacks (LIFO) muss klar sein.', ar: 'الطوابير ومبدأ FIFO مهمة لـ IHK. الفرق عن المكدسات (LIFO) يجب أن يكون واضحاً.' },
        summary: { de: 'Queue = FIFO. Enqueue am Ende, Dequeue vorne. Anwendung: Warteschlangen, Auftragsverarbeitung.', ar: 'Queue = FIFO. Enqueue في النهاية، Dequeue في الأمام. التطبيق: طوابير الانتظار، معالجة الطلبات.' },
      },
    },
    {
      id: 'trees',
      name: { de: 'Bäume', ar: 'الأشجار' },
      content: {
        definition: {
          de: 'Ein Baum ist eine hierarchische Datenstruktur mit einem Wurzelknoten, von dem Kindknoten abzweigen. Jeder Knoten hat maximal einen Elternknoten. Binäre Bäume haben maximal zwei Kindknoten pro Knoten.',
          ar: 'الشجرة هي هيكل بيانات هرمي بعقدة جذرية تتفرع منها عقد فرعية. كل عقدة لها عقدة أب واحدة كحد أقصى. الأشجار الثنائية لها عقدتان فرعيتان كحد أقصى لكل عقدة.',
        },
        keyPoints: [
          { de: 'Wurzel (Root): Oberster Knoten ohne Elternknoten', ar: 'الجذر (Root): العقدة العليا بدون عقدة أب' },
          { de: 'Blatt (Leaf): Knoten ohne Kindknoten', ar: 'الورقة (Leaf): عقدة بدون عقد فرعية' },
          { de: 'Binärer Suchbaum: Links kleiner, rechts größer als der Elternknoten', ar: 'شجرة البحث الثنائية: يساراً أصغر، يميناً أكبر من العقدة الأب' },
          { de: 'Traversierung: Inorder (links-wurzel-rechts), Preorder (wurzel-links-rechts), Postorder (links-rechts-wurzel)', ar: 'التمرير: Inorder (يسار-جذر-يمين)، Preorder (جذر-يسار-يمين)، Postorder (يسار-يمين-جذر)' },
        ],
        examples: [
          { de: 'Binärer Suchbaum mit Wurzel 8: Links 3 (mit Kindern 1, 6), rechts 10 (mit Kind 14). Inorder-Traversierung ergibt: 1, 3, 6, 8, 10, 14 (sortiert!).', ar: 'شجرة بحث ثنائية بجذر 8: يساراً 3 (بفرعي 1، 6)، يميناً 10 (بفرع 14). تمرير Inorder ينتج: 1، 3، 6، 8، 10، 14 (مرتبة!).' },
        ],
        examRelevance: { de: 'Bäume werden in der IHK-Prüfung als Konzept abgefragt. Binäre Suchbäume und Traversierungsreihenfolgen sind besonders relevant.', ar: 'الأشجار يُسأل عنها في امتحان IHK كمفهوم. أشجار البحث الثنائية وترتيبات التمرير مهمة بشكل خاص.' },
        summary: { de: 'Bäume sind hierarchische Strukturen. Binäre Suchbäume ermöglichen effizientes Suchen. Traversierung: Inorder, Preorder, Postorder.', ar: 'الأشجار هياكل هرمية. أشجار البحث الثنائية تتيح بحثاً فعالاً. التمرير: Inorder، Preorder، Postorder.' },
      },
    },
    {
      id: 'graphs',
      name: { de: 'Graphen', ar: 'الرسوم البيانية (Graphs)' },
      content: {
        definition: {
          de: 'Ein Graph besteht aus Knoten (Vertices) und Kanten (Edges), die Knoten miteinander verbinden. Graphen modellieren Beziehungen, z.B. Netzwerke, Routen oder soziale Verbindungen.',
          ar: 'الرسم البياني (Graph) يتكون من عقد (Vertices) وحواف (Edges) تربط العقد ببعضها. الرسوم البيانية تنمذج العلاقات، مثل الشبكات والمسارات والعلاقات الاجتماعية.',
        },
        keyPoints: [
          { de: 'Gerichteter Graph: Kanten haben eine Richtung (A → B ≠ B → A)', ar: 'رسم بياني موجه: الحواف لها اتجاه (A → B ≠ B → A)' },
          { de: 'Ungerichteter Graph: Kanten gelten in beide Richtungen (A — B = B — A)', ar: 'رسم بياني غير موجه: الحواف تعمل في كلا الاتجاهين (A — B = B — A)' },
          { de: 'Gewichteter Graph: Kanten haben einen Wert (z.B. Entfernung, Kosten)', ar: 'رسم بياني مرجح: الحواف لها قيمة (مثل المسافة، التكلفة)' },
        ],
        examples: [
          { de: 'Straßennetz: Städte sind Knoten, Straßen sind Kanten mit Entfernungen als Gewicht. Kürzester Weg von A nach B = Pfad mit geringster Gesamtgewichtung.', ar: 'شبكة طرق: المدن هي العقد، الطرق هي الحواف بالمسافات كوزن. أقصر طريق من A إلى B = المسار بأقل وزن إجمالي.' },
        ],
        examRelevance: { de: 'Graphen werden in der IHK-Prüfung konzeptuell abgefragt. Man muss gerichtete/ungerichtete und gewichtete Graphen unterscheiden können.', ar: 'الرسوم البيانية يُسأل عنها مفهومياً في امتحان IHK. يجب التمييز بين الرسوم الموجهة/غير الموجهة والمرجحة.' },
        summary: { de: 'Graphen bestehen aus Knoten und Kanten. Gerichtet/ungerichtet, gewichtet/ungewichtet. Modellieren Beziehungen und Netzwerke.', ar: 'الرسوم البيانية تتكون من عقد وحواف. موجهة/غير موجهة، مرجحة/غير مرجحة. تنمذج العلاقات والشبكات.' },
      },
    },
    {
      id: 'hash-tables',
      name: { de: 'Hash-Tabellen', ar: 'جداول التجزئة' },
      content: {
        definition: {
          de: 'Eine Hash-Tabelle speichert Schlüssel-Wert-Paare und verwendet eine Hash-Funktion, um den Speicherort zu berechnen. Dadurch ist der Zugriff im Durchschnitt in O(1) möglich.',
          ar: 'جدول التجزئة يخزن أزواج مفتاح-قيمة ويستخدم دالة تجزئة لحساب موقع التخزين. بذلك يكون الوصول ممكناً بمتوسط O(1).',
        },
        keyPoints: [
          { de: 'Hash-Funktion: Berechnet aus dem Schlüssel einen Index in einem Array', ar: 'دالة التجزئة: تحسب من المفتاح فهرساً في مصفوفة' },
          { de: 'Kollision: Zwei Schlüssel erzeugen denselben Hash-Wert – muss aufgelöst werden', ar: 'التصادم: مفتاحان ينتجان نفس قيمة التجزئة – يجب حله' },
          { de: 'In Java: `HashMap<String, Integer>` speichert Schlüssel-Wert-Paare', ar: 'في Java: `HashMap<String, Integer>` يخزن أزواج مفتاح-قيمة' },
          { de: 'Operationen: put(key, value), get(key), containsKey(key), remove(key)', ar: 'العمليات: put(key, value)، get(key)، containsKey(key)، remove(key)' },
        ],
        examples: [
          { de: '`HashMap<String, Integer> telefonbuch = new HashMap<>(); telefonbuch.put("Max", 12345); int nr = telefonbuch.get("Max");` – Telefonbuch mit Name als Schlüssel.', ar: '`HashMap<String, Integer> telefonbuch = new HashMap<>(); telefonbuch.put("Max", 12345); int nr = telefonbuch.get("Max");` – دليل هاتف بالاسم كمفتاح.' },
        ],
        examRelevance: { de: 'Hash-Tabellen werden konzeptuell in der IHK-Prüfung abgefragt. Vorteile (schneller Zugriff) und Nachteile (Kollisionen) kennen.', ar: 'جداول التجزئة يُسأل عنها مفهومياً في امتحان IHK. معرفة المزايا (الوصول السريع) والعيوب (التصادمات).' },
        summary: { de: 'Hash-Tabellen: Schneller Zugriff über Schlüssel O(1). Hash-Funktion berechnet Index. Kollisionen müssen behandelt werden.', ar: 'جداول التجزئة: وصول سريع عبر المفتاح O(1). دالة التجزئة تحسب الفهرس. التصادمات يجب معالجتها.' },
      },
    },
  ],
};
