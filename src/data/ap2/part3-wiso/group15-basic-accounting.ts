import type { TopicGroup } from '../../../types';

export const basicAccounting: TopicGroup = {
  id: 'group15-basic-accounting',
  name: {
    de: 'Grundlagen der Buchführung',
    ar: 'أساسيات المحاسبة',
  },
  description: {
    de: 'Einnahmen, Ausgaben, Bilanz und Abschreibung als Grundlagen des betrieblichen Rechnungswesens',
    ar: 'الإيرادات والنفقات والميزانية والإهلاك كأساسيات المحاسبة في المنشأة',
  },
  priority: 'low',
  topics: [
    {
      id: 'einnahmen',
      name: { de: 'Einnahmen', ar: 'الإيرادات' },
      content: {
        definition: {
          de: 'Einnahmen sind alle Geldzuflüsse eines Unternehmens aus der Geschäftstätigkeit. Sie entstehen durch den Verkauf von Waren und Dienstleistungen (Umsatzerlöse), Zinserträge, Mieteinnahmen oder sonstige betriebliche Erträge. Im Rechnungswesen werden Einnahmen von Erträgen und Einzahlungen unterschieden.',
          ar: 'الإيرادات هي جميع التدفقات المالية الواردة للشركة من النشاط التجاري. تنشأ من بيع السلع والخدمات (عائدات المبيعات) وعائدات الفوائد وإيرادات الإيجار أو عائدات تشغيلية أخرى. في المحاسبة يتم التمييز بين الإيرادات والعائدات والتحصيلات.',
        },
        keyPoints: [
          {
            de: 'Unterscheidung: Einzahlung (Geldzufluss auf Konto/Kasse), Einnahme (Geldvermögen steigt), Ertrag (Reinvermögen steigt)',
            ar: 'التمييز: التحصيل (تدفق نقدي إلى الحساب/الصندوق)، الإيراد (الثروة النقدية ترتفع)، العائد (صافي الثروة يرتفع)',
          },
          {
            de: 'Einnahmen vs. Umsatz: Umsatz = Einnahmen aus dem Kerngeschäft; Einnahmen umfassen auch Nebenerträge',
            ar: 'الإيرادات مقابل المبيعات: المبيعات = الإيرادات من النشاط الأساسي؛ الإيرادات تشمل أيضاً العائدات الجانبية',
          },
          {
            de: 'Periodengerechte Zuordnung: Einnahmen werden der Periode zugeordnet, in der die Leistung erbracht wurde, nicht dem Zahlungszeitpunkt',
            ar: 'التخصيص المتوافق مع الفترة: تُخصص الإيرادات للفترة التي تم فيها تقديم الخدمة، وليس لوقت الدفع',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Dienstleister hat folgende Einnahmen: Softwareverkauf 100.000 €, Wartungsverträge 50.000 €, Schulungen 20.000 €, Zinserträge 500 €. Gesamteinnahmen: 170.500 €.',
            ar: 'شركة خدمات تكنولوجيا معلومات لديها الإيرادات التالية: بيع البرمجيات 100,000 يورو، عقود الصيانة 50,000 يورو، التدريبات 20,000 يورو، عائدات الفوائد 500 يورو. إجمالي الإيرادات: 170,500 يورو.',
          },
        ],
        examRelevance: {
          de: 'Die Unterscheidung zwischen Einzahlung, Einnahme und Ertrag ist ein klassisches Prüfungsthema im Rechnungswesen.',
          ar: 'التمييز بين التحصيل والإيراد والعائد هو موضوع امتحاني كلاسيكي في المحاسبة.',
        },
        summary: {
          de: 'Einnahmen sind alle Geldzuflüsse aus der Geschäftstätigkeit. Sie werden von Einzahlungen (Geldfluss) und Erträgen (Reinvermögensmehrung) unterschieden.',
          ar: 'الإيرادات هي جميع التدفقات المالية الواردة من النشاط التجاري. تُميز عن التحصيلات (التدفق النقدي) والعائدات (زيادة صافي الثروة).',
        },
      },
    },
    {
      id: 'ausgaben',
      name: { de: 'Ausgaben', ar: 'النفقات' },
      content: {
        definition: {
          de: 'Ausgaben sind alle Geldabflüsse eines Unternehmens, die im Rahmen der Geschäftstätigkeit anfallen. Sie umfassen den Einkauf von Material, Zahlung von Löhnen, Miete, Versicherungen und sonstige betriebliche Aufwendungen. Im Rechnungswesen werden Ausgaben von Aufwendungen und Auszahlungen unterschieden.',
          ar: 'النفقات هي جميع التدفقات المالية الصادرة من الشركة في إطار النشاط التجاري. تشمل شراء المواد ودفع الأجور والإيجار والتأمينات والمصروفات التشغيلية الأخرى. في المحاسبة يتم التمييز بين النفقات والمصروفات والمدفوعات.',
        },
        keyPoints: [
          {
            de: 'Unterscheidung: Auszahlung (Geldabfluss aus Konto/Kasse), Ausgabe (Geldvermögen sinkt), Aufwand (Reinvermögen sinkt)',
            ar: 'التمييز: المدفوعات (تدفق نقدي خارج الحساب/الصندوق)، النفقة (الثروة النقدية تنخفض)، المصروف (صافي الثروة ينخفض)',
          },
          {
            de: 'Betriebliche Ausgaben mindern den Gewinn und sind steuerlich absetzbar',
            ar: 'النفقات التشغيلية تُخفض الربح وقابلة للخصم الضريبي',
          },
          {
            de: 'Unterscheidung in laufende Ausgaben (Miete, Gehälter) und einmalige Ausgaben (Investitionen in Anlagen)',
            ar: 'التمييز بين النفقات الجارية (الإيجار، الرواتب) والنفقات لمرة واحدة (الاستثمارات في المعدات)',
          },
        ],
        examples: [
          {
            de: 'IT-Unternehmen – monatliche Ausgaben: Gehälter 25.000 €, Büromiete 3.000 €, Cloud-Hosting 2.000 €, Software-Lizenzen 1.500 €, Versicherungen 500 €. Gesamt: 32.000 €.',
            ar: 'شركة تكنولوجيا معلومات – النفقات الشهرية: الرواتب 25,000 يورو، إيجار المكتب 3,000 يورو، الاستضافة السحابية 2,000 يورو، تراخيص البرمجيات 1,500 يورو، التأمينات 500 يورو. الإجمالي: 32,000 يورو.',
          },
        ],
        examRelevance: {
          de: 'Die Unterscheidung zwischen Auszahlung, Ausgabe und Aufwand sowie typische Betriebsausgaben werden in der Prüfung abgefragt.',
          ar: 'يتم السؤال في الامتحان عن التمييز بين المدفوعات والنفقات والمصروفات وكذلك النفقات التشغيلية النموذجية.',
        },
        summary: {
          de: 'Ausgaben sind alle Geldabflüsse der Geschäftstätigkeit. Sie werden von Auszahlungen und Aufwendungen unterschieden und mindern den Gewinn.',
          ar: 'النفقات هي جميع التدفقات المالية الصادرة من النشاط التجاري. تُميز عن المدفوعات والمصروفات وتُخفض الربح.',
        },
      },
    },
    {
      id: 'bilanz',
      name: { de: 'Bilanz', ar: 'الميزانية العمومية' },
      content: {
        definition: {
          de: 'Die Bilanz ist eine Gegenüberstellung von Vermögen (Aktiva) und Kapital (Passiva) eines Unternehmens zu einem bestimmten Stichtag. Sie gibt Auskunft über die finanzielle Lage des Unternehmens. Die Grundregel lautet: Aktiva = Passiva (Bilanzgleichung). Kaufleute sind nach dem HGB verpflichtet, eine Bilanz aufzustellen.',
          ar: 'الميزانية العمومية هي مقابلة بين الأصول (الأكتيفا) ورأس المال (الباسيفا) للشركة في تاريخ معين. تعطي معلومات عن الوضع المالي للشركة. القاعدة الأساسية هي: الأصول = الخصوم (معادلة الميزانية). التجار ملزمون بإعداد ميزانية وفقاً للقانون التجاري (HGB).',
        },
        keyPoints: [
          {
            de: 'Aktiva (Mittelverwendung): Anlagevermögen (Gebäude, Maschinen, Software) und Umlaufvermögen (Vorräte, Forderungen, Bankguthaben)',
            ar: 'الأصول (استخدام الأموال): الأصول الثابتة (المباني، الآلات، البرمجيات) والأصول المتداولة (المخزون، المستحقات، الرصيد البنكي)',
          },
          {
            de: 'Passiva (Mittelherkunft): Eigenkapital (von den Eigentümern) und Fremdkapital (Kredite, Verbindlichkeiten)',
            ar: 'الخصوم (مصدر الأموال): رأس المال الخاص (من الملاك) ورأس المال الأجنبي (القروض، الالتزامات)',
          },
          {
            de: 'Bilanzgleichung: Aktiva = Passiva → Summe des Vermögens = Summe des Kapitals',
            ar: 'معادلة الميزانية: الأصول = الخصوم → مجموع الأصول = مجموع رأس المال',
          },
        ],
        examples: [
          {
            de: 'IT-GmbH Bilanz: Aktiva: Server 50.000 €, Software 20.000 €, Forderungen 30.000 €, Bank 40.000 € = 140.000 €. Passiva: Eigenkapital 90.000 €, Bankkredit 50.000 € = 140.000 €.',
            ar: 'ميزانية شركة GmbH لتكنولوجيا المعلومات: الأصول: خوادم 50,000 يورو، برمجيات 20,000 يورو، مستحقات 30,000 يورو، بنك 40,000 يورو = 140,000 يورو. الخصوم: رأس المال الخاص 90,000 يورو، قرض بنكي 50,000 يورو = 140,000 يورو.',
          },
        ],
        examRelevance: {
          de: 'Die Bilanzstruktur (Aktiva/Passiva) und die Bilanzgleichung sind grundlegendes Prüfungswissen.',
          ar: 'هيكل الميزانية (الأصول/الخصوم) ومعادلة الميزانية هي معرفة امتحانية أساسية.',
        },
        summary: {
          de: 'Die Bilanz zeigt Vermögen (Aktiva) und Kapital (Passiva) zu einem Stichtag. Es gilt: Aktiva = Passiva.',
          ar: 'تُظهر الميزانية الأصول (الأكتيفا) ورأس المال (الباسيفا) في تاريخ معين. تسري المعادلة: الأصول = الخصوم.',
        },
      },
    },
    {
      id: 'abschreibung',
      name: { de: 'Abschreibung', ar: 'الإهلاك' },
      content: {
        definition: {
          de: 'Abschreibung ist die planmäßige Verteilung der Anschaffungskosten eines Wirtschaftsguts über seine Nutzungsdauer. Sie bildet den Wertverlust von Anlagegütern (z.B. Computer, Software, Fahrzeuge) in der Buchhaltung ab. Die lineare Abschreibung verteilt die Kosten gleichmäßig, die degressive Abschreibung verteilt höhere Beträge in den ersten Jahren.',
          ar: 'الإهلاك هو التوزيع المنتظم لتكاليف اقتناء أصل اقتصادي على مدة استخدامه. يعكس فقدان القيمة للأصول الثابتة (مثل الحواسيب والبرمجيات والمركبات) في المحاسبة. الإهلاك الخطي يوزع التكاليف بالتساوي، والإهلاك المتناقص يوزع مبالغ أعلى في السنوات الأولى.',
        },
        keyPoints: [
          {
            de: 'Lineare Abschreibung: Jährlicher Abschreibungsbetrag = Anschaffungskosten / Nutzungsdauer',
            ar: 'الإهلاك الخطي: مبلغ الإهلاك السنوي = تكاليف الاقتناء / مدة الاستخدام',
          },
          {
            de: 'Nutzungsdauer wird durch AfA-Tabellen des Bundesfinanzministeriums festgelegt (z.B. Computer: 3 Jahre, Software: 3 Jahre)',
            ar: 'يتم تحديد مدة الاستخدام من خلال جداول AfA لوزارة المالية الاتحادية (مثل الحاسوب: 3 سنوات، البرمجيات: 3 سنوات)',
          },
          {
            de: 'Geringwertige Wirtschaftsgüter (GWG): Anschaffungskosten bis 800 € netto können sofort komplett abgeschrieben werden',
            ar: 'الأصول الاقتصادية منخفضة القيمة (GWG): تكاليف الاقتناء حتى 800 يورو صافي يمكن إهلاكها بالكامل فوراً',
          },
        ],
        examples: [
          {
            de: 'Ein Server kostet 9.000 € und hat eine Nutzungsdauer von 3 Jahren. Lineare Abschreibung: 9.000 / 3 = 3.000 € pro Jahr. Nach 3 Jahren hat der Server einen Buchwert von 0 €.',
            ar: 'خادم يكلف 9,000 يورو ومدة استخدامه 3 سنوات. الإهلاك الخطي: 9,000 / 3 = 3,000 يورو سنوياً. بعد 3 سنوات تكون القيمة الدفترية للخادم 0 يورو.',
          },
          {
            de: 'Eine Tastatur kostet 50 € netto. Als GWG kann sie im Jahr der Anschaffung komplett abgeschrieben werden.',
            ar: 'لوحة مفاتيح تكلف 50 يورو صافي. كأصل منخفض القيمة يمكن إهلاكها بالكامل في سنة الاقتناء.',
          },
        ],
        examRelevance: {
          de: 'Die lineare Abschreibung und GWG-Regelung sind häufige Berechnungsthemen in der IHK-Prüfung.',
          ar: 'الإهلاك الخطي وقاعدة الأصول منخفضة القيمة هي مواضيع حسابية متكررة في امتحان IHK.',
        },
        summary: {
          de: 'Abschreibung verteilt Anschaffungskosten über die Nutzungsdauer. Bei linearer Abschreibung jährlich gleich. GWG bis 800 € können sofort abgeschrieben werden.',
          ar: 'يوزع الإهلاك تكاليف الاقتناء على مدة الاستخدام. في الإهلاك الخطي بالتساوي سنوياً. الأصول منخفضة القيمة حتى 800 يورو يمكن إهلاكها فوراً.',
        },
      },
    },
  ],
};
