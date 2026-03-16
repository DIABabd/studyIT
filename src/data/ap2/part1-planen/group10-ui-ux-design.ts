import type { TopicGroup } from '../../../types';

export const uiUxDesign: TopicGroup = {
  id: 'group10',
  name: {
    de: 'UI/UX-Design',
    ar: 'تصميم واجهة وتجربة المستخدم',
  },
  description: {
    de: 'Grundlagen der Benutzeroberflächen- und Benutzererfahrungsgestaltung für Softwareprodukte',
    ar: 'أساسيات تصميم واجهة المستخدم وتجربة المستخدم للمنتجات البرمجية',
  },
  topics: [
    {
      id: 'usability-principles',
      name: {
        de: 'Usability-Prinzipien',
        ar: 'مبادئ قابلية الاستخدام',
      },
      content: {
        definition: {
          de: 'Usability (Gebrauchstauglichkeit) beschreibt, wie effektiv, effizient und zufriedenstellend ein Benutzer ein Produkt nutzen kann. Die wichtigsten Prinzipien basieren auf den Nielsen-Heuristiken und der ISO 9241-110 mit Grundsätzen wie Aufgabenangemessenheit, Selbstbeschreibungsfähigkeit und Fehlertoleranz.',
          ar: 'قابلية الاستخدام تصف مدى فعالية وكفاءة ورضا المستخدم عند استخدام منتج. أهم المبادئ تستند إلى إرشادات Nielsen ومعيار ISO 9241-110 بمبادئ مثل ملاءمة المهمة والوصف الذاتي والتسامح مع الأخطاء.',
        },
        keyPoints: [
          {
            de: 'Aufgabenangemessenheit: Das System unterstützt den Benutzer bei der Erledigung seiner Aufgaben',
            ar: 'ملاءمة المهمة: النظام يدعم المستخدم في إنجاز مهامه',
          },
          {
            de: 'Selbstbeschreibungsfähigkeit: Der Benutzer weiß jederzeit, wo er sich befindet und was er tun kann',
            ar: 'الوصف الذاتي: المستخدم يعرف دائماً أين هو وماذا يمكنه فعله',
          },
          {
            de: 'Fehlertoleranz: Das System verhindert Fehler oder ermöglicht einfache Korrektur',
            ar: 'التسامح مع الأخطاء: النظام يمنع الأخطاء أو يتيح التصحيح السهل',
          },
          {
            de: 'Erwartungskonformität: Das System verhält sich so, wie der Benutzer es erwartet',
            ar: 'توافق التوقعات: النظام يتصرف كما يتوقع المستخدم',
          },
        ],
        examples: [
          {
            de: 'Fehlertoleranz: Ein Formular zeigt Validierungsfehler direkt am betroffenen Feld an (nicht nur oben auf der Seite). Der Benutzer kann die Eingabe korrigieren, ohne das Formular neu ausfüllen zu müssen.',
            ar: 'التسامح مع الأخطاء: نموذج يعرض أخطاء التحقق مباشرة عند الحقل المعني (ليس فقط أعلى الصفحة). يمكن للمستخدم تصحيح الإدخال دون إعادة ملء النموذج.',
          },
        ],
        examRelevance: {
          de: 'Die Dialogprinzipien der ISO 9241-110 sind prüfungsrelevant. Kennen Sie mindestens die wichtigsten: Aufgabenangemessenheit, Selbstbeschreibungsfähigkeit, Fehlertoleranz, Erwartungskonformität.',
          ar: 'مبادئ الحوار في ISO 9241-110 مهمة للامتحان. اعرف على الأقل الأهم: ملاءمة المهمة، الوصف الذاتي، التسامح مع الأخطاء، توافق التوقعات.',
        },
        summary: {
          de: 'Usability-Prinzipien (ISO 9241-110) gewährleisten benutzerfreundliche Systeme durch Aufgabenangemessenheit, Fehlertoleranz und Erwartungskonformität.',
          ar: 'مبادئ قابلية الاستخدام (ISO 9241-110) تضمن أنظمة سهلة الاستخدام من خلال ملاءمة المهمة والتسامح مع الأخطاء وتوافق التوقعات.',
        },
      },
    },
    {
      id: 'mockups',
      name: {
        de: 'Mockups',
        ar: 'نماذج بصرية (Mockups)',
      },
      content: {
        definition: {
          de: 'Ein Mockup ist ein visueller Entwurf einer Benutzeroberfläche, der das endgültige Design detailliert darstellt – einschließlich Layout, Farben, Typografie und Bilder. Im Gegensatz zum Wireframe ist ein Mockup hochauflösend und zeigt das finale Aussehen.',
          ar: 'النموذج البصري هو تصميم مرئي لواجهة المستخدم يعرض التصميم النهائي بالتفصيل – بما في ذلك التخطيط والألوان والخطوط والصور. على عكس Wireframe النموذج البصري عالي الدقة ويُظهر المظهر النهائي.',
        },
        keyPoints: [
          {
            de: 'Wireframe → Mockup → Prototyp: Vom einfachen Entwurf zum interaktiven Modell',
            ar: 'Wireframe ← Mockup ← Prototyp: من التصميم البسيط إلى النموذج التفاعلي',
          },
          {
            de: 'Mockups sind statisch (nicht klickbar) und zeigen das visuelle Design',
            ar: 'النماذج البصرية ثابتة (غير قابلة للنقر) وتُظهر التصميم المرئي',
          },
          {
            de: 'Werkzeuge: Figma, Adobe XD, Sketch, Balsamiq (für Wireframes)',
            ar: 'الأدوات: Figma، Adobe XD، Sketch، Balsamiq (لـ Wireframes)',
          },
        ],
        examples: [
          {
            de: 'Für eine Mobile-App wird zunächst ein Wireframe (Drahtgittermodell) mit groben Platzhaltern erstellt. Dann ein Mockup mit dem finalen Design (Farben, Icons, Schriftarten). Zuletzt ein klickbarer Prototyp für Benutzertests.',
            ar: 'لتطبيق هاتف يتم أولاً إنشاء Wireframe (نموذج سلكي) بعناصر تقريبية. ثم نموذج بصري بالتصميم النهائي (ألوان، أيقونات، خطوط). وأخيراً نموذج أولي قابل للنقر لاختبارات المستخدم.',
          },
        ],
        examRelevance: {
          de: 'Kennen Sie die Unterschiede: Wireframe (grobe Struktur) → Mockup (visuelles Design) → Prototyp (interaktiv). Diese Reihenfolge wird oft abgefragt.',
          ar: 'اعرف الفروقات: Wireframe (هيكل تقريبي) ← Mockup (تصميم مرئي) ← Prototyp (تفاعلي). هذا الترتيب يُسأل عنه كثيراً.',
        },
        summary: {
          de: 'Mockups sind detaillierte visuelle Entwürfe der Benutzeroberfläche zwischen Wireframe und Prototyp.',
          ar: 'النماذج البصرية هي تصاميم مرئية مفصلة لواجهة المستخدم بين Wireframe والنموذج الأولي.',
        },
      },
    },
    {
      id: 'prototyping',
      name: {
        de: 'Prototyping',
        ar: 'النمذجة الأولية (Prototyping)',
      },
      content: {
        definition: {
          de: 'Prototyping ist die Erstellung eines vereinfachten, funktionsfähigen Modells eines Softwareprodukts. Prototypen dienen dazu, Anforderungen zu validieren, Design-Entscheidungen zu überprüfen und frühes Benutzerfeedback zu erhalten, bevor die vollständige Entwicklung beginnt.',
          ar: 'النمذجة الأولية هي إنشاء نموذج مبسط وعملي لمنتج برمجي. النماذج الأولية تُستخدم للتحقق من المتطلبات ومراجعة قرارات التصميم والحصول على ملاحظات مبكرة من المستخدمين قبل بدء التطوير الكامل.',
        },
        keyPoints: [
          {
            de: 'Throw-Away-Prototyp: Wird nach der Evaluierung verworfen (nur für Anforderungsklärung)',
            ar: 'نموذج أولي مؤقت: يُتخلص منه بعد التقييم (فقط لتوضيح المتطلبات)',
          },
          {
            de: 'Evolutionärer Prototyp: Wird schrittweise zum fertigen Produkt weiterentwickelt',
            ar: 'نموذج أولي تطوري: يُطور تدريجياً ليصبح المنتج النهائي',
          },
          {
            de: 'Paper Prototyping: Schnelle Skizzen auf Papier für erste Tests',
            ar: 'النمذجة الورقية: رسومات سريعة على الورق للاختبارات الأولى',
          },
        ],
        examples: [
          {
            de: 'Für eine neue Banking-App wird ein klickbarer Prototyp in Figma erstellt. Testpersonen durchlaufen typische Szenarien (Überweisung, Kontostand prüfen) und geben Feedback zur Navigation und Verständlichkeit.',
            ar: 'لتطبيق مصرفي جديد يتم إنشاء نموذج أولي قابل للنقر في Figma. أشخاص الاختبار يمرون بسيناريوهات نموذجية (تحويل، فحص الرصيد) ويقدمون ملاحظات حول التنقل والوضوح.',
          },
        ],
        examRelevance: {
          de: 'Kennen Sie die Prototyp-Arten (Throw-Away vs. Evolutionär) und deren Einsatzzweck. Wann ist welcher Typ sinnvoll?',
          ar: 'اعرف أنواع النماذج الأولية (مؤقت مقابل تطوري) واستخدامها. متى يكون أي نوع مناسباً؟',
        },
        summary: {
          de: 'Prototyping erstellt vereinfachte Modelle für frühes Feedback, entweder als Throw-Away oder evolutionärer Prototyp.',
          ar: 'النمذجة الأولية تنشئ نماذج مبسطة للملاحظات المبكرة، إما كنموذج مؤقت أو تطوري.',
        },
      },
    },
    {
      id: 'user-interface-design',
      name: {
        de: 'Benutzeroberflächendesign',
        ar: 'تصميم واجهة المستخدم',
      },
      content: {
        definition: {
          de: 'Benutzeroberflächendesign (UI-Design) umfasst die visuelle Gestaltung aller Elemente, mit denen der Benutzer interagiert. Es beinhaltet Layout, Farbschema, Typografie, Icons, Buttons und die Anordnung von Bedienelementen nach ergonomischen Grundsätzen.',
          ar: 'تصميم واجهة المستخدم (UI) يشمل التصميم المرئي لجميع العناصر التي يتفاعل معها المستخدم. يتضمن التخطيط ونظام الألوان والخطوط والأيقونات والأزرار وترتيب عناصر التحكم وفق مبادئ بيئة العمل.',
        },
        keyPoints: [
          {
            de: 'Konsistenz: Gleiche Elemente sehen überall gleich aus und verhalten sich gleich',
            ar: 'الاتساق: العناصر المتشابهة تبدو وتتصرف بنفس الطريقة في كل مكان',
          },
          {
            de: 'Barrierefreiheit: Zugänglichkeit für Menschen mit Beeinträchtigungen (WCAG-Richtlinien)',
            ar: 'إمكانية الوصول: الوصول للأشخاص ذوي الإعاقة (إرشادات WCAG)',
          },
          {
            de: 'Responsive Design: Anpassung an verschiedene Bildschirmgrößen und Geräte',
            ar: 'التصميم المتجاوب: التكيف مع أحجام الشاشات والأجهزة المختلفة',
          },
        ],
        examples: [
          {
            de: 'UI-Design-Richtlinie: Primäre Aktionsbuttons sind blau mit weißer Schrift, sekundäre Buttons haben einen Rahmen ohne Füllung. Formulare haben immer Labels über den Eingabefeldern. Fehlermeldungen erscheinen in Rot unter dem betroffenen Feld.',
            ar: 'إرشادات تصميم UI: أزرار الإجراء الأساسية زرقاء بخط أبيض، الأزرار الثانوية بإطار بدون تعبئة. النماذج دائماً لها تسميات فوق حقول الإدخال. رسائل الخطأ تظهر بالأحمر تحت الحقل المعني.',
          },
        ],
        examRelevance: {
          de: 'UI-Design wird oft im Zusammenhang mit Barrierefreiheit und Responsive Design gefragt. Kennen Sie die grundlegenden Gestaltungsprinzipien.',
          ar: 'تصميم UI يُسأل غالباً في سياق إمكانية الوصول والتصميم المتجاوب. اعرف مبادئ التصميم الأساسية.',
        },
        summary: {
          de: 'UI-Design gestaltet Benutzeroberflächen konsistent, barrierefrei und responsiv nach ergonomischen Grundsätzen.',
          ar: 'تصميم UI يصمم واجهات المستخدم بشكل متسق وقابل للوصول ومتجاوب وفق مبادئ بيئة العمل.',
        },
      },
    },
    {
      id: 'user-experience-evaluation',
      name: {
        de: 'User Experience Evaluation',
        ar: 'تقييم تجربة المستخدم',
      },
      content: {
        definition: {
          de: 'User Experience (UX) Evaluation umfasst Methoden zur Bewertung der Gesamterfahrung eines Benutzers mit einem Produkt. Dazu gehören Usability-Tests, Heuristische Evaluation, A/B-Tests und Fragebögen wie den System Usability Scale (SUS).',
          ar: 'تقييم تجربة المستخدم (UX) يشمل أساليب لتقييم التجربة الشاملة للمستخدم مع المنتج. تشمل اختبارات قابلية الاستخدام والتقييم الإرشادي واختبارات A/B والاستبيانات مثل مقياس قابلية استخدام النظام (SUS).',
        },
        keyPoints: [
          {
            de: 'Usability-Test: Echte Benutzer führen Aufgaben aus, Beobachter notieren Probleme',
            ar: 'اختبار قابلية الاستخدام: مستخدمون حقيقيون ينفذون مهام والمراقبون يسجلون المشاكل',
          },
          {
            de: 'Heuristische Evaluation: Experten bewerten die Oberfläche anhand von Heuristiken (z.B. Nielsen)',
            ar: 'التقييم الإرشادي: خبراء يقيمون الواجهة بناءً على إرشادات (مثل Nielsen)',
          },
          {
            de: 'A/B-Test: Zwei Varianten werden parallel getestet, die bessere wird gewählt',
            ar: 'اختبار A/B: يتم اختبار نسختين بالتوازي واختيار الأفضل',
          },
        ],
        examples: [
          {
            de: 'Ein Usability-Test für einen Online-Shop: 5 Testpersonen sollen ein bestimmtes Produkt finden und bestellen. Gemessen werden: Aufgabenerfolg, benötigte Zeit, Anzahl der Klicks und subjektive Zufriedenheit.',
            ar: 'اختبار قابلية استخدام لمتجر إلكتروني: 5 أشخاص اختبار يجب أن يجدوا منتجاً معيناً ويطلبوه. يُقاس: نجاح المهمة، الوقت المطلوب، عدد النقرات والرضا الشخصي.',
          },
        ],
        examRelevance: {
          de: 'Kennen Sie die verschiedenen Evaluationsmethoden und wann welche eingesetzt wird. Usability-Tests mit echten Benutzern sind am aussagekräftigsten.',
          ar: 'اعرف أساليب التقييم المختلفة ومتى تُستخدم كل منها. اختبارات قابلية الاستخدام مع مستخدمين حقيقيين هي الأكثر دلالة.',
        },
        summary: {
          de: 'UX-Evaluation bewertet die Benutzererfahrung durch Usability-Tests, heuristische Evaluation und A/B-Tests.',
          ar: 'تقييم UX يقيم تجربة المستخدم من خلال اختبارات قابلية الاستخدام والتقييم الإرشادي واختبارات A/B.',
        },
      },
    },
  ],
};
