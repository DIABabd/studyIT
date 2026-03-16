import type { TopicGroup } from '../../../types';

export const nachhaltigkeit: TopicGroup = {
  id: 'group12-nachhaltigkeit',
  name: {
    de: 'Nachhaltigkeit',
    ar: 'الاستدامة',
  },
  description: {
    de: 'Nachhaltigkeit, Umweltpolitik und Energiepolitik im wirtschaftlichen Kontext',
    ar: 'الاستدامة والسياسة البيئية وسياسة الطاقة في السياق الاقتصادي',
  },
  topics: [
    {
      id: 'nachhaltigkeit',
      name: { de: 'Nachhaltigkeit', ar: 'الاستدامة' },
      content: {
        definition: {
          de: 'Nachhaltigkeit bedeutet, die Bedürfnisse der Gegenwart zu befriedigen, ohne die Fähigkeit zukünftiger Generationen zu gefährden, ihre eigenen Bedürfnisse zu befriedigen (Brundtland-Definition, 1987). Sie umfasst drei Dimensionen: Ökologie (Umwelt), Ökonomie (Wirtschaft) und Soziales (Gesellschaft). Für Unternehmen bedeutet dies eine Verantwortung gegenüber Umwelt, Mitarbeitern und Gesellschaft neben der Gewinnerzielung.',
          ar: 'الاستدامة تعني تلبية احتياجات الحاضر دون المساس بقدرة الأجيال القادمة على تلبية احتياجاتها الخاصة (تعريف برونتلاند، 1987). تشمل ثلاثة أبعاد: البيئة والاقتصاد والمجتمع. بالنسبة للشركات يعني ذلك مسؤولية تجاه البيئة والموظفين والمجتمع إلى جانب تحقيق الربح.',
        },
        keyPoints: [
          {
            de: 'Drei-Säulen-Modell: Ökologie, Ökonomie, Soziales – alle drei müssen im Gleichgewicht sein',
            ar: 'نموذج الأعمدة الثلاثة: البيئة والاقتصاد والمجتمع – يجب أن تكون الثلاثة في توازن',
          },
          {
            de: 'Corporate Social Responsibility (CSR): Freiwillige Übernahme gesellschaftlicher Verantwortung durch Unternehmen',
            ar: 'المسؤولية الاجتماعية للشركات (CSR): تحمل طوعي للمسؤولية الاجتماعية من قبل الشركات',
          },
          {
            de: 'Green IT: Energieeffiziente IT-Infrastruktur, Recycling von IT-Geräten, Cloud-Optimierung zur CO2-Reduktion',
            ar: 'تكنولوجيا المعلومات الخضراء: بنية تحتية لتكنولوجيا المعلومات موفرة للطاقة، إعادة تدوير أجهزة تكنولوجيا المعلومات، تحسين السحابة لتقليل ثاني أكسيد الكربون',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Unternehmen setzt auf energieeffiziente Server (ökologisch), faire Löhne (sozial) und langfristig profitables Wirtschaften (ökonomisch) – alle drei Säulen der Nachhaltigkeit.',
            ar: 'تعتمد شركة تكنولوجيا معلومات على خوادم موفرة للطاقة (بيئياً) وأجور عادلة (اجتماعياً) واقتصاد مربح على المدى الطويل (اقتصادياً) – الأعمدة الثلاثة للاستدامة.',
          },
        ],
        examRelevance: {
          de: 'Nachhaltigkeit und das Drei-Säulen-Modell werden zunehmend in WiSo-Prüfungen abgefragt, besonders im Kontext von Green IT.',
          ar: 'يتم السؤال عن الاستدامة ونموذج الأعمدة الثلاثة بشكل متزايد في امتحانات WiSo، خاصة في سياق تكنولوجيا المعلومات الخضراء.',
        },
        summary: {
          de: 'Nachhaltigkeit vereint Ökologie, Ökonomie und Soziales. Unternehmen tragen durch CSR und Green IT zur nachhaltigen Entwicklung bei.',
          ar: 'تجمع الاستدامة بين البيئة والاقتصاد والمجتمع. تساهم الشركات من خلال CSR وتكنولوجيا المعلومات الخضراء في التنمية المستدامة.',
        },
      },
    },
    {
      id: 'umweltpolitik',
      name: { de: 'Umweltpolitik', ar: 'السياسة البيئية' },
      content: {
        definition: {
          de: 'Umweltpolitik umfasst alle staatlichen Maßnahmen zum Schutz der Umwelt und zur nachhaltigen Nutzung natürlicher Ressourcen. Instrumente sind Gesetze (Bundes-Immissionsschutzgesetz, Kreislaufwirtschaftsgesetz), Steuern (CO2-Steuer), Emissionshandel und Subventionen für umweltfreundliche Technologien. Für IT-Unternehmen ist besonders das Elektro- und Elektronikgerätegesetz (ElektroG) relevant.',
          ar: 'تشمل السياسة البيئية جميع التدابير الحكومية لحماية البيئة والاستخدام المستدام للموارد الطبيعية. الأدوات هي القوانين (قانون حماية الانبعاثات الاتحادي، قانون الاقتصاد الدائري)، الضرائب (ضريبة ثاني أكسيد الكربون)، تجارة الانبعاثات والإعانات للتقنيات الصديقة للبيئة. لشركات تكنولوجيا المعلومات يعد قانون الأجهزة الكهربائية والإلكترونية (ElektroG) ذا صلة خاصة.',
        },
        keyPoints: [
          {
            de: 'Verursacherprinzip: Wer Umweltschäden verursacht, muss dafür aufkommen',
            ar: 'مبدأ المُسبب: من يسبب أضراراً بيئية يجب أن يتحمل تكاليفها',
          },
          {
            de: 'Vorsorgeprinzip: Umweltgefahren sollen im Voraus verhindert werden, nicht erst nach Eintritt eines Schadens',
            ar: 'مبدأ الوقاية: يجب منع الأخطار البيئية مسبقاً وليس فقط بعد حدوث الضرر',
          },
          {
            de: 'ElektroG: Hersteller müssen Elektrogeräte kostenlos zurücknehmen und recyceln',
            ar: 'ElektroG: يجب على المصنعين استرداد الأجهزة الكهربائية مجاناً وإعادة تدويرها',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Unternehmen muss nach dem ElektroG alte Server und Arbeitsplatzrechner fachgerecht entsorgen oder recyceln lassen. Es registriert sich bei der Stiftung EAR.',
            ar: 'يجب على شركة تكنولوجيا معلومات وفقاً لـ ElektroG التخلص من الخوادم وأجهزة الكمبيوتر القديمة بشكل صحيح أو إعادة تدويرها. تسجل في مؤسسة EAR.',
          },
        ],
        examRelevance: {
          de: 'Das Verursacher- und Vorsorgeprinzip sowie das ElektroG für IT-Berufe werden gelegentlich in der Prüfung abgefragt.',
          ar: 'يتم السؤال أحياناً عن مبدأ المُسبب والوقاية وكذلك ElektroG لمهن تكنولوجيا المعلومات في الامتحان.',
        },
        summary: {
          de: 'Umweltpolitik schützt die Umwelt durch Gesetze, Steuern und Anreize. Für IT-Unternehmen ist besonders das ElektroG zur Entsorgung von Elektrogeräten relevant.',
          ar: 'تحمي السياسة البيئية البيئة من خلال القوانين والضرائب والحوافز. لشركات تكنولوجيا المعلومات يعد ElektroG للتخلص من الأجهزة الكهربائية ذا صلة خاصة.',
        },
      },
    },
    {
      id: 'energiepolitik',
      name: { de: 'Energiepolitik', ar: 'سياسة الطاقة' },
      content: {
        definition: {
          de: 'Energiepolitik befasst sich mit der Sicherstellung der Energieversorgung, der Bezahlbarkeit von Energie und dem Umstieg auf erneuerbare Energien (Energiewende). Das energiepolitische Dreieck umfasst Versorgungssicherheit, Bezahlbarkeit und Umweltverträglichkeit. Für IT-Unternehmen ist der Energieverbrauch von Rechenzentren ein zentrales Thema.',
          ar: 'تتعامل سياسة الطاقة مع ضمان إمداد الطاقة والقدرة على تحمل تكاليفها والتحول إلى الطاقات المتجددة (تحول الطاقة). يشمل مثلث سياسة الطاقة أمن الإمداد والقدرة على تحمل التكاليف والتوافق البيئي. لشركات تكنولوجيا المعلومات يعد استهلاك الطاقة في مراكز البيانات موضوعاً محورياً.',
        },
        keyPoints: [
          {
            de: 'Energiepolitisches Dreieck: Versorgungssicherheit, Bezahlbarkeit, Umweltverträglichkeit',
            ar: 'مثلث سياسة الطاقة: أمن الإمداد، القدرة على تحمل التكاليف، التوافق البيئي',
          },
          {
            de: 'Energiewende: Umstieg von fossilen Energieträgern auf erneuerbare Energien (Solar, Wind, Wasser)',
            ar: 'تحول الطاقة: التحول من مصادر الطاقة الأحفورية إلى الطاقات المتجددة (الشمسية، الرياح، المياه)',
          },
          {
            de: 'IT-Relevanz: Rechenzentren verbrauchen große Mengen Strom. Energieeffizienz und Nutzung erneuerbarer Energien werden immer wichtiger',
            ar: 'صلة تكنولوجيا المعلومات: تستهلك مراكز البيانات كميات كبيرة من الكهرباء. تزداد أهمية كفاءة الطاقة واستخدام الطاقات المتجددة',
          },
        ],
        examples: [
          {
            de: 'Ein Cloud-Anbieter betreibt seine Rechenzentren mit 100% erneuerbarer Energie und nutzt die Abwärme der Server zum Heizen von Bürogebäuden.',
            ar: 'يشغل مزود سحابة مراكز بياناته بطاقة متجددة 100% ويستخدم الحرارة المُهدرة من الخوادم لتدفئة مباني المكاتب.',
          },
        ],
        examRelevance: {
          de: 'Das energiepolitische Dreieck und die Bedeutung der Energieeffizienz in der IT werden gelegentlich abgefragt.',
          ar: 'يتم السؤال أحياناً عن مثلث سياسة الطاقة وأهمية كفاءة الطاقة في تكنولوجيا المعلومات.',
        },
        summary: {
          de: 'Energiepolitik balanciert Versorgungssicherheit, Bezahlbarkeit und Umweltverträglichkeit. IT-Unternehmen müssen auf Energieeffizienz achten.',
          ar: 'توازن سياسة الطاقة بين أمن الإمداد والقدرة على تحمل التكاليف والتوافق البيئي. يجب على شركات تكنولوجيا المعلومات الاهتمام بكفاءة الطاقة.',
        },
      },
    },
  ],
};
