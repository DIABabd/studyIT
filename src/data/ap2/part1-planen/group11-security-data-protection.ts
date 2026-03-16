import type { TopicGroup } from '../../../types';

export const securityDataProtection: TopicGroup = {
  id: 'group11',
  name: {
    de: 'Sicherheit und Datenschutz',
    ar: 'الأمان وحماية البيانات',
  },
  description: {
    de: 'IT-Sicherheitsgrundlagen, Authentifizierung, Verschlüsselung und Datenschutz nach DSGVO',
    ar: 'أساسيات أمن تكنولوجيا المعلومات والمصادقة والتشفير وحماية البيانات وفق DSGVO',
  },
  topics: [
    {
      id: 'authentication',
      name: {
        de: 'Authentifizierung',
        ar: 'المصادقة (Authentication)',
      },
      content: {
        definition: {
          de: 'Authentifizierung ist der Prozess der Überprüfung der Identität eines Benutzers oder Systems. Sie beantwortet die Frage: „Bist du wirklich der, der du vorgibst zu sein?" Gängige Methoden sind Passwörter (Wissen), Token/Smartcard (Besitz) und Biometrie (Sein).',
          ar: 'المصادقة هي عملية التحقق من هوية مستخدم أو نظام. تجيب على السؤال: "هل أنت فعلاً من تدعي أنك؟" الأساليب الشائعة هي كلمات المرور (المعرفة) والرموز/البطاقات الذكية (الحيازة) والقياسات الحيوية (الكينونة).',
        },
        keyPoints: [
          {
            de: 'Drei Faktoren: Wissen (Passwort), Besitz (Token), Biometrie (Fingerabdruck)',
            ar: 'ثلاثة عوامل: المعرفة (كلمة المرور)، الحيازة (الرمز)، القياسات الحيوية (البصمة)',
          },
          {
            de: 'Multi-Faktor-Authentifizierung (MFA): Kombination von mindestens zwei Faktoren',
            ar: 'المصادقة متعددة العوامل (MFA): دمج عاملين على الأقل',
          },
          {
            de: 'Authentifizierung ≠ Autorisierung: Authentifizierung = Wer bist du? Autorisierung = Was darfst du?',
            ar: 'المصادقة ≠ التفويض: المصادقة = من أنت؟ التفويض = ماذا يُسمح لك؟',
          },
        ],
        examples: [
          {
            de: 'Online-Banking: 1. Faktor: Benutzername + Passwort (Wissen). 2. Faktor: TAN per SMS oder Authenticator-App (Besitz). Erst nach beiden Faktoren ist der Benutzer authentifiziert.',
            ar: 'الخدمات المصرفية عبر الإنترنت: العامل الأول: اسم المستخدم + كلمة المرور (المعرفة). العامل الثاني: TAN عبر SMS أو تطبيق Authenticator (الحيازة). فقط بعد العاملين يكون المستخدم مُصادقاً.',
          },
        ],
        examRelevance: {
          de: 'Die drei Faktoren der Authentifizierung und der Unterschied zur Autorisierung sind Prüfungsklassiker.',
          ar: 'العوامل الثلاثة للمصادقة والفرق مع التفويض كلاسيكيات الامتحان.',
        },
        summary: {
          de: 'Authentifizierung überprüft die Identität durch Wissen, Besitz oder Biometrie, idealerweise als Multi-Faktor-Authentifizierung.',
          ar: 'المصادقة تتحقق من الهوية عبر المعرفة أو الحيازة أو القياسات الحيوية، مثالياً كمصادقة متعددة العوامل.',
        },
      },
    },
    {
      id: 'authorization',
      name: {
        de: 'Autorisierung',
        ar: 'التفويض (Authorization)',
      },
      content: {
        definition: {
          de: 'Autorisierung ist der Prozess der Festlegung und Überprüfung von Zugriffsrechten. Sie bestimmt, welche Ressourcen und Aktionen einem authentifizierten Benutzer erlaubt sind. Gängige Modelle sind RBAC (Role-Based Access Control) und ACL (Access Control List).',
          ar: 'التفويض هو عملية تحديد والتحقق من حقوق الوصول. يحدد أي موارد وإجراءات مسموحة لمستخدم مُصادق. النماذج الشائعة هي RBAC (التحكم بالوصول على أساس الدور) و ACL (قائمة التحكم بالوصول).',
        },
        keyPoints: [
          {
            de: 'RBAC: Berechtigungen werden Rollen zugewiesen, Benutzer erhalten Rollen (z.B. Admin, Editor, Viewer)',
            ar: 'RBAC: الصلاحيات تُعيَّن للأدوار والمستخدمون يتلقون أدواراً (مثل مدير، محرر، مشاهد)',
          },
          {
            de: 'Principle of Least Privilege: Benutzer erhalten nur die minimal nötigen Rechte',
            ar: 'مبدأ الحد الأدنى من الامتيازات: المستخدمون يتلقون فقط الحقوق الضرورية الدنيا',
          },
          {
            de: 'Autorisierung erfolgt NACH der Authentifizierung',
            ar: 'التفويض يحدث بعد المصادقة',
          },
        ],
        examples: [
          {
            de: 'CMS-System: Rolle „Admin" = alle Rechte, Rolle „Editor" = Artikel erstellen/bearbeiten, Rolle „Viewer" = nur lesen. Ein neuer Mitarbeiter erhält die Rolle „Editor" und kann sofort Artikel bearbeiten, aber keine Benutzer verwalten.',
            ar: 'نظام CMS: دور "مدير" = جميع الحقوق، دور "محرر" = إنشاء/تعديل المقالات، دور "مشاهد" = قراءة فقط. موظف جديد يتلقى دور "محرر" ويمكنه فوراً تحرير المقالات لكن لا يمكنه إدارة المستخدمين.',
          },
        ],
        examRelevance: {
          de: 'RBAC und das Prinzip der minimalen Rechte werden häufig gefragt. Verstehen Sie die Reihenfolge: Erst Authentifizierung, dann Autorisierung.',
          ar: 'RBAC ومبدأ الحد الأدنى من الحقوق يُسأل عنهما كثيراً. افهم الترتيب: أولاً المصادقة ثم التفويض.',
        },
        summary: {
          de: 'Autorisierung steuert Zugriffsrechte über Rollenmodelle (RBAC) nach dem Prinzip der minimalen Berechtigung.',
          ar: 'التفويض يتحكم في حقوق الوصول عبر نماذج الأدوار (RBAC) وفق مبدأ الحد الأدنى من الصلاحيات.',
        },
      },
    },
    {
      id: 'password-security',
      name: {
        de: 'Passwortsicherheit',
        ar: 'أمان كلمات المرور',
      },
      content: {
        definition: {
          de: 'Passwortsicherheit umfasst Maßnahmen zum Schutz von Passwörtern vor unbefugtem Zugriff. Dazu gehören sichere Passwortrichtlinien, sichere Speicherung (Hashing + Salt) und Schutz vor Brute-Force- und Wörterbuchangriffen.',
          ar: 'أمان كلمات المرور يشمل إجراءات لحماية كلمات المرور من الوصول غير المصرح به. يتضمن سياسات كلمات مرور آمنة والتخزين الآمن (Hashing + Salt) والحماية من هجمات القوة الغاشمة وهجمات القاموس.',
        },
        keyPoints: [
          {
            de: 'Sichere Passwörter: Mindestens 8 Zeichen, Groß-/Kleinbuchstaben, Zahlen, Sonderzeichen',
            ar: 'كلمات مرور آمنة: 8 أحرف على الأقل، حروف كبيرة/صغيرة، أرقام، رموز خاصة',
          },
          {
            de: 'Passwörter dürfen NIEMALS im Klartext gespeichert werden – immer gehasht',
            ar: 'كلمات المرور لا يجب تخزينها أبداً كنص واضح – دائماً مُجزأة (hashed)',
          },
          {
            de: 'Brute-Force-Schutz: Account-Sperre nach mehreren Fehlversuchen, Rate Limiting',
            ar: 'حماية من القوة الغاشمة: قفل الحساب بعد عدة محاولات فاشلة، تحديد معدل المحاولات',
          },
        ],
        examples: [
          {
            de: 'Sichere Passwortspeicherung: 1. Benutzer gibt Passwort „Mein$icheresP4ss" ein. 2. System generiert zufälligen Salt. 3. Hash = bcrypt(Passwort + Salt). 4. Gespeichert wird nur der Hash + Salt (nie das Passwort).',
            ar: 'تخزين آمن لكلمات المرور: 1. المستخدم يُدخل كلمة المرور "Mein$icheresP4ss". 2. النظام يُنشئ Salt عشوائي. 3. Hash = bcrypt(كلمة المرور + Salt). 4. يُخزن فقط Hash + Salt (أبداً كلمة المرور).',
          },
        ],
        examRelevance: {
          de: 'Passwortsicherheit wird oft mit Hashing und Salt kombiniert gefragt. Warum Salt? Um Rainbow-Table-Angriffe zu verhindern.',
          ar: 'أمان كلمات المرور يُسأل غالباً مع Hashing و Salt. لماذا Salt؟ لمنع هجمات Rainbow-Table.',
        },
        summary: {
          de: 'Passwortsicherheit erfordert starke Richtlinien, gehashte Speicherung mit Salt und Schutz vor Brute-Force-Angriffen.',
          ar: 'أمان كلمات المرور يتطلب سياسات قوية وتخزين مُجزأ مع Salt وحماية من هجمات القوة الغاشمة.',
        },
      },
    },
    {
      id: 'hashing',
      name: {
        de: 'Hashing',
        ar: 'التجزئة (Hashing)',
      },
      content: {
        definition: {
          de: 'Hashing ist ein Verfahren, das Eingabedaten beliebiger Länge in eine Zeichenkette fester Länge (Hash) umwandelt. Hash-Funktionen sind Einwegfunktionen – aus dem Hash kann die Originaldaten nicht zurückgerechnet werden. Verwendet für Passwortspeicherung, Datenintegrität und digitale Signaturen.',
          ar: 'التجزئة هي إجراء يحول بيانات إدخال بأي طول إلى سلسلة أحرف بطول ثابت (Hash). دوال التجزئة أحادية الاتجاه – لا يمكن استرجاع البيانات الأصلية من Hash. تُستخدم لتخزين كلمات المرور وسلامة البيانات والتوقيعات الرقمية.',
        },
        keyPoints: [
          {
            de: 'Einwegfunktion: Hash → Original ist nicht möglich (im Gegensatz zur Verschlüsselung)',
            ar: 'دالة أحادية الاتجاه: Hash ← الأصل غير ممكن (على عكس التشفير)',
          },
          {
            de: 'Kollisionsresistenz: Verschiedene Eingaben sollten nicht den gleichen Hash erzeugen',
            ar: 'مقاومة التصادم: مدخلات مختلفة يجب ألا تنتج نفس Hash',
          },
          {
            de: 'Gängige Algorithmen: SHA-256, SHA-512, bcrypt (für Passwörter), MD5 (veraltet, unsicher)',
            ar: 'خوارزميات شائعة: SHA-256، SHA-512، bcrypt (لكلمات المرور)، MD5 (قديم، غير آمن)',
          },
        ],
        examples: [
          {
            de: 'SHA-256("Hallo") = "753692ec36adb4c794c973945eb2a99e4fef4d765..."  SHA-256("Hallo!") = "e52c5c744c24c8b3..." – Eine kleine Änderung erzeugt einen völlig anderen Hash (Lawineneffekt).',
            ar: 'SHA-256("Hallo") = "753692ec36adb4c794c973945eb2a99e4fef4d765..."  SHA-256("Hallo!") = "e52c5c744c24c8b3..." – تغيير صغير ينتج Hash مختلف تماماً (تأثير الانهيار).',
          },
        ],
        examRelevance: {
          de: 'Hashing vs. Verschlüsselung ist eine häufige Frage. Hash = Einweg, Verschlüsselung = umkehrbar. Kennen Sie gängige Algorithmen und deren Einsatz.',
          ar: 'التجزئة مقابل التشفير سؤال شائع. Hash = أحادي الاتجاه، التشفير = قابل للعكس. اعرف الخوارزميات الشائعة واستخدامها.',
        },
        summary: {
          de: 'Hashing erzeugt aus Eingabedaten einen nicht umkehrbaren Hash fester Länge für Passwortspeicherung und Integritätsprüfung.',
          ar: 'التجزئة تنتج من بيانات الإدخال Hash غير قابل للعكس بطول ثابت لتخزين كلمات المرور وفحص السلامة.',
        },
      },
    },
    {
      id: 'salt',
      name: {
        de: 'Salt',
        ar: 'الملح (Salt)',
      },
      content: {
        definition: {
          de: 'Ein Salt ist eine zufällige Zeichenkette, die vor dem Hashing an das Passwort angehängt wird. Dadurch erzeugen identische Passwörter unterschiedliche Hashes, was Rainbow-Table-Angriffe und vorberechnete Hash-Lookups verhindert.',
          ar: 'الملح (Salt) هو سلسلة أحرف عشوائية تُضاف لكلمة المرور قبل التجزئة. بذلك تنتج كلمات المرور المتطابقة Hashes مختلفة مما يمنع هجمات Rainbow-Table والبحث في جداول Hash المحسوبة مسبقاً.',
        },
        keyPoints: [
          {
            de: 'Jeder Benutzer erhält einen eigenen, zufälligen Salt',
            ar: 'كل مستخدم يحصل على Salt خاص وعشوائي',
          },
          {
            de: 'Salt wird zusammen mit dem Hash in der Datenbank gespeichert (nicht geheim)',
            ar: 'Salt يُخزن مع Hash في قاعدة البيانات (ليس سرياً)',
          },
          {
            de: 'Gleiche Passwörter verschiedener Benutzer erzeugen unterschiedliche Hashes',
            ar: 'كلمات المرور المتطابقة لمستخدمين مختلفين تنتج Hashes مختلفة',
          },
        ],
        examples: [
          {
            de: 'Ohne Salt: hash("passwort123") = "abc123" – Angreifer kann vorberechnete Tabelle nutzen. Mit Salt: hash("passwort123" + "xK9mP2") = "def789" und hash("passwort123" + "qR3nL7") = "ghi456" – Gleiche Passwörter, aber verschiedene Hashes.',
            ar: 'بدون Salt: hash("passwort123") = "abc123" – المهاجم يمكنه استخدام جدول محسوب مسبقاً. مع Salt: hash("passwort123" + "xK9mP2") = "def789" و hash("passwort123" + "qR3nL7") = "ghi456" – نفس كلمات المرور لكن Hashes مختلفة.',
          },
        ],
        examRelevance: {
          de: 'Warum Salt? Gegen Rainbow-Table-Angriffe. Salt muss nicht geheim sein, aber für jeden Benutzer unterschiedlich. Dies wird oft gefragt.',
          ar: 'لماذا Salt؟ ضد هجمات Rainbow-Table. Salt لا يجب أن يكون سرياً لكن مختلف لكل مستخدم. يُسأل عن هذا كثيراً.',
        },
        summary: {
          de: 'Salt ist eine zufällige Zeichenkette pro Benutzer, die vor dem Hashing hinzugefügt wird, um Rainbow-Table-Angriffe zu verhindern.',
          ar: 'Salt هو سلسلة أحرف عشوائية لكل مستخدم تُضاف قبل التجزئة لمنع هجمات Rainbow-Table.',
        },
      },
    },
    {
      id: 'encryption-basics',
      name: {
        de: 'Verschlüsselungsgrundlagen',
        ar: 'أساسيات التشفير',
      },
      content: {
        definition: {
          de: 'Verschlüsselung ist ein Verfahren zur Umwandlung von Klartext in Geheimtext (Chiffretext), der nur mit dem richtigen Schlüssel wieder entschlüsselt werden kann. Man unterscheidet symmetrische (gleicher Schlüssel) und asymmetrische Verschlüsselung (öffentlicher + privater Schlüssel).',
          ar: 'التشفير هو إجراء لتحويل النص الواضح إلى نص مشفر لا يمكن فك تشفيره إلا بالمفتاح الصحيح. يُميَّز بين التشفير المتماثل (نفس المفتاح) والتشفير غير المتماثل (مفتاح عام + مفتاح خاص).',
        },
        keyPoints: [
          {
            de: 'Symmetrisch: Ein Schlüssel für Ver- und Entschlüsselung (z.B. AES). Schnell, aber Schlüsselaustausch problematisch',
            ar: 'متماثل: مفتاح واحد للتشفير وفك التشفير (مثل AES). سريع لكن تبادل المفتاح إشكالي',
          },
          {
            de: 'Asymmetrisch: Öffentlicher Schlüssel zum Verschlüsseln, privater zum Entschlüsseln (z.B. RSA)',
            ar: 'غير متماثل: مفتاح عام للتشفير ومفتاح خاص لفك التشفير (مثل RSA)',
          },
          {
            de: 'HTTPS nutzt hybride Verschlüsselung: Asymmetrisch für Schlüsselaustausch, dann symmetrisch für Daten',
            ar: 'HTTPS يستخدم تشفير هجين: غير متماثل لتبادل المفاتيح ثم متماثل للبيانات',
          },
        ],
        examples: [
          {
            de: 'HTTPS-Verbindung: 1. Client und Server tauschen öffentliche Schlüssel aus (asymmetrisch). 2. Client generiert Sitzungsschlüssel und sendet ihn verschlüsselt. 3. Beide nutzen den Sitzungsschlüssel für die symmetrische Verschlüsselung der Daten.',
            ar: 'اتصال HTTPS: 1. العميل والخادم يتبادلان المفاتيح العامة (غير متماثل). 2. العميل ينشئ مفتاح جلسة ويرسله مشفراً. 3. كلاهما يستخدم مفتاح الجلسة للتشفير المتماثل للبيانات.',
          },
        ],
        examRelevance: {
          de: 'Symmetrisch vs. Asymmetrisch ist eine Kernfrage. Kennen Sie Beispiele (AES, RSA) und den Einsatz in HTTPS.',
          ar: 'متماثل مقابل غير متماثل سؤال محوري. اعرف أمثلة (AES, RSA) والاستخدام في HTTPS.',
        },
        summary: {
          de: 'Verschlüsselung schützt Daten durch symmetrische (AES) oder asymmetrische (RSA) Verfahren, oft kombiniert in hybriden Ansätzen wie HTTPS.',
          ar: 'التشفير يحمي البيانات عبر إجراءات متماثلة (AES) أو غير متماثلة (RSA)، غالباً مدمجة في نهج هجينة مثل HTTPS.',
        },
      },
    },
    {
      id: 'data-protection-dsgvo',
      name: {
        de: 'Datenschutz (DSGVO)',
        ar: 'حماية البيانات (DSGVO)',
      },
      content: {
        definition: {
          de: 'Die DSGVO (Datenschutz-Grundverordnung) ist die europäische Verordnung zum Schutz personenbezogener Daten. Sie regelt die Erhebung, Verarbeitung und Speicherung personenbezogener Daten und gibt betroffenen Personen Rechte wie Auskunft, Löschung und Datenportabilität.',
          ar: 'DSGVO (اللائحة العامة لحماية البيانات) هي اللائحة الأوروبية لحماية البيانات الشخصية. تنظم جمع ومعالجة وتخزين البيانات الشخصية وتمنح الأشخاص المعنيين حقوقاً مثل الاستعلام والحذف وقابلية نقل البيانات.',
        },
        keyPoints: [
          {
            de: 'Personenbezogene Daten: Name, E-Mail, IP-Adresse, Standort, Gesundheitsdaten',
            ar: 'البيانات الشخصية: الاسم، البريد الإلكتروني، عنوان IP، الموقع، البيانات الصحية',
          },
          {
            de: 'Grundsätze: Zweckbindung, Datenminimierung, Speicherbegrenzung, Integrität und Vertraulichkeit',
            ar: 'المبادئ: تحديد الغرض، تقليل البيانات، تحديد التخزين، السلامة والسرية',
          },
          {
            de: 'Betroffenenrechte: Auskunft, Berichtigung, Löschung (Recht auf Vergessenwerden), Datenübertragbarkeit',
            ar: 'حقوق المعنيين: الاستعلام، التصحيح، الحذف (الحق في النسيان)، قابلية نقل البيانات',
          },
          {
            de: 'Verarbeitung nur mit Rechtsgrundlage: Einwilligung, Vertrag, berechtigtes Interesse, gesetzliche Pflicht',
            ar: 'المعالجة فقط بأساس قانوني: الموافقة، العقد، المصلحة المشروعة، الالتزام القانوني',
          },
        ],
        examples: [
          {
            de: 'Ein Online-Shop muss: 1. Datenschutzerklärung bereitstellen. 2. Nur notwendige Daten erheben (Datenminimierung). 3. Auf Anfrage alle gespeicherten Daten eines Kunden herausgeben (Auskunftsrecht). 4. Daten löschen, wenn der Zweck entfällt.',
            ar: 'متجر إلكتروني يجب أن: 1. يوفر إعلان حماية البيانات. 2. يجمع فقط البيانات الضرورية (تقليل البيانات). 3. يُخرج عند الطلب جميع البيانات المخزنة لعميل (حق الاستعلام). 4. يحذف البيانات عند انتهاء الغرض.',
          },
        ],
        examRelevance: {
          de: 'DSGVO-Grundsätze und Betroffenenrechte sind häufige Prüfungsthemen. Kennen Sie die Begriffe Datenminimierung, Zweckbindung und die Betroffenenrechte.',
          ar: 'مبادئ DSGVO وحقوق المعنيين مواضيع امتحان شائعة. اعرف مصطلحات تقليل البيانات وتحديد الغرض وحقوق المعنيين.',
        },
        summary: {
          de: 'Die DSGVO schützt personenbezogene Daten durch Grundsätze wie Datenminimierung und gibt Betroffenen Rechte auf Auskunft, Löschung und Datenübertragbarkeit.',
          ar: 'DSGVO تحمي البيانات الشخصية من خلال مبادئ مثل تقليل البيانات وتمنح المعنيين حقوقاً في الاستعلام والحذف ونقل البيانات.',
        },
      },
    },
  ],
};
