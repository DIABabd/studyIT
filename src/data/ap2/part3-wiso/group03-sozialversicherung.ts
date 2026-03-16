import type { TopicGroup } from '../../../types';

export const sozialversicherung: TopicGroup = {
  id: 'group03-sozialversicherung',
  name: {
    de: 'Sozialversicherung',
    ar: 'التأمين الاجتماعي',
  },
  description: {
    de: 'Die fünf Säulen der Sozialversicherung in Deutschland: Kranken-, Renten-, Arbeitslosen-, Pflege- und Unfallversicherung',
    ar: 'الأعمدة الخمسة للتأمين الاجتماعي في ألمانيا: التأمين الصحي، تأمين التقاعد، تأمين البطالة، تأمين الرعاية وتأمين الحوادث',
  },
  topics: [
    {
      id: 'krankenversicherung',
      name: { de: 'Krankenversicherung', ar: 'التأمين الصحي' },
      content: {
        definition: {
          de: 'Die gesetzliche Krankenversicherung (GKV) ist eine Pflichtversicherung für alle Arbeitnehmer bis zur Versicherungspflichtgrenze (2024: 69.300 € Jahresbruttoeinkommen). Sie sichert die medizinische Versorgung im Krankheitsfall. Träger sind die gesetzlichen Krankenkassen (z.B. AOK, TK, Barmer). Ab der Versicherungspflichtgrenze kann man sich privat versichern (PKV).',
          ar: 'التأمين الصحي القانوني (GKV) هو تأمين إلزامي لجميع الموظفين حتى حد الإلزام التأميني (2024: 69,300 يورو دخل سنوي إجمالي). يضمن الرعاية الطبية في حالة المرض. الجهات المسؤولة هي صناديق التأمين الصحي القانونية (مثل AOK، TK، Barmer). من حد الإلزام التأميني يمكن التأمين بشكل خاص (PKV).',
        },
        keyPoints: [
          {
            de: 'Beitragssatz: ca. 14,6% des Bruttoeinkommens (Arbeitgeber und Arbeitnehmer je 7,3%) plus kassenindividueller Zusatzbeitrag',
            ar: 'نسبة الاشتراك: حوالي 14.6% من الدخل الإجمالي (صاحب العمل والموظف كل منهما 7.3%) بالإضافة إلى اشتراك إضافي خاص بالصندوق',
          },
          {
            de: 'Leistungen: Arztbesuche, Krankenhausbehandlung, Medikamente, Vorsorgeuntersuchungen, Krankengeld ab der 7. Woche',
            ar: 'الخدمات: زيارات الطبيب، العلاج في المستشفى، الأدوية، الفحوصات الوقائية، بدل المرض من الأسبوع السابع',
          },
          {
            de: 'Familienversicherung: Ehepartner und Kinder können unter bestimmten Voraussetzungen beitragsfrei mitversichert werden',
            ar: 'التأمين العائلي: يمكن تأمين الزوج والأطفال بشكل مشترك بدون اشتراكات تحت شروط معينة',
          },
        ],
        examples: [
          {
            de: 'Ein Fachinformatiker mit einem Bruttogehalt von 3.500 € zahlt ca. 7,3% (255,50 €) für die Krankenversicherung. Der Arbeitgeber zahlt den gleichen Betrag.',
            ar: 'فني معلومات براتب إجمالي 3,500 يورو يدفع حوالي 7.3% (255.50 يورو) للتأمين الصحي. يدفع صاحب العمل نفس المبلغ.',
          },
        ],
        examRelevance: {
          de: 'Die Krankenversicherung ist eine der am häufigsten abgefragten Sozialversicherungen. Wichtig sind Beitragssätze, Aufteilung AG/AN und die Familienversicherung.',
          ar: 'التأمين الصحي هو أحد أكثر التأمينات الاجتماعية المسؤول عنها في الامتحان. المهم هو نسب الاشتراك وتقسيم صاحب العمل/الموظف والتأمين العائلي.',
        },
        summary: {
          de: 'Die gesetzliche Krankenversicherung sichert die medizinische Versorgung. Der Beitrag (ca. 14,6%) wird hälftig von Arbeitgeber und Arbeitnehmer getragen.',
          ar: 'يضمن التأمين الصحي القانوني الرعاية الطبية. يتم تحمل الاشتراك (حوالي 14.6%) مناصفة بين صاحب العمل والموظف.',
        },
      },
    },
    {
      id: 'rentenversicherung',
      name: { de: 'Rentenversicherung', ar: 'تأمين التقاعد' },
      content: {
        definition: {
          de: 'Die gesetzliche Rentenversicherung (GRV) sichert Arbeitnehmer im Alter, bei Erwerbsminderung und die Hinterbliebenen ab. Der Beitragssatz beträgt 18,6% des Bruttoeinkommens und wird hälftig von Arbeitgeber und Arbeitnehmer getragen. Träger ist die Deutsche Rentenversicherung (DRV). Das Regelrentenalter liegt bei 67 Jahren.',
          ar: 'يؤمن تأمين التقاعد القانوني (GRV) الموظفين في الشيخوخة وعند انخفاض القدرة على الكسب والورثة. تبلغ نسبة الاشتراك 18.6% من الدخل الإجمالي ويتم تحملها مناصفة بين صاحب العمل والموظف. الجهة المسؤولة هي التأمين التقاعدي الألماني (DRV). سن التقاعد القانوني هو 67 سنة.',
        },
        keyPoints: [
          {
            de: 'Beitragssatz: 18,6% (je 9,3% Arbeitgeber und Arbeitnehmer)',
            ar: 'نسبة الاشتراك: 18.6% (9.3% لكل من صاحب العمل والموظف)',
          },
          {
            de: 'Leistungen: Altersrente, Erwerbsminderungsrente, Hinterbliebenenrente (Witwen-/Waisenrente), Rehabilitationsleistungen',
            ar: 'الخدمات: معاش الشيخوخة، معاش انخفاض القدرة على الكسب، معاش الورثة (معاش الأرملة/اليتيم)، خدمات إعادة التأهيل',
          },
          {
            de: 'Generationenvertrag: Die aktuell Berufstätigen finanzieren mit ihren Beiträgen die Renten der jetzigen Rentner (Umlageverfahren)',
            ar: 'عقد الأجيال: يموّل العاملون حالياً بمساهماتهم معاشات المتقاعدين الحاليين (نظام التوزيع)',
          },
        ],
        examples: [
          {
            de: 'Ein Arbeitnehmer mit 3.500 € Bruttogehalt zahlt monatlich 325,50 € (9,3%) in die Rentenversicherung. Der Arbeitgeber zahlt ebenfalls 325,50 €.',
            ar: 'موظف براتب إجمالي 3,500 يورو يدفع شهرياً 325.50 يورو (9.3%) في تأمين التقاعد. يدفع صاحب العمل أيضاً 325.50 يورو.',
          },
        ],
        examRelevance: {
          de: 'Der Beitragssatz und das Umlageverfahren (Generationenvertrag) sind häufige Prüfungsthemen. Auch die verschiedenen Rentenarten sollten bekannt sein.',
          ar: 'نسبة الاشتراك ونظام التوزيع (عقد الأجيال) هي مواضيع امتحانية متكررة. كما يجب معرفة أنواع المعاشات المختلفة.',
        },
        summary: {
          de: 'Die Rentenversicherung sichert das Alter ab. Der Beitrag von 18,6% wird hälftig getragen. Das System basiert auf dem Generationenvertrag (Umlageverfahren).',
          ar: 'يؤمن تأمين التقاعد الشيخوخة. يتم تحمل الاشتراك البالغ 18.6% مناصفة. يعتمد النظام على عقد الأجيال (نظام التوزيع).',
        },
      },
    },
    {
      id: 'arbeitslosenversicherung',
      name: { de: 'Arbeitslosenversicherung', ar: 'تأمين البطالة' },
      content: {
        definition: {
          de: 'Die Arbeitslosenversicherung sichert Arbeitnehmer bei Verlust des Arbeitsplatzes finanziell ab. Sie wird von der Bundesagentur für Arbeit verwaltet. Der Beitragssatz beträgt 2,6% des Bruttoeinkommens und wird hälftig getragen. Leistungen umfassen Arbeitslosengeld I (ALG I), Vermittlungsleistungen und Weiterbildungsmaßnahmen.',
          ar: 'يؤمن تأمين البطالة الموظفين مالياً عند فقدان مكان العمل. تديره الوكالة الاتحادية للعمل. تبلغ نسبة الاشتراك 2.6% من الدخل الإجمالي ويتم تحملها مناصفة. تشمل الخدمات إعانة البطالة I (ALG I) وخدمات التوظيف وبرامج التدريب.',
        },
        keyPoints: [
          {
            de: 'Beitragssatz: 2,6% (je 1,3% Arbeitgeber und Arbeitnehmer)',
            ar: 'نسبة الاشتراك: 2.6% (1.3% لكل من صاحب العمل والموظف)',
          },
          {
            de: 'ALG I: 60% des letzten Nettogehalts (67% mit Kindern), Bezugsdauer abhängig von Alter und Versicherungsdauer (6-24 Monate)',
            ar: 'إعانة البطالة I: 60% من آخر راتب صافي (67% مع أطفال)، مدة الاستحقاق تعتمد على العمر ومدة التأمين (6-24 شهراً)',
          },
          {
            de: 'Voraussetzung für ALG I: Mindestens 12 Monate sozialversicherungspflichtige Beschäftigung in den letzten 30 Monaten',
            ar: 'شرط إعانة البطالة I: 12 شهراً على الأقل من العمل الخاضع للتأمين الاجتماعي في آخر 30 شهراً',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Projektmanager wird betriebsbedingt gekündigt. Er erhält ALG I in Höhe von 60% seines letzten Nettogehalts für 12 Monate, da er 3 Jahre eingezahlt hat.',
            ar: 'يتم فصل مدير مشروع تكنولوجيا معلومات لأسباب تشغيلية. يحصل على إعانة البطالة I بنسبة 60% من آخر راتب صافي لمدة 12 شهراً لأنه دفع الاشتراكات لمدة 3 سنوات.',
          },
        ],
        examRelevance: {
          de: 'Prüfungsrelevant sind der Beitragssatz, die Voraussetzungen für ALG I und die Berechnung der Bezugsdauer.',
          ar: 'ذات صلة بالامتحان هي نسبة الاشتراك وشروط إعانة البطالة I وحساب مدة الاستحقاق.',
        },
        summary: {
          de: 'Die Arbeitslosenversicherung zahlt ALG I bei Jobverlust. Der Beitrag beträgt 2,6% (hälftig). Voraussetzung sind 12 Monate Einzahlung in 30 Monaten.',
          ar: 'يدفع تأمين البطالة إعانة البطالة I عند فقدان العمل. الاشتراك 2.6% (مناصفة). الشرط هو 12 شهراً من الدفع في 30 شهراً.',
        },
      },
    },
    {
      id: 'pflegeversicherung',
      name: { de: 'Pflegeversicherung', ar: 'تأمين الرعاية' },
      content: {
        definition: {
          de: 'Die gesetzliche Pflegeversicherung sichert das Risiko der Pflegebedürftigkeit ab. Sie wurde 1995 als fünfte Säule der Sozialversicherung eingeführt. Der Beitragssatz beträgt 3,4% des Bruttoeinkommens (für Kinderlose ab 23 Jahren: 4,0%). Leistungen werden in Pflegegraden (1-5) gestaffelt und umfassen Pflegegeld, Pflegesachleistungen und stationäre Pflege.',
          ar: 'يؤمن تأمين الرعاية القانوني مخاطر الحاجة إلى الرعاية. تم إدخاله عام 1995 كعمود خامس للتأمين الاجتماعي. تبلغ نسبة الاشتراك 3.4% من الدخل الإجمالي (لمن ليس لديهم أطفال من 23 سنة: 4.0%). تُدرج الخدمات في درجات رعاية (1-5) وتشمل بدل الرعاية وخدمات الرعاية العينية والرعاية المقيمة.',
        },
        keyPoints: [
          {
            de: 'Beitragssatz: 3,4% (hälftig AG/AN), Zuschlag für Kinderlose ab 23: +0,6%',
            ar: 'نسبة الاشتراك: 3.4% (مناصفة صاحب العمل/الموظف)، علاوة لمن ليس لديهم أطفال من 23 سنة: +0.6%',
          },
          {
            de: '5 Pflegegrade: Grad 1 (geringe Beeinträchtigung) bis Grad 5 (schwerste Beeinträchtigung)',
            ar: '5 درجات رعاية: الدرجة 1 (إعاقة طفيفة) إلى الدرجة 5 (إعاقة شديدة جداً)',
          },
          {
            de: 'Leistungen: Pflegegeld (für Pflege durch Angehörige), Pflegesachleistungen (professionelle Pflege), vollstationäre Pflege',
            ar: 'الخدمات: بدل الرعاية (للرعاية من قبل الأقارب)، خدمات الرعاية العينية (الرعاية المهنية)، الرعاية المقيمة الكاملة',
          },
        ],
        examples: [
          {
            de: 'Ein 30-jähriger kinderloser Softwareentwickler zahlt 4,0% Pflegeversicherung (statt 3,4%), da der Kinderlosenzuschlag greift.',
            ar: 'مطور برمجيات يبلغ 30 عاماً بدون أطفال يدفع 4.0% تأمين رعاية (بدلاً من 3.4%)، لأن علاوة عدم الإنجاب تسري.',
          },
        ],
        examRelevance: {
          de: 'In der Prüfung werden Beitragssätze, der Kinderlosenzuschlag und die Pflegegrade abgefragt.',
          ar: 'في الامتحان يُسأل عن نسب الاشتراك وعلاوة عدم الإنجاب ودرجات الرعاية.',
        },
        summary: {
          de: 'Die Pflegeversicherung sichert Pflegebedürftigkeit ab. Der Beitrag beträgt 3,4% (Kinderlose: 4,0%). Leistungen richten sich nach dem Pflegegrad (1-5).',
          ar: 'يؤمن تأمين الرعاية الحاجة إلى الرعاية. الاشتراك 3.4% (بدون أطفال: 4.0%). تعتمد الخدمات على درجة الرعاية (1-5).',
        },
      },
    },
    {
      id: 'unfallversicherung',
      name: { de: 'Unfallversicherung', ar: 'تأمين الحوادث' },
      content: {
        definition: {
          de: 'Die gesetzliche Unfallversicherung schützt Arbeitnehmer bei Arbeitsunfällen, Wegeunfällen und Berufskrankheiten. Sie wird ausschließlich vom Arbeitgeber finanziert. Träger sind die Berufsgenossenschaften (für gewerbliche Wirtschaft) und Unfallkassen (für öffentlichen Dienst). Auszubildende sind ebenfalls versichert.',
          ar: 'يحمي تأمين الحوادث القانوني الموظفين عند حوادث العمل وحوادث الطريق والأمراض المهنية. يتم تمويله حصرياً من قبل صاحب العمل. الجهات المسؤولة هي الجمعيات المهنية (للاقتصاد التجاري) وصناديق الحوادث (للخدمة العامة). المتدربون مؤمنون أيضاً.',
        },
        keyPoints: [
          {
            de: 'Alleinige Finanzierung durch den Arbeitgeber – der Arbeitnehmer zahlt keinen Beitrag',
            ar: 'تمويل حصري من قبل صاحب العمل – لا يدفع الموظف أي اشتراك',
          },
          {
            de: 'Versicherte Risiken: Arbeitsunfälle (am Arbeitsplatz), Wegeunfälle (auf dem Weg zur/von der Arbeit), Berufskrankheiten',
            ar: 'المخاطر المؤمنة: حوادث العمل (في مكان العمل)، حوادث الطريق (في الطريق إلى/من العمل)، الأمراض المهنية',
          },
          {
            de: 'Leistungen: Heilbehandlung, Rehabilitation, Verletztengeld, Unfallrente bei dauerhafter Beeinträchtigung',
            ar: 'الخدمات: العلاج، إعادة التأهيل، بدل الإصابة، معاش الحوادث عند الإعاقة الدائمة',
          },
        ],
        examples: [
          {
            de: 'Ein Mitarbeiter stürzt auf dem Weg zur Arbeit und bricht sich den Arm. Die Unfallversicherung übernimmt die Behandlungskosten und zahlt Verletztengeld.',
            ar: 'يسقط موظف في الطريق إلى العمل ويكسر ذراعه. يتحمل تأمين الحوادث تكاليف العلاج ويدفع بدل الإصابة.',
          },
        ],
        examRelevance: {
          de: 'Prüfungsrelevant ist vor allem die Tatsache, dass die Unfallversicherung allein vom Arbeitgeber getragen wird, sowie die Definition von Arbeits- und Wegeunfällen.',
          ar: 'ذات صلة بالامتحان بشكل خاص هي حقيقة أن تأمين الحوادث يتحمله صاحب العمل وحده، وكذلك تعريف حوادث العمل والطريق.',
        },
        summary: {
          de: 'Die Unfallversicherung wird allein vom Arbeitgeber finanziert und schützt bei Arbeits- und Wegeunfällen sowie Berufskrankheiten.',
          ar: 'يُموّل تأمين الحوادث من قبل صاحب العمل وحده ويحمي عند حوادث العمل والطريق والأمراض المهنية.',
        },
      },
    },
    {
      id: 'beitragssaetze',
      name: { de: 'Beitragssätze', ar: 'نسب الاشتراك' },
      content: {
        definition: {
          de: 'Die Beitragssätze der Sozialversicherung bestimmen, welcher Anteil des Bruttoeinkommens für die einzelnen Versicherungszweige abgeführt wird. Die Gesamtbelastung liegt bei ca. 40% des Bruttoeinkommens, wobei Arbeitgeber und Arbeitnehmer sich die meisten Beiträge teilen (paritätische Finanzierung). Die Beiträge werden nur bis zur Beitragsbemessungsgrenze berechnet.',
          ar: 'تحدد نسب الاشتراك في التأمين الاجتماعي أي نسبة من الدخل الإجمالي يتم دفعها لفروع التأمين الفردية. يبلغ إجمالي العبء حوالي 40% من الدخل الإجمالي، حيث يتقاسم صاحب العمل والموظف معظم الاشتراكات (التمويل المتساوي). يتم حساب الاشتراكات فقط حتى حد تقييم الاشتراك.',
        },
        keyPoints: [
          {
            de: 'Krankenversicherung: ca. 14,6% + Zusatzbeitrag (hälftig), Rentenversicherung: 18,6% (hälftig), Arbeitslosenversicherung: 2,6% (hälftig), Pflegeversicherung: 3,4% (hälftig, +0,6% Kinderlose), Unfallversicherung: variabel (nur AG)',
            ar: 'التأمين الصحي: حوالي 14.6% + اشتراك إضافي (مناصفة)، تأمين التقاعد: 18.6% (مناصفة)، تأمين البطالة: 2.6% (مناصفة)، تأمين الرعاية: 3.4% (مناصفة، +0.6% بدون أطفال)، تأمين الحوادث: متغير (صاحب العمل فقط)',
          },
          {
            de: 'Beitragsbemessungsgrenze: Obergrenze des Einkommens, bis zu der Beiträge berechnet werden (KV/PV: 62.100 €, RV/AV: 90.600 € jährlich, Stand 2024)',
            ar: 'حد تقييم الاشتراك: الحد الأعلى للدخل الذي يتم حساب الاشتراكات حتاه (التأمين الصحي/الرعاية: 62,100 يورو، التقاعد/البطالة: 90,600 يورو سنوياً، وضع 2024)',
          },
          {
            de: 'Gesamter Arbeitnehmeranteil: ca. 20% des Bruttogehalts',
            ar: 'إجمالي حصة الموظف: حوالي 20% من الراتب الإجمالي',
          },
        ],
        examples: [
          {
            de: 'Gehaltsabrechnung eines Fachinformatikers (3.500 € brutto): KV 7,3% = 255,50 €, RV 9,3% = 325,50 €, AV 1,3% = 45,50 €, PV 1,7% = 59,50 €. Gesamtabzug Sozialversicherung: ca. 686 €.',
            ar: 'كشف راتب فني معلومات (3,500 يورو إجمالي): التأمين الصحي 7.3% = 255.50 يورو، التقاعد 9.3% = 325.50 يورو، البطالة 1.3% = 45.50 يورو، الرعاية 1.7% = 59.50 يورو. إجمالي خصم التأمين الاجتماعي: حوالي 686 يورو.',
          },
        ],
        examRelevance: {
          de: 'Die Beitragssätze sind ein Standardthema in der WiSo-Prüfung. Häufig werden Berechnungsaufgaben zur Gehaltsabrechnung gestellt.',
          ar: 'نسب الاشتراك هي موضوع قياسي في امتحان WiSo. غالباً ما تُطرح مسائل حسابية حول كشف الراتب.',
        },
        summary: {
          de: 'Die Sozialversicherungsbeiträge betragen insgesamt ca. 40% des Bruttogehalts und werden meist hälftig zwischen AG und AN geteilt. Ausnahme: Unfallversicherung (nur AG).',
          ar: 'تبلغ اشتراكات التأمين الاجتماعي إجمالاً حوالي 40% من الراتب الإجمالي وتُقسم عادة مناصفة بين صاحب العمل والموظف. استثناء: تأمين الحوادث (صاحب العمل فقط).',
        },
      },
    },
    {
      id: 'ag-an-anteil',
      name: { de: 'Arbeitgeberanteil/Arbeitnehmeranteil', ar: 'حصة صاحب العمل/حصة الموظف' },
      content: {
        definition: {
          de: 'Die Sozialversicherungsbeiträge werden grundsätzlich paritätisch, also zu gleichen Teilen, von Arbeitgeber und Arbeitnehmer getragen. Der Arbeitgeber führt sowohl seinen eigenen Anteil als auch den Arbeitnehmeranteil an die Sozialversicherungsträger ab. Der Arbeitnehmeranteil wird direkt vom Bruttogehalt einbehalten.',
          ar: 'يتم تحمل اشتراكات التأمين الاجتماعي بشكل أساسي بالتساوي بين صاحب العمل والموظف. يقوم صاحب العمل بتحويل حصته الخاصة وكذلك حصة الموظف إلى جهات التأمين الاجتماعي. يتم خصم حصة الموظف مباشرة من الراتب الإجمالي.',
        },
        keyPoints: [
          {
            de: 'Paritätische Finanzierung: KV, RV, AV und PV werden hälftig geteilt',
            ar: 'التمويل المتساوي: التأمين الصحي والتقاعد والبطالة والرعاية يتم تقسيمها مناصفة',
          },
          {
            de: 'Ausnahme Unfallversicherung: Wird allein vom Arbeitgeber getragen',
            ar: 'استثناء تأمين الحوادث: يتحمله صاحب العمل وحده',
          },
          {
            de: 'Ausnahme Pflegeversicherung: Der Kinderlosenzuschlag (0,6%) wird allein vom Arbeitnehmer getragen',
            ar: 'استثناء تأمين الرعاية: علاوة عدم الإنجاب (0.6%) يتحملها الموظف وحده',
          },
        ],
        examples: [
          {
            de: 'Bei einem Bruttogehalt von 4.000 € führt der Arbeitgeber insgesamt ca. 800 € (seinen Anteil) plus ca. 800 € (Arbeitnehmeranteil, vom Brutto einbehalten) an die Sozialversicherung ab.',
            ar: 'عند راتب إجمالي قدره 4,000 يورو يحول صاحب العمل إجمالاً حوالي 800 يورو (حصته) بالإضافة إلى حوالي 800 يورو (حصة الموظف، المخصومة من الإجمالي) إلى التأمين الاجتماعي.',
          },
        ],
        examRelevance: {
          de: 'Die Aufteilung der Beiträge zwischen AG und AN und die Ausnahmen (Unfallversicherung, Kinderlosenzuschlag) sind typische Prüfungsinhalte.',
          ar: 'تقسيم الاشتراكات بين صاحب العمل والموظف والاستثناءات (تأمين الحوادث، علاوة عدم الإنجاب) هي محتويات امتحانية نموذجية.',
        },
        summary: {
          de: 'AG und AN teilen sich die meisten Sozialversicherungsbeiträge hälftig. Ausnahmen: Unfallversicherung (nur AG) und Kinderlosenzuschlag bei der PV (nur AN).',
          ar: 'يتقاسم صاحب العمل والموظف معظم اشتراكات التأمين الاجتماعي مناصفة. استثناءات: تأمين الحوادث (صاحب العمل فقط) وعلاوة عدم الإنجاب في تأمين الرعاية (الموظف فقط).',
        },
      },
    },
    {
      id: 'sozialversicherungsnummer',
      name: { de: 'Sozialversicherungsnummer', ar: 'رقم التأمين الاجتماعي' },
      content: {
        definition: {
          de: 'Die Sozialversicherungsnummer (SV-Nummer) ist eine eindeutige, lebenslange Kennnummer, die jeder versicherten Person in Deutschland von der Deutschen Rentenversicherung zugewiesen wird. Sie dient der eindeutigen Identifikation im Sozialversicherungssystem und wird bei der erstmaligen Aufnahme einer Beschäftigung vergeben.',
          ar: 'رقم التأمين الاجتماعي (SV-Nummer) هو رقم تعريف فريد مدى الحياة يُمنح لكل شخص مؤمن عليه في ألمانيا من قبل التأمين التقاعدي الألماني. يخدم التعريف الفريد في نظام التأمين الاجتماعي ويُمنح عند بدء العمل لأول مرة.',
        },
        keyPoints: [
          {
            de: 'Aufbau: 12-stellig, enthält Bereichsnummer, Geburtsdatum, Anfangsbuchstabe des Geburtsnamens, Seriennummer und Prüfziffer',
            ar: 'التركيب: 12 رقماً، يحتوي على رقم المنطقة وتاريخ الميلاد والحرف الأول من اسم الميلاد ورقم تسلسلي ورقم تحقق',
          },
          {
            de: 'Wird bei jeder Beschäftigungsaufnahme benötigt und dem Arbeitgeber mitgeteilt',
            ar: 'مطلوب عند كل بدء عمل ويتم إبلاغه لصاحب العمل',
          },
          {
            de: 'Bleibt lebenslang gleich und ändert sich auch bei Namensänderung nicht',
            ar: 'يبقى كما هو مدى الحياة ولا يتغير حتى عند تغيير الاسم',
          },
        ],
        examples: [
          {
            de: 'Ein Auszubildender beginnt seine Ausbildung zum Fachinformatiker. Er erhält automatisch einen Sozialversicherungsausweis mit seiner SV-Nummer und gibt diese an seinen Ausbildungsbetrieb weiter.',
            ar: 'يبدأ متدرب تدريبه كفني معلومات. يحصل تلقائياً على بطاقة تأمين اجتماعي برقم التأمين الاجتماعي الخاص به ويعطيه لمنشأة التدريب.',
          },
        ],
        examRelevance: {
          de: 'Die SV-Nummer wird gelegentlich im Zusammenhang mit dem Beginn eines Arbeitsverhältnisses oder der Gehaltsabrechnung geprüft.',
          ar: 'يتم فحص رقم التأمين الاجتماعي أحياناً فيما يتعلق ببداية علاقة العمل أو كشف الراتب.',
        },
        summary: {
          de: 'Die SV-Nummer ist eine lebenslange 12-stellige Kennnummer zur Identifikation im Sozialversicherungssystem. Sie wird von der Deutschen Rentenversicherung vergeben.',
          ar: 'رقم التأمين الاجتماعي هو رقم تعريف مدى الحياة مكون من 12 رقماً للتعريف في نظام التأمين الاجتماعي. يُمنح من قبل التأمين التقاعدي الألماني.',
        },
      },
    },
  ],
};
