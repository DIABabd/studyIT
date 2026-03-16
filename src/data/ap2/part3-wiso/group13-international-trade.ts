import type { TopicGroup } from '../../../types';

export const internationalTrade: TopicGroup = {
  id: 'group13-international-trade',
  name: {
    de: 'Internationaler Handel',
    ar: 'التجارة الدولية',
  },
  description: {
    de: 'Grundlagen des internationalen Handels: Import, Export und Zollwesen',
    ar: 'أساسيات التجارة الدولية: الاستيراد والتصدير والشؤون الجمركية',
  },
  topics: [
    {
      id: 'import',
      name: { de: 'Import', ar: 'الاستيراد' },
      content: {
        definition: {
          de: 'Import bezeichnet die Einfuhr von Waren und Dienstleistungen aus dem Ausland in das Inland. Deutschland importiert eine Vielzahl von IT-Produkten, Rohstoffen und Komponenten. Innerhalb der EU herrscht freier Warenverkehr ohne Zölle. Bei Importen aus Nicht-EU-Ländern fallen Zölle und Einfuhrumsatzsteuer an.',
          ar: 'الاستيراد هو إدخال السلع والخدمات من الخارج إلى الداخل. تستورد ألمانيا مجموعة متنوعة من منتجات تكنولوجيا المعلومات والمواد الخام والمكونات. داخل الاتحاد الأوروبي يسود حرية حركة البضائع بدون رسوم جمركية. عند الاستيراد من دول خارج الاتحاد الأوروبي تُفرض رسوم جمركية وضريبة استيراد مبيعات.',
        },
        keyPoints: [
          {
            de: 'EU-Binnenmarkt: Freier Warenverkehr ohne Zölle zwischen EU-Mitgliedstaaten',
            ar: 'السوق الداخلية للاتحاد الأوروبي: حرية حركة البضائع بدون رسوم جمركية بين الدول الأعضاء',
          },
          {
            de: 'Drittländer: Bei Import aus Nicht-EU-Ländern fallen Zölle und Einfuhrumsatzsteuer (19% bzw. 7%) an',
            ar: 'الدول الثالثة: عند الاستيراد من دول خارج الاتحاد الأوروبي تُفرض رسوم جمركية وضريبة استيراد مبيعات (19% أو 7%)',
          },
          {
            de: 'Import beeinflusst die Handelsbilanz: Übersteigen die Importe die Exporte, entsteht ein Handelsbilanzdefizit',
            ar: 'يؤثر الاستيراد على الميزان التجاري: عندما تفوق الواردات الصادرات ينشأ عجز في الميزان التجاري',
          },
        ],
        examples: [
          {
            de: 'Ein deutsches IT-Unternehmen importiert Server-Hardware aus den USA. Es muss Zoll und Einfuhrumsatzsteuer beim deutschen Zoll entrichten.',
            ar: 'تستورد شركة تكنولوجيا معلومات ألمانية أجهزة خوادم من الولايات المتحدة. يجب عليها دفع الرسوم الجمركية وضريبة استيراد المبيعات لدى الجمارك الألمانية.',
          },
        ],
        examRelevance: {
          de: 'Die Unterscheidung zwischen EU-Binnenhandel und Drittländerhandel sowie die anfallenden Abgaben sind prüfungsrelevant.',
          ar: 'التمييز بين التجارة داخل الاتحاد الأوروبي وتجارة الدول الثالثة وكذلك الرسوم المفروضة ذات صلة بالامتحان.',
        },
        summary: {
          de: 'Import ist die Einfuhr von Waren aus dem Ausland. Innerhalb der EU zollfrei, bei Drittländern fallen Zölle und Einfuhrumsatzsteuer an.',
          ar: 'الاستيراد هو إدخال البضائع من الخارج. داخل الاتحاد الأوروبي بدون رسوم، من الدول الثالثة تُفرض رسوم جمركية وضريبة استيراد.',
        },
      },
    },
    {
      id: 'export',
      name: { de: 'Export', ar: 'التصدير' },
      content: {
        definition: {
          de: 'Export bezeichnet die Ausfuhr von Waren und Dienstleistungen vom Inland ins Ausland. Deutschland ist eine der größten Exportnationen der Welt. Exporte sind grundsätzlich umsatzsteuerfrei (steuerfreie Ausfuhrlieferung), da die Besteuerung im Bestimmungsland erfolgt. Für bestimmte Güter gelten Exportbeschränkungen (Dual-Use-Güter, Waffen).',
          ar: 'التصدير هو إخراج السلع والخدمات من الداخل إلى الخارج. ألمانيا هي واحدة من أكبر الدول المصدرة في العالم. الصادرات معفاة أساساً من ضريبة المبيعات (تسليم تصدير معفي من الضرائب)، حيث يتم فرض الضريبة في بلد الوجهة. لبعض السلع تسري قيود تصدير (سلع الاستخدام المزدوج، الأسلحة).',
        },
        keyPoints: [
          {
            de: 'Exporte sind umsatzsteuerfrei (0% USt), da das Bestimmungslandprinzip gilt',
            ar: 'الصادرات معفاة من ضريبة المبيعات (0% USt)، حيث يسري مبدأ بلد الوجهة',
          },
          {
            de: 'Exportkontrolle: Dual-Use-Güter (zivil und militärisch nutzbar) unterliegen besonderen Genehmigungspflichten',
            ar: 'مراقبة الصادرات: سلع الاستخدام المزدوج (قابلة للاستخدام المدني والعسكري) تخضع لمتطلبات ترخيص خاصة',
          },
          {
            de: 'Handelsbilanzüberschuss: Deutschland exportiert mehr als es importiert',
            ar: 'فائض الميزان التجاري: تصدر ألمانيا أكثر مما تستورد',
          },
        ],
        examples: [
          {
            de: 'Ein deutsches Softwareunternehmen verkauft Lizenzen an ein Unternehmen in Japan. Die Lieferung ist umsatzsteuerfrei. Das japanische Unternehmen zahlt die Steuer in Japan.',
            ar: 'تبيع شركة برمجيات ألمانية تراخيص لشركة في اليابان. التسليم معفى من ضريبة المبيعات. تدفع الشركة اليابانية الضريبة في اليابان.',
          },
        ],
        examRelevance: {
          de: 'Die Umsatzsteuerfreiheit von Exporten und das Bestimmungslandprinzip sind wichtige Prüfungsthemen.',
          ar: 'إعفاء الصادرات من ضريبة المبيعات ومبدأ بلد الوجهة هي مواضيع امتحانية مهمة.',
        },
        summary: {
          de: 'Export ist der Verkauf von Waren ins Ausland. Exporte sind umsatzsteuerfrei nach dem Bestimmungslandprinzip.',
          ar: 'التصدير هو بيع البضائع إلى الخارج. الصادرات معفاة من ضريبة المبيعات وفقاً لمبدأ بلد الوجهة.',
        },
      },
    },
    {
      id: 'zoll',
      name: { de: 'Zoll', ar: 'الجمارك' },
      content: {
        definition: {
          de: 'Der Zoll ist eine Abgabe, die beim Grenzübertritt von Waren erhoben wird. In der EU gibt es einen gemeinsamen Außenzoll (Zollunion) – innerhalb der EU werden keine Zölle erhoben. Zölle dienen dem Schutz der heimischen Wirtschaft, als Einnahmequelle und als handelspolitisches Instrument. Die Zollsätze richten sich nach dem Gemeinsamen Zolltarif der EU (TARIC).',
          ar: 'الجمارك هي رسوم تُفرض عند عبور البضائع للحدود. في الاتحاد الأوروبي يوجد تعرفة خارجية مشتركة (الاتحاد الجمركي) – داخل الاتحاد الأوروبي لا تُفرض رسوم جمركية. تخدم الجمارك حماية الاقتصاد المحلي وكمصدر دخل وكأداة سياسة تجارية. تعتمد نسب الجمارك على التعرفة الجمركية المشتركة للاتحاد الأوروبي (TARIC).',
        },
        keyPoints: [
          {
            de: 'EU-Zollunion: Einheitlicher Außenzoll, kein Zoll innerhalb der EU',
            ar: 'الاتحاد الجمركي الأوروبي: تعرفة خارجية موحدة، لا جمارك داخل الاتحاد الأوروبي',
          },
          {
            de: 'Zollarten: Wertzoll (Prozent vom Warenwert), spezifischer Zoll (fester Betrag pro Einheit), Mischzoll',
            ar: 'أنواع الجمارك: رسوم قيمية (نسبة من قيمة البضاعة)، رسوم محددة (مبلغ ثابت لكل وحدة)، رسوم مختلطة',
          },
          {
            de: 'Freihandelsabkommen: Reduzieren oder eliminieren Zölle zwischen Partnerländern (z.B. EU-Japan, EU-Kanada CETA)',
            ar: 'اتفاقيات التجارة الحرة: تُخفض أو تُلغي الرسوم الجمركية بين الدول الشريكة (مثل الاتحاد الأوروبي-اليابان، الاتحاد الأوروبي-كندا CETA)',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Händler importiert Netzwerk-Switches aus China. Er muss den Zollsatz laut TARIC (z.B. 0% für bestimmte IT-Produkte nach dem ITA-Abkommen) plus 19% Einfuhrumsatzsteuer zahlen.',
            ar: 'يستورد تاجر تكنولوجيا معلومات محولات شبكة من الصين. يجب عليه دفع نسبة الجمارك وفقاً لـ TARIC (مثل 0% لمنتجات تكنولوجيا معلومات معينة وفقاً لاتفاقية ITA) بالإضافة إلى 19% ضريبة استيراد مبيعات.',
          },
        ],
        examRelevance: {
          de: 'Die EU-Zollunion, Zollarten und die Bedeutung von Freihandelsabkommen werden gelegentlich in der WiSo-Prüfung behandelt.',
          ar: 'يتم تناول الاتحاد الجمركي الأوروبي وأنواع الجمارك وأهمية اتفاقيات التجارة الحرة أحياناً في امتحان WiSo.',
        },
        summary: {
          de: 'Zölle sind Abgaben auf importierte Waren. In der EU-Zollunion gilt ein einheitlicher Außenzoll, innerhalb der EU gibt es keine Zölle.',
          ar: 'الجمارك هي رسوم على البضائع المستوردة. في الاتحاد الجمركي الأوروبي تسري تعرفة خارجية موحدة، داخل الاتحاد الأوروبي لا توجد جمارك.',
        },
      },
    },
  ],
};
