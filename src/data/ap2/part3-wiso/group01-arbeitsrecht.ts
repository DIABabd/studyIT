import type { TopicGroup } from '../../../types';

export const arbeitsrecht: TopicGroup = {
  id: 'group01-arbeitsrecht',
  name: {
    de: 'Arbeitsrecht',
    ar: 'قانون العمل',
  },
  description: {
    de: 'Grundlagen des Arbeitsrechts: Arbeitsverträge, Kündigungsschutz, Tarifrecht und Betriebsvereinbarungen',
    ar: 'أساسيات قانون العمل: عقود العمل، حماية الفصل، قانون التعرفة واتفاقيات العمل',
  },
  topics: [
    {
      id: 'arbeitsvertrag',
      name: { de: 'Arbeitsvertrag', ar: 'عقد العمل' },
      content: {
        definition: {
          de: 'Ein Arbeitsvertrag ist eine schriftliche oder mündliche Vereinbarung zwischen Arbeitgeber und Arbeitnehmer, die die wesentlichen Arbeitsbedingungen regelt. Er begründet ein Arbeitsverhältnis und unterliegt dem Nachweisgesetz (NachwG), wonach der Arbeitgeber die wesentlichen Vertragsbedingungen spätestens einen Monat nach Beginn des Arbeitsverhältnisses schriftlich niederlegen muss.',
          ar: 'عقد العمل هو اتفاق خطي أو شفهي بين صاحب العمل والموظف ينظم شروط العمل الأساسية. يؤسس علاقة عمل ويخضع لقانون الإثبات (NachwG)، الذي يلزم صاحب العمل بتوثيق شروط العقد الأساسية كتابياً خلال شهر واحد من بداية علاقة العمل على الأكثر.',
        },
        keyPoints: [
          {
            de: 'Mindestinhalte: Name und Anschrift der Vertragsparteien, Beginn des Arbeitsverhältnisses, Arbeitsort, Tätigkeitsbeschreibung, Vergütung, Arbeitszeit, Urlaubsanspruch und Kündigungsfristen',
            ar: 'الحد الأدنى من المحتويات: اسم وعنوان أطراف العقد، بداية علاقة العمل، مكان العمل، وصف المهام، الأجر، ساعات العمل، حق الإجازة ومهل الإنهاء',
          },
          {
            de: 'Der Arbeitsvertrag kann befristet oder unbefristet sein und unterliegt den Regelungen des BGB (§§ 611a ff.) sowie dem Teilzeit- und Befristungsgesetz (TzBfG)',
            ar: 'يمكن أن يكون عقد العمل محدد المدة أو غير محدد المدة ويخضع لأحكام القانون المدني (§§ 611a وما يليه) وكذلك قانون الدوام الجزئي والعقود المحددة المدة (TzBfG)',
          },
          {
            de: 'Formfreiheit: Ein Arbeitsvertrag kann grundsätzlich auch mündlich geschlossen werden, allerdings muss der Arbeitgeber die wesentlichen Bedingungen schriftlich bestätigen',
            ar: 'حرية الشكل: يمكن من حيث المبدأ إبرام عقد العمل شفهياً أيضاً، لكن يجب على صاحب العمل تأكيد الشروط الأساسية كتابياً',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Unternehmen stellt einen Fachinformatiker ein und schließt einen Arbeitsvertrag ab, der Gehalt (3.500 € brutto), Arbeitszeit (40 Stunden/Woche), 30 Tage Urlaub und eine 6-monatige Probezeit festlegt.',
            ar: 'تقوم شركة تكنولوجيا معلومات بتوظيف فني معلومات وإبرام عقد عمل يحدد الراتب (3,500 يورو إجمالي)، وقت العمل (40 ساعة/أسبوع)، 30 يوم إجازة وفترة تجريبية مدتها 6 أشهر.',
          },
          {
            de: 'Eine Auszubildende unterschreibt einen Ausbildungsvertrag, der neben der Vergütung auch die Ausbildungsinhalte und die Berufsschulpflicht regelt.',
            ar: 'تُوقّع متدربة عقد تدريب ينظم بالإضافة إلى الأجر أيضاً محتويات التدريب والتزام الحضور في المدرسة المهنية.',
          },
        ],
        examRelevance: {
          de: 'Der Arbeitsvertrag ist ein Kernthema in der WiSo-Prüfung. Häufige Fragen betreffen die Mindestinhalte, den Unterschied zwischen befristeten und unbefristeten Verträgen sowie die Formvorschriften.',
          ar: 'عقد العمل هو موضوع أساسي في امتحان WiSo. الأسئلة الشائعة تتعلق بالحد الأدنى من المحتويات، والفرق بين العقود المحددة وغير المحددة المدة وكذلك متطلبات الشكل.',
        },
        summary: {
          de: 'Der Arbeitsvertrag regelt die wesentlichen Bedingungen eines Arbeitsverhältnisses. Er kann mündlich oder schriftlich geschlossen werden, muss aber nach dem Nachweisgesetz schriftlich dokumentiert werden.',
          ar: 'ينظم عقد العمل الشروط الأساسية لعلاقة العمل. يمكن إبرامه شفهياً أو كتابياً، لكن يجب توثيقه كتابياً وفقاً لقانون الإثبات.',
        },
      },
    },
    {
      id: 'rechte-pflichten-arbeitnehmer',
      name: { de: 'Rechte und Pflichten Arbeitnehmer', ar: 'حقوق وواجبات الموظف' },
      content: {
        definition: {
          de: 'Arbeitnehmer haben im Arbeitsverhältnis sowohl Rechte als auch Pflichten. Die Hauptpflicht ist die Erbringung der Arbeitsleistung. Daneben bestehen Nebenpflichten wie Treuepflicht, Verschwiegenheitspflicht und Sorgfaltspflicht. Zu den Rechten zählen der Lohnanspruch, Urlaubsanspruch und das Recht auf ein Arbeitszeugnis.',
          ar: 'للموظفين في علاقة العمل حقوق وواجبات على حد سواء. الواجب الرئيسي هو تقديم أداء العمل. بالإضافة إلى ذلك هناك واجبات ثانوية مثل واجب الإخلاص وواجب السرية وواجب العناية. تشمل الحقوق الحق في الأجر وحق الإجازة والحق في شهادة عمل.',
        },
        keyPoints: [
          {
            de: 'Hauptpflicht: Persönliche Erbringung der vereinbarten Arbeitsleistung am festgelegten Arbeitsort und zur vereinbarten Arbeitszeit',
            ar: 'الواجب الرئيسي: تقديم أداء العمل المتفق عليه شخصياً في مكان العمل المحدد وفي وقت العمل المتفق عليه',
          },
          {
            de: 'Nebenpflichten: Treuepflicht (keine Konkurrenztätigkeit), Verschwiegenheitspflicht (Betriebsgeheimnisse), Sorgfaltspflicht (sorgsamer Umgang mit Arbeitsmitteln)',
            ar: 'الواجبات الثانوية: واجب الإخلاص (عدم العمل لدى المنافسين)، واجب السرية (أسرار العمل)، واجب العناية (التعامل الحذر مع أدوات العمل)',
          },
          {
            de: 'Rechte: Anspruch auf Vergütung, bezahlten Urlaub (mindestens 20 Tage bei 5-Tage-Woche), Entgeltfortzahlung im Krankheitsfall, Arbeitszeugnis',
            ar: 'الحقوق: الحق في الأجر، الإجازة مدفوعة الأجر (20 يوماً على الأقل في أسبوع العمل المكون من 5 أيام)، استمرار دفع الأجر في حالة المرض، شهادة العمل',
          },
        ],
        examples: [
          {
            de: 'Ein Fachinformatiker darf keine vertraulichen Kundendaten an Dritte weitergeben (Verschwiegenheitspflicht) und muss seinen Laptop und andere Arbeitsmittel pfleglich behandeln (Sorgfaltspflicht).',
            ar: 'لا يجوز لفني المعلومات إعطاء بيانات العملاء السرية لأطراف ثالثة (واجب السرية) ويجب عليه التعامل بعناية مع حاسوبه المحمول وأدوات العمل الأخرى (واجب العناية).',
          },
          {
            de: 'Eine Entwicklerin hat das Recht, nach einer Kündigung ein qualifiziertes Arbeitszeugnis zu verlangen, das ihre Leistungen und ihr Verhalten bewertet.',
            ar: 'يحق للمطورة بعد الفصل أن تطلب شهادة عمل مؤهلة تُقيّم أداءها وسلوكها.',
          },
        ],
        examRelevance: {
          de: 'In der IHK-Prüfung werden häufig Pflichten des Arbeitnehmers abgefragt, insbesondere die Unterscheidung zwischen Haupt- und Nebenpflichten sowie die Konsequenzen bei Pflichtverletzung.',
          ar: 'في امتحان IHK يتم السؤال بشكل متكرر عن واجبات الموظف، خاصة التمييز بين الواجبات الرئيسية والثانوية وكذلك العواقب عند انتهاك الواجبات.',
        },
        summary: {
          de: 'Arbeitnehmer sind zur Arbeitsleistung verpflichtet und haben Nebenpflichten wie Treue, Verschwiegenheit und Sorgfalt. Im Gegenzug haben sie Rechte wie Vergütung, Urlaub und Zeugnis.',
          ar: 'الموظفون ملزمون بأداء العمل ولديهم واجبات ثانوية مثل الإخلاص والسرية والعناية. في المقابل لديهم حقوق مثل الأجر والإجازة والشهادة.',
        },
      },
    },
    {
      id: 'rechte-pflichten-arbeitgeber',
      name: { de: 'Rechte und Pflichten Arbeitgeber', ar: 'حقوق وواجبات صاحب العمل' },
      content: {
        definition: {
          de: 'Der Arbeitgeber hat die Hauptpflicht, die vereinbarte Vergütung zu zahlen. Daneben bestehen Fürsorgepflichten wie der Schutz von Leben und Gesundheit der Arbeitnehmer, die Einhaltung des Arbeitszeitgesetzes sowie die Abführung von Sozialversicherungsbeiträgen. Zu seinen Rechten gehören das Direktionsrecht (Weisungsrecht) und das Recht auf Arbeitsleistung.',
          ar: 'يتحمل صاحب العمل الواجب الرئيسي بدفع الأجر المتفق عليه. بالإضافة إلى ذلك هناك واجبات رعاية مثل حماية حياة وصحة الموظفين والالتزام بقانون ساعات العمل ودفع اشتراكات التأمين الاجتماعي. تشمل حقوقه حق التوجيه (حق إصدار التعليمات) والحق في أداء العمل.',
        },
        keyPoints: [
          {
            de: 'Hauptpflicht: Zahlung der vereinbarten Vergütung pünktlich und vollständig',
            ar: 'الواجب الرئيسي: دفع الأجر المتفق عليه في الوقت المحدد وبالكامل',
          },
          {
            de: 'Fürsorgepflichten: Arbeitsschutz, Gleichbehandlung, Datenschutz, Schutz persönlicher Gegenstände, Abführung der Sozialversicherungsbeiträge',
            ar: 'واجبات الرعاية: حماية العمل، المعاملة المتساوية، حماية البيانات، حماية الممتلكات الشخصية، دفع اشتراكات التأمين الاجتماعي',
          },
          {
            de: 'Direktionsrecht (§ 106 GewO): Der Arbeitgeber kann Inhalt, Ort und Zeit der Arbeitsleistung nach billigem Ermessen näher bestimmen, soweit diese nicht durch Vertrag, Tarifvertrag oder Gesetz festgelegt sind',
            ar: 'حق التوجيه (§ 106 GewO): يمكن لصاحب العمل تحديد محتوى ومكان ووقت أداء العمل وفقاً للتقدير العادل، ما لم يتم تحديدها بموجب العقد أو اتفاقية التعرفة أو القانون',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Unternehmen muss ergonomische Arbeitsplätze mit höhenverstellbaren Tischen und geeigneten Bildschirmen bereitstellen (Arbeitsschutzpflicht).',
            ar: 'يجب على شركة تكنولوجيا المعلومات توفير أماكن عمل مريحة مع طاولات قابلة لتعديل الارتفاع وشاشات مناسبة (واجب حماية العمل).',
          },
          {
            de: 'Der Arbeitgeber weist einen Systemadministrator an, vorübergehend im Homeoffice zu arbeiten (Ausübung des Direktionsrechts).',
            ar: 'يوجه صاحب العمل مدير النظام للعمل مؤقتاً من المنزل (ممارسة حق التوجيه).',
          },
        ],
        examRelevance: {
          de: 'Prüfungsrelevant sind insbesondere das Direktionsrecht und seine Grenzen sowie die Fürsorgepflichten des Arbeitgebers. Häufig wird nach konkreten Beispielen gefragt.',
          ar: 'المواضيع ذات الصلة بالامتحان هي بشكل خاص حق التوجيه وحدوده وكذلك واجبات رعاية صاحب العمل. غالباً ما يُسأل عن أمثلة محددة.',
        },
        summary: {
          de: 'Der Arbeitgeber muss Vergütung zahlen und Fürsorgepflichten erfüllen. Er hat das Direktionsrecht, mit dem er Arbeitsinhalt, -ort und -zeit im Rahmen des Vertrags bestimmen kann.',
          ar: 'يجب على صاحب العمل دفع الأجر والوفاء بواجبات الرعاية. لديه حق التوجيه الذي يمكنه من خلاله تحديد محتوى ومكان ووقت العمل في إطار العقد.',
        },
      },
    },
    {
      id: 'probezeit',
      name: { de: 'Probezeit', ar: 'فترة الاختبار' },
      content: {
        definition: {
          de: 'Die Probezeit ist ein vereinbarter Zeitraum zu Beginn eines Arbeitsverhältnisses, in dem sich beide Seiten kennenlernen können. Während der Probezeit gilt eine verkürzte Kündigungsfrist von zwei Wochen (§ 622 Abs. 3 BGB). Die maximale Dauer beträgt sechs Monate. In der Berufsausbildung beträgt die Probezeit mindestens einen und höchstens vier Monate (§ 20 BBiG).',
          ar: 'فترة الاختبار هي فترة زمنية متفق عليها في بداية علاقة العمل يمكن لكلا الطرفين التعرف على بعضهما فيها. خلال فترة الاختبار تسري مهلة إنهاء مختصرة مدتها أسبوعان (§ 622 فقرة 3 BGB). الحد الأقصى للمدة هو ستة أشهر. في التدريب المهني تتراوح فترة الاختبار بين شهر واحد وأربعة أشهر كحد أقصى (§ 20 BBiG).',
        },
        keyPoints: [
          {
            de: 'Maximale Dauer: 6 Monate bei Arbeitsverhältnissen, 1-4 Monate bei Ausbildungsverhältnissen',
            ar: 'الحد الأقصى للمدة: 6 أشهر في علاقات العمل، 1-4 أشهر في علاقات التدريب',
          },
          {
            de: 'Verkürzte Kündigungsfrist von 2 Wochen ohne besonderen Kündigungsgrund während der Probezeit',
            ar: 'مهلة إنهاء مختصرة مدتها أسبوعان بدون سبب خاص للإنهاء خلال فترة الاختبار',
          },
          {
            de: 'Während der Probezeit in der Ausbildung kann ohne Einhaltung einer Frist und ohne Angabe von Gründen gekündigt werden (§ 22 BBiG)',
            ar: 'خلال فترة الاختبار في التدريب يمكن الإنهاء بدون الالتزام بمهلة وبدون ذكر أسباب (§ 22 BBiG)',
          },
        ],
        examples: [
          {
            de: 'Ein neuer Softwareentwickler hat eine Probezeit von 6 Monaten. Nach 3 Monaten stellt der Arbeitgeber fest, dass die Leistungen nicht den Erwartungen entsprechen, und kündigt mit einer Frist von 2 Wochen.',
            ar: 'مطور برمجيات جديد لديه فترة اختبار مدتها 6 أشهر. بعد 3 أشهر يجد صاحب العمل أن الأداء لا يلبي التوقعات ويقوم بالإنهاء بمهلة أسبوعين.',
          },
          {
            de: 'Eine Auszubildende befindet sich in der Probezeit (3 Monate) und kann in dieser Zeit das Ausbildungsverhältnis jederzeit ohne Frist kündigen.',
            ar: 'متدربة في فترة الاختبار (3 أشهر) ويمكنها خلال هذه الفترة إنهاء علاقة التدريب في أي وقت بدون مهلة.',
          },
        ],
        examRelevance: {
          de: 'Die Probezeit wird in der IHK-Prüfung häufig im Zusammenhang mit Kündigungsfristen und den Besonderheiten im Ausbildungsverhältnis abgefragt.',
          ar: 'يتم السؤال عن فترة الاختبار في امتحان IHK بشكل متكرر فيما يتعلق بمهل الإنهاء والخصوصيات في علاقة التدريب.',
        },
        summary: {
          de: 'Die Probezeit ermöglicht beiden Seiten, das Arbeitsverhältnis kennenzulernen. Es gelten verkürzte Kündigungsfristen. In der Ausbildung kann während der Probezeit fristlos gekündigt werden.',
          ar: 'تتيح فترة الاختبار لكلا الطرفين التعرف على علاقة العمل. تسري مهل إنهاء مختصرة. في التدريب يمكن الإنهاء الفوري خلال فترة الاختبار.',
        },
      },
    },
    {
      id: 'kuendigung',
      name: { de: 'Kündigung', ar: 'الإنهاء / الفصل' },
      content: {
        definition: {
          de: 'Die Kündigung ist eine einseitige empfangsbedürftige Willenserklärung, die das Arbeitsverhältnis beendet. Sie muss schriftlich erfolgen (§ 623 BGB). Man unterscheidet zwischen ordentlicher (fristgerechter) und außerordentlicher (fristloser) Kündigung. Eine außerordentliche Kündigung erfordert einen wichtigen Grund (§ 626 BGB).',
          ar: 'الإنهاء هو إعلان إرادة من جانب واحد يحتاج إلى استلام وينهي علاقة العمل. يجب أن يتم كتابياً (§ 623 BGB). يُميَّز بين الإنهاء العادي (مع مهلة) والإنهاء غير العادي (الفوري). يتطلب الإنهاء غير العادي سبباً مهماً (§ 626 BGB).',
        },
        keyPoints: [
          {
            de: 'Schriftformerfordernis: Eine Kündigung per E-Mail, SMS oder mündlich ist unwirksam (§ 623 BGB)',
            ar: 'شرط الشكل الكتابي: الإنهاء عبر البريد الإلكتروني أو الرسائل النصية أو شفهياً غير صالح (§ 623 BGB)',
          },
          {
            de: 'Ordentliche Kündigung: Einhaltung der gesetzlichen oder vertraglichen Kündigungsfristen',
            ar: 'الإنهاء العادي: الالتزام بمهل الإنهاء القانونية أو التعاقدية',
          },
          {
            de: 'Außerordentliche Kündigung: Nur bei wichtigem Grund (z.B. Diebstahl, schwere Beleidigung, Arbeitsverweigerung). Muss innerhalb von 2 Wochen nach Bekanntwerden des Grundes erfolgen',
            ar: 'الإنهاء غير العادي: فقط عند وجود سبب مهم (مثل السرقة، الإهانة الشديدة، رفض العمل). يجب أن يتم خلال أسبوعين من معرفة السبب',
          },
        ],
        examples: [
          {
            de: 'Ein Mitarbeiter wird beim Diebstahl von Firmeneigentum erwischt. Der Arbeitgeber spricht eine fristlose Kündigung aus, da ein wichtiger Grund vorliegt.',
            ar: 'يُضبط موظف أثناء سرقة ممتلكات الشركة. يصدر صاحب العمل إنهاءً فورياً لوجود سبب مهم.',
          },
          {
            de: 'Eine Firma möchte eine Stelle abbauen und kündigt einem Mitarbeiter ordentlich unter Einhaltung der Kündigungsfrist von einem Monat zum Monatsende.',
            ar: 'تريد شركة إلغاء وظيفة وتنهي عقد موظف بشكل عادي مع الالتزام بمهلة الإنهاء البالغة شهراً واحداً حتى نهاية الشهر.',
          },
        ],
        examRelevance: {
          de: 'In der WiSo-Prüfung ist die Unterscheidung zwischen ordentlicher und außerordentlicher Kündigung zentral. Auch die Formvorschriften und Fristen werden regelmäßig abgefragt.',
          ar: 'في امتحان WiSo يعد التمييز بين الإنهاء العادي وغير العادي أمراً محورياً. كما يتم السؤال بانتظام عن متطلبات الشكل والمهل.',
        },
        summary: {
          de: 'Die Kündigung beendet das Arbeitsverhältnis einseitig. Sie muss schriftlich erfolgen. Bei ordentlicher Kündigung gelten Fristen, bei außerordentlicher Kündigung braucht man einen wichtigen Grund.',
          ar: 'ينهي الفصل علاقة العمل من جانب واحد. يجب أن يتم كتابياً. في الإنهاء العادي تسري مهل، وفي الإنهاء غير العادي يُحتاج إلى سبب مهم.',
        },
      },
    },
    {
      id: 'kuendigungsfristen',
      name: { de: 'Kündigungsfristen', ar: 'مهل الإنهاء' },
      content: {
        definition: {
          de: 'Kündigungsfristen sind die Zeiträume, die zwischen dem Zugang der Kündigung und dem Ende des Arbeitsverhältnisses liegen müssen. Die gesetzliche Grundkündigungsfrist beträgt vier Wochen zum 15. oder zum Ende eines Kalendermonats (§ 622 Abs. 1 BGB). Mit zunehmender Betriebszugehörigkeit verlängern sich die Fristen für den Arbeitgeber.',
          ar: 'مهل الإنهاء هي الفترات الزمنية التي يجب أن تمر بين استلام الإنهاء ونهاية علاقة العمل. المهلة القانونية الأساسية هي أربعة أسابيع حتى الخامس عشر أو نهاية الشهر التقويمي (§ 622 فقرة 1 BGB). مع زيادة مدة الانتماء للشركة تطول المهل بالنسبة لصاحب العمل.',
        },
        keyPoints: [
          {
            de: 'Grundkündigungsfrist: 4 Wochen zum 15. oder zum Monatsende',
            ar: 'مهلة الإنهاء الأساسية: 4 أسابيع حتى الخامس عشر أو نهاية الشهر',
          },
          {
            de: 'Verlängerte Fristen für Arbeitgeber nach Betriebszugehörigkeit: 2 Jahre = 1 Monat, 5 Jahre = 2 Monate, 8 Jahre = 3 Monate, 10 Jahre = 4 Monate, 12 Jahre = 5 Monate, 15 Jahre = 6 Monate, 20 Jahre = 7 Monate',
            ar: 'مهل ممتدة لصاحب العمل حسب مدة الانتماء: سنتان = شهر واحد، 5 سنوات = شهران، 8 سنوات = 3 أشهر، 10 سنوات = 4 أشهر، 12 سنة = 5 أشهر، 15 سنة = 6 أشهر، 20 سنة = 7 أشهر',
          },
          {
            de: 'In der Probezeit: Verkürzte Frist von 2 Wochen ohne Bindung an einen bestimmten Termin',
            ar: 'في فترة الاختبار: مهلة مختصرة مدتها أسبوعان بدون الالتزام بموعد محدد',
          },
        ],
        examples: [
          {
            de: 'Ein Mitarbeiter ist seit 12 Jahren im Unternehmen. Der Arbeitgeber muss eine Kündigungsfrist von 5 Monaten zum Monatsende einhalten.',
            ar: 'موظف يعمل في الشركة منذ 12 عاماً. يجب على صاحب العمل الالتزام بمهلة إنهاء مدتها 5 أشهر حتى نهاية الشهر.',
          },
          {
            de: 'Ein neuer Mitarbeiter in der Probezeit kündigt am 5. März. Sein letzter Arbeitstag ist der 19. März (2 Wochen Frist).',
            ar: 'موظف جديد في فترة الاختبار يستقيل في 5 مارس. آخر يوم عمل له هو 19 مارس (مهلة أسبوعين).',
          },
        ],
        examRelevance: {
          de: 'Kündigungsfristen sind ein häufiges Rechenthema in der IHK-Prüfung. Es wird erwartet, dass die gesetzlichen Fristen und die Staffelung nach Betriebszugehörigkeit bekannt sind.',
          ar: 'مهل الإنهاء هي موضوع حسابي شائع في امتحان IHK. يُتوقع معرفة المهل القانونية وتدرجها حسب مدة الانتماء للشركة.',
        },
        summary: {
          de: 'Die gesetzliche Grundfrist beträgt 4 Wochen. Für Arbeitgeber verlängert sich die Frist mit der Dauer der Betriebszugehörigkeit. In der Probezeit gilt eine 2-Wochen-Frist.',
          ar: 'المهلة القانونية الأساسية هي 4 أسابيع. بالنسبة لصاحب العمل تطول المهلة مع مدة الانتماء للشركة. في فترة الاختبار تسري مهلة أسبوعين.',
        },
      },
    },
    {
      id: 'kuendigungsschutzgesetz',
      name: { de: 'Kündigungsschutzgesetz', ar: 'قانون حماية الفصل' },
      content: {
        definition: {
          de: 'Das Kündigungsschutzgesetz (KSchG) schützt Arbeitnehmer vor sozial ungerechtfertigten Kündigungen. Es gilt in Betrieben mit mehr als 10 Mitarbeitern und für Arbeitnehmer, deren Arbeitsverhältnis mindestens 6 Monate besteht. Eine Kündigung ist nur wirksam, wenn sie personenbedingt, verhaltensbedingt oder betriebsbedingt begründet ist.',
          ar: 'قانون حماية الفصل (KSchG) يحمي الموظفين من الفصل غير المبرر اجتماعياً. يسري في المنشآت التي تضم أكثر من 10 موظفين وللموظفين الذين تستمر علاقة عملهم 6 أشهر على الأقل. يكون الإنهاء صالحاً فقط إذا كان مبرراً بأسباب شخصية أو سلوكية أو تشغيلية.',
        },
        keyPoints: [
          {
            de: 'Drei Kündigungsgründe: personenbedingt (z.B. Krankheit), verhaltensbedingt (z.B. Arbeitsverweigerung), betriebsbedingt (z.B. Stellenabbau)',
            ar: 'ثلاثة أسباب للإنهاء: أسباب شخصية (مثل المرض)، أسباب سلوكية (مثل رفض العمل)، أسباب تشغيلية (مثل تخفيض الوظائف)',
          },
          {
            de: 'Besonderer Kündigungsschutz gilt für: Schwangere, Schwerbehinderte, Betriebsratsmitglieder, Auszubildende nach der Probezeit',
            ar: 'حماية خاصة من الفصل تسري على: الحوامل، ذوي الإعاقات الشديدة، أعضاء مجلس العمل، المتدربين بعد فترة الاختبار',
          },
          {
            de: 'Kündigungsschutzklage: Der Arbeitnehmer kann innerhalb von 3 Wochen nach Zugang der Kündigung Klage beim Arbeitsgericht erheben',
            ar: 'دعوى حماية الفصل: يمكن للموظف رفع دعوى أمام محكمة العمل خلال 3 أسابيع من استلام الإنهاء',
          },
        ],
        examples: [
          {
            de: 'Ein Unternehmen mit 50 Mitarbeitern möchte aus wirtschaftlichen Gründen 5 Stellen abbauen. Es muss eine Sozialauswahl durchführen (Alter, Betriebszugehörigkeit, Unterhaltspflichten, Schwerbehinderung).',
            ar: 'شركة تضم 50 موظفاً تريد إلغاء 5 وظائف لأسباب اقتصادية. يجب عليها إجراء اختيار اجتماعي (العمر، مدة الانتماء للشركة، التزامات الإعالة، الإعاقة الشديدة).',
          },
        ],
        examRelevance: {
          de: 'Das KSchG ist ein zentrales Prüfungsthema. Besonders wichtig sind die Voraussetzungen für die Anwendbarkeit, die drei Kündigungsgründe und der besondere Kündigungsschutz.',
          ar: 'قانون حماية الفصل هو موضوع امتحاني محوري. المهم بشكل خاص هو شروط التطبيق وأسباب الإنهاء الثلاثة والحماية الخاصة من الفصل.',
        },
        summary: {
          de: 'Das KSchG gilt in Betrieben ab 10 Mitarbeitern nach 6 Monaten Betriebszugehörigkeit. Kündigungen müssen personen-, verhaltens- oder betriebsbedingt sein. Bestimmte Gruppen genießen besonderen Schutz.',
          ar: 'يسري قانون حماية الفصل في المنشآت من 10 موظفين بعد 6 أشهر من الانتماء. يجب أن يكون الإنهاء لأسباب شخصية أو سلوكية أو تشغيلية. مجموعات معينة تتمتع بحماية خاصة.',
        },
      },
    },
    {
      id: 'abmahnung',
      name: { de: 'Abmahnung', ar: 'الإنذار' },
      content: {
        definition: {
          de: 'Eine Abmahnung ist die formale Rüge eines vertragswidrigen Verhaltens des Arbeitnehmers durch den Arbeitgeber. Sie hat drei Funktionen: Dokumentationsfunktion (konkretes Fehlverhalten benennen), Rügefunktion (Vertragsverstoß deutlich machen) und Warnfunktion (Konsequenzen bei Wiederholung androhen). Sie ist in der Regel Voraussetzung für eine verhaltensbedingte Kündigung.',
          ar: 'الإنذار هو توبيخ رسمي من صاحب العمل لسلوك الموظف المخالف للعقد. له ثلاث وظائف: وظيفة التوثيق (تحديد السلوك الخاطئ بشكل محدد)، وظيفة التوبيخ (توضيح مخالفة العقد) ووظيفة التحذير (التهديد بالعواقب عند التكرار). وهو عادة شرط أساسي للإنهاء بسبب سلوكي.',
        },
        keyPoints: [
          {
            de: 'Drei Funktionen: Dokumentation, Rüge und Warnung müssen alle erfüllt sein, damit die Abmahnung wirksam ist',
            ar: 'ثلاث وظائف: التوثيق والتوبيخ والتحذير يجب أن تكون جميعها محققة لكي يكون الإنذار صالحاً',
          },
          {
            de: 'Keine Formvorschrift: Die Abmahnung kann mündlich oder schriftlich erfolgen, schriftlich ist aber empfehlenswert (Beweisbarkeit)',
            ar: 'لا يوجد شرط شكلي: يمكن أن يكون الإنذار شفهياً أو كتابياً، لكن الكتابي مُستحسن (القابلية للإثبات)',
          },
          {
            de: 'Der Arbeitnehmer hat das Recht, eine Gegendarstellung zur Personalakte zu geben und kann die Entfernung einer unberechtigten Abmahnung verlangen',
            ar: 'يحق للموظف تقديم رد مكتوب إلى ملف الموظفين ويمكنه المطالبة بإزالة إنذار غير مبرر',
          },
        ],
        examples: [
          {
            de: 'Ein Mitarbeiter kommt wiederholt zu spät. Der Arbeitgeber mahnt ihn ab: „Am 01.03., 05.03. und 08.03. sind Sie jeweils 30 Minuten zu spät zur Arbeit erschienen. Dies stellt eine Verletzung Ihrer arbeitsvertraglichen Pflichten dar. Im Wiederholungsfall müssen Sie mit arbeitsrechtlichen Konsequenzen bis hin zur Kündigung rechnen."',
            ar: 'يتأخر موظف بشكل متكرر. يوجه له صاحب العمل إنذاراً: "في 01.03 و05.03 و08.03 حضرت إلى العمل متأخراً 30 دقيقة في كل مرة. يشكل هذا انتهاكاً لالتزاماتك التعاقدية. في حالة التكرار عليك أن تتوقع عواقب قانونية عمالية تصل إلى الفصل."',
          },
        ],
        examRelevance: {
          de: 'Die Abmahnung wird häufig im Zusammenhang mit der verhaltensbedingten Kündigung geprüft. Wichtig ist das Wissen über die drei Funktionen und die formalen Anforderungen.',
          ar: 'يتم فحص الإنذار بشكل متكرر فيما يتعلق بالإنهاء بسبب سلوكي. المهم هو معرفة الوظائف الثلاث والمتطلبات الشكلية.',
        },
        summary: {
          de: 'Die Abmahnung rügt konkretes Fehlverhalten und warnt vor Konsequenzen. Sie ist meist Voraussetzung für eine verhaltensbedingte Kündigung und erfüllt Dokumentations-, Rüge- und Warnfunktion.',
          ar: 'يوبخ الإنذار سلوكاً خاطئاً محدداً ويحذر من العواقب. وهو عادة شرط أساسي للإنهاء بسبب سلوكي ويحقق وظائف التوثيق والتوبيخ والتحذير.',
        },
      },
    },
    {
      id: 'befristeter-arbeitsvertrag',
      name: { de: 'Befristeter Arbeitsvertrag', ar: 'عقد عمل محدد المدة' },
      content: {
        definition: {
          de: 'Ein befristeter Arbeitsvertrag endet automatisch nach Ablauf der vereinbarten Zeit oder mit Erreichen eines bestimmten Zwecks, ohne dass es einer Kündigung bedarf. Das Teilzeit- und Befristungsgesetz (TzBfG) regelt die Voraussetzungen. Eine sachgrundlose Befristung ist bis zu 2 Jahre möglich, mit maximal 3 Verlängerungen.',
          ar: 'ينتهي عقد العمل محدد المدة تلقائياً بعد انتهاء الوقت المتفق عليه أو بتحقيق غرض معين، دون الحاجة إلى إنهاء. ينظم قانون الدوام الجزئي والعقود المحددة المدة (TzBfG) الشروط. التحديد بدون سبب موضوعي ممكن لمدة تصل إلى سنتين، مع 3 تمديدات كحد أقصى.',
        },
        keyPoints: [
          {
            de: 'Sachgrundlose Befristung: Maximal 2 Jahre Dauer, höchstens 3 Verlängerungen, nicht bei Vorbeschäftigung beim selben Arbeitgeber',
            ar: 'التحديد بدون سبب موضوعي: مدة أقصاها سنتان، 3 تمديدات كحد أقصى، غير ممكن في حالة التوظيف السابق لدى نفس صاحب العمل',
          },
          {
            de: 'Befristung mit Sachgrund (z.B. Vertretung, Projekt, saisonaler Bedarf): Keine zeitliche Begrenzung',
            ar: 'التحديد بسبب موضوعي (مثل الاستبدال، المشروع، الحاجة الموسمية): بدون حد زمني',
          },
          {
            de: 'Die Befristung muss schriftlich vereinbart werden (§ 14 Abs. 4 TzBfG), sonst gilt der Vertrag als unbefristet',
            ar: 'يجب الاتفاق على التحديد كتابياً (§ 14 فقرة 4 TzBfG)، وإلا يعتبر العقد غير محدد المدة',
          },
        ],
        examples: [
          {
            de: 'Ein Unternehmen stellt einen IT-Berater für ein Projekt ein, das 18 Monate dauert. Der Vertrag ist sachgrundlos befristet und kann einmal um 6 Monate verlängert werden.',
            ar: 'تُوظف شركة مستشار تكنولوجيا معلومات لمشروع مدته 18 شهراً. العقد محدد المدة بدون سبب موضوعي ويمكن تمديده مرة واحدة لمدة 6 أشهر.',
          },
        ],
        examRelevance: {
          de: 'In der IHK-Prüfung werden häufig die Unterschiede zwischen sachgrundloser und sachgrundbezogener Befristung sowie die maximale Dauer und Verlängerungsmöglichkeiten abgefragt.',
          ar: 'في امتحان IHK يتم السؤال بشكل متكرر عن الفروقات بين التحديد بدون سبب والتحديد بسبب موضوعي وكذلك الحد الأقصى للمدة وإمكانيات التمديد.',
        },
        summary: {
          de: 'Befristete Verträge enden automatisch. Sachgrundlose Befristung ist bis 2 Jahre mit maximal 3 Verlängerungen möglich. Mit Sachgrund gibt es keine zeitliche Begrenzung. Die Befristung muss schriftlich sein.',
          ar: 'تنتهي العقود المحددة المدة تلقائياً. التحديد بدون سبب ممكن حتى سنتين مع 3 تمديدات كحد أقصى. بسبب موضوعي لا يوجد حد زمني. يجب أن يكون التحديد كتابياً.',
        },
      },
    },
    {
      id: 'unbefristeter-arbeitsvertrag',
      name: { de: 'Unbefristeter Arbeitsvertrag', ar: 'عقد عمل غير محدد المدة' },
      content: {
        definition: {
          de: 'Ein unbefristeter Arbeitsvertrag hat kein festgelegtes Enddatum und läuft auf unbestimmte Zeit. Er kann nur durch ordentliche oder außerordentliche Kündigung, einen Aufhebungsvertrag oder den Eintritt in den Ruhestand beendet werden. Er bietet dem Arbeitnehmer die größte Arbeitsplatzsicherheit.',
          ar: 'عقد العمل غير محدد المدة ليس له تاريخ انتهاء محدد ويسري لأجل غير مسمى. يمكن إنهاؤه فقط من خلال إنهاء عادي أو غير عادي أو اتفاقية إنهاء أو الدخول في التقاعد. يوفر للموظف أكبر قدر من الأمان الوظيفي.',
        },
        keyPoints: [
          {
            de: 'Kein automatisches Ende: Der Vertrag läuft weiter, bis er aktiv beendet wird',
            ar: 'لا ينتهي تلقائياً: يستمر العقد حتى يتم إنهاؤه بشكل فعال',
          },
          {
            de: 'Beendigungsmöglichkeiten: Ordentliche Kündigung, außerordentliche Kündigung, Aufhebungsvertrag, Erreichen der Regelaltersgrenze',
            ar: 'إمكانيات الإنهاء: إنهاء عادي، إنهاء غير عادي، اتفاقية إنهاء، بلوغ سن التقاعد القانوني',
          },
          {
            de: 'Kündigungsschutzgesetz greift nach 6 Monaten Betriebszugehörigkeit in Betrieben mit mehr als 10 Mitarbeitern',
            ar: 'يسري قانون حماية الفصل بعد 6 أشهر من الانتماء للشركة في المنشآت التي تضم أكثر من 10 موظفين',
          },
        ],
        examples: [
          {
            de: 'Nach Abschluss der Ausbildung wird ein Fachinformatiker unbefristet übernommen. Er genießt nach der Probezeit den vollen Kündigungsschutz.',
            ar: 'بعد إتمام التدريب يتم توظيف فني المعلومات بعقد غير محدد المدة. يتمتع بعد فترة الاختبار بحماية كاملة من الفصل.',
          },
        ],
        examRelevance: {
          de: 'Der unbefristete Arbeitsvertrag wird oft im Vergleich zum befristeten Vertrag geprüft. Wichtig sind die Beendigungsmöglichkeiten und der Kündigungsschutz.',
          ar: 'يتم فحص عقد العمل غير محدد المدة غالباً بالمقارنة مع العقد المحدد المدة. المهم هو إمكانيات الإنهاء وحماية الفصل.',
        },
        summary: {
          de: 'Der unbefristete Vertrag bietet dauerhafte Beschäftigung und kann nur durch Kündigung, Aufhebungsvertrag oder Renteneintritt beendet werden.',
          ar: 'يوفر العقد غير المحدد المدة توظيفاً دائماً ويمكن إنهاؤه فقط من خلال الفصل أو اتفاقية الإنهاء أو التقاعد.',
        },
      },
    },
    {
      id: 'aufhebungsvertrag',
      name: { de: 'Aufhebungsvertrag', ar: 'اتفاقية إنهاء العقد' },
      content: {
        definition: {
          de: 'Ein Aufhebungsvertrag ist eine einvernehmliche Vereinbarung zwischen Arbeitgeber und Arbeitnehmer zur Beendigung des Arbeitsverhältnisses. Er muss schriftlich geschlossen werden (§ 623 BGB). Im Gegensatz zur Kündigung müssen keine Fristen oder Kündigungsgründe eingehalten werden, da beide Seiten einverstanden sind.',
          ar: 'اتفاقية إنهاء العقد هي اتفاق بالتراضي بين صاحب العمل والموظف لإنهاء علاقة العمل. يجب أن تُبرم كتابياً (§ 623 BGB). على عكس الإنهاء لا يجب الالتزام بمهل أو أسباب إنهاء لأن كلا الطرفين موافقان.',
        },
        keyPoints: [
          {
            de: 'Einvernehmliche Beendigung: Beide Seiten müssen zustimmen, es handelt sich nicht um eine einseitige Maßnahme',
            ar: 'إنهاء بالتراضي: يجب أن يوافق كلا الطرفين، وليس إجراءً من جانب واحد',
          },
          {
            de: 'Achtung: Mögliche Sperrzeit beim Arbeitslosengeld (bis zu 12 Wochen), wenn der Arbeitnehmer den Aufhebungsvertrag selbst veranlasst hat',
            ar: 'تنبيه: فترة حظر محتملة لإعانة البطالة (حتى 12 أسبوعاً) إذا كان الموظف هو من بادر باتفاقية الإنهاء',
          },
          {
            de: 'Häufig verbunden mit einer Abfindung, um den Arbeitnehmer zum freiwilligen Ausscheiden zu bewegen',
            ar: 'غالباً ما تكون مرتبطة بتعويض مالي لتحفيز الموظف على المغادرة الطوعية',
          },
        ],
        examples: [
          {
            de: 'Ein Entwickler möchte schnell zu einem neuen Arbeitgeber wechseln. Er schließt einen Aufhebungsvertrag und kann sofort ohne Kündigungsfrist ausscheiden.',
            ar: 'يريد مطور الانتقال بسرعة إلى صاحب عمل جديد. يبرم اتفاقية إنهاء ويمكنه المغادرة فوراً بدون مهلة إنهاء.',
          },
        ],
        examRelevance: {
          de: 'In der Prüfung ist besonders der Unterschied zur Kündigung wichtig sowie die möglichen Nachteile für den Arbeitnehmer (Sperrzeit beim ALG).',
          ar: 'في الامتحان يعد الفرق عن الإنهاء مهماً بشكل خاص وكذلك العيوب المحتملة للموظف (فترة الحظر في إعانة البطالة).',
        },
        summary: {
          de: 'Der Aufhebungsvertrag beendet das Arbeitsverhältnis einvernehmlich ohne Fristen. Vorsicht: Es kann eine Sperrzeit beim Arbeitslosengeld drohen.',
          ar: 'تنهي اتفاقية الإنهاء علاقة العمل بالتراضي بدون مهل. تنبيه: قد تهدد فترة حظر في إعانة البطالة.',
        },
      },
    },
    {
      id: 'tarifvertrag',
      name: { de: 'Tarifvertrag', ar: 'اتفاقية التعرفة' },
      content: {
        definition: {
          de: 'Ein Tarifvertrag ist ein schriftlicher Vertrag zwischen Gewerkschaften und Arbeitgeberverbänden (oder einzelnen Arbeitgebern), der die Arbeitsbedingungen wie Löhne, Gehälter, Arbeitszeiten und Urlaubsansprüche regelt. Er gilt als Mindeststandard und darf durch individuelle Arbeitsverträge nicht unterschritten werden (Günstigkeitsprinzip).',
          ar: 'اتفاقية التعرفة هي عقد مكتوب بين النقابات العمالية واتحادات أصحاب العمل (أو أصحاب عمل فرديين) ينظم شروط العمل مثل الأجور والرواتب وساعات العمل وحقوق الإجازة. يعتبر معياراً أدنى ولا يجوز التقليل عنه بعقود عمل فردية (مبدأ الأفضلية).',
        },
        keyPoints: [
          {
            de: 'Arten: Manteltarifvertrag (allgemeine Arbeitsbedingungen), Entgelttarifvertrag (Löhne/Gehälter), Rahmentarifvertrag (Eingruppierung)',
            ar: 'أنواع: اتفاقية التعرفة الشاملة (شروط العمل العامة)، اتفاقية الأجور (الأجور/الرواتب)، اتفاقية الإطار (التصنيف)',
          },
          {
            de: 'Günstigkeitsprinzip: Vom Tarifvertrag darf nur zugunsten des Arbeitnehmers abgewichen werden',
            ar: 'مبدأ الأفضلية: لا يجوز الانحراف عن اتفاقية التعرفة إلا لصالح الموظف',
          },
          {
            de: 'Friedenspflicht: Während der Laufzeit eines Tarifvertrags sind Streiks über die geregelten Themen unzulässig',
            ar: 'واجب السلم: خلال فترة سريان اتفاقية التعرفة لا يُسمح بالإضرابات حول المواضيع المنظمة',
          },
        ],
        examples: [
          {
            de: 'Der Tarifvertrag der IG Metall für die IT-Branche legt ein Mindestgehalt von 3.200 € für Fachinformatiker fest. Ein Arbeitgeber kann ein höheres, aber kein niedrigeres Gehalt zahlen.',
            ar: 'تحدد اتفاقية تعرفة IG Metall لقطاع تكنولوجيا المعلومات حداً أدنى للراتب قدره 3,200 يورو لفنيي المعلومات. يمكن لصاحب العمل دفع راتب أعلى ولكن ليس أقل.',
          },
        ],
        examRelevance: {
          de: 'Tarifverträge sind ein zentrales Prüfungsthema. Wichtig sind die Unterscheidung der Tarifvertragsarten, das Günstigkeitsprinzip und die Tarifautonomie.',
          ar: 'اتفاقيات التعرفة هي موضوع امتحاني محوري. المهم هو التمييز بين أنواع اتفاقيات التعرفة ومبدأ الأفضلية واستقلالية التعرفة.',
        },
        summary: {
          de: 'Tarifverträge regeln Mindestarbeitsbedingungen zwischen Gewerkschaften und Arbeitgebern. Das Günstigkeitsprinzip erlaubt nur Abweichungen zugunsten des Arbeitnehmers.',
          ar: 'تنظم اتفاقيات التعرفة الحد الأدنى لشروط العمل بين النقابات وأصحاب العمل. يسمح مبدأ الأفضلية فقط بالانحرافات لصالح الموظف.',
        },
      },
    },
    {
      id: 'tarifparteien',
      name: { de: 'Tarifparteien', ar: 'أطراف التعرفة' },
      content: {
        definition: {
          de: 'Tarifparteien sind die Verhandlungspartner bei Tarifverhandlungen. Auf Arbeitnehmerseite stehen die Gewerkschaften (z.B. ver.di, IG Metall), auf Arbeitgeberseite die Arbeitgeberverbände oder einzelne Arbeitgeber. Nur tariffähige Parteien können Tarifverträge abschließen. Das Recht zur Tarifautonomie ist im Grundgesetz (Art. 9 Abs. 3 GG) verankert.',
          ar: 'أطراف التعرفة هم شركاء التفاوض في مفاوضات التعرفة. من جانب الموظفين تقف النقابات العمالية (مثل ver.di و IG Metall)، ومن جانب أصحاب العمل اتحادات أصحاب العمل أو أصحاب عمل فرديون. فقط الأطراف المؤهلة للتعرفة يمكنها إبرام اتفاقيات تعرفة. حق استقلالية التعرفة مكرس في الدستور (المادة 9 فقرة 3 GG).',
        },
        keyPoints: [
          {
            de: 'Arbeitnehmerseite: Gewerkschaften wie ver.di (Dienstleistungen), IG Metall (Metall/Elektro/IT), IG BCE (Chemie)',
            ar: 'جانب الموظفين: نقابات عمالية مثل ver.di (الخدمات)، IG Metall (المعادن/الكهرباء/تكنولوجيا المعلومات)، IG BCE (الكيمياء)',
          },
          {
            de: 'Arbeitgeberseite: Arbeitgeberverbände (z.B. BDA, Gesamtmetall) oder einzelne Unternehmen (Haustarifvertrag)',
            ar: 'جانب أصحاب العمل: اتحادات أصحاب العمل (مثل BDA، Gesamtmetall) أو شركات فردية (اتفاقية تعرفة خاصة بالشركة)',
          },
          {
            de: 'Tarifautonomie: Das Recht der Tarifparteien, Arbeitsbedingungen ohne staatliche Einmischung auszuhandeln',
            ar: 'استقلالية التعرفة: حق أطراف التعرفة في التفاوض على شروط العمل دون تدخل حكومي',
          },
        ],
        examples: [
          {
            de: 'ver.di verhandelt mit dem Arbeitgeberverband der IT-Branche über höhere Gehälter. Nach mehreren Verhandlungsrunden einigen sie sich auf eine Gehaltserhöhung von 5%.',
            ar: 'تتفاوض ver.di مع اتحاد أصحاب العمل في قطاع تكنولوجيا المعلومات على رواتب أعلى. بعد عدة جولات تفاوض يتفقون على زيادة رواتب بنسبة 5%.',
          },
        ],
        examRelevance: {
          de: 'Prüfungsrelevant sind die Kenntnis der wichtigsten Gewerkschaften, das Prinzip der Tarifautonomie und die Unterscheidung zwischen Flächen- und Haustarifvertrag.',
          ar: 'ذات صلة بالامتحان هي معرفة أهم النقابات ومبدأ استقلالية التعرفة والتمييز بين اتفاقية التعرفة القطاعية واتفاقية الشركة.',
        },
        summary: {
          de: 'Tarifparteien sind Gewerkschaften und Arbeitgeberverbände, die kraft Tarifautonomie Arbeitsbedingungen aushandeln. Dieses Recht ist grundgesetzlich geschützt.',
          ar: 'أطراف التعرفة هم النقابات واتحادات أصحاب العمل الذين يتفاوضون على شروط العمل بموجب استقلالية التعرفة. هذا الحق محمي دستورياً.',
        },
      },
    },
    {
      id: 'tarifbindung',
      name: { de: 'Tarifbindung', ar: 'الالتزام بالتعرفة' },
      content: {
        definition: {
          de: 'Tarifbindung bedeutet, dass ein Tarifvertrag für die jeweiligen Vertragsparteien verbindlich gilt. Sie entsteht, wenn der Arbeitgeber Mitglied des Arbeitgeberverbands ist und der Arbeitnehmer Mitglied der verhandelnden Gewerkschaft ist. Außerdem kann ein Tarifvertrag vom Bundesarbeitsminister für allgemeinverbindlich erklärt werden.',
          ar: 'الالتزام بالتعرفة يعني أن اتفاقية التعرفة ملزمة لأطراف العقد المعنيين. ينشأ عندما يكون صاحب العمل عضواً في اتحاد أصحاب العمل والموظف عضواً في النقابة المتفاوضة. بالإضافة إلى ذلك يمكن لوزير العمل الاتحادي إعلان اتفاقية التعرفة ملزمة للجميع.',
        },
        keyPoints: [
          {
            de: 'Voraussetzung: Mitgliedschaft in der Gewerkschaft (Arbeitnehmerseite) und im Arbeitgeberverband (Arbeitgeberseite)',
            ar: 'الشرط: العضوية في النقابة (جانب الموظفين) وفي اتحاد أصحاب العمل (جانب أصحاب العمل)',
          },
          {
            de: 'Allgemeinverbindlicherklärung: Ein Tarifvertrag kann auf alle Arbeitnehmer einer Branche ausgedehnt werden, unabhängig von der Gewerkschaftsmitgliedschaft',
            ar: 'إعلان الالتزام العام: يمكن توسيع اتفاقية التعرفة لتشمل جميع موظفي قطاع ما، بغض النظر عن العضوية في النقابة',
          },
          {
            de: 'In der Praxis wenden viele Arbeitgeber Tarifverträge auch auf nicht gewerkschaftlich organisierte Mitarbeiter an (einzelvertragliche Bezugnahme)',
            ar: 'في الممارسة يطبق كثير من أصحاب العمل اتفاقيات التعرفة أيضاً على الموظفين غير المنظمين نقابياً (الإشارة بموجب العقد الفردي)',
          },
        ],
        examples: [
          {
            de: 'Eine IT-Firma ist Mitglied im Arbeitgeberverband. Alle Mitarbeiter, die ver.di-Mitglieder sind, unterliegen automatisch dem Tarifvertrag.',
            ar: 'شركة تكنولوجيا معلومات عضو في اتحاد أصحاب العمل. جميع الموظفين الأعضاء في ver.di يخضعون تلقائياً لاتفاقية التعرفة.',
          },
        ],
        examRelevance: {
          de: 'Prüfungsrelevant sind die Voraussetzungen der Tarifbindung und das Konzept der Allgemeinverbindlicherklärung.',
          ar: 'ذات صلة بالامتحان هي شروط الالتزام بالتعرفة ومفهوم إعلان الالتزام العام.',
        },
        summary: {
          de: 'Tarifbindung entsteht durch Mitgliedschaft in Gewerkschaft und Arbeitgeberverband. Durch Allgemeinverbindlicherklärung kann ein Tarifvertrag für eine ganze Branche gelten.',
          ar: 'ينشأ الالتزام بالتعرفة من خلال العضوية في النقابة واتحاد أصحاب العمل. من خلال إعلان الالتزام العام يمكن أن تسري اتفاقية التعرفة على قطاع بأكمله.',
        },
      },
    },
    {
      id: 'betriebsvereinbarung',
      name: { de: 'Betriebsvereinbarung', ar: 'اتفاقية العمل الداخلية' },
      content: {
        definition: {
          de: 'Eine Betriebsvereinbarung ist ein Vertrag zwischen dem Arbeitgeber und dem Betriebsrat, der verbindliche Regelungen für alle Arbeitnehmer des Betriebs enthält. Sie kann soziale, personelle und wirtschaftliche Angelegenheiten regeln, darf aber nicht gegen Gesetze oder Tarifverträge verstoßen (Vorrangprinzip).',
          ar: 'اتفاقية العمل الداخلية هي عقد بين صاحب العمل ومجلس العمل يتضمن أحكاماً ملزمة لجميع موظفي المنشأة. يمكنها تنظيم الشؤون الاجتماعية والشخصية والاقتصادية، لكن لا يجوز أن تخالف القوانين أو اتفاقيات التعرفة (مبدأ الأسبقية).',
        },
        keyPoints: [
          {
            de: 'Gilt für alle Arbeitnehmer des Betriebs, unabhängig von Gewerkschaftsmitgliedschaft',
            ar: 'تسري على جميع موظفي المنشأة، بغض النظر عن العضوية في النقابة',
          },
          {
            de: 'Rangfolge: Gesetz > Tarifvertrag > Betriebsvereinbarung > Arbeitsvertrag (jeweils Günstigkeitsprinzip)',
            ar: 'الترتيب: القانون > اتفاقية التعرفة > اتفاقية العمل الداخلية > عقد العمل (مع مبدأ الأفضلية في كل حالة)',
          },
          {
            de: 'Typische Inhalte: Arbeitszeiten, Pausenregelungen, Homeoffice-Regeln, Bonusregelungen, betriebliche Ordnung',
            ar: 'محتويات نموذجية: ساعات العمل، تنظيم الاستراحات، قواعد العمل من المنزل، أنظمة المكافآت، النظام الداخلي',
          },
        ],
        examples: [
          {
            de: 'Der Betriebsrat einer IT-Firma vereinbart mit dem Arbeitgeber eine Betriebsvereinbarung über flexible Arbeitszeiten mit einer Kernarbeitszeit von 10:00 bis 15:00 Uhr.',
            ar: 'يتفق مجلس العمل في شركة تكنولوجيا معلومات مع صاحب العمل على اتفاقية عمل داخلية بشأن ساعات عمل مرنة مع وقت عمل أساسي من 10:00 إلى 15:00.',
          },
        ],
        examRelevance: {
          de: 'In der IHK-Prüfung wird die Betriebsvereinbarung oft im Kontext der Normenhierarchie (Rangfolge der Rechtsquellen) abgefragt.',
          ar: 'في امتحان IHK يتم السؤال عن اتفاقية العمل الداخلية غالباً في سياق التسلسل الهرمي للمعايير (ترتيب المصادر القانونية).',
        },
        summary: {
          de: 'Die Betriebsvereinbarung wird zwischen Betriebsrat und Arbeitgeber geschlossen und gilt für alle Mitarbeiter. Sie steht in der Normenhierarchie unter Gesetz und Tarifvertrag.',
          ar: 'تُبرم اتفاقية العمل الداخلية بين مجلس العمل وصاحب العمل وتسري على جميع الموظفين. تقع في التسلسل الهرمي للمعايير تحت القانون واتفاقية التعرفة.',
        },
      },
    },
  ],
};
