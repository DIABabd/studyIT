import type { TopicGroup } from '../../../types';

export const personalwesen: TopicGroup = {
  id: 'group10-personalwesen',
  name: {
    de: 'Personalwesen',
    ar: 'شؤون الموظفين',
  },
  description: {
    de: 'Personalwirtschaft: Bewerbung, Arbeitszeugnisse, Fortbildung und Weiterbildung',
    ar: 'إدارة الموارد البشرية: التقديم، شهادات العمل، التدريب المتقدم والتعليم المستمر',
  },
  priority: 'medium',
  topics: [
    {
      id: 'bewerbung',
      name: { de: 'Bewerbung', ar: 'التقديم للوظيفة' },
      content: {
        definition: {
          de: 'Die Bewerbung ist der formale Prozess, mit dem sich eine Person um eine Arbeitsstelle bewirbt. Eine vollständige Bewerbung besteht aus Anschreiben, Lebenslauf und Zeugnissen/Zertifikaten. Im IT-Bereich werden zunehmend auch Portfolio, GitHub-Profile oder Arbeitsproben erwartet. Das Allgemeine Gleichbehandlungsgesetz (AGG) schützt vor Diskriminierung im Bewerbungsprozess.',
          ar: 'التقديم هو العملية الرسمية التي يتقدم بها شخص لوظيفة. يتكون التقديم الكامل من خطاب التغطية والسيرة الذاتية والشهادات/الشهادات المهنية. في مجال تكنولوجيا المعلومات يُتوقع بشكل متزايد أيضاً ملف الأعمال وملفات GitHub أو نماذج العمل. يحمي قانون المعاملة المتساوية العامة (AGG) من التمييز في عملية التقديم.',
        },
        keyPoints: [
          {
            de: 'Bestandteile: Anschreiben (Motivation, Qualifikation), Lebenslauf (tabellarisch), Zeugnisse und Zertifikate',
            ar: 'المكونات: خطاب التغطية (الدافع، المؤهلات)، السيرة الذاتية (جدولية)، الشهادات والشهادات المهنية',
          },
          {
            de: 'AGG: Verbietet Diskriminierung aufgrund von Geschlecht, Alter, Herkunft, Religion, Behinderung oder sexueller Identität',
            ar: 'AGG: يحظر التمييز على أساس الجنس أو العمر أو الأصل أو الدين أو الإعاقة أو الهوية الجنسية',
          },
          {
            de: 'Datenschutz: Bewerberdaten unterliegen dem Datenschutz und dürfen nur für das Bewerbungsverfahren verwendet werden',
            ar: 'حماية البيانات: بيانات المتقدمين تخضع لحماية البيانات ولا يجوز استخدامها إلا لإجراءات التقديم',
          },
        ],
        examples: [
          {
            de: 'Ein Fachinformatiker bewirbt sich mit Anschreiben, Lebenslauf, IHK-Prüfungszeugnis und einem Link zu seinem GitHub-Portfolio bei einem Softwareunternehmen.',
            ar: 'يتقدم فني معلومات بخطاب تغطية وسيرة ذاتية وشهادة امتحان IHK ورابط لملف أعماله على GitHub لشركة برمجيات.',
          },
        ],
        examRelevance: {
          de: 'Bewerbungsbestandteile und das AGG werden in der Prüfung regelmäßig abgefragt.',
          ar: 'مكونات التقديم وقانون المعاملة المتساوية يتم السؤال عنهما بانتظام في الامتحان.',
        },
        summary: {
          de: 'Eine Bewerbung besteht aus Anschreiben, Lebenslauf und Zeugnissen. Das AGG schützt vor Diskriminierung im Bewerbungsprozess.',
          ar: 'يتكون التقديم من خطاب تغطية وسيرة ذاتية وشهادات. يحمي AGG من التمييز في عملية التقديم.',
        },
      },
    },
    {
      id: 'arbeitszeugnis',
      name: { de: 'Arbeitszeugnis', ar: 'شهادة العمل' },
      content: {
        definition: {
          de: 'Das Arbeitszeugnis ist ein vom Arbeitgeber ausgestelltes Dokument, das die Dauer und Art der Tätigkeit eines Arbeitnehmers beschreibt. Jeder Arbeitnehmer hat bei Beendigung des Arbeitsverhältnisses Anspruch auf ein schriftliches Zeugnis (§ 109 GewO). Man unterscheidet zwischen einfachem Zeugnis (nur Dauer und Art) und qualifiziertem Zeugnis (zusätzlich Leistung und Verhalten).',
          ar: 'شهادة العمل هي وثيقة صادرة عن صاحب العمل تصف مدة ونوع عمل الموظف. لكل موظف الحق في شهادة مكتوبة عند انتهاء علاقة العمل (§ 109 GewO). يُميز بين الشهادة البسيطة (المدة والنوع فقط) والشهادة المؤهلة (بالإضافة إلى الأداء والسلوك).',
        },
        keyPoints: [
          {
            de: 'Einfaches Zeugnis: Enthält nur Art und Dauer der Beschäftigung',
            ar: 'الشهادة البسيطة: تحتوي فقط على نوع ومدة التوظيف',
          },
          {
            de: 'Qualifiziertes Zeugnis: Enthält zusätzlich Bewertung der Leistung, des Verhaltens und der Fachkenntnisse',
            ar: 'الشهادة المؤهلة: تحتوي بالإضافة إلى ذلك على تقييم الأداء والسلوك والمعرفة المهنية',
          },
          {
            de: 'Das Zeugnis muss wohlwollend und wahrheitsgemäß formuliert sein. Es gibt eine eigene Zeugnissprache mit verschlüsselten Bewertungen',
            ar: 'يجب أن تكون الشهادة مصاغة بشكل حسن النية وصادق. هناك لغة شهادات خاصة بتقييمات مشفرة',
          },
        ],
        examples: [
          {
            de: '„Er erledigte die ihm übertragenen Aufgaben stets zur vollsten Zufriedenheit" = Note 1 (sehr gut). „Er erledigte die ihm übertragenen Aufgaben zu unserer Zufriedenheit" = Note 3 (befriedigend).',
            ar: '"أنجز المهام الموكلة إليه دائماً لأقصى رضانا" = درجة 1 (ممتاز). "أنجز المهام الموكلة إليه لرضانا" = درجة 3 (مقبول).',
          },
        ],
        examRelevance: {
          de: 'Die Zeugnisarten und die Interpretation der Zeugnissprache (Notenskala) sind häufige Prüfungsinhalte.',
          ar: 'أنواع الشهادات وتفسير لغة الشهادات (مقياس الدرجات) هي محتويات امتحانية متكررة.',
        },
        summary: {
          de: 'Jeder Arbeitnehmer hat Anspruch auf ein Arbeitszeugnis. Es kann einfach (Dauer/Art) oder qualifiziert (mit Leistungsbewertung) sein.',
          ar: 'لكل موظف الحق في شهادة عمل. يمكن أن تكون بسيطة (المدة/النوع) أو مؤهلة (مع تقييم الأداء).',
        },
      },
    },
    {
      id: 'qualifiziertes-arbeitszeugnis',
      name: { de: 'Qualifiziertes Arbeitszeugnis', ar: 'شهادة العمل المؤهلة' },
      content: {
        definition: {
          de: 'Das qualifizierte Arbeitszeugnis enthält neben der Art und Dauer der Tätigkeit auch eine Bewertung der Leistung, des Sozialverhaltens und der Fachkenntnisse. Es muss klar, wahr und wohlwollend formuliert sein. Die Zeugnissprache verwendet standardisierte Formulierungen, die einer Notenskala von 1 (sehr gut) bis 6 (ungenügend) entsprechen.',
          ar: 'تحتوي شهادة العمل المؤهلة بالإضافة إلى نوع ومدة العمل أيضاً على تقييم للأداء والسلوك الاجتماعي والمعرفة المهنية. يجب أن تكون مصاغة بوضوح وصدق وحسن نية. تستخدم لغة الشهادات صياغات موحدة تتوافق مع مقياس درجات من 1 (ممتاز) إلى 6 (غير كافٍ).',
        },
        keyPoints: [
          {
            de: 'Aufbau: Überschrift, persönliche Daten, Tätigkeitsbeschreibung, Leistungsbeurteilung, Verhaltensbeurteilung, Schlussformel',
            ar: 'الهيكل: العنوان، البيانات الشخصية، وصف المهام، تقييم الأداء، تقييم السلوك، صيغة الختام',
          },
          {
            de: 'Zufriedenheitsformel: „stets zur vollsten Zufriedenheit" (1), „stets zur vollen Zufriedenheit" (2), „zur vollen Zufriedenheit" (3), „zur Zufriedenheit" (4)',
            ar: 'صيغة الرضا: "دائماً لأقصى رضانا" (1)، "دائماً لكامل رضانا" (2)، "لكامل رضانا" (3)، "لرضانا" (4)',
          },
          {
            de: 'Anspruch: Arbeitnehmer können jederzeit ein qualifiziertes Zeugnis verlangen, nicht nur bei Beendigung',
            ar: 'الحق: يمكن للموظفين طلب شهادة مؤهلة في أي وقت، ليس فقط عند الانتهاء',
          },
        ],
        examples: [
          {
            de: 'Ein qualifiziertes Zeugnis für einen Fachinformatiker enthält: Tätigkeitsbeschreibung (Netzwerkadministration, Softwareentwicklung), Leistungsbewertung und Schlussformel mit Bedauern und Zukunftswünschen.',
            ar: 'شهادة مؤهلة لفني معلومات تحتوي على: وصف المهام (إدارة الشبكات، تطوير البرمجيات)، تقييم الأداء وصيغة ختام مع التعبير عن الأسف والتمنيات المستقبلية.',
          },
        ],
        examRelevance: {
          de: 'Die Interpretation der Zeugnissprache und die Zufriedenheitsformeln sind besonders prüfungsrelevant.',
          ar: 'تفسير لغة الشهادات وصيغ الرضا ذات صلة خاصة بالامتحان.',
        },
        summary: {
          de: 'Das qualifizierte Zeugnis bewertet Leistung und Verhalten. Die Zeugnissprache verwendet verschlüsselte Formulierungen als Notenskala.',
          ar: 'تُقيّم الشهادة المؤهلة الأداء والسلوك. تستخدم لغة الشهادات صياغات مشفرة كمقياس درجات.',
        },
      },
    },
    {
      id: 'fortbildung',
      name: { de: 'Fortbildung', ar: 'التدريب المتقدم' },
      content: {
        definition: {
          de: 'Fortbildung (berufliche Fortbildung nach § 1 BBiG) dient dazu, berufliche Kenntnisse und Fähigkeiten im aktuellen Beruf zu vertiefen, zu erweitern oder an neue Anforderungen anzupassen. Man unterscheidet Anpassungsfortbildung (aktuelle Qualifikation erhalten), Aufstiegsfortbildung (höhere Qualifikation, z.B. Fachwirt, Meister) und Umschulung.',
          ar: 'التدريب المتقدم (التدريب المهني المتقدم وفقاً لـ § 1 BBiG) يهدف إلى تعميق وتوسيع المعرفة والمهارات المهنية في المهنة الحالية أو تكييفها مع المتطلبات الجديدة. يُميز بين تدريب التكيف (الحفاظ على المؤهل الحالي) وتدريب الترقي (مؤهل أعلى، مثل متخصص، ماسنر) وإعادة التأهيل.',
        },
        keyPoints: [
          {
            de: 'Anpassungsfortbildung: Aktuelle Kenntnisse auf dem neuesten Stand halten (z.B. neue Programmiersprache lernen)',
            ar: 'تدريب التكيف: إبقاء المعرفة الحالية محدثة (مثل تعلم لغة برمجة جديدة)',
          },
          {
            de: 'Aufstiegsfortbildung: Höhere Qualifikation erlangen (z.B. IT-Projektleiter IHK, Operative Professional)',
            ar: 'تدريب الترقي: الحصول على مؤهل أعلى (مثل مدير مشروع تكنولوجيا معلومات IHK، محترف تشغيلي)',
          },
          {
            de: 'Aufstiegs-BAföG: Staatliche Förderung für Aufstiegsfortbildungen (z.B. Meisterkurs, Fachwirt)',
            ar: 'BAföG للترقي: دعم حكومي للتدريب المتقدم للترقي (مثل دورة الماسنر، المتخصص)',
          },
        ],
        examples: [
          {
            de: 'Ein Fachinformatiker absolviert eine Fortbildung zum „IT-Projektleiter (IHK)" (Aufstiegsfortbildung), um Führungsaufgaben übernehmen zu können.',
            ar: 'يُكمل فني معلومات تدريباً متقدماً ليصبح "مدير مشروع تكنولوجيا معلومات (IHK)" (تدريب ترقي)، ليتمكن من تولي مهام قيادية.',
          },
        ],
        examRelevance: {
          de: 'Die Unterscheidung zwischen Anpassungs- und Aufstiegsfortbildung sowie die Möglichkeiten der beruflichen Weiterentwicklung sind prüfungsrelevant.',
          ar: 'التمييز بين تدريب التكيف والترقي وكذلك إمكانيات التطور المهني ذات صلة بالامتحان.',
        },
        summary: {
          de: 'Fortbildung vertieft berufliche Kenntnisse im aktuellen Beruf. Sie kann als Anpassungs- oder Aufstiegsfortbildung erfolgen.',
          ar: 'يُعمق التدريب المتقدم المعرفة المهنية في المهنة الحالية. يمكن أن يكون تدريب تكيف أو ترقي.',
        },
      },
    },
    {
      id: 'weiterbildung',
      name: { de: 'Weiterbildung', ar: 'التعليم المستمر' },
      content: {
        definition: {
          de: 'Weiterbildung ist der Oberbegriff für alle Lernprozesse nach der Erstausbildung. Sie umfasst berufliche Fortbildung, Umschulung und allgemeine Weiterbildung. Im IT-Bereich ist lebenslanges Lernen besonders wichtig, da sich Technologien schnell ändern. Arbeitgeber investieren in Weiterbildung, um die Wettbewerbsfähigkeit zu sichern.',
          ar: 'التعليم المستمر هو المصطلح الشامل لجميع عمليات التعلم بعد التعليم الأولي. يشمل التدريب المهني المتقدم وإعادة التأهيل والتعليم العام المستمر. في مجال تكنولوجيا المعلومات يعد التعلم مدى الحياة مهماً بشكل خاص لأن التقنيات تتغير بسرعة. يستثمر أصحاب العمل في التعليم المستمر لضمان القدرة التنافسية.',
        },
        keyPoints: [
          {
            de: 'Berufliche Weiterbildung: Fortbildungen, Zertifizierungen (z.B. AWS, Microsoft, Cisco), Seminare',
            ar: 'التعليم المهني المستمر: التدريبات المتقدمة، الشهادات (مثل AWS، Microsoft، Cisco)، الندوات',
          },
          {
            de: 'Bildungsurlaub: In vielen Bundesländern haben Arbeitnehmer Anspruch auf 5 Tage bezahlten Bildungsurlaub pro Jahr',
            ar: 'إجازة التعليم: في كثير من الولايات الاتحادية يحق للموظفين 5 أيام إجازة تعليم مدفوعة سنوياً',
          },
          {
            de: 'Lebenslanges Lernen: Konzept der kontinuierlichen beruflichen und persönlichen Weiterentwicklung',
            ar: 'التعلم مدى الحياة: مفهوم التطور المهني والشخصي المستمر',
          },
        ],
        examples: [
          {
            de: 'Ein Systemadministrator absolviert eine AWS Solutions Architect Zertifizierung. Der Arbeitgeber übernimmt die Kosten und stellt ihn für 5 Tage Prüfungsvorbereitung frei.',
            ar: 'يُكمل مدير نظام شهادة AWS Solutions Architect. يتحمل صاحب العمل التكاليف ويعفيه لمدة 5 أيام للتحضير للامتحان.',
          },
        ],
        examRelevance: {
          de: 'Der Unterschied zwischen Fortbildung und Weiterbildung sowie die Bedeutung des lebenslangen Lernens werden gelegentlich geprüft.',
          ar: 'يتم فحص الفرق بين التدريب المتقدم والتعليم المستمر وكذلك أهمية التعلم مدى الحياة أحياناً.',
        },
        summary: {
          de: 'Weiterbildung umfasst alle Lernprozesse nach der Erstausbildung. Im IT-Bereich ist sie durch den schnellen Wandel besonders wichtig.',
          ar: 'يشمل التعليم المستمر جميع عمليات التعلم بعد التعليم الأولي. في مجال تكنولوجيا المعلومات مهم بشكل خاص بسبب التغير السريع.',
        },
      },
    },
  ],
};
