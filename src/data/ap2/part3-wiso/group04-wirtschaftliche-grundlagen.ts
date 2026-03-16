import type { TopicGroup } from '../../../types';

export const wirtschaftlicheGrundlagen: TopicGroup = {
  id: 'group04-wirtschaftliche-grundlagen',
  name: {
    de: 'Wirtschaftliche Grundlagen',
    ar: 'الأساسيات الاقتصادية',
  },
  description: {
    de: 'Grundlagen der Marktwirtschaft: Angebot und Nachfrage, Preisbildung, Wettbewerb und Marktformen',
    ar: 'أساسيات اقتصاد السوق: العرض والطلب، تكوين الأسعار، المنافسة وأشكال السوق',
  },
  topics: [
    {
      id: 'angebot-nachfrage',
      name: { de: 'Angebot und Nachfrage', ar: 'العرض والطلب' },
      content: {
        definition: {
          de: 'Angebot und Nachfrage sind die grundlegenden Marktkräfte, die den Preis und die Menge eines Gutes bestimmen. Das Angebot beschreibt die Menge, die Produzenten zu verschiedenen Preisen verkaufen wollen. Die Nachfrage beschreibt die Menge, die Konsumenten zu verschiedenen Preisen kaufen wollen. Im Gleichgewichtspunkt stimmen Angebot und Nachfrage überein.',
          ar: 'العرض والطلب هما القوى السوقية الأساسية التي تحدد سعر وكمية السلعة. يصف العرض الكمية التي يريد المنتجون بيعها بأسعار مختلفة. يصف الطلب الكمية التي يريد المستهلكون شراءها بأسعار مختلفة. في نقطة التوازن يتطابق العرض والطلب.',
        },
        keyPoints: [
          {
            de: 'Nachfragegesetz: Steigt der Preis, sinkt die nachgefragte Menge (und umgekehrt)',
            ar: 'قانون الطلب: عندما يرتفع السعر تنخفض الكمية المطلوبة (والعكس صحيح)',
          },
          {
            de: 'Angebotsgesetz: Steigt der Preis, steigt die angebotene Menge (und umgekehrt)',
            ar: 'قانون العرض: عندما يرتفع السعر تزداد الكمية المعروضة (والعكس صحيح)',
          },
          {
            de: 'Gleichgewichtspreis: Der Preis, bei dem die angebotene Menge gleich der nachgefragten Menge ist (Marktgleichgewicht)',
            ar: 'سعر التوازن: السعر الذي تكون فيه الكمية المعروضة مساوية للكمية المطلوبة (توازن السوق)',
          },
        ],
        examples: [
          {
            de: 'Ein neues Smartphone wird für 1.000 € angeboten. Bei diesem Preis wollen nur wenige Kunden kaufen (geringe Nachfrage). Wird der Preis auf 600 € gesenkt, steigt die Nachfrage deutlich.',
            ar: 'هاتف ذكي جديد يُعرض بسعر 1,000 يورو. بهذا السعر يريد عدد قليل من العملاء الشراء (طلب منخفض). عند تخفيض السعر إلى 600 يورو يرتفع الطلب بشكل ملحوظ.',
          },
        ],
        examRelevance: {
          de: 'Angebot und Nachfrage sind Grundlagenwissen. In der Prüfung werden häufig Diagramme zur Preisbildung und Verschiebungen der Kurven abgefragt.',
          ar: 'العرض والطلب هما معرفة أساسية. في الامتحان يُسأل بشكل متكرر عن مخططات تكوين الأسعار وتحولات المنحنيات.',
        },
        summary: {
          de: 'Angebot und Nachfrage bestimmen den Marktpreis. Im Gleichgewicht entspricht die angebotene der nachgefragten Menge.',
          ar: 'يحدد العرض والطلب سعر السوق. في التوازن تتساوى الكمية المعروضة مع الكمية المطلوبة.',
        },
      },
    },
    {
      id: 'marktpreis',
      name: { de: 'Marktpreis', ar: 'سعر السوق' },
      content: {
        definition: {
          de: 'Der Marktpreis (Gleichgewichtspreis) ist der Preis, der sich durch das Zusammenspiel von Angebot und Nachfrage auf einem freien Markt bildet. Bei diesem Preis sind angebotene und nachgefragte Menge gleich. Liegt der Preis über dem Gleichgewicht, entsteht ein Angebotsüberschuss; liegt er darunter, ein Nachfrageüberschuss.',
          ar: 'سعر السوق (سعر التوازن) هو السعر الذي يتشكل من خلال تفاعل العرض والطلب في سوق حرة. عند هذا السعر تكون الكمية المعروضة والمطلوبة متساوية. إذا كان السعر فوق التوازن ينشأ فائض عرض؛ وإذا كان تحته ينشأ فائض طلب.',
        },
        keyPoints: [
          {
            de: 'Angebotsüberschuss: Preis zu hoch → mehr Angebot als Nachfrage → Preis sinkt',
            ar: 'فائض العرض: السعر مرتفع جداً → عرض أكثر من الطلب → السعر ينخفض',
          },
          {
            de: 'Nachfrageüberschuss: Preis zu niedrig → mehr Nachfrage als Angebot → Preis steigt',
            ar: 'فائض الطلب: السعر منخفض جداً → طلب أكثر من العرض → السعر يرتفع',
          },
          {
            de: 'Staatliche Eingriffe wie Mindestpreise oder Höchstpreise können den Gleichgewichtspreis verzerren',
            ar: 'التدخلات الحكومية مثل الأسعار الدنيا أو الأسعار القصوى يمكن أن تشوه سعر التوازن',
          },
        ],
        examples: [
          {
            de: 'Auf dem Markt für IT-Fachkräfte übersteigt die Nachfrage das Angebot. Die Folge: Die Gehälter (der „Preis" der Arbeitskraft) steigen.',
            ar: 'في سوق خبراء تكنولوجيا المعلومات يفوق الطلب العرض. النتيجة: الرواتب ("سعر" قوة العمل) ترتفع.',
          },
        ],
        examRelevance: {
          de: 'Die Preisbildung am Markt und das Verständnis von Angebots-/Nachfrageüberschüssen werden regelmäßig geprüft.',
          ar: 'تكوين الأسعار في السوق وفهم فائض العرض/الطلب يتم فحصها بانتظام.',
        },
        summary: {
          de: 'Der Marktpreis bildet sich im Gleichgewicht von Angebot und Nachfrage. Abweichungen führen automatisch zu Preiskorrekturen.',
          ar: 'يتشكل سعر السوق في توازن العرض والطلب. الانحرافات تؤدي تلقائياً إلى تصحيحات في الأسعار.',
        },
      },
    },
    {
      id: 'wettbewerb',
      name: { de: 'Wettbewerb', ar: 'المنافسة' },
      content: {
        definition: {
          de: 'Wettbewerb ist der Konkurrenzkampf zwischen Anbietern auf einem Markt um Kunden. Er führt zu niedrigeren Preisen, besserer Qualität und Innovation. In Deutschland wird der Wettbewerb durch das Gesetz gegen Wettbewerbsbeschränkungen (GWB) und das Bundeskartellamt geschützt. Wettbewerbsbeschränkende Absprachen (Kartelle) sind verboten.',
          ar: 'المنافسة هي التنافس بين المورّدين في السوق على العملاء. تؤدي إلى أسعار أقل وجودة أفضل وابتكار. في ألمانيا يتم حماية المنافسة من خلال قانون مكافحة تقييد المنافسة (GWB) ومكتب مكافحة الاحتكار الاتحادي. الاتفاقات المقيدة للمنافسة (الكارتلات) محظورة.',
        },
        keyPoints: [
          {
            de: 'Funktionen des Wettbewerbs: Preissenkung, Qualitätssteigerung, Innovation, effiziente Ressourcenverteilung',
            ar: 'وظائف المنافسة: خفض الأسعار، تحسين الجودة، الابتكار، التوزيع الفعال للموارد',
          },
          {
            de: 'Das Bundeskartellamt überwacht den Wettbewerb und verhindert Monopolbildung und Kartelle',
            ar: 'يراقب مكتب مكافحة الاحتكار الاتحادي المنافسة ويمنع تشكيل الاحتكارات والكارتلات',
          },
          {
            de: 'Wettbewerbsbeschränkungen: Kartelle (Preisabsprachen), Missbrauch einer marktbeherrschenden Stellung, Fusionskontrolle',
            ar: 'قيود المنافسة: الكارتلات (اتفاقيات الأسعار)، إساءة استخدام المركز المهيمن في السوق، مراقبة الاندماج',
          },
        ],
        examples: [
          {
            de: 'Mehrere Cloud-Anbieter konkurrieren um Unternehmenskunden. Der Wettbewerb führt zu sinkenden Preisen und ständig neuen Features.',
            ar: 'يتنافس عدة مزودي سحابة على عملاء الشركات. تؤدي المنافسة إلى انخفاض الأسعار وميزات جديدة باستمرار.',
          },
        ],
        examRelevance: {
          de: 'Funktionen des Wettbewerbs und das Kartellverbot sind wichtige Prüfungsinhalte.',
          ar: 'وظائف المنافسة وحظر الكارتلات هي محتويات امتحانية مهمة.',
        },
        summary: {
          de: 'Wettbewerb fördert niedrige Preise, Qualität und Innovation. Er wird durch das Kartellrecht und das Bundeskartellamt geschützt.',
          ar: 'تعزز المنافسة الأسعار المنخفضة والجودة والابتكار. تتم حمايتها من خلال قانون مكافحة الاحتكار ومكتب مكافحة الاحتكار.',
        },
      },
    },
    {
      id: 'marktformen',
      name: { de: 'Marktformen', ar: 'أشكال السوق' },
      content: {
        definition: {
          de: 'Marktformen beschreiben die Struktur eines Marktes anhand der Anzahl der Anbieter und Nachfrager. Die drei Grundformen sind Monopol (ein Anbieter), Oligopol (wenige Anbieter) und Polypol (viele Anbieter). Die Marktform beeinflusst maßgeblich die Preisbildung und den Wettbewerb.',
          ar: 'تصف أشكال السوق هيكل السوق بناءً على عدد المورّدين والطالبين. الأشكال الأساسية الثلاثة هي الاحتكار (مورّد واحد) واحتكار القلة (مورّدون قليلون) والمنافسة الكاملة (مورّدون كثيرون). يؤثر شكل السوق بشكل كبير على تكوين الأسعار والمنافسة.',
        },
        keyPoints: [
          {
            de: 'Einteilung nach Anzahl der Anbieter: Monopol (1), Oligopol (wenige), Polypol (viele)',
            ar: 'التصنيف حسب عدد المورّدين: احتكار (1)، احتكار قلة (قليلون)، منافسة كاملة (كثيرون)',
          },
          {
            de: 'Einteilung auch nach Nachfragerseite möglich: Monopson (1 Nachfrager), Oligopson (wenige), Polypson (viele)',
            ar: 'التصنيف ممكن أيضاً من جانب الطالبين: احتكار شراء (طالب واحد)، احتكار شراء قلة (قليلون)، تعدد طالبين (كثيرون)',
          },
          {
            de: 'In der Realität existieren Mischformen und unvollkommene Märkte',
            ar: 'في الواقع توجد أشكال مختلطة وأسواق غير كاملة',
          },
        ],
        examples: [
          {
            de: 'Betriebssysteme für Desktop-PCs: Microsoft (Windows) hat eine monopolartige Stellung. Mobilfunkanbieter (Telekom, Vodafone, o2): Oligopol. Friseure in einer Stadt: Polypol.',
            ar: 'أنظمة تشغيل أجهزة الكمبيوتر المكتبية: مايكروسوفت (ويندوز) لها وضع شبيه بالاحتكار. مزودو الهاتف المحمول (Telekom، Vodafone، o2): احتكار قلة. مصففو الشعر في مدينة: منافسة كاملة.',
          },
        ],
        examRelevance: {
          de: 'Marktformen und ihre Merkmale sind ein Standardthema in der WiSo-Prüfung. Beispiele aus der IT-Branche sollten bekannt sein.',
          ar: 'أشكال السوق وخصائصها هي موضوع قياسي في امتحان WiSo. يجب معرفة أمثلة من قطاع تكنولوجيا المعلومات.',
        },
        summary: {
          de: 'Marktformen unterscheiden sich durch die Anzahl der Anbieter: Monopol (1), Oligopol (wenige), Polypol (viele). Sie beeinflussen Preis und Wettbewerb.',
          ar: 'تختلف أشكال السوق بعدد المورّدين: احتكار (1)، احتكار قلة (قليلون)، منافسة كاملة (كثيرون). تؤثر على السعر والمنافسة.',
        },
      },
    },
    {
      id: 'monopol',
      name: { de: 'Monopol', ar: 'الاحتكار' },
      content: {
        definition: {
          de: 'Ein Monopol liegt vor, wenn es auf einem Markt nur einen einzigen Anbieter gibt, der den gesamten Markt bedient. Der Monopolist kann den Preis weitgehend selbst bestimmen (Preissetzer). Monopole können durch Patente, staatliche Lizenzen oder natürliche Marktbarrieren entstehen. Sie gelten als wettbewerbsschädlich und werden reguliert.',
          ar: 'يوجد احتكار عندما يكون هناك مورّد واحد فقط في السوق يخدم السوق بالكامل. يمكن للمحتكر تحديد السعر إلى حد كبير بنفسه (محدد السعر). يمكن أن ينشأ الاحتكار من خلال براءات الاختراع أو التراخيص الحكومية أو حواجز السوق الطبيعية. يعتبر ضاراً بالمنافسة ويتم تنظيمه.',
        },
        keyPoints: [
          {
            de: 'Merkmale: Ein Anbieter, keine Substitute, hohe Markteintrittsbarrieren, Preissetzungsmacht',
            ar: 'الخصائص: مورّد واحد، لا بدائل، حواجز دخول عالية، قوة تحديد الأسعار',
          },
          {
            de: 'Natürliches Monopol: Entsteht, wenn ein einziger Anbieter den Markt günstiger bedienen kann als mehrere (z.B. Stromnetz)',
            ar: 'احتكار طبيعي: ينشأ عندما يمكن لمورّد واحد خدمة السوق بتكلفة أقل من عدة مورّدين (مثل شبكة الكهرباء)',
          },
          {
            de: 'Regulierung durch das Bundeskartellamt zum Schutz der Verbraucher',
            ar: 'التنظيم من قبل مكتب مكافحة الاحتكار لحماية المستهلكين',
          },
        ],
        examples: [
          {
            de: 'Die Deutsche Bahn hat im Fernverkehr auf der Schiene eine monopolartige Stellung. Im IT-Bereich hatte Microsoft lange ein Quasi-Monopol bei Desktop-Betriebssystemen.',
            ar: 'تتمتع السكك الحديدية الألمانية بوضع شبيه بالاحتكار في النقل بعيد المدى على السكك. في مجال تكنولوجيا المعلومات كان لمايكروسوفت لفترة طويلة شبه احتكار في أنظمة تشغيل أجهزة الكمبيوتر المكتبية.',
          },
        ],
        examRelevance: {
          de: 'Monopole werden oft im Zusammenhang mit Marktformen und Kartellrecht geprüft. Beispiele und Regulierungsmaßnahmen sind wichtig.',
          ar: 'يتم فحص الاحتكار غالباً فيما يتعلق بأشكال السوق وقانون مكافحة الاحتكار. الأمثلة وإجراءات التنظيم مهمة.',
        },
        summary: {
          de: 'Im Monopol gibt es nur einen Anbieter mit Preissetzungsmacht. Monopole werden durch das Kartellrecht reguliert, da sie den Wettbewerb einschränken.',
          ar: 'في الاحتكار يوجد مورّد واحد فقط بقوة تحديد الأسعار. يتم تنظيم الاحتكارات بقانون مكافحة الاحتكار لأنها تقيد المنافسة.',
        },
      },
    },
    {
      id: 'oligopol',
      name: { de: 'Oligopol', ar: 'احتكار القلة' },
      content: {
        definition: {
          de: 'Ein Oligopol ist eine Marktform, bei der wenige große Anbieter den Markt dominieren. Jeder Anbieter muss die Reaktionen seiner Konkurrenten bei Preis- und Strategieentscheidungen berücksichtigen. Es besteht die Gefahr stillschweigender Preisabsprachen. Typisch sind hohe Markteintrittsbarrieren.',
          ar: 'احتكار القلة هو شكل سوقي يهيمن فيه عدد قليل من المورّدين الكبار على السوق. يجب على كل مورّد مراعاة ردود فعل منافسيه في قرارات الأسعار والاستراتيجيات. هناك خطر الاتفاقات الضمنية على الأسعار. يتميز بحواجز دخول عالية.',
        },
        keyPoints: [
          {
            de: 'Wenige große Anbieter, die sich gegenseitig beobachten und beeinflussen',
            ar: 'عدد قليل من المورّدين الكبار يراقبون ويؤثرون على بعضهم البعض',
          },
          {
            de: 'Typisches Verhalten: Preisführerschaft (ein Anbieter setzt den Preis, andere folgen) oder Preiskrieg',
            ar: 'سلوك نموذجي: قيادة الأسعار (مورّد واحد يحدد السعر والآخرون يتبعون) أو حرب أسعار',
          },
          {
            de: 'Kartellgefahr: Geheime Preisabsprachen zwischen Oligopolisten sind illegal',
            ar: 'خطر الكارتل: الاتفاقات السرية على الأسعار بين المحتكرين قليلي العدد غير قانونية',
          },
        ],
        examples: [
          {
            de: 'Cloud-Anbieter: AWS, Microsoft Azure und Google Cloud dominieren den Markt. Mobilfunk: Telekom, Vodafone und Telefónica/o2. Tankstellen: Shell, Aral, Total.',
            ar: 'مزودو السحابة: AWS وMicrosoft Azure وGoogle Cloud يهيمنون على السوق. الهاتف المحمول: Telekom وVodafone وTelefónica/o2. محطات الوقود: Shell وAral وTotal.',
          },
        ],
        examRelevance: {
          de: 'Das Oligopol ist für die IT-Branche besonders relevant. Prüfungsfragen betreffen die Merkmale und Beispiele aus dem IT-Bereich.',
          ar: 'احتكار القلة ذو صلة خاصة بقطاع تكنولوجيا المعلومات. أسئلة الامتحان تتعلق بالخصائص والأمثلة من مجال تكنولوجيا المعلومات.',
        },
        summary: {
          de: 'Im Oligopol dominieren wenige Anbieter den Markt. Sie beobachten sich gegenseitig, und es besteht die Gefahr von Preisabsprachen.',
          ar: 'في احتكار القلة يهيمن عدد قليل من المورّدين على السوق. يراقبون بعضهم البعض وهناك خطر اتفاقات الأسعار.',
        },
      },
    },
    {
      id: 'polypol',
      name: { de: 'Polypol', ar: 'المنافسة الكاملة' },
      content: {
        definition: {
          de: 'Das Polypol ist eine Marktform mit vielen Anbietern und vielen Nachfragern. Kein einzelner Marktteilnehmer kann den Preis beeinflussen (Preisnehmer). Der Preis wird allein durch Angebot und Nachfrage bestimmt. Es herrscht intensiver Wettbewerb mit niedrigen Markteintrittsbarrieren.',
          ar: 'المنافسة الكاملة هي شكل سوقي بمورّدين كثيرين وطالبين كثيرين. لا يمكن لأي مشارك فردي في السوق التأثير على السعر (متلقي السعر). يتحدد السعر فقط من خلال العرض والطلب. تسود منافسة مكثفة مع حواجز دخول منخفضة.',
        },
        keyPoints: [
          {
            de: 'Viele kleine Anbieter und Nachfrager, keiner hat Marktmacht',
            ar: 'مورّدون وطالبون صغار كثيرون، لا أحد لديه قوة سوقية',
          },
          {
            de: 'Transparenter Markt mit leichtem Markteintritt und -austritt',
            ar: 'سوق شفاف مع سهولة الدخول والخروج',
          },
          {
            de: 'Annähernd vollkommener Wettbewerb, aber in der Realität selten in reiner Form',
            ar: 'منافسة شبه كاملة، لكنها نادرة في الواقع بشكلها النقي',
          },
        ],
        examples: [
          {
            de: 'Freiberufliche Webentwickler auf Freelancer-Plattformen: Viele Anbieter und viele Auftraggeber, der Preis bildet sich durch den Wettbewerb.',
            ar: 'مطورو الويب المستقلون على منصات العمل الحر: مورّدون كثيرون وعملاء كثيرون، يتشكل السعر من خلال المنافسة.',
          },
        ],
        examRelevance: {
          de: 'Das Polypol wird als Idealform des Wettbewerbs geprüft und im Vergleich zu Monopol und Oligopol abgefragt.',
          ar: 'يتم فحص المنافسة الكاملة كشكل مثالي للمنافسة ويُسأل عنها بالمقارنة مع الاحتكار واحتكار القلة.',
        },
        summary: {
          de: 'Im Polypol gibt es viele Anbieter und Nachfrager ohne Marktmacht. Der Preis bildet sich frei durch Angebot und Nachfrage.',
          ar: 'في المنافسة الكاملة يوجد مورّدون وطالبون كثيرون بدون قوة سوقية. يتشكل السعر بحرية من خلال العرض والطلب.',
        },
      },
    },
  ],
};
