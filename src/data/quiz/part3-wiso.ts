import type { QuizQuestion } from './types';

export const part3Questions: QuizQuestion[] = [
  // ============================================================
  // GROUP 01 - Arbeitsrecht (~20 questions)
  // ============================================================

  // --- arbeitsvertrag ---
  {
    id: 'p3-001',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'arbeitsvertrag',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Welche Angabe muss ein schriftlicher Arbeitsvertrag nach dem Nachweisgesetz enthalten?',
      ar: 'ما هي المعلومات التي يجب أن يتضمنها عقد العمل المكتوب وفقًا لقانون الإثبات؟',
    },
    options: [
      { de: 'Beginn des Arbeitsverhältnisses', ar: 'بداية علاقة العمل' },
      { de: 'Name des Lieblingskollegen', ar: 'اسم الزميل المفضل' },
      { de: 'Privatadresse des Vorgesetzten', ar: 'العنوان الخاص للمدير' },
      { de: 'Bankverbindung des Geschäftsführers', ar: 'البيانات البنكية للمدير التنفيذي' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nach dem Nachweisgesetz (NachwG) muss der Arbeitsvertrag u. a. den Beginn des Arbeitsverhältnisses, die Tätigkeit, den Arbeitsort und die Vergütung enthalten.',
      ar: 'وفقًا لقانون الإثبات يجب أن يتضمن عقد العمل من بين أمور أخرى بداية علاقة العمل ونوع النشاط ومكان العمل والأجر.',
    },
    tags: ['nachweisgesetz', 'arbeitsvertrag'],
  },
  {
    id: 'p3-002',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'arbeitsvertrag',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welche Aussage zum Arbeitsvertrag ist korrekt?',
      ar: 'أي عبارة عن عقد العمل صحيحة؟',
    },
    options: [
      { de: 'Ein Arbeitsvertrag kann auch mündlich geschlossen werden.', ar: 'يمكن إبرام عقد العمل شفهيًا أيضًا.' },
      { de: 'Ein Arbeitsvertrag muss immer notariell beglaubigt werden.', ar: 'يجب دائمًا توثيق عقد العمل لدى كاتب العدل.' },
      { de: 'Ein Arbeitsvertrag ist nur gültig, wenn er bei der IHK registriert wird.', ar: 'يكون عقد العمل صالحًا فقط إذا تم تسجيله لدى غرفة الصناعة والتجارة.' },
      { de: 'Ein Arbeitsvertrag muss immer befristet sein.', ar: 'يجب أن يكون عقد العمل دائمًا محدد المدة.' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ein Arbeitsvertrag kann grundsätzlich auch mündlich geschlossen werden. Allerdings hat der Arbeitnehmer nach dem Nachweisgesetz Anspruch auf eine schriftliche Niederschrift der wesentlichen Vertragsbedingungen.',
      ar: 'يمكن من حيث المبدأ إبرام عقد العمل شفهيًا أيضًا. ومع ذلك يحق للعامل بموجب قانون الإثبات الحصول على توثيق كتابي لشروط العقد الأساسية.',
    },
  },

  // --- rechte-pflichten-arbeitnehmer ---
  {
    id: 'p3-003',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'rechte-pflichten-arbeitnehmer',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Welche der folgenden ist eine Pflicht des Arbeitnehmers?',
      ar: 'أي مما يلي يعتبر واجبًا على العامل؟',
    },
    options: [
      { de: 'Arbeitspflicht (Erbringung der vereinbarten Arbeitsleistung)', ar: 'واجب العمل (تقديم أداء العمل المتفق عليه)' },
      { de: 'Gewinnbeteiligung festlegen', ar: 'تحديد المشاركة في الأرباح' },
      { de: 'Urlaubsplan für die Abteilung erstellen', ar: 'إعداد خطة الإجازات للقسم' },
      { de: 'Neue Mitarbeiter einstellen', ar: 'توظيف موظفين جدد' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Hauptpflicht des Arbeitnehmers ist die Arbeitspflicht, also die Erbringung der vertraglich vereinbarten Arbeitsleistung. Weitere Nebenpflichten sind z. B. Treuepflicht und Verschwiegenheitspflicht.',
      ar: 'الواجب الرئيسي للعامل هو واجب العمل أي تقديم أداء العمل المتفق عليه في العقد. وهناك واجبات ثانوية أخرى مثل واجب الولاء وواجب الحفاظ على السرية.',
    },
  },

  // --- rechte-pflichten-arbeitgeber ---
  {
    id: 'p3-004',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'rechte-pflichten-arbeitgeber',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Welche der folgenden ist eine Pflicht des Arbeitgebers?',
      ar: 'أي مما يلي يعتبر واجبًا على صاحب العمل؟',
    },
    options: [
      { de: 'Vergütungspflicht (Zahlung des vereinbarten Lohns)', ar: 'واجب دفع الأجر (دفع الراتب المتفق عليه)' },
      { de: 'Pflicht zur Gewinnmaximierung', ar: 'واجب تعظيم الأرباح' },
      { de: 'Private Weiterbildung des Arbeitnehmers finanzieren', ar: 'تمويل التعليم الخاص للعامل' },
      { de: 'Urlaubstage unbegrenzt gewähren', ar: 'منح أيام إجازة غير محدودة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Hauptpflicht des Arbeitgebers ist die Vergütungspflicht. Weitere Pflichten sind u. a. die Fürsorgepflicht, Beschäftigungspflicht und die Pflicht zur Abführung von Sozialversicherungsbeiträgen.',
      ar: 'الواجب الرئيسي لصاحب العمل هو واجب دفع الأجر. وتشمل الواجبات الأخرى واجب الرعاية وواجب التشغيل وواجب دفع اشتراكات التأمين الاجتماعي.',
    },
  },

  // --- probezeit ---
  {
    id: 'p3-005',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'probezeit',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Wie lang darf die Probezeit bei einem Ausbildungsverhältnis mindestens und höchstens dauern?',
      ar: 'ما هي المدة الدنيا والقصوى لفترة التجربة في علاقة التدريب المهني؟',
    },
    options: [
      { de: 'Mindestens 1 Monat, höchstens 4 Monate', ar: 'شهر واحد على الأقل و4 أشهر كحد أقصى' },
      { de: 'Mindestens 3 Monate, höchstens 12 Monate', ar: '3 أشهر على الأقل و12 شهرًا كحد أقصى' },
      { de: 'Mindestens 6 Monate, höchstens 24 Monate', ar: '6 أشهر على الأقل و24 شهرًا كحد أقصى' },
      { de: 'Es gibt keine Probezeit in der Ausbildung', ar: 'لا توجد فترة تجربة في التدريب المهني' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nach § 20 BBiG beträgt die Probezeit in der Ausbildung mindestens einen Monat und höchstens vier Monate.',
      ar: 'وفقًا للمادة 20 من قانون التدريب المهني تبلغ فترة التجربة في التدريب المهني شهرًا واحدًا على الأقل وأربعة أشهر كحد أقصى.',
    },
  },
  {
    id: 'p3-006',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'probezeit',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Während der Probezeit kann das Arbeitsverhältnis von beiden Seiten ohne Angabe von Gründen mit einer Frist von zwei Wochen gekündigt werden.',
      ar: 'خلال فترة التجربة يمكن لكلا الطرفين إنهاء علاقة العمل دون إبداء أسباب بمهلة أسبوعين.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Während der Probezeit (max. 6 Monate) beträgt die Kündigungsfrist gemäß § 622 Abs. 3 BGB zwei Wochen, ohne dass ein Kündigungsgrund genannt werden muss.',
      ar: 'خلال فترة التجربة (بحد أقصى 6 أشهر) تبلغ مهلة الإنهاء وفقًا للمادة 622 فقرة 3 من القانون المدني أسبوعين دون الحاجة إلى ذكر سبب للإنهاء.',
    },
  },

  // --- kuendigung ---
  {
    id: 'p3-007',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'kuendigung',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welche Kündigungsarten gibt es im Arbeitsrecht?',
      ar: 'ما هي أنواع الإنهاء في قانون العمل؟',
    },
    options: [
      { de: 'Ordentliche, außerordentliche und Änderungskündigung', ar: 'الإنهاء العادي والاستثنائي وإنهاء التعديل' },
      { de: 'Nur die ordentliche Kündigung', ar: 'الإنهاء العادي فقط' },
      { de: 'Schriftliche und mündliche Kündigung', ar: 'الإنهاء الكتابي والشفهي' },
      { de: 'Interne und externe Kündigung', ar: 'الإنهاء الداخلي والخارجي' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Im Arbeitsrecht unterscheidet man zwischen ordentlicher (fristgemäßer), außerordentlicher (fristloser) und Änderungskündigung.',
      ar: 'يُميَّز في قانون العمل بين الإنهاء العادي (مع مهلة) والإنهاء الاستثنائي (بدون مهلة) وإنهاء التعديل.',
    },
  },
  {
    id: 'p3-008',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'kuendigung',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Ein Arbeitnehmer wurde wegen Diebstahls am Arbeitsplatz fristlos gekündigt. Welche Kündigungsart liegt vor?',
      ar: 'تم فصل عامل فصلاً فوريًا بسبب السرقة في مكان العمل. ما نوع الإنهاء؟',
    },
    options: [
      { de: 'Außerordentliche (fristlose) Kündigung aus verhaltensbedingten Gründen', ar: 'إنهاء استثنائي (فوري) لأسباب سلوكية' },
      { de: 'Ordentliche Kündigung aus personenbedingten Gründen', ar: 'إنهاء عادي لأسباب شخصية' },
      { de: 'Ordentliche Kündigung aus betriebsbedingten Gründen', ar: 'إنهاء عادي لأسباب تشغيلية' },
      { de: 'Änderungskündigung', ar: 'إنهاء تعديل' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Diebstahl am Arbeitsplatz stellt einen wichtigen Grund gemäß § 626 BGB dar, der eine fristlose (außerordentliche) Kündigung aus verhaltensbedingten Gründen rechtfertigt.',
      ar: 'تعتبر السرقة في مكان العمل سببًا مهمًا وفقًا للمادة 626 من القانون المدني يبرر الفصل الفوري (الاستثنائي) لأسباب سلوكية.',
    },
  },

  // --- kuendigungsfristen ---
  {
    id: 'p3-009',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'kuendigungsfristen',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Wie lang ist die gesetzliche Grundkündigungsfrist für Arbeitnehmer nach § 622 BGB?',
      ar: 'ما هي مهلة الإنهاء القانونية الأساسية للعامل وفقًا للمادة 622 من القانون المدني؟',
    },
    options: [
      { de: '4 Wochen zum 15. oder zum Ende eines Kalendermonats', ar: '4 أسابيع حتى الخامس عشر أو نهاية الشهر' },
      { de: '2 Wochen zum Monatsende', ar: 'أسبوعان حتى نهاية الشهر' },
      { de: '6 Wochen zum Quartalsende', ar: '6 أسابيع حتى نهاية الربع' },
      { de: '1 Monat zum Jahresende', ar: 'شهر واحد حتى نهاية العام' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die gesetzliche Grundkündigungsfrist beträgt nach § 622 Abs. 1 BGB vier Wochen zum Fünfzehnten oder zum Ende eines Kalendermonats.',
      ar: 'تبلغ مهلة الإنهاء القانونية الأساسية وفقًا للمادة 622 فقرة 1 من القانون المدني أربعة أسابيع حتى الخامس عشر أو نهاية الشهر.',
    },
  },

  // --- kuendigungsschutzgesetz ---
  {
    id: 'p3-010',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'kuendigungsschutzgesetz',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Ab wie vielen Arbeitnehmern in einem Betrieb greift das Kündigungsschutzgesetz (KSchG)?',
      ar: 'من كم عامل في المنشأة يبدأ تطبيق قانون حماية الإنهاء؟',
    },
    options: [
      { de: 'Mehr als 10 Arbeitnehmer', ar: 'أكثر من 10 عمال' },
      { de: 'Mehr als 5 Arbeitnehmer', ar: 'أكثر من 5 عمال' },
      { de: 'Mehr als 20 Arbeitnehmer', ar: 'أكثر من 20 عاملاً' },
      { de: 'Ab dem ersten Arbeitnehmer', ar: 'من أول عامل' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Kündigungsschutzgesetz gilt in Betrieben mit mehr als 10 Arbeitnehmern (§ 23 KSchG). Der Arbeitnehmer muss zudem mindestens 6 Monate beschäftigt sein.',
      ar: 'ينطبق قانون حماية الإنهاء في المنشآت التي تضم أكثر من 10 عمال (المادة 23). كما يجب أن يكون العامل قد عمل لمدة 6 أشهر على الأقل.',
    },
  },

  // --- abmahnung ---
  {
    id: 'p3-011',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'abmahnung',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welche Funktion hat eine Abmahnung im Arbeitsrecht?',
      ar: 'ما هي وظيفة الإنذار في قانون العمل؟',
    },
    options: [
      { de: 'Sie ist eine Warnung und Voraussetzung für eine verhaltensbedingte ordentliche Kündigung.', ar: 'هو تحذير وشرط مسبق للإنهاء العادي لأسباب سلوكية.' },
      { de: 'Sie ersetzt die Kündigung vollständig.', ar: 'يحل محل الإنهاء بالكامل.' },
      { de: 'Sie ist nur eine formlose Bitte um Besserung.', ar: 'هو مجرد طلب غير رسمي للتحسن.' },
      { de: 'Sie muss immer vom Betriebsrat ausgesprochen werden.', ar: 'يجب أن يصدر دائمًا من مجلس العمال.' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Abmahnung hat eine Hinweis-, Rüge- und Warnfunktion. Sie ist in der Regel Voraussetzung für eine verhaltensbedingte ordentliche Kündigung.',
      ar: 'يتضمن الإنذار وظيفة التنبيه والتوبيخ والتحذير. وهو في العادة شرط مسبق للإنهاء العادي لأسباب سلوكية.',
    },
  },

  // --- befristeter-arbeitsvertrag ---
  {
    id: 'p3-012',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'befristeter-arbeitsvertrag',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Ein befristeter Arbeitsvertrag ohne sachlichen Grund darf maximal 2 Jahre dauern und in diesem Zeitraum höchstens dreimal verlängert werden.',
      ar: 'يجوز أن يستمر عقد العمل المحدد المدة بدون سبب موضوعي لمدة أقصاها سنتان ويمكن تمديده ثلاث مرات كحد أقصى خلال هذه الفترة.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nach § 14 Abs. 2 TzBfG ist eine kalendermäßige Befristung ohne Sachgrund bis zur Dauer von 2 Jahren zulässig, wobei bis zu 3 Verlängerungen möglich sind.',
      ar: 'وفقًا للمادة 14 فقرة 2 من قانون العمل الجزئي والمحدد المدة يجوز التحديد الزمني بدون سبب موضوعي لمدة تصل إلى سنتين مع إمكانية التمديد حتى 3 مرات.',
    },
  },

  // --- unbefristeter-arbeitsvertrag ---
  {
    id: 'p3-013',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'unbefristeter-arbeitsvertrag',
    difficulty: 'easy',
    type: 'flashcard',
    question: {
      de: 'Was ist ein unbefristeter Arbeitsvertrag?',
      ar: 'ما هو عقد العمل غير المحدد المدة؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Ein unbefristeter Arbeitsvertrag ist ein Vertrag ohne festgelegtes Enddatum. Er endet nur durch Kündigung, Aufhebungsvertrag oder Eintritt in den Ruhestand.',
      ar: 'عقد العمل غير المحدد المدة هو عقد بدون تاريخ انتهاء محدد. وينتهي فقط بالإنهاء أو بالاتفاق على الإنهاء أو بالتقاعد.',
    },
  },

  // --- aufhebungsvertrag ---
  {
    id: 'p3-014',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'aufhebungsvertrag',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Was ist ein wesentlicher Nachteil eines Aufhebungsvertrags für den Arbeitnehmer?',
      ar: 'ما هو العيب الرئيسي لاتفاق إنهاء العمل بالنسبة للعامل؟',
    },
    options: [
      { de: 'Es kann eine Sperrzeit beim Arbeitslosengeld drohen.', ar: 'قد يتعرض لفترة حظر في إعانة البطالة.' },
      { de: 'Der Arbeitnehmer erhält immer eine Abfindung.', ar: 'يحصل العامل دائمًا على تعويض إنهاء الخدمة.' },
      { de: 'Der Aufhebungsvertrag ist nicht rechtsgültig.', ar: 'اتفاق الإنهاء ليس ملزمًا قانونيًا.' },
      { de: 'Der Betriebsrat muss immer zustimmen.', ar: 'يجب أن يوافق مجلس العمال دائمًا.' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei einem Aufhebungsvertrag kann die Agentur für Arbeit eine Sperrzeit von bis zu 12 Wochen beim Arbeitslosengeld verhängen, da der Arbeitnehmer an der Beendigung mitgewirkt hat.',
      ar: 'في حالة اتفاق الإنهاء قد تفرض وكالة العمل فترة حظر تصل إلى 12 أسبوعًا على إعانة البطالة لأن العامل شارك في إنهاء علاقة العمل.',
    },
  },

  // --- tarifvertrag ---
  {
    id: 'p3-015',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'tarifvertrag',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welche Arten von Tarifverträgen gibt es?',
      ar: 'ما هي أنواع الاتفاقيات الجماعية؟',
    },
    options: [
      { de: 'Manteltarifvertrag, Entgelttarifvertrag und Rahmentarifvertrag', ar: 'اتفاقية الإطار العامة واتفاقية الأجور واتفاقية الإطار' },
      { de: 'Nur den Lohntarifvertrag', ar: 'اتفاقية الأجور فقط' },
      { de: 'Betriebsvertrag und Privatvertrag', ar: 'عقد تشغيل وعقد خاص' },
      { de: 'Einzelvertrag und Gruppenvertrag', ar: 'عقد فردي وعقد جماعي' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Man unterscheidet u. a. Manteltarifvertrag (allgemeine Arbeitsbedingungen), Entgelttarifvertrag (Löhne/Gehälter) und Rahmentarifvertrag (Eingruppierung).',
      ar: 'يُميَّز من بين أنواع أخرى بين اتفاقية الإطار العامة (شروط العمل العامة) واتفاقية الأجور (الرواتب) واتفاقية الإطار (التصنيف الوظيفي).',
    },
  },

  // --- tarifparteien ---
  {
    id: 'p3-016',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'tarifparteien',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Wer sind die Tarifvertragsparteien?',
      ar: 'من هم أطراف الاتفاقية الجماعية؟',
    },
    options: [
      { de: 'Gewerkschaften und Arbeitgeberverbände (oder einzelne Arbeitgeber)', ar: 'النقابات العمالية واتحادات أصحاب العمل (أو أصحاب عمل منفردين)' },
      { de: 'Betriebsrat und Geschäftsführung', ar: 'مجلس العمال والإدارة' },
      { de: 'Bundesregierung und Arbeitnehmer', ar: 'الحكومة الاتحادية والعمال' },
      { de: 'IHK und Handwerkskammer', ar: 'غرفة الصناعة والتجارة وغرفة الحرف' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Tarifvertragsparteien sind auf Arbeitnehmerseite die Gewerkschaften und auf Arbeitgeberseite die Arbeitgeberverbände oder einzelne Arbeitgeber (Haustarifvertrag).',
      ar: 'أطراف الاتفاقية الجماعية هم من جانب العمال النقابات العمالية ومن جانب أصحاب العمل اتحادات أصحاب العمل أو أصحاب عمل منفردين (اتفاقية جماعية خاصة بالمنشأة).',
    },
  },

  // --- tarifbindung ---
  {
    id: 'p3-017',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'tarifbindung',
    difficulty: 'hard',
    type: 'true-false',
    question: {
      de: 'Ein Tarifvertrag gilt automatisch für alle Arbeitnehmer eines Betriebs, unabhängig davon, ob sie Gewerkschaftsmitglieder sind.',
      ar: 'تنطبق الاتفاقية الجماعية تلقائيًا على جميع عمال المنشأة بغض النظر عما إذا كانوا أعضاء في النقابة.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Ein Tarifvertrag gilt grundsätzlich nur für die Mitglieder der tarifschließenden Parteien. Er kann jedoch durch Allgemeinverbindlicherklärung auf alle Arbeitnehmer der Branche ausgeweitet werden.',
      ar: 'تنطبق الاتفاقية الجماعية من حيث المبدأ فقط على أعضاء الأطراف المبرمة لها. ومع ذلك يمكن توسيعها لتشمل جميع العمال في القطاع من خلال إعلان الالتزام العام.',
    },
  },

  // --- betriebsvereinbarung ---
  {
    id: 'p3-018',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'betriebsvereinbarung',
    difficulty: 'medium',
    type: 'flashcard',
    question: {
      de: 'Was ist eine Betriebsvereinbarung und wer schließt sie ab?',
      ar: 'ما هي اتفاقية المنشأة ومن يبرمها؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Eine Betriebsvereinbarung ist ein Vertrag zwischen Arbeitgeber und Betriebsrat, der verbindliche Regelungen für alle Arbeitnehmer des Betriebs enthält (z. B. Arbeitszeit, Urlaubsregelung). Sie gilt unmittelbar und zwingend.',
      ar: 'اتفاقية المنشأة هي عقد بين صاحب العمل ومجلس العمال يتضمن قواعد ملزمة لجميع عمال المنشأة (مثل ساعات العمل ونظام الإجازات). وتسري بشكل مباشر وإلزامي.',
    },
  },

  // --- Additional Arbeitsrecht ---
  {
    id: 'p3-019',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'kuendigung',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Welche Personengruppe genießt besonderen Kündigungsschutz?',
      ar: 'أي مجموعة من الأشخاص تتمتع بحماية خاصة من الفصل؟',
    },
    options: [
      { de: 'Schwangere Frauen, Schwerbehinderte und Betriebsratsmitglieder', ar: 'النساء الحوامل وذوو الإعاقات الشديدة وأعضاء مجلس العمال' },
      { de: 'Nur Geschäftsführer', ar: 'المدراء التنفيذيون فقط' },
      { de: 'Nur Mitarbeiter mit mehr als 20 Jahren Betriebszugehörigkeit', ar: 'فقط الموظفون الذين عملوا أكثر من 20 عامًا' },
      { de: 'Nur Teilzeitkräfte', ar: 'العمال بدوام جزئي فقط' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Besonderen Kündigungsschutz genießen u. a. Schwangere (MuSchG), Schwerbehinderte (SGB IX), Betriebsratsmitglieder (BetrVG) und Auszubildende nach der Probezeit.',
      ar: 'تتمتع بحماية خاصة من الفصل من بين آخرين النساء الحوامل وذوو الإعاقات الشديدة وأعضاء مجلس العمال والمتدربون بعد فترة التجربة.',
    },
  },
  {
    id: 'p3-020',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group01',
    topic: 'rechte-pflichten-arbeitnehmer',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Wie viele Urlaubstage stehen einem Arbeitnehmer gesetzlich mindestens zu (bei einer 5-Tage-Woche)?',
      ar: 'كم يومًا من الإجازة يحق للعامل قانونيًا كحد أدنى (في أسبوع عمل من 5 أيام)؟',
    },
    options: [
      { de: '20 Arbeitstage', ar: '20 يوم عمل' },
      { de: '24 Arbeitstage', ar: '24 يوم عمل' },
      { de: '30 Arbeitstage', ar: '30 يوم عمل' },
      { de: '14 Arbeitstage', ar: '14 يوم عمل' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nach dem Bundesurlaubsgesetz (BUrlG) beträgt der gesetzliche Mindesturlaub 24 Werktage (6-Tage-Woche) bzw. 20 Arbeitstage (5-Tage-Woche).',
      ar: 'وفقًا لقانون الإجازات الاتحادي يبلغ الحد الأدنى للإجازة القانونية 24 يوم عمل (أسبوع 6 أيام) أو 20 يوم عمل (أسبوع 5 أيام).',
    },
  },

  // ============================================================
  // GROUP 02 - Mitbestimmung (~8 questions)
  // ============================================================

  // --- betriebsrat ---
  {
    id: 'p3-021',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group02',
    topic: 'betriebsrat',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Ab wie vielen ständigen Arbeitnehmern kann in einem Betrieb ein Betriebsrat gewählt werden?',
      ar: 'من كم عامل دائم يمكن انتخاب مجلس عمال في المنشأة؟',
    },
    options: [
      { de: 'Ab 5 wahlberechtigten Arbeitnehmern', ar: 'من 5 عمال لهم حق التصويت' },
      { de: 'Ab 10 Arbeitnehmern', ar: 'من 10 عمال' },
      { de: 'Ab 20 Arbeitnehmern', ar: 'من 20 عاملاً' },
      { de: 'Ab 50 Arbeitnehmern', ar: 'من 50 عاملاً' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nach § 1 BetrVG kann ein Betriebsrat in Betrieben mit mindestens 5 ständigen wahlberechtigten Arbeitnehmern (davon 3 wählbar) gewählt werden.',
      ar: 'وفقًا للمادة 1 من قانون المنشآت يمكن انتخاب مجلس عمال في منشآت تضم 5 عمال دائمين على الأقل لهم حق التصويت (منهم 3 قابلين للانتخاب).',
    },
  },

  // --- aufgaben-betriebsrat ---
  {
    id: 'p3-022',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group02',
    topic: 'aufgaben-betriebsrat',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welche Aufgabe hat der Betriebsrat NICHT?',
      ar: 'أي مهمة لا تقع ضمن اختصاص مجلس العمال؟',
    },
    options: [
      { de: 'Verhandlung von Tarifverträgen', ar: 'التفاوض على الاتفاقيات الجماعية' },
      { de: 'Überwachung der Einhaltung von Gesetzen zum Schutz der Arbeitnehmer', ar: 'مراقبة الالتزام بقوانين حماية العمال' },
      { de: 'Mitwirkung bei Kündigungen', ar: 'المشاركة في قرارات الإنهاء' },
      { de: 'Förderung der Eingliederung schwerbehinderter Menschen', ar: 'تعزيز إدماج ذوي الإعاقات الشديدة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Verhandlung von Tarifverträgen ist Aufgabe der Gewerkschaften und Arbeitgeberverbände, nicht des Betriebsrats. Der Betriebsrat vertritt die Interessen der Belegschaft auf betrieblicher Ebene.',
      ar: 'التفاوض على الاتفاقيات الجماعية هو مهمة النقابات واتحادات أصحاب العمل وليس مجلس العمال. يمثل مجلس العمال مصالح العمال على مستوى المنشأة.',
    },
  },

  // --- mitbestimmungsrechte ---
  {
    id: 'p3-023',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group02',
    topic: 'mitbestimmungsrechte',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Bei welchem der folgenden Themen hat der Betriebsrat ein zwingendes Mitbestimmungsrecht?',
      ar: 'في أي من المواضيع التالية يتمتع مجلس العمال بحق مشاركة إلزامي؟',
    },
    options: [
      { de: 'Festlegung der täglichen Arbeitszeit (Beginn und Ende)', ar: 'تحديد ساعات العمل اليومية (البداية والنهاية)' },
      { de: 'Entscheidung über die Produktpalette', ar: 'القرار بشأن مجموعة المنتجات' },
      { de: 'Festlegung der Unternehmensfarben', ar: 'تحديد ألوان الشركة' },
      { de: 'Auswahl der Geschäftsführung', ar: 'اختيار الإدارة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nach § 87 BetrVG hat der Betriebsrat ein zwingendes Mitbestimmungsrecht u. a. bei Arbeitszeitregelungen, Urlaubsgrundsätzen, Entlohnungsgrundsätzen und Verhaltensregeln im Betrieb.',
      ar: 'وفقًا للمادة 87 من قانون المنشآت يتمتع مجلس العمال بحق مشاركة إلزامي من بين أمور أخرى في تنظيم ساعات العمل ومبادئ الإجازات ومبادئ الأجور وقواعد السلوك في المنشأة.',
    },
  },

  // --- jugend-auszubildendenvertretung ---
  {
    id: 'p3-024',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group02',
    topic: 'jugend-auszubildendenvertretung',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Wer wird durch die Jugend- und Auszubildendenvertretung (JAV) vertreten?',
      ar: 'من يمثله ممثلو الشباب والمتدربين؟',
    },
    options: [
      { de: 'Jugendliche Arbeitnehmer unter 18 und Auszubildende unter 25', ar: 'العمال الشباب تحت 18 سنة والمتدربون تحت 25 سنة' },
      { de: 'Alle Arbeitnehmer des Betriebs', ar: 'جميع عمال المنشأة' },
      { de: 'Nur Praktikanten', ar: 'المتدربون فقط' },
      { de: 'Nur Studenten in dualen Studiengängen', ar: 'طلاب الدراسة المزدوجة فقط' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die JAV vertritt die Interessen der jugendlichen Arbeitnehmer (unter 18 Jahre) und der Auszubildenden (unter 25 Jahre) im Betrieb.',
      ar: 'يمثل ممثلو الشباب والمتدربين مصالح العمال الشباب (تحت 18 سنة) والمتدربين (تحت 25 سنة) في المنشأة.',
    },
  },

  // --- betriebsversammlung ---
  {
    id: 'p3-025',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group02',
    topic: 'betriebsversammlung',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Die Betriebsversammlung muss mindestens einmal pro Kalendervierteljahr stattfinden.',
      ar: 'يجب أن ينعقد اجتماع المنشأة مرة واحدة على الأقل في كل ربع سنة.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nach § 43 BetrVG hat der Betriebsrat einmal im Kalendervierteljahr eine Betriebsversammlung einzuberufen und einen Tätigkeitsbericht zu erstatten.',
      ar: 'وفقًا للمادة 43 من قانون المنشآت يجب على مجلس العمال عقد اجتماع المنشأة مرة في كل ربع سنة وتقديم تقرير عن النشاط.',
    },
  },

  // --- arbeitnehmervertretung ---
  {
    id: 'p3-026',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group02',
    topic: 'arbeitnehmervertretung',
    difficulty: 'easy',
    type: 'flashcard',
    question: {
      de: 'Was versteht man unter Arbeitnehmervertretung?',
      ar: 'ما المقصود بتمثيل العمال؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Die Arbeitnehmervertretung umfasst alle Organe, die die Interessen der Arbeitnehmer vertreten. Auf betrieblicher Ebene ist das der Betriebsrat, auf überbetrieblicher Ebene die Gewerkschaften.',
      ar: 'يشمل تمثيل العمال جميع الهيئات التي تمثل مصالح العمال. على مستوى المنشأة يتمثل ذلك في مجلس العمال وعلى المستوى فوق المنشأة في النقابات العمالية.',
    },
  },

  // ============================================================
  // GROUP 03 - Sozialversicherung (~15 questions)
  // ============================================================

  // --- krankenversicherung ---
  {
    id: 'p3-027',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'krankenversicherung',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Welche Leistungen übernimmt die gesetzliche Krankenversicherung (GKV)?',
      ar: 'ما هي الخدمات التي يغطيها التأمين الصحي القانوني؟',
    },
    options: [
      { de: 'Arztbesuche, Krankenhausaufenthalte und Medikamente', ar: 'زيارات الطبيب والإقامة في المستشفى والأدوية' },
      { de: 'Nur Zahnbehandlungen', ar: 'علاج الأسنان فقط' },
      { de: 'Nur Krankenhausaufenthalte', ar: 'الإقامة في المستشفى فقط' },
      { de: 'Ausschließlich Vorsorgeuntersuchungen', ar: 'الفحوصات الوقائية فقط' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die GKV übernimmt die Kosten für ambulante und stationäre Behandlung, Medikamente, Vorsorge, Rehabilitation und Krankengeld ab der 7. Woche.',
      ar: 'يغطي التأمين الصحي القانوني تكاليف العلاج الأمبولاتوري والعلاج في المستشفى والأدوية والوقاية وإعادة التأهيل وبدل المرض من الأسبوع السابع.',
    },
  },
  {
    id: 'p3-028',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'krankenversicherung',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Wie lange zahlt der Arbeitgeber bei Krankheit des Arbeitnehmers die Entgeltfortzahlung?',
      ar: 'كم تبلغ مدة استمرار صاحب العمل في دفع الأجر عند مرض العامل؟',
    },
    options: [
      { de: 'Bis zu 6 Wochen (42 Kalendertage)', ar: 'حتى 6 أسابيع (42 يومًا تقويميًا)' },
      { de: 'Bis zu 4 Wochen', ar: 'حتى 4 أسابيع' },
      { de: 'Bis zu 12 Wochen', ar: 'حتى 12 أسبوعًا' },
      { de: 'Unbegrenzt', ar: 'بدون حد' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nach dem Entgeltfortzahlungsgesetz (EFZG) hat der Arbeitnehmer Anspruch auf 6 Wochen (42 Kalendertage) Entgeltfortzahlung im Krankheitsfall. Danach zahlt die Krankenkasse Krankengeld.',
      ar: 'وفقًا لقانون استمرار دفع الأجر يحق للعامل الحصول على 6 أسابيع (42 يومًا تقويميًا) من استمرار دفع الأجر في حالة المرض. بعد ذلك تدفع شركة التأمين الصحي بدل المرض.',
    },
  },

  // --- rentenversicherung ---
  {
    id: 'p3-029',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'rentenversicherung',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Was ist das Ziel der gesetzlichen Rentenversicherung?',
      ar: 'ما هو هدف التأمين القانوني للتقاعد؟',
    },
    options: [
      { de: 'Sicherung des Lebensunterhalts im Alter, bei Erwerbsminderung und für Hinterbliebene', ar: 'تأمين المعيشة في الشيخوخة وعند العجز عن العمل وللورثة' },
      { de: 'Finanzierung von Urlaubsreisen im Alter', ar: 'تمويل رحلات الإجازة في الشيخوخة' },
      { de: 'Bereitstellung von kostenlosem Wohnraum', ar: 'توفير سكن مجاني' },
      { de: 'Übernahme der Krankenversicherungsbeiträge', ar: 'تحمل اشتراكات التأمين الصحي' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die gesetzliche Rentenversicherung sichert den Lebensunterhalt im Alter (Altersrente), bei Erwerbsminderung (Erwerbsminderungsrente) und für Hinterbliebene (Witwen-/Waisenrente).',
      ar: 'يؤمن التأمين القانوني للتقاعد المعيشة في الشيخوخة (معاش التقاعد) وعند العجز عن العمل (معاش العجز) وللورثة (معاش الأرملة/اليتيم).',
    },
  },
  {
    id: 'p3-030',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'rentenversicherung',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Die gesetzliche Rentenversicherung funktioniert nach dem Umlageverfahren (Generationenvertrag).',
      ar: 'يعمل التأمين القانوني للتقاعد وفقًا لنظام التوزيع (عقد الأجيال).',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die gesetzliche Rentenversicherung basiert auf dem Umlageverfahren: Die Beiträge der heutigen Erwerbstätigen finanzieren die Renten der aktuellen Rentner (Generationenvertrag).',
      ar: 'يقوم التأمين القانوني للتقاعد على نظام التوزيع: اشتراكات العاملين الحاليين تمول معاشات المتقاعدين الحاليين (عقد الأجيال).',
    },
  },

  // --- arbeitslosenversicherung ---
  {
    id: 'p3-031',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'arbeitslosenversicherung',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welche Voraussetzung muss erfüllt sein, um Arbeitslosengeld I zu erhalten?',
      ar: 'ما الشرط الذي يجب تحقيقه للحصول على إعانة البطالة الأولى؟',
    },
    options: [
      { de: 'Mindestens 12 Monate sozialversicherungspflichtige Beschäftigung in den letzten 30 Monaten', ar: '12 شهرًا على الأقل من العمل الخاضع للتأمين الاجتماعي في آخر 30 شهرًا' },
      { de: 'Mindestens 6 Monate Beschäftigung', ar: '6 أشهر من العمل على الأقل' },
      { de: 'Mindestens 24 Monate Beschäftigung', ar: '24 شهرًا من العمل على الأقل' },
      { de: 'Es gibt keine Mindestbeschäftigungsdauer', ar: 'لا يوجد حد أدنى لمدة العمل' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Für den Anspruch auf ALG I muss der Arbeitnehmer in der Regel mindestens 12 Monate innerhalb der letzten 30 Monate (Rahmenfrist) sozialversicherungspflichtig beschäftigt gewesen sein.',
      ar: 'للحصول على إعانة البطالة الأولى يجب أن يكون العامل قد عمل لمدة 12 شهرًا على الأقل خلال آخر 30 شهرًا (فترة الإطار) في عمل خاضع للتأمين الاجتماعي.',
    },
  },

  // --- pflegeversicherung ---
  {
    id: 'p3-032',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'pflegeversicherung',
    difficulty: 'easy',
    type: 'flashcard',
    question: {
      de: 'Was ist die gesetzliche Pflegeversicherung und was leistet sie?',
      ar: 'ما هو التأمين القانوني للرعاية وماذا يقدم؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Die Pflegeversicherung (SGB XI) ist die „fünfte Säule" der Sozialversicherung. Sie übernimmt Kosten für Pflegeleistungen bei Pflegebedürftigkeit (ambulante Pflege, stationäre Pflege, Pflegegeld). Die Einstufung erfolgt in Pflegegrade 1–5.',
      ar: 'تأمين الرعاية هو "الركيزة الخامسة" للتأمين الاجتماعي. يتحمل تكاليف خدمات الرعاية عند الحاجة للرعاية (رعاية منزلية ورعاية مؤسسية وبدل رعاية). يتم التصنيف في درجات الرعاية من 1 إلى 5.',
    },
  },

  // --- unfallversicherung ---
  {
    id: 'p3-033',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'unfallversicherung',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Wer zahlt die Beiträge zur gesetzlichen Unfallversicherung?',
      ar: 'من يدفع اشتراكات التأمين القانوني ضد الحوادث؟',
    },
    options: [
      { de: 'Der Arbeitgeber allein', ar: 'صاحب العمل وحده' },
      { de: 'Der Arbeitnehmer allein', ar: 'العامل وحده' },
      { de: 'Arbeitgeber und Arbeitnehmer je zur Hälfte', ar: 'صاحب العمل والعامل مناصفة' },
      { de: 'Der Staat', ar: 'الدولة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die gesetzliche Unfallversicherung wird allein vom Arbeitgeber finanziert. Sie schützt Arbeitnehmer bei Arbeitsunfällen und Berufskrankheiten. Träger sind die Berufsgenossenschaften.',
      ar: 'يتم تمويل التأمين القانوني ضد الحوادث من صاحب العمل وحده. وهو يحمي العمال في حالة حوادث العمل والأمراض المهنية. والجهة المسؤولة هي الجمعيات المهنية.',
    },
  },
  {
    id: 'p3-034',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'unfallversicherung',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Der Wegeunfall (Unfall auf dem Weg zur Arbeit) ist durch die gesetzliche Unfallversicherung abgedeckt.',
      ar: 'حادث الطريق (الحادث في الطريق إلى العمل) مغطى بالتأمين القانوني ضد الحوادث.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ja, Wegeunfälle auf dem direkten Weg zwischen Wohnung und Arbeitsstätte sind durch die gesetzliche Unfallversicherung abgedeckt (§ 8 Abs. 2 SGB VII).',
      ar: 'نعم، حوادث الطريق على المسار المباشر بين المسكن ومكان العمل مغطاة بالتأمين القانوني ضد الحوادث (المادة 8 فقرة 2).',
    },
  },

  // --- beitragssaetze ---
  {
    id: 'p3-035',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'beitragssaetze',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welche der folgenden Sozialversicherungen hat den höchsten Beitragssatz?',
      ar: 'أي من التأمينات الاجتماعية التالية لديها أعلى معدل اشتراك؟',
    },
    options: [
      { de: 'Rentenversicherung (ca. 18,6 %)', ar: 'تأمين التقاعد (حوالي 18.6%)' },
      { de: 'Arbeitslosenversicherung (ca. 2,6 %)', ar: 'تأمين البطالة (حوالي 2.6%)' },
      { de: 'Pflegeversicherung (ca. 3,4 %)', ar: 'تأمين الرعاية (حوالي 3.4%)' },
      { de: 'Unfallversicherung (individuell)', ar: 'تأمين الحوادث (فردي)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Rentenversicherung hat mit ca. 18,6 % den höchsten Beitragssatz der Sozialversicherungen. Krankenversicherung liegt bei ca. 14,6 % + Zusatzbeitrag.',
      ar: 'تأمين التقاعد لديه أعلى معدل اشتراك بحوالي 18.6%. التأمين الصحي يبلغ حوالي 14.6% + اشتراك إضافي.',
    },
  },

  // --- arbeitgeber-arbeitnehmeranteil ---
  {
    id: 'p3-036',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'arbeitgeber-arbeitnehmeranteil',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Wie werden die Beiträge zur Sozialversicherung in der Regel zwischen Arbeitgeber und Arbeitnehmer aufgeteilt?',
      ar: 'كيف يتم تقسيم اشتراكات التأمين الاجتماعي بين صاحب العمل والعامل عادةً؟',
    },
    options: [
      { de: 'Je zur Hälfte (paritätisch), mit Ausnahme der Unfallversicherung', ar: 'مناصفة (بالتساوي) باستثناء تأمين الحوادث' },
      { de: 'Der Arbeitgeber zahlt 75 %, der Arbeitnehmer 25 %', ar: 'يدفع صاحب العمل 75% والعامل 25%' },
      { de: 'Der Arbeitnehmer zahlt alles', ar: 'يدفع العامل كل شيء' },
      { de: 'Der Staat zahlt alles', ar: 'تدفع الدولة كل شيء' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Beiträge werden grundsätzlich paritätisch (je zur Hälfte) aufgeteilt. Ausnahme: Die Unfallversicherung wird allein vom Arbeitgeber getragen.',
      ar: 'يتم تقسيم الاشتراكات بشكل أساسي بالتساوي (مناصفة). الاستثناء: تأمين الحوادث الذي يتحمله صاحب العمل وحده.',
    },
  },

  // --- sozialversicherungsnummer ---
  {
    id: 'p3-037',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'sozialversicherungsnummer',
    difficulty: 'easy',
    type: 'true-false',
    question: {
      de: 'Die Sozialversicherungsnummer wird jedem Versicherten bei der ersten Aufnahme einer Beschäftigung zugewiesen und bleibt lebenslang gleich.',
      ar: 'يتم تخصيص رقم التأمين الاجتماعي لكل مؤمن عليه عند بدء أول عمل ويبقى ثابتًا مدى الحياة.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Sozialversicherungsnummer (auch Rentenversicherungsnummer) wird bei der ersten sozialversicherungspflichtigen Beschäftigung von der Deutschen Rentenversicherung vergeben und begleitet den Versicherten ein Leben lang.',
      ar: 'يتم تخصيص رقم التأمين الاجتماعي (رقم تأمين التقاعد أيضًا) عند بدء أول عمل خاضع للتأمين الاجتماعي من قبل التأمين الألماني للتقاعد ويرافق المؤمن عليه مدى الحياة.',
    },
  },

  // --- Additional Sozialversicherung ---
  {
    id: 'p3-038',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'krankenversicherung',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Ab welchem Jahresbruttoeinkommen kann ein Arbeitnehmer in die private Krankenversicherung (PKV) wechseln?',
      ar: 'من أي دخل إجمالي سنوي يمكن للعامل الانتقال إلى التأمين الصحي الخاص؟',
    },
    options: [
      { de: 'Wenn das Einkommen die Jahresarbeitsentgeltgrenze (Versicherungspflichtgrenze) überschreitet', ar: 'عندما يتجاوز الدخل حد الدخل السنوي (حد التأمين الإلزامي)' },
      { de: 'Ab 30.000 € Jahreseinkommen', ar: 'من 30,000 يورو دخل سنوي' },
      { de: 'Jeder kann jederzeit wechseln', ar: 'يمكن لأي شخص الانتقال في أي وقت' },
      { de: 'Nur Beamte dürfen in die PKV', ar: 'فقط الموظفون الحكوميون يحق لهم الانتقال للتأمين الخاص' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Arbeitnehmer können in die PKV wechseln, wenn ihr Jahresbruttoeinkommen die Versicherungspflichtgrenze (JAEG, 2024: ca. 69.300 €) überschreitet. Selbstständige und Beamte können unabhängig davon in die PKV.',
      ar: 'يمكن للعمال الانتقال إلى التأمين الصحي الخاص عندما يتجاوز دخلهم الإجمالي السنوي حد التأمين الإلزامي. يمكن للعاملين لحسابهم الخاص والموظفين الحكوميين الانتقال بغض النظر عن ذلك.',
    },
  },
  {
    id: 'p3-039',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'arbeitslosenversicherung',
    difficulty: 'medium',
    type: 'flashcard',
    question: {
      de: 'Was ist der Unterschied zwischen Arbeitslosengeld I und Arbeitslosengeld II (Bürgergeld)?',
      ar: 'ما الفرق بين إعانة البطالة الأولى وإعانة البطالة الثانية (أموال المواطنين)؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'ALG I ist eine Versicherungsleistung (ca. 60–67 % des letzten Nettogehalts, max. 12–24 Monate). Bürgergeld (ehemals ALG II/Hartz IV) ist eine steuerfinanzierte Grundsicherung für erwerbsfähige Hilfebedürftige, unabhängig von vorheriger Beschäftigung.',
      ar: 'إعانة البطالة الأولى هي خدمة تأمينية (حوالي 60-67% من آخر راتب صافي، بحد أقصى 12-24 شهرًا). أموال المواطنين (سابقًا هارتس الرابع) هو ضمان أساسي ممول من الضرائب للمحتاجين القادرين على العمل بغض النظر عن العمل السابق.',
    },
  },
  {
    id: 'p3-040',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'pflegeversicherung',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Wie viele Pflegegrade gibt es in der gesetzlichen Pflegeversicherung?',
      ar: 'كم عدد درجات الرعاية في التأمين القانوني للرعاية؟',
    },
    options: [
      { de: '5 Pflegegrade', ar: '5 درجات رعاية' },
      { de: '3 Pflegestufen', ar: '3 مستويات رعاية' },
      { de: '7 Pflegegrade', ar: '7 درجات رعاية' },
      { de: '10 Pflegegrade', ar: '10 درجات رعاية' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Seit 2017 gibt es 5 Pflegegrade (PG 1–5), die den Grad der Selbstständigkeitsbeeinträchtigung beschreiben. Sie lösten die früheren 3 Pflegestufen ab.',
      ar: 'منذ عام 2017 توجد 5 درجات رعاية (1-5) تصف مدى تأثر الاستقلالية. وقد حلت محل مستويات الرعاية الثلاثة السابقة.',
    },
  },
  {
    id: 'p3-041',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group03',
    topic: 'beitragssaetze',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Welche fünf Zweige gehören zur deutschen Sozialversicherung?',
      ar: 'ما هي الفروع الخمسة التي تنتمي إلى التأمين الاجتماعي الألماني؟',
    },
    options: [
      { de: 'Kranken-, Renten-, Arbeitslosen-, Pflege- und Unfallversicherung', ar: 'التأمين الصحي والتقاعد والبطالة والرعاية والحوادث' },
      { de: 'Kranken-, Renten-, Lebens-, Pflege- und Unfallversicherung', ar: 'التأمين الصحي والتقاعد والحياة والرعاية والحوادث' },
      { de: 'Kranken-, Renten-, Haftpflicht-, Pflege- und Unfallversicherung', ar: 'التأمين الصحي والتقاعد والمسؤولية والرعاية والحوادث' },
      { de: 'Kranken-, Renten-, Arbeitslosen-, Reise- und Unfallversicherung', ar: 'التأمين الصحي والتقاعد والبطالة والسفر والحوادث' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die fünf Säulen der Sozialversicherung sind: Krankenversicherung, Rentenversicherung, Arbeitslosenversicherung, Pflegeversicherung und Unfallversicherung.',
      ar: 'الركائز الخمس للتأمين الاجتماعي هي: التأمين الصحي وتأمين التقاعد وتأمين البطالة وتأمين الرعاية وتأمين الحوادث.',
    },
  },

  // ============================================================
  // GROUP 04 - Wirtschaftliche Grundlagen (~12 questions)
  // ============================================================

  // --- angebot-nachfrage ---
  {
    id: 'p3-042',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group04',
    topic: 'angebot-nachfrage',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Was passiert laut dem Gesetz von Angebot und Nachfrage, wenn die Nachfrage steigt und das Angebot gleich bleibt?',
      ar: 'ماذا يحدث وفقًا لقانون العرض والطلب عندما يرتفع الطلب ويبقى العرض ثابتًا؟',
    },
    options: [
      { de: 'Der Preis steigt', ar: 'يرتفع السعر' },
      { de: 'Der Preis sinkt', ar: 'ينخفض السعر' },
      { de: 'Der Preis bleibt gleich', ar: 'يبقى السعر ثابتًا' },
      { de: 'Das Angebot steigt automatisch', ar: 'يرتفع العرض تلقائيًا' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei steigender Nachfrage und gleichbleibendem Angebot entsteht ein Nachfrageüberschuss, der den Preis nach oben treibt, bis ein neues Gleichgewicht erreicht wird.',
      ar: 'عند ارتفاع الطلب وثبات العرض ينشأ فائض في الطلب يدفع السعر إلى الأعلى حتى يتم الوصول إلى توازن جديد.',
    },
  },
  {
    id: 'p3-043',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group04',
    topic: 'angebot-nachfrage',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Der Gleichgewichtspreis ist der Preis, bei dem Angebot und Nachfrage übereinstimmen.',
      ar: 'سعر التوازن هو السعر الذي يتساوى فيه العرض والطلب.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Gleichgewichtspreis (Marktpreis) bildet sich dort, wo die angebotene Menge genau der nachgefragten Menge entspricht. Es gibt weder Überschuss noch Mangel.',
      ar: 'يتشكل سعر التوازن (سعر السوق) عندما تتساوى الكمية المعروضة مع الكمية المطلوبة بالضبط. لا يوجد فائض ولا نقص.',
    },
  },

  // --- marktpreis ---
  {
    id: 'p3-044',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group04',
    topic: 'marktpreis',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welcher Faktor beeinflusst den Marktpreis NICHT direkt?',
      ar: 'أي عامل لا يؤثر مباشرة على سعر السوق؟',
    },
    options: [
      { de: 'Die Lieblingsfarbe des Geschäftsführers', ar: 'اللون المفضل للمدير التنفيذي' },
      { de: 'Die Produktionskosten', ar: 'تكاليف الإنتاج' },
      { de: 'Die Kaufkraft der Konsumenten', ar: 'القوة الشرائية للمستهلكين' },
      { de: 'Das Verhalten der Konkurrenz', ar: 'سلوك المنافسين' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Marktpreis wird durch Angebot und Nachfrage bestimmt, beeinflusst von Produktionskosten, Kaufkraft, Wettbewerb und Konsumentenpräferenzen – nicht durch persönliche Vorlieben der Geschäftsführung.',
      ar: 'يتحدد سعر السوق بالعرض والطلب ويتأثر بتكاليف الإنتاج والقوة الشرائية والمنافسة وتفضيلات المستهلكين - وليس بالتفضيلات الشخصية للإدارة.',
    },
  },

  // --- wettbewerb ---
  {
    id: 'p3-045',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group04',
    topic: 'wettbewerb',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welches Gesetz schützt den freien Wettbewerb in Deutschland?',
      ar: 'أي قانون يحمي المنافسة الحرة في ألمانيا؟',
    },
    options: [
      { de: 'Das Gesetz gegen Wettbewerbsbeschränkungen (GWB)', ar: 'قانون مكافحة تقييد المنافسة' },
      { de: 'Das Bürgerliche Gesetzbuch (BGB)', ar: 'القانون المدني' },
      { de: 'Das Handelsgesetzbuch (HGB)', ar: 'القانون التجاري' },
      { de: 'Das Grundgesetz (GG)', ar: 'القانون الأساسي' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das GWB (Kartellgesetz) schützt den freien Wettbewerb, verbietet Kartelle und kontrolliert Fusionen. Das Bundeskartellamt ist die zuständige Behörde.',
      ar: 'يحمي قانون مكافحة تقييد المنافسة (قانون الكارتل) المنافسة الحرة ويحظر الاحتكارات ويراقب عمليات الاندماج. مكتب الكارتل الاتحادي هو الجهة المختصة.',
    },
  },

  // --- marktformen ---
  {
    id: 'p3-046',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group04',
    topic: 'marktformen',
    difficulty: 'easy',
    type: 'flashcard',
    question: {
      de: 'Welche Marktformen unterscheidet man nach der Anzahl der Anbieter?',
      ar: 'ما هي أشكال السوق التي يتم تمييزها حسب عدد الموردين؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Man unterscheidet: Monopol (ein Anbieter), Oligopol (wenige Anbieter) und Polypol (viele Anbieter). Diese Einteilung kann auch auf der Nachfrageseite angewandt werden.',
      ar: 'يُميَّز بين: الاحتكار (مورد واحد) واحتكار القلة (عدد قليل من الموردين) وتعدد المنافسة (عدد كبير من الموردين). يمكن تطبيق هذا التصنيف أيضًا على جانب الطلب.',
    },
  },

  // --- monopol ---
  {
    id: 'p3-047',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group04',
    topic: 'monopol',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Was kennzeichnet ein Angebotsmonopol?',
      ar: 'ما الذي يميز احتكار العرض؟',
    },
    options: [
      { de: 'Ein einziger Anbieter bedient viele Nachfrager', ar: 'مورد واحد يخدم العديد من المستهلكين' },
      { de: 'Viele Anbieter und viele Nachfrager', ar: 'العديد من الموردين والعديد من المستهلكين' },
      { de: 'Wenige Anbieter und wenige Nachfrager', ar: 'عدد قليل من الموردين وعدد قليل من المستهلكين' },
      { de: 'Kein Anbieter und viele Nachfrager', ar: 'لا يوجد مورد والعديد من المستهلكين' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei einem Angebotsmonopol gibt es nur einen Anbieter, der den gesamten Markt bedient. Er kann den Preis weitgehend selbst bestimmen (Preissetzer).',
      ar: 'في احتكار العرض يوجد مورد واحد فقط يخدم السوق بالكامل. ويمكنه تحديد السعر بشكل كبير بنفسه (محدد السعر).',
    },
  },

  // --- oligopol ---
  {
    id: 'p3-048',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group04',
    topic: 'oligopol',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welches Beispiel beschreibt ein typisches Angebotsoligopol?',
      ar: 'أي مثال يصف احتكار القلة النموذجي في العرض؟',
    },
    options: [
      { de: 'Der Automobilmarkt mit wenigen großen Herstellern', ar: 'سوق السيارات مع عدد قليل من الشركات المصنعة الكبيرة' },
      { de: 'Der Wochenmarkt mit vielen Obstständen', ar: 'سوق الأسبوع مع العديد من أكشاك الفاكهة' },
      { de: 'Die Deutsche Bahn als einziger Fernverkehrsanbieter auf der Schiene', ar: 'السكك الحديدية الألمانية كمزود وحيد للنقل بالقطارات' },
      { de: 'Ein einzelner Bäcker in einem kleinen Dorf', ar: 'خباز واحد في قرية صغيرة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ein Oligopol zeichnet sich durch wenige große Anbieter aus, die den Markt beherrschen. Der Automobilmarkt mit Herstellern wie VW, BMW, Mercedes ist ein typisches Beispiel.',
      ar: 'يتميز احتكار القلة بعدد قليل من الموردين الكبار الذين يسيطرون على السوق. سوق السيارات مع شركات مثل فولكسفاغن وبي إم دبليو ومرسيدس هو مثال نموذجي.',
    },
  },

  // --- polypol ---
  {
    id: 'p3-049',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group04',
    topic: 'polypol',
    difficulty: 'easy',
    type: 'true-false',
    question: {
      de: 'Im Polypol gibt es viele Anbieter und viele Nachfrager, sodass kein einzelner Marktteilnehmer den Preis bestimmen kann.',
      ar: 'في تعدد المنافسة يوجد العديد من الموردين والعديد من المستهلكين بحيث لا يستطيع أي مشارك فردي تحديد السعر.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Im Polypol (vollkommener Wettbewerb) sind alle Marktteilnehmer Preisnehmer. Der Preis wird allein durch den Marktmechanismus von Angebot und Nachfrage bestimmt.',
      ar: 'في تعدد المنافسة (المنافسة الكاملة) جميع المشاركين في السوق هم متلقون للسعر. يتحدد السعر فقط من خلال آلية السوق للعرض والطلب.',
    },
  },

  // --- Additional Wirtschaftliche Grundlagen ---
  {
    id: 'p3-050',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group04',
    topic: 'wettbewerb',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Was ist ein Kartell?',
      ar: 'ما هو الكارتل؟',
    },
    options: [
      { de: 'Eine verbotene Absprache zwischen Unternehmen zur Wettbewerbsbeschränkung', ar: 'اتفاق محظور بين الشركات لتقييد المنافسة' },
      { de: 'Ein Zusammenschluss von Arbeitnehmern', ar: 'اتحاد للعمال' },
      { de: 'Eine staatliche Regulierungsbehörde', ar: 'هيئة تنظيمية حكومية' },
      { de: 'Eine Form der Aktiengesellschaft', ar: 'شكل من أشكال الشركات المساهمة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ein Kartell ist eine nach § 1 GWB verbotene Vereinbarung zwischen konkurrierenden Unternehmen, die den Wettbewerb beschränkt (z. B. Preiskartell, Gebietskartell).',
      ar: 'الكارتل هو اتفاق محظور وفقًا للمادة 1 من قانون مكافحة تقييد المنافسة بين شركات متنافسة يقيد المنافسة (مثل كارتل الأسعار وكارتل المناطق).',
    },
  },
  {
    id: 'p3-051',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group04',
    topic: 'angebot-nachfrage',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Was versteht man unter einem Angebotsüberschuss?',
      ar: 'ما المقصود بفائض العرض؟',
    },
    options: [
      { de: 'Die angebotene Menge übersteigt die nachgefragte Menge zum aktuellen Preis', ar: 'الكمية المعروضة تتجاوز الكمية المطلوبة بالسعر الحالي' },
      { de: 'Die nachgefragte Menge übersteigt die angebotene Menge', ar: 'الكمية المطلوبة تتجاوز الكمية المعروضة' },
      { de: 'Angebot und Nachfrage sind im Gleichgewicht', ar: 'العرض والطلب في حالة توازن' },
      { de: 'Es gibt kein Angebot auf dem Markt', ar: 'لا يوجد عرض في السوق' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ein Angebotsüberschuss entsteht, wenn der Preis über dem Gleichgewichtspreis liegt. Die Anbieter können nicht alles absetzen, was in der Regel zu Preissenkungen führt.',
      ar: 'ينشأ فائض العرض عندما يكون السعر أعلى من سعر التوازن. لا يستطيع الموردون بيع كل شيء مما يؤدي عادةً إلى انخفاض الأسعار.',
    },
  },
  {
    id: 'p3-052',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group04',
    topic: 'marktpreis',
    difficulty: 'easy',
    type: 'flashcard',
    question: {
      de: 'Was ist der Gleichgewichtspreis?',
      ar: 'ما هو سعر التوازن؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Der Gleichgewichtspreis ist der Preis, bei dem die angebotene Menge genau der nachgefragten Menge entspricht. Bei diesem Preis wird der Markt geräumt – es gibt weder Überschuss noch Mangel.',
      ar: 'سعر التوازن هو السعر الذي تتساوى فيه الكمية المعروضة مع الكمية المطلوبة بالضبط. عند هذا السعر يتم تصفية السوق - لا يوجد فائض ولا نقص.',
    },
  },

  // ============================================================
  // GROUP 05 - Wirtschaftskreislauf (~6 questions)
  // ============================================================

  {
    id: 'p3-053',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group05',
    topic: 'haushalte',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Welche Rolle spielen private Haushalte im einfachen Wirtschaftskreislauf?',
      ar: 'ما هو دور الأسر الخاصة في الدورة الاقتصادية البسيطة؟',
    },
    options: [
      { de: 'Sie bieten Arbeitskraft an und fragen Güter nach', ar: 'يعرضون قوة العمل ويطلبون السلع' },
      { de: 'Sie produzieren nur Güter', ar: 'ينتجون السلع فقط' },
      { de: 'Sie erheben Steuern', ar: 'يفرضون الضرائب' },
      { de: 'Sie vergeben Kredite', ar: 'يمنحون القروض' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Im Wirtschaftskreislauf bieten Haushalte den Unternehmen Produktionsfaktoren (v. a. Arbeit) an und erhalten dafür Einkommen, das sie für den Konsum von Gütern verwenden.',
      ar: 'في الدورة الاقتصادية تعرض الأسر على الشركات عوامل الإنتاج (خاصة العمل) وتحصل في المقابل على دخل تستخدمه لاستهلاك السلع.',
    },
  },
  {
    id: 'p3-054',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group05',
    topic: 'unternehmen',
    difficulty: 'easy',
    type: 'true-false',
    question: {
      de: 'Unternehmen produzieren Güter und Dienstleistungen und bieten diese auf dem Gütermarkt an.',
      ar: 'تنتج الشركات السلع والخدمات وتعرضها في سوق السلع.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Unternehmen sind im Wirtschaftskreislauf die Produzenten. Sie kombinieren Produktionsfaktoren (Arbeit, Boden, Kapital) und bieten die produzierten Güter und Dienstleistungen auf dem Gütermarkt an.',
      ar: 'الشركات هي المنتجون في الدورة الاقتصادية. يجمعون عوامل الإنتاج (العمل والأرض ورأس المال) ويعرضون السلع والخدمات المنتجة في سوق السلع.',
    },
  },
  {
    id: 'p3-055',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group05',
    topic: 'staat',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welche Rolle spielt der Staat im erweiterten Wirtschaftskreislauf?',
      ar: 'ما الدور الذي تلعبه الدولة في الدورة الاقتصادية الموسعة؟',
    },
    options: [
      { de: 'Er erhebt Steuern und stellt öffentliche Güter sowie Transferzahlungen bereit', ar: 'يفرض الضرائب ويوفر السلع العامة ومدفوعات التحويل' },
      { de: 'Er produziert ausschließlich Konsumgüter', ar: 'ينتج سلع الاستهلاك فقط' },
      { de: 'Er hat keine Funktion im Wirtschaftskreislauf', ar: 'ليس له وظيفة في الدورة الاقتصادية' },
      { de: 'Er bestimmt alle Preise direkt', ar: 'يحدد جميع الأسعار مباشرة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Staat erhebt Steuern und Abgaben, stellt öffentliche Güter (Infrastruktur, Bildung) bereit und leistet Transferzahlungen (Sozialleistungen, Subventionen).',
      ar: 'تفرض الدولة الضرائب والرسوم وتوفر السلع العامة (البنية التحتية والتعليم) وتقدم مدفوعات التحويل (الخدمات الاجتماعية والإعانات).',
    },
  },
  {
    id: 'p3-056',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group05',
    topic: 'banken',
    difficulty: 'medium',
    type: 'flashcard',
    question: {
      de: 'Welche Rolle spielen Banken im Wirtschaftskreislauf?',
      ar: 'ما الدور الذي تلعبه البنوك في الدورة الاقتصادية؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Banken sammeln Spareinlagen der Haushalte und vergeben Kredite an Unternehmen und den Staat. Sie fungieren als Finanzintermediäre und ermöglichen den Geldkreislauf. Die Zentralbank steuert zudem die Geldmenge.',
      ar: 'تجمع البنوك مدخرات الأسر وتمنح قروضًا للشركات والدولة. تعمل كوسطاء ماليين وتمكن من دوران الأموال. كما يتحكم البنك المركزي في كمية النقود.',
    },
  },
  {
    id: 'p3-057',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group05',
    topic: 'geldkreislauf',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Was fließt im Geldkreislauf von den Unternehmen zu den Haushalten?',
      ar: 'ما الذي يتدفق في الدورة النقدية من الشركات إلى الأسر؟',
    },
    options: [
      { de: 'Löhne, Gehälter, Zinsen und Gewinne (Faktoreinkommen)', ar: 'أجور ورواتب وفوائد وأرباح (دخل عوامل الإنتاج)' },
      { de: 'Güter und Dienstleistungen', ar: 'سلع وخدمات' },
      { de: 'Steuern', ar: 'ضرائب' },
      { de: 'Subventionen', ar: 'إعانات' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Im Geldkreislauf fließen von den Unternehmen Faktoreinkommen (Löhne, Gehälter, Zinsen, Gewinne) an die Haushalte als Gegenleistung für die bereitgestellten Produktionsfaktoren.',
      ar: 'في الدورة النقدية يتدفق دخل عوامل الإنتاج (أجور ورواتب وفوائد وأرباح) من الشركات إلى الأسر كمقابل لعوامل الإنتاج المقدمة.',
    },
  },
  {
    id: 'p3-058',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group05',
    topic: 'gueterkreislauf',
    difficulty: 'easy',
    type: 'true-false',
    question: {
      de: 'Im Güterkreislauf fließen Waren und Dienstleistungen von den Unternehmen zu den Haushalten.',
      ar: 'في الدورة السلعية تتدفق البضائع والخدمات من الشركات إلى الأسر.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Im Güterkreislauf (Realstrom) liefern Unternehmen Konsumgüter und Dienstleistungen an die Haushalte. Die Haushalte liefern im Gegenzug Arbeitskraft (Produktionsfaktor) an die Unternehmen.',
      ar: 'في الدورة السلعية (التدفق الحقيقي) تقدم الشركات سلع الاستهلاك والخدمات للأسر. وتقدم الأسر في المقابل قوة العمل (عامل إنتاج) للشركات.',
    },
  },

  // ============================================================
  // GROUP 06 - Unternehmensorganisation (~6 questions)
  // ============================================================

  {
    id: 'p3-059',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group06',
    topic: 'aufbauorganisation',
    difficulty: 'easy',
    type: 'flashcard',
    question: {
      de: 'Was regelt die Aufbauorganisation eines Unternehmens?',
      ar: 'ماذا ينظم الهيكل التنظيمي للشركة؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Die Aufbauorganisation regelt die statische Struktur eines Unternehmens: Stellenbildung, Abteilungsbildung, Hierarchie, Zuständigkeiten und Weisungsbefugnisse. Sie wird oft im Organigramm dargestellt.',
      ar: 'ينظم الهيكل التنظيمي البنية الثابتة للشركة: تكوين المناصب وتكوين الأقسام والتسلسل الهرمي والاختصاصات وصلاحيات التوجيه. ويُعرض عادةً في المخطط التنظيمي.',
    },
  },
  {
    id: 'p3-060',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group06',
    topic: 'ablauforganisation',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Was regelt die Ablauforganisation?',
      ar: 'ماذا ينظم تنظيم سير العمل؟',
    },
    options: [
      { de: 'Die zeitliche und räumliche Gestaltung von Arbeitsprozessen', ar: 'التصميم الزمني والمكاني لعمليات العمل' },
      { de: 'Die Hierarchie im Unternehmen', ar: 'التسلسل الهرمي في الشركة' },
      { de: 'Die Rechtsform des Unternehmens', ar: 'الشكل القانوني للشركة' },
      { de: 'Die Kapitalstruktur', ar: 'هيكل رأس المال' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Ablauforganisation regelt die dynamischen Arbeitsprozesse: Wer macht was, wann, wo und in welcher Reihenfolge? Sie optimiert die zeitliche und räumliche Abfolge von Tätigkeiten.',
      ar: 'ينظم تنظيم سير العمل العمليات الديناميكية: من يفعل ماذا ومتى وأين وبأي ترتيب؟ ويحسن التسلسل الزمني والمكاني للأنشطة.',
    },
  },
  {
    id: 'p3-061',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group06',
    topic: 'linienorganisation',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Was ist das Hauptmerkmal der Einlinienorganisation?',
      ar: 'ما هي السمة الرئيسية لتنظيم الخط الواحد؟',
    },
    options: [
      { de: 'Jeder Mitarbeiter hat genau einen Vorgesetzten (Einheit der Auftragserteilung)', ar: 'كل موظف لديه رئيس واحد فقط (وحدة إصدار الأوامر)' },
      { de: 'Jeder Mitarbeiter hat mehrere Vorgesetzte', ar: 'كل موظف لديه عدة رؤساء' },
      { de: 'Es gibt keine Hierarchie', ar: 'لا يوجد تسلسل هرمي' },
      { de: 'Alle Mitarbeiter sind gleichberechtigt', ar: 'جميع الموظفين متساوون' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'In der Einlinienorganisation gilt das Prinzip der Einheit der Auftragserteilung (Fayol): Jeder Mitarbeiter erhält Anweisungen von nur einem Vorgesetzten. Vorteil: klare Zuständigkeiten. Nachteil: lange Dienstwege.',
      ar: 'في تنظيم الخط الواحد ينطبق مبدأ وحدة إصدار الأوامر: يتلقى كل موظف تعليمات من رئيس واحد فقط. الميزة: اختصاصات واضحة. العيب: مسارات خدمة طويلة.',
    },
  },
  {
    id: 'p3-062',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group06',
    topic: 'stablinienorganisation',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Was ist die Aufgabe einer Stabsstelle in der Stablinienorganisation?',
      ar: 'ما هي مهمة المنصب الاستشاري في تنظيم خط الأركان؟',
    },
    options: [
      { de: 'Beratung und Unterstützung der Linieninstanzen ohne Weisungsbefugnis', ar: 'تقديم المشورة والدعم لمناصب الخط بدون صلاحية إصدار أوامر' },
      { de: 'Direkte Anweisung aller Mitarbeiter', ar: 'توجيه مباشر لجميع الموظفين' },
      { de: 'Kontrolle der Finanzbuchhaltung', ar: 'مراقبة المحاسبة المالية' },
      { de: 'Einstellung neuer Mitarbeiter', ar: 'توظيف موظفين جدد' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Stabsstellen haben eine beratende Funktion und unterstützen die Linieninstanzen (z. B. Rechtsabteilung, Controlling). Sie haben keine Weisungsbefugnis gegenüber den Linieninstanzen.',
      ar: 'المناصب الاستشارية لها وظيفة استشارية وتدعم مناصب الخط (مثل القسم القانوني والرقابة). وليس لديها صلاحية إصدار أوامر لمناصب الخط.',
    },
  },
  {
    id: 'p3-063',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group06',
    topic: 'matrixorganisation',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Welcher Nachteil wird häufig mit der Matrixorganisation verbunden?',
      ar: 'أي عيب يرتبط غالبًا بالتنظيم المصفوفي؟',
    },
    options: [
      { de: 'Kompetenz- und Zuständigkeitskonflikte durch doppelte Unterstellung', ar: 'صراعات الاختصاص والمسؤولية بسبب التبعية المزدوجة' },
      { de: 'Zu wenige Kommunikationswege', ar: 'عدد قليل جدًا من مسارات الاتصال' },
      { de: 'Keine Spezialisierung möglich', ar: 'لا يمكن التخصص' },
      { de: 'Zu einfache Organisationsstruktur', ar: 'هيكل تنظيمي بسيط جدًا' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'In der Matrixorganisation hat jeder Mitarbeiter zwei Vorgesetzte (z. B. Funktions- und Produktleiter). Dies kann zu Kompetenz- und Zuständigkeitskonflikten führen. Vorteil ist die hohe Flexibilität.',
      ar: 'في التنظيم المصفوفي يكون لكل موظف رئيسان (مثل مدير الوظيفة ومدير المنتج). يمكن أن يؤدي هذا إلى صراعات الاختصاص والمسؤولية. الميزة هي المرونة العالية.',
    },
  },
  {
    id: 'p3-064',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group06',
    topic: 'aufbauorganisation',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Ein Organigramm stellt die Aufbauorganisation eines Unternehmens grafisch dar.',
      ar: 'يُظهر المخطط التنظيمي الهيكل التنظيمي للشركة بشكل بياني.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Organigramm ist die grafische Darstellung der Aufbauorganisation. Es zeigt Stellen, Abteilungen, Hierarchieebenen und Weisungsbeziehungen.',
      ar: 'المخطط التنظيمي هو التمثيل البياني للهيكل التنظيمي. يُظهر المناصب والأقسام ومستويات التسلسل الهرمي وعلاقات التوجيه.',
    },
  },

  // ============================================================
  // GROUP 07 - Finanzierung (~12 questions)
  // ============================================================

  {
    id: 'p3-065',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group07',
    topic: 'umsatz',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Wie berechnet sich der Umsatz (Erlös) eines Unternehmens?',
      ar: 'كيف يتم حساب إيرادات (عائدات) الشركة؟',
    },
    options: [
      { de: 'Absatzmenge × Verkaufspreis', ar: 'كمية المبيعات × سعر البيع' },
      { de: 'Gewinn + Kosten', ar: 'الربح + التكاليف' },
      { de: 'Einnahmen - Ausgaben', ar: 'الإيرادات - المصروفات' },
      { de: 'Fixkosten + variable Kosten', ar: 'التكاليف الثابتة + التكاليف المتغيرة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Umsatz (Erlös) berechnet sich als Absatzmenge multipliziert mit dem Verkaufspreis pro Stück: Umsatz = Menge × Preis.',
      ar: 'تُحسب الإيرادات (العائدات) بضرب كمية المبيعات في سعر البيع لكل وحدة: الإيرادات = الكمية × السعر.',
    },
  },
  {
    id: 'p3-066',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group07',
    topic: 'gewinn',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Wie berechnet sich der Gewinn eines Unternehmens?',
      ar: 'كيف يتم حساب ربح الشركة؟',
    },
    options: [
      { de: 'Umsatz (Erlös) - Gesamtkosten', ar: 'الإيرادات (العائدات) - إجمالي التكاليف' },
      { de: 'Umsatz × Gesamtkosten', ar: 'الإيرادات × إجمالي التكاليف' },
      { de: 'Fixkosten - variable Kosten', ar: 'التكاليف الثابتة - التكاليف المتغيرة' },
      { de: 'Einnahmen + Ausgaben', ar: 'الإيرادات + المصروفات' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Gewinn ergibt sich aus der Differenz zwischen Umsatz (Erlös) und Gesamtkosten: Gewinn = Umsatz - Kosten. Ist das Ergebnis negativ, spricht man von Verlust.',
      ar: 'يُحسب الربح من الفرق بين الإيرادات (العائدات) وإجمالي التكاليف: الربح = الإيرادات - التكاليف. إذا كانت النتيجة سلبية يُسمى خسارة.',
    },
  },
  {
    id: 'p3-067',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group07',
    topic: 'kosten',
    difficulty: 'easy',
    type: 'flashcard',
    question: {
      de: 'Was sind Gesamtkosten und wie setzen sie sich zusammen?',
      ar: 'ما هي التكاليف الإجمالية وكيف تتكون؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Die Gesamtkosten setzen sich aus Fixkosten und variablen Kosten zusammen: Gesamtkosten = Fixkosten + variable Kosten. Fixkosten fallen unabhängig von der Produktionsmenge an, variable Kosten ändern sich mit der Produktionsmenge.',
      ar: 'تتكون التكاليف الإجمالية من التكاليف الثابتة والتكاليف المتغيرة: التكاليف الإجمالية = التكاليف الثابتة + التكاليف المتغيرة. التكاليف الثابتة لا تتغير بتغير كمية الإنتاج بينما التكاليف المتغيرة تتغير.',
    },
  },
  {
    id: 'p3-068',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group07',
    topic: 'fixkosten',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Welches der folgenden Beispiele ist eine typische Fixkostenart?',
      ar: 'أي من الأمثلة التالية يُعد نوعًا نموذجيًا من التكاليف الثابتة؟',
    },
    options: [
      { de: 'Mietkosten für Geschäftsräume', ar: 'تكاليف إيجار المقر التجاري' },
      { de: 'Materialkosten pro Stück', ar: 'تكاليف المواد لكل وحدة' },
      { de: 'Verpackungskosten', ar: 'تكاليف التغليف' },
      { de: 'Akkordlöhne', ar: 'أجور القطعة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Fixkosten fallen unabhängig von der Produktionsmenge an. Typische Beispiele sind Miete, Gehälter (Festangestellte), Versicherungen und Abschreibungen.',
      ar: 'التكاليف الثابتة لا تتغير بتغير كمية الإنتاج. من الأمثلة النموذجية الإيجار والرواتب (الموظفون الدائمون) والتأمينات والإهلاك.',
    },
  },
  {
    id: 'p3-069',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group07',
    topic: 'variable-kosten',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Was sind variable Kosten?',
      ar: 'ما هي التكاليف المتغيرة؟',
    },
    options: [
      { de: 'Kosten, die sich mit der Produktionsmenge verändern', ar: 'تكاليف تتغير مع كمية الإنتاج' },
      { de: 'Kosten, die immer gleich bleiben', ar: 'تكاليف تبقى دائمًا ثابتة' },
      { de: 'Kosten, die nur einmal anfallen', ar: 'تكاليف تحدث مرة واحدة فقط' },
      { de: 'Kosten, die der Staat übernimmt', ar: 'تكاليف تتحملها الدولة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Variable Kosten verändern sich proportional, degressiv oder progressiv mit der Produktionsmenge. Beispiele: Materialkosten, Energiekosten für Produktion, Fertigungslöhne.',
      ar: 'التكاليف المتغيرة تتغير بشكل تناسبي أو تنازلي أو تصاعدي مع كمية الإنتاج. أمثلة: تكاليف المواد وتكاليف الطاقة للإنتاج وأجور التصنيع.',
    },
  },
  {
    id: 'p3-070',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group07',
    topic: 'deckungsbeitrag',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Wie berechnet sich der Deckungsbeitrag pro Stück?',
      ar: 'كيف يتم حساب هامش المساهمة لكل وحدة؟',
    },
    options: [
      { de: 'Verkaufspreis pro Stück - variable Kosten pro Stück', ar: 'سعر البيع لكل وحدة - التكاليف المتغيرة لكل وحدة' },
      { de: 'Verkaufspreis pro Stück - Fixkosten pro Stück', ar: 'سعر البيع لكل وحدة - التكاليف الثابتة لكل وحدة' },
      { de: 'Gesamtkosten - Umsatz', ar: 'إجمالي التكاليف - الإيرادات' },
      { de: 'Gewinn pro Stück × Absatzmenge', ar: 'الربح لكل وحدة × كمية المبيعات' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Stückdeckungsbeitrag = Verkaufspreis pro Stück - variable Kosten pro Stück. Er gibt an, wie viel jedes verkaufte Stück zur Deckung der Fixkosten und zum Gewinn beiträgt.',
      ar: 'هامش المساهمة لكل وحدة = سعر البيع لكل وحدة - التكاليف المتغيرة لكل وحدة. يُظهر مقدار مساهمة كل وحدة مباعة في تغطية التكاليف الثابتة وتحقيق الربح.',
    },
  },
  {
    id: 'p3-071',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group07',
    topic: 'break-even-point',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Was beschreibt der Break-Even-Point (Gewinnschwelle)?',
      ar: 'ماذا تصف نقطة التعادل (عتبة الربح)؟',
    },
    options: [
      { de: 'Den Punkt, an dem Umsatz und Gesamtkosten gleich hoch sind (Gewinn = 0)', ar: 'النقطة التي تتساوى فيها الإيرادات وإجمالي التكاليف (الربح = 0)' },
      { de: 'Den Punkt des maximalen Gewinns', ar: 'نقطة الربح الأقصى' },
      { de: 'Den Punkt, an dem die Fixkosten gedeckt sind', ar: 'النقطة التي يتم فيها تغطية التكاليف الثابتة' },
      { de: 'Den Punkt der maximalen Produktion', ar: 'نقطة الإنتاج الأقصى' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Am Break-Even-Point (BEP) sind Erlöse und Gesamtkosten gleich hoch, der Gewinn ist null. Berechnung: BEP-Menge = Fixkosten / Deckungsbeitrag pro Stück.',
      ar: 'عند نقطة التعادل تتساوى الإيرادات وإجمالي التكاليف ويكون الربح صفرًا. الحساب: كمية نقطة التعادل = التكاليف الثابتة / هامش المساهمة لكل وحدة.',
    },
  },
  {
    id: 'p3-072',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group07',
    topic: 'break-even-point',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Ein Produkt wird für 50 € verkauft. Die variablen Kosten betragen 30 € pro Stück, die Fixkosten 40.000 €. Wie hoch ist die Break-Even-Menge?',
      ar: 'يُباع منتج بسعر 50 يورو. التكاليف المتغيرة 30 يورو لكل وحدة والتكاليف الثابتة 40,000 يورو. ما هي كمية نقطة التعادل؟',
    },
    options: [
      { de: '2.000 Stück', ar: '2,000 وحدة' },
      { de: '1.000 Stück', ar: '1,000 وحدة' },
      { de: '800 Stück', ar: '800 وحدة' },
      { de: '4.000 Stück', ar: '4,000 وحدة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Deckungsbeitrag pro Stück = 50 € - 30 € = 20 €. BEP-Menge = Fixkosten / DB pro Stück = 40.000 € / 20 € = 2.000 Stück.',
      ar: 'هامش المساهمة لكل وحدة = 50 - 30 = 20 يورو. كمية نقطة التعادل = التكاليف الثابتة / هامش المساهمة = 40,000 / 20 = 2,000 وحدة.',
    },
  },
  {
    id: 'p3-073',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group07',
    topic: 'gewinn',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Ein Unternehmen erzielt einen Umsatz von 500.000 €. Die Fixkosten betragen 150.000 € und die variablen Kosten 250.000 €. Wie hoch ist der Gewinn?',
      ar: 'تحقق شركة إيرادات بقيمة 500,000 يورو. التكاليف الثابتة 150,000 يورو والتكاليف المتغيرة 250,000 يورو. كم يبلغ الربح؟',
    },
    options: [
      { de: '100.000 €', ar: '100,000 يورو' },
      { de: '200.000 €', ar: '200,000 يورو' },
      { de: '150.000 €', ar: '150,000 يورو' },
      { de: '250.000 €', ar: '250,000 يورو' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Gewinn = Umsatz - Gesamtkosten = 500.000 € - (150.000 € + 250.000 €) = 500.000 € - 400.000 € = 100.000 €.',
      ar: 'الربح = الإيرادات - إجمالي التكاليف = 500,000 - (150,000 + 250,000) = 500,000 - 400,000 = 100,000 يورو.',
    },
  },
  {
    id: 'p3-074',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group07',
    topic: 'deckungsbeitrag',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Solange ein Produkt einen positiven Deckungsbeitrag hat, lohnt es sich kurzfristig, es weiter zu produzieren, auch wenn es keinen Gewinn erzielt.',
      ar: 'طالما أن المنتج لديه هامش مساهمة إيجابي فإنه يستحق الاستمرار في إنتاجه على المدى القصير حتى لو لم يحقق ربحًا.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ein positiver Deckungsbeitrag bedeutet, dass das Produkt zumindest einen Teil der Fixkosten deckt. Kurzfristig ist die Weiterproduktion sinnvoll, da die Fixkosten ohnehin anfallen.',
      ar: 'هامش مساهمة إيجابي يعني أن المنتج يغطي على الأقل جزءًا من التكاليف الثابتة. على المدى القصير يكون الاستمرار في الإنتاج منطقيًا لأن التكاليف الثابتة تتكبد على أي حال.',
    },
  },
  {
    id: 'p3-075',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group07',
    topic: 'umsatz',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Ein Unternehmen verkauft 5.000 Einheiten eines Produkts zu je 25 €. Wie hoch ist der Umsatz?',
      ar: 'تبيع شركة 5,000 وحدة من منتج بسعر 25 يورو لكل وحدة. كم يبلغ الإيراد؟',
    },
    options: [
      { de: '125.000 €', ar: '125,000 يورو' },
      { de: '100.000 €', ar: '100,000 يورو' },
      { de: '150.000 €', ar: '150,000 يورو' },
      { de: '75.000 €', ar: '75,000 يورو' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Umsatz = Absatzmenge × Verkaufspreis = 5.000 × 25 € = 125.000 €.',
      ar: 'الإيرادات = كمية المبيعات × سعر البيع = 5,000 × 25 = 125,000 يورو.',
    },
  },
  {
    id: 'p3-076',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group07',
    topic: 'kosten',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welche der folgenden Kosten sind variable Kosten?',
      ar: 'أي من التكاليف التالية هي تكاليف متغيرة؟',
    },
    options: [
      { de: 'Rohstoffkosten', ar: 'تكاليف المواد الخام' },
      { de: 'Miete für die Fabrikhalle', ar: 'إيجار قاعة المصنع' },
      { de: 'Gehalt der Geschäftsführung', ar: 'راتب الإدارة' },
      { de: 'Gebäudeversicherung', ar: 'تأمين المبنى' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Rohstoffkosten sind typische variable Kosten, da sie direkt von der produzierten Menge abhängen. Je mehr produziert wird, desto mehr Rohstoffe werden benötigt.',
      ar: 'تكاليف المواد الخام هي تكاليف متغيرة نموذجية لأنها تعتمد مباشرة على الكمية المنتجة. كلما زاد الإنتاج زادت المواد الخام المطلوبة.',
    },
  },

  // ============================================================
  // GROUP 08 - Steuern (~6 questions)
  // ============================================================

  {
    id: 'p3-077',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group08',
    topic: 'einkommensteuer',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Wer muss Einkommensteuer zahlen?',
      ar: 'من يجب عليه دفع ضريبة الدخل؟',
    },
    options: [
      { de: 'Natürliche Personen mit Einkommen', ar: 'الأشخاص الطبيعيون ذوو الدخل' },
      { de: 'Nur Unternehmen', ar: 'الشركات فقط' },
      { de: 'Nur Beamte', ar: 'الموظفون الحكوميون فقط' },
      { de: 'Nur Selbstständige', ar: 'العاملون لحسابهم الخاص فقط' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Einkommensteuer wird von natürlichen Personen auf ihr Einkommen gezahlt. Bei Arbeitnehmern wird sie als Lohnsteuer direkt vom Arbeitgeber abgeführt. Der Steuersatz ist progressiv (14 % bis 45 %).',
      ar: 'تُدفع ضريبة الدخل من الأشخاص الطبيعيين على دخلهم. بالنسبة للعمال يتم خصمها كضريبة رواتب مباشرة من صاحب العمل. معدل الضريبة تصاعدي (14% إلى 45%).',
    },
  },
  {
    id: 'p3-078',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group08',
    topic: 'umsatzsteuer',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Wie hoch ist der reguläre Umsatzsteuersatz in Deutschland?',
      ar: 'كم يبلغ معدل ضريبة القيمة المضافة العادي في ألمانيا؟',
    },
    options: [
      { de: '19 %', ar: '19%' },
      { de: '16 %', ar: '16%' },
      { de: '21 %', ar: '21%' },
      { de: '7 %', ar: '7%' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der reguläre Umsatzsteuersatz beträgt 19 %. Der ermäßigte Satz für Grundbedarfsgüter (Lebensmittel, Bücher etc.) beträgt 7 %.',
      ar: 'يبلغ معدل ضريبة القيمة المضافة العادي 19%. المعدل المخفض للسلع الأساسية (المواد الغذائية والكتب إلخ) هو 7%.',
    },
  },
  {
    id: 'p3-079',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group08',
    topic: 'mehrwertsteuer',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Umsatzsteuer und Mehrwertsteuer bezeichnen im Grunde dieselbe Steuer.',
      ar: 'ضريبة المبيعات وضريبة القيمة المضافة تشيران في الأساس إلى نفس الضريبة.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Umgangssprachlich wird die Umsatzsteuer oft als Mehrwertsteuer (MwSt.) bezeichnet. Offiziell heißt sie Umsatzsteuer (USt.). Sie wird auf den Mehrwert jeder Produktionsstufe erhoben.',
      ar: 'في اللغة العامية يُشار إلى ضريبة المبيعات غالبًا بضريبة القيمة المضافة. رسميًا تُسمى ضريبة المبيعات. وتُفرض على القيمة المضافة في كل مرحلة إنتاج.',
    },
  },
  {
    id: 'p3-080',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group08',
    topic: 'koerperschaftsteuer',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Wer muss Körperschaftsteuer zahlen?',
      ar: 'من يجب عليه دفع ضريبة الشركات؟',
    },
    options: [
      { de: 'Juristische Personen wie GmbH und AG', ar: 'الأشخاص الاعتباريون مثل الشركة ذات المسؤولية المحدودة والشركة المساهمة' },
      { de: 'Nur natürliche Personen', ar: 'الأشخاص الطبيعيون فقط' },
      { de: 'Nur Einzelunternehmer', ar: 'أصحاب المشاريع الفردية فقط' },
      { de: 'Nur ausländische Unternehmen', ar: 'الشركات الأجنبية فقط' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Körperschaftsteuer ist die „Einkommensteuer" für juristische Personen (z. B. GmbH, AG, eG). Der Steuersatz beträgt einheitlich 15 % auf den Gewinn.',
      ar: 'ضريبة الشركات هي "ضريبة الدخل" للأشخاص الاعتباريين (مثل الشركة ذات المسؤولية المحدودة والمساهمة). يبلغ معدل الضريبة 15% موحدًا على الأرباح.',
    },
  },
  {
    id: 'p3-081',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group08',
    topic: 'gewerbesteuer',
    difficulty: 'medium',
    type: 'flashcard',
    question: {
      de: 'Was ist die Gewerbesteuer und wer zahlt sie?',
      ar: 'ما هي الضريبة التجارية ومن يدفعها؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Die Gewerbesteuer wird von allen Gewerbebetrieben gezahlt und fließt an die Gemeinde. Sie berechnet sich aus dem Gewerbeertrag × Steuermesszahl (3,5 %) × Hebesatz der Gemeinde. Freiberufler sind von der Gewerbesteuer befreit.',
      ar: 'تُدفع الضريبة التجارية من جميع المنشآت التجارية وتذهب للبلدية. تُحسب من الدخل التجاري × معدل القياس الضريبي (3.5%) × معدل الجمع للبلدية. المهن الحرة معفاة من الضريبة التجارية.',
    },
  },
  {
    id: 'p3-082',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group08',
    topic: 'einkommensteuer',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Was bedeutet „progressiver Steuertarif" bei der Einkommensteuer?',
      ar: 'ماذا يعني "معدل ضريبي تصاعدي" في ضريبة الدخل؟',
    },
    options: [
      { de: 'Je höher das Einkommen, desto höher der Steuersatz', ar: 'كلما ارتفع الدخل ارتفع معدل الضريبة' },
      { de: 'Alle zahlen den gleichen Prozentsatz', ar: 'يدفع الجميع نفس النسبة المئوية' },
      { de: 'Je höher das Einkommen, desto niedriger der Steuersatz', ar: 'كلما ارتفع الدخل انخفض معدل الضريبة' },
      { de: 'Der Steuersatz ändert sich jährlich', ar: 'يتغير معدل الضريبة سنويًا' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei einem progressiven Steuertarif steigt der Steuersatz mit zunehmendem Einkommen. In Deutschland liegt der Eingangssteuersatz bei 14 % und der Spitzensteuersatz bei 42 % (ab ca. 277.826 € bei 45 %).',
      ar: 'في المعدل الضريبي التصاعدي يرتفع معدل الضريبة مع زيادة الدخل. في ألمانيا يبلغ معدل الضريبة الابتدائي 14% والمعدل الأعلى 42% (ومن حوالي 277,826 يورو يبلغ 45%).',
    },
  },

  // ============================================================
  // GROUP 09 - Vertragsrecht (~12 questions)
  // ============================================================

  {
    id: 'p3-083',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group09',
    topic: 'kaufvertrag',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Wann kommt ein Kaufvertrag zustande?',
      ar: 'متى ينعقد عقد البيع؟',
    },
    options: [
      { de: 'Durch zwei übereinstimmende Willenserklärungen (Angebot und Annahme)', ar: 'من خلال إعلانين متطابقين للإرادة (العرض والقبول)' },
      { de: 'Durch die Lieferung der Ware', ar: 'من خلال تسليم البضاعة' },
      { de: 'Durch die Bezahlung des Preises', ar: 'من خلال دفع الثمن' },
      { de: 'Durch die schriftliche Bestätigung', ar: 'من خلال التأكيد الكتابي' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ein Kaufvertrag kommt durch zwei übereinstimmende Willenserklärungen zustande: Angebot (Antrag) und Annahme (§§ 145 ff. BGB). Schriftform ist grundsätzlich nicht erforderlich.',
      ar: 'ينعقد عقد البيع من خلال إعلانين متطابقين للإرادة: العرض (الطلب) والقبول (المواد 145 وما بعدها من القانون المدني). الشكل الكتابي ليس مطلوبًا من حيث المبدأ.',
    },
  },
  {
    id: 'p3-084',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group09',
    topic: 'angebot',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welche Angaben muss ein rechtlich bindendes Angebot (Antrag) mindestens enthalten?',
      ar: 'ما هي المعلومات التي يجب أن يتضمنها العرض الملزم قانونيًا كحد أدنى؟',
    },
    options: [
      { de: 'Art und Beschaffenheit der Ware, Menge und Preis', ar: 'نوع ووصف البضاعة والكمية والسعر' },
      { de: 'Nur den Preis', ar: 'السعر فقط' },
      { de: 'Nur die Lieferzeit', ar: 'وقت التسليم فقط' },
      { de: 'Nur den Namen des Verkäufers', ar: 'اسم البائع فقط' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ein bindendes Angebot muss mindestens die wesentlichen Vertragsbestandteile enthalten: Art und Beschaffenheit der Ware (Was?), Menge (Wie viel?) und Preis (Wie teuer?).',
      ar: 'يجب أن يتضمن العرض الملزم على الأقل العناصر الأساسية للعقد: نوع ووصف البضاعة (ماذا؟) والكمية (كم؟) والسعر (بكم؟).',
    },
  },
  {
    id: 'p3-085',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group09',
    topic: 'annahme',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Eine verspätete Annahme eines Angebots gilt als neues Angebot.',
      ar: 'يُعتبر القبول المتأخر للعرض بمثابة عرض جديد.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nach § 150 Abs. 1 BGB gilt die verspätete Annahme eines Angebots als neues Angebot. Der ursprüngliche Antragende kann dieses annehmen oder ablehnen.',
      ar: 'وفقًا للمادة 150 فقرة 1 من القانون المدني يُعتبر القبول المتأخر للعرض بمثابة عرض جديد. يمكن للعارض الأصلي قبوله أو رفضه.',
    },
  },
  {
    id: 'p3-086',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group09',
    topic: 'vertragsabschluss',
    difficulty: 'easy',
    type: 'flashcard',
    question: {
      de: 'Was sind die Voraussetzungen für einen gültigen Vertragsabschluss?',
      ar: 'ما هي شروط إبرام عقد صحيح؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Voraussetzungen: 1) Geschäftsfähigkeit beider Parteien, 2) Übereinstimmende Willenserklärungen (Angebot + Annahme), 3) Kein Verstoß gegen gesetzliche Verbote oder gute Sitten, 4) Ggf. Einhaltung der Formvorschriften.',
      ar: 'الشروط: 1) الأهلية القانونية لكلا الطرفين، 2) إعلانات إرادة متطابقة (عرض + قبول)، 3) عدم مخالفة المحظورات القانونية أو الأخلاق الحميدة، 4) الالتزام بمتطلبات الشكل إن وجدت.',
    },
  },
  {
    id: 'p3-087',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group09',
    topic: 'sachmangel',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Wann liegt ein Sachmangel vor?',
      ar: 'متى يوجد عيب في المنتج؟',
    },
    options: [
      { de: 'Wenn die Ware von der vereinbarten Beschaffenheit abweicht', ar: 'عندما تختلف البضاعة عن المواصفات المتفق عليها' },
      { de: 'Wenn die Ware zu spät geliefert wird', ar: 'عندما يتم تسليم البضاعة متأخرًا' },
      { de: 'Wenn die Rechnung zu hoch ist', ar: 'عندما تكون الفاتورة مرتفعة جدًا' },
      { de: 'Wenn der Verkäufer unfreundlich ist', ar: 'عندما يكون البائع غير ودود' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ein Sachmangel liegt nach § 434 BGB vor, wenn die Ware nicht die vereinbarte Beschaffenheit hat, sich nicht für die gewöhnliche Verwendung eignet oder nicht der Beschreibung entspricht.',
      ar: 'يوجد عيب في المنتج وفقًا للمادة 434 من القانون المدني عندما لا تتوفر في البضاعة المواصفات المتفق عليها أو لا تصلح للاستخدام العادي أو لا تتطابق مع الوصف.',
    },
  },
  {
    id: 'p3-088',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group09',
    topic: 'gewaehrleistung',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Wie lang ist die gesetzliche Gewährleistungsfrist bei Neuware?',
      ar: 'كم تبلغ مدة الضمان القانونية للبضائع الجديدة؟',
    },
    options: [
      { de: '2 Jahre ab Lieferung', ar: 'سنتان من تاريخ التسليم' },
      { de: '1 Jahr ab Lieferung', ar: 'سنة واحدة من تاريخ التسليم' },
      { de: '6 Monate ab Lieferung', ar: '6 أشهر من تاريخ التسليم' },
      { de: '5 Jahre ab Lieferung', ar: '5 سنوات من تاريخ التسليم' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die gesetzliche Gewährleistungsfrist (Verjährungsfrist) beträgt nach § 438 BGB bei Neuware 2 Jahre ab Übergabe der Ware. Bei Gebrauchtware kann sie auf 1 Jahr verkürzt werden.',
      ar: 'تبلغ مدة الضمان القانونية (مدة التقادم) وفقًا للمادة 438 من القانون المدني سنتين من تاريخ تسليم البضاعة الجديدة. بالنسبة للبضائع المستعملة يمكن تقصيرها إلى سنة واحدة.',
    },
  },
  {
    id: 'p3-089',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group09',
    topic: 'gewaehrleistung',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Welche Rechte hat der Käufer bei einem Sachmangel? (Reihenfolge der Gewährleistungsrechte)',
      ar: 'ما هي حقوق المشتري عند وجود عيب في المنتج؟ (ترتيب حقوق الضمان)',
    },
    options: [
      { de: 'Zunächst Nacherfüllung (Reparatur/Ersatzlieferung), dann Rücktritt, Minderung oder Schadensersatz', ar: 'أولاً الإصلاح اللاحق (إصلاح/تسليم بديل) ثم الانسحاب أو التخفيض أو التعويض' },
      { de: 'Sofort Rücktritt vom Vertrag', ar: 'الانسحاب الفوري من العقد' },
      { de: 'Nur Minderung des Kaufpreises', ar: 'تخفيض سعر الشراء فقط' },
      { de: 'Nur Schadensersatz', ar: 'التعويض فقط' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Käufer muss dem Verkäufer zunächst die Möglichkeit zur Nacherfüllung geben (§ 439 BGB). Erst wenn diese scheitert, kann er vom Vertrag zurücktreten, den Preis mindern oder Schadensersatz verlangen.',
      ar: 'يجب على المشتري أولاً منح البائع فرصة الإصلاح اللاحق (المادة 439). فقط عند فشلها يمكنه الانسحاب من العقد أو تخفيض السعر أو المطالبة بالتعويض.',
    },
  },
  {
    id: 'p3-090',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group09',
    topic: 'garantie',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Was ist der Unterschied zwischen Garantie und Gewährleistung?',
      ar: 'ما الفرق بين الكفالة والضمان القانوني؟',
    },
    options: [
      { de: 'Gewährleistung ist gesetzlich vorgeschrieben, Garantie ist eine freiwillige Leistung des Herstellers/Verkäufers', ar: 'الضمان القانوني منصوص عليه قانونيًا، الكفالة هي خدمة طوعية من المصنع/البائع' },
      { de: 'Es gibt keinen Unterschied', ar: 'لا يوجد فرق' },
      { de: 'Garantie ist gesetzlich vorgeschrieben, Gewährleistung ist freiwillig', ar: 'الكفالة منصوص عليها قانونيًا، الضمان القانوني طوعي' },
      { de: 'Garantie gilt nur für elektronische Geräte', ar: 'الكفالة تنطبق فقط على الأجهزة الإلكترونية' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Gewährleistung ist ein gesetzlicher Anspruch des Käufers (§§ 434 ff. BGB). Die Garantie ist eine freiwillige Zusatzleistung des Herstellers oder Verkäufers (§ 443 BGB).',
      ar: 'الضمان القانوني هو حق قانوني للمشتري (المواد 434 وما بعدها). الكفالة هي خدمة إضافية طوعية من المصنع أو البائع (المادة 443).',
    },
  },
  {
    id: 'p3-091',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group09',
    topic: 'widerrufsrecht',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Wie lang ist die Widerrufsfrist bei Fernabsatzverträgen (Online-Käufe)?',
      ar: 'كم تبلغ مهلة الإلغاء في عقود البيع عن بُعد (المشتريات عبر الإنترنت)؟',
    },
    options: [
      { de: '14 Tage nach Erhalt der Ware', ar: '14 يومًا بعد استلام البضاعة' },
      { de: '7 Tage nach Erhalt der Ware', ar: '7 أيام بعد استلام البضاعة' },
      { de: '30 Tage nach Erhalt der Ware', ar: '30 يومًا بعد استلام البضاعة' },
      { de: 'Es gibt kein Widerrufsrecht', ar: 'لا يوجد حق إلغاء' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Bei Fernabsatzverträgen (Online-Shopping, Telefonverkauf) hat der Verbraucher ein 14-tägiges Widerrufsrecht nach Erhalt der Ware (§ 355 BGB). Der Widerruf kann ohne Angabe von Gründen erfolgen.',
      ar: 'في عقود البيع عن بُعد (التسوق عبر الإنترنت والبيع الهاتفي) يحق للمستهلك حق الإلغاء خلال 14 يومًا من استلام البضاعة (المادة 355). يمكن الإلغاء بدون إبداء أسباب.',
    },
  },
  {
    id: 'p3-092',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group09',
    topic: 'kaufvertrag',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Welche Pflichten hat der Käufer aus einem Kaufvertrag?',
      ar: 'ما هي واجبات المشتري الناشئة عن عقد البيع؟',
    },
    options: [
      { de: 'Zahlung des Kaufpreises und Abnahme der Ware', ar: 'دفع سعر الشراء واستلام البضاعة' },
      { de: 'Nur die Zahlung des Kaufpreises', ar: 'دفع سعر الشراء فقط' },
      { de: 'Nur die Abnahme der Ware', ar: 'استلام البضاعة فقط' },
      { de: 'Werbung für das Produkt machen', ar: 'الدعاية للمنتج' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Der Käufer hat nach § 433 Abs. 2 BGB zwei Hauptpflichten: Zahlung des vereinbarten Kaufpreises und Abnahme der gekauften Sache.',
      ar: 'على المشتري وفقًا للمادة 433 فقرة 2 من القانون المدني واجبان رئيسيان: دفع سعر الشراء المتفق عليه واستلام البضاعة المشتراة.',
    },
  },
  {
    id: 'p3-093',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group09',
    topic: 'sachmangel',
    difficulty: 'hard',
    type: 'true-false',
    question: {
      de: 'Innerhalb der ersten 12 Monate nach Kauf wird bei einem Sachmangel vermutet, dass der Mangel schon bei Übergabe vorlag (Beweislastumkehr).',
      ar: 'خلال أول 12 شهرًا بعد الشراء يُفترض في حالة العيب أن العيب كان موجودًا عند التسليم (عكس عبء الإثبات).',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Seit 2022 gilt eine Beweislastumkehr von 12 Monaten (vorher 6 Monate): Tritt innerhalb von 12 Monaten ein Mangel auf, wird vermutet, dass er bereits bei Übergabe vorlag (§ 477 BGB).',
      ar: 'منذ 2022 ينطبق عكس عبء الإثبات لمدة 12 شهرًا (سابقًا 6 أشهر): إذا ظهر عيب خلال 12 شهرًا يُفترض أنه كان موجودًا عند التسليم (المادة 477).',
    },
  },
  {
    id: 'p3-094',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group09',
    topic: 'widerrufsrecht',
    difficulty: 'medium',
    type: 'flashcard',
    question: {
      de: 'Bei welchen Produkten ist das Widerrufsrecht bei Fernabsatzverträgen ausgeschlossen?',
      ar: 'في أي منتجات يكون حق الإلغاء مستبعدًا في عقود البيع عن بُعد؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Kein Widerrufsrecht besteht u. a. bei: verderblichen Waren, entsiegelter Software/DVDs, maßgefertigten Produkten, entsiegelten Hygieneartikeln und Zeitungen/Zeitschriften (§ 312g BGB).',
      ar: 'لا يوجد حق إلغاء من بين أمور أخرى في: البضائع القابلة للتلف والبرامج/أقراص DVD المفتوحة والمنتجات المصنعة حسب الطلب ومنتجات النظافة المفتوحة والصحف/المجلات.',
    },
  },

  // ============================================================
  // GROUP 10 - Personalwesen (~6 questions)
  // ============================================================

  {
    id: 'p3-095',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group10',
    topic: 'bewerbung',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Welche Bestandteile gehören zu einer vollständigen Bewerbung?',
      ar: 'ما هي المكونات التي تنتمي إلى طلب توظيف كامل؟',
    },
    options: [
      { de: 'Anschreiben, Lebenslauf und Zeugnisse', ar: 'خطاب التقديم والسيرة الذاتية والشهادات' },
      { de: 'Nur der Lebenslauf', ar: 'السيرة الذاتية فقط' },
      { de: 'Nur das Anschreiben', ar: 'خطاب التقديم فقط' },
      { de: 'Nur die Zeugnisse', ar: 'الشهادات فقط' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Eine vollständige Bewerbung besteht typischerweise aus: Anschreiben (Motivation), tabellarischem Lebenslauf und relevanten Zeugnissen/Zertifikaten.',
      ar: 'يتكون طلب التوظيف الكامل عادةً من: خطاب التقديم (الدافع) والسيرة الذاتية الجدولية والشهادات/الشهادات ذات الصلة.',
    },
  },
  {
    id: 'p3-096',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group10',
    topic: 'arbeitszeugnis',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welche zwei Arten von Arbeitszeugnissen gibt es?',
      ar: 'ما هما نوعا شهادات العمل؟',
    },
    options: [
      { de: 'Einfaches und qualifiziertes Arbeitszeugnis', ar: 'شهادة عمل بسيطة وشهادة عمل مفصلة' },
      { de: 'Positives und negatives Arbeitszeugnis', ar: 'شهادة عمل إيجابية وسلبية' },
      { de: 'Internes und externes Arbeitszeugnis', ar: 'شهادة عمل داخلية وخارجية' },
      { de: 'Vorläufiges und endgültiges Arbeitszeugnis', ar: 'شهادة عمل مؤقتة ونهائية' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Man unterscheidet das einfache Arbeitszeugnis (nur Art und Dauer der Tätigkeit) und das qualifizierte Arbeitszeugnis (zusätzlich Leistung und Verhalten). Jeder Arbeitnehmer hat Anspruch auf ein Arbeitszeugnis.',
      ar: 'يُميَّز بين شهادة العمل البسيطة (نوع ومدة النشاط فقط) وشهادة العمل المفصلة (بالإضافة إلى الأداء والسلوك). يحق لكل عامل الحصول على شهادة عمل.',
    },
  },
  {
    id: 'p3-097',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group10',
    topic: 'qualifiziertes-arbeitszeugnis',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Was bedeutet die Formulierung „Er/Sie hat die ihm/ihr übertragenen Aufgaben stets zu unserer vollen Zufriedenheit erledigt" in einem qualifizierten Arbeitszeugnis?',
      ar: 'ماذا تعني العبارة "لقد أنجز/أنجزت المهام الموكلة إليه/إليها دائمًا بما يرضينا تمامًا" في شهادة العمل المفصلة؟',
    },
    options: [
      { de: 'Note „Gut" (2)', ar: 'تقدير "جيد" (2)' },
      { de: 'Note „Sehr gut" (1)', ar: 'تقدير "ممتاز" (1)' },
      { de: 'Note „Befriedigend" (3)', ar: 'تقدير "مرضٍ" (3)' },
      { de: 'Note „Ausreichend" (4)', ar: 'تقدير "كافٍ" (4)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: '„Stets zu unserer vollen Zufriedenheit" entspricht der Note 2 (gut). „Stets zu unserer vollsten Zufriedenheit" wäre Note 1 (sehr gut). „Zu unserer vollen Zufriedenheit" wäre Note 3.',
      ar: '"دائمًا بما يرضينا تمامًا" يعادل التقدير 2 (جيد). "دائمًا بما يرضينا بالكامل" يعادل التقدير 1 (ممتاز). "بما يرضينا تمامًا" يعادل التقدير 3.',
    },
  },
  {
    id: 'p3-098',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group10',
    topic: 'fortbildung',
    difficulty: 'easy',
    type: 'flashcard',
    question: {
      de: 'Was ist der Unterschied zwischen Fortbildung und Weiterbildung?',
      ar: 'ما الفرق بين التدريب المهني المستمر والتعليم الإضافي؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Fortbildung baut auf dem erlernten Beruf auf und vertieft vorhandene Kenntnisse (z. B. Meisterprüfung, Fachwirt). Weiterbildung umfasst auch den Erwerb neuer, berufsübergreifender Qualifikationen (z. B. Sprachkurse, IT-Schulungen).',
      ar: 'التدريب المهني المستمر يبني على المهنة المتعلمة ويعمق المعرفة الموجودة (مثل امتحان الماجستير). التعليم الإضافي يشمل أيضًا اكتساب مؤهلات جديدة عابرة للمهن (مثل دورات اللغة وتدريب تكنولوجيا المعلومات).',
    },
  },
  {
    id: 'p3-099',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group10',
    topic: 'weiterbildung',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Der Arbeitgeber ist gesetzlich verpflichtet, alle Weiterbildungskosten seiner Mitarbeiter zu übernehmen.',
      ar: 'صاحب العمل ملزم قانونيًا بتحمل جميع تكاليف التعليم الإضافي لموظفيه.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [1],
    explanation: {
      de: 'Es gibt keine generelle gesetzliche Pflicht des Arbeitgebers, alle Weiterbildungskosten zu übernehmen. Allerdings gibt es in manchen Bundesländern Bildungsurlaubsgesetze und tarifvertragliche Regelungen.',
      ar: 'لا يوجد واجب قانوني عام على صاحب العمل لتحمل جميع تكاليف التعليم الإضافي. ومع ذلك توجد في بعض الولايات قوانين إجازة تعليمية وأحكام في الاتفاقيات الجماعية.',
    },
  },
  {
    id: 'p3-100',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group10',
    topic: 'bewerbung',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welche Frage ist in einem Vorstellungsgespräch grundsätzlich unzulässig?',
      ar: 'أي سؤال غير مسموح به من حيث المبدأ في مقابلة العمل؟',
    },
    options: [
      { de: 'Fragen nach einer bestehenden Schwangerschaft', ar: 'أسئلة عن الحمل' },
      { de: 'Fragen zur beruflichen Qualifikation', ar: 'أسئلة عن المؤهل المهني' },
      { de: 'Fragen zu bisherigen Arbeitgebern', ar: 'أسئلة عن أصحاب العمل السابقين' },
      { de: 'Fragen zur Berufserfahrung', ar: 'أسئلة عن الخبرة المهنية' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Fragen nach Schwangerschaft, Religionszugehörigkeit, Familienplanung oder politischer Einstellung sind im Vorstellungsgespräch grundsätzlich unzulässig (AGG). Der Bewerber darf hier sogar lügen.',
      ar: 'أسئلة عن الحمل والانتماء الديني وتنظيم الأسرة أو الميول السياسية غير مسموح بها من حيث المبدأ في مقابلة العمل (قانون المساواة). يحق للمتقدم حتى الكذب هنا.',
    },
  },

  // ============================================================
  // GROUP 11 - Datenschutz (~5 questions)
  // ============================================================

  {
    id: 'p3-101',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group11',
    topic: 'dsgvo',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Wofür steht die Abkürzung DSGVO?',
      ar: 'ما الذي يرمز إليه الاختصار DSGVO؟',
    },
    options: [
      { de: 'Datenschutz-Grundverordnung', ar: 'اللائحة العامة لحماية البيانات' },
      { de: 'Datensammlung-Grundverordnung', ar: 'اللائحة الأساسية لجمع البيانات' },
      { de: 'Digitale Sicherheits-Grundverordnung', ar: 'اللائحة الأساسية للأمن الرقمي' },
      { de: 'Datenspeicher-Grundverordnung', ar: 'اللائحة الأساسية لتخزين البيانات' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die DSGVO (Datenschutz-Grundverordnung) ist eine EU-Verordnung, die seit Mai 2018 den Schutz personenbezogener Daten in der EU regelt.',
      ar: 'اللائحة العامة لحماية البيانات هي لائحة أوروبية تنظم حماية البيانات الشخصية في الاتحاد الأوروبي منذ مايو 2018.',
    },
  },
  {
    id: 'p3-102',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group11',
    topic: 'datenschutz',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Ab wann muss ein Unternehmen einen Datenschutzbeauftragten benennen?',
      ar: 'متى يجب على الشركة تعيين مسؤول حماية بيانات؟',
    },
    options: [
      { de: 'Wenn regelmäßig mindestens 20 Personen mit automatisierter Datenverarbeitung beschäftigt sind', ar: 'عندما يعمل بشكل منتظم 20 شخصًا على الأقل في معالجة البيانات الآلية' },
      { de: 'Ab dem ersten Mitarbeiter', ar: 'من أول موظف' },
      { de: 'Erst ab 100 Mitarbeitern', ar: 'فقط من 100 موظف' },
      { de: 'Nur börsennotierte Unternehmen', ar: 'الشركات المدرجة في البورصة فقط' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nach § 38 BDSG muss ein Datenschutzbeauftragter benannt werden, wenn mindestens 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind.',
      ar: 'وفقًا للمادة 38 من قانون حماية البيانات الاتحادي يجب تعيين مسؤول حماية بيانات عندما يعمل 20 شخصًا على الأقل بشكل مستمر في المعالجة الآلية للبيانات الشخصية.',
    },
  },
  {
    id: 'p3-103',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group11',
    topic: 'persoenliche-daten',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Was sind personenbezogene Daten im Sinne der DSGVO?',
      ar: 'ما هي البيانات الشخصية بمعنى اللائحة العامة لحماية البيانات؟',
    },
    options: [
      { de: 'Alle Informationen, die sich auf eine identifizierbare natürliche Person beziehen', ar: 'جميع المعلومات التي تتعلق بشخص طبيعي يمكن تحديد هويته' },
      { de: 'Nur Name und Adresse', ar: 'الاسم والعنوان فقط' },
      { de: 'Nur Bankdaten', ar: 'البيانات البنكية فقط' },
      { de: 'Nur Gesundheitsdaten', ar: 'البيانات الصحية فقط' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Personenbezogene Daten sind nach Art. 4 Nr. 1 DSGVO alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z. B. Name, E-Mail, IP-Adresse, Standortdaten).',
      ar: 'البيانات الشخصية وفقًا للمادة 4 رقم 1 من اللائحة هي جميع المعلومات المتعلقة بشخص طبيعي محدد الهوية أو يمكن تحديد هويته (مثل الاسم والبريد الإلكتروني وعنوان IP وبيانات الموقع).',
    },
  },
  {
    id: 'p3-104',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group11',
    topic: 'datensicherheit',
    difficulty: 'medium',
    type: 'flashcard',
    question: {
      de: 'Was ist der Unterschied zwischen Datenschutz und Datensicherheit?',
      ar: 'ما الفرق بين حماية البيانات وأمن البيانات؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Datenschutz schützt Personen vor dem Missbrauch ihrer personenbezogenen Daten (rechtlicher Aspekt). Datensicherheit umfasst technische und organisatorische Maßnahmen zum Schutz aller Daten vor Verlust, Manipulation und unberechtigtem Zugriff (technischer Aspekt).',
      ar: 'حماية البيانات تحمي الأشخاص من إساءة استخدام بياناتهم الشخصية (الجانب القانوني). أمن البيانات يشمل الإجراءات التقنية والتنظيمية لحماية جميع البيانات من الفقدان والتلاعب والوصول غير المصرح به (الجانب التقني).',
    },
  },
  {
    id: 'p3-105',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group11',
    topic: 'dsgvo',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Welches Recht hat eine betroffene Person nach der DSGVO NICHT?',
      ar: 'أي حق لا يملكه الشخص المعني وفقًا للائحة العامة لحماية البيانات؟',
    },
    options: [
      { de: 'Recht auf kostenlosen Internetzugang', ar: 'الحق في الوصول المجاني للإنترنت' },
      { de: 'Recht auf Auskunft (Art. 15)', ar: 'حق الاستعلام (المادة 15)' },
      { de: 'Recht auf Löschung (Art. 17)', ar: 'حق الحذف (المادة 17)' },
      { de: 'Recht auf Datenübertragbarkeit (Art. 20)', ar: 'حق نقل البيانات (المادة 20)' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die DSGVO gewährt u. a. Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Ein Recht auf kostenlosen Internetzugang gehört nicht dazu.',
      ar: 'تمنح اللائحة من بين أمور أخرى حق الاستعلام والتصحيح والحذف والتقييد ونقل البيانات والاعتراض. الحق في الوصول المجاني للإنترنت ليس من بينها.',
    },
  },

  // ============================================================
  // GROUP 12 - Nachhaltigkeit (~4 questions)
  // ============================================================

  {
    id: 'p3-106',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group12',
    topic: 'nachhaltigkeit',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Welche drei Dimensionen umfasst das Konzept der Nachhaltigkeit?',
      ar: 'ما هي الأبعاد الثلاثة التي يشملها مفهوم الاستدامة؟',
    },
    options: [
      { de: 'Ökonomie, Ökologie und Soziales', ar: 'الاقتصاد والبيئة والمجتمع' },
      { de: 'Politik, Wirtschaft und Technik', ar: 'السياسة والاقتصاد والتكنولوجيا' },
      { de: 'Produktion, Vertrieb und Marketing', ar: 'الإنتاج والتوزيع والتسويق' },
      { de: 'Planung, Umsetzung und Kontrolle', ar: 'التخطيط والتنفيذ والمراقبة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Nachhaltigkeit basiert auf drei Säulen: Ökonomie (wirtschaftliche Leistungsfähigkeit), Ökologie (Umweltschutz) und Soziales (soziale Gerechtigkeit). Man spricht vom „Drei-Säulen-Modell".',
      ar: 'تقوم الاستدامة على ثلاث ركائز: الاقتصاد (القدرة الاقتصادية) والبيئة (حماية البيئة) والمجتمع (العدالة الاجتماعية). يُسمى "نموذج الركائز الثلاث".',
    },
  },
  {
    id: 'p3-107',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group12',
    topic: 'umweltpolitik',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welches Prinzip besagt, dass der Verursacher von Umweltschäden die Kosten tragen muss?',
      ar: 'أي مبدأ ينص على أن المتسبب في الأضرار البيئية يجب أن يتحمل التكاليف؟',
    },
    options: [
      { de: 'Verursacherprinzip', ar: 'مبدأ المتسبب (الملوث يدفع)' },
      { de: 'Gemeinlastprinzip', ar: 'مبدأ العبء المشترك' },
      { de: 'Vorsorgeprinzip', ar: 'مبدأ الاحتياط' },
      { de: 'Kooperationsprinzip', ar: 'مبدأ التعاون' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Das Verursacherprinzip (Polluter-Pays-Principle) besagt, dass derjenige die Kosten für Umweltschäden tragen muss, der sie verursacht hat. Es ist ein Grundprinzip der deutschen Umweltpolitik.',
      ar: 'مبدأ المتسبب (الملوث يدفع) ينص على أن من تسبب في الأضرار البيئية يجب أن يتحمل تكاليفها. وهو مبدأ أساسي في السياسة البيئية الألمانية.',
    },
  },
  {
    id: 'p3-108',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group12',
    topic: 'energiepolitik',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Die Energiewende in Deutschland hat zum Ziel, die Energieversorgung auf erneuerbare Energien umzustellen.',
      ar: 'يهدف تحول الطاقة في ألمانيا إلى تحويل إمدادات الطاقة إلى مصادر الطاقة المتجددة.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Energiewende zielt auf den Ausbau erneuerbarer Energien (Wind, Solar, Biomasse), den Ausstieg aus der Kernenergie und die Reduzierung von CO₂-Emissionen ab.',
      ar: 'يهدف تحول الطاقة إلى توسيع مصادر الطاقة المتجددة (الرياح والطاقة الشمسية والكتلة الحيوية) والتخلي عن الطاقة النووية وتقليل انبعاثات ثاني أكسيد الكربون.',
    },
  },
  {
    id: 'p3-109',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group12',
    topic: 'nachhaltigkeit',
    difficulty: 'medium',
    type: 'flashcard',
    question: {
      de: 'Was versteht man unter Corporate Social Responsibility (CSR)?',
      ar: 'ما المقصود بالمسؤولية الاجتماعية للشركات؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'CSR bezeichnet die freiwillige gesellschaftliche Verantwortung von Unternehmen über gesetzliche Anforderungen hinaus. Dazu gehören faire Arbeitsbedingungen, Umweltschutz, gesellschaftliches Engagement und ethisches Wirtschaften.',
      ar: 'تشير المسؤولية الاجتماعية للشركات إلى المسؤولية المجتمعية الطوعية للشركات بما يتجاوز المتطلبات القانونية. وتشمل ظروف عمل عادلة وحماية البيئة والمشاركة المجتمعية والاقتصاد الأخلاقي.',
    },
  },

  // ============================================================
  // GROUP 13 - International trade (~4 questions)
  // ============================================================

  {
    id: 'p3-110',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group13',
    topic: 'import-handel',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Was versteht man unter Import?',
      ar: 'ما المقصود بالاستيراد؟',
    },
    options: [
      { de: 'Einfuhr von Waren und Dienstleistungen aus dem Ausland', ar: 'استيراد السلع والخدمات من الخارج' },
      { de: 'Ausfuhr von Waren ins Ausland', ar: 'تصدير السلع إلى الخارج' },
      { de: 'Handel innerhalb eines Landes', ar: 'التجارة داخل البلد' },
      { de: 'Lagerung von Waren im Zollgebiet', ar: 'تخزين البضائع في المنطقة الجمركية' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Import bezeichnet die Einfuhr von Waren und Dienstleistungen aus dem Ausland in das Inland. Das Gegenteil ist der Export (Ausfuhr).',
      ar: 'يشير الاستيراد إلى إدخال السلع والخدمات من الخارج إلى الداخل. العكس هو التصدير.',
    },
  },
  {
    id: 'p3-111',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group13',
    topic: 'export-handel',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'Deutschland ist eine der größten Exportnationen der Welt.',
      ar: 'ألمانيا هي واحدة من أكبر الدول المصدرة في العالم.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Deutschland gehört zu den weltweit führenden Exportnationen. Wichtige Exportgüter sind Kraftfahrzeuge, Maschinen, chemische Erzeugnisse und Elektrotechnik.',
      ar: 'ألمانيا من بين الدول الرائدة عالميًا في التصدير. وتشمل السلع التصديرية المهمة السيارات والآلات والمنتجات الكيميائية والهندسة الكهربائية.',
    },
  },
  {
    id: 'p3-112',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group13',
    topic: 'zoll',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Was ist die Hauptfunktion von Zöllen?',
      ar: 'ما هي الوظيفة الرئيسية للرسوم الجمركية؟',
    },
    options: [
      { de: 'Schutz der heimischen Wirtschaft und Einnahmen für den Staat', ar: 'حماية الاقتصاد المحلي وإيرادات للدولة' },
      { de: 'Förderung des freien Handels', ar: 'تشجيع التجارة الحرة' },
      { de: 'Kontrolle der Arbeitslosenquote', ar: 'السيطرة على معدل البطالة' },
      { de: 'Regulierung der Geldmenge', ar: 'تنظيم كمية النقود' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Zölle dienen dem Schutz inländischer Produzenten vor billigerer Importkonkurrenz (Schutzzoll) und der Erzielung von Staatseinnahmen (Finanzzoll). Innerhalb der EU gibt es keine Binnenzölle.',
      ar: 'تهدف الرسوم الجمركية إلى حماية المنتجين المحليين من المنافسة الأرخص من الواردات (رسوم حماية) وتحقيق إيرادات للدولة (رسوم مالية). داخل الاتحاد الأوروبي لا توجد رسوم جمركية داخلية.',
    },
  },
  {
    id: 'p3-113',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group13',
    topic: 'export-handel',
    difficulty: 'medium',
    type: 'flashcard',
    question: {
      de: 'Was ist die Handelsbilanz?',
      ar: 'ما هو الميزان التجاري؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Die Handelsbilanz stellt den Wert der Warenexporte dem Wert der Warenimporte gegenüber. Übersteigen die Exporte die Importe, liegt ein Handelsbilanzüberschuss vor (positiv). Im umgekehrten Fall ein Defizit.',
      ar: 'يقارن الميزان التجاري قيمة صادرات السلع بقيمة واردات السلع. إذا تجاوزت الصادرات الواردات يوجد فائض في الميزان التجاري (إيجابي). في الحالة المعاكسة يوجد عجز.',
    },
  },

  // ============================================================
  // GROUP 14 - Digital economy (~4 questions)
  // ============================================================

  {
    id: 'p3-114',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group14',
    topic: 'digitalisierung',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Was versteht man unter Digitalisierung in der Wirtschaft?',
      ar: 'ما المقصود بالرقمنة في الاقتصاد؟',
    },
    options: [
      { de: 'Die Umwandlung analoger Prozesse und Geschäftsmodelle in digitale Formate', ar: 'تحويل العمليات ونماذج الأعمال التناظرية إلى صيغ رقمية' },
      { de: 'Nur den Kauf von Computern', ar: 'شراء الحواسيب فقط' },
      { de: 'Die Abschaffung aller Papiere', ar: 'إلغاء جميع الأوراق' },
      { de: 'Die Einführung von E-Mail', ar: 'إدخال البريد الإلكتروني' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Digitalisierung umfasst die umfassende Umwandlung analoger Prozesse, Produkte und Geschäftsmodelle mithilfe digitaler Technologien. Sie betrifft alle Bereiche der Wirtschaft und Gesellschaft.',
      ar: 'تشمل الرقمنة التحويل الشامل للعمليات والمنتجات ونماذج الأعمال التناظرية باستخدام التقنيات الرقمية. وتؤثر على جميع مجالات الاقتصاد والمجتمع.',
    },
  },
  {
    id: 'p3-115',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group14',
    topic: 'automatisierung',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welchen Vorteil bringt die Automatisierung von Geschäftsprozessen?',
      ar: 'ما الميزة التي توفرها أتمتة العمليات التجارية؟',
    },
    options: [
      { de: 'Effizienzsteigerung und Reduzierung von Fehlerquoten', ar: 'زيادة الكفاءة وتقليل معدلات الأخطاء' },
      { de: 'Erhöhung der Mitarbeiterzahl', ar: 'زيادة عدد الموظفين' },
      { de: 'Verlangsamung der Prozesse', ar: 'إبطاء العمليات' },
      { de: 'Steigerung der Papiernutzung', ar: 'زيادة استخدام الورق' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Automatisierung steigert die Effizienz, reduziert Fehler, senkt Kosten und erhöht die Geschwindigkeit von Prozessen. Sie kann aber auch zum Wegfall von Arbeitsplätzen führen.',
      ar: 'تزيد الأتمتة الكفاءة وتقلل الأخطاء وتخفض التكاليف وتزيد سرعة العمليات. لكنها قد تؤدي أيضًا إلى فقدان فرص العمل.',
    },
  },
  {
    id: 'p3-116',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group14',
    topic: 'industrie-4-0',
    difficulty: 'medium',
    type: 'flashcard',
    question: {
      de: 'Was versteht man unter Industrie 4.0?',
      ar: 'ما المقصود بالصناعة 4.0؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Industrie 4.0 bezeichnet die vierte industrielle Revolution: die Vernetzung von Maschinen, Anlagen und Produkten durch das Internet der Dinge (IoT), Cyber-physische Systeme und künstliche Intelligenz. Ziel ist die „Smart Factory" mit autonomer, flexibler Produktion.',
      ar: 'تشير الصناعة 4.0 إلى الثورة الصناعية الرابعة: ربط الآلات والمنشآت والمنتجات عبر إنترنت الأشياء والأنظمة السيبرانية الفيزيائية والذكاء الاصطناعي. الهدف هو "المصنع الذكي" بإنتاج مستقل ومرن.',
    },
  },
  {
    id: 'p3-117',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group14',
    topic: 'digitalisierung',
    difficulty: 'hard',
    type: 'true-false',
    question: {
      de: 'Die Digitalisierung erfordert von Arbeitnehmern verstärkt Kompetenzen in den Bereichen IT, Datenanalyse und lebenslanges Lernen.',
      ar: 'تتطلب الرقمنة من العمال كفاءات متزايدة في مجالات تكنولوجيا المعلومات وتحليل البيانات والتعلم مدى الحياة.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Digitalisierung verändert Berufsbilder und erfordert neue Kompetenzen: Medienkompetenz, Datenanalyse, IT-Kenntnisse und die Bereitschaft zum lebenslangen Lernen werden immer wichtiger.',
      ar: 'تغير الرقمنة الصور المهنية وتتطلب كفاءات جديدة: محو الأمية الرقمية وتحليل البيانات ومعرفة تكنولوجيا المعلومات والاستعداد للتعلم مدى الحياة تصبح أكثر أهمية.',
    },
  },

  // ============================================================
  // GROUP 15 - Accounting (~6 questions)
  // ============================================================

  {
    id: 'p3-118',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group15',
    topic: 'einnahmen',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: {
      de: 'Was sind Einnahmen im betriebswirtschaftlichen Sinne?',
      ar: 'ما هي الإيرادات بالمعنى الاقتصادي التجاري؟',
    },
    options: [
      { de: 'Geldzuflüsse, die das Geldvermögen eines Unternehmens erhöhen', ar: 'تدفقات نقدية تزيد من الذمة المالية للشركة' },
      { de: 'Nur Bargeldeinnahmen', ar: 'الإيرادات النقدية فقط' },
      { de: 'Nur Umsatzerlöse', ar: 'عائدات المبيعات فقط' },
      { de: 'Nur Zinserträge', ar: 'عوائد الفوائد فقط' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Einnahmen sind alle Geldzuflüsse, die das Geldvermögen erhöhen. Sie umfassen Umsatzerlöse, Zinserträge, Mieteinnahmen, Provisionen und sonstige Erträge.',
      ar: 'الإيرادات هي جميع التدفقات النقدية التي تزيد من الذمة المالية. وتشمل عائدات المبيعات وعوائد الفوائد وإيرادات الإيجار والعمولات والعوائد الأخرى.',
    },
  },
  {
    id: 'p3-119',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group15',
    topic: 'ausgaben',
    difficulty: 'easy',
    type: 'true-false',
    question: {
      de: 'Ausgaben sind Geldabflüsse, die das Geldvermögen eines Unternehmens verringern.',
      ar: 'المصروفات هي تدفقات نقدية صادرة تقلل من الذمة المالية للشركة.',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Ausgaben verringern das Geldvermögen des Unternehmens. Sie entstehen z. B. durch den Kauf von Material, Zahlung von Löhnen, Miete oder Tilgung von Krediten.',
      ar: 'تقلل المصروفات من الذمة المالية للشركة. وتنشأ مثلاً من شراء المواد ودفع الأجور والإيجار وسداد القروض.',
    },
  },
  {
    id: 'p3-120',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group15',
    topic: 'bilanz',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Was zeigt die Bilanz eines Unternehmens?',
      ar: 'ماذا تُظهر ميزانية الشركة؟',
    },
    options: [
      { de: 'Die Gegenüberstellung von Vermögen (Aktiva) und Kapital (Passiva) zu einem Stichtag', ar: 'مقارنة الأصول (الأصول) ورأس المال (الخصوم) في تاريخ محدد' },
      { de: 'Nur die Einnahmen und Ausgaben', ar: 'الإيرادات والمصروفات فقط' },
      { de: 'Nur die Schulden', ar: 'الديون فقط' },
      { de: 'Die Umsatzentwicklung über 5 Jahre', ar: 'تطور الإيرادات على مدى 5 سنوات' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Bilanz stellt das Vermögen (Aktiva: Mittelverwendung) dem Kapital (Passiva: Mittelherkunft) gegenüber. Sie ist eine Momentaufnahme der Vermögenslage zu einem bestimmten Stichtag.',
      ar: 'تقارن الميزانية الأصول (جانب الأصول: استخدام الموارد) برأس المال (جانب الخصوم: مصدر الموارد). وهي لقطة للوضع المالي في تاريخ محدد.',
    },
  },
  {
    id: 'p3-121',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group15',
    topic: 'bilanz',
    difficulty: 'medium',
    type: 'true-false',
    question: {
      de: 'In der Bilanz müssen Aktiva und Passiva immer den gleichen Wert haben (Bilanzgleichung).',
      ar: 'في الميزانية يجب أن تتساوى الأصول والخصوم دائمًا (معادلة الميزانية).',
    },
    options: [
      { de: 'Richtig', ar: 'صحيح' },
      { de: 'Falsch', ar: 'خطأ' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Bilanzgleichung besagt: Aktiva = Passiva. Die Summe des Vermögens (Mittelverwendung) muss immer der Summe des Kapitals (Mittelherkunft) entsprechen.',
      ar: 'تنص معادلة الميزانية على: الأصول = الخصوم. يجب أن يتساوى إجمالي الأصول (استخدام الموارد) دائمًا مع إجمالي رأس المال (مصدر الموارد).',
    },
  },
  {
    id: 'p3-122',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group15',
    topic: 'abschreibung',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Was ist der Zweck von Abschreibungen in der Buchhaltung?',
      ar: 'ما هو الغرض من الإهلاك في المحاسبة؟',
    },
    options: [
      { de: 'Verteilung der Anschaffungskosten eines Wirtschaftsguts auf die Nutzungsdauer', ar: 'توزيع تكاليف اقتناء الأصل على مدة الاستخدام' },
      { de: 'Sofortige Erfassung aller Kosten im Kaufjahr', ar: 'تسجيل جميع التكاليف فورًا في سنة الشراء' },
      { de: 'Erhöhung des Unternehmensgewinns', ar: 'زيادة ربح الشركة' },
      { de: 'Berechnung der Umsatzsteuer', ar: 'حساب ضريبة القيمة المضافة' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Abschreibungen verteilen die Anschaffungs- oder Herstellungskosten eines Wirtschaftsguts planmäßig über die betriebsgewöhnliche Nutzungsdauer. Sie bilden den Werteverzehr ab.',
      ar: 'يوزع الإهلاك تكاليف اقتناء أو إنتاج الأصل بشكل منتظم على مدة الاستخدام المعتادة في المنشأة. ويعكس استهلاك القيمة.',
    },
  },
  {
    id: 'p3-123',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group15',
    topic: 'abschreibung',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: {
      de: 'Ein Computer wird für 3.000 € angeschafft und über 3 Jahre linear abgeschrieben. Wie hoch ist die jährliche Abschreibung?',
      ar: 'تم شراء حاسوب بمبلغ 3,000 يورو ويتم إهلاكه خطيًا على مدى 3 سنوات. كم يبلغ الإهلاك السنوي؟',
    },
    options: [
      { de: '1.000 € pro Jahr', ar: '1,000 يورو سنويًا' },
      { de: '500 € pro Jahr', ar: '500 يورو سنويًا' },
      { de: '1.500 € pro Jahr', ar: '1,500 يورو سنويًا' },
      { de: '3.000 € im ersten Jahr', ar: '3,000 يورو في السنة الأولى' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Lineare Abschreibung = Anschaffungskosten / Nutzungsdauer = 3.000 € / 3 Jahre = 1.000 € pro Jahr. Der Abschreibungssatz beträgt 33,33 % pro Jahr.',
      ar: 'الإهلاك الخطي = تكاليف الاقتناء / مدة الاستخدام = 3,000 / 3 سنوات = 1,000 يورو سنويًا. معدل الإهلاك 33.33% سنويًا.',
    },
  },
  {
    id: 'p3-124',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group15',
    topic: 'einnahmen',
    difficulty: 'medium',
    type: 'flashcard',
    question: {
      de: 'Was ist der Unterschied zwischen Einnahmen und Erträgen?',
      ar: 'ما الفرق بين الإيرادات النقدية والعوائد؟',
    },
    options: [],
    correctAnswers: [],
    explanation: {
      de: 'Einnahmen erhöhen das Geldvermögen (z. B. Zahlungseingänge, Forderungen). Erträge erhöhen das Reinvermögen und sind der Gegenbegriff zu Aufwendungen. Nicht jede Einnahme ist ein Ertrag (z. B. Kreditaufnahme = Einnahme, aber kein Ertrag).',
      ar: 'الإيرادات النقدية تزيد الذمة المالية (مثل المقبوضات والمستحقات). العوائد تزيد صافي الأصول وهي المقابل للمصروفات. ليست كل إيرادات نقدية عوائد (مثل الحصول على قرض = إيراد نقدي لكن ليس عائدًا).',
    },
  },
  {
    id: 'p3-125',
    exam: 'ap2',
    part: 'part3',
    topicGroup: 'group15',
    topic: 'ausgaben',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: {
      de: 'Welcher der folgenden Posten ist eine Ausgabe, aber kein Aufwand?',
      ar: 'أي من البنود التالية يُعد مصروفًا نقديًا ولكن ليس تكلفة؟',
    },
    options: [
      { de: 'Tilgung eines Bankkredits', ar: 'سداد قرض بنكي' },
      { de: 'Gehaltszahlung an Mitarbeiter', ar: 'دفع رواتب الموظفين' },
      { de: 'Mietzahlung für Büroräume', ar: 'دفع إيجار المكاتب' },
      { de: 'Kauf von Büromaterial', ar: 'شراء مستلزمات المكتب' },
    ],
    correctAnswers: [0],
    explanation: {
      de: 'Die Tilgung eines Kredits ist eine Ausgabe (Geldabfluss), aber kein Aufwand, da sie das Reinvermögen nicht verringert – es werden nur Schulden abgebaut.',
      ar: 'سداد القرض هو مصروف نقدي (تدفق نقدي صادر) لكنه ليس تكلفة لأنه لا يقلل صافي الأصول - بل يتم فقط تقليل الديون.',
    },
  },
];
