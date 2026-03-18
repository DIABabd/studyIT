import type { TopicGroup } from '../../../types';

export const softwareTesting: TopicGroup = {
  id: 'group08-software-testing',
  name: {
    de: 'Softwaretests',
    ar: 'اختبارات البرمجيات',
  },
  description: {
    de: 'Testfälle, Testdaten, Unit-Tests, Testabdeckung und Überdeckungsmaße',
    ar: 'حالات الاختبار، بيانات الاختبار، اختبارات الوحدة، تغطية الاختبار ومقاييس التغطية',
  },
  priority: 'high',
  topics: [
    {
      id: 'test-cases',
      name: { de: 'Testfälle', ar: 'حالات الاختبار' },
      content: {
        definition: {
          de: 'Ein Testfall beschreibt eine definierte Eingabe, die erwartete Ausgabe und die Vorbedingungen für einen Test. Testfälle prüfen, ob ein Programm die Anforderungen korrekt erfüllt.',
          ar: 'حالة الاختبار تصف مدخلاً محدداً والمخرج المتوقع والشروط المسبقة للاختبار. حالات الاختبار تفحص ما إذا كان البرنامج يلبي المتطلبات بشكل صحيح.',
        },
        keyPoints: [
          {
            de: 'Jeder Testfall hat: Eingabedaten, erwartetes Ergebnis, Beschreibung des getesteten Verhaltens',
            ar: 'كل حالة اختبار لها: بيانات الإدخال، النتيجة المتوقعة، وصف السلوك المُختبر',
          },
          {
            de: 'Positive Testfälle: Prüfen korrekte Eingaben (z.B. gültige Altersangabe 25)',
            ar: 'حالات اختبار إيجابية: فحص المدخلات الصحيحة (مثل عمر صالح 25)',
          },
          {
            de: 'Negative Testfälle: Prüfen fehlerhafte Eingaben (z.B. negatives Alter -5)',
            ar: 'حالات اختبار سلبية: فحص المدخلات الخاطئة (مثل عمر سالب -5)',
          },
          {
            de: 'Grenzwerttests: Prüfen Randwerte (z.B. Alter 0, 17, 18, 150)',
            ar: 'اختبارات القيم الحدية: فحص القيم الحدية (مثل العمر 0، 17، 18، 150)',
          },
        ],
        examples: [
          {
            de: 'Testfall für Login: Eingabe: Benutzername="admin", Passwort="1234". Erwartetes Ergebnis: Login erfolgreich. Negativer Testfall: Passwort="" → Fehlermeldung.',
            ar: 'حالة اختبار لتسجيل الدخول: إدخال: اسم المستخدم="admin"، كلمة المرور="1234". النتيجة المتوقعة: تسجيل دخول ناجح. حالة سلبية: كلمة المرور="" → رسالة خطأ.',
          },
        ],
        examRelevance: {
          de: 'Testfälle erstellen ist eine häufige Aufgabe in der IHK-Prüfung. Man muss für eine gegebene Methode sinnvolle Testfälle mit Grenzwerten definieren können.',
          ar: 'إنشاء حالات الاختبار مهمة شائعة في امتحان IHK. يجب تحديد حالات اختبار معقولة بقيم حدية لطريقة معطاة.',
        },
        summary: {
          de: 'Testfälle definieren Eingabe und erwartete Ausgabe. Positive, negative und Grenzwerttests sichern die Qualität.',
          ar: 'حالات الاختبار تحدد الإدخال والمخرج المتوقع. الاختبارات الإيجابية والسلبية والحدية تضمن الجودة.',
        },
      },
    },
    {
      id: 'test-data-selection',
      name: { de: 'Testdatenauswahl', ar: 'اختيار بيانات الاختبار' },
      content: {
        definition: {
          de: 'Die Testdatenauswahl bestimmt, welche Eingabewerte für Tests verwendet werden. Strategien wie Äquivalenzklassenbildung und Grenzwertanalyse helfen, effektive Testdaten zu wählen.',
          ar: 'اختيار بيانات الاختبار يحدد أي قيم إدخال تُستخدم للاختبارات. استراتيجيات مثل تكوين فئات التكافؤ وتحليل القيم الحدية تساعد في اختيار بيانات اختبار فعالة.',
        },
        keyPoints: [
          {
            de: 'Äquivalenzklassen: Eingabebereiche in Gruppen teilen, die gleich behandelt werden (z.B. 0-17 = minderjährig, 18-120 = volljährig)',
            ar: 'فئات التكافؤ: تقسيم نطاقات الإدخال إلى مجموعات تُعامل بنفس الطريقة (مثل 0-17 = قاصر، 18-120 = بالغ)',
          },
          {
            de: 'Grenzwertanalyse: Die Werte direkt an den Grenzen testen (z.B. 17, 18, 19 bei Volljährigkeit)',
            ar: 'تحليل القيم الحدية: اختبار القيم مباشرة عند الحدود (مثل 17، 18، 19 عند سن البلوغ)',
          },
          {
            de: 'Ungültige Eingaben: Auch Werte außerhalb des gültigen Bereichs testen (z.B. -1, 200)',
            ar: 'المدخلات غير الصالحة: اختبار القيم خارج النطاق الصالح أيضاً (مثل -1، 200)',
          },
        ],
        examples: [
          {
            de: 'Methode `berechneRabatt(int alter)`: Äquivalenzklassen: Kinder (0-11), Jugendliche (12-17), Erwachsene (18-64), Senioren (65+). Grenzwerte: 0, 11, 12, 17, 18, 64, 65.',
            ar: 'طريقة `berechneRabatt(int alter)`: فئات التكافؤ: أطفال (0-11)، مراهقون (12-17)، بالغون (18-64)، كبار السن (65+). قيم حدية: 0، 11، 12، 17، 18، 64، 65.',
          },
        ],
        examRelevance: {
          de: 'Äquivalenzklassen und Grenzwertanalyse sind Standardthemen der IHK-Prüfung. Man muss für eine gegebene Spezifikation sinnvolle Testdaten ableiten können.',
          ar: 'فئات التكافؤ وتحليل القيم الحدية هي مواضيع قياسية في امتحان IHK. يجب استنتاج بيانات اختبار معقولة من مواصفات معطاة.',
        },
        summary: {
          de: 'Testdaten werden durch Äquivalenzklassen und Grenzwertanalyse systematisch ausgewählt. Gültige und ungültige Werte testen.',
          ar: 'بيانات الاختبار تُختار بشكل منهجي عبر فئات التكافؤ وتحليل القيم الحدية. اختبار القيم الصالحة وغير الصالحة.',
        },
      },
    },
    {
      id: 'unit-testing',
      name: { de: 'Unit-Testing Grundlagen', ar: 'أساسيات اختبار الوحدة' },
      content: {
        definition: {
          de: 'Unit-Tests testen einzelne Methoden oder Klassen isoliert. Sie prüfen, ob eine Einheit (Unit) für gegebene Eingaben die erwarteten Ausgaben liefert. In Java wird häufig JUnit verwendet.',
          ar: 'اختبارات الوحدة تختبر طرقاً أو فئات فردية بشكل معزول. تفحص ما إذا كانت الوحدة (Unit) تنتج المخرجات المتوقعة لمدخلات معطاة. في Java يُستخدم غالباً JUnit.',
        },
        keyPoints: [
          {
            de: 'Aufbau: Arrange (Vorbereitung) → Act (Ausführung) → Assert (Überprüfung)',
            ar: 'الهيكل: Arrange (التحضير) → Act (التنفيذ) → Assert (التحقق)',
          },
          {
            de: 'Assertions: `assertEquals(erwartet, tatsächlich)`, `assertTrue(bedingung)`, `assertNull(wert)`',
            ar: 'التأكيدات: `assertEquals(erwartet, tatsächlich)`، `assertTrue(bedingung)`، `assertNull(wert)`',
          },
          {
            de: 'Jeder Test sollte unabhängig von anderen Tests sein und einen Aspekt prüfen',
            ar: 'كل اختبار يجب أن يكون مستقلاً عن الاختبارات الأخرى ويفحص جانباً واحداً',
          },
        ],
        examples: [
          {
            de: '`@Test public void testAddiere() { Rechner r = new Rechner(); assertEquals(5, r.addiere(2, 3)); assertEquals(0, r.addiere(-1, 1)); }` – Testet die addiere-Methode.',
            ar: '`@Test public void testAddiere() { Rechner r = new Rechner(); assertEquals(5, r.addiere(2, 3)); assertEquals(0, r.addiere(-1, 1)); }` – يختبر طريقة addiere.',
          },
        ],
        examRelevance: {
          de: 'Unit-Tests und JUnit-Grundlagen werden in der IHK-Prüfung abgefragt. Man muss Tests lesen und einfache Tests schreiben können.',
          ar: 'اختبارات الوحدة وأساسيات JUnit يُسأل عنها في امتحان IHK. يجب قراءة الاختبارات وكتابة اختبارات بسيطة.',
        },
        summary: {
          de: 'Unit-Tests prüfen einzelne Methoden isoliert mit Arrange-Act-Assert. JUnit ist das Standard-Framework in Java.',
          ar: 'اختبارات الوحدة تفحص طرقاً فردية بشكل معزول بنمط Arrange-Act-Assert. JUnit هو إطار العمل القياسي في Java.',
        },
      },
    },
    {
      id: 'regression-tests',
      name: { de: 'Regressionstests', ar: 'اختبارات الانحدار' },
      content: {
        definition: {
          de: 'Regressionstests stellen sicher, dass nach Änderungen am Code (Bugfixes, neue Features) die bestehende Funktionalität weiterhin korrekt funktioniert. Sie werden nach jeder Änderung erneut ausgeführt.',
          ar: 'اختبارات الانحدار تضمن أنه بعد التغييرات في الكود (إصلاح الأخطاء، ميزات جديدة) تستمر الوظائف الحالية في العمل بشكل صحيح. يتم تنفيذها مجدداً بعد كل تغيير.',
        },
        keyPoints: [
          {
            de: 'Automatisierte Regressionstests sparen Zeit und erkennen Seiteneffekte sofort',
            ar: 'اختبارات الانحدار المؤتمتة توفر الوقت وتكتشف الآثار الجانبية فوراً',
          },
          {
            de: 'Alle bestehenden Tests werden nach einer Codeänderung erneut ausgeführt',
            ar: 'جميع الاختبارات الحالية تُنفذ مجدداً بعد تغيير الكود',
          },
          {
            de: 'CI/CD-Pipelines führen Regressionstests automatisch bei jedem Commit aus',
            ar: 'خطوط CI/CD تنفذ اختبارات الانحدار تلقائياً مع كل commit',
          },
        ],
        examples: [
          {
            de: 'Ein Entwickler ändert die Rabattberechnung. Regressionstests prüfen automatisch, ob die Rechnungserstellung, der Warenkorb und die Kundenverwaltung noch korrekt funktionieren.',
            ar: 'مطور يغير حساب الخصم. اختبارات الانحدار تفحص تلقائياً ما إذا كان إنشاء الفاتورة وسلة التسوق وإدارة العملاء لا تزال تعمل بشكل صحيح.',
          },
        ],
        examRelevance: {
          de: 'Der Begriff Regressionstest und sein Zweck werden in der IHK-Prüfung abgefragt. Man muss erklären können, warum sie wichtig sind.',
          ar: 'مصطلح اختبار الانحدار والغرض منه يُسأل عنه في امتحان IHK. يجب شرح لماذا هو مهم.',
        },
        summary: {
          de: 'Regressionstests prüfen nach Codeänderungen, ob bestehende Funktionen weiterhin korrekt arbeiten. Idealerweise automatisiert.',
          ar: 'اختبارات الانحدار تفحص بعد تغييرات الكود ما إذا كانت الوظائف الحالية لا تزال تعمل بشكل صحيح. مثالياً بشكل مؤتمت.',
        },
      },
    },
    {
      id: 'test-coverage',
      name: { de: 'Testabdeckungskonzepte', ar: 'مفاهيم تغطية الاختبار' },
      content: {
        definition: {
          de: 'Testabdeckung (Code Coverage) misst, welcher Anteil des Quellcodes durch Tests ausgeführt wird. Sie gibt an, wie gründlich der Code getestet ist, aber nicht, ob er korrekt ist.',
          ar: 'تغطية الاختبار (Code Coverage) تقيس أي نسبة من الكود المصدري يتم تنفيذها بواسطة الاختبارات. وهي تُظهر مدى شمولية اختبار الكود، لكن ليس ما إذا كان صحيحاً.',
        },
        keyPoints: [
          {
            de: '100% Testabdeckung bedeutet nicht fehlerfreien Code – es bedeutet nur, dass jede Zeile ausgeführt wurde',
            ar: '100% تغطية اختبار لا تعني كوداً خالياً من الأخطاء – تعني فقط أن كل سطر تم تنفيذه',
          },
          {
            de: 'Verschiedene Überdeckungsmaße: Anweisungsüberdeckung, Zweigüberdeckung, Pfadüberdeckung',
            ar: 'مقاييس تغطية مختلفة: تغطية التعليمات، تغطية الفروع، تغطية المسارات',
          },
          {
            de: 'Höhere Überdeckungsgrade erfordern mehr Testfälle, finden aber auch mehr Fehler',
            ar: 'درجات تغطية أعلى تتطلب حالات اختبار أكثر، لكنها تجد أخطاء أكثر أيضاً',
          },
        ],
        examples: [
          {
            de: 'Bei der Methode `if (x > 0) { return "positiv"; } else { return "nicht positiv"; }` reichen zwei Testfälle (x=5 und x=-3) für 100% Zweigüberdeckung.',
            ar: 'في الطريقة `if (x > 0) { return "positiv"; } else { return "nicht positiv"; }` تكفي حالتا اختبار (x=5 و x=-3) لتغطية فروع 100%.',
          },
        ],
        examRelevance: {
          de: 'Die verschiedenen Überdeckungsmaße und ihre Unterschiede sind ein beliebtes IHK-Prüfungsthema.',
          ar: 'مقاييس التغطية المختلفة والفروق بينها هي موضوع امتحاني شائع في IHK.',
        },
        summary: {
          de: 'Testabdeckung misst, wie viel Code durch Tests ausgeführt wird. Verschiedene Stufen: Anweisung, Zweig, Pfad.',
          ar: 'تغطية الاختبار تقيس كم من الكود يتم تنفيذه بالاختبارات. مستويات مختلفة: تعليمة، فرع، مسار.',
        },
      },
    },
    {
      id: 'anweisungsueberdeckung',
      name: { de: 'Anweisungsüberdeckung (C0)', ar: 'تغطية التعليمات (C0)' },
      content: {
        definition: {
          de: 'Anweisungsüberdeckung (Statement Coverage, C0) misst, welcher Prozentsatz aller Anweisungen im Code mindestens einmal durch Testfälle ausgeführt wurde. Es ist das schwächste Überdeckungsmaß.',
          ar: 'تغطية التعليمات (Statement Coverage, C0) تقيس أي نسبة من جميع التعليمات في الكود تم تنفيذها مرة واحدة على الأقل بحالات الاختبار. وهي أضعف مقياس تغطية.',
        },
        keyPoints: [
          {
            de: 'Formel: (Anzahl ausgeführter Anweisungen / Gesamtanzahl Anweisungen) × 100%',
            ar: 'الصيغة: (عدد التعليمات المُنفذة / إجمالي عدد التعليمات) × 100%',
          },
          {
            de: 'Schwächstes Maß: Kann Fehler in Verzweigungen übersehen, wenn nur ein Zweig getestet wird',
            ar: 'أضعف مقياس: يمكن أن يفوت أخطاء في التفرعات إذا تم اختبار فرع واحد فقط',
          },
          {
            de: '100% Anweisungsüberdeckung garantiert nicht 100% Zweigüberdeckung',
            ar: '100% تغطية تعليمات لا تضمن 100% تغطية فروع',
          },
        ],
        examples: [
          {
            de: 'Code: `x = 5; if (x > 0) { y = 1; } z = 2;` – Ein Test mit x=5 deckt alle 3 Anweisungen ab (x=5, y=1, z=2) = 100% Anweisungsüberdeckung. Der else-Zweig existiert nicht, aber bei `if/else` würde der else-Zweig nicht getestet.',
            ar: 'كود: `x = 5; if (x > 0) { y = 1; } z = 2;` – اختبار واحد مع x=5 يغطي جميع التعليمات الثلاث (x=5, y=1, z=2) = 100% تغطية تعليمات.',
          },
        ],
        examRelevance: {
          de: 'Anweisungsüberdeckung wird in der IHK-Prüfung als Überdeckungsmaß abgefragt. Man muss berechnen können, wie viele Testfälle für eine bestimmte Überdeckung nötig sind.',
          ar: 'تغطية التعليمات يُسأل عنها في امتحان IHK كمقياس تغطية. يجب حساب كم حالة اختبار مطلوبة لتغطية معينة.',
        },
        summary: {
          de: 'C0 misst, ob jede Anweisung mindestens einmal ausgeführt wurde. Einfachstes Maß, reicht allein nicht für gute Testqualität.',
          ar: 'C0 يقيس ما إذا تم تنفيذ كل تعليمة مرة واحدة على الأقل. أبسط مقياس، لا يكفي وحده لجودة اختبار جيدة.',
        },
      },
    },
    {
      id: 'zweigueberdeckung',
      name: { de: 'Zweigüberdeckung (C1)', ar: 'تغطية الفروع (C1)' },
      content: {
        definition: {
          de: 'Zweigüberdeckung (Branch Coverage, C1) misst, ob jeder Zweig einer Verzweigung (if/else, switch) mindestens einmal durchlaufen wurde – sowohl der True- als auch der False-Zweig.',
          ar: 'تغطية الفروع (Branch Coverage, C1) تقيس ما إذا تم تمرير كل فرع من التفرع (if/else, switch) مرة واحدة على الأقل – فرع True وفرع False.',
        },
        keyPoints: [
          {
            de: 'Stärker als Anweisungsüberdeckung: Jede Bedingung muss sowohl wahr als auch falsch ausgewertet werden',
            ar: 'أقوى من تغطية التعليمات: كل شرط يجب تقييمه كصحيح وكخاطئ',
          },
          {
            de: 'Formel: (Anzahl durchlaufener Zweige / Gesamtanzahl Zweige) × 100%',
            ar: 'الصيغة: (عدد الفروع المُمرّرة / إجمالي عدد الفروع) × 100%',
          },
          {
            de: '100% Zweigüberdeckung impliziert 100% Anweisungsüberdeckung, aber nicht umgekehrt',
            ar: '100% تغطية فروع تتضمن 100% تغطية تعليمات، لكن ليس العكس',
          },
        ],
        examples: [
          {
            de: 'Code: `if (alter >= 18) { status = "volljährig"; } else { status = "minderjährig"; }` – Für 100% C1 braucht man 2 Tests: alter=20 (True-Zweig) und alter=15 (False-Zweig).',
            ar: 'كود: `if (alter >= 18) { status = "volljährig"; } else { status = "minderjährig"; }` – لتغطية فروع 100% نحتاج اختبارين: alter=20 (فرع True) و alter=15 (فرع False).',
          },
        ],
        examRelevance: {
          de: 'Zweigüberdeckung ist das am häufigsten in der IHK-Prüfung gefragte Überdeckungsmaß. Man muss die minimale Anzahl an Testfällen bestimmen können.',
          ar: 'تغطية الفروع هي مقياس التغطية الأكثر سؤالاً في امتحان IHK. يجب تحديد الحد الأدنى من حالات الاختبار.',
        },
        summary: {
          de: 'C1 erfordert, dass jeder Zweig (True und False) mindestens einmal durchlaufen wird. Stärker als C0.',
          ar: 'C1 يتطلب تمرير كل فرع (True و False) مرة واحدة على الأقل. أقوى من C0.',
        },
      },
    },
    {
      id: 'pfadueberdeckung',
      name: { de: 'Pfadüberdeckung (C2)', ar: 'تغطية المسارات (C2)' },
      content: {
        definition: {
          de: 'Pfadüberdeckung (Path Coverage, C2) misst, ob alle möglichen Ausführungspfade durch den Code getestet wurden. Jede Kombination von Verzweigungen bildet einen eigenen Pfad.',
          ar: 'تغطية المسارات (Path Coverage, C2) تقيس ما إذا تم اختبار جميع مسارات التنفيذ الممكنة عبر الكود. كل تركيبة من التفرعات تشكل مساراً خاصاً.',
        },
        keyPoints: [
          {
            de: 'Stärkstes Überdeckungsmaß: Alle Kombinationen von Verzweigungen werden getestet',
            ar: 'أقوى مقياس تغطية: جميع تركيبات التفرعات يتم اختبارها',
          },
          {
            de: 'Bei n unabhängigen if-Anweisungen gibt es 2^n mögliche Pfade',
            ar: 'مع n عبارات if مستقلة هناك 2^n مسار ممكن',
          },
          {
            de: 'In der Praxis oft nicht vollständig erreichbar, da die Anzahl der Pfade exponentiell wächst',
            ar: 'في الممارسة غالباً غير قابلة للتحقيق بالكامل، لأن عدد المسارات ينمو بشكل أسّي',
          },
        ],
        examples: [
          {
            de: 'Code mit 2 if-Anweisungen: `if (a) {...} if (b) {...}` hat 4 Pfade: (a=T,b=T), (a=T,b=F), (a=F,b=T), (a=F,b=F). Für 100% C2 braucht man 4 Testfälle.',
            ar: 'كود بعبارتي if: `if (a) {...} if (b) {...}` له 4 مسارات: (a=T,b=T)، (a=T,b=F)، (a=F,b=T)، (a=F,b=F). لتغطية مسارات 100% نحتاج 4 حالات اختبار.',
          },
        ],
        examRelevance: {
          de: 'In der IHK-Prüfung muss man die Hierarchie der Überdeckungsmaße kennen (C0 ⊂ C1 ⊂ C2) und Pfade für einfache Codebeispiele bestimmen können.',
          ar: 'في امتحان IHK يجب معرفة هرمية مقاييس التغطية (C0 ⊂ C1 ⊂ C2) وتحديد المسارات لأمثلة كود بسيطة.',
        },
        summary: {
          de: 'C2 testet alle Ausführungspfade. Stärkstes Maß, aber exponentiell viele Pfade. Hierarchie: C0 ⊂ C1 ⊂ C2.',
          ar: 'C2 يختبر جميع مسارات التنفيذ. أقوى مقياس، لكن عدد المسارات أسّي. الهرمية: C0 ⊂ C1 ⊂ C2.',
        },
      },
    },
  ],
};
