import type { TopicGroup } from '../../../types';

export const wirtschaftskreislauf: TopicGroup = {
  id: 'group05-wirtschaftskreislauf',
  name: {
    de: 'Wirtschaftskreislauf',
    ar: 'الدورة الاقتصادية',
  },
  description: {
    de: 'Der Wirtschaftskreislauf zeigt die Geld- und Güterströme zwischen Haushalten, Unternehmen, Staat und Banken',
    ar: 'تُظهر الدورة الاقتصادية تدفقات الأموال والسلع بين الأسر والشركات والدولة والبنوك',
  },
  topics: [
    {
      id: 'haushalte',
      name: { de: 'Haushalte', ar: 'الأسر' },
      content: {
        definition: {
          de: 'Haushalte (private Haushalte) sind im Wirtschaftskreislauf die Konsumenten, die Güter und Dienstleistungen nachfragen. Gleichzeitig sind sie Anbieter von Produktionsfaktoren, insbesondere Arbeit. Sie erhalten dafür Einkommen (Löhne, Gehälter) und verwenden dieses für Konsum, Sparen und Steuerzahlungen.',
          ar: 'الأسر (الأسر الخاصة) هي في الدورة الاقتصادية المستهلكون الذين يطلبون السلع والخدمات. في الوقت نفسه هم مورّدون لعوامل الإنتاج، خاصة العمل. يحصلون مقابل ذلك على دخل (أجور، رواتب) ويستخدمونه للاستهلاك والادخار ودفع الضرائب.',
        },
        keyPoints: [
          {
            de: 'Doppelte Rolle: Nachfrager von Gütern und Anbieter von Arbeitskraft',
            ar: 'دور مزدوج: طالبون للسلع ومورّدون لقوة العمل',
          },
          {
            de: 'Einkommensverwendung: Konsum (Ausgaben für Güter), Sparen (Einlagen bei Banken), Steuern (an den Staat)',
            ar: 'استخدام الدخل: الاستهلاك (الإنفاق على السلع)، الادخار (الودائع في البنوك)، الضرائب (للدولة)',
          },
          {
            de: 'Das Einkommen der Haushalte ist die Grundlage der gesamtwirtschaftlichen Nachfrage',
            ar: 'دخل الأسر هو أساس الطلب الاقتصادي الكلي',
          },
        ],
        examples: [
          {
            de: 'Eine Familie kauft einen Computer (Konsum), spart monatlich 500 € (Sparen) und zahlt Einkommensteuer (Steuern). Das Gehalt kommt vom IT-Unternehmen, in dem ein Familienmitglied arbeitet.',
            ar: 'تشتري عائلة حاسوباً (استهلاك)، تدخر 500 يورو شهرياً (ادخار) وتدفع ضريبة الدخل (ضرائب). الراتب يأتي من شركة تكنولوجيا معلومات يعمل فيها أحد أفراد العائلة.',
          },
        ],
        examRelevance: {
          de: 'Die Rolle der Haushalte im Wirtschaftskreislauf und ihre Beziehungen zu anderen Sektoren werden regelmäßig abgefragt.',
          ar: 'يتم السؤال بانتظام عن دور الأسر في الدورة الاقتصادية وعلاقاتها مع القطاعات الأخرى.',
        },
        summary: {
          de: 'Haushalte bieten Arbeit an und erhalten Einkommen, das sie für Konsum, Sparen und Steuern verwenden.',
          ar: 'تقدم الأسر العمل وتحصل على دخل تستخدمه للاستهلاك والادخار والضرائب.',
        },
      },
    },
    {
      id: 'unternehmen',
      name: { de: 'Unternehmen', ar: 'الشركات' },
      content: {
        definition: {
          de: 'Unternehmen sind im Wirtschaftskreislauf die Produzenten von Gütern und Dienstleistungen. Sie kombinieren Produktionsfaktoren (Arbeit, Kapital, Boden), um Waren herzustellen und Dienstleistungen anzubieten. Sie zahlen Löhne an Haushalte, Steuern an den Staat und investieren mit Hilfe von Bankkrediten.',
          ar: 'الشركات هي في الدورة الاقتصادية منتجو السلع والخدمات. تجمع عوامل الإنتاج (العمل، رأس المال، الأرض) لتصنيع البضائع وتقديم الخدمات. تدفع أجوراً للأسر وضرائب للدولة وتستثمر بمساعدة القروض المصرفية.',
        },
        keyPoints: [
          {
            de: 'Produzieren Güter und Dienstleistungen und bieten sie auf Märkten an',
            ar: 'تنتج السلع والخدمات وتعرضها في الأسواق',
          },
          {
            de: 'Zahlen Löhne/Gehälter an Haushalte, Steuern an den Staat und Zinsen an Banken',
            ar: 'تدفع الأجور/الرواتب للأسر والضرائب للدولة والفوائد للبنوك',
          },
          {
            de: 'Investitionen: Unternehmen verwenden Gewinne und Kredite, um zu wachsen und neue Technologien einzusetzen',
            ar: 'الاستثمارات: تستخدم الشركات الأرباح والقروض للنمو واستخدام تقنيات جديدة',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Dienstleister beschäftigt 50 Mitarbeiter (zahlt Löhne an Haushalte), kauft Server (Investition), zahlt Gewerbesteuer (an Staat) und hat einen Kredit bei der Bank (zahlt Zinsen).',
            ar: 'شركة خدمات تكنولوجيا معلومات توظف 50 موظفاً (تدفع أجوراً للأسر)، تشتري خوادم (استثمار)، تدفع ضريبة تجارية (للدولة) ولديها قرض من البنك (تدفع فوائد).',
          },
        ],
        examRelevance: {
          de: 'Die Stellung der Unternehmen im Wirtschaftskreislauf und ihre Geld- und Güterströme sind ein zentrales Thema.',
          ar: 'مكانة الشركات في الدورة الاقتصادية وتدفقات الأموال والسلع الخاصة بها هي موضوع محوري.',
        },
        summary: {
          de: 'Unternehmen produzieren Güter, zahlen Löhne und Steuern und investieren. Sie sind das zentrale Element der Wertschöpfung.',
          ar: 'تنتج الشركات السلع وتدفع الأجور والضرائب وتستثمر. هي العنصر المركزي في خلق القيمة.',
        },
      },
    },
    {
      id: 'staat',
      name: { de: 'Staat', ar: 'الدولة' },
      content: {
        definition: {
          de: 'Der Staat (öffentliche Hand) hat im Wirtschaftskreislauf eine regulierende und umverteilende Funktion. Er erhebt Steuern und Abgaben von Haushalten und Unternehmen und verwendet diese für öffentliche Güter (Infrastruktur, Bildung, Sicherheit), Transferzahlungen (Sozialleistungen) und Subventionen.',
          ar: 'للدولة (الجهة العامة) في الدورة الاقتصادية وظيفة تنظيمية وإعادة توزيع. تفرض الضرائب والرسوم على الأسر والشركات وتستخدمها للسلع العامة (البنية التحتية، التعليم، الأمن) والتحويلات (الخدمات الاجتماعية) والإعانات.',
        },
        keyPoints: [
          {
            de: 'Einnahmen: Steuern (Einkommensteuer, Umsatzsteuer, Gewerbesteuer), Sozialversicherungsbeiträge, Gebühren',
            ar: 'الإيرادات: الضرائب (ضريبة الدخل، ضريبة المبيعات، الضريبة التجارية)، اشتراكات التأمين الاجتماعي، الرسوم',
          },
          {
            de: 'Ausgaben: Öffentliche Güter, Transferzahlungen (ALG, Kindergeld), Subventionen an Unternehmen, Zinsen auf Staatsschulden',
            ar: 'النفقات: السلع العامة، التحويلات (إعانة البطالة، بدل الأطفال)، الإعانات للشركات، الفوائد على الديون الحكومية',
          },
          {
            de: 'Konjunkturpolitik: Der Staat kann durch Ausgaben und Steuerpolitik die Wirtschaft beeinflussen',
            ar: 'سياسة الدورة الاقتصادية: يمكن للدولة التأثير على الاقتصاد من خلال النفقات والسياسة الضريبية',
          },
        ],
        examples: [
          {
            de: 'Der Staat fördert die Digitalisierung durch Subventionen an IT-Unternehmen und investiert in den Ausbau der digitalen Infrastruktur (Breitband, 5G).',
            ar: 'تدعم الدولة الرقمنة من خلال إعانات لشركات تكنولوجيا المعلومات وتستثمر في توسيع البنية التحتية الرقمية (النطاق العريض، 5G).',
          },
        ],
        examRelevance: {
          de: 'Die Rolle des Staates im Wirtschaftskreislauf, insbesondere Steuereinnahmen und Transferzahlungen, wird häufig geprüft.',
          ar: 'يتم فحص دور الدولة في الدورة الاقتصادية بشكل متكرر، خاصة الإيرادات الضريبية والتحويلات.',
        },
        summary: {
          de: 'Der Staat erhebt Steuern und gibt diese für öffentliche Güter, Transfers und Subventionen aus. Er reguliert und stabilisiert die Wirtschaft.',
          ar: 'تفرض الدولة الضرائب وتنفقها على السلع العامة والتحويلات والإعانات. تنظم وتستقر الاقتصاد.',
        },
      },
    },
    {
      id: 'banken',
      name: { de: 'Banken', ar: 'البنوك' },
      content: {
        definition: {
          de: 'Banken sind im Wirtschaftskreislauf Finanzintermediäre, die Spareinlagen der Haushalte entgegennehmen und als Kredite an Unternehmen und Staat weitergeben. Sie ermöglichen den Zahlungsverkehr und die Geldschöpfung. Die Europäische Zentralbank (EZB) steuert die Geldpolitik im Euroraum.',
          ar: 'البنوك هي وسطاء ماليون في الدورة الاقتصادية تستقبل ودائع الأسر وتحولها إلى قروض للشركات والدولة. تمكّن من المعاملات المالية وخلق النقود. يوجه البنك المركزي الأوروبي (EZB) السياسة النقدية في منطقة اليورو.',
        },
        keyPoints: [
          {
            de: 'Spareinlagen von Haushalten werden als Kredite an Unternehmen und Staat weitergegeben (Transformationsfunktion)',
            ar: 'يتم تحويل ودائع الأسر كقروض للشركات والدولة (وظيفة التحويل)',
          },
          {
            de: 'Leitzins der EZB beeinflusst die Kreditkosten und damit Investitionen und Konsum',
            ar: 'يؤثر سعر الفائدة الرئيسي للبنك المركزي الأوروبي على تكاليف الائتمان وبالتالي على الاستثمارات والاستهلاك',
          },
          {
            de: 'Banken sorgen für den Zahlungsverkehr (Überweisungen, Kartenzahlungen) und die Geldversorgung der Wirtschaft',
            ar: 'تضمن البنوك المعاملات المالية (التحويلات، مدفوعات البطاقات) وتزويد الاقتصاد بالنقود',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Startup nimmt einen Kredit von 500.000 € bei einer Bank auf, um Server-Infrastruktur zu finanzieren. Die Bank hat dieses Geld aus Spareinlagen anderer Kunden.',
            ar: 'شركة ناشئة في تكنولوجيا المعلومات تأخذ قرضاً بقيمة 500,000 يورو من بنك لتمويل البنية التحتية للخوادم. حصل البنك على هذا المال من ودائع عملاء آخرين.',
          },
        ],
        examRelevance: {
          de: 'Die Rolle der Banken als Finanzintermediäre und die Funktion des Leitzinses werden in der Prüfung behandelt.',
          ar: 'يتم تناول دور البنوك كوسطاء ماليين ووظيفة سعر الفائدة الرئيسي في الامتحان.',
        },
        summary: {
          de: 'Banken verbinden Sparer und Kreditnehmer. Sie ermöglichen Investitionen durch Kreditvergabe und sorgen für den Zahlungsverkehr.',
          ar: 'تربط البنوك المدخرين والمقترضين. تمكّن الاستثمارات من خلال منح القروض وتضمن المعاملات المالية.',
        },
      },
    },
    {
      id: 'geldkreislauf',
      name: { de: 'Geldkreislauf', ar: 'دورة النقود' },
      content: {
        definition: {
          de: 'Der Geldkreislauf beschreibt den Fluss von Geld zwischen den Wirtschaftssektoren (Haushalte, Unternehmen, Staat, Banken). Geld fließt als Löhne von Unternehmen zu Haushalten, als Konsumausgaben zurück zu Unternehmen, als Steuern zum Staat und als Spareinlagen zu Banken. Im Gleichgewicht sind alle Zu- und Abflüsse jedes Sektors gleich.',
          ar: 'تصف دورة النقود تدفق الأموال بين القطاعات الاقتصادية (الأسر، الشركات، الدولة، البنوك). تتدفق الأموال كأجور من الشركات إلى الأسر، وكنفقات استهلاك تعود إلى الشركات، وكضرائب إلى الدولة وكودائع إلى البنوك. في التوازن تكون جميع التدفقات الداخلة والخارجة لكل قطاع متساوية.',
        },
        keyPoints: [
          {
            de: 'Unternehmen → Haushalte: Löhne/Gehälter; Haushalte → Unternehmen: Konsumausgaben',
            ar: 'الشركات → الأسر: الأجور/الرواتب؛ الأسر → الشركات: نفقات الاستهلاك',
          },
          {
            de: 'Haushalte/Unternehmen → Staat: Steuern; Staat → Haushalte/Unternehmen: Transferzahlungen/Subventionen',
            ar: 'الأسر/الشركات → الدولة: الضرائب؛ الدولة → الأسر/الشركات: التحويلات/الإعانات',
          },
          {
            de: 'Haushalte → Banken: Spareinlagen; Banken → Unternehmen: Kredite',
            ar: 'الأسر → البنوك: الودائع؛ البنوك → الشركات: القروض',
          },
        ],
        examples: [
          {
            de: 'Ein Fachinformatiker erhält 3.500 € Gehalt (Geldfluss Unternehmen → Haushalt), kauft einen Laptop für 800 € (Haushalt → Unternehmen), zahlt 700 € Steuern (Haushalt → Staat) und spart 500 € (Haushalt → Bank).',
            ar: 'يحصل فني معلومات على 3,500 يورو راتب (تدفق نقدي شركة → أسرة)، يشتري حاسوباً محمولاً بـ 800 يورو (أسرة → شركة)، يدفع 700 يورو ضرائب (أسرة → دولة) ويدخر 500 يورو (أسرة → بنك).',
          },
        ],
        examRelevance: {
          de: 'Der Geldkreislauf ist ein Standardthema. In der Prüfung werden häufig Diagramme zum Wirtschaftskreislauf abgefragt, in denen Geldströme einzuzeichnen sind.',
          ar: 'دورة النقود هي موضوع قياسي. في الامتحان يُسأل بشكل متكرر عن مخططات الدورة الاقتصادية التي يجب رسم تدفقات الأموال فيها.',
        },
        summary: {
          de: 'Geld fließt als Löhne, Konsumausgaben, Steuern und Spareinlagen zwischen den Wirtschaftssektoren. Im Gleichgewicht sind Zu- und Abflüsse gleich.',
          ar: 'تتدفق الأموال كأجور ونفقات استهلاك وضرائب وودائع بين القطاعات الاقتصادية. في التوازن تكون التدفقات الداخلة والخارجة متساوية.',
        },
      },
    },
    {
      id: 'gueterkreislauf',
      name: { de: 'Güterkreislauf', ar: 'دورة السلع' },
      content: {
        definition: {
          de: 'Der Güterkreislauf beschreibt den Fluss von Gütern und Dienstleistungen (Realströme) im Wirtschaftskreislauf, im Gegensatz zum Geldkreislauf (Nominalströme). Güter fließen von Unternehmen zu Haushalten (Konsumgüter) und zwischen Unternehmen (Investitionsgüter/Vorleistungen). Der Güterkreislauf verläuft entgegengesetzt zum Geldkreislauf.',
          ar: 'تصف دورة السلع تدفق السلع والخدمات (التدفقات الحقيقية) في الدورة الاقتصادية، على عكس دورة النقود (التدفقات الاسمية). تتدفق السلع من الشركات إلى الأسر (سلع استهلاكية) وبين الشركات (سلع استثمارية/مدخلات). تسير دورة السلع في الاتجاه المعاكس لدورة النقود.',
        },
        keyPoints: [
          {
            de: 'Realströme (Güter) und Nominalströme (Geld) verlaufen in entgegengesetzter Richtung',
            ar: 'التدفقات الحقيقية (السلع) والتدفقات الاسمية (النقود) تسير في اتجاهين متعاكسين',
          },
          {
            de: 'Unternehmen → Haushalte: Konsumgüter und Dienstleistungen; Haushalte → Unternehmen: Arbeitskraft',
            ar: 'الشركات → الأسر: سلع استهلاكية وخدمات؛ الأسر → الشركات: قوة العمل',
          },
          {
            de: 'Staat stellt öffentliche Güter bereit (Straßen, Schulen, Sicherheit)',
            ar: 'توفر الدولة السلع العامة (الطرق، المدارس، الأمن)',
          },
        ],
        examples: [
          {
            de: 'Ein Softwareunternehmen liefert ein ERP-System an ein Produktionsunternehmen (Güterfluss Unternehmen → Unternehmen). Im Gegenzug fließt Geld als Bezahlung (Nominalstrom).',
            ar: 'تُسلم شركة برمجيات نظام ERP لشركة إنتاج (تدفق سلع شركة → شركة). في المقابل تتدفق الأموال كمدفوعات (تدفق اسمي).',
          },
        ],
        examRelevance: {
          de: 'Die Unterscheidung zwischen Real- und Nominalströmen und ihre entgegengesetzte Richtung wird in der Prüfung abgefragt.',
          ar: 'يتم السؤال في الامتحان عن التمييز بين التدفقات الحقيقية والاسمية واتجاههما المتعاكس.',
        },
        summary: {
          de: 'Der Güterkreislauf zeigt den Fluss von Waren und Dienstleistungen. Er verläuft entgegengesetzt zum Geldkreislauf.',
          ar: 'تُظهر دورة السلع تدفق البضائع والخدمات. تسير في الاتجاه المعاكس لدورة النقود.',
        },
      },
    },
  ],
};
