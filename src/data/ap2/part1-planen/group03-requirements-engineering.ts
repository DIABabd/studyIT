import type { TopicGroup } from '../../../types';

export const requirementsEngineering: TopicGroup = {
  id: 'group03',
  name: {
    de: 'Requirements Engineering',
    ar: 'هندسة المتطلبات',
  },
  description: {
    de: 'Systematische Ermittlung, Dokumentation und Verwaltung von Anforderungen an Softwaresysteme',
    ar: 'التحديد والتوثيق والإدارة المنهجية لمتطلبات أنظمة البرمجيات',
  },
  priority: 'very-high',
  topics: [
    {
      id: 'stakeholder-analysis',
      name: {
        de: 'Stakeholder-Analyse',
        ar: 'تحليل أصحاب المصلحة',
      },
      content: {
        definition: {
          de: 'Die Stakeholder-Analyse ist eine systematische Methode zur Identifikation und Bewertung aller Personen und Gruppen, die Einfluss auf das Projekt haben oder von ihm betroffen sind. Sie ordnet Stakeholder nach Einfluss und Interesse ein und leitet daraus Kommunikationsstrategien ab.',
          ar: 'تحليل أصحاب المصلحة هو أسلوب منهجي لتحديد وتقييم جميع الأشخاص والمجموعات التي تؤثر على المشروع أو تتأثر به. يصنف أصحاب المصلحة وفق التأثير والاهتمام ويستخلص منها استراتيجيات التواصل.',
        },
        keyPoints: [
          {
            de: 'Stakeholder-Matrix: Einordnung nach Einfluss (hoch/niedrig) und Interesse (hoch/niedrig)',
            ar: 'مصفوفة أصحاب المصلحة: تصنيف وفق التأثير (عالي/منخفض) والاهتمام (عالي/منخفض)',
          },
          {
            de: 'Hoher Einfluss + hohes Interesse → Eng einbinden (Key Players)',
            ar: 'تأثير عالي + اهتمام عالي ← إشراك وثيق (لاعبون رئيسيون)',
          },
          {
            de: 'Hoher Einfluss + niedriges Interesse → Zufriedenstellen',
            ar: 'تأثير عالي + اهتمام منخفض ← إرضاء',
          },
          {
            de: 'Ergebnisse fließen in den Kommunikationsplan ein',
            ar: 'النتائج تُدمج في خطة التواصل',
          },
        ],
        examples: [
          {
            de: 'Für ein neues Kundenportal wird eine Stakeholder-Matrix erstellt: Geschäftsführung (hoher Einfluss, hohes Interesse) → regelmäßige Statusberichte. Endkunden (niedriger Einfluss, hohes Interesse) → Beta-Test-Einladungen.',
            ar: 'لبوابة عملاء جديدة يتم إنشاء مصفوفة أصحاب المصلحة: الإدارة العليا (تأثير عالي، اهتمام عالي) ← تقارير حالة منتظمة. العملاء النهائيون (تأثير منخفض، اهتمام عالي) ← دعوات اختبار تجريبي.',
          },
        ],
        examRelevance: {
          de: 'Die Stakeholder-Matrix ist ein beliebtes Prüfungsthema. Ordnen Sie Stakeholder in die Matrix ein und leiten Sie Strategien ab.',
          ar: 'مصفوفة أصحاب المصلحة موضوع امتحان شائع. صنف أصحاب المصلحة في المصفوفة واستخلص الاستراتيجيات.',
        },
        summary: {
          de: 'Die Stakeholder-Analyse identifiziert und klassifiziert Projektbeteiligte nach Einfluss und Interesse für eine gezielte Kommunikation.',
          ar: 'تحليل أصحاب المصلحة يحدد ويصنف المشاركين في المشروع وفق التأثير والاهتمام للتواصل المستهدف.',
        },
      },
    },
    {
      id: 'functional-requirements',
      name: {
        de: 'Funktionale Anforderungen',
        ar: 'المتطلبات الوظيفية',
      },
      content: {
        definition: {
          de: 'Funktionale Anforderungen beschreiben, WAS ein System tun soll – also die konkreten Funktionen und Verhaltensweisen, die das System bereitstellen muss. Sie definieren Eingaben, Verarbeitungen und Ausgaben des Systems.',
          ar: 'المتطلبات الوظيفية تصف ماذا يجب أن يفعل النظام – أي الوظائف والسلوكيات المحددة التي يجب أن يوفرها النظام. تحدد المدخلات والمعالجات والمخرجات.',
        },
        keyPoints: [
          {
            de: 'Beschreiben konkrete Systemfunktionen: „Das System soll..."',
            ar: 'تصف وظائف النظام المحددة: "يجب أن يقوم النظام بـ..."',
          },
          {
            de: 'Beispiele: Benutzerregistrierung, Datenvalidierung, Berichterstellung, Suchfunktion',
            ar: 'أمثلة: تسجيل المستخدم، التحقق من البيانات، إنشاء التقارير، وظيفة البحث',
          },
          {
            de: 'Werden häufig als User Stories oder Use Cases dokumentiert',
            ar: 'تُوثق غالباً كقصص مستخدم أو حالات استخدام',
          },
        ],
        examples: [
          {
            de: 'Funktionale Anforderung: „Das System muss dem Benutzer ermöglichen, sich mit E-Mail und Passwort anzumelden. Nach drei fehlgeschlagenen Versuchen wird das Konto für 15 Minuten gesperrt."',
            ar: 'متطلب وظيفي: "يجب أن يتيح النظام للمستخدم تسجيل الدخول بالبريد الإلكتروني وكلمة المرور. بعد ثلاث محاولات فاشلة يتم قفل الحساب لمدة 15 دقيقة."',
          },
        ],
        examRelevance: {
          de: 'Unterscheiden Sie klar zwischen funktionalen und nicht-funktionalen Anforderungen. In der Prüfung wird häufig die Zuordnung abgefragt.',
          ar: 'ميّز بوضوح بين المتطلبات الوظيفية وغير الوظيفية. في الامتحان يُسأل كثيراً عن التصنيف.',
        },
        summary: {
          de: 'Funktionale Anforderungen definieren die konkreten Funktionen und das Verhalten, das ein System bereitstellen muss.',
          ar: 'المتطلبات الوظيفية تحدد الوظائف المحددة والسلوك الذي يجب أن يوفره النظام.',
        },
      },
    },
    {
      id: 'non-functional-requirements',
      name: {
        de: 'Nicht-funktionale Anforderungen',
        ar: 'المتطلبات غير الوظيفية',
      },
      content: {
        definition: {
          de: 'Nicht-funktionale Anforderungen beschreiben, WIE gut ein System arbeiten soll – also Qualitätseigenschaften wie Performance, Sicherheit, Zuverlässigkeit, Benutzbarkeit und Wartbarkeit. Sie ergänzen die funktionalen Anforderungen um Qualitätsmerkmale.',
          ar: 'المتطلبات غير الوظيفية تصف كيف يجب أن يعمل النظام بشكل جيد – أي خصائص الجودة مثل الأداء والأمان والموثوقية وقابلية الاستخدام والصيانة. تكمل المتطلبات الوظيفية بخصائص الجودة.',
        },
        keyPoints: [
          {
            de: 'Performance: Antwortzeit < 2 Sekunden, 1000 gleichzeitige Benutzer',
            ar: 'الأداء: وقت الاستجابة < ثانيتين، 1000 مستخدم متزامن',
          },
          {
            de: 'Sicherheit: Verschlüsselung, Zugriffskontrolle, Datenschutz',
            ar: 'الأمان: التشفير، التحكم في الوصول، حماية البيانات',
          },
          {
            de: 'Wartbarkeit: Modularer Aufbau, Dokumentation, Testabdeckung',
            ar: 'قابلية الصيانة: بناء معياري، التوثيق، تغطية الاختبارات',
          },
          {
            de: 'Verfügbarkeit: 99,9% Uptime, Ausfallsicherheit',
            ar: 'التوفر: 99.9% وقت التشغيل، الحماية من الأعطال',
          },
        ],
        examples: [
          {
            de: 'Nicht-funktionale Anforderungen für einen Online-Shop: „Die Seite muss innerhalb von 2 Sekunden laden. Das System muss 10.000 Bestellungen pro Stunde verarbeiten können. Die Verfügbarkeit muss mindestens 99,5% betragen."',
            ar: 'متطلبات غير وظيفية لمتجر إلكتروني: "يجب أن تُحمّل الصفحة خلال ثانيتين. يجب أن يتمكن النظام من معالجة 10,000 طلب في الساعة. يجب أن يكون التوفر 99.5% على الأقل."',
          },
        ],
        examRelevance: {
          de: 'Typische Prüfungsfrage: Ordnen Sie Anforderungen als funktional oder nicht-funktional ein. Kennen Sie die Kategorien (Performance, Sicherheit, Usability).',
          ar: 'سؤال امتحان نموذجي: صنف المتطلبات كوظيفية أو غير وظيفية. اعرف الفئات (الأداء، الأمان، سهولة الاستخدام).',
        },
        summary: {
          de: 'Nicht-funktionale Anforderungen definieren Qualitätseigenschaften wie Performance, Sicherheit und Verfügbarkeit eines Systems.',
          ar: 'المتطلبات غير الوظيفية تحدد خصائص الجودة مثل الأداء والأمان والتوفر للنظام.',
        },
      },
    },
    {
      id: 'lastenheft',
      name: {
        de: 'Lastenheft',
        ar: 'دفتر المتطلبات (Lastenheft)',
      },
      content: {
        definition: {
          de: 'Das Lastenheft wird vom Auftraggeber erstellt und beschreibt die Gesamtheit der Anforderungen an das zu liefernde System aus Sicht des Auftraggebers. Es beantwortet die Frage: WAS soll geliefert werden und WOFÜR wird es benötigt? (DIN 69901)',
          ar: 'دفتر المتطلبات يُعده صاحب العمل (العميل) ويصف مجمل المتطلبات للنظام المراد تسليمه من وجهة نظر العميل. يجيب على السؤال: ماذا يجب تسليمه ولماذا يُحتاج إليه؟ (DIN 69901)',
        },
        keyPoints: [
          {
            de: 'Wird vom Auftraggeber (Kunden) erstellt',
            ar: 'يُعده صاحب العمل (العميل)',
          },
          {
            de: 'Beschreibt WAS geliefert werden soll (fachliche Anforderungen)',
            ar: 'يصف ماذا يجب تسليمه (المتطلبات المهنية)',
          },
          {
            de: 'Enthält: Ausgangssituation, Zielsetzung, funktionale/nicht-funktionale Anforderungen, Rahmenbedingungen',
            ar: 'يحتوي على: الوضع الحالي، الأهداف، المتطلبات الوظيفية/غير الوظيفية، الشروط الإطارية',
          },
          {
            de: 'Ist die Grundlage für das Pflichtenheft des Auftragnehmers',
            ar: 'هو الأساس لدفتر الشروط الخاص بالمتعهد',
          },
        ],
        examples: [
          {
            de: 'Ein Unternehmen erstellt ein Lastenheft für eine neue Lagerverwaltung: „Es soll ein System zur Verwaltung von 50.000 Artikeln mit Echtzeit-Bestandsführung, Barcode-Scanning und Anbindung an das bestehende ERP-System bereitgestellt werden."',
            ar: 'شركة تعد دفتر متطلبات لنظام إدارة مستودعات جديد: "يجب توفير نظام لإدارة 50,000 منتج مع إدارة مخزون في الوقت الحقيقي ومسح الباركود والربط مع نظام ERP الحالي."',
          },
        ],
        examRelevance: {
          de: 'Die Unterscheidung Lastenheft vs. Pflichtenheft ist eine der häufigsten Prüfungsfragen. Merken Sie sich: Lastenheft = Auftraggeber (WAS), Pflichtenheft = Auftragnehmer (WIE).',
          ar: 'التمييز بين Lastenheft و Pflichtenheft من أكثر أسئلة الامتحان شيوعاً. تذكر: Lastenheft = العميل (ماذا)، Pflichtenheft = المتعهد (كيف).',
        },
        summary: {
          de: 'Das Lastenheft beschreibt die Anforderungen des Auftraggebers (WAS soll geliefert werden) und ist Grundlage für das Pflichtenheft.',
          ar: 'دفتر المتطلبات يصف متطلبات العميل (ماذا يجب تسليمه) وهو الأساس لدفتر الشروط.',
        },
      },
    },
    {
      id: 'pflichtenheft',
      name: {
        de: 'Pflichtenheft',
        ar: 'دفتر الشروط (Pflichtenheft)',
      },
      content: {
        definition: {
          de: 'Das Pflichtenheft wird vom Auftragnehmer erstellt und beschreibt, WIE die Anforderungen des Lastenhefts technisch umgesetzt werden sollen. Es konkretisiert die fachlichen Anforderungen in technische Lösungskonzepte und bildet die vertragliche Grundlage für die Umsetzung.',
          ar: 'دفتر الشروط يُعده المتعهد (المنفذ) ويصف كيف سيتم تنفيذ متطلبات دفتر المتطلبات تقنياً. يحول المتطلبات المهنية إلى مفاهيم حلول تقنية ويشكل الأساس التعاقدي للتنفيذ.',
        },
        keyPoints: [
          {
            de: 'Wird vom Auftragnehmer (Entwickler) erstellt, basierend auf dem Lastenheft',
            ar: 'يُعده المتعهد (المطور) بناءً على دفتر المتطلبات',
          },
          {
            de: 'Beschreibt WIE die Anforderungen technisch umgesetzt werden',
            ar: 'يصف كيف سيتم تنفيذ المتطلبات تقنياً',
          },
          {
            de: 'Enthält: Systemarchitektur, Datenmodelle, Schnittstellenbeschreibungen, Technologieauswahl',
            ar: 'يحتوي على: هندسة النظام، نماذج البيانات، وصف الواجهات، اختيار التقنيات',
          },
        ],
        examples: [
          {
            de: 'Das Pflichtenheft für die Lagerverwaltung beschreibt: „Die Anwendung wird als Webanwendung mit React-Frontend und Node.js-Backend umgesetzt. Die Daten werden in einer PostgreSQL-Datenbank gespeichert. Die Barcode-Scanner werden über eine REST-API angebunden."',
            ar: 'دفتر الشروط لإدارة المستودعات يصف: "سيتم تنفيذ التطبيق كتطبيق ويب بواجهة React وخلفية Node.js. ستُخزن البيانات في قاعدة بيانات PostgreSQL. ستُربط ماسحات الباركود عبر REST-API."',
          },
        ],
        examRelevance: {
          de: 'Pflichtenheft = Auftragnehmer = WIE. Diese Zuordnung muss sitzen. Typische Frage: Wer erstellt das Lastenheft/Pflichtenheft?',
          ar: 'Pflichtenheft = المتعهد = كيف. هذا التصنيف يجب أن يكون ثابتاً. سؤال نموذجي: من يعد Lastenheft/Pflichtenheft؟',
        },
        summary: {
          de: 'Das Pflichtenheft beschreibt die technische Umsetzung (WIE) der Anforderungen aus dem Lastenheft und wird vom Auftragnehmer erstellt.',
          ar: 'دفتر الشروط يصف التنفيذ التقني (كيف) لمتطلبات دفتر المتطلبات ويُعده المتعهد.',
        },
      },
    },
    {
      id: 'use-cases',
      name: {
        de: 'Use Cases',
        ar: 'حالات الاستخدام',
      },
      content: {
        definition: {
          de: 'Ein Use Case (Anwendungsfall) beschreibt eine spezifische Interaktion zwischen einem Akteur (Benutzer oder externes System) und dem System, um ein bestimmtes Ziel zu erreichen. Use Cases dokumentieren das funktionale Verhalten eines Systems aus der Perspektive des Benutzers.',
          ar: 'حالة الاستخدام تصف تفاعلاً محدداً بين فاعل (مستخدم أو نظام خارجي) والنظام لتحقيق هدف معين. توثق حالات الاستخدام السلوك الوظيفي للنظام من منظور المستخدم.',
        },
        keyPoints: [
          {
            de: 'Bestandteile: Name, Akteur, Vorbedingung, Hauptszenario, Alternativszenarien, Nachbedingung',
            ar: 'المكونات: الاسم، الفاعل، الشرط المسبق، السيناريو الرئيسي، السيناريوهات البديلة، الشرط اللاحق',
          },
          {
            de: 'Akteure können Personen, Rollen oder externe Systeme sein',
            ar: 'الفاعلون يمكن أن يكونوا أشخاصاً أو أدواراً أو أنظمة خارجية',
          },
          {
            de: 'Use Cases werden in Use-Case-Diagrammen visualisiert',
            ar: 'تُعرض حالات الاستخدام في مخططات حالات الاستخدام',
          },
        ],
        examples: [
          {
            de: 'Use Case „Produkt bestellen": Akteur: Kunde. Vorbedingung: Kunde ist angemeldet. Hauptszenario: 1. Kunde wählt Produkt, 2. Legt es in den Warenkorb, 3. Geht zur Kasse, 4. Gibt Zahlungsdaten ein, 5. Bestätigt Bestellung. Nachbedingung: Bestellung ist im System erfasst.',
            ar: 'حالة استخدام "طلب منتج": الفاعل: العميل. الشرط المسبق: العميل مُسجّل الدخول. السيناريو الرئيسي: 1. يختار المنتج، 2. يضعه في السلة، 3. يذهب للدفع، 4. يُدخل بيانات الدفع، 5. يؤكد الطلب. الشرط اللاحق: الطلب مسجل في النظام.',
          },
        ],
        examRelevance: {
          de: 'Use Cases kommen sowohl als Text als auch als Diagramm in der Prüfung vor. Können Sie Use Cases schreiben und in Diagrammen darstellen.',
          ar: 'حالات الاستخدام تظهر في الامتحان كنص وكمخطط. كن قادراً على كتابة حالات الاستخدام وتمثيلها في مخططات.',
        },
        summary: {
          de: 'Use Cases beschreiben Interaktionen zwischen Akteuren und dem System mit Vor-/Nachbedingungen und Szenarien.',
          ar: 'حالات الاستخدام تصف التفاعلات بين الفاعلين والنظام مع شروط مسبقة/لاحقة وسيناريوهات.',
        },
      },
    },
    {
      id: 'requirement-specification',
      name: {
        de: 'Anforderungsspezifikation',
        ar: 'مواصفات المتطلبات',
      },
      content: {
        definition: {
          de: 'Die Anforderungsspezifikation ist ein Dokument, das alle funktionalen und nicht-funktionalen Anforderungen an ein System präzise, vollständig und widerspruchsfrei beschreibt. Sie dient als Referenz für Entwicklung und Test.',
          ar: 'مواصفات المتطلبات هي وثيقة تصف جميع المتطلبات الوظيفية وغير الوظيفية للنظام بدقة وشمولية وبدون تناقض. تعمل كمرجع للتطوير والاختبار.',
        },
        keyPoints: [
          {
            de: 'Anforderungen müssen eindeutig, vollständig, konsistent und testbar sein',
            ar: 'يجب أن تكون المتطلبات واضحة وشاملة ومتسقة وقابلة للاختبار',
          },
          {
            de: 'Jede Anforderung erhält eine eindeutige ID zur Nachverfolgbarkeit (Traceability)',
            ar: 'كل متطلب يحصل على معرّف فريد للتتبع (Traceability)',
          },
          {
            de: 'Natürlichsprachliche Anforderungen sind oft mehrdeutig – strukturierte Vorlagen helfen',
            ar: 'المتطلبات بالمقلمات الطبيعية غالباً غامضة – القوالب المنظمة تساعد',
          },
        ],
        examples: [
          {
            de: 'REQ-001: „Das System muss die Eingabe eines Passworts mit mindestens 8 Zeichen, einem Großbuchstaben und einer Zahl validieren." – Eindeutig, messbar und testbar.',
            ar: 'REQ-001: "يجب أن يتحقق النظام من إدخال كلمة مرور بحد أدنى 8 أحرف وحرف كبير ورقم واحد." – واضح وقابل للقياس والاختبار.',
          },
        ],
        examRelevance: {
          de: 'In der Prüfung wird nach Qualitätskriterien für Anforderungen gefragt. Können Sie eine Anforderung als gut oder schlecht formuliert bewerten.',
          ar: 'في الامتحان يُسأل عن معايير جودة المتطلبات. كن قادراً على تقييم متطلب على أنه مصاغ بشكل جيد أو سيء.',
        },
        summary: {
          de: 'Die Anforderungsspezifikation dokumentiert alle Anforderungen eindeutig, vollständig und testbar als Entwicklungsgrundlage.',
          ar: 'مواصفات المتطلبات توثق جميع المتطلبات بشكل واضح وشامل وقابل للاختبار كأساس للتطوير.',
        },
      },
    },
    {
      id: 'requirement-validation',
      name: {
        de: 'Anforderungsvalidierung',
        ar: 'التحقق من المتطلبات',
      },
      content: {
        definition: {
          de: 'Anforderungsvalidierung überprüft, ob die dokumentierten Anforderungen die tatsächlichen Bedürfnisse der Stakeholder korrekt widerspiegeln. Methoden sind Reviews, Prototyping, Walkthroughs und formale Inspektionen.',
          ar: 'التحقق من المتطلبات يفحص ما إذا كانت المتطلبات الموثقة تعكس بشكل صحيح الاحتياجات الفعلية لأصحاب المصلحة. الأساليب تشمل المراجعات والنمذجة الأولية والعروض التوضيحية والفحوصات الرسمية.',
        },
        keyPoints: [
          {
            de: 'Reviews: Formale Überprüfung der Anforderungsdokumente durch Experten und Stakeholder',
            ar: 'المراجعات: فحص رسمي لوثائق المتطلبات من قبل الخبراء وأصحاب المصلحة',
          },
          {
            de: 'Prototyping: Erstellung eines vereinfachten Modells zur Überprüfung der Anforderungen',
            ar: 'النمذجة الأولية: إنشاء نموذج مبسط للتحقق من المتطلبات',
          },
          {
            de: 'Prüfkriterien: Vollständigkeit, Konsistenz, Korrektheit, Machbarkeit, Testbarkeit',
            ar: 'معايير الفحص: الشمولية، الاتساق، الصحة، الجدوى، قابلية الاختبار',
          },
        ],
        examples: [
          {
            de: 'Ein Review-Meeting mit dem Kunden deckt auf, dass eine Anforderung mehrdeutig ist: „Das System soll schnell reagieren" wird zu „Die Antwortzeit darf 2 Sekunden nicht überschreiten" präzisiert.',
            ar: 'اجتماع مراجعة مع العميل يكشف أن متطلباً غامض: "يجب أن يستجيب النظام بسرعة" يُدقق إلى "يجب ألا يتجاوز وقت الاستجابة ثانيتين".',
          },
        ],
        examRelevance: {
          de: 'Verstehen Sie den Unterschied zwischen Verifikation (richtig gebaut?) und Validierung (richtiges Produkt?). Dies ist eine häufige Prüfungsfrage.',
          ar: 'افهم الفرق بين التحقق (هل بُني بشكل صحيح؟) والمصادقة (هل هو المنتج الصحيح؟). هذا سؤال امتحان شائع.',
        },
        summary: {
          de: 'Anforderungsvalidierung stellt sicher, dass die dokumentierten Anforderungen die tatsächlichen Stakeholder-Bedürfnisse korrekt abbilden.',
          ar: 'التحقق من المتطلبات يضمن أن المتطلبات الموثقة تعكس بشكل صحيح احتياجات أصحاب المصلحة الفعلية.',
        },
      },
    },
    {
      id: 'requirement-prioritization',
      name: {
        de: 'Anforderungspriorisierung',
        ar: 'ترتيب أولويات المتطلبات',
      },
      content: {
        definition: {
          de: 'Anforderungspriorisierung ist der Prozess der Bewertung und Rangordnung von Anforderungen nach ihrer Wichtigkeit und Dringlichkeit. Gängige Methoden sind MoSCoW (Must, Should, Could, Won\'t), Kano-Modell und Paarweiser Vergleich.',
          ar: 'ترتيب أولويات المتطلبات هو عملية تقييم وترتيب المتطلبات حسب أهميتها وإلحاحها. الأساليب الشائعة هي MoSCoW (يجب، ينبغي، يمكن، لن) ونموذج Kano والمقارنة الزوجية.',
        },
        keyPoints: [
          {
            de: 'MoSCoW: Must have (Muss), Should have (Soll), Could have (Kann), Won\'t have (Wird nicht umgesetzt)',
            ar: 'MoSCoW: يجب (Must)، ينبغي (Should)، يمكن (Could)، لن يُنفذ (Won\'t)',
          },
          {
            de: 'Kano-Modell: Unterscheidet Basis-, Leistungs- und Begeisterungsfaktoren',
            ar: 'نموذج Kano: يميز بين العوامل الأساسية وعوامل الأداء وعوامل الإثارة',
          },
          {
            de: 'Priorisierung hilft bei begrenztem Budget und Zeitrahmen die wichtigsten Features zuerst umzusetzen',
            ar: 'الترتيب يساعد عند محدودية الميزانية والإطار الزمني في تنفيذ أهم الميزات أولاً',
          },
        ],
        examples: [
          {
            de: 'MoSCoW für einen Online-Shop: Must: Produktsuche, Warenkorb, Bezahlung. Should: Wunschliste, Produktbewertungen. Could: Chat-Support. Won\'t: KI-basierte Empfehlungen (in Version 1).',
            ar: 'MoSCoW لمتجر إلكتروني: يجب: البحث عن المنتجات، سلة التسوق، الدفع. ينبغي: قائمة الأمنيات، تقييمات المنتجات. يمكن: دعم الدردشة. لن: توصيات مبنية على الذكاء الاصطناعي (في الإصدار الأول).',
          },
        ],
        examRelevance: {
          de: 'Die MoSCoW-Methode ist prüfungsrelevant. Können Sie Anforderungen nach MoSCoW klassifizieren und die Methode erklären.',
          ar: 'أسلوب MoSCoW مهم للامتحان. كن قادراً على تصنيف المتطلبات وفق MoSCoW وشرح الأسلوب.',
        },
        summary: {
          de: 'Anforderungspriorisierung ordnet Anforderungen nach Wichtigkeit, z.B. mit MoSCoW, um die Umsetzungsreihenfolge festzulegen.',
          ar: 'ترتيب أولويات المتطلبات يصنف المتطلبات حسب الأهمية، مثلاً بـ MoSCoW، لتحديد ترتيب التنفيذ.',
        },
      },
    },
  ],
};
