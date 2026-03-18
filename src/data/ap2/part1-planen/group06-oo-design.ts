import type { TopicGroup } from '../../../types';

export const ooDesign: TopicGroup = {
  id: 'group06',
  name: {
    de: 'Objektorientiertes Design',
    ar: 'التصميم كائني التوجه',
  },
  description: {
    de: 'Grundlagen der objektorientierten Programmierung: Klassen, Vererbung, Polymorphismus und Kapselung',
    ar: 'أساسيات البرمجة كائنية التوجه: الفئات، الوراثة، تعدد الأشكال والتغليف',
  },
  priority: 'high',
  topics: [
    {
      id: 'classes',
      name: {
        de: 'Klassen',
        ar: 'الفئات (Classes)',
      },
      content: {
        definition: {
          de: 'Eine Klasse ist ein Bauplan (Blueprint) für Objekte. Sie definiert Attribute (Daten) und Methoden (Verhalten), die alle Objekte dieser Klasse gemeinsam haben. Klassen sind das zentrale Konzept der objektorientierten Programmierung.',
          ar: 'الفئة هي مخطط (Blueprint) للكائنات. تحدد الخصائص (البيانات) والأساليب (السلوك) التي تشترك فيها جميع كائنات هذه الفئة. الفئات هي المفهوم المركزي للبرمجة كائنية التوجه.',
        },
        keyPoints: [
          {
            de: 'Eine Klasse ist eine abstrakte Beschreibung, ein Objekt ist eine konkrete Instanz',
            ar: 'الفئة هي وصف مجرد والكائن هو نسخة ملموسة',
          },
          {
            de: 'Konstruktor: Spezielle Methode zur Initialisierung neuer Objekte',
            ar: 'المُنشئ: أسلوب خاص لتهيئة كائنات جديدة',
          },
          {
            de: 'Klassen fördern Wiederverwendbarkeit und Modularität des Codes',
            ar: 'الفئات تعزز إعادة استخدام الكود والتقسيم المعياري',
          },
        ],
        examples: [
          {
            de: 'Klasse „Auto": Attribute: marke, farbe, baujahr. Methoden: starten(), bremsen(), beschleunigen(). Objekt: meinAuto = new Auto("BMW", "blau", 2024).',
            ar: 'فئة "سيارة": خصائص: العلامة التجارية، اللون، سنة الصنع. أساليب: تشغيل()، فرملة()، تسريع(). كائن: سيارتي = new Auto("BMW", "أزرق", 2024).',
          },
        ],
        examRelevance: {
          de: 'Der Unterschied zwischen Klasse und Objekt ist eine Basisfrage. Klasse = Bauplan, Objekt = Instanz. Können Sie Klassen aus Szenarien ableiten.',
          ar: 'الفرق بين الفئة والكائن سؤال أساسي. الفئة = مخطط، الكائن = نسخة. كن قادراً على استخلاص الفئات من السيناريوهات.',
        },
        summary: {
          de: 'Eine Klasse ist der Bauplan für Objekte und definiert gemeinsame Attribute und Methoden für alle Instanzen.',
          ar: 'الفئة هي المخطط للكائنات وتحدد الخصائص والأساليب المشتركة لجميع النسخ.',
        },
      },
    },
    {
      id: 'attributes',
      name: {
        de: 'Attribute',
        ar: 'الخصائص (Attributes)',
      },
      content: {
        definition: {
          de: 'Attribute sind die Eigenschaften (Datenfelder) einer Klasse, die den Zustand eines Objekts beschreiben. Jedes Attribut hat einen Namen, einen Datentyp und eine Sichtbarkeit. Attribute speichern die Daten, die ein Objekt charakterisieren.',
          ar: 'الخصائص هي صفات (حقول البيانات) للفئة التي تصف حالة الكائن. لكل خاصية اسم ونوع بيانات ومستوى رؤية. تخزن الخصائص البيانات التي تميز الكائن.',
        },
        keyPoints: [
          {
            de: 'Notation in UML: Sichtbarkeit name: Typ = Standardwert (z.B. - alter: int = 0)',
            ar: 'الترميز في UML: مستوى الرؤية الاسم: النوع = القيمة الافتراضية (مثل - العمر: int = 0)',
          },
          {
            de: 'Instanzattribute gehören zu einem Objekt, Klassenattribute (static) gehören zur Klasse',
            ar: 'خصائص النسخة تنتمي للكائن، خصائص الفئة (static) تنتمي للفئة',
          },
          {
            de: 'Attribute sollten privat sein und über Getter/Setter zugänglich gemacht werden (Kapselung)',
            ar: 'يجب أن تكون الخصائص خاصة ويتم الوصول إليها عبر Getter/Setter (التغليف)',
          },
        ],
        examples: [
          {
            de: 'Klasse „Mitarbeiter": - personalnummer: int (private), - name: String (private), - gehalt: double (private), - static anzahlMitarbeiter: int (Klassenattribut). Zugriff über: + getName(): String, + setGehalt(g: double): void.',
            ar: 'فئة "موظف": - رقم الموظف: int (خاص)، - الاسم: String (خاص)، - الراتب: double (خاص)، - static عدد الموظفين: int (خاصية فئة). الوصول عبر: + getName(): String، + setGehalt(g: double): void.',
          },
        ],
        examRelevance: {
          de: 'Kennen Sie die UML-Notation für Attribute und den Unterschied zwischen Instanz- und Klassenattributen (static).',
          ar: 'اعرف ترميز UML للخصائص والفرق بين خصائص النسخة وخصائص الفئة (static).',
        },
        summary: {
          de: 'Attribute beschreiben den Zustand eines Objekts mit Name, Typ und Sichtbarkeit und sollten gekapselt sein.',
          ar: 'الخصائص تصف حالة الكائن بالاسم والنوع ومستوى الرؤية ويجب أن تكون مغلفة.',
        },
      },
    },
    {
      id: 'methods',
      name: {
        de: 'Methoden',
        ar: 'الأساليب (Methods)',
      },
      content: {
        definition: {
          de: 'Methoden definieren das Verhalten einer Klasse – die Operationen, die auf den Attributen eines Objekts ausgeführt werden können. Sie bestehen aus Signatur (Name, Parameter, Rückgabetyp) und Implementierung (Methodenrumpf).',
          ar: 'الأساليب تحدد سلوك الفئة – العمليات التي يمكن تنفيذها على خصائص الكائن. تتكون من التوقيع (الاسم، المعاملات، نوع الإرجاع) والتنفيذ (جسم الأسلوب).',
        },
        keyPoints: [
          {
            de: 'UML-Notation: Sichtbarkeit name(parameter: Typ): Rückgabetyp',
            ar: 'ترميز UML: مستوى الرؤية الاسم(المعامل: النوع): نوع الإرجاع',
          },
          {
            de: 'Getter/Setter: Methoden zum kontrollierten Zugriff auf private Attribute',
            ar: 'Getter/Setter: أساليب للوصول المتحكم به للخصائص الخاصة',
          },
          {
            de: 'Überladung: Mehrere Methoden mit gleichem Namen aber unterschiedlichen Parametern',
            ar: 'التحميل الزائد: عدة أساليب بنفس الاسم لكن بمعاملات مختلفة',
          },
        ],
        examples: [
          {
            de: 'Klasse „Konto": + einzahlen(betrag: double): void, + abheben(betrag: double): boolean, + getKontostand(): double. Die Methode abheben() gibt false zurück, wenn der Kontostand nicht ausreicht.',
            ar: 'فئة "حساب": + إيداع(مبلغ: double): void، + سحب(مبلغ: double): boolean، + getKontostand(): double. أسلوب السحب() يرجع false إذا كان الرصيد غير كافٍ.',
          },
        ],
        examRelevance: {
          de: 'Methoden und ihre Signaturen sind fester Bestandteil von Klassendiagrammen in der Prüfung. Kennen Sie die UML-Notation.',
          ar: 'الأساليب وتوقيعاتها جزء ثابت من مخططات الفئات في الامتحان. اعرف ترميز UML.',
        },
        summary: {
          de: 'Methoden definieren das Verhalten von Objekten durch Operationen mit Parametern und Rückgabetypen.',
          ar: 'الأساليب تحدد سلوك الكائنات من خلال عمليات بمعاملات وأنواع إرجاع.',
        },
      },
    },
    {
      id: 'interfaces',
      name: {
        de: 'Schnittstellen (Interfaces)',
        ar: 'الواجهات (Interfaces)',
      },
      content: {
        definition: {
          de: 'Ein Interface definiert einen Vertrag – eine Sammlung von Methodensignaturen ohne Implementierung, die eine Klasse implementieren muss. Interfaces ermöglichen lose Kopplung und definieren, WAS eine Klasse können muss, ohne festzulegen WIE.',
          ar: 'الواجهة تحدد عقداً – مجموعة من توقيعات الأساليب بدون تنفيذ يجب على الفئة تنفيذها. تتيح الواجهات الاقتران المرن وتحدد ماذا يجب أن تستطيع الفئة فعله دون تحديد كيف.',
        },
        keyPoints: [
          {
            de: 'UML: <<interface>> Stereotyp, gestrichelter Pfeil mit leerer Dreiecksspitze (Realisierung)',
            ar: 'UML: نمط <<interface>>، سهم متقطع برأس مثلث فارغ (التحقيق)',
          },
          {
            de: 'Eine Klasse kann mehrere Interfaces implementieren (Mehrfachvererbung von Verhalten)',
            ar: 'يمكن للفئة تنفيذ عدة واجهات (الوراثة المتعددة للسلوك)',
          },
          {
            de: 'Interfaces enthalten keine Attribute und keine Implementierung (nur abstrakte Methoden)',
            ar: 'الواجهات لا تحتوي خصائص ولا تنفيذ (أساليب مجردة فقط)',
          },
        ],
        examples: [
          {
            de: 'Interface „Speicherbar" mit Methode speichern(): void. Klassen „Dokument" und „Bild" implementieren beide das Interface Speicherbar, aber mit unterschiedlicher Implementierung.',
            ar: 'واجهة "قابل للحفظ" بأسلوب حفظ(): void. فئتا "مستند" و"صورة" كلاهما ينفذ واجهة "قابل للحفظ" لكن بتنفيذ مختلف.',
          },
        ],
        examRelevance: {
          de: 'Interfaces vs. abstrakte Klassen ist eine klassische Prüfungsfrage. Interface = reiner Vertrag ohne Implementierung, abstrakte Klasse = kann auch Implementierung enthalten.',
          ar: 'الواجهات مقابل الفئات المجردة سؤال امتحان كلاسيكي. الواجهة = عقد بحت بدون تنفيذ، الفئة المجردة = يمكن أن تحتوي تنفيذاً أيضاً.',
        },
        summary: {
          de: 'Interfaces definieren Verträge (Methodensignaturen) ohne Implementierung und ermöglichen lose Kopplung zwischen Klassen.',
          ar: 'الواجهات تحدد عقوداً (توقيعات أساليب) بدون تنفيذ وتتيح الاقتران المرن بين الفئات.',
        },
      },
    },
    {
      id: 'abstract-classes',
      name: {
        de: 'Abstrakte Klassen',
        ar: 'الفئات المجردة',
      },
      content: {
        definition: {
          de: 'Eine abstrakte Klasse ist eine Klasse, die nicht direkt instanziiert werden kann. Sie kann sowohl konkrete Methoden (mit Implementierung) als auch abstrakte Methoden (ohne Implementierung) enthalten. Unterklassen müssen alle abstrakten Methoden implementieren.',
          ar: 'الفئة المجردة هي فئة لا يمكن إنشاء نسخة منها مباشرة. يمكن أن تحتوي أساليب ملموسة (مع تنفيذ) وأساليب مجردة (بدون تنفيذ). يجب على الفئات الأبناء تنفيذ جميع الأساليب المجردة.',
        },
        keyPoints: [
          {
            de: 'UML: Klassenname wird kursiv geschrieben oder mit {abstract} markiert',
            ar: 'UML: اسم الفئة يُكتب بخط مائل أو يُعلّم بـ {abstract}',
          },
          {
            de: 'Kann Attribute, konkrete Methoden UND abstrakte Methoden haben',
            ar: 'يمكن أن تحتوي خصائص وأساليب ملموسة وأساليب مجردة',
          },
          {
            de: 'Dient als gemeinsame Basisklasse für verwandte Klassen',
            ar: 'تعمل كفئة أساسية مشتركة للفئات المرتبطة',
          },
        ],
        examples: [
          {
            de: 'Abstrakte Klasse „Form" mit konkreter Methode getFarbe() und abstrakter Methode berechneFlaeche(). Unterklasse „Kreis" implementiert berechneFlaeche() mit π × r². Unterklasse „Rechteck" implementiert es mit a × b.',
            ar: 'فئة مجردة "شكل" بأسلوب ملموس getFarbe() وأسلوب مجرد berechneFlaeche(). فئة ابن "دائرة" تنفذ berechneFlaeche() بـ π × r². فئة ابن "مستطيل" تنفذها بـ a × b.',
          },
        ],
        examRelevance: {
          de: 'Kennen Sie den Unterschied: Interface = nur abstrakte Methoden, Abstrakte Klasse = kann auch konkrete Methoden und Attribute haben. Wann nutzt man was?',
          ar: 'اعرف الفرق: الواجهة = أساليب مجردة فقط، الفئة المجردة = يمكن أن تحتوي أيضاً أساليب ملموسة وخصائص. متى تستخدم أيهما؟',
        },
        summary: {
          de: 'Abstrakte Klassen sind nicht instanziierbare Basisklassen, die konkrete und abstrakte Methoden kombinieren können.',
          ar: 'الفئات المجردة هي فئات أساسية غير قابلة للإنشاء يمكنها دمج أساليب ملموسة ومجردة.',
        },
      },
    },
    {
      id: 'encapsulation',
      name: {
        de: 'Kapselung (Encapsulation)',
        ar: 'التغليف (Encapsulation)',
      },
      content: {
        definition: {
          de: 'Kapselung ist ein OOP-Prinzip, bei dem die interne Darstellung eines Objekts nach außen verborgen wird. Der Zugriff auf die Daten erfolgt nur über definierte Schnittstellen (Getter/Setter). Dies schützt die Datenintegrität und reduziert Abhängigkeiten.',
          ar: 'التغليف هو مبدأ OOP حيث يُخفى التمثيل الداخلي للكائن عن الخارج. يتم الوصول للبيانات فقط عبر واجهات محددة (Getter/Setter). هذا يحمي سلامة البيانات ويقلل التبعيات.',
        },
        keyPoints: [
          {
            de: 'Attribute werden als private (-) deklariert',
            ar: 'تُعلن الخصائص كخاصة (-)',
          },
          {
            de: 'Zugriff nur über öffentliche (+) Getter- und Setter-Methoden',
            ar: 'الوصول فقط عبر أساليب Getter و Setter العامة (+)',
          },
          {
            de: 'Information Hiding: Interne Implementierungsdetails werden verborgen',
            ar: 'إخفاء المعلومات: تفاصيل التنفيذ الداخلية تُخفى',
          },
          {
            de: 'Validierung im Setter möglich: z.B. Alter darf nicht negativ sein',
            ar: 'التحقق في Setter ممكن: مثلاً العمر لا يمكن أن يكون سالباً',
          },
        ],
        examples: [
          {
            de: 'Klasse „Konto" mit privatem Attribut - kontostand: double. Setter setKontostand(betrag) prüft: if (betrag >= 0) { this.kontostand = betrag; }. So wird verhindert, dass ein negativer Kontostand gesetzt wird.',
            ar: 'فئة "حساب" بخاصية خاصة - الرصيد: double. Setter setKontostand(مبلغ) يتحقق: if (مبلغ >= 0) { this.kontostand = مبلغ; }. هكذا يُمنع تعيين رصيد سالب.',
          },
        ],
        examRelevance: {
          de: 'Kapselung ist ein Grundprinzip der OOP und wird regelmäßig abgefragt. Erklären Sie, warum private Attribute mit Getter/Setter besser sind als public Attribute.',
          ar: 'التغليف مبدأ أساسي في OOP ويُسأل عنه بانتظام. اشرح لماذا الخصائص الخاصة مع Getter/Setter أفضل من الخصائص العامة.',
        },
        summary: {
          de: 'Kapselung verbirgt interne Daten und erlaubt Zugriff nur über kontrollierte Schnittstellen zum Schutz der Datenintegrität.',
          ar: 'التغليف يخفي البيانات الداخلية ويسمح بالوصول فقط عبر واجهات متحكم بها لحماية سلامة البيانات.',
        },
      },
    },
    {
      id: 'oo-inheritance',
      name: {
        de: 'Vererbung (OOP)',
        ar: 'الوراثة (OOP)',
      },
      content: {
        definition: {
          de: 'Vererbung ermöglicht es einer Klasse (Unterklasse/Kindklasse), Attribute und Methoden einer anderen Klasse (Oberklasse/Elternklasse) zu übernehmen und zu erweitern. Dies fördert die Wiederverwendbarkeit und ermöglicht hierarchische Klassenstrukturen.',
          ar: 'الوراثة تمكّن فئة (فئة ابن) من تبني خصائص وأساليب فئة أخرى (فئة أب) وتوسيعها. هذا يعزز إعادة الاستخدام ويتيح هياكل فئات هرمية.',
        },
        keyPoints: [
          {
            de: 'Schlüsselwort „extends" (Java/TypeScript) oder „:" (C#) für Vererbung',
            ar: 'كلمة مفتاحية "extends" (Java/TypeScript) أو ":" (C#) للوراثة',
          },
          {
            de: 'Methoden können in der Unterklasse überschrieben werden (Override)',
            ar: 'يمكن تجاوز الأساليب في الفئة الابن (Override)',
          },
          {
            de: 'super-Schlüsselwort: Zugriff auf die Methoden der Oberklasse',
            ar: 'كلمة مفتاحية super: الوصول لأساليب الفئة الأب',
          },
        ],
        examples: [
          {
            de: 'class Tier { name: string; essen(): void { ... } } class Hund extends Tier { bellen(): void { ... } essen(): void { super.essen(); /* spezifisches Fressen */ } }. Hund erbt name und essen() und fügt bellen() hinzu.',
            ar: 'class حيوان { الاسم: string; أكل(): void { ... } } class كلب extends حيوان { نباح(): void { ... } أكل(): void { super.أكل(); /* أكل خاص */ } }. الكلب يرث الاسم وأكل() ويضيف نباح().',
          },
        ],
        examRelevance: {
          de: 'Vererbung ist in der Prüfung allgegenwärtig. Verstehen Sie Override vs. Overload und das super-Schlüsselwort.',
          ar: 'الوراثة موجودة في كل مكان في الامتحان. افهم Override مقابل Overload وكلمة super المفتاحية.',
        },
        summary: {
          de: 'Vererbung überträgt Attribute und Methoden von Ober- zu Unterklassen und ermöglicht Erweiterung und Überschreibung.',
          ar: 'الوراثة تنقل الخصائص والأساليب من الفئة الأب للأبناء وتتيح التوسيع والتجاوز.',
        },
      },
    },
    {
      id: 'polymorphism',
      name: {
        de: 'Polymorphismus',
        ar: 'تعدد الأشكال (Polymorphism)',
      },
      content: {
        definition: {
          de: 'Polymorphismus (Vielgestaltigkeit) bedeutet, dass Objekte verschiedener Klassen über die gleiche Schnittstelle angesprochen werden können, aber unterschiedliches Verhalten zeigen. Es gibt statischen Polymorphismus (Überladung) und dynamischen Polymorphismus (Überschreibung).',
          ar: 'تعدد الأشكال يعني أن كائنات من فئات مختلفة يمكن مخاطبتها عبر نفس الواجهة لكنها تُظهر سلوكاً مختلفاً. يوجد تعدد أشكال ثابت (التحميل الزائد) وتعدد أشكال ديناميكي (التجاوز).',
        },
        keyPoints: [
          {
            de: 'Dynamischer Polymorphismus: Zur Laufzeit wird die Methode der tatsächlichen Klasse aufgerufen',
            ar: 'تعدد الأشكال الديناميكي: في وقت التشغيل يُستدعى أسلوب الفئة الفعلية',
          },
          {
            de: 'Statischer Polymorphismus: Überladung – gleicher Methodenname, unterschiedliche Parameter',
            ar: 'تعدد الأشكال الثابت: التحميل الزائد – نفس اسم الأسلوب بمعاملات مختلفة',
          },
          {
            de: 'Ermöglicht flexible und erweiterbare Software durch Programmierung gegen Interfaces',
            ar: 'يتيح برمجيات مرنة وقابلة للتوسيع من خلال البرمجة ضد الواجهات',
          },
        ],
        examples: [
          {
            de: 'Form[] formen = { new Kreis(), new Rechteck(), new Dreieck() }; for (Form f : formen) { f.berechneFlaeche(); } – Jede Form berechnet die Fläche anders, obwohl der gleiche Methodenaufruf verwendet wird.',
            ar: 'Form[] أشكال = { new دائرة(), new مستطيل(), new مثلث() }; for (Form f : أشكال) { f.berechneFlaeche(); } – كل شكل يحسب المساحة بشكل مختلف رغم استخدام نفس استدعاء الأسلوب.',
          },
        ],
        examRelevance: {
          de: 'Polymorphismus ist ein Kernkonzept. Häufige Frage: Was wird ausgegeben, wenn eine überschriebene Methode über eine Referenz der Oberklasse aufgerufen wird?',
          ar: 'تعدد الأشكال مفهوم محوري. سؤال شائع: ماذا يُخرج عند استدعاء أسلوب مُتجاوَز عبر مرجع الفئة الأب؟',
        },
        summary: {
          de: 'Polymorphismus ermöglicht es, verschiedene Objekte über die gleiche Schnittstelle anzusprechen, wobei das tatsächliche Verhalten von der konkreten Klasse abhängt.',
          ar: 'تعدد الأشكال يتيح مخاطبة كائنات مختلفة عبر نفس الواجهة حيث يعتمد السلوك الفعلي على الفئة الملموسة.',
        },
      },
    },
  ],
};
