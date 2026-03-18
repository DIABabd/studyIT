import type { TopicGroup } from '../../../types';

export const mitbestimmung: TopicGroup = {
  id: 'group02-mitbestimmung',
  name: {
    de: 'Mitbestimmung und Betriebsrat',
    ar: 'المشاركة في صنع القرار ومجلس العمل',
  },
  description: {
    de: 'Betriebliche Mitbestimmung, Betriebsrat, Jugend- und Auszubildendenvertretung sowie Betriebsversammlungen',
    ar: 'المشاركة في صنع القرار في المنشأة، مجلس العمل، تمثيل الشباب والمتدربين واجتماعات المنشأة',
  },
  priority: 'high',
  topics: [
    {
      id: 'betriebsrat',
      name: { de: 'Betriebsrat', ar: 'مجلس العمل' },
      content: {
        definition: {
          de: 'Der Betriebsrat ist die gewählte Vertretung der Arbeitnehmer in einem Betrieb. Er wird nach dem Betriebsverfassungsgesetz (BetrVG) in Betrieben mit mindestens 5 ständig wahlberechtigten Arbeitnehmern gewählt. Die Amtszeit beträgt 4 Jahre. Betriebsratsmitglieder genießen besonderen Kündigungsschutz.',
          ar: 'مجلس العمل هو التمثيل المنتخب للموظفين في المنشأة. يُنتخب وفقاً لقانون دستور المنشأة (BetrVG) في المنشآت التي تضم 5 موظفين دائمين على الأقل يحق لهم التصويت. مدة الولاية 4 سنوات. يتمتع أعضاء مجلس العمل بحماية خاصة من الفصل.',
        },
        keyPoints: [
          {
            de: 'Wahlvoraussetzung: Mindestens 5 ständige wahlberechtigte Arbeitnehmer, davon 3 wählbar (mindestens 6 Monate im Betrieb)',
            ar: 'شروط الانتخاب: 5 موظفين دائمين على الأقل يحق لهم التصويت، منهم 3 قابلين للانتخاب (6 أشهر على الأقل في المنشأة)',
          },
          {
            de: 'Betriebsratsgröße richtet sich nach der Anzahl der Arbeitnehmer: 5-20 AN = 1 Mitglied, 21-50 AN = 3 Mitglieder, 51-100 AN = 5 Mitglieder usw.',
            ar: 'حجم مجلس العمل يعتمد على عدد الموظفين: 5-20 موظف = عضو واحد، 21-50 موظف = 3 أعضاء، 51-100 موظف = 5 أعضاء وهكذا',
          },
          {
            de: 'Betriebsratsmitglieder dürfen wegen ihrer Tätigkeit nicht benachteiligt oder begünstigt werden und haben besonderen Kündigungsschutz',
            ar: 'لا يجوز حرمان أعضاء مجلس العمل أو تفضيلهم بسبب نشاطهم ويتمتعون بحماية خاصة من الفصل',
          },
        ],
        examples: [
          {
            de: 'In einem IT-Unternehmen mit 80 Mitarbeitern wird ein Betriebsrat mit 5 Mitgliedern gewählt. Die Wahl findet alle 4 Jahre statt.',
            ar: 'في شركة تكنولوجيا معلومات تضم 80 موظفاً يُنتخب مجلس عمل مكون من 5 أعضاء. تُجرى الانتخابات كل 4 سنوات.',
          },
        ],
        examRelevance: {
          de: 'Der Betriebsrat ist ein häufiges Prüfungsthema. Wichtig sind Wahlvoraussetzungen, Größe, Amtszeit und der besondere Kündigungsschutz.',
          ar: 'مجلس العمل هو موضوع امتحاني متكرر. المهم هو شروط الانتخاب والحجم ومدة الولاية والحماية الخاصة من الفصل.',
        },
        summary: {
          de: 'Der Betriebsrat vertritt die Arbeitnehmerinteressen im Betrieb. Er wird ab 5 Mitarbeitern gewählt und hat eine Amtszeit von 4 Jahren.',
          ar: 'يمثل مجلس العمل مصالح الموظفين في المنشأة. يُنتخب من 5 موظفين ومدة ولايته 4 سنوات.',
        },
      },
    },
    {
      id: 'aufgaben-betriebsrat',
      name: { de: 'Aufgaben des Betriebsrats', ar: 'مهام مجلس العمل' },
      content: {
        definition: {
          de: 'Der Betriebsrat hat die Aufgabe, die Interessen der Arbeitnehmer gegenüber dem Arbeitgeber zu vertreten. Seine Aufgaben umfassen soziale, personelle und wirtschaftliche Angelegenheiten. Er überwacht die Einhaltung von Gesetzen, Tarifverträgen und Betriebsvereinbarungen zum Schutz der Arbeitnehmer.',
          ar: 'مهمة مجلس العمل هي تمثيل مصالح الموظفين تجاه صاحب العمل. تشمل مهامه الشؤون الاجتماعية والشخصية والاقتصادية. يراقب الالتزام بالقوانين واتفاقيات التعرفة واتفاقيات العمل الداخلية لحماية الموظفين.',
        },
        keyPoints: [
          {
            de: 'Soziale Angelegenheiten: Arbeitszeit, Pausenregelung, Urlaubsgrundsätze, Einführung technischer Überwachung, Sozialeinrichtungen',
            ar: 'الشؤون الاجتماعية: ساعات العمل، تنظيم الاستراحات، مبادئ الإجازة، إدخال المراقبة التقنية، المرافق الاجتماعية',
          },
          {
            de: 'Personelle Angelegenheiten: Einstellung, Versetzung, Kündigung – der Betriebsrat muss vor jeder Kündigung angehört werden (§ 102 BetrVG)',
            ar: 'الشؤون الشخصية: التعيين، النقل، الفصل – يجب الاستماع لمجلس العمل قبل كل إنهاء (§ 102 BetrVG)',
          },
          {
            de: 'Wirtschaftliche Angelegenheiten: In Betrieben mit über 100 Arbeitnehmern kann ein Wirtschaftsausschuss gebildet werden, der über wirtschaftliche Angelegenheiten informiert wird',
            ar: 'الشؤون الاقتصادية: في المنشآت التي تضم أكثر من 100 موظف يمكن تشكيل لجنة اقتصادية يتم إبلاغها بالشؤون الاقتصادية',
          },
        ],
        examples: [
          {
            de: 'Der Arbeitgeber möchte eine Überwachungssoftware auf den Firmenrechnern installieren. Der Betriebsrat hat ein Mitbestimmungsrecht und muss zustimmen.',
            ar: 'يريد صاحب العمل تثبيت برنامج مراقبة على أجهزة الكمبيوتر الخاصة بالشركة. لمجلس العمل حق المشاركة في القرار ويجب أن يوافق.',
          },
          {
            de: 'Bei einer geplanten Kündigung wird der Betriebsrat angehört. Ohne Anhörung ist die Kündigung unwirksam.',
            ar: 'عند التخطيط لفصل يتم الاستماع لمجلس العمل. بدون الاستماع يكون الفصل غير صالح.',
          },
        ],
        examRelevance: {
          de: 'Besonders prüfungsrelevant ist die Anhörungspflicht vor Kündigungen (§ 102 BetrVG) und das Mitbestimmungsrecht bei sozialen Angelegenheiten.',
          ar: 'ذات صلة خاصة بالامتحان هي واجب الاستماع قبل الفصل (§ 102 BetrVG) وحق المشاركة في القرار في الشؤون الاجتماعية.',
        },
        summary: {
          de: 'Der Betriebsrat vertritt Arbeitnehmerinteressen in sozialen, personellen und wirtschaftlichen Angelegenheiten. Vor jeder Kündigung muss er angehört werden.',
          ar: 'يمثل مجلس العمل مصالح الموظفين في الشؤون الاجتماعية والشخصية والاقتصادية. يجب الاستماع إليه قبل كل فصل.',
        },
      },
    },
    {
      id: 'mitbestimmungsrechte',
      name: { de: 'Mitbestimmungsrechte', ar: 'حقوق المشاركة في القرار' },
      content: {
        definition: {
          de: 'Mitbestimmungsrechte sind die Rechte des Betriebsrats, an Entscheidungen des Arbeitgebers mitzuwirken. Sie reichen von Informationsrechten (schwächste Form) über Anhörungs- und Beratungsrechte bis hin zu echten Mitbestimmungsrechten (stärkste Form), bei denen der Arbeitgeber ohne Zustimmung des Betriebsrats nicht handeln darf.',
          ar: 'حقوق المشاركة في القرار هي حقوق مجلس العمل في المشاركة في قرارات صاحب العمل. تتراوح من حقوق الإعلام (أضعف شكل) إلى حقوق الاستماع والاستشارة وصولاً إلى حقوق المشاركة الحقيقية في القرار (أقوى شكل)، حيث لا يجوز لصاحب العمل التصرف بدون موافقة مجلس العمل.',
        },
        keyPoints: [
          {
            de: 'Informationsrecht: Der Arbeitgeber muss den Betriebsrat über bestimmte Angelegenheiten informieren',
            ar: 'حق الإعلام: يجب على صاحب العمل إبلاغ مجلس العمل بشؤون معينة',
          },
          {
            de: 'Anhörungsrecht: Der Betriebsrat muss vor bestimmten Maßnahmen gehört werden (z.B. vor Kündigungen)',
            ar: 'حق الاستماع: يجب الاستماع لمجلس العمل قبل إجراءات معينة (مثل قبل الفصل)',
          },
          {
            de: 'Echtes Mitbestimmungsrecht (§ 87 BetrVG): Bei sozialen Angelegenheiten wie Arbeitszeit, Urlaubsplanung, Überwachungseinrichtungen – ohne Zustimmung des Betriebsrats keine Umsetzung',
            ar: 'حق المشاركة الحقيقي في القرار (§ 87 BetrVG): في الشؤون الاجتماعية مثل ساعات العمل وتخطيط الإجازات وأجهزة المراقبة – بدون موافقة مجلس العمل لا يمكن التنفيذ',
          },
        ],
        examples: [
          {
            de: 'Ein Arbeitgeber möchte Gleitzeit einführen. Da die Arbeitszeit eine soziale Angelegenheit ist, hat der Betriebsrat ein echtes Mitbestimmungsrecht und muss zustimmen.',
            ar: 'يريد صاحب عمل تقديم ساعات عمل مرنة. بما أن وقت العمل شأن اجتماعي، فلمجلس العمل حق مشاركة حقيقي في القرار ويجب أن يوافق.',
          },
        ],
        examRelevance: {
          de: 'Die verschiedenen Stufen der Mitbestimmung und insbesondere die echten Mitbestimmungsrechte nach § 87 BetrVG sind häufig Prüfungsgegenstand.',
          ar: 'المستويات المختلفة للمشاركة في القرار وخاصة حقوق المشاركة الحقيقية وفقاً لـ § 87 BetrVG هي موضوع امتحاني متكرر.',
        },
        summary: {
          de: 'Mitbestimmungsrechte reichen von Information über Anhörung bis zur echten Mitbestimmung. Bei sozialen Angelegenheiten hat der Betriebsrat ein Vetorecht.',
          ar: 'تتراوح حقوق المشاركة من الإعلام إلى الاستماع وصولاً إلى المشاركة الحقيقية في القرار. في الشؤون الاجتماعية يملك مجلس العمل حق النقض.',
        },
      },
    },
    {
      id: 'jav',
      name: { de: 'Jugend- und Auszubildendenvertretung', ar: 'تمثيل الشباب والمتدربين' },
      content: {
        definition: {
          de: 'Die Jugend- und Auszubildendenvertretung (JAV) vertritt die besonderen Interessen der jugendlichen Arbeitnehmer (unter 18 Jahre) und der Auszubildenden (unter 25 Jahre) im Betrieb. Sie wird nach § 60 BetrVG in Betrieben gewählt, in denen ein Betriebsrat besteht und mindestens 5 jugendliche Arbeitnehmer oder Auszubildende beschäftigt sind.',
          ar: 'يمثل تمثيل الشباب والمتدربين (JAV) المصالح الخاصة للعمال الشباب (تحت 18 سنة) والمتدربين (تحت 25 سنة) في المنشأة. يُنتخب وفقاً لـ § 60 BetrVG في المنشآت التي يوجد فيها مجلس عمل ويعمل فيها 5 عمال شباب أو متدربين على الأقل.',
        },
        keyPoints: [
          {
            de: 'Wahlvoraussetzung: Betriebsrat muss existieren, mindestens 5 Jugendliche/Auszubildende im Betrieb',
            ar: 'شرط الانتخاب: يجب أن يكون هناك مجلس عمل، 5 شباب/متدربين على الأقل في المنشأة',
          },
          {
            de: 'Amtszeit: 2 Jahre, die JAV arbeitet eng mit dem Betriebsrat zusammen und kann an dessen Sitzungen teilnehmen',
            ar: 'مدة الولاية: سنتان، يعمل تمثيل الشباب والمتدربين بشكل وثيق مع مجلس العمل ويمكنه حضور جلساته',
          },
          {
            de: 'Die JAV hat kein eigenständiges Mitbestimmungsrecht, sondern wirkt über den Betriebsrat mit und kann Anträge stellen',
            ar: 'ليس لتمثيل الشباب والمتدربين حق مشاركة مستقل في القرار، بل يشارك من خلال مجلس العمل ويمكنه تقديم طلبات',
          },
        ],
        examples: [
          {
            de: 'In einem IT-Unternehmen mit 15 Auszubildenden wird eine JAV gewählt. Sie setzt sich für bessere Ausbildungsmittel (z.B. aktuelle Software-Lizenzen) ein.',
            ar: 'في شركة تكنولوجيا معلومات تضم 15 متدرباً يُنتخب تمثيل الشباب والمتدربين. يعمل على توفير وسائل تدريب أفضل (مثل تراخيص برمجيات حديثة).',
          },
        ],
        examRelevance: {
          de: 'Die JAV ist besonders für Auszubildende prüfungsrelevant. Wichtig sind die Wahlvoraussetzungen, Amtszeit und die Zusammenarbeit mit dem Betriebsrat.',
          ar: 'تمثيل الشباب والمتدربين ذو صلة خاصة بالامتحان للمتدربين. المهم هو شروط الانتخاب ومدة الولاية والتعاون مع مجلس العمل.',
        },
        summary: {
          de: 'Die JAV vertritt Jugendliche und Auszubildende im Betrieb. Sie wird alle 2 Jahre gewählt und arbeitet eng mit dem Betriebsrat zusammen.',
          ar: 'يمثل تمثيل الشباب والمتدربين الشباب والمتدربين في المنشأة. يُنتخب كل سنتين ويعمل بشكل وثيق مع مجلس العمل.',
        },
      },
    },
    {
      id: 'betriebsversammlung',
      name: { de: 'Betriebsversammlung', ar: 'اجتماع المنشأة' },
      content: {
        definition: {
          de: 'Die Betriebsversammlung ist eine Versammlung aller Arbeitnehmer eines Betriebs, die vom Betriebsrat mindestens einmal pro Quartal einberufen wird (§ 43 BetrVG). Sie dient dem Informationsaustausch zwischen Betriebsrat und Belegschaft. Die Teilnahme gilt als Arbeitszeit und wird vergütet.',
          ar: 'اجتماع المنشأة هو تجمع لجميع موظفي المنشأة يدعو إليه مجلس العمل مرة واحدة على الأقل كل ربع سنة (§ 43 BetrVG). يخدم تبادل المعلومات بين مجلس العمل والموظفين. المشاركة تعتبر وقت عمل ويتم تعويضها.',
        },
        keyPoints: [
          {
            de: 'Häufigkeit: Mindestens einmal pro Quartal (vierteljährlich)',
            ar: 'التكرار: مرة واحدة على الأقل كل ربع سنة',
          },
          {
            de: 'Teilnahme gilt als Arbeitszeit, der Arbeitgeber hat ein Recht zur Teilnahme und Berichterstattung',
            ar: 'المشاركة تعتبر وقت عمل، لصاحب العمل حق المشاركة وتقديم التقارير',
          },
          {
            de: 'Der Betriebsrat berichtet über seine Tätigkeit, die Belegschaft kann Anträge stellen und Wünsche äußern',
            ar: 'يقدم مجلس العمل تقريراً عن نشاطه، يمكن للموظفين تقديم طلبات والتعبير عن رغباتهم',
          },
        ],
        examples: [
          {
            de: 'In der Betriebsversammlung berichtet der Betriebsrat über die neue Homeoffice-Regelung und nimmt Wünsche der Mitarbeiter zur Arbeitsplatzgestaltung entgegen.',
            ar: 'في اجتماع المنشأة يقدم مجلس العمل تقريراً عن تنظيم العمل من المنزل الجديد ويتلقى رغبات الموظفين بشأن تصميم مكان العمل.',
          },
        ],
        examRelevance: {
          de: 'Prüfungsrelevant sind die Häufigkeit, der Einberufende (Betriebsrat) und die Tatsache, dass die Teilnahme als Arbeitszeit gilt.',
          ar: 'ذات صلة بالامتحان هي التكرار والجهة الداعية (مجلس العمل) وحقيقة أن المشاركة تعتبر وقت عمل.',
        },
        summary: {
          de: 'Die Betriebsversammlung findet vierteljährlich statt und wird vom Betriebsrat einberufen. Sie dient dem Informationsaustausch und gilt als Arbeitszeit.',
          ar: 'يُعقد اجتماع المنشأة كل ربع سنة ويدعو إليه مجلس العمل. يخدم تبادل المعلومات ويعتبر وقت عمل.',
        },
      },
    },
    {
      id: 'arbeitnehmervertretung',
      name: { de: 'Arbeitnehmervertretung', ar: 'تمثيل الموظفين' },
      content: {
        definition: {
          de: 'Die Arbeitnehmervertretung umfasst alle Gremien und Institutionen, die die Interessen der Arbeitnehmer vertreten. Dazu gehören auf betrieblicher Ebene der Betriebsrat und die JAV, auf überbetrieblicher Ebene die Gewerkschaften. Auf Unternehmensebene können Arbeitnehmer auch im Aufsichtsrat vertreten sein (Unternehmensmitbestimmung).',
          ar: 'يشمل تمثيل الموظفين جميع الهيئات والمؤسسات التي تمثل مصالح الموظفين. يشمل ذلك على مستوى المنشأة مجلس العمل وتمثيل الشباب والمتدربين، وعلى المستوى فوق المنشأة النقابات العمالية. على مستوى الشركة يمكن أن يكون الموظفون ممثلين أيضاً في مجلس الرقابة (المشاركة على مستوى الشركة).',
        },
        keyPoints: [
          {
            de: 'Betriebliche Ebene: Betriebsrat (alle Arbeitnehmer), JAV (Jugendliche und Auszubildende)',
            ar: 'مستوى المنشأة: مجلس العمل (جميع الموظفين)، تمثيل الشباب والمتدربين (الشباب والمتدربون)',
          },
          {
            de: 'Überbetriebliche Ebene: Gewerkschaften vertreten die Interessen in Tarifverhandlungen und politisch',
            ar: 'المستوى فوق المنشأة: تمثل النقابات المصالح في مفاوضات التعرفة وسياسياً',
          },
          {
            de: 'Unternehmensmitbestimmung: In Kapitalgesellschaften ab 500 Mitarbeitern sind Arbeitnehmervertreter im Aufsichtsrat (Drittelbeteiligungsgesetz bzw. Mitbestimmungsgesetz)',
            ar: 'المشاركة على مستوى الشركة: في الشركات الرأسمالية من 500 موظف يكون ممثلو الموظفين في مجلس الرقابة (قانون المشاركة بالثلث أو قانون المشاركة)',
          },
        ],
        examples: [
          {
            de: 'In einem großen IT-Konzern mit 2.000 Mitarbeitern gibt es einen Betriebsrat, eine JAV und Arbeitnehmervertreter im Aufsichtsrat, die gemeinsam die Arbeitnehmerinteressen vertreten.',
            ar: 'في شركة تكنولوجيا معلومات كبيرة تضم 2,000 موظف يوجد مجلس عمل وتمثيل شباب ومتدربين وممثلو موظفين في مجلس الرقابة يمثلون معاً مصالح الموظفين.',
          },
        ],
        examRelevance: {
          de: 'Die verschiedenen Ebenen der Arbeitnehmervertretung und ihre jeweiligen Zuständigkeiten sind ein wichtiges Prüfungsthema.',
          ar: 'المستويات المختلفة لتمثيل الموظفين واختصاصاتها هي موضوع امتحاني مهم.',
        },
        summary: {
          de: 'Arbeitnehmer werden auf mehreren Ebenen vertreten: im Betrieb durch den Betriebsrat und die JAV, überbetrieblich durch Gewerkschaften und auf Unternehmensebene im Aufsichtsrat.',
          ar: 'يُمثل الموظفون على عدة مستويات: في المنشأة من خلال مجلس العمل وتمثيل الشباب والمتدربين، وفوق المنشأة من خلال النقابات وعلى مستوى الشركة في مجلس الرقابة.',
        },
      },
    },
  ],
};
