import type { TopicGroup } from '../../../types';

export const finanzierungKostenrechnung: TopicGroup = {
  id: 'group07-finanzierung-kostenrechnung',
  name: {
    de: 'Finanzierung und Kostenrechnung',
    ar: 'التمويل ومحاسبة التكاليف',
  },
  description: {
    de: 'Grundlagen der betrieblichen Kostenrechnung: Umsatz, Gewinn, Kostenarten und Break-even-Analyse',
    ar: 'أساسيات محاسبة التكاليف في المنشأة: الإيرادات، الربح، أنواع التكاليف وتحليل نقطة التعادل',
  },
  priority: 'very-high',
  topics: [
    {
      id: 'umsatz',
      name: { de: 'Umsatz', ar: 'الإيرادات' },
      content: {
        definition: {
          de: 'Der Umsatz (Erlös) ist der Gesamtbetrag, den ein Unternehmen durch den Verkauf von Waren oder Dienstleistungen in einem bestimmten Zeitraum einnimmt. Er wird berechnet als: Umsatz = Absatzmenge × Verkaufspreis. Der Umsatz sagt noch nichts über den Gewinn aus, da die Kosten noch abgezogen werden müssen.',
          ar: 'الإيرادات (العائدات) هي المبلغ الإجمالي الذي تحصل عليه الشركة من بيع السلع أو الخدمات في فترة زمنية محددة. تُحسب كالتالي: الإيرادات = كمية المبيعات × سعر البيع. لا تقول الإيرادات شيئاً عن الربح لأنه يجب خصم التكاليف أولاً.',
        },
        keyPoints: [
          {
            de: 'Formel: Umsatz = Menge × Preis',
            ar: 'المعادلة: الإيرادات = الكمية × السعر',
          },
          {
            de: 'Nettoumsatz: Umsatz ohne Umsatzsteuer; Bruttoumsatz: Umsatz einschließlich Umsatzsteuer',
            ar: 'الإيرادات الصافية: الإيرادات بدون ضريبة المبيعات؛ الإيرادات الإجمالية: الإيرادات شاملة ضريبة المبيعات',
          },
          {
            de: 'Der Umsatz ist eine wichtige Kennzahl, aber allein nicht aussagekräftig über die Rentabilität',
            ar: 'الإيرادات مؤشر مهم لكنها وحدها لا تعبر عن الربحية',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Dienstleister verkauft 100 Software-Lizenzen à 500 €. Der Umsatz beträgt 100 × 500 € = 50.000 € (netto).',
            ar: 'تبيع شركة خدمات تكنولوجيا معلومات 100 ترخيص برمجيات بسعر 500 يورو لكل منها. الإيرادات تبلغ 100 × 500 يورو = 50,000 يورو (صافي).',
          },
        ],
        examRelevance: {
          de: 'Der Umsatz wird in Berechnungsaufgaben zur Kostenrechnung und zur Gewinnermittlung abgefragt.',
          ar: 'يُسأل عن الإيرادات في مسائل حسابية لمحاسبة التكاليف وتحديد الربح.',
        },
        summary: {
          de: 'Der Umsatz ist der Gesamterlös aus Verkäufen (Menge × Preis). Er ist Ausgangspunkt für die Gewinnberechnung.',
          ar: 'الإيرادات هي إجمالي العائدات من المبيعات (الكمية × السعر). هي نقطة البداية لحساب الربح.',
        },
      },
    },
    {
      id: 'gewinn',
      name: { de: 'Gewinn', ar: 'الربح' },
      content: {
        definition: {
          de: 'Der Gewinn ist der Überschuss, der verbleibt, wenn alle Kosten vom Umsatz abgezogen werden: Gewinn = Umsatz - Gesamtkosten. Ein positiver Gewinn zeigt, dass das Unternehmen profitabel arbeitet. Ein negativer Gewinn (Verlust) bedeutet, dass die Kosten die Einnahmen übersteigen.',
          ar: 'الربح هو الفائض المتبقي عند خصم جميع التكاليف من الإيرادات: الربح = الإيرادات - التكاليف الإجمالية. الربح الإيجابي يُظهر أن الشركة تعمل بشكل مربح. الربح السلبي (الخسارة) يعني أن التكاليف تفوق الإيرادات.',
        },
        keyPoints: [
          {
            de: 'Formel: Gewinn = Umsatz - Gesamtkosten (fixe + variable Kosten)',
            ar: 'المعادلة: الربح = الإيرادات - التكاليف الإجمالية (التكاليف الثابتة + المتغيرة)',
          },
          {
            de: 'Bruttogewinn: Umsatz - Herstellungskosten; Nettogewinn: Nach Abzug aller Kosten und Steuern',
            ar: 'الربح الإجمالي: الإيرادات - تكاليف التصنيع؛ الربح الصافي: بعد خصم جميع التكاليف والضرائب',
          },
          {
            de: 'Gewinnmaximierung ist ein zentrales Unternehmensziel, aber nicht das einzige (soziale Verantwortung, Nachhaltigkeit)',
            ar: 'تعظيم الربح هو هدف مركزي للشركة لكنه ليس الوحيد (المسؤولية الاجتماعية، الاستدامة)',
          },
        ],
        examples: [
          {
            de: 'IT-Dienstleister: Umsatz 500.000 €, Personalkosten 300.000 €, Serverkosten 50.000 €, sonstige Kosten 80.000 €. Gewinn = 500.000 - 430.000 = 70.000 €.',
            ar: 'شركة خدمات تكنولوجيا معلومات: الإيرادات 500,000 يورو، تكاليف الموظفين 300,000 يورو، تكاليف الخوادم 50,000 يورو، تكاليف أخرى 80,000 يورو. الربح = 500,000 - 430,000 = 70,000 يورو.',
          },
        ],
        examRelevance: {
          de: 'Gewinnberechnungen sind ein Standardthema in der WiSo-Prüfung. Die Formel und die verschiedenen Gewinnarten sollten bekannt sein.',
          ar: 'حسابات الربح هي موضوع قياسي في امتحان WiSo. يجب معرفة المعادلة وأنواع الربح المختلفة.',
        },
        summary: {
          de: 'Der Gewinn ist der Überschuss von Umsatz über Kosten. Er zeigt die Profitabilität eines Unternehmens an.',
          ar: 'الربح هو فائض الإيرادات على التكاليف. يُظهر ربحية الشركة.',
        },
      },
    },
    {
      id: 'kosten',
      name: { de: 'Kosten', ar: 'التكاليف' },
      content: {
        definition: {
          de: 'Kosten sind der bewertete Verzehr von Gütern und Dienstleistungen, der für die betriebliche Leistungserstellung notwendig ist. Sie werden in fixe Kosten (unabhängig von der Produktionsmenge) und variable Kosten (abhängig von der Produktionsmenge) unterteilt. Gesamtkosten = Fixkosten + Variable Kosten.',
          ar: 'التكاليف هي الاستهلاك المُقيَّم للسلع والخدمات الضروري لإنتاج الخدمات في المنشأة. تُقسم إلى تكاليف ثابتة (مستقلة عن كمية الإنتاج) وتكاليف متغيرة (تعتمد على كمية الإنتاج). التكاليف الإجمالية = التكاليف الثابتة + التكاليف المتغيرة.',
        },
        keyPoints: [
          {
            de: 'Fixkosten: Miete, Gehälter, Versicherungen – fallen unabhängig von der Produktion an',
            ar: 'التكاليف الثابتة: الإيجار، الرواتب، التأمينات – تنشأ بغض النظر عن الإنتاج',
          },
          {
            de: 'Variable Kosten: Material, Strom, Provisionen – steigen mit zunehmender Produktion',
            ar: 'التكاليف المتغيرة: المواد، الكهرباء، العمولات – ترتفع مع زيادة الإنتاج',
          },
          {
            de: 'Stückkosten = Gesamtkosten / Menge; sie sinken bei steigender Produktion (Skaleneffekte)',
            ar: 'تكلفة الوحدة = التكاليف الإجمالية / الكمية؛ تنخفض مع زيادة الإنتاج (وفورات الحجم)',
          },
        ],
        examples: [
          {
            de: 'IT-Unternehmen: Fixkosten: Büromiete 5.000 €/Monat, Gehälter 30.000 €/Monat. Variable Kosten: Cloud-Hosting 2 €/Nutzer, Support-Kosten 5 €/Ticket.',
            ar: 'شركة تكنولوجيا معلومات: التكاليف الثابتة: إيجار المكتب 5,000 يورو/شهر، الرواتب 30,000 يورو/شهر. التكاليف المتغيرة: استضافة سحابية 2 يورو/مستخدم، تكاليف الدعم 5 يورو/تذكرة.',
          },
        ],
        examRelevance: {
          de: 'Die Unterscheidung zwischen fixen und variablen Kosten ist ein Kernthema. Berechnungsaufgaben zu Gesamt- und Stückkosten kommen häufig vor.',
          ar: 'التمييز بين التكاليف الثابتة والمتغيرة هو موضوع أساسي. تأتي مسائل حسابية عن التكاليف الإجمالية وتكلفة الوحدة بشكل متكرر.',
        },
        summary: {
          de: 'Kosten = Fixkosten + Variable Kosten. Fixkosten sind produktionsunabhängig, variable Kosten steigen mit der Menge.',
          ar: 'التكاليف = التكاليف الثابتة + التكاليف المتغيرة. التكاليف الثابتة مستقلة عن الإنتاج والتكاليف المتغيرة ترتفع مع الكمية.',
        },
      },
    },
    {
      id: 'fixkosten',
      name: { de: 'Fixkosten', ar: 'التكاليف الثابتة' },
      content: {
        definition: {
          de: 'Fixkosten (auch Bereitschaftskosten) sind Kosten, die unabhängig von der Produktionsmenge anfallen. Sie bleiben in einem bestimmten Zeitraum konstant, egal ob das Unternehmen viel oder wenig produziert. Typische Fixkosten sind Miete, Gehälter, Abschreibungen und Versicherungsprämien.',
          ar: 'التكاليف الثابتة (أيضاً تكاليف الاستعداد) هي تكاليف تنشأ بغض النظر عن كمية الإنتاج. تبقى ثابتة في فترة زمنية محددة بغض النظر عما إذا كانت الشركة تنتج كثيراً أو قليلاً. التكاليف الثابتة النموذجية هي الإيجار والرواتب والإهلاك وأقساط التأمين.',
        },
        keyPoints: [
          {
            de: 'Unabhängig von der Ausbringungsmenge in einem bestimmten Kapazitätsbereich',
            ar: 'مستقلة عن كمية الإنتاج في نطاق طاقة معين',
          },
          {
            de: 'Sprungfixe Kosten: Ab einer bestimmten Menge springen die Fixkosten auf ein höheres Niveau (z.B. Anmietung eines zweiten Büros)',
            ar: 'التكاليف الثابتة القفزية: من كمية معينة تقفز التكاليف الثابتة إلى مستوى أعلى (مثل استئجار مكتب ثانٍ)',
          },
          {
            de: 'Fixkosten pro Stück sinken mit steigender Produktionsmenge (Fixkostendegression)',
            ar: 'التكاليف الثابتة لكل وحدة تنخفض مع زيادة كمية الإنتاج (تراجع التكاليف الثابتة)',
          },
        ],
        examples: [
          {
            de: 'Ein SaaS-Unternehmen zahlt monatlich 10.000 € Servermiete, egal ob es 100 oder 10.000 Kunden hat. Bei 100 Kunden: 100 €/Kunde Fixkosten. Bei 10.000 Kunden: 1 €/Kunde.',
            ar: 'شركة SaaS تدفع شهرياً 10,000 يورو إيجار خوادم بغض النظر عما إذا كان لديها 100 أو 10,000 عميل. عند 100 عميل: 100 يورو/عميل تكاليف ثابتة. عند 10,000 عميل: 1 يورو/عميل.',
          },
        ],
        examRelevance: {
          de: 'Die Definition und Beispiele für Fixkosten sowie die Fixkostendegression werden häufig abgefragt.',
          ar: 'يُسأل بشكل متكرر عن تعريف وأمثلة التكاليف الثابتة وكذلك تراجع التكاليف الثابتة.',
        },
        summary: {
          de: 'Fixkosten bleiben konstant unabhängig von der Produktionsmenge. Pro Stück sinken sie bei steigender Ausbringung (Fixkostendegression).',
          ar: 'تبقى التكاليف الثابتة ثابتة بغض النظر عن كمية الإنتاج. لكل وحدة تنخفض مع زيادة الإنتاج (تراجع التكاليف الثابتة).',
        },
      },
    },
    {
      id: 'variable-kosten',
      name: { de: 'Variable Kosten', ar: 'التكاليف المتغيرة' },
      content: {
        definition: {
          de: 'Variable Kosten sind Kosten, die sich mit der Produktionsmenge verändern. Wird mehr produziert, steigen die variablen Kosten; wird weniger produziert, sinken sie. Bei Nullproduktion fallen keine variablen Kosten an. Typische variable Kosten sind Materialkosten, Energiekosten und Fertigungslöhne.',
          ar: 'التكاليف المتغيرة هي تكاليف تتغير مع كمية الإنتاج. عند زيادة الإنتاج ترتفع التكاليف المتغيرة؛ وعند تقليل الإنتاج تنخفض. عند الإنتاج الصفري لا تنشأ تكاليف متغيرة. التكاليف المتغيرة النموذجية هي تكاليف المواد وتكاليف الطاقة وأجور التصنيع.',
        },
        keyPoints: [
          {
            de: 'Proportionale variable Kosten: Steigen gleichmäßig mit der Menge (z.B. Materialkosten)',
            ar: 'التكاليف المتغيرة النسبية: ترتفع بالتساوي مع الكمية (مثل تكاليف المواد)',
          },
          {
            de: 'Degressive variable Kosten: Steigen langsamer als die Menge (z.B. Mengenrabatte)',
            ar: 'التكاليف المتغيرة المتراجعة: ترتفع أبطأ من الكمية (مثل خصومات الكمية)',
          },
          {
            de: 'Progressive variable Kosten: Steigen schneller als die Menge (z.B. Überstundenzuschläge)',
            ar: 'التكاليف المتغيرة التصاعدية: ترتفع أسرع من الكمية (مثل بدلات العمل الإضافي)',
          },
        ],
        examples: [
          {
            de: 'Ein Cloud-Dienst berechnet 0,10 € pro API-Aufruf. Bei 1.000 Aufrufen: 100 € variable Kosten. Bei 10.000 Aufrufen: 1.000 €.',
            ar: 'خدمة سحابية تحسب 0.10 يورو لكل استدعاء API. عند 1,000 استدعاء: 100 يورو تكاليف متغيرة. عند 10,000 استدعاء: 1,000 يورو.',
          },
        ],
        examRelevance: {
          de: 'Die Unterscheidung zwischen proportionalen, degressiven und progressiven variablen Kosten wird in der Prüfung erwartet.',
          ar: 'يُتوقع في الامتحان التمييز بين التكاليف المتغيرة النسبية والمتراجعة والتصاعدية.',
        },
        summary: {
          de: 'Variable Kosten verändern sich mit der Produktionsmenge. Sie können proportional, degressiv oder progressiv verlaufen.',
          ar: 'التكاليف المتغيرة تتغير مع كمية الإنتاج. يمكن أن تكون نسبية أو متراجعة أو تصاعدية.',
        },
      },
    },
    {
      id: 'deckungsbeitrag',
      name: { de: 'Deckungsbeitrag', ar: 'هامش المساهمة' },
      content: {
        definition: {
          de: 'Der Deckungsbeitrag ist die Differenz zwischen dem Erlös (Umsatz) und den variablen Kosten. Er zeigt, wie viel ein Produkt zur Deckung der Fixkosten und zum Gewinn beiträgt. Stückdeckungsbeitrag = Verkaufspreis - variable Stückkosten. Gesamtdeckungsbeitrag = Stückdeckungsbeitrag × Absatzmenge.',
          ar: 'هامش المساهمة هو الفرق بين العائدات (الإيرادات) والتكاليف المتغيرة. يُظهر مقدار مساهمة المنتج في تغطية التكاليف الثابتة وفي الربح. هامش مساهمة الوحدة = سعر البيع - التكاليف المتغيرة للوحدة. هامش المساهمة الإجمالي = هامش مساهمة الوحدة × كمية المبيعات.',
        },
        keyPoints: [
          {
            de: 'Stückdeckungsbeitrag = Verkaufspreis pro Stück - variable Kosten pro Stück',
            ar: 'هامش مساهمة الوحدة = سعر البيع للوحدة - التكاليف المتغيرة للوحدة',
          },
          {
            de: 'Positiver Deckungsbeitrag: Produkt trägt zur Deckung der Fixkosten bei → lohnt sich',
            ar: 'هامش مساهمة إيجابي: المنتج يساهم في تغطية التكاليف الثابتة → يستحق',
          },
          {
            de: 'Negativer Deckungsbeitrag: Produkt deckt nicht einmal die variablen Kosten → sollte überprüft werden',
            ar: 'هامش مساهمة سلبي: المنتج لا يغطي حتى التكاليف المتغيرة → يجب مراجعته',
          },
        ],
        examples: [
          {
            de: 'Software-Lizenz: Verkaufspreis 200 €, variable Kosten (Support, Hosting) 50 € pro Lizenz. Deckungsbeitrag = 200 - 50 = 150 €. Bei 1.000 Lizenzen: Gesamtdeckungsbeitrag = 150.000 €.',
            ar: 'ترخيص برمجيات: سعر البيع 200 يورو، التكاليف المتغيرة (الدعم، الاستضافة) 50 يورو لكل ترخيص. هامش المساهمة = 200 - 50 = 150 يورو. عند 1,000 ترخيص: هامش المساهمة الإجمالي = 150,000 يورو.',
          },
        ],
        examRelevance: {
          de: 'Der Deckungsbeitrag ist ein häufiges Berechnungsthema. Besonders die Stückdeckungsbeitragsrechnung und die Entscheidung über die Weiterproduktion werden geprüft.',
          ar: 'هامش المساهمة هو موضوع حسابي متكرر. يتم فحص خاصة حساب هامش مساهمة الوحدة وقرار الاستمرار في الإنتاج.',
        },
        summary: {
          de: 'Der Deckungsbeitrag (Erlös - variable Kosten) zeigt den Beitrag eines Produkts zur Deckung der Fixkosten und zum Gewinn.',
          ar: 'يُظهر هامش المساهمة (العائدات - التكاليف المتغيرة) مساهمة المنتج في تغطية التكاليف الثابتة وفي الربح.',
        },
      },
    },
    {
      id: 'break-even-point',
      name: { de: 'Break-even-Point', ar: 'نقطة التعادل' },
      content: {
        definition: {
          de: 'Der Break-even-Point (Gewinnschwelle) ist der Punkt, an dem der Umsatz genau die Gesamtkosten deckt. Ab diesem Punkt wird Gewinn erzielt. Berechnung: Break-even-Menge = Fixkosten / Stückdeckungsbeitrag. Am Break-even-Point ist der Gewinn gleich null.',
          ar: 'نقطة التعادل (عتبة الربح) هي النقطة التي تغطي فيها الإيرادات التكاليف الإجمالية بالضبط. من هذه النقطة يبدأ تحقيق الربح. الحساب: كمية التعادل = التكاليف الثابتة / هامش مساهمة الوحدة. عند نقطة التعادل يكون الربح صفراً.',
        },
        keyPoints: [
          {
            de: 'Formel: Break-even-Menge = Fixkosten / (Verkaufspreis - variable Stückkosten)',
            ar: 'المعادلة: كمية التعادل = التكاليف الثابتة / (سعر البيع - التكاليف المتغيرة للوحدة)',
          },
          {
            de: 'Unter dem Break-even-Point: Verlust; darüber: Gewinn',
            ar: 'تحت نقطة التعادل: خسارة؛ فوقها: ربح',
          },
          {
            de: 'Wichtig für Unternehmensgründung und Investitionsentscheidungen: Ab welcher Menge lohnt sich das Geschäft?',
            ar: 'مهم لتأسيس الشركات وقرارات الاستثمار: من أي كمية يستحق العمل التجاري؟',
          },
        ],
        examples: [
          {
            de: 'SaaS-Produkt: Fixkosten 20.000 €/Monat, Verkaufspreis 50 €/Nutzer, variable Kosten 10 €/Nutzer. Break-even = 20.000 / (50 - 10) = 500 Nutzer. Ab 501 Nutzern wird Gewinn erzielt.',
            ar: 'منتج SaaS: التكاليف الثابتة 20,000 يورو/شهر، سعر البيع 50 يورو/مستخدم، التكاليف المتغيرة 10 يورو/مستخدم. نقطة التعادل = 20,000 / (50 - 10) = 500 مستخدم. من 501 مستخدم يبدأ تحقيق الربح.',
          },
        ],
        examRelevance: {
          de: 'Die Break-even-Analyse ist ein sehr häufiges Rechenthema in der IHK-Prüfung. Die Formel und ihre Anwendung müssen sicher beherrscht werden.',
          ar: 'تحليل نقطة التعادل هو موضوع حسابي شائع جداً في امتحان IHK. يجب إتقان المعادلة وتطبيقها بشكل آمن.',
        },
        summary: {
          de: 'Der Break-even-Point ist die Absatzmenge, ab der ein Unternehmen Gewinn erzielt. Formel: Fixkosten / Stückdeckungsbeitrag.',
          ar: 'نقطة التعادل هي كمية المبيعات التي تبدأ الشركة من عندها بتحقيق الربح. المعادلة: التكاليف الثابتة / هامش مساهمة الوحدة.',
        },
      },
    },
  ],
};
