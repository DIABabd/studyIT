import type { TopicGroup } from '../../../types';

export const steuern: TopicGroup = {
  id: 'group08-steuern',
  name: {
    de: 'Steuern',
    ar: 'الضرائب',
  },
  description: {
    de: 'Grundlagen des deutschen Steuersystems: Einkommensteuer, Umsatzsteuer, Körperschaftsteuer und Gewerbesteuer',
    ar: 'أساسيات النظام الضريبي الألماني: ضريبة الدخل، ضريبة المبيعات، ضريبة الشركات والضريبة التجارية',
  },
  topics: [
    {
      id: 'einkommensteuer',
      name: { de: 'Einkommensteuer', ar: 'ضريبة الدخل' },
      content: {
        definition: {
          de: 'Die Einkommensteuer ist eine direkte Steuer auf das Einkommen natürlicher Personen. Sie wird auf sieben Einkunftsarten erhoben (z.B. Einkünfte aus nichtselbständiger Arbeit, Gewerbebetrieb, Kapitalvermögen). Der Steuersatz ist progressiv: Er steigt mit dem Einkommen von 14% (Eingangssteuersatz) bis 45% (Spitzensteuersatz). Bei Arbeitnehmern wird sie als Lohnsteuer direkt vom Gehalt einbehalten.',
          ar: 'ضريبة الدخل هي ضريبة مباشرة على دخل الأشخاص الطبيعيين. تُفرض على سبعة أنواع من الدخل (مثل الدخل من العمل غير المستقل، الأعمال التجارية، رأس المال). نسبة الضريبة تصاعدية: ترتفع مع الدخل من 14% (نسبة الدخول) إلى 45% (أعلى نسبة). بالنسبة للموظفين يتم خصمها كضريبة رواتب مباشرة من الراتب.',
        },
        keyPoints: [
          {
            de: 'Grundfreibetrag: Bis 11.604 € (2024) bleibt das Einkommen steuerfrei',
            ar: 'الإعفاء الأساسي: حتى 11,604 يورو (2024) يبقى الدخل معفى من الضرائب',
          },
          {
            de: 'Progressiver Steuersatz: 14% bis 42% (ab 66.761 €), Spitzensteuersatz 45% (ab 277.826 €)',
            ar: 'نسبة ضريبية تصاعدية: 14% حتى 42% (من 66,761 يورو)، أعلى نسبة 45% (من 277,826 يورو)',
          },
          {
            de: 'Lohnsteuer ist eine Erhebungsform der Einkommensteuer, die der Arbeitgeber direkt abführt',
            ar: 'ضريبة الرواتب هي شكل من أشكال تحصيل ضريبة الدخل يقوم صاحب العمل بتحويلها مباشرة',
          },
        ],
        examples: [
          {
            de: 'Ein Fachinformatiker verdient 45.000 € brutto im Jahr. Nach Abzug des Grundfreibetrags wird der progressive Steuersatz angewendet. Der Arbeitgeber führt die Lohnsteuer monatlich ab.',
            ar: 'فني معلومات يكسب 45,000 يورو إجمالي في السنة. بعد خصم الإعفاء الأساسي يتم تطبيق نسبة الضريبة التصاعدية. يقوم صاحب العمل بتحويل ضريبة الرواتب شهرياً.',
          },
        ],
        examRelevance: {
          de: 'Die Einkommensteuer wird häufig in Zusammenhang mit der Gehaltsabrechnung und dem progressiven Steuersatz geprüft.',
          ar: 'يتم فحص ضريبة الدخل بشكل متكرر فيما يتعلق بكشف الراتب ونسبة الضريبة التصاعدية.',
        },
        summary: {
          de: 'Die Einkommensteuer besteuert das Einkommen natürlicher Personen progressiv (14-45%). Bei Arbeitnehmern wird sie als Lohnsteuer einbehalten.',
          ar: 'تفرض ضريبة الدخل ضريبة تصاعدية على دخل الأشخاص الطبيعيين (14-45%). بالنسبة للموظفين تُخصم كضريبة رواتب.',
        },
      },
    },
    {
      id: 'umsatzsteuer',
      name: { de: 'Umsatzsteuer', ar: 'ضريبة المبيعات' },
      content: {
        definition: {
          de: 'Die Umsatzsteuer (USt) ist eine indirekte Steuer auf den Verbrauch von Waren und Dienstleistungen. Der Regelsteuersatz beträgt 19%, der ermäßigte Satz 7% (für Grundnahrungsmittel, Bücher, Zeitschriften). Unternehmen führen die Umsatzsteuer ab, können aber die selbst gezahlte Vorsteuer abziehen. Der Endverbraucher trägt die wirtschaftliche Last.',
          ar: 'ضريبة المبيعات (USt) هي ضريبة غير مباشرة على استهلاك السلع والخدمات. النسبة القياسية 19%، والنسبة المخفضة 7% (للمواد الغذائية الأساسية والكتب والمجلات). تقوم الشركات بتحويل ضريبة المبيعات لكن يمكنها خصم ضريبة المدخلات التي دفعتها. يتحمل المستهلك النهائي العبء الاقتصادي.',
        },
        keyPoints: [
          {
            de: 'Regelsteuersatz: 19%; ermäßigter Satz: 7%',
            ar: 'النسبة القياسية: 19%؛ النسبة المخفضة: 7%',
          },
          {
            de: 'Vorsteuerabzug: Unternehmen können die auf Einkäufe gezahlte USt (Vorsteuer) von der eingenommenen USt abziehen und führen nur die Differenz ab',
            ar: 'خصم ضريبة المدخلات: يمكن للشركات خصم ضريبة المبيعات المدفوعة على المشتريات (ضريبة المدخلات) من ضريبة المبيعات المحصلة وتحويل الفرق فقط',
          },
          {
            de: 'Indirekte Steuer: Wird vom Unternehmen abgeführt, aber vom Endverbraucher wirtschaftlich getragen',
            ar: 'ضريبة غير مباشرة: يحولها المشروع التجاري لكن يتحملها المستهلك النهائي اقتصادياً',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Unternehmen verkauft eine Software für 1.000 € netto. Mit 19% USt kostet sie 1.190 € brutto. Das Unternehmen führt 190 € USt ab, kann aber die Vorsteuer auf eigene Einkäufe abziehen.',
            ar: 'تبيع شركة تكنولوجيا معلومات برنامجاً بسعر 1,000 يورو صافي. مع 19% ضريبة مبيعات يكلف 1,190 يورو إجمالي. تحول الشركة 190 يورو ضريبة مبيعات لكن يمكنها خصم ضريبة المدخلات على مشترياتها.',
          },
        ],
        examRelevance: {
          de: 'USt-Berechnungen (netto/brutto) und der Vorsteuerabzug sind häufige Prüfungsaufgaben.',
          ar: 'حسابات ضريبة المبيعات (صافي/إجمالي) وخصم ضريبة المدخلات هي مسائل امتحانية متكررة.',
        },
        summary: {
          de: 'Die Umsatzsteuer (19% bzw. 7%) wird auf den Verbrauch erhoben. Unternehmen nutzen den Vorsteuerabzug; die Last trägt der Endverbraucher.',
          ar: 'تُفرض ضريبة المبيعات (19% أو 7%) على الاستهلاك. تستخدم الشركات خصم ضريبة المدخلات؛ يتحمل المستهلك النهائي العبء.',
        },
      },
    },
    {
      id: 'mehrwertsteuer',
      name: { de: 'Mehrwertsteuer', ar: 'ضريبة القيمة المضافة' },
      content: {
        definition: {
          de: 'Die Mehrwertsteuer (MwSt) ist der umgangssprachliche Begriff für die Umsatzsteuer. Der Name verdeutlicht das Prinzip: Auf jeder Produktionsstufe wird nur der Mehrwert (Wertzuwachs) besteuert, nicht der gesamte Warenwert. Dies wird durch den Vorsteuerabzug realisiert, sodass die Steuer nicht kumuliert.',
          ar: 'ضريبة القيمة المضافة (MwSt) هي المصطلح العامي لضريبة المبيعات. يوضح الاسم المبدأ: في كل مرحلة إنتاج يتم فرض ضريبة فقط على القيمة المضافة (الزيادة في القيمة) وليس على قيمة البضاعة الكاملة. يتم ذلك من خلال خصم ضريبة المدخلات بحيث لا تتراكم الضريبة.',
        },
        keyPoints: [
          {
            de: 'Mehrwertsteuer = Umsatzsteuer (rechtlich gleich, MwSt ist nur der umgangssprachliche Begriff)',
            ar: 'ضريبة القيمة المضافة = ضريبة المبيعات (متطابقتان قانونياً، MwSt هو المصطلح العامي فقط)',
          },
          {
            de: 'Allphasen-Netto-Umsatzsteuer: Auf jeder Stufe der Wertschöpfungskette wird nur der Mehrwert besteuert',
            ar: 'ضريبة مبيعات صافية متعددة المراحل: في كل مرحلة من سلسلة القيمة يتم فرض ضريبة فقط على القيمة المضافة',
          },
          {
            de: 'Berechnung: Bruttobetrag = Nettobetrag × 1,19 (bei 19%); Nettobetrag = Bruttobetrag / 1,19',
            ar: 'الحساب: المبلغ الإجمالي = المبلغ الصافي × 1.19 (عند 19%)؛ المبلغ الصافي = المبلغ الإجمالي / 1.19',
          },
        ],
        examples: [
          {
            de: 'Netto-Preis einer Dienstleistung: 1.000 €. MwSt (19%): 190 €. Brutto-Preis: 1.190 €. Umgekehrt: Ein Brutto-Preis von 595 € enthält 95 € MwSt (595 / 1,19 = 500 € netto).',
            ar: 'السعر الصافي لخدمة: 1,000 يورو. ضريبة القيمة المضافة (19%): 190 يورو. السعر الإجمالي: 1,190 يورو. بالعكس: سعر إجمالي 595 يورو يحتوي على 95 يورو ضريبة قيمة مضافة (595 / 1.19 = 500 يورو صافي).',
          },
        ],
        examRelevance: {
          de: 'Netto-/Bruttoberechnungen mit der MwSt sind Standardrechenaufgaben in der IHK-Prüfung.',
          ar: 'حسابات الصافي/الإجمالي مع ضريبة القيمة المضافة هي مسائل حسابية قياسية في امتحان IHK.',
        },
        summary: {
          de: 'Mehrwertsteuer und Umsatzsteuer sind identisch (19% bzw. 7%). Auf jeder Wertschöpfungsstufe wird nur der Mehrwert besteuert.',
          ar: 'ضريبة القيمة المضافة وضريبة المبيعات متطابقتان (19% أو 7%). في كل مرحلة من سلسلة القيمة يتم فرض ضريبة فقط على القيمة المضافة.',
        },
      },
    },
    {
      id: 'koerperschaftsteuer',
      name: { de: 'Körperschaftsteuer', ar: 'ضريبة الشركات' },
      content: {
        definition: {
          de: 'Die Körperschaftsteuer ist die Einkommensteuer für juristische Personen (Kapitalgesellschaften wie GmbH, AG). Der Steuersatz beträgt einheitlich 15% auf den Gewinn. Zusätzlich fällt der Solidaritätszuschlag (5,5% auf die Körperschaftsteuer) an. Die Körperschaftsteuer ist eine direkte Steuer und eine Gemeinschaftsteuer (Bund und Länder je 50%).',
          ar: 'ضريبة الشركات هي ضريبة الدخل للأشخاص الاعتباريين (شركات رأس المال مثل GmbH وAG). نسبة الضريبة موحدة بـ 15% على الربح. بالإضافة إلى ذلك تُفرض ضريبة التضامن (5.5% على ضريبة الشركات). ضريبة الشركات هي ضريبة مباشرة وضريبة مشتركة (الاتحاد والولايات كل منهما 50%).',
        },
        keyPoints: [
          {
            de: 'Steuersatz: 15% einheitlich auf den Gewinn der Kapitalgesellschaft',
            ar: 'نسبة الضريبة: 15% موحدة على ربح شركة رأس المال',
          },
          {
            de: 'Betrifft Kapitalgesellschaften (GmbH, AG, UG), nicht Personengesellschaften',
            ar: 'تخص شركات رأس المال (GmbH، AG، UG)، وليس شركات الأشخاص',
          },
          {
            de: 'Kommt zur Gewerbesteuer hinzu: Gesamtsteuerbelastung einer GmbH liegt bei ca. 30%',
            ar: 'تُضاف إلى الضريبة التجارية: إجمالي العبء الضريبي لشركة GmbH يبلغ حوالي 30%',
          },
        ],
        examples: [
          {
            de: 'Eine IT-GmbH erzielt einen Gewinn von 200.000 €. Die Körperschaftsteuer beträgt 15% = 30.000 €. Dazu kommen Solidaritätszuschlag und Gewerbesteuer.',
            ar: 'شركة GmbH لتكنولوجيا المعلومات تحقق ربحاً قدره 200,000 يورو. ضريبة الشركات تبلغ 15% = 30,000 يورو. تُضاف إليها ضريبة التضامن والضريبة التجارية.',
          },
        ],
        examRelevance: {
          de: 'Der Steuersatz und die Abgrenzung zur Einkommensteuer (natürliche vs. juristische Personen) werden regelmäßig geprüft.',
          ar: 'يتم فحص نسبة الضريبة والتمييز عن ضريبة الدخل (أشخاص طبيعيون مقابل اعتباريون) بانتظام.',
        },
        summary: {
          de: 'Die Körperschaftsteuer besteuert Gewinne von Kapitalgesellschaften mit 15%. Zusammen mit der Gewerbesteuer ergibt sich eine Gesamtbelastung von ca. 30%.',
          ar: 'تفرض ضريبة الشركات ضريبة بنسبة 15% على أرباح شركات رأس المال. مع الضريبة التجارية ينتج عبء إجمالي بحوالي 30%.',
        },
      },
    },
    {
      id: 'gewerbesteuer',
      name: { de: 'Gewerbesteuer', ar: 'الضريبة التجارية' },
      content: {
        definition: {
          de: 'Die Gewerbesteuer ist eine Steuer auf den Gewerbeertrag von Unternehmen und die wichtigste Einnahmequelle der Gemeinden. Der Steuersatz setzt sich zusammen aus der Steuermesszahl (3,5%) und dem gemeindlichen Hebesatz (variiert, meist 300-500%). Freiberufler (z.B. selbständige IT-Berater) sind von der Gewerbesteuer befreit.',
          ar: 'الضريبة التجارية هي ضريبة على الدخل التجاري للشركات وأهم مصدر دخل للبلديات. تتكون نسبة الضريبة من رقم القياس الضريبي (3.5%) ومعدل الرسم البلدي (يتفاوت، عادة 300-500%). المهنيون الأحرار (مثل مستشاري تكنولوجيا المعلومات المستقلين) معفون من الضريبة التجارية.',
        },
        keyPoints: [
          {
            de: 'Berechnung: Gewerbesteuer = Gewerbeertrag × Steuermesszahl (3,5%) × Hebesatz der Gemeinde',
            ar: 'الحساب: الضريبة التجارية = الدخل التجاري × رقم القياس الضريبي (3.5%) × معدل الرسم البلدي',
          },
          {
            de: 'Freibetrag für Einzelunternehmen und Personengesellschaften: 24.500 €',
            ar: 'إعفاء للمنشآت الفردية وشركات الأشخاص: 24,500 يورو',
          },
          {
            de: 'Geht an die Gemeinde und ist deren wichtigste eigene Steuereinnahme',
            ar: 'تذهب إلى البلدية وهي أهم إيراد ضريبي خاص بها',
          },
        ],
        examples: [
          {
            de: 'IT-GmbH in München (Hebesatz 490%): Gewerbeertrag 200.000 €. Gewerbesteuer = 200.000 × 3,5% × 490% = 200.000 × 0,035 × 4,9 = 34.300 €.',
            ar: 'شركة GmbH لتكنولوجيا المعلومات في ميونخ (معدل الرسم 490%): الدخل التجاري 200,000 يورو. الضريبة التجارية = 200,000 × 3.5% × 490% = 200,000 × 0.035 × 4.9 = 34,300 يورو.',
          },
        ],
        examRelevance: {
          de: 'Die Gewerbesteuer-Berechnung und die Unterscheidung zwischen gewerbesteuerpflichtigen und -freien Tätigkeiten sind prüfungsrelevant.',
          ar: 'حساب الضريبة التجارية والتمييز بين الأنشطة الخاضعة والمعفاة من الضريبة التجارية ذات صلة بالامتحان.',
        },
        summary: {
          de: 'Die Gewerbesteuer wird auf Gewerbeerträge erhoben und fließt an die Gemeinden. Der Hebesatz variiert je nach Gemeinde.',
          ar: 'تُفرض الضريبة التجارية على الدخل التجاري وتتدفق إلى البلديات. يتفاوت معدل الرسم حسب البلدية.',
        },
      },
    },
  ],
};
