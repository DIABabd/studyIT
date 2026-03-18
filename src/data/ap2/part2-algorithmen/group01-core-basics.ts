import type { TopicGroup } from '../../../types';

export const coreBasics: TopicGroup = {
  id: 'group01-core-basics',
  name: {
    de: 'Grundlagen der Programmierung',
    ar: 'أساسيات البرمجة',
  },
  description: {
    de: 'Variablen, Datentypen, Kontrollstrukturen und grundlegende Programmierkonzepte',
    ar: 'المتغيرات وأنواع البيانات وهياكل التحكم ومفاهيم البرمجة الأساسية',
  },
  priority: 'very-high',
  topics: [
    {
      id: 'variables',
      name: { de: 'Variablen', ar: 'المتغيرات' },
      content: {
        definition: {
          de: 'Eine Variable ist ein benannter Speicherplatz im Arbeitsspeicher, der einen Wert eines bestimmten Datentyps aufnehmen kann. Der Wert einer Variablen kann während der Programmausführung verändert werden.',
          ar: 'المتغير هو مكان تخزين مسمى في الذاكرة يمكنه استيعاب قيمة من نوع بيانات معين. يمكن تغيير قيمة المتغير أثناء تنفيذ البرنامج.',
        },
        keyPoints: [
          {
            de: 'Variablen müssen vor der Verwendung deklariert werden, z.B. `int alter = 25;`',
            ar: 'يجب الإعلان عن المتغيرات قبل استخدامها، مثل `int alter = 25;`',
          },
          {
            de: 'Der Variablenname sollte aussagekräftig sein und den Inhalt beschreiben (z.B. `anzahlMitarbeiter` statt `x`)',
            ar: 'يجب أن يكون اسم المتغير معبراً ويصف المحتوى (مثل `anzahlMitarbeiter` بدلاً من `x`)',
          },
          {
            de: 'Variablen haben einen Gültigkeitsbereich (Scope), der bestimmt, wo sie im Programm sichtbar sind',
            ar: 'للمتغيرات نطاق صلاحية (Scope) يحدد أين تكون مرئية في البرنامج',
          },
          {
            de: 'Konstanten sind spezielle Variablen, deren Wert nach der Initialisierung nicht mehr geändert werden kann (`final` in Java, `const` in JavaScript)',
            ar: 'الثوابت هي متغيرات خاصة لا يمكن تغيير قيمتها بعد التهيئة (`final` في Java، `const` في JavaScript)',
          },
        ],
        examples: [
          {
            de: 'Deklaration und Initialisierung: `String name = "Max";` – Erstellt eine Variable vom Typ String mit dem Wert "Max".',
            ar: 'الإعلان والتهيئة: `String name = "Max";` – ينشئ متغيراً من نوع String بالقيمة "Max".',
          },
          {
            de: 'Wertänderung: `int zaehler = 0; zaehler = zaehler + 1;` – Der Wert wird von 0 auf 1 erhöht.',
            ar: 'تغيير القيمة: `int zaehler = 0; zaehler = zaehler + 1;` – يتم زيادة القيمة من 0 إلى 1.',
          },
        ],
        examRelevance: {
          de: 'Variablen sind Grundlage jeder Programmieraufgabe in der IHK-Prüfung. Häufig müssen Variablen korrekt deklariert, initialisiert und in Algorithmen verwendet werden.',
          ar: 'المتغيرات هي أساس كل مهمة برمجة في امتحان IHK. غالباً ما يجب الإعلان عن المتغيرات وتهيئتها واستخدامها بشكل صحيح في الخوارزميات.',
        },
        summary: {
          de: 'Variablen sind benannte Speicherplätze mit einem Datentyp, die Werte aufnehmen und ändern können. Sie bilden die Grundlage jedes Programms.',
          ar: 'المتغيرات هي أماكن تخزين مسماة بنوع بيانات يمكنها استيعاب القيم وتغييرها. وهي تشكل أساس كل برنامج.',
        },
      },
    },
    {
      id: 'datatypes',
      name: { de: 'Datentypen', ar: 'أنواع البيانات' },
      content: {
        definition: {
          de: 'Datentypen legen fest, welche Art von Werten eine Variable speichern kann und welche Operationen darauf angewendet werden können. Man unterscheidet zwischen primitiven Datentypen (int, double, boolean, char) und Referenzdatentypen (String, Arrays, Objekte).',
          ar: 'تحدد أنواع البيانات نوع القيم التي يمكن للمتغير تخزينها والعمليات التي يمكن تطبيقها عليها. يتم التمييز بين أنواع البيانات البدائية (int, double, boolean, char) وأنواع البيانات المرجعية (String, Arrays, Objects).',
        },
        keyPoints: [
          {
            de: 'Primitive Datentypen: `int` (Ganzzahl), `double` (Gleitkommazahl), `boolean` (Wahrheitswert), `char` (einzelnes Zeichen)',
            ar: 'أنواع البيانات البدائية: `int` (عدد صحيح)، `double` (عدد عشري)، `boolean` (قيمة منطقية)، `char` (حرف واحد)',
          },
          {
            de: 'Typkonvertierung (Casting): Implizit (automatisch, z.B. int → double) und explizit (manuell, z.B. `(int) 3.7` ergibt 3)',
            ar: 'تحويل النوع (Casting): ضمني (تلقائي، مثل int → double) وصريح (يدوي، مثل `(int) 3.7` ينتج 3)',
          },
          {
            de: 'String ist ein Referenzdatentyp und bietet Methoden wie `length()`, `charAt()`, `substring()`, `equals()`',
            ar: 'String هو نوع بيانات مرجعي ويوفر طرقاً مثل `length()` و `charAt()` و `substring()` و `equals()`',
          },
        ],
        examples: [
          {
            de: '`int ganzzahl = 42;` – Ganzzahl. `double kommazahl = 3.14;` – Gleitkommazahl. `boolean istWahr = true;` – Wahrheitswert. `char buchstabe = \'A\';` – Einzelnes Zeichen.',
            ar: '`int ganzzahl = 42;` – عدد صحيح. `double kommazahl = 3.14;` – عدد عشري. `boolean istWahr = true;` – قيمة منطقية. `char buchstabe = \'A\';` – حرف واحد.',
          },
          {
            de: 'Typkonvertierung: `double d = 5;` (implizit, 5 wird zu 5.0) vs. `int i = (int) 5.9;` (explizit, Ergebnis ist 5, Nachkommastellen werden abgeschnitten).',
            ar: 'تحويل النوع: `double d = 5;` (ضمني، 5 يصبح 5.0) مقابل `int i = (int) 5.9;` (صريح، النتيجة 5، يتم قطع الأرقام العشرية).',
          },
        ],
        examRelevance: {
          de: 'In der IHK-Prüfung wird häufig nach den Unterschieden zwischen Datentypen und nach korrekter Typkonvertierung gefragt. Auch die Wahl des passenden Datentyps für eine Aufgabe ist prüfungsrelevant.',
          ar: 'في امتحان IHK غالباً ما يُسأل عن الفروق بين أنواع البيانات وعن تحويل النوع الصحيح. كما أن اختيار نوع البيانات المناسب للمهمة مهم للامتحان.',
        },
        summary: {
          de: 'Datentypen definieren die Art der Werte und die möglichen Operationen. Primitive Typen speichern direkt Werte, Referenztypen verweisen auf Objekte im Speicher.',
          ar: 'تحدد أنواع البيانات نوع القيم والعمليات الممكنة. الأنواع البدائية تخزن القيم مباشرة، والأنواع المرجعية تشير إلى كائنات في الذاكرة.',
        },
      },
    },
    {
      id: 'assignment-operations',
      name: { de: 'Zuweisungsoperationen', ar: 'عمليات الإسناد' },
      content: {
        definition: {
          de: 'Zuweisungsoperationen speichern einen Wert in einer Variablen. Der Zuweisungsoperator `=` weist der Variablen auf der linken Seite den Wert des Ausdrucks auf der rechten Seite zu. Es gibt auch zusammengesetzte Zuweisungsoperatoren wie `+=`, `-=`, `*=`, `/=`.',
          ar: 'عمليات الإسناد تخزن قيمة في متغير. عامل الإسناد `=` يعين للمتغير على الجانب الأيسر قيمة التعبير على الجانب الأيمن. هناك أيضاً عوامل إسناد مركبة مثل `+=` و `-=` و `*=` و `/=`.',
        },
        keyPoints: [
          {
            de: 'Einfache Zuweisung: `x = 10;` – Der Wert 10 wird in x gespeichert',
            ar: 'إسناد بسيط: `x = 10;` – القيمة 10 تُخزن في x',
          },
          {
            de: 'Zusammengesetzte Zuweisung: `x += 5;` ist eine Kurzform für `x = x + 5;`',
            ar: 'إسناد مركب: `x += 5;` هو اختصار لـ `x = x + 5;`',
          },
          {
            de: 'Inkrement/Dekrement: `x++` erhöht x um 1, `x--` verringert x um 1',
            ar: 'الزيادة/النقصان: `x++` يزيد x بمقدار 1، `x--` ينقص x بمقدار 1',
          },
          {
            de: 'Die rechte Seite wird zuerst ausgewertet, dann wird das Ergebnis der Variablen auf der linken Seite zugewiesen',
            ar: 'يتم تقييم الجانب الأيمن أولاً، ثم يتم إسناد النتيجة للمتغير على الجانب الأيسر',
          },
        ],
        examples: [
          {
            de: '`int summe = 0; summe += 10; summe += 20;` – Nach Ausführung hat summe den Wert 30.',
            ar: '`int summe = 0; summe += 10; summe += 20;` – بعد التنفيذ تكون قيمة summe هي 30.',
          },
          {
            de: '`int a = 5; int b = a; a = 10;` – b bleibt 5, weil bei primitiven Typen der Wert kopiert wird.',
            ar: '`int a = 5; int b = a; a = 10;` – b تبقى 5، لأنه في الأنواع البدائية يتم نسخ القيمة.',
          },
        ],
        examRelevance: {
          de: 'Zuweisungsoperationen kommen in fast jeder Programmieraufgabe vor. Besonders das Nachvollziehen von Wertänderungen über mehrere Zuweisungen hinweg (Trace-Tabellen) ist ein häufiges Prüfungsformat.',
          ar: 'عمليات الإسناد تظهر في كل مهمة برمجة تقريباً. خاصة تتبع تغييرات القيم عبر عدة عمليات إسناد (جداول التتبع) هو تنسيق امتحان شائع.',
        },
        summary: {
          de: 'Zuweisungen speichern Werte in Variablen. Der Operator `=` weist zu, zusammengesetzte Operatoren wie `+=` kombinieren Berechnung und Zuweisung.',
          ar: 'عمليات الإسناد تخزن القيم في المتغيرات. العامل `=` يُسند، والعوامل المركبة مثل `+=` تجمع بين الحساب والإسناد.',
        },
      },
    },
    {
      id: 'conditions',
      name: { de: 'Bedingungen (if/else/switch)', ar: 'الشروط (if/else/switch)' },
      content: {
        definition: {
          de: 'Bedingungen ermöglichen es, den Programmfluss abhängig von Wahrheitswerten zu steuern. Mit `if/else` werden Entscheidungen getroffen, mit `switch/case` wird ein Wert gegen mehrere Fälle geprüft.',
          ar: 'تتيح الشروط التحكم في سير البرنامج بناءً على القيم المنطقية. باستخدام `if/else` يتم اتخاذ القرارات، وباستخدام `switch/case` يتم فحص قيمة مقابل حالات متعددة.',
        },
        keyPoints: [
          {
            de: '`if (bedingung) { ... }` – Code wird nur ausgeführt, wenn die Bedingung wahr ist',
            ar: '`if (bedingung) { ... }` – يتم تنفيذ الكود فقط عندما يكون الشرط صحيحاً',
          },
          {
            de: '`else if` ermöglicht das Prüfen weiterer Bedingungen, `else` fängt alle übrigen Fälle ab',
            ar: '`else if` يتيح فحص شروط إضافية، و `else` يلتقط جميع الحالات المتبقية',
          },
          {
            de: '`switch` eignet sich besonders für die Prüfung einer Variablen gegen viele feste Werte – jeder `case` muss mit `break` beendet werden',
            ar: '`switch` مناسب بشكل خاص لفحص متغير مقابل قيم ثابتة كثيرة – كل `case` يجب أن ينتهي بـ `break`',
          },
          {
            de: 'Verschachtelte if-Anweisungen sind möglich, sollten aber für die Lesbarkeit vermieden werden',
            ar: 'عبارات if المتداخلة ممكنة، لكن يجب تجنبها من أجل سهولة القراءة',
          },
        ],
        examples: [
          {
            de: '`if (note >= 1 && note <= 3) { ergebnis = "bestanden"; } else { ergebnis = "nicht bestanden"; }` – Prüft, ob eine Note im Bereich 1-3 liegt.',
            ar: '`if (note >= 1 && note <= 3) { ergebnis = "bestanden"; } else { ergebnis = "nicht bestanden"; }` – يفحص ما إذا كانت الدرجة في النطاق 1-3.',
          },
          {
            de: '`switch (wochentag) { case 1: tag = "Montag"; break; case 2: tag = "Dienstag"; break; default: tag = "unbekannt"; }` – Ordnet einer Zahl den Wochentag zu.',
            ar: '`switch (wochentag) { case 1: tag = "Montag"; break; case 2: tag = "Dienstag"; break; default: tag = "unbekannt"; }` – يعيّن يوم الأسبوع لرقم.',
          },
        ],
        examRelevance: {
          de: 'Bedingungen sind zentral in der IHK-Prüfung. Typische Aufgaben: Programmablauf nachvollziehen, fehlende Bedingungen ergänzen, oder verschachtelte if-Strukturen analysieren.',
          ar: 'الشروط محورية في امتحان IHK. مهام نموذجية: تتبع سير البرنامج، إكمال الشروط المفقودة، أو تحليل هياكل if المتداخلة.',
        },
        summary: {
          de: 'Bedingungen steuern den Programmfluss. `if/else` für allgemeine Entscheidungen, `switch/case` für die Prüfung gegen mehrere feste Werte.',
          ar: 'الشروط تتحكم في سير البرنامج. `if/else` للقرارات العامة، `switch/case` للفحص مقابل قيم ثابتة متعددة.',
        },
      },
    },
    {
      id: 'boolean-logic',
      name: { de: 'Boolesche Logik (AND/OR/NOT)', ar: 'المنطق البولي (AND/OR/NOT)' },
      content: {
        definition: {
          de: 'Boolesche Logik verknüpft Wahrheitswerte miteinander. Die Operatoren AND (&&), OR (||) und NOT (!) kombinieren oder negieren boolesche Ausdrücke, um komplexe Bedingungen zu formulieren.',
          ar: 'المنطق البولي يربط القيم المنطقية ببعضها البعض. العوامل AND (&&) و OR (||) و NOT (!) تجمع أو تنفي التعبيرات المنطقية لصياغة شروط معقدة.',
        },
        keyPoints: [
          {
            de: 'AND (&&): Beide Bedingungen müssen wahr sein → `true && true = true`, alle anderen Kombinationen ergeben `false`',
            ar: 'AND (&&): كلا الشرطين يجب أن يكونا صحيحين → `true && true = true`، جميع التركيبات الأخرى تنتج `false`',
          },
          {
            de: 'OR (||): Mindestens eine Bedingung muss wahr sein → `false || false = false`, alle anderen Kombinationen ergeben `true`',
            ar: 'OR (||): شرط واحد على الأقل يجب أن يكون صحيحاً → `false || false = false`، جميع التركيبات الأخرى تنتج `true`',
          },
          {
            de: 'NOT (!): Kehrt den Wahrheitswert um → `!true = false`, `!false = true`',
            ar: 'NOT (!): يعكس القيمة المنطقية → `!true = false`، `!false = true`',
          },
          {
            de: 'Short-Circuit-Auswertung: Bei && wird der zweite Ausdruck nicht ausgewertet, wenn der erste false ist; bei || nicht, wenn der erste true ist',
            ar: 'التقييم القصير: في && لا يتم تقييم التعبير الثاني إذا كان الأول false؛ في || لا يتم إذا كان الأول true',
          },
        ],
        examples: [
          {
            de: '`if (alter >= 18 && fuehrerschein == true)` – Prüft, ob die Person volljährig UND einen Führerschein hat.',
            ar: '`if (alter >= 18 && fuehrerschein == true)` – يفحص ما إذا كان الشخص بالغاً وَيملك رخصة قيادة.',
          },
          {
            de: 'De-Morgan-Regeln: `!(a && b)` ist gleich `!a || !b` und `!(a || b)` ist gleich `!a && !b`. Diese Umformungen sind prüfungsrelevant.',
            ar: 'قواعد دي مورغان: `!(a && b)` يساوي `!a || !b` و `!(a || b)` يساوي `!a && !b`. هذه التحويلات مهمة للامتحان.',
          },
        ],
        examRelevance: {
          de: 'Wahrheitstabellen und De-Morgan-Regeln werden in der IHK-Prüfung häufig abgefragt. Typische Aufgabe: Einen booleschen Ausdruck vereinfachen oder das Ergebnis für gegebene Werte bestimmen.',
          ar: 'جداول الحقيقة وقواعد دي مورغان يتم سؤالها كثيراً في امتحان IHK. مهمة نموذجية: تبسيط تعبير منطقي أو تحديد النتيجة لقيم معطاة.',
        },
        summary: {
          de: 'Boolesche Logik kombiniert Wahrheitswerte mit AND, OR, NOT. Wichtig sind Wahrheitstabellen und De-Morgan-Regeln.',
          ar: 'المنطق البولي يجمع القيم المنطقية مع AND و OR و NOT. جداول الحقيقة وقواعد دي مورغان مهمة.',
        },
      },
    },
    {
      id: 'comparison-operators',
      name: { de: 'Vergleichsoperatoren', ar: 'عوامل المقارنة' },
      content: {
        definition: {
          de: 'Vergleichsoperatoren vergleichen zwei Werte und liefern einen booleschen Wert (true/false) als Ergebnis. Sie werden in Bedingungen und Schleifen verwendet.',
          ar: 'عوامل المقارنة تقارن قيمتين وتُرجع قيمة منطقية (true/false) كنتيجة. تُستخدم في الشروط والحلقات.',
        },
        keyPoints: [
          {
            de: '`==` (gleich), `!=` (ungleich), `<` (kleiner), `>` (größer), `<=` (kleiner-gleich), `>=` (größer-gleich)',
            ar: '`==` (يساوي)، `!=` (لا يساوي)، `<` (أصغر)، `>` (أكبر)، `<=` (أصغر أو يساوي)، `>=` (أكبر أو يساوي)',
          },
          {
            de: 'Bei Objekten (z.B. Strings in Java) muss `.equals()` statt `==` verwendet werden, da `==` Referenzen vergleicht',
            ar: 'في الكائنات (مثل Strings في Java) يجب استخدام `.equals()` بدلاً من `==`، لأن `==` يقارن المراجع',
          },
          {
            de: 'Vergleichsoperatoren haben eine niedrigere Priorität als arithmetische Operatoren: `5 + 3 > 7` wird als `(5 + 3) > 7` ausgewertet',
            ar: 'عوامل المقارنة لها أولوية أقل من العوامل الحسابية: `5 + 3 > 7` يتم تقييمه كـ `(5 + 3) > 7`',
          },
        ],
        examples: [
          {
            de: '`if (punkte >= 50) { bestanden = true; }` – Der Schüler hat bestanden, wenn er mindestens 50 Punkte erreicht hat.',
            ar: '`if (punkte >= 50) { bestanden = true; }` – الطالب نجح إذا حقق 50 نقطة على الأقل.',
          },
          {
            de: '`String a = "Hallo"; String b = "Hallo"; a.equals(b)` ergibt `true`, aber `a == b` kann `false` ergeben (Referenzvergleich).',
            ar: '`String a = "Hallo"; String b = "Hallo"; a.equals(b)` ينتج `true`، لكن `a == b` قد ينتج `false` (مقارنة المراجع).',
          },
        ],
        examRelevance: {
          de: 'Vergleichsoperatoren sind Grundlage für Bedingungen und Schleifen. In der Prüfung muss man den Unterschied zwischen `==` und `.equals()` kennen und Vergleiche korrekt auswerten können.',
          ar: 'عوامل المقارنة هي أساس الشروط والحلقات. في الامتحان يجب معرفة الفرق بين `==` و `.equals()` والقدرة على تقييم المقارنات بشكل صحيح.',
        },
        summary: {
          de: 'Vergleichsoperatoren vergleichen Werte und liefern true/false. Bei Objekten `.equals()` verwenden, nicht `==`.',
          ar: 'عوامل المقارنة تقارن القيم وتُرجع true/false. في الكائنات استخدم `.equals()` وليس `==`.',
        },
      },
    },
    {
      id: 'loops',
      name: { de: 'Schleifen (for/while/do-while)', ar: 'الحلقات (for/while/do-while)' },
      content: {
        definition: {
          de: 'Schleifen wiederholen einen Codeblock, solange eine Bedingung erfüllt ist. Es gibt drei Hauptarten: `for` (zählergesteuert), `while` (kopfgesteuert) und `do-while` (fußgesteuert, mindestens ein Durchlauf).',
          ar: 'الحلقات تكرر كتلة كود طالما أن شرطاً ما محقق. هناك ثلاثة أنواع رئيسية: `for` (بعداد)، `while` (مُتحكمة من الرأس) و `do-while` (مُتحكمة من القاع، تنفيذ مرة واحدة على الأقل).',
        },
        keyPoints: [
          {
            de: '`for (int i = 0; i < n; i++)` – Wird verwendet, wenn die Anzahl der Durchläufe bekannt ist',
            ar: '`for (int i = 0; i < n; i++)` – يُستخدم عندما يكون عدد التكرارات معروفاً',
          },
          {
            de: '`while (bedingung)` – Prüft die Bedingung vor jedem Durchlauf; kann 0 Mal ausgeführt werden',
            ar: '`while (bedingung)` – يفحص الشرط قبل كل تكرار؛ يمكن أن يُنفذ 0 مرات',
          },
          {
            de: '`do { ... } while (bedingung);` – Prüft die Bedingung nach jedem Durchlauf; wird mindestens 1 Mal ausgeführt',
            ar: '`do { ... } while (bedingung);` – يفحص الشرط بعد كل تكرار؛ يُنفذ مرة واحدة على الأقل',
          },
          {
            de: 'Endlosschleifen entstehen, wenn die Abbruchbedingung nie erfüllt wird – ein häufiger Programmierfehler',
            ar: 'الحلقات اللانهائية تنشأ عندما لا يتحقق شرط الإنهاء أبداً – وهو خطأ برمجي شائع',
          },
        ],
        examples: [
          {
            de: '`for (int i = 1; i <= 10; i++) { System.out.println(i); }` – Gibt die Zahlen 1 bis 10 aus.',
            ar: '`for (int i = 1; i <= 10; i++) { System.out.println(i); }` – يطبع الأرقام من 1 إلى 10.',
          },
          {
            de: '`int eingabe; do { eingabe = scanner.nextInt(); } while (eingabe < 0);` – Liest Eingaben, bis eine nicht-negative Zahl eingegeben wird.',
            ar: '`int eingabe; do { eingabe = scanner.nextInt(); } while (eingabe < 0);` – يقرأ المدخلات حتى يتم إدخال رقم غير سالب.',
          },
        ],
        examRelevance: {
          de: 'Schleifen sind in der IHK-Prüfung allgegenwärtig. Typische Aufgaben: Schleifendurchläufe zählen, Ausgabe einer Schleife bestimmen, die richtige Schleifenart wählen.',
          ar: 'الحلقات موجودة في كل مكان في امتحان IHK. مهام نموذجية: عد تكرارات الحلقة، تحديد مخرجات حلقة، اختيار نوع الحلقة الصحيح.',
        },
        summary: {
          de: 'Schleifen wiederholen Code: `for` bei bekannter Anzahl, `while` mit Vorbedingung, `do-while` mit Nachbedingung (mindestens 1 Durchlauf).',
          ar: 'الحلقات تكرر الكود: `for` عند عدد معروف، `while` بشرط مسبق، `do-while` بشرط لاحق (تكرار واحد على الأقل).',
        },
      },
    },
    {
      id: 'counters-accumulators',
      name: { de: 'Zähler und Akkumulatoren', ar: 'العدادات والمراكمات' },
      content: {
        definition: {
          de: 'Zähler und Akkumulatoren sind Variablen, die innerhalb von Schleifen verwendet werden, um Werte zu zählen oder aufzuaddieren. Ein Zähler erhöht sich bei jedem Durchlauf um 1, ein Akkumulator summiert Werte auf.',
          ar: 'العدادات والمراكمات هي متغيرات تُستخدم داخل الحلقات لعد القيم أو جمعها. العداد يزداد بمقدار 1 في كل تكرار، والمراكم يجمع القيم.',
        },
        keyPoints: [
          {
            de: 'Zähler werden vor der Schleife mit 0 initialisiert und innerhalb der Schleife um 1 erhöht: `zaehler++`',
            ar: 'العدادات تُهيأ بالقيمة 0 قبل الحلقة وتُزاد بمقدار 1 داخل الحلقة: `zaehler++`',
          },
          {
            de: 'Akkumulatoren summieren Werte auf: `summe += wert;` addiert den aktuellen Wert zur Gesamtsumme',
            ar: 'المراكمات تجمع القيم: `summe += wert;` تضيف القيمة الحالية إلى المجموع الكلي',
          },
          {
            de: 'Durchschnittsberechnung: Summe aller Werte geteilt durch den Zähler: `durchschnitt = summe / zaehler`',
            ar: 'حساب المتوسط: مجموع جميع القيم مقسوماً على العداد: `durchschnitt = summe / zaehler`',
          },
        ],
        examples: [
          {
            de: '`int zaehler = 0; int summe = 0; for (int i = 0; i < noten.length; i++) { summe += noten[i]; zaehler++; } double schnitt = (double) summe / zaehler;` – Berechnet den Notendurchschnitt.',
            ar: '`int zaehler = 0; int summe = 0; for (int i = 0; i < noten.length; i++) { summe += noten[i]; zaehler++; } double schnitt = (double) summe / zaehler;` – يحسب متوسط الدرجات.',
          },
          {
            de: 'Bedingter Zähler: `int anzahlBestanden = 0; for (...) { if (note <= 4) anzahlBestanden++; }` – Zählt nur die bestandenen Noten.',
            ar: 'عداد مشروط: `int anzahlBestanden = 0; for (...) { if (note <= 4) anzahlBestanden++; }` – يعد فقط الدرجات الناجحة.',
          },
        ],
        examRelevance: {
          de: 'Zähler und Akkumulatoren sind Standardmuster in IHK-Algorithmusaufgaben. Häufig muss man Summen, Durchschnitte oder Anzahlen bestimmter Werte berechnen.',
          ar: 'العدادات والمراكمات هي أنماط قياسية في مهام الخوارزميات في IHK. غالباً ما يجب حساب المجاميع والمتوسطات أو أعداد قيم معينة.',
        },
        summary: {
          de: 'Zähler zählen Durchläufe oder Treffer, Akkumulatoren summieren Werte. Beide werden vor der Schleife initialisiert und innerhalb aktualisiert.',
          ar: 'العدادات تعد التكرارات أو المطابقات، والمراكمات تجمع القيم. كلاهما يُهيأ قبل الحلقة ويُحدّث داخلها.',
        },
      },
    },
    {
      id: 'control-flow',
      name: { de: 'Kontrollfluss (break/continue)', ar: 'التحكم في التدفق (break/continue)' },
      content: {
        definition: {
          de: '`break` und `continue` sind Anweisungen zur Steuerung des Schleifenablaufs. `break` beendet die Schleife sofort, `continue` überspringt den Rest des aktuellen Durchlaufs und springt zur nächsten Iteration.',
          ar: '`break` و `continue` هي تعليمات للتحكم في سير الحلقة. `break` ينهي الحلقة فوراً، `continue` يتخطى بقية التكرار الحالي وينتقل إلى التكرار التالي.',
        },
        keyPoints: [
          {
            de: '`break` beendet die gesamte Schleife – der Code nach der Schleife wird als nächstes ausgeführt',
            ar: '`break` ينهي الحلقة بالكامل – الكود بعد الحلقة يُنفذ بعد ذلك',
          },
          {
            de: '`continue` überspringt nur den Rest des aktuellen Durchlaufs – die Schleife läuft mit dem nächsten Durchlauf weiter',
            ar: '`continue` يتخطى فقط بقية التكرار الحالي – الحلقة تستمر مع التكرار التالي',
          },
          {
            de: '`break` wird oft bei Suchaufgaben verwendet: Sobald das Element gefunden ist, wird die Schleife abgebrochen',
            ar: '`break` يُستخدم غالباً في مهام البحث: بمجرد العثور على العنصر، يتم إنهاء الحلقة',
          },
        ],
        examples: [
          {
            de: 'Suche mit break: `for (int i = 0; i < arr.length; i++) { if (arr[i] == gesucht) { position = i; break; } }` – Stoppt, sobald das gesuchte Element gefunden wurde.',
            ar: 'بحث مع break: `for (int i = 0; i < arr.length; i++) { if (arr[i] == gesucht) { position = i; break; } }` – يتوقف بمجرد العثور على العنصر المطلوب.',
          },
          {
            de: 'Überspringen mit continue: `for (int i = 0; i < arr.length; i++) { if (arr[i] < 0) continue; summe += arr[i]; }` – Negative Werte werden übersprungen.',
            ar: 'تخطي مع continue: `for (int i = 0; i < arr.length; i++) { if (arr[i] < 0) continue; summe += arr[i]; }` – يتم تخطي القيم السالبة.',
          },
        ],
        examRelevance: {
          de: 'In der IHK-Prüfung muss man den Unterschied zwischen break und continue verstehen und den Ablauf einer Schleife mit diesen Anweisungen nachvollziehen können.',
          ar: 'في امتحان IHK يجب فهم الفرق بين break و continue والقدرة على تتبع سير حلقة تحتوي على هذه التعليمات.',
        },
        summary: {
          de: '`break` beendet die Schleife komplett, `continue` überspringt den aktuellen Durchlauf. Beide steuern den Schleifenablauf gezielt.',
          ar: '`break` ينهي الحلقة بالكامل، `continue` يتخطى التكرار الحالي. كلاهما يتحكم في سير الحلقة بشكل مستهدف.',
        },
      },
    },
    {
      id: 'input-output-logic',
      name: { de: 'Ein-/Ausgabelogik', ar: 'منطق الإدخال/الإخراج' },
      content: {
        definition: {
          de: 'Ein-/Ausgabelogik beschreibt, wie ein Programm Daten vom Benutzer entgegennimmt (Eingabe) und Ergebnisse ausgibt (Ausgabe). In Java wird häufig `Scanner` für die Eingabe und `System.out.println()` für die Ausgabe verwendet.',
          ar: 'منطق الإدخال/الإخراج يصف كيف يستقبل البرنامج البيانات من المستخدم (إدخال) ويعرض النتائج (إخراج). في Java يُستخدم غالباً `Scanner` للإدخال و `System.out.println()` للإخراج.',
        },
        keyPoints: [
          {
            de: 'Eingabe: `Scanner scanner = new Scanner(System.in); int zahl = scanner.nextInt();` – Liest eine Ganzzahl vom Benutzer',
            ar: 'إدخال: `Scanner scanner = new Scanner(System.in); int zahl = scanner.nextInt();` – يقرأ عدداً صحيحاً من المستخدم',
          },
          {
            de: 'Ausgabe: `System.out.println("Ergebnis: " + wert);` – Gibt Text mit Zeilenumbruch aus',
            ar: 'إخراج: `System.out.println("Ergebnis: " + wert);` – يطبع نصاً مع سطر جديد',
          },
          {
            de: 'Formatierte Ausgabe: `System.out.printf("Preis: %.2f Euro%n", preis);` – Gibt den Preis mit 2 Nachkommastellen aus',
            ar: 'إخراج منسق: `System.out.printf("Preis: %.2f Euro%n", preis);` – يطبع السعر بمنزلتين عشريتين',
          },
        ],
        examples: [
          {
            de: 'Interaktive Eingabe: `System.out.print("Bitte Name eingeben: "); String name = scanner.nextLine(); System.out.println("Hallo, " + name + "!");`',
            ar: 'إدخال تفاعلي: `System.out.print("Bitte Name eingeben: "); String name = scanner.nextLine(); System.out.println("Hallo, " + name + "!");`',
          },
          {
            de: 'In Pseudocode: `EINGABE zahl` / `AUSGABE "Das Ergebnis ist: " + ergebnis` – Vereinfachte Darstellung für Algorithmen.',
            ar: 'في الشفرة الوهمية: `EINGABE zahl` / `AUSGABE "Das Ergebnis ist: " + ergebnis` – تمثيل مبسط للخوارزميات.',
          },
        ],
        examRelevance: {
          de: 'In der IHK-Prüfung wird E/A-Logik oft in Pseudocode dargestellt. Man muss verstehen, wann Eingaben gelesen und Ausgaben erzeugt werden.',
          ar: 'في امتحان IHK يتم تمثيل منطق الإدخال/الإخراج غالباً بالشفرة الوهمية. يجب فهم متى تُقرأ المدخلات ومتى تُنتج المخرجات.',
        },
        summary: {
          de: 'E/A-Logik regelt die Kommunikation zwischen Programm und Benutzer: Eingaben werden eingelesen, verarbeitet und als Ausgabe dargestellt.',
          ar: 'منطق الإدخال/الإخراج ينظم التواصل بين البرنامج والمستخدم: المدخلات تُقرأ وتُعالج وتُعرض كمخرجات.',
        },
      },
    },
  ],
};
