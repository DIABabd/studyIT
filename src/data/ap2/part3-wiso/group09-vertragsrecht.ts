import type { TopicGroup } from '../../../types';

export const vertragsrecht: TopicGroup = {
  id: 'group09-vertragsrecht',
  name: {
    de: 'Vertragsrecht',
    ar: 'قانون العقود',
  },
  description: {
    de: 'Grundlagen des Vertragsrechts: Kaufvertrag, Vertragsabschluss, Sachmängel, Gewährleistung und Widerrufsrecht',
    ar: 'أساسيات قانون العقود: عقد الشراء، إبرام العقد، العيوب المادية، الضمان وحق الانسحاب',
  },
  priority: 'very-high',
  topics: [
    {
      id: 'kaufvertrag',
      name: { de: 'Kaufvertrag', ar: 'عقد الشراء' },
      content: {
        definition: {
          de: 'Ein Kaufvertrag ist ein gegenseitiger Vertrag, durch den sich der Verkäufer zur Übergabe und Eigentumsverschaffung einer Sache verpflichtet und der Käufer zur Zahlung des Kaufpreises (§ 433 BGB). Er kommt durch zwei übereinstimmende Willenserklärungen zustande: Angebot und Annahme.',
          ar: 'عقد الشراء هو عقد متبادل يلتزم فيه البائع بتسليم ونقل ملكية شيء ويلتزم المشتري بدفع ثمن الشراء (§ 433 BGB). يتم من خلال إعلاني إرادة متطابقين: العرض والقبول.',
        },
        keyPoints: [
          {
            de: 'Pflichten des Verkäufers: Übergabe der Sache, Verschaffung des Eigentums, mangelfreie Lieferung',
            ar: 'واجبات البائع: تسليم الشيء، نقل الملكية، التسليم خالياً من العيوب',
          },
          {
            de: 'Pflichten des Käufers: Zahlung des Kaufpreises, Abnahme der Sache',
            ar: 'واجبات المشتري: دفع ثمن الشراء، استلام الشيء',
          },
          {
            de: 'Formfreiheit: Kaufverträge können grundsätzlich formfrei geschlossen werden (Ausnahme: Immobilien → notarielle Beurkundung)',
            ar: 'حرية الشكل: يمكن إبرام عقود الشراء من حيث المبدأ بدون شكل محدد (استثناء: العقارات → توثيق كاتب العدل)',
          },
        ],
        examples: [
          {
            de: 'Ein Unternehmen bestellt 50 Laptops bei einem Händler. Der Kaufvertrag kommt zustande, wenn der Händler die Bestellung bestätigt (Annahme des Angebots).',
            ar: 'تطلب شركة 50 حاسوباً محمولاً من تاجر. يتم عقد الشراء عندما يؤكد التاجر الطلب (قبول العرض).',
          },
        ],
        examRelevance: {
          de: 'Der Kaufvertrag ist ein Kernthema. Pflichten von Käufer und Verkäufer sowie die Voraussetzungen für das Zustandekommen sind häufige Prüfungsinhalte.',
          ar: 'عقد الشراء هو موضوع أساسي. واجبات المشتري والبائع وكذلك شروط الإبرام هي محتويات امتحانية متكررة.',
        },
        summary: {
          de: 'Der Kaufvertrag entsteht durch Angebot und Annahme. Der Verkäufer muss die Sache übergeben, der Käufer den Preis zahlen.',
          ar: 'ينشأ عقد الشراء من خلال العرض والقبول. يجب على البائع تسليم الشيء وعلى المشتري دفع الثمن.',
        },
      },
    },
    {
      id: 'angebot',
      name: { de: 'Angebot', ar: 'العرض' },
      content: {
        definition: {
          de: 'Ein Angebot (Antrag) ist eine empfangsbedürftige Willenserklärung, durch die der Anbietende dem Empfänger einen Vertragsabschluss so bestimmt vorschlägt, dass dieser nur noch zustimmen muss. Es muss die wesentlichen Vertragsbestandteile enthalten (Vertragsgegenstand, Preis, Menge). Das Angebot ist bindend, sobald es dem Empfänger zugeht.',
          ar: 'العرض (الطلب) هو إعلان إرادة يحتاج إلى استلام يقترح فيه العارض على المتلقي إبرام عقد بشكل محدد بحيث يحتاج الأخير فقط للموافقة. يجب أن يحتوي على عناصر العقد الأساسية (موضوع العقد، السعر، الكمية). يصبح العرض ملزماً بمجرد وصوله إلى المتلقي.',
        },
        keyPoints: [
          {
            de: 'Bindung: Der Anbietende ist an sein Angebot gebunden, sofern er die Bindung nicht ausgeschlossen hat (z.B. „freibleibend")',
            ar: 'الالتزام: يكون العارض ملزماً بعرضه ما لم يستبعد الالتزام (مثل "غير ملزم")',
          },
          {
            de: 'Abgrenzung zur invitatio ad offerendum: Schaufensterauslagen, Kataloge und Werbung sind keine verbindlichen Angebote, sondern Aufforderungen zur Abgabe eines Angebots',
            ar: 'التمييز عن الدعوة لتقديم عرض: عروض الواجهات والكتالوجات والإعلانات ليست عروضاً ملزمة بل دعوات لتقديم عرض',
          },
          {
            de: 'Erlöschen: Durch Ablauf der gesetzten Frist, Ablehnung oder verspätete Annahme',
            ar: 'الانتهاء: بانتهاء المهلة المحددة أو الرفض أو القبول المتأخر',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Systemhaus erstellt ein schriftliches Angebot über die Einrichtung eines Netzwerks für 15.000 €, gültig bis zum 31.03. Der Kunde muss nur noch annehmen.',
            ar: 'تُعد شركة أنظمة تكنولوجيا معلومات عرضاً مكتوباً لإعداد شبكة بقيمة 15,000 يورو، صالحاً حتى 31.03. يحتاج العميل فقط للقبول.',
          },
        ],
        examRelevance: {
          de: 'Die Abgrenzung zwischen Angebot und invitatio ad offerendum sowie die Bindungswirkung sind häufige Prüfungsthemen.',
          ar: 'التمييز بين العرض والدعوة لتقديم عرض وكذلك أثر الالتزام هي مواضيع امتحانية متكررة.',
        },
        summary: {
          de: 'Ein Angebot ist eine verbindliche Willenserklärung mit allen wesentlichen Vertragsbestandteilen. Werbung ist kein Angebot.',
          ar: 'العرض هو إعلان إرادة ملزم بجميع عناصر العقد الأساسية. الإعلان ليس عرضاً.',
        },
      },
    },
    {
      id: 'annahme',
      name: { de: 'Annahme', ar: 'القبول' },
      content: {
        definition: {
          de: 'Die Annahme ist die Zustimmung zum Angebot, durch die der Vertrag zustande kommt. Sie muss inhaltlich mit dem Angebot übereinstimmen. Eine Annahme mit Änderungen gilt als neues Angebot (§ 150 Abs. 2 BGB). Die Annahme muss rechtzeitig erfolgen, also innerhalb der im Angebot gesetzten oder einer angemessenen Frist.',
          ar: 'القبول هو الموافقة على العرض التي من خلالها يتم العقد. يجب أن يتطابق محتواه مع العرض. القبول مع تعديلات يعتبر عرضاً جديداً (§ 150 فقرة 2 BGB). يجب أن يتم القبول في الوقت المناسب، أي خلال المهلة المحددة في العرض أو مهلة معقولة.',
        },
        keyPoints: [
          {
            de: 'Inhaltliche Übereinstimmung: Die Annahme muss dem Angebot entsprechen, ohne Änderungen',
            ar: 'التطابق في المحتوى: يجب أن يتوافق القبول مع العرض بدون تعديلات',
          },
          {
            de: 'Abgeänderte Annahme = neues Angebot (Gegenangebot)',
            ar: 'القبول المعدل = عرض جديد (عرض مقابل)',
          },
          {
            de: 'Schweigen gilt grundsätzlich nicht als Annahme (Ausnahme: kaufmännisches Bestätigungsschreiben)',
            ar: 'الصمت لا يعتبر من حيث المبدأ قبولاً (استثناء: خطاب التأكيد التجاري)',
          },
        ],
        examples: [
          {
            de: 'Ein Kunde erhält ein Angebot über 50 Lizenzen à 200 €. Er bestätigt die Bestellung per E-Mail → Annahme, Vertrag kommt zustande. Sagt er aber „nur 100 € pro Lizenz", ist das ein Gegenangebot.',
            ar: 'يحصل عميل على عرض لـ 50 ترخيصاً بسعر 200 يورو لكل منها. يؤكد الطلب عبر البريد الإلكتروني → قبول، يتم العقد. لكن إذا قال "100 يورو فقط لكل ترخيص" فهذا عرض مقابل.',
          },
        ],
        examRelevance: {
          de: 'Das Zustandekommen von Verträgen durch Angebot und Annahme sowie das Konzept des Gegenangebots sind zentrale Prüfungsinhalte.',
          ar: 'إبرام العقود من خلال العرض والقبول ومفهوم العرض المقابل هي محتويات امتحانية محورية.',
        },
        summary: {
          de: 'Durch die Annahme kommt der Vertrag zustande. Sie muss inhaltlich dem Angebot entsprechen; Änderungen gelten als neues Angebot.',
          ar: 'من خلال القبول يتم العقد. يجب أن يتوافق مع العرض؛ التعديلات تعتبر عرضاً جديداً.',
        },
      },
    },
    {
      id: 'vertragsabschluss',
      name: { de: 'Vertragsabschluss', ar: 'إبرام العقد' },
      content: {
        definition: {
          de: 'Ein Vertrag kommt durch zwei übereinstimmende Willenserklärungen zustande: Angebot und Annahme. Beide Parteien müssen geschäftsfähig sein. Der Vertragsabschluss kann mündlich, schriftlich oder durch schlüssiges Handeln (konkludent) erfolgen. Für bestimmte Verträge gelten Formvorschriften (z.B. Schriftform bei Arbeitsverträgen, notarielle Beurkundung bei Immobilienkauf).',
          ar: 'يتم العقد من خلال إعلاني إرادة متطابقين: العرض والقبول. يجب أن يكون كلا الطرفين أهلاً للتعامل. يمكن أن يتم إبرام العقد شفهياً أو كتابياً أو من خلال تصرف ضمني (دلالي). لبعض العقود متطلبات شكلية (مثل الشكل الكتابي لعقود العمل، توثيق كاتب العدل لشراء العقارات).',
        },
        keyPoints: [
          {
            de: 'Voraussetzungen: Geschäftsfähigkeit beider Parteien, übereinstimmende Willenserklärungen, kein Verstoß gegen gesetzliche Verbote',
            ar: 'الشروط: أهلية التعامل لكلا الطرفين، إعلانات إرادة متطابقة، عدم مخالفة المحظورات القانونية',
          },
          {
            de: 'Geschäftsfähigkeit: Voll geschäftsfähig ab 18 Jahren; beschränkt geschäftsfähig von 7-17 Jahren (Zustimmung der Eltern nötig, Taschengeldparagraph § 110 BGB)',
            ar: 'أهلية التعامل: أهلية كاملة من 18 سنة؛ أهلية محدودة من 7-17 سنة (موافقة الوالدين مطلوبة، فقرة مصروف الجيب § 110 BGB)',
          },
          {
            de: 'Anfechtung: Ein Vertrag kann bei Irrtum, arglistiger Täuschung oder Drohung angefochten werden',
            ar: 'الطعن: يمكن الطعن في العقد عند الخطأ أو التغرير الاحتيالي أو التهديد',
          },
        ],
        examples: [
          {
            de: 'Ein 16-jähriger Auszubildender kauft mit seinem Ausbildungsgehalt ein Smartphone für 300 €. Der Kauf ist nach dem Taschengeldparagraphen wirksam, da er mit eigenen Mitteln bezahlt.',
            ar: 'يشتري متدرب يبلغ 16 عاماً بدخل تدريبه هاتفاً ذكياً بـ 300 يورو. الشراء صالح وفقاً لفقرة مصروف الجيب لأنه دفع بأمواله الخاصة.',
          },
        ],
        examRelevance: {
          de: 'Geschäftsfähigkeit, der Taschengeldparagraph und die Voraussetzungen des Vertragsabschlusses sind häufige Prüfungsthemen.',
          ar: 'أهلية التعامل وفقرة مصروف الجيب وشروط إبرام العقد هي مواضيع امتحانية متكررة.',
        },
        summary: {
          de: 'Ein Vertrag entsteht durch Angebot und Annahme bei Geschäftsfähigkeit beider Parteien. Minderjährige sind beschränkt geschäftsfähig.',
          ar: 'ينشأ العقد من خلال العرض والقبول مع أهلية تعامل كلا الطرفين. القُصّر لديهم أهلية تعامل محدودة.',
        },
      },
    },
    {
      id: 'sachmangel',
      name: { de: 'Sachmangel', ar: 'العيب المادي' },
      content: {
        definition: {
          de: 'Ein Sachmangel liegt vor, wenn die gekaufte Sache bei Übergabe nicht die vereinbarte Beschaffenheit hat (§ 434 BGB). Dies umfasst Abweichungen von der vereinbarten Qualität, Eignung für die gewöhnliche oder vorausgesetzte Verwendung und die Montage-/Installationsanleitung. Seit 2022 gelten verschärfte Regeln (Warenkaufrichtlinie).',
          ar: 'يوجد عيب مادي عندما لا يكون الشيء المشترى عند التسليم بالوصف المتفق عليه (§ 434 BGB). يشمل ذلك الانحرافات عن الجودة المتفق عليها والملاءمة للاستخدام العادي أو المفترض وتعليمات التركيب/التثبيت. منذ 2022 تسري قواعد أكثر صرامة (توجيه شراء البضائع).',
        },
        keyPoints: [
          {
            de: 'Sachmangel: Ist-Beschaffenheit weicht von Soll-Beschaffenheit ab',
            ar: 'العيب المادي: الوصف الفعلي يختلف عن الوصف المتوقع',
          },
          {
            de: 'Beweislastumkehr: Im ersten Jahr nach Kauf wird vermutet, dass der Mangel bei Übergabe vorlag (bei Verbrauchsgüterkauf)',
            ar: 'عكس عبء الإثبات: في السنة الأولى بعد الشراء يُفترض أن العيب كان موجوداً عند التسليم (في شراء السلع الاستهلاكية)',
          },
          {
            de: 'Rechte des Käufers bei Sachmangel: Nacherfüllung (Reparatur oder Ersatzlieferung), Minderung, Rücktritt, Schadensersatz',
            ar: 'حقوق المشتري عند العيب المادي: التنفيذ اللاحق (الإصلاح أو التسليم البديل)، التخفيض، الانسحاب، التعويض',
          },
        ],
        examples: [
          {
            de: 'Ein Unternehmen kauft einen Server, der bei Lieferung einen defekten RAID-Controller hat. Dies ist ein Sachmangel – der Server entspricht nicht der vereinbarten Beschaffenheit.',
            ar: 'تشتري شركة خادماً عند تسليمه يحتوي على وحدة تحكم RAID معطلة. هذا عيب مادي – الخادم لا يتوافق مع الوصف المتفق عليه.',
          },
        ],
        examRelevance: {
          de: 'Sachmängel und die Rechte des Käufers bei Mängeln sind ein zentrales Prüfungsthema im Vertragsrecht.',
          ar: 'العيوب المادية وحقوق المشتري عند وجود عيوب هي موضوع امتحاني محوري في قانون العقود.',
        },
        summary: {
          de: 'Ein Sachmangel liegt vor, wenn die Ware nicht der vereinbarten Beschaffenheit entspricht. Der Käufer hat Rechte auf Nacherfüllung, Minderung, Rücktritt oder Schadensersatz.',
          ar: 'يوجد عيب مادي عندما لا تتوافق البضاعة مع الوصف المتفق عليه. للمشتري حقوق في التنفيذ اللاحق والتخفيض والانسحاب أو التعويض.',
        },
      },
    },
    {
      id: 'gewaehrleistung',
      name: { de: 'Gewährleistung', ar: 'الضمان القانوني' },
      content: {
        definition: {
          de: 'Die Gewährleistung (gesetzliche Mängelhaftung) ist die gesetzliche Pflicht des Verkäufers, für Mängel einzustehen, die bei Übergabe der Ware bestanden haben. Die Gewährleistungsfrist beträgt 2 Jahre ab Übergabe bei neuen Waren und 1 Jahr bei gebrauchten Waren. Sie ist nicht mit der freiwilligen Garantie des Herstellers zu verwechseln.',
          ar: 'الضمان القانوني (المسؤولية القانونية عن العيوب) هو الالتزام القانوني للبائع بالتحمل للعيوب التي كانت موجودة عند تسليم البضاعة. مدة الضمان سنتان من التسليم للبضائع الجديدة وسنة واحدة للبضائع المستعملة. لا يجب الخلط بينه وبين الكفالة الطوعية من الشركة المصنعة.',
        },
        keyPoints: [
          {
            de: 'Frist: 2 Jahre bei neuen Waren, 1 Jahr bei gebrauchten Waren (bei B2C)',
            ar: 'المهلة: سنتان للبضائع الجديدة، سنة واحدة للبضائع المستعملة (في B2C)',
          },
          {
            de: 'Stufenfolge der Rechte: 1. Nacherfüllung (Reparatur/Ersatz), 2. Bei Scheitern: Minderung oder Rücktritt + ggf. Schadensersatz',
            ar: 'تسلسل الحقوق: 1. التنفيذ اللاحق (الإصلاح/الاستبدال)، 2. عند الفشل: التخفيض أو الانسحاب + تعويض إن أمكن',
          },
          {
            de: 'Gewährleistung ist gesetzlich vorgeschrieben und kann gegenüber Verbrauchern nicht ausgeschlossen werden',
            ar: 'الضمان القانوني مفروض قانونياً ولا يمكن استبعاده تجاه المستهلكين',
          },
        ],
        examples: [
          {
            de: 'Ein Laptop zeigt nach 8 Monaten einen Displayfehler. Der Käufer hat Anspruch auf Nacherfüllung (Reparatur oder neues Gerät) im Rahmen der 2-jährigen Gewährleistung.',
            ar: 'يظهر حاسوب محمول عطلاً في الشاشة بعد 8 أشهر. للمشتري حق في التنفيذ اللاحق (الإصلاح أو جهاز جديد) في إطار الضمان لمدة سنتين.',
          },
        ],
        examRelevance: {
          de: 'Die Unterscheidung zwischen Gewährleistung (gesetzlich) und Garantie (freiwillig) sowie die Fristen und Rechte sind häufige Prüfungsthemen.',
          ar: 'التمييز بين الضمان القانوني (قانوني) والكفالة (طوعية) وكذلك المهل والحقوق هي مواضيع امتحانية متكررة.',
        },
        summary: {
          de: 'Die Gewährleistung ist die gesetzliche Mängelhaftung des Verkäufers (2 Jahre). Sie umfasst Nacherfüllung, Minderung, Rücktritt und Schadensersatz.',
          ar: 'الضمان القانوني هو المسؤولية القانونية للبائع عن العيوب (سنتان). يشمل التنفيذ اللاحق والتخفيض والانسحاب والتعويض.',
        },
      },
    },
    {
      id: 'garantie',
      name: { de: 'Garantie', ar: 'الكفالة' },
      content: {
        definition: {
          de: 'Die Garantie ist eine freiwillige Zusicherung des Herstellers oder Verkäufers, die über die gesetzliche Gewährleistung hinausgeht. Sie ist nicht gesetzlich vorgeschrieben und kann individuell gestaltet werden (Dauer, Umfang, Bedingungen). Die Garantie ergänzt die Gewährleistung, ersetzt sie aber nicht.',
          ar: 'الكفالة هي تعهد طوعي من الشركة المصنعة أو البائع يتجاوز الضمان القانوني. ليست مفروضة قانونياً ويمكن تصميمها بشكل فردي (المدة، النطاق، الشروط). تُكمل الكفالة الضمان القانوني لكن لا تحل محله.',
        },
        keyPoints: [
          {
            de: 'Freiwillige Leistung: Kein gesetzlicher Anspruch auf Garantie',
            ar: 'خدمة طوعية: لا يوجد حق قانوني في الكفالة',
          },
          {
            de: 'Garantie und Gewährleistung bestehen nebeneinander; die Garantie darf die Gewährleistung nicht einschränken',
            ar: 'الكفالة والضمان القانوني يتواجدان جنباً إلى جنب؛ لا يجوز للكفالة تقييد الضمان القانوني',
          },
          {
            de: 'Typische Garantiearten: Haltbarkeitsgarantie, Beschaffenheitsgarantie, Zufriedenheitsgarantie',
            ar: 'أنواع الكفالة النموذجية: كفالة المتانة، كفالة الوصف، كفالة الرضا',
          },
        ],
        examples: [
          {
            de: 'Ein Laptop-Hersteller bietet 3 Jahre Garantie auf seine Geräte. Selbst nach Ablauf der 2-jährigen Gewährleistung kann der Kunde im dritten Jahr die Garantie nutzen.',
            ar: 'تقدم شركة مصنعة لأجهزة الحاسوب المحمول 3 سنوات كفالة على أجهزتها. حتى بعد انتهاء الضمان القانوني لمدة سنتين يمكن للعميل استخدام الكفالة في السنة الثالثة.',
          },
        ],
        examRelevance: {
          de: 'Die Unterscheidung Gewährleistung vs. Garantie ist ein Klassiker in der IHK-Prüfung.',
          ar: 'التمييز بين الضمان القانوني والكفالة هو كلاسيكي في امتحان IHK.',
        },
        summary: {
          de: 'Die Garantie ist eine freiwillige Zusicherung, die neben der gesetzlichen Gewährleistung besteht und diese nicht ersetzen darf.',
          ar: 'الكفالة هي تعهد طوعي يوجد بجانب الضمان القانوني ولا يجوز أن يحل محله.',
        },
      },
    },
    {
      id: 'widerrufsrecht',
      name: { de: 'Widerrufsrecht', ar: 'حق الانسحاب' },
      content: {
        definition: {
          de: 'Das Widerrufsrecht gibt Verbrauchern das Recht, bei Fernabsatzverträgen (Online-Kauf, Telefon) oder Haustürgeschäften den Vertrag innerhalb von 14 Tagen ohne Angabe von Gründen zu widerrufen (§ 355 BGB). Der Händler muss den Kaufpreis erstatten und der Verbraucher die Ware zurücksenden.',
          ar: 'يمنح حق الانسحاب المستهلكين الحق في الانسحاب من عقود البيع عن بُعد (الشراء عبر الإنترنت، الهاتف) أو معاملات الباب في غضون 14 يوماً بدون ذكر أسباب (§ 355 BGB). يجب على التاجر إرجاع ثمن الشراء ويجب على المستهلك إعادة البضاعة.',
        },
        keyPoints: [
          {
            de: 'Frist: 14 Tage ab Erhalt der Ware (bei Warenlieferung) bzw. ab Vertragsschluss (bei Dienstleistungen)',
            ar: 'المهلة: 14 يوماً من استلام البضاعة (عند تسليم البضائع) أو من إبرام العقد (عند الخدمات)',
          },
          {
            de: 'Gilt nur für Verbraucher (B2C), nicht für Geschäftskunden (B2B)',
            ar: 'يسري فقط على المستهلكين (B2C)، وليس على عملاء الأعمال (B2B)',
          },
          {
            de: 'Ausnahmen: Individuell angefertigte Waren, versiegelte Software nach Öffnung, schnell verderbliche Waren',
            ar: 'استثناءات: البضائع المصنوعة بشكل فردي، البرمجيات المختومة بعد الفتح، البضائع سريعة التلف',
          },
        ],
        examples: [
          {
            de: 'Ein Privatkunde kauft online einen Monitor für 500 €. Er kann innerhalb von 14 Tagen den Kauf widerrufen und den Monitor zurückschicken. Der Shop muss den Kaufpreis erstatten.',
            ar: 'يشتري عميل خاص شاشة عبر الإنترنت بسعر 500 يورو. يمكنه خلال 14 يوماً الانسحاب من الشراء وإعادة الشاشة. يجب على المتجر إعادة ثمن الشراء.',
          },
        ],
        examRelevance: {
          de: 'Das Widerrufsrecht bei Fernabsatzverträgen, die Fristen und Ausnahmen sind häufige Prüfungsinhalte.',
          ar: 'حق الانسحاب في عقود البيع عن بُعد والمهل والاستثناءات هي محتويات امتحانية متكررة.',
        },
        summary: {
          de: 'Bei Fernabsatzverträgen haben Verbraucher 14 Tage Widerrufsrecht. Es gibt Ausnahmen wie Individualsoftware oder entsiegelte Produkte.',
          ar: 'في عقود البيع عن بُعد للمستهلكين 14 يوماً حق انسحاب. هناك استثناءات مثل البرمجيات الفردية أو المنتجات المفتوحة.',
        },
      },
    },
  ],
};
