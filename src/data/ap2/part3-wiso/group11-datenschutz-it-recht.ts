import type { TopicGroup } from '../../../types';

export const datenschutzItRecht: TopicGroup = {
  id: 'group11-datenschutz-it-recht',
  name: {
    de: 'Datenschutz und IT-Recht',
    ar: 'حماية البيانات وقانون تكنولوجيا المعلومات',
  },
  description: {
    de: 'Datenschutz-Grundverordnung (DSGVO), Datenschutzprinzipien, persönliche Daten und Datensicherheit',
    ar: 'اللائحة العامة لحماية البيانات (DSGVO)، مبادئ حماية البيانات، البيانات الشخصية وأمن البيانات',
  },
  priority: 'medium',
  topics: [
    {
      id: 'dsgvo',
      name: { de: 'DSGVO', ar: 'اللائحة العامة لحماية البيانات' },
      content: {
        definition: {
          de: 'Die Datenschutz-Grundverordnung (DSGVO, EU-Verordnung 2016/679) ist seit dem 25. Mai 2018 die zentrale Rechtsgrundlage für den Datenschutz in der Europäischen Union. Sie regelt die Verarbeitung personenbezogener Daten durch Unternehmen und öffentliche Stellen. Ziel ist der Schutz natürlicher Personen bei der Verarbeitung ihrer Daten und der freie Datenverkehr im EU-Binnenmarkt.',
          ar: 'اللائحة العامة لحماية البيانات (DSGVO، لائحة الاتحاد الأوروبي 2016/679) هي منذ 25 مايو 2018 الأساس القانوني المركزي لحماية البيانات في الاتحاد الأوروبي. تنظم معالجة البيانات الشخصية من قبل الشركات والجهات العامة. الهدف هو حماية الأشخاص الطبيعيين عند معالجة بياناتهم وحرية تداول البيانات في السوق الداخلية للاتحاد الأوروبي.',
        },
        keyPoints: [
          {
            de: 'Grundprinzipien: Rechtmäßigkeit, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität und Vertraulichkeit, Rechenschaftspflicht',
            ar: 'المبادئ الأساسية: المشروعية، تحديد الغرض، تقليل البيانات، الدقة، تقييد التخزين، السلامة والسرية، المساءلة',
          },
          {
            de: 'Betroffenenrechte: Recht auf Auskunft, Berichtigung, Löschung (Recht auf Vergessenwerden), Datenübertragbarkeit, Widerspruch',
            ar: 'حقوق المتضررين: حق الاطلاع، التصحيح، المحو (الحق في النسيان)، نقل البيانات، الاعتراض',
          },
          {
            de: 'Bußgelder bei Verstößen: Bis zu 20 Mio. € oder 4% des weltweiten Jahresumsatzes',
            ar: 'غرامات عند المخالفات: حتى 20 مليون يورو أو 4% من الإيرادات السنوية العالمية',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Unternehmen muss eine Datenschutzerklärung auf seiner Website haben, die erklärt, welche Daten zu welchem Zweck erhoben werden. Kunden müssen der Verarbeitung aktiv zustimmen (Einwilligung).',
            ar: 'يجب أن يكون لدى شركة تكنولوجيا معلومات إعلان حماية بيانات على موقعها الإلكتروني يشرح أي بيانات تُجمع لأي غرض. يجب على العملاء الموافقة بنشاط على المعالجة (الموافقة).',
          },
        ],
        examRelevance: {
          de: 'Die DSGVO ist ein zentrales Prüfungsthema. Grundprinzipien, Betroffenenrechte und die Pflichten von Unternehmen werden häufig abgefragt.',
          ar: 'اللائحة العامة لحماية البيانات هي موضوع امتحاني محوري. يتم السؤال بشكل متكرر عن المبادئ الأساسية وحقوق المتضررين وواجبات الشركات.',
        },
        summary: {
          de: 'Die DSGVO regelt den Schutz personenbezogener Daten in der EU. Sie definiert Grundprinzipien, Betroffenenrechte und strenge Bußgelder bei Verstößen.',
          ar: 'تنظم DSGVO حماية البيانات الشخصية في الاتحاد الأوروبي. تحدد المبادئ الأساسية وحقوق المتضررين وغرامات صارمة عند المخالفات.',
        },
      },
    },
    {
      id: 'datenschutz',
      name: { de: 'Datenschutz', ar: 'حماية البيانات' },
      content: {
        definition: {
          de: 'Datenschutz ist das Recht jeder Person, selbst über die Verwendung ihrer persönlichen Daten zu bestimmen (informationelle Selbstbestimmung). Er schützt die Privatsphäre und verhindert den Missbrauch personenbezogener Daten. In Deutschland wird er durch die DSGVO und das Bundesdatenschutzgesetz (BDSG) geregelt. Unternehmen ab einer bestimmten Größe müssen einen Datenschutzbeauftragten benennen.',
          ar: 'حماية البيانات هي حق كل شخص في تقرير استخدام بياناته الشخصية بنفسه (تقرير المصير المعلوماتي). تحمي الخصوصية وتمنع إساءة استخدام البيانات الشخصية. في ألمانيا يتم تنظيمها من خلال DSGVO وقانون حماية البيانات الاتحادي (BDSG). يجب على الشركات من حجم معين تعيين مسؤول حماية بيانات.',
        },
        keyPoints: [
          {
            de: 'Verbot mit Erlaubnisvorbehalt: Datenverarbeitung ist grundsätzlich verboten, es sei denn, es gibt eine Rechtsgrundlage (Einwilligung, Vertrag, berechtigtes Interesse)',
            ar: 'حظر مع تحفظ الإذن: معالجة البيانات محظورة أساساً ما لم يكن هناك أساس قانوني (موافقة، عقد، مصلحة مشروعة)',
          },
          {
            de: 'Datenschutzbeauftragter: Pflicht ab 20 Personen, die regelmäßig personenbezogene Daten verarbeiten',
            ar: 'مسؤول حماية البيانات: إلزامي من 20 شخصاً يعالجون البيانات الشخصية بانتظام',
          },
          {
            de: 'Technische und organisatorische Maßnahmen (TOMs): Unternehmen müssen angemessene Schutzmaßnahmen umsetzen',
            ar: 'التدابير التقنية والتنظيمية (TOMs): يجب على الشركات تنفيذ تدابير حماية مناسبة',
          },
        ],
        examples: [
          {
            de: 'Ein Softwareunternehmen speichert Kundendaten in einer verschlüsselten Datenbank, beschränkt den Zugriff auf autorisierte Mitarbeiter und führt regelmäßige Datenschutz-Audits durch.',
            ar: 'شركة برمجيات تخزن بيانات العملاء في قاعدة بيانات مشفرة وتقصر الوصول على الموظفين المصرح لهم وتجري مراجعات منتظمة لحماية البيانات.',
          },
        ],
        examRelevance: {
          de: 'Datenschutzprinzipien und die Pflicht zum Datenschutzbeauftragten sind wichtige Prüfungsinhalte für IT-Berufe.',
          ar: 'مبادئ حماية البيانات والالتزام بمسؤول حماية البيانات هي محتويات امتحانية مهمة لمهن تكنولوجيا المعلومات.',
        },
        summary: {
          de: 'Datenschutz schützt die informationelle Selbstbestimmung. Datenverarbeitung braucht eine Rechtsgrundlage. Unternehmen müssen TOMs umsetzen.',
          ar: 'تحمي حماية البيانات تقرير المصير المعلوماتي. معالجة البيانات تحتاج أساساً قانونياً. يجب على الشركات تنفيذ تدابير تقنية وتنظيمية.',
        },
      },
    },
    {
      id: 'persoenliche-daten',
      name: { de: 'Persönliche Daten', ar: 'البيانات الشخصية' },
      content: {
        definition: {
          de: 'Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (Art. 4 Nr. 1 DSGVO). Dazu gehören Name, Adresse, E-Mail, IP-Adresse, Standortdaten, Gesundheitsdaten und biometrische Daten. Besondere Kategorien personenbezogener Daten (z.B. Gesundheit, Religion, politische Meinung) unterliegen einem erhöhten Schutz.',
          ar: 'البيانات الشخصية هي جميع المعلومات المتعلقة بشخص طبيعي مُحدد أو قابل للتحديد (المادة 4 رقم 1 DSGVO). تشمل الاسم والعنوان والبريد الإلكتروني وعنوان IP وبيانات الموقع والبيانات الصحية والبيانات البيومترية. الفئات الخاصة من البيانات الشخصية (مثل الصحة والدين والرأي السياسي) تخضع لحماية مشددة.',
        },
        keyPoints: [
          {
            de: 'Direkte Identifizierung: Name, Personalausweisnummer, Sozialversicherungsnummer',
            ar: 'التحديد المباشر: الاسم، رقم بطاقة الهوية، رقم التأمين الاجتماعي',
          },
          {
            de: 'Indirekte Identifizierung: IP-Adresse, Cookie-Daten, Standortdaten, Gerätekennungen',
            ar: 'التحديد غير المباشر: عنوان IP، بيانات ملفات تعريف الارتباط، بيانات الموقع، معرّفات الأجهزة',
          },
          {
            de: 'Besondere Kategorien (Art. 9 DSGVO): Gesundheitsdaten, biometrische Daten, ethnische Herkunft, religiöse Überzeugung → erhöhter Schutz, Verarbeitung grundsätzlich verboten',
            ar: 'الفئات الخاصة (المادة 9 DSGVO): البيانات الصحية، البيانات البيومترية، الأصل العرقي، المعتقد الديني → حماية مشددة، المعالجة محظورة أساساً',
          },
        ],
        examples: [
          {
            de: 'Eine Bewerberdatenbank enthält Namen, Adressen und Qualifikationen – alles personenbezogene Daten, die der DSGVO unterliegen.',
            ar: 'قاعدة بيانات المتقدمين تحتوي على أسماء وعناوين ومؤهلات – كلها بيانات شخصية تخضع لـ DSGVO.',
          },
        ],
        examRelevance: {
          de: 'Die Definition personenbezogener Daten und die Abgrenzung zu anonymisierten/pseudonymisierten Daten sind prüfungsrelevant.',
          ar: 'تعريف البيانات الشخصية والتمييز عن البيانات المجهولة/المستعارة ذات صلة بالامتحان.',
        },
        summary: {
          de: 'Personenbezogene Daten sind alle Informationen, die eine Person identifizierbar machen. Besondere Kategorien genießen erhöhten Schutz.',
          ar: 'البيانات الشخصية هي جميع المعلومات التي تجعل الشخص قابلاً للتحديد. الفئات الخاصة تتمتع بحماية مشددة.',
        },
      },
    },
    {
      id: 'datensicherheit',
      name: { de: 'Datensicherheit', ar: 'أمن البيانات' },
      content: {
        definition: {
          de: 'Datensicherheit umfasst alle technischen und organisatorischen Maßnahmen zum Schutz von Daten vor Verlust, Manipulation und unbefugtem Zugriff. Im Gegensatz zum Datenschutz (der sich auf personenbezogene Daten konzentriert) bezieht sich Datensicherheit auf alle Daten. Die drei Schutzziele sind Vertraulichkeit, Integrität und Verfügbarkeit (CIA-Triade).',
          ar: 'يشمل أمن البيانات جميع التدابير التقنية والتنظيمية لحماية البيانات من الفقدان والتلاعب والوصول غير المصرح به. على عكس حماية البيانات (التي تركز على البيانات الشخصية) يتعلق أمن البيانات بجميع البيانات. أهداف الحماية الثلاثة هي السرية والسلامة والتوافر (ثالوث CIA).',
        },
        keyPoints: [
          {
            de: 'CIA-Triade: Vertraulichkeit (Confidentiality), Integrität (Integrity), Verfügbarkeit (Availability)',
            ar: 'ثالوث CIA: السرية (Confidentiality)، السلامة (Integrity)، التوافر (Availability)',
          },
          {
            de: 'Technische Maßnahmen: Verschlüsselung, Firewalls, Zugangskontrolle, Backup-Systeme, Virenschutz',
            ar: 'التدابير التقنية: التشفير، جدران الحماية، التحكم في الوصول، أنظمة النسخ الاحتياطي، مكافحة الفيروسات',
          },
          {
            de: 'Organisatorische Maßnahmen: Schulungen, Zugangsberechtigungen, Sicherheitsrichtlinien, Notfallpläne',
            ar: 'التدابير التنظيمية: التدريبات، صلاحيات الوصول، سياسات الأمان، خطط الطوارئ',
          },
        ],
        examples: [
          {
            de: 'Ein IT-Unternehmen implementiert: Verschlüsselung aller Festplatten (Vertraulichkeit), Hash-Prüfsummen für Downloads (Integrität), redundante Server mit Failover (Verfügbarkeit).',
            ar: 'تُنفذ شركة تكنولوجيا معلومات: تشفير جميع الأقراص الصلبة (السرية)، مجاميع التحقق للتنزيلات (السلامة)، خوادم احتياطية مع تحويل تلقائي (التوافر).',
          },
        ],
        examRelevance: {
          de: 'Die CIA-Triade und die Unterscheidung zwischen Datenschutz und Datensicherheit sind zentrale Prüfungsthemen für IT-Berufe.',
          ar: 'ثالوث CIA والتمييز بين حماية البيانات وأمن البيانات هي مواضيع امتحانية محورية لمهن تكنولوجيا المعلومات.',
        },
        summary: {
          de: 'Datensicherheit schützt alle Daten durch die CIA-Triade: Vertraulichkeit, Integrität und Verfügbarkeit. Sie umfasst technische und organisatorische Maßnahmen.',
          ar: 'يحمي أمن البيانات جميع البيانات من خلال ثالوث CIA: السرية والسلامة والتوافر. يشمل تدابير تقنية وتنظيمية.',
        },
      },
    },
  ],
};
