import type { TopicGroup } from '../../../types';

export const softwareQualityTesting: TopicGroup = {
  id: 'group14',
  name: {
    de: 'Softwarequalität und Testing',
    ar: 'جودة البرمجيات والاختبار',
  },
  description: {
    de: 'Teststufen, Testmethoden und Qualitätssicherung in der Softwareentwicklung',
    ar: 'مستويات الاختبار وأساليب الاختبار وضمان الجودة في تطوير البرمجيات',
  },
  priority: 'medium',
  topics: [
    {
      id: 'unit-tests',
      name: {
        de: 'Unit Tests (Modultests)',
        ar: 'اختبارات الوحدة (Unit Tests)',
      },
      content: {
        definition: {
          de: 'Unit Tests (Modultests) testen die kleinste testbare Einheit einer Software – typischerweise eine einzelne Methode oder Funktion – isoliert von anderen Komponenten. Sie werden vom Entwickler geschrieben und automatisiert ausgeführt.',
          ar: 'اختبارات الوحدة تختبر أصغر وحدة قابلة للاختبار في البرمجية – عادة أسلوب أو دالة واحدة – بمعزل عن المكونات الأخرى. يكتبها المطور وتُنفذ تلقائياً.',
        },
        keyPoints: [
          {
            de: 'Testen einzelne Methoden/Funktionen isoliert (mit Mocks/Stubs für Abhängigkeiten)',
            ar: 'اختبار أساليب/دوال فردية بمعزل (مع Mocks/Stubs للتبعيات)',
          },
          {
            de: 'Schnelle Ausführung: Hunderte Tests in Sekunden',
            ar: 'تنفيذ سريع: مئات الاختبارات في ثوانٍ',
          },
          {
            de: 'Arrange-Act-Assert (AAA): Testvorbereitung → Ausführung → Ergebnisprüfung',
            ar: 'Arrange-Act-Assert (AAA): التحضير ← التنفيذ ← فحص النتيجة',
          },
          {
            de: 'Frameworks: JUnit (Java), pytest (Python), Jest (JavaScript/TypeScript)',
            ar: 'أطر العمل: JUnit (Java)، pytest (Python)، Jest (JavaScript/TypeScript)',
          },
        ],
        examples: [
          {
            de: 'Test der Methode berechneRabatt(preis, prozent): test("10% Rabatt auf 100€ ergibt 90€", () => { const ergebnis = berechneRabatt(100, 10); expect(ergebnis).toBe(90); });',
            ar: 'اختبار أسلوب berechneRabatt(سعر، نسبة): test("خصم 10% على 100€ يعطي 90€"، () => { const النتيجة = berechneRabatt(100, 10); expect(النتيجة).toBe(90); });',
          },
        ],
        examRelevance: {
          de: 'Unit Tests werden oft als Codebeispiel gefragt. Verstehen Sie das AAA-Muster und was ein Mock/Stub ist.',
          ar: 'اختبارات الوحدة تُسأل غالباً كمثال كود. افهم نمط AAA وما هو Mock/Stub.',
        },
        summary: {
          de: 'Unit Tests prüfen einzelne Methoden isoliert und automatisiert nach dem AAA-Muster für schnelle Fehlererkennung.',
          ar: 'اختبارات الوحدة تفحص أساليب فردية بمعزل وتلقائياً وفق نمط AAA للكشف السريع عن الأخطاء.',
        },
      },
    },
    {
      id: 'integration-tests',
      name: {
        de: 'Integrationstests',
        ar: 'اختبارات التكامل',
      },
      content: {
        definition: {
          de: 'Integrationstests prüfen das Zusammenspiel mehrerer Komponenten oder Module. Sie testen die Schnittstellen und die Kommunikation zwischen den Modulen und decken Fehler auf, die bei isolierten Unit Tests nicht sichtbar sind.',
          ar: 'اختبارات التكامل تفحص تفاعل عدة مكونات أو وحدات. تختبر الواجهات والتواصل بين الوحدات وتكشف أخطاء غير مرئية في اختبارات الوحدة المعزولة.',
        },
        keyPoints: [
          {
            de: 'Testen die Zusammenarbeit zwischen Modulen (z.B. Service → Datenbank)',
            ar: 'اختبار التعاون بين الوحدات (مثل Service ← قاعدة البيانات)',
          },
          {
            de: 'Top-Down: Von oben nach unten integrieren (Stubs für untere Module)',
            ar: 'من أعلى لأسفل: التكامل من الأعلى (Stubs للوحدات السفلية)',
          },
          {
            de: 'Bottom-Up: Von unten nach oben integrieren (Treiber für obere Module)',
            ar: 'من أسفل لأعلى: التكامل من الأسفل (دوافع للوحدات العلوية)',
          },
          {
            de: 'Big-Bang: Alle Module werden gleichzeitig zusammengefügt und getestet',
            ar: 'الانفجار الكبير: جميع الوحدات تُجمع وتُختبر في نفس الوقت',
          },
        ],
        examples: [
          {
            de: 'Integrationstest für einen Bestellservice: Der Test prüft, ob der BestellService korrekt mit dem LagerService und dem ZahlungsService zusammenarbeitet – also ob eine Bestellung nur verarbeitet wird, wenn Ware verfügbar und Zahlung erfolgreich ist.',
            ar: 'اختبار تكامل لخدمة الطلبات: يفحص الاختبار ما إذا كان BestellService يتعاون بشكل صحيح مع LagerService و ZahlungsService – أي أن الطلب يُعالج فقط عند توفر البضاعة ونجاح الدفع.',
          },
        ],
        examRelevance: {
          de: 'Kennen Sie die Integrationsstrategien (Top-Down, Bottom-Up, Big-Bang) und den Unterschied zu Unit Tests und Systemtests.',
          ar: 'اعرف استراتيجيات التكامل (من أعلى لأسفل، من أسفل لأعلى، الانفجار الكبير) والفرق مع اختبارات الوحدة والنظام.',
        },
        summary: {
          de: 'Integrationstests prüfen das Zusammenspiel von Modulen über ihre Schnittstellen mit verschiedenen Integrationsstrategien.',
          ar: 'اختبارات التكامل تفحص تفاعل الوحدات عبر واجهاتها باستراتيجيات تكامل مختلفة.',
        },
      },
    },
    {
      id: 'system-tests',
      name: {
        de: 'Systemtests',
        ar: 'اختبارات النظام',
      },
      content: {
        definition: {
          de: 'Systemtests prüfen das vollständig integrierte System als Ganzes gegen die spezifizierten Anforderungen. Sie werden in einer produktionsnahen Umgebung durchgeführt und testen sowohl funktionale als auch nicht-funktionale Anforderungen.',
          ar: 'اختبارات النظام تفحص النظام المتكامل بالكامل ككل مقابل المتطلبات المحددة. تُنفذ في بيئة قريبة من الإنتاج وتختبر المتطلبات الوظيفية وغير الوظيفية.',
        },
        keyPoints: [
          {
            de: 'Testen das Gesamtsystem aus Benutzersicht (End-to-End)',
            ar: 'اختبار النظام الكامل من منظور المستخدم (من البداية للنهاية)',
          },
          {
            de: 'Prüfen funktionale Anforderungen (Funktionstest) und nicht-funktionale (Lasttest, Performancetest)',
            ar: 'فحص المتطلبات الوظيفية (اختبار الوظائف) وغير الوظيفية (اختبار الحمل، اختبار الأداء)',
          },
          {
            de: 'Durchgeführt vom Testteam (nicht von Entwicklern)',
            ar: 'يُنفذ من قبل فريق الاختبار (ليس المطورين)',
          },
        ],
        examples: [
          {
            de: 'Systemtest für einen Online-Shop: Ein Tester durchläuft den gesamten Bestellprozess – von der Produktsuche über den Warenkorb bis zur Bezahlung und Bestellbestätigung per E-Mail. Gleichzeitig wird ein Lasttest mit 1000 simulierten Benutzern durchgeführt.',
            ar: 'اختبار نظام لمتجر إلكتروني: مختبر يمر بعملية الطلب الكاملة – من البحث عن المنتج عبر السلة إلى الدفع وتأكيد الطلب عبر البريد الإلكتروني. بالتوازي يُجرى اختبار حمل مع 1000 مستخدم محاكى.',
          },
        ],
        examRelevance: {
          de: 'Systemtests werden im Kontext der Teststufen abgefragt. Ordnen Sie die richtige Teststufe dem V-Modell zu (Systemtest ↔ Grobentwurf).',
          ar: 'اختبارات النظام تُسأل في سياق مستويات الاختبار. عيّن مستوى الاختبار الصحيح لنموذج V (اختبار النظام ← التصميم العام).',
        },
        summary: {
          de: 'Systemtests prüfen das vollständige System gegen alle spezifizierten Anforderungen in einer produktionsnahen Umgebung.',
          ar: 'اختبارات النظام تفحص النظام الكامل مقابل جميع المتطلبات المحددة في بيئة قريبة من الإنتاج.',
        },
      },
    },
    {
      id: 'acceptance-tests',
      name: {
        de: 'Abnahmetests',
        ar: 'اختبارات القبول',
      },
      content: {
        definition: {
          de: 'Abnahmetests (Acceptance Tests) sind die letzte Teststufe vor der Auslieferung. Sie werden vom Auftraggeber oder Endbenutzer durchgeführt, um zu prüfen, ob das System die vereinbarten Anforderungen erfüllt und für den produktiven Einsatz bereit ist.',
          ar: 'اختبارات القبول هي آخر مستوى اختبار قبل التسليم. يُنفذها صاحب العمل أو المستخدم النهائي للتحقق مما إذا كان النظام يفي بالمتطلبات المتفق عليها وجاهز للاستخدام الإنتاجي.',
        },
        keyPoints: [
          {
            de: 'User Acceptance Test (UAT): Endbenutzer testen in realer Umgebung',
            ar: 'اختبار قبول المستخدم (UAT): المستخدمون النهائيون يختبرون في بيئة حقيقية',
          },
          {
            de: 'Basiert auf dem Lastenheft und den vereinbarten Abnahmekriterien',
            ar: 'يستند إلى دفتر المتطلبات ومعايير القبول المتفق عليها',
          },
          {
            de: 'Erfolgreiche Abnahme = formale Freigabe für Produktivbetrieb',
            ar: 'القبول الناجح = موافقة رسمية للتشغيل الإنتاجي',
          },
        ],
        examples: [
          {
            de: 'Der Auftraggeber testet die neue Lagerverwaltung anhand der im Lastenheft definierten Abnahmekriterien: „Artikelsuche findet Ergebnisse in < 1 Sekunde", „Bestandsänderungen werden in Echtzeit aktualisiert". Nach erfolgreicher Prüfung wird die Abnahme erklärt.',
            ar: 'صاحب العمل يختبر إدارة المستودعات الجديدة وفق معايير القبول المحددة في دفتر المتطلبات: "البحث عن المنتجات يجد النتائج في < ثانية واحدة"، "تغييرات المخزون تُحدث في الوقت الحقيقي". بعد الفحص الناجح يُعلن القبول.',
          },
        ],
        examRelevance: {
          de: 'Abnahmetests gehören zur höchsten Teststufe im V-Modell (korrespondierend mit der Anforderungsanalyse). Wer führt sie durch? Der Auftraggeber!',
          ar: 'اختبارات القبول أعلى مستوى اختبار في نموذج V (مقابل تحليل المتطلبات). من ينفذها؟ صاحب العمل!',
        },
        summary: {
          de: 'Abnahmetests werden vom Auftraggeber durchgeführt, um die Erfüllung der Anforderungen formal zu bestätigen.',
          ar: 'اختبارات القبول يُنفذها صاحب العمل لتأكيد استيفاء المتطلبات رسمياً.',
        },
      },
    },
    {
      id: 'test-cases',
      name: {
        de: 'Testfälle',
        ar: 'حالات الاختبار',
      },
      content: {
        definition: {
          de: 'Ein Testfall ist eine dokumentierte Beschreibung einer Testsituation mit definierten Eingabewerten, Vorbedingungen, erwarteten Ergebnissen und Nachbedingungen. Testfälle werden systematisch aus Anforderungen abgeleitet und bilden die Basis für die Testdurchführung.',
          ar: 'حالة الاختبار هي وصف موثق لوضعية اختبار بقيم إدخال محددة وشروط مسبقة ونتائج متوقعة وشروط لاحقة. تُشتق حالات الاختبار بشكل منهجي من المتطلبات وتشكل أساس تنفيذ الاختبار.',
        },
        keyPoints: [
          {
            de: 'Bestandteile: ID, Beschreibung, Vorbedingung, Eingabedaten, erwartetes Ergebnis, tatsächliches Ergebnis',
            ar: 'المكونات: المعرّف، الوصف، الشرط المسبق، بيانات الإدخال، النتيجة المتوقعة، النتيجة الفعلية',
          },
          {
            de: 'Äquivalenzklassenbildung: Eingabewerte in Klassen einteilen (gültig/ungültig)',
            ar: 'تشكيل فئات التكافؤ: تقسيم قيم الإدخال إلى فئات (صالح/غير صالح)',
          },
          {
            de: 'Grenzwertanalyse: Testen an den Grenzen der Äquivalenzklassen',
            ar: 'تحليل القيم الحدية: الاختبار عند حدود فئات التكافؤ',
          },
        ],
        examples: [
          {
            de: 'Testfall für Altersvalidierung (18-120): TC-01: Eingabe 17 → Fehlermeldung (Grenzwert unter), TC-02: Eingabe 18 → Akzeptiert (Grenzwert), TC-03: Eingabe 50 → Akzeptiert (gültig), TC-04: Eingabe 120 → Akzeptiert (Grenzwert), TC-05: Eingabe 121 → Fehlermeldung (Grenzwert über).',
            ar: 'حالة اختبار للتحقق من العمر (18-120): TC-01: إدخال 17 ← رسالة خطأ (حد أدنى)، TC-02: إدخال 18 ← مقبول (حد)، TC-03: إدخال 50 ← مقبول (صالح)، TC-04: إدخال 120 ← مقبول (حد)، TC-05: إدخال 121 ← رسالة خطأ (حد أعلى).',
          },
        ],
        examRelevance: {
          de: 'Äquivalenzklassen und Grenzwertanalyse sind häufige Prüfungsaufgaben. Leiten Sie Testfälle aus einer gegebenen Spezifikation ab.',
          ar: 'فئات التكافؤ وتحليل القيم الحدية مهام امتحان شائعة. اشتق حالات الاختبار من مواصفة معطاة.',
        },
        summary: {
          de: 'Testfälle definieren Testsituationen systematisch mit Äquivalenzklassen und Grenzwertanalyse für vollständige Testabdeckung.',
          ar: 'حالات الاختبار تحدد أوضاع الاختبار بشكل منهجي بفئات التكافؤ وتحليل القيم الحدية لتغطية اختبار كاملة.',
        },
      },
    },
    {
      id: 'code-review',
      name: {
        de: 'Code Review',
        ar: 'مراجعة الكود',
      },
      content: {
        definition: {
          de: 'Code Review ist die systematische Überprüfung von Quellcode durch andere Entwickler. Ziel ist es, Fehler, Sicherheitslücken und Designprobleme frühzeitig zu erkennen und die Codequalität zu verbessern. Es ist eine Form der statischen Analyse (ohne Ausführung des Codes).',
          ar: 'مراجعة الكود هي الفحص المنهجي لكود المصدر من قبل مطورين آخرين. الهدف هو اكتشاف الأخطاء والثغرات الأمنية ومشاكل التصميم مبكراً وتحسين جودة الكود. هي شكل من أشكال التحليل الثابت (بدون تنفيذ الكود).',
        },
        keyPoints: [
          {
            de: 'Pull-Request-Review: Code wird vor dem Merge von Kollegen geprüft',
            ar: 'مراجعة Pull Request: يُفحص الكود من الزملاء قبل الدمج',
          },
          {
            de: 'Prüfkriterien: Lesbarkeit, Wartbarkeit, Sicherheit, Einhaltung von Coding-Standards',
            ar: 'معايير الفحص: القراءة، قابلية الصيانة، الأمان، الالتزام بمعايير البرمجة',
          },
          {
            de: 'Pair Programming: Zwei Entwickler arbeiten gleichzeitig – kontinuierliches Review',
            ar: 'البرمجة الزوجية: مطوران يعملان معاً – مراجعة مستمرة',
          },
        ],
        examples: [
          {
            de: 'Ein Entwickler erstellt einen Pull Request für eine neue Login-Funktion. Ein Kollege findet im Review: 1. Passwort wird im Klartext geloggt (Sicherheitslücke), 2. Keine Eingabevalidierung (Bug), 3. Methode zu lang (50 Zeilen) → Refactoring vorgeschlagen.',
            ar: 'مطور ينشئ Pull Request لوظيفة تسجيل دخول جديدة. زميل يجد في المراجعة: 1. كلمة المرور تُسجل كنص واضح (ثغرة أمنية)، 2. لا تحقق من الإدخال (خطأ)، 3. الأسلوب طويل جداً (50 سطر) ← يُقترح إعادة هيكلة.',
          },
        ],
        examRelevance: {
          de: 'Code Reviews gehören zur statischen Analyse (kein Ausführen des Codes). Kennen Sie den Unterschied zu dynamischen Tests (Unit Tests etc.).',
          ar: 'مراجعات الكود تنتمي للتحليل الثابت (بدون تنفيذ الكود). اعرف الفرق مع الاختبارات الديناميكية (اختبارات الوحدة إلخ).',
        },
        summary: {
          de: 'Code Reviews prüfen Quellcode statisch durch Kollegenreview und verbessern Qualität, Sicherheit und Wartbarkeit.',
          ar: 'مراجعات الكود تفحص كود المصدر ثابتاً عبر مراجعة الزملاء وتحسن الجودة والأمان وقابلية الصيانة.',
        },
      },
    },
    {
      id: 'continuous-integration',
      name: {
        de: 'Continuous Integration (CI)',
        ar: 'التكامل المستمر (CI)',
      },
      content: {
        definition: {
          de: 'Continuous Integration (CI) ist die Praxis, Codeänderungen häufig (mehrmals täglich) in ein gemeinsames Repository zu integrieren. Jede Integration löst automatisch einen Build- und Testprozess aus, sodass Fehler schnell erkannt werden.',
          ar: 'التكامل المستمر (CI) هو ممارسة دمج تغييرات الكود بشكل متكرر (عدة مرات يومياً) في مستودع مشترك. كل دمج يُطلق تلقائياً عملية بناء واختبار بحيث تُكتشف الأخطاء بسرعة.',
        },
        keyPoints: [
          {
            de: 'Automatischer Build: Jeder Commit löst einen automatischen Build aus',
            ar: 'بناء تلقائي: كل Commit يُطلق بناءً تلقائياً',
          },
          {
            de: 'Automatische Tests: Unit Tests und Integrationstests laufen bei jedem Build',
            ar: 'اختبارات تلقائية: اختبارات الوحدة والتكامل تعمل مع كل بناء',
          },
          {
            de: 'CI/CD-Pipeline: Build → Test → Deploy (Continuous Delivery/Deployment)',
            ar: 'خط أنابيب CI/CD: بناء ← اختبار ← نشر (التسليم/النشر المستمر)',
          },
          {
            de: 'Tools: Jenkins, GitLab CI, GitHub Actions, Azure DevOps',
            ar: 'الأدوات: Jenkins، GitLab CI، GitHub Actions، Azure DevOps',
          },
        ],
        examples: [
          {
            de: 'CI-Pipeline in GitHub Actions: 1. Entwickler pusht Code. 2. Pipeline startet automatisch: Build → Unit Tests → Integrationstests → Code-Analyse. 3. Bei Erfolg: Merge erlaubt. Bei Fehler: Entwickler wird benachrichtigt.',
            ar: 'خط أنابيب CI في GitHub Actions: 1. المطور يرفع الكود. 2. الخط يبدأ تلقائياً: بناء ← اختبارات وحدة ← اختبارات تكامل ← تحليل كود. 3. عند النجاح: الدمج مسموح. عند الخطأ: يُخطر المطور.',
          },
        ],
        examRelevance: {
          de: 'CI wird oft im Kontext von DevOps und agiler Entwicklung gefragt. Verstehen Sie die CI/CD-Pipeline und deren Vorteile (schnelle Fehlererkennung).',
          ar: 'CI يُسأل غالباً في سياق DevOps والتطوير المرن. افهم خط أنابيب CI/CD ومزاياه (الكشف السريع عن الأخطاء).',
        },
        summary: {
          de: 'CI integriert Code häufig und führt automatisch Build und Tests aus, um Fehler frühzeitig zu erkennen.',
          ar: 'CI يدمج الكود بشكل متكرر وينفذ تلقائياً البناء والاختبارات لاكتشاف الأخطاء مبكراً.',
        },
      },
    },
  ],
};
