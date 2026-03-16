import type { TopicGroup } from '../../../types';

export const functionsMethods: TopicGroup = {
  id: 'group03-functions-methods',
  name: {
    de: 'Funktionen und Methoden',
    ar: 'الدوال والطرق',
  },
  description: {
    de: 'Definition von Funktionen, Parameter, Rückgabewerte, Variablen-Scope und Rekursion',
    ar: 'تعريف الدوال، المعاملات، القيم المُرجعة، نطاق المتغيرات والتكرار الذاتي',
  },
  topics: [
    {
      id: 'function-definition',
      name: { de: 'Funktionsdefinition', ar: 'تعريف الدوال' },
      content: {
        definition: {
          de: 'Eine Funktion (in Java: Methode) ist ein benannter Block von Anweisungen, der eine bestimmte Aufgabe erfüllt. Funktionen fördern die Wiederverwendbarkeit und Übersichtlichkeit von Code.',
          ar: 'الدالة (في Java: Method) هي كتلة مسماة من التعليمات تؤدي مهمة معينة. الدوال تعزز إعادة استخدام الكود ووضوحه.',
        },
        keyPoints: [
          {
            de: 'Syntax: `Rückgabetyp methodenName(Parameter) { Anweisungen; return wert; }`',
            ar: 'الصياغة: `Rückgabetyp methodenName(Parameter) { Anweisungen; return wert; }`',
          },
          {
            de: 'Methoden ohne Rückgabewert verwenden `void`: `public void gruss() { System.out.println("Hallo"); }`',
            ar: 'الطرق بدون قيمة مُرجعة تستخدم `void`: `public void gruss() { System.out.println("Hallo"); }`',
          },
          {
            de: 'Methoden sollten genau eine Aufgabe erfüllen (Single Responsibility Principle)',
            ar: 'يجب أن تؤدي الطرق مهمة واحدة بالضبط (مبدأ المسؤولية الواحدة)',
          },
          {
            de: 'Methodennamen sollten Verben sein und beschreiben, was die Methode tut: `berechneGesamtpreis()`, `pruefeEingabe()`',
            ar: 'أسماء الطرق يجب أن تكون أفعالاً وتصف ما تفعله الطريقة: `berechneGesamtpreis()`، `pruefeEingabe()`',
          },
        ],
        examples: [
          {
            de: '`public static int quadrat(int zahl) { return zahl * zahl; }` – Berechnet das Quadrat einer Zahl und gibt es zurück.',
            ar: '`public static int quadrat(int zahl) { return zahl * zahl; }` – يحسب مربع عدد ويُرجعه.',
          },
          {
            de: 'Aufruf: `int ergebnis = quadrat(5);` – ergebnis hat den Wert 25.',
            ar: 'الاستدعاء: `int ergebnis = quadrat(5);` – ergebnis تحمل القيمة 25.',
          },
        ],
        examRelevance: {
          de: 'In der IHK-Prüfung muss man Methoden lesen, verstehen und schreiben können. Typisch: Eine Methode ergänzen oder den Rückgabewert bestimmen.',
          ar: 'في امتحان IHK يجب قراءة الطرق وفهمها وكتابتها. نموذجي: إكمال طريقة أو تحديد القيمة المُرجعة.',
        },
        summary: {
          de: 'Funktionen/Methoden kapseln wiederverwendbare Logik. Sie haben einen Rückgabetyp, einen Namen und optionale Parameter.',
          ar: 'الدوال/الطرق تغلف المنطق القابل لإعادة الاستخدام. لها نوع إرجاع واسم ومعاملات اختيارية.',
        },
      },
    },
    {
      id: 'parameters',
      name: { de: 'Parameter', ar: 'المعاملات' },
      content: {
        definition: {
          de: 'Parameter sind Variablen in der Methodensignatur, die beim Aufruf der Methode Werte entgegennehmen. Sie ermöglichen es, Daten an eine Methode zu übergeben.',
          ar: 'المعاملات هي متغيرات في توقيع الطريقة تستقبل القيم عند استدعاء الطريقة. وهي تتيح تمرير البيانات إلى طريقة.',
        },
        keyPoints: [
          {
            de: 'Formale Parameter: In der Methodendefinition deklariert – `void setName(String name)`',
            ar: 'المعاملات الرسمية: مُعلنة في تعريف الطريقة – `void setName(String name)`',
          },
          {
            de: 'Aktuelle Parameter (Argumente): Beim Aufruf übergebene Werte – `setName("Max")`',
            ar: 'المعاملات الفعلية (الحجج): القيم المُمررة عند الاستدعاء – `setName("Max")`',
          },
          {
            de: 'Call by Value: Primitive Typen werden als Kopie übergeben – Änderungen in der Methode wirken sich nicht auf das Original aus',
            ar: 'Call by Value: الأنواع البدائية تُمرر كنسخة – التغييرات في الطريقة لا تؤثر على الأصل',
          },
          {
            de: 'Bei Referenztypen (Objekte, Arrays) wird die Referenz kopiert – Änderungen am Objekt sind außerhalb sichtbar',
            ar: 'في الأنواع المرجعية (الكائنات، المصفوفات) يتم نسخ المرجع – التغييرات على الكائن مرئية خارجياً',
          },
        ],
        examples: [
          {
            de: '`public static double berechnePreis(double netto, double mwst) { return netto * (1 + mwst / 100); }` Aufruf: `berechnePreis(100.0, 19.0)` ergibt 119.0.',
            ar: '`public static double berechnePreis(double netto, double mwst) { return netto * (1 + mwst / 100); }` الاستدعاء: `berechnePreis(100.0, 19.0)` ينتج 119.0.',
          },
          {
            de: 'Überladung: `int addiere(int a, int b)` und `double addiere(double a, double b)` – Gleicher Name, verschiedene Parameter.',
            ar: 'التحميل الزائد: `int addiere(int a, int b)` و `double addiere(double a, double b)` – نفس الاسم، معاملات مختلفة.',
          },
        ],
        examRelevance: {
          de: 'Parameter und ihre Übergabearten sind IHK-relevant. Man muss wissen, ob sich Änderungen an Parametern auf die aufrufende Methode auswirken.',
          ar: 'المعاملات وطرق تمريرها مهمة لـ IHK. يجب معرفة ما إذا كانت التغييرات على المعاملات تؤثر على الطريقة المُستدعية.',
        },
        summary: {
          de: 'Parameter übergeben Daten an Methoden. Primitive Typen werden als Kopie übergeben (Call by Value), bei Objekten wird die Referenz kopiert.',
          ar: 'المعاملات تمرر البيانات للطرق. الأنواع البدائية تُمرر كنسخة (Call by Value)، في الكائنات يتم نسخ المرجع.',
        },
      },
    },
    {
      id: 'return-values',
      name: { de: 'Rückgabewerte', ar: 'القيم المُرجعة' },
      content: {
        definition: {
          de: 'Der Rückgabewert ist das Ergebnis, das eine Methode nach ihrer Ausführung an den Aufrufer zurückliefert. Der Rückgabetyp wird in der Methodensignatur festgelegt, der Wert mit `return` zurückgegeben.',
          ar: 'القيمة المُرجعة هي النتيجة التي تُعيدها الطريقة إلى المُستدعي بعد تنفيذها. يتم تحديد نوع الإرجاع في توقيع الطريقة، ويتم إرجاع القيمة بـ `return`.',
        },
        keyPoints: [
          {
            de: '`return` beendet die Methode sofort und gibt den angegebenen Wert zurück',
            ar: '`return` ينهي الطريقة فوراً ويُرجع القيمة المحددة',
          },
          {
            de: 'Der Rückgabetyp muss zum zurückgegebenen Wert passen: `int`-Methode muss `int` zurückgeben',
            ar: 'نوع الإرجاع يجب أن يتطابق مع القيمة المُرجعة: طريقة `int` يجب أن تُرجع `int`',
          },
          {
            de: '`void`-Methoden haben keinen Rückgabewert, können aber `return;` zur vorzeitigen Beendigung verwenden',
            ar: 'طرق `void` ليس لها قيمة مُرجعة، لكنها تستطيع استخدام `return;` للإنهاء المبكر',
          },
        ],
        examples: [
          {
            de: '`public static boolean istGerade(int zahl) { return zahl % 2 == 0; }` – Gibt `true` zurück, wenn die Zahl gerade ist.',
            ar: '`public static boolean istGerade(int zahl) { return zahl % 2 == 0; }` – يُرجع `true` إذا كان العدد زوجياً.',
          },
          {
            de: '`public static String begruessung(String name) { return "Hallo, " + name + "!"; }` – Gibt einen formatierten String zurück.',
            ar: '`public static String begruessung(String name) { return "Hallo, " + name + "!"; }` – يُرجع نصاً منسقاً.',
          },
        ],
        examRelevance: {
          de: 'Den Rückgabewert einer Methode für gegebene Parameter zu bestimmen ist eine Standardaufgabe in der IHK-Prüfung.',
          ar: 'تحديد القيمة المُرجعة لطريقة لمعاملات معطاة هي مهمة قياسية في امتحان IHK.',
        },
        summary: {
          de: 'Rückgabewerte liefern Ergebnisse von Methoden an den Aufrufer. `return` beendet die Methode und übergibt den Wert.',
          ar: 'القيم المُرجعة تنقل نتائج الطرق إلى المُستدعي. `return` ينهي الطريقة ويمرر القيمة.',
        },
      },
    },
    {
      id: 'local-vs-global',
      name: { de: 'Lokale vs. globale Variablen', ar: 'المتغيرات المحلية مقابل العامة' },
      content: {
        definition: {
          de: 'Lokale Variablen sind nur innerhalb der Methode sichtbar, in der sie deklariert werden. Globale Variablen (Klassenattribute) sind in der gesamten Klasse zugänglich. Der Gültigkeitsbereich (Scope) bestimmt, wo eine Variable verwendet werden kann.',
          ar: 'المتغيرات المحلية مرئية فقط داخل الطريقة التي أُعلنت فيها. المتغيرات العامة (خصائص الفئة) يمكن الوصول إليها في الفئة بأكملها. نطاق الصلاحية (Scope) يحدد أين يمكن استخدام المتغير.',
        },
        keyPoints: [
          {
            de: 'Lokale Variablen existieren nur während der Ausführung der Methode und werden danach gelöscht',
            ar: 'المتغيرات المحلية تتواجد فقط أثناء تنفيذ الطريقة وتُحذف بعدها',
          },
          {
            de: 'Klassenattribute (Instanzvariablen) werden mit dem Objekt erstellt und leben, solange das Objekt existiert',
            ar: 'خصائص الفئة (متغيرات الكائن) تُنشأ مع الكائن وتعيش طالما الكائن موجود',
          },
          {
            de: 'Gleichnamige lokale Variablen verdecken Klassenattribute – `this.name` greift explizit auf das Attribut zu',
            ar: 'المتغيرات المحلية بنفس الاسم تحجب خصائص الفئة – `this.name` يصل صراحة إلى الخاصية',
          },
        ],
        examples: [
          {
            de: '`class Konto { double saldo = 0; void einzahlen(double betrag) { saldo += betrag; } }` – `saldo` ist Klassenattribut, `betrag` ist lokale Variable.',
            ar: '`class Konto { double saldo = 0; void einzahlen(double betrag) { saldo += betrag; } }` – `saldo` خاصية فئة، `betrag` متغير محلي.',
          },
          {
            de: '`void methode() { int x = 10; } System.out.println(x);` – Fehler: x ist außerhalb der Methode nicht sichtbar.',
            ar: '`void methode() { int x = 10; } System.out.println(x);` – خطأ: x غير مرئي خارج الطريقة.',
          },
        ],
        examRelevance: {
          de: 'Scope-Fragen sind ein beliebtes Prüfungsthema. Man muss erkennen können, welche Variable an welcher Stelle im Code gültig ist.',
          ar: 'أسئلة النطاق هي موضوع امتحاني شائع. يجب أن تكون قادراً على التعرف على أي متغير صالح في أي مكان في الكود.',
        },
        summary: {
          de: 'Lokale Variablen gelten nur in ihrer Methode, Klassenattribute in der ganzen Klasse. Scope bestimmt die Sichtbarkeit.',
          ar: 'المتغيرات المحلية صالحة فقط في طريقتها، خصائص الفئة في الفئة بأكملها. النطاق يحدد الرؤية.',
        },
      },
    },
    {
      id: 'method-calls',
      name: { de: 'Methodenaufrufe', ar: 'استدعاء الطرق' },
      content: {
        definition: {
          de: 'Ein Methodenaufruf führt den Code einer Methode aus. Dabei werden Argumente übergeben und optional ein Rückgabewert empfangen. Methoden können andere Methoden aufrufen und Methodenketten bilden.',
          ar: 'استدعاء الطريقة ينفذ كود الطريقة. يتم تمرير الحجج واستقبال قيمة مُرجعة اختياريًا. يمكن للطرق استدعاء طرق أخرى وتشكيل سلاسل طرق.',
        },
        keyPoints: [
          {
            de: 'Statische Methoden: `Klasse.methode()` – Aufruf ohne Objekt',
            ar: 'الطرق الثابتة: `Klasse.methode()` – استدعاء بدون كائن',
          },
          {
            de: 'Instanzmethoden: `objekt.methode()` – Aufruf auf einem Objekt',
            ar: 'طرق الكائن: `objekt.methode()` – استدعاء على كائن',
          },
          {
            de: 'Methodenaufruf-Reihenfolge: Die aufgerufene Methode wird vollständig ausgeführt, bevor der Aufrufer fortfährt',
            ar: 'ترتيب استدعاء الطرق: تُنفذ الطريقة المُستدعاة بالكامل قبل أن يستمر المُستدعي',
          },
        ],
        examples: [
          {
            de: '`int max = Math.max(10, 20);` – Statischer Aufruf: Gibt 20 zurück. `String upper = "hallo".toUpperCase();` – Instanzaufruf: Gibt "HALLO" zurück.',
            ar: '`int max = Math.max(10, 20);` – استدعاء ثابت: يُرجع 20. `String upper = "hallo".toUpperCase();` – استدعاء كائن: يُرجع "HALLO".',
          },
        ],
        examRelevance: {
          de: 'Das Nachvollziehen verschachtelter Methodenaufrufe und das Bestimmen der Ergebnisse ist eine häufige Prüfungsaufgabe.',
          ar: 'تتبع استدعاءات الطرق المتداخلة وتحديد النتائج هي مهمة امتحانية شائعة.',
        },
        summary: {
          de: 'Methodenaufrufe führen Methoden aus und können Argumente übergeben und Ergebnisse empfangen. Statisch ohne Objekt, Instanzmethoden auf Objekten.',
          ar: 'استدعاءات الطرق تنفذ الطرق ويمكنها تمرير الحجج واستقبال النتائج. ثابتة بدون كائن، طرق الكائن على الكائنات.',
        },
      },
    },
    {
      id: 'recursion',
      name: { de: 'Rekursion', ar: 'التكرار الذاتي' },
      content: {
        definition: {
          de: 'Rekursion liegt vor, wenn eine Methode sich selbst aufruft. Jede rekursive Methode benötigt eine Abbruchbedingung (Basisfall), um eine Endlosrekursion zu vermeiden, und einen rekursiven Fall, der das Problem verkleinert.',
          ar: 'التكرار الذاتي يحدث عندما تستدعي طريقة نفسها. كل طريقة تكرارية تحتاج شرط إنهاء (حالة أساسية) لتجنب التكرار اللانهائي، وحالة تكرارية تقلص المشكلة.',
        },
        keyPoints: [
          {
            de: 'Basisfall: Die Bedingung, bei der die Rekursion stoppt – z.B. `if (n == 0) return 1;`',
            ar: 'الحالة الأساسية: الشرط الذي يوقف التكرار – مثل `if (n == 0) return 1;`',
          },
          {
            de: 'Rekursiver Fall: Der Aufruf der Methode mit einem kleineren Problem – z.B. `return n * fakultaet(n-1);`',
            ar: 'الحالة التكرارية: استدعاء الطريقة بمشكلة أصغر – مثل `return n * fakultaet(n-1);`',
          },
          {
            de: 'Jeder rekursive Aufruf erzeugt einen neuen Eintrag auf dem Call Stack – zu tiefe Rekursion führt zu StackOverflowError',
            ar: 'كل استدعاء تكراري ينشئ إدخالاً جديداً على Call Stack – التكرار العميق جداً يؤدي إلى StackOverflowError',
          },
        ],
        examples: [
          {
            de: 'Fakultät: `int fak(int n) { if (n <= 1) return 1; return n * fak(n-1); }` – `fak(4)` = 4 * 3 * 2 * 1 = 24.',
            ar: 'المضروب: `int fak(int n) { if (n <= 1) return 1; return n * fak(n-1); }` – `fak(4)` = 4 * 3 * 2 * 1 = 24.',
          },
          {
            de: 'Summe: `int summe(int n) { if (n == 0) return 0; return n + summe(n-1); }` – `summe(5)` = 5 + 4 + 3 + 2 + 1 + 0 = 15.',
            ar: 'المجموع: `int summe(int n) { if (n == 0) return 0; return n + summe(n-1); }` – `summe(5)` = 5 + 4 + 3 + 2 + 1 + 0 = 15.',
          },
        ],
        examRelevance: {
          de: 'Rekursion ist ein häufiges IHK-Prüfungsthema. Man muss rekursive Aufrufe nachvollziehen und den Rückgabewert bestimmen können.',
          ar: 'التكرار الذاتي موضوع شائع في امتحان IHK. يجب تتبع الاستدعاءات التكرارية وتحديد القيمة المُرجعة.',
        },
        summary: {
          de: 'Rekursion: Methode ruft sich selbst auf. Basisfall stoppt die Rekursion, rekursiver Fall verkleinert das Problem.',
          ar: 'التكرار الذاتي: الطريقة تستدعي نفسها. الحالة الأساسية توقف التكرار، والحالة التكرارية تقلص المشكلة.',
        },
      },
    },
  ],
};
