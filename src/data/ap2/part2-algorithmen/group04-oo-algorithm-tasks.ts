import type { TopicGroup } from '../../../types';

export const ooAlgorithmTasks: TopicGroup = {
  id: 'group04-oo-algorithm-tasks',
  name: {
    de: 'Objektorientierte Algorithmusaufgaben',
    ar: 'مهام الخوارزميات الكائنية',
  },
  description: {
    de: 'Arbeiten mit Objekten, Attributzugriff, Getter/Setter und Objekt-Arrays',
    ar: 'العمل مع الكائنات، الوصول للخصائص، Getter/Setter ومصفوفات الكائنات',
  },
  priority: 'very-high',
  topics: [
    {
      id: 'working-with-objects',
      name: { de: 'Arbeiten mit Objekten', ar: 'العمل مع الكائنات' },
      content: {
        definition: {
          de: 'Objekte sind Instanzen von Klassen und kapseln Daten (Attribute) und Verhalten (Methoden). In Algorithmusaufgaben werden Objekte erstellt und ihre Methoden aufgerufen, um Daten zu verarbeiten.',
          ar: 'الكائنات هي نسخ من الفئات وتغلف البيانات (الخصائص) والسلوك (الطرق). في مهام الخوارزميات يتم إنشاء الكائنات واستدعاء طرقها لمعالجة البيانات.',
        },
        keyPoints: [
          {
            de: 'Objekt erstellen: `Kunde k = new Kunde("Max", 25);` – Konstruktoraufruf mit `new`',
            ar: 'إنشاء كائن: `Kunde k = new Kunde("Max", 25);` – استدعاء المُنشئ بـ `new`',
          },
          {
            de: 'Objekte speichern ihren Zustand in Attributen und bieten Methoden zur Interaktion',
            ar: 'الكائنات تخزن حالتها في الخصائص وتوفر طرقاً للتفاعل',
          },
          {
            de: 'Objekte werden über Referenzen angesprochen – zwei Variablen können auf dasselbe Objekt verweisen',
            ar: 'يتم الوصول إلى الكائنات عبر المراجع – متغيران يمكنهما الإشارة إلى نفس الكائن',
          },
        ],
        examples: [
          {
            de: '`Produkt p = new Produkt("Laptop", 999.99); System.out.println(p.getName() + ": " + p.getPreis() + " EUR");` – Erstellt ein Produkt und gibt Name und Preis aus.',
            ar: '`Produkt p = new Produkt("Laptop", 999.99); System.out.println(p.getName() + ": " + p.getPreis() + " EUR");` – ينشئ منتجاً ويطبع الاسم والسعر.',
          },
          {
            de: '`Kunde a = new Kunde("Max"); Kunde b = a; b.setName("Moritz");` – Beide Variablen verweisen auf dasselbe Objekt, daher hat a.getName() jetzt auch den Wert "Moritz".',
            ar: '`Kunde a = new Kunde("Max"); Kunde b = a; b.setName("Moritz");` – كلا المتغيرين يشيران إلى نفس الكائن، لذا a.getName() أصبحت أيضاً "Moritz".',
          },
        ],
        examRelevance: {
          de: 'Objektorientierte Aufgaben sind fester Bestandteil der IHK-Prüfung. Man muss Klassen lesen, Objekte erstellen und Methodenaufrufe nachvollziehen können.',
          ar: 'المهام الكائنية جزء ثابت من امتحان IHK. يجب قراءة الفئات وإنشاء الكائنات وتتبع استدعاءات الطرق.',
        },
        summary: {
          de: 'Objekte sind Instanzen von Klassen mit Attributen und Methoden. Erstellung mit `new`, Zugriff über Referenzen.',
          ar: 'الكائنات هي نسخ من الفئات بخصائص وطرق. الإنشاء بـ `new`، الوصول عبر المراجع.',
        },
      },
    },
    {
      id: 'accessing-attributes',
      name: { de: 'Zugriff auf Attribute', ar: 'الوصول إلى الخصائص' },
      content: {
        definition: {
          de: 'Attribute sind die Datenfelder eines Objekts. In gut entworfenen Klassen sind Attribute privat (`private`) und werden über Getter- und Setter-Methoden zugänglich gemacht (Kapselung).',
          ar: 'الخصائص هي حقول البيانات للكائن. في الفئات المصممة جيداً تكون الخصائص خاصة (`private`) ويتم الوصول إليها عبر طرق Getter و Setter (التغليف).',
        },
        keyPoints: [
          {
            de: 'Private Attribute: `private String name;` – Direkter Zugriff von außen ist nicht möglich',
            ar: 'خصائص خاصة: `private String name;` – الوصول المباشر من الخارج غير ممكن',
          },
          {
            de: 'Kapselung (Encapsulation): Attribute schützen und kontrollierten Zugriff über Methoden bieten',
            ar: 'التغليف (Encapsulation): حماية الخصائص وتوفير وصول مُتحكم عبر الطرق',
          },
          {
            de: 'Innerhalb der Klasse kann direkt auf Attribute zugegriffen werden: `this.name`',
            ar: 'داخل الفئة يمكن الوصول مباشرة للخصائص: `this.name`',
          },
        ],
        examples: [
          {
            de: '`class Mitarbeiter { private String name; private double gehalt; }` – Attribute sind gekapselt. Zugriff nur über Getter/Setter.',
            ar: '`class Mitarbeiter { private String name; private double gehalt; }` – الخصائص مُغلفة. الوصول فقط عبر Getter/Setter.',
          },
        ],
        examRelevance: {
          de: 'Das Verständnis von Kapselung und Attributzugriff ist für UML-Diagramme und OOP-Aufgaben in der IHK-Prüfung wichtig.',
          ar: 'فهم التغليف والوصول للخصائص مهم لمخططات UML ومهام البرمجة الكائنية في امتحان IHK.',
        },
        summary: {
          de: 'Attribute speichern den Zustand von Objekten. Kapselung schützt sie durch private Sichtbarkeit und kontrollierten Zugriff.',
          ar: 'الخصائص تخزن حالة الكائنات. التغليف يحميها بالرؤية الخاصة والوصول المُتحكم.',
        },
      },
    },
    {
      id: 'getter-methods',
      name: { de: 'Getter-Methoden', ar: 'طرق Getter' },
      content: {
        definition: {
          de: 'Getter-Methoden (Accessor-Methoden) geben den Wert eines privaten Attributs zurück, ohne ihn zu verändern. Sie ermöglichen den lesenden Zugriff auf gekapselte Daten.',
          ar: 'طرق Getter (طرق الوصول) تُرجع قيمة خاصية خاصة دون تغييرها. وهي تتيح الوصول القرائي للبيانات المُغلفة.',
        },
        keyPoints: [
          {
            de: 'Namenskonvention: `getAttributname()` – z.B. `getName()`, `getAlter()`, `getPreis()`',
            ar: 'اصطلاح التسمية: `getAttributname()` – مثل `getName()`، `getAlter()`، `getPreis()`',
          },
          {
            de: 'Für boolean-Attribute: `isAttributname()` – z.B. `isAktiv()`, `isVerfuegbar()`',
            ar: 'لخصائص boolean: `isAttributname()` – مثل `isAktiv()`، `isVerfuegbar()`',
          },
          {
            de: 'Getter haben keinen Parameter und geben den Typ des Attributs zurück',
            ar: 'Getter ليس لها معاملات وتُرجع نوع الخاصية',
          },
        ],
        examples: [
          {
            de: '`public String getName() { return this.name; }` – Gibt den Namen des Objekts zurück.',
            ar: '`public String getName() { return this.name; }` – يُرجع اسم الكائن.',
          },
          {
            de: '`public boolean isVerfuegbar() { return this.verfuegbar; }` – Gibt zurück, ob das Objekt verfügbar ist.',
            ar: '`public boolean isVerfuegbar() { return this.verfuegbar; }` – يُرجع ما إذا كان الكائن متاحاً.',
          },
        ],
        examRelevance: {
          de: 'Getter-Methoden müssen in der IHK-Prüfung implementiert und korrekt aufgerufen werden können. Sie sind Bestandteil jeder OOP-Aufgabe.',
          ar: 'يجب تنفيذ طرق Getter واستدعائها بشكل صحيح في امتحان IHK. وهي جزء من كل مهمة OOP.',
        },
        summary: {
          de: 'Getter geben Attributwerte zurück. Konvention: `get` + Attributname. Für boolean: `is` + Attributname.',
          ar: 'Getter تُرجع قيم الخصائص. الاصطلاح: `get` + اسم الخاصية. لـ boolean: `is` + اسم الخاصية.',
        },
      },
    },
    {
      id: 'setter-methods',
      name: { de: 'Setter-Methoden', ar: 'طرق Setter' },
      content: {
        definition: {
          de: 'Setter-Methoden (Mutator-Methoden) setzen den Wert eines privaten Attributs. Sie ermöglichen den schreibenden Zugriff und können dabei Validierungen durchführen.',
          ar: 'طرق Setter (طرق التغيير) تعيّن قيمة خاصية خاصة. وهي تتيح الوصول الكتابي ويمكنها إجراء عمليات التحقق.',
        },
        keyPoints: [
          {
            de: 'Namenskonvention: `setAttributname(Typ wert)` – z.B. `setName(String name)`',
            ar: 'اصطلاح التسمية: `setAttributname(Typ wert)` – مثل `setName(String name)`',
          },
          {
            de: 'Setter können Validierungen enthalten: `if (alter >= 0) this.alter = alter;`',
            ar: 'Setter يمكنها احتواء عمليات تحقق: `if (alter >= 0) this.alter = alter;`',
          },
          {
            de: 'Setter haben void als Rückgabetyp und genau einen Parameter',
            ar: 'Setter لها void كنوع إرجاع ومعامل واحد بالضبط',
          },
        ],
        examples: [
          {
            de: '`public void setPreis(double preis) { if (preis >= 0) { this.preis = preis; } }` – Setzt den Preis nur, wenn er nicht negativ ist.',
            ar: '`public void setPreis(double preis) { if (preis >= 0) { this.preis = preis; } }` – يعيّن السعر فقط إذا لم يكن سالباً.',
          },
        ],
        examRelevance: {
          de: 'Setter mit Validierungslogik sind ein beliebtes Prüfungsthema. Man muss verstehen, wann ein Setter den Wert akzeptiert oder ablehnt.',
          ar: 'Setter مع منطق التحقق هي موضوع امتحاني شائع. يجب فهم متى يقبل Setter القيمة أو يرفضها.',
        },
        summary: {
          de: 'Setter setzen Attributwerte mit optionaler Validierung. Konvention: `set` + Attributname, void-Rückgabe, ein Parameter.',
          ar: 'Setter تعيّن قيم الخصائص مع تحقق اختياري. الاصطلاح: `set` + اسم الخاصية، إرجاع void، معامل واحد.',
        },
      },
    },
    {
      id: 'object-arrays',
      name: { de: 'Objekt-Arrays', ar: 'مصفوفات الكائنات' },
      content: {
        definition: {
          de: 'Ein Objekt-Array speichert Referenzen auf Objekte einer Klasse. Damit können mehrere Objekte gleichen Typs in einer Datenstruktur verwaltet werden, z.B. eine Liste von Mitarbeitern.',
          ar: 'مصفوفة الكائنات تخزن مراجع لكائنات من فئة واحدة. بذلك يمكن إدارة عدة كائنات من نفس النوع في هيكل بيانات واحد، مثل قائمة الموظفين.',
        },
        keyPoints: [
          {
            de: 'Deklaration: `Mitarbeiter[] team = new Mitarbeiter[10];` – Array mit Platz für 10 Mitarbeiter-Objekte',
            ar: 'الإعلان: `Mitarbeiter[] team = new Mitarbeiter[10];` – مصفوفة بمساحة لـ 10 كائنات موظف',
          },
          {
            de: 'Nach der Erstellung enthält das Array `null`-Referenzen – Objekte müssen einzeln erstellt werden',
            ar: 'بعد الإنشاء تحتوي المصفوفة على مراجع `null` – يجب إنشاء الكائنات فردياً',
          },
          {
            de: 'Zugriff auf Methoden: `team[0].getName()` – Erst Index, dann Methodenaufruf',
            ar: 'الوصول للطرق: `team[0].getName()` – الفهرس أولاً، ثم استدعاء الطريقة',
          },
        ],
        examples: [
          {
            de: '`Produkt[] produkte = new Produkt[3]; produkte[0] = new Produkt("Stift", 1.50); produkte[1] = new Produkt("Heft", 2.00);` – Füllt ein Objekt-Array schrittweise.',
            ar: '`Produkt[] produkte = new Produkt[3]; produkte[0] = new Produkt("Stift", 1.50); produkte[1] = new Produkt("Heft", 2.00);` – يملأ مصفوفة كائنات تدريجياً.',
          },
        ],
        examRelevance: {
          de: 'Objekt-Arrays sind der häufigste Datencontainer in IHK-Aufgaben. Man muss Objekte in Arrays speichern, durchlaufen und deren Methoden aufrufen können.',
          ar: 'مصفوفات الكائنات هي حاوية البيانات الأكثر شيوعاً في مهام IHK. يجب تخزين الكائنات في المصفوفات وتمريرها واستدعاء طرقها.',
        },
        summary: {
          de: 'Objekt-Arrays speichern mehrere Objekte gleichen Typs. Erstellung mit new, Elemente sind anfangs null.',
          ar: 'مصفوفات الكائنات تخزن عدة كائنات من نفس النوع. الإنشاء بـ new، العناصر null في البداية.',
        },
      },
    },
    {
      id: 'iterating-objects',
      name: { de: 'Iteration durch Objekte', ar: 'التكرار عبر الكائنات' },
      content: {
        definition: {
          de: 'Die Iteration durch ein Objekt-Array oder eine Objekt-Liste bedeutet, jedes Objekt nacheinander zu besuchen und seine Methoden aufzurufen, um Daten zu lesen oder zu verarbeiten.',
          ar: 'التكرار عبر مصفوفة كائنات أو قائمة كائنات يعني زيارة كل كائن بالترتيب واستدعاء طرقه لقراءة البيانات أو معالجتها.',
        },
        keyPoints: [
          {
            de: 'For-each über Objekte: `for (Mitarbeiter m : mitarbeiter) { System.out.println(m.getName()); }`',
            ar: 'For-each عبر الكائنات: `for (Mitarbeiter m : mitarbeiter) { System.out.println(m.getName()); }`',
          },
          {
            de: 'Null-Check: Wenn das Array nicht voll ist, müssen null-Einträge überprüft werden: `if (m != null)`',
            ar: 'فحص Null: إذا لم تكن المصفوفة ممتلئة، يجب فحص إدخالات null: `if (m != null)`',
          },
          {
            de: 'Kombination mit Filtern: Nur Objekte ausgeben, die eine Bedingung erfüllen',
            ar: 'الجمع مع التصفية: طباعة الكائنات التي تستوفي شرطاً فقط',
          },
        ],
        examples: [
          {
            de: '`double gesamtGehalt = 0; for (Mitarbeiter m : team) { if (m != null) gesamtGehalt += m.getGehalt(); }` – Berechnet die Gesamtgehälter.',
            ar: '`double gesamtGehalt = 0; for (Mitarbeiter m : team) { if (m != null) gesamtGehalt += m.getGehalt(); }` – يحسب إجمالي الرواتب.',
          },
        ],
        examRelevance: {
          de: 'Durch Objekt-Arrays iterieren und dabei Werte aggregieren oder filtern ist eine Kernaufgabe der IHK-Prüfung.',
          ar: 'التكرار عبر مصفوفات الكائنات وتجميع القيم أو تصفيتها هي مهمة أساسية في امتحان IHK.',
        },
        summary: {
          de: 'Iteration durch Objekte: Schleife über Array/Liste, Methodenaufruf auf jedem Element, Null-Check nicht vergessen.',
          ar: 'التكرار عبر الكائنات: حلقة عبر المصفوفة/القائمة، استدعاء الطريقة على كل عنصر، لا تنسَ فحص Null.',
        },
      },
    },
    {
      id: 'creating-objects',
      name: { de: 'Objekte erstellen', ar: 'إنشاء الكائنات' },
      content: {
        definition: {
          de: 'Objekte werden mit dem `new`-Operator und einem Konstruktor erstellt. Der Konstruktor ist eine spezielle Methode, die die Attribute des Objekts initialisiert.',
          ar: 'الكائنات تُنشأ بعامل `new` ومُنشئ. المُنشئ هو طريقة خاصة تهيئ خصائص الكائن.',
        },
        keyPoints: [
          {
            de: 'Konstruktor hat den gleichen Namen wie die Klasse und keinen Rückgabetyp',
            ar: 'المُنشئ له نفس اسم الفئة وليس له نوع إرجاع',
          },
          {
            de: 'Parametrisierter Konstruktor: `public Kunde(String name, int alter)` – Nimmt Initialwerte entgegen',
            ar: 'مُنشئ بمعاملات: `public Kunde(String name, int alter)` – يستقبل قيم أولية',
          },
          {
            de: 'Default-Konstruktor: Wird automatisch erzeugt, wenn kein anderer Konstruktor definiert ist',
            ar: 'المُنشئ الافتراضي: يُنشأ تلقائياً إذا لم يتم تعريف مُنشئ آخر',
          },
        ],
        examples: [
          {
            de: '`class Artikel { String name; double preis; Artikel(String name, double preis) { this.name = name; this.preis = preis; } }` – Konstruktor mit zwei Parametern. Aufruf: `Artikel a = new Artikel("Buch", 19.99);`',
            ar: '`class Artikel { String name; double preis; Artikel(String name, double preis) { this.name = name; this.preis = preis; } }` – مُنشئ بمعاملين. الاستدعاء: `Artikel a = new Artikel("Buch", 19.99);`',
          },
        ],
        examRelevance: {
          de: 'Konstruktoraufrufe und die Zuordnung von Parametern zu Attributen sind häufige IHK-Aufgaben.',
          ar: 'استدعاءات المُنشئ وتعيين المعاملات للخصائص هي مهام شائعة في IHK.',
        },
        summary: {
          de: 'Objekte werden mit `new Klassenname(parameter)` erstellt. Der Konstruktor initialisiert die Attribute.',
          ar: 'الكائنات تُنشأ بـ `new Klassenname(parameter)`. المُنشئ يهيئ الخصائص.',
        },
      },
    },
    {
      id: 'object-comparisons',
      name: { de: 'Objektvergleiche', ar: 'مقارنة الكائنات' },
      content: {
        definition: {
          de: 'Objektvergleiche prüfen, ob zwei Objekte gleich sind. In Java vergleicht `==` die Referenzen (zeigen auf dasselbe Objekt?), während `equals()` den inhaltlichen Vergleich durchführt.',
          ar: 'مقارنة الكائنات تفحص ما إذا كان كائنان متساويين. في Java يقارن `==` المراجع (يشيران لنفس الكائن؟)، بينما `equals()` يجري المقارنة المحتوائية.',
        },
        keyPoints: [
          {
            de: '`==` bei Objekten: Prüft, ob beide Variablen auf dasselbe Objekt im Speicher zeigen',
            ar: '`==` في الكائنات: يفحص ما إذا كان كلا المتغيرين يشيران لنفس الكائن في الذاكرة',
          },
          {
            de: '`equals()`: Vergleicht den Inhalt (muss in der Klasse überschrieben werden)',
            ar: '`equals()`: يقارن المحتوى (يجب إعادة تعريفه في الفئة)',
          },
          {
            de: 'Objekte vergleichen nach Attributen: z.B. zwei Produkte nach Preis sortieren oder vergleichen',
            ar: 'مقارنة الكائنات حسب الخصائص: مثل ترتيب أو مقارنة منتجين حسب السعر',
          },
        ],
        examples: [
          {
            de: '`Kunde k1 = new Kunde("Max"); Kunde k2 = new Kunde("Max"); k1 == k2` ist `false` (verschiedene Objekte), aber `k1.getName().equals(k2.getName())` ist `true`.',
            ar: '`Kunde k1 = new Kunde("Max"); Kunde k2 = new Kunde("Max"); k1 == k2` هو `false` (كائنان مختلفان)، لكن `k1.getName().equals(k2.getName())` هو `true`.',
          },
          {
            de: 'Vergleich nach Attribut: `if (p1.getPreis() > p2.getPreis()) { teurer = p1; }` – Bestimmt das teurere Produkt.',
            ar: 'المقارنة حسب الخاصية: `if (p1.getPreis() > p2.getPreis()) { teurer = p1; }` – يحدد المنتج الأغلى.',
          },
        ],
        examRelevance: {
          de: 'Der Unterschied zwischen Referenz- und Wertvergleich ist ein Klassiker der IHK-Prüfung. Auch das Vergleichen von Objekten nach bestimmten Attributen wird häufig geprüft.',
          ar: 'الفرق بين مقارنة المراجع والقيم هو كلاسيكية في امتحان IHK. مقارنة الكائنات حسب خصائص معينة يُمتحن كثيراً أيضاً.',
        },
        summary: {
          de: '`==` vergleicht Referenzen, `equals()` vergleicht Inhalte. Für Attributvergleiche Getter-Methoden nutzen.',
          ar: '`==` يقارن المراجع، `equals()` يقارن المحتوى. لمقارنة الخصائص استخدم طرق Getter.',
        },
      },
    },
  ],
};
