import type { TopicGroup } from '../../../types';

export const designPatterns: TopicGroup = {
  id: 'group07',
  name: {
    de: 'Entwurfsmuster (Design Patterns)',
    ar: 'أنماط التصميم (Design Patterns)',
  },
  description: {
    de: 'Bewährte Lösungsmuster für wiederkehrende Entwurfsprobleme in der Softwareentwicklung',
    ar: 'أنماط حلول مجربة لمشاكل التصميم المتكررة في تطوير البرمجيات',
  },
  priority: 'high',
  topics: [
    {
      id: 'observer-pattern',
      name: {
        de: 'Observer Pattern (Beobachtermuster)',
        ar: 'نمط المراقب (Observer)',
      },
      content: {
        definition: {
          de: 'Das Observer Pattern definiert eine 1-zu-n-Abhängigkeit zwischen Objekten. Wenn sich der Zustand eines Objekts (Subject) ändert, werden alle abhängigen Objekte (Observer) automatisch benachrichtigt und aktualisiert. Es folgt dem Publish-Subscribe-Prinzip.',
          ar: 'نمط المراقب يحدد علاقة تبعية 1-إلى-n بين الكائنات. عندما تتغير حالة كائن (Subject) يتم إخطار جميع الكائنات التابعة (Observer) تلقائياً وتحديثها. يتبع مبدأ النشر والاشتراك.',
        },
        keyPoints: [
          {
            de: 'Subject: Verwaltet eine Liste von Observern und benachrichtigt sie bei Änderungen',
            ar: 'Subject: يدير قائمة من المراقبين ويخطرهم عند التغييرات',
          },
          {
            de: 'Observer: Definiert eine update()-Methode, die bei Änderungen aufgerufen wird',
            ar: 'Observer: يحدد أسلوب update() الذي يُستدعى عند التغييرات',
          },
          {
            de: 'Lose Kopplung: Subject kennt nur das Observer-Interface, nicht die konkreten Klassen',
            ar: 'اقتران مرن: Subject يعرف فقط واجهة Observer وليس الفئات الملموسة',
          },
        ],
        examples: [
          {
            de: 'Ein Wetterdienst (Subject) hat Sensoren, die Temperatur messen. Verschiedene Displays (Observer) wie Smartphone-App, Webseite und LED-Anzeige werden automatisch aktualisiert, wenn sich die Temperatur ändert.',
            ar: 'خدمة طقس (Subject) لديها مستشعرات تقيس درجة الحرارة. شاشات عرض مختلفة (Observer) مثل تطبيق الهاتف والموقع وشاشة LED تُحدَّث تلقائياً عند تغير درجة الحرارة.',
          },
        ],
        examRelevance: {
          de: 'Das Observer Pattern wird oft als Diagramm oder Szenario in der Prüfung dargestellt. Erkennen Sie das Muster anhand der Publish-Subscribe-Struktur.',
          ar: 'نمط المراقب يُعرض غالباً كمخطط أو سيناريو في الامتحان. تعرّف على النمط من خلال بنية النشر والاشتراك.',
        },
        summary: {
          de: 'Das Observer Pattern benachrichtigt automatisch alle registrierten Beobachter bei Zustandsänderungen des beobachteten Objekts.',
          ar: 'نمط المراقب يخطر تلقائياً جميع المراقبين المسجلين عند تغيرات حالة الكائن المراقَب.',
        },
      },
    },
    {
      id: 'singleton-pattern',
      name: {
        de: 'Singleton Pattern',
        ar: 'نمط المفرد (Singleton)',
      },
      content: {
        definition: {
          de: 'Das Singleton Pattern stellt sicher, dass von einer Klasse genau eine einzige Instanz existiert und bietet einen globalen Zugriffspunkt auf diese Instanz. Der Konstruktor wird privat gemacht, und der Zugriff erfolgt über eine statische Methode.',
          ar: 'نمط المفرد يضمن وجود نسخة واحدة فقط من فئة ما ويوفر نقطة وصول عامة لهذه النسخة. يُجعل المُنشئ خاصاً ويتم الوصول عبر أسلوب ثابت.',
        },
        keyPoints: [
          {
            de: 'Privater Konstruktor: Verhindert externe Instanziierung mit new',
            ar: 'مُنشئ خاص: يمنع الإنشاء الخارجي بـ new',
          },
          {
            de: 'Statische getInstance()-Methode: Erstellt die Instanz beim ersten Aufruf oder gibt die existierende zurück',
            ar: 'أسلوب getInstance() الثابت: ينشئ النسخة عند الاستدعاء الأول أو يعيد الموجودة',
          },
          {
            de: 'Anwendungsfälle: Datenbankverbindung, Logger, Konfigurationsmanager',
            ar: 'حالات الاستخدام: اتصال قاعدة البيانات، المسجّل (Logger)، مدير التكوين',
          },
        ],
        examples: [
          {
            de: 'class DatabaseConnection { private static instance: DatabaseConnection; private constructor() {} static getInstance(): DatabaseConnection { if (!this.instance) { this.instance = new DatabaseConnection(); } return this.instance; } }',
            ar: 'class DatabaseConnection { private static instance: DatabaseConnection; private constructor() {} static getInstance(): DatabaseConnection { if (!this.instance) { this.instance = new DatabaseConnection(); } return this.instance; } }',
          },
        ],
        examRelevance: {
          de: 'Das Singleton ist das am häufigsten abgefragte Design Pattern. Kennen Sie die Implementierung mit privatem Konstruktor und statischer Methode.',
          ar: 'المفرد هو نمط التصميم الأكثر سؤالاً عنه. اعرف التنفيذ بمُنشئ خاص وأسلوب ثابت.',
        },
        summary: {
          de: 'Das Singleton Pattern garantiert genau eine Instanz einer Klasse durch privaten Konstruktor und statische Zugriffsmethode.',
          ar: 'نمط المفرد يضمن نسخة واحدة بالضبط من فئة من خلال مُنشئ خاص وأسلوب وصول ثابت.',
        },
      },
    },
    {
      id: 'factory-pattern',
      name: {
        de: 'Factory Pattern',
        ar: 'نمط المصنع (Factory)',
      },
      content: {
        definition: {
          de: 'Das Factory Pattern kapselt die Erzeugung von Objekten in einer separaten Methode oder Klasse. Der Client-Code muss nicht wissen, welche konkrete Klasse instanziiert wird – er nutzt nur die Factory-Methode und erhält ein Objekt eines bestimmten Interfaces.',
          ar: 'نمط المصنع يغلف إنشاء الكائنات في أسلوب أو فئة منفصلة. لا يحتاج كود العميل معرفة أي فئة ملموسة تُنشأ – يستخدم فقط أسلوب المصنع ويتلقى كائناً من واجهة معينة.',
        },
        keyPoints: [
          {
            de: 'Factory Method: Eine Methode in einer Klasse entscheidet, welche Unterklasse instanziiert wird',
            ar: 'Factory Method: أسلوب في فئة يقرر أي فئة ابن تُنشأ',
          },
          {
            de: 'Abstract Factory: Erzeugt Familien verwandter Objekte ohne konkrete Klassen zu spezifizieren',
            ar: 'Abstract Factory: ينشئ عائلات من كائنات مترابطة دون تحديد فئات ملموسة',
          },
          {
            de: 'Vorteil: Entkopplung von Erstellung und Verwendung der Objekte',
            ar: 'الميزة: فصل إنشاء واستخدام الكائنات',
          },
        ],
        examples: [
          {
            de: 'function createDatabase(type: string): Database { switch(type) { case "mysql": return new MySQLDatabase(); case "postgres": return new PostgresDatabase(); default: throw new Error("Unbekannter Typ"); } } – Der Client ruft createDatabase("mysql") auf, ohne MySQLDatabase direkt zu kennen.',
            ar: 'function createDatabase(type: string): Database { switch(type) { case "mysql": return new MySQLDatabase(); case "postgres": return new PostgresDatabase(); default: throw new Error("نوع غير معروف"); } } – العميل يستدعي createDatabase("mysql") دون معرفة MySQLDatabase مباشرة.',
          },
        ],
        examRelevance: {
          de: 'Das Factory Pattern kommt oft als Code-Beispiel in der Prüfung vor. Erkennen Sie das Muster und erklären Sie den Vorteil der Entkopplung.',
          ar: 'نمط المصنع يظهر غالباً كمثال كود في الامتحان. تعرّف على النمط واشرح ميزة الفصل.',
        },
        summary: {
          de: 'Das Factory Pattern zentralisiert die Objekterzeugung und entkoppelt den Client-Code von konkreten Implementierungsklassen.',
          ar: 'نمط المصنع يركز إنشاء الكائنات ويفصل كود العميل عن فئات التنفيذ الملموسة.',
        },
      },
    },
    {
      id: 'facade-pattern',
      name: {
        de: 'Facade Pattern (Fassadenmuster)',
        ar: 'نمط الواجهة (Facade)',
      },
      content: {
        definition: {
          de: 'Das Facade Pattern bietet eine vereinfachte Schnittstelle zu einem komplexen Subsystem. Es verbirgt die Komplexität interner Klassen und stellt dem Client eine einfache, einheitliche API zur Verfügung.',
          ar: 'نمط الواجهة يوفر واجهة مبسطة لنظام فرعي معقد. يخفي تعقيد الفئات الداخلية ويوفر للعميل واجهة برمجة بسيطة وموحدة.',
        },
        keyPoints: [
          {
            de: 'Vereinfacht die Nutzung komplexer Subsysteme durch eine einzige Einstiegsklasse',
            ar: 'يبسط استخدام الأنظمة الفرعية المعقدة من خلال فئة دخول واحدة',
          },
          {
            de: 'Reduziert Abhängigkeiten zwischen Client und Subsystem',
            ar: 'يقلل التبعيات بين العميل والنظام الفرعي',
          },
          {
            de: 'Die internen Klassen bleiben weiterhin direkt nutzbar (optional)',
            ar: 'الفئات الداخلية تبقى قابلة للاستخدام مباشرة (اختياري)',
          },
        ],
        examples: [
          {
            de: 'Eine HomeTheaterFacade kapselt die Klassen DVDPlayer, Verstärker, Beamer und Lautsprecher. Der Client ruft nur facade.filmAbspielen() auf, und die Fassade koordiniert: Beamer einschalten, Verstärker auf Surround, DVD starten.',
            ar: 'واجهة HomeTheaterFacade تغلف فئات DVDPlayer والمضخم والبروجكتور والسماعات. العميل يستدعي فقط facade.filmAbspielen() والواجهة تنسق: تشغيل البروجكتور، المضخم على محيطي، تشغيل DVD.',
          },
        ],
        examRelevance: {
          de: 'Das Facade Pattern wird oft im Kontext von Softwarearchitektur und API-Design gefragt. Erkennen Sie es an der vereinfachten Schnittstelle.',
          ar: 'نمط الواجهة يُسأل غالباً في سياق هندسة البرمجيات وتصميم API. تعرّف عليه من الواجهة المبسطة.',
        },
        summary: {
          de: 'Das Facade Pattern stellt eine vereinfachte Schnittstelle für ein komplexes Subsystem bereit und reduziert die Kopplung.',
          ar: 'نمط الواجهة يوفر واجهة مبسطة لنظام فرعي معقد ويقلل الاقتران.',
        },
      },
    },
    {
      id: 'mvc-pattern',
      name: {
        de: 'MVC Pattern (Model-View-Controller)',
        ar: 'نمط MVC (نموذج-عرض-تحكم)',
      },
      content: {
        definition: {
          de: 'Das MVC Pattern trennt eine Anwendung in drei Komponenten: Model (Daten und Geschäftslogik), View (Benutzeroberfläche/Darstellung) und Controller (Steuerungslogik, die Model und View verbindet). Diese Trennung ermöglicht unabhängige Entwicklung und Wartung der Komponenten.',
          ar: 'نمط MVC يفصل التطبيق إلى ثلاثة مكونات: Model (البيانات ومنطق الأعمال)، View (واجهة المستخدم/العرض) و Controller (منطق التحكم الذي يربط Model و View). هذا الفصل يتيح التطوير والصيانة المستقلة للمكونات.',
        },
        keyPoints: [
          {
            de: 'Model: Enthält die Daten und Geschäftslogik, unabhängig von der Darstellung',
            ar: 'Model: يحتوي البيانات ومنطق الأعمال، مستقل عن العرض',
          },
          {
            de: 'View: Stellt die Daten des Models dar, reagiert auf Benutzerinteraktionen',
            ar: 'View: يعرض بيانات Model، يستجيب لتفاعلات المستخدم',
          },
          {
            de: 'Controller: Nimmt Benutzereingaben entgegen, aktualisiert Model und wählt die passende View',
            ar: 'Controller: يتلقى مدخلات المستخدم، يحدث Model ويختار View المناسب',
          },
        ],
        examples: [
          {
            de: 'Webanwendung: Model = Datenbankzugriff und Validierung (User-Klasse), View = HTML-Template (user-profile.html), Controller = Route-Handler (UserController), der GET /user/1 verarbeitet, User aus DB lädt und an die View übergibt.',
            ar: 'تطبيق ويب: Model = الوصول لقاعدة البيانات والتحقق (فئة User)، View = قالب HTML (user-profile.html)، Controller = معالج المسار (UserController) الذي يعالج GET /user/1 ويحمل المستخدم من DB ويمرره لـ View.',
          },
        ],
        examRelevance: {
          de: 'MVC ist ein sehr häufiges Prüfungsthema. Ordnen Sie Komponenten den Schichten zu: Wo gehört die Validierung hin? (Model). Wo die HTML-Ausgabe? (View).',
          ar: 'MVC موضوع امتحان شائع جداً. عيّن المكونات للطبقات: أين ينتمي التحقق؟ (Model). أين مخرجات HTML؟ (View).',
        },
        summary: {
          de: 'MVC trennt Anwendungen in Model (Daten), View (Darstellung) und Controller (Steuerung) für bessere Wartbarkeit und Testbarkeit.',
          ar: 'MVC يفصل التطبيقات إلى Model (البيانات) و View (العرض) و Controller (التحكم) لصيانة واختبار أفضل.',
        },
      },
    },
    {
      id: 'strategy-pattern',
      name: {
        de: 'Strategy Pattern (Strategiemuster)',
        ar: 'نمط الاستراتيجية (Strategy)',
      },
      content: {
        definition: {
          de: 'Das Strategy Pattern definiert eine Familie von Algorithmen, kapselt jeden einzelnen und macht sie austauschbar. Der Algorithmus kann zur Laufzeit gewechselt werden, ohne den Client-Code zu ändern. Es ermöglicht die Auswahl des Verhaltens je nach Kontext.',
          ar: 'نمط الاستراتيجية يحدد عائلة من الخوارزميات، يغلف كل واحدة ويجعلها قابلة للتبادل. يمكن تغيير الخوارزمية في وقت التشغيل دون تغيير كود العميل. يتيح اختيار السلوك حسب السياق.',
        },
        keyPoints: [
          {
            de: 'Context: Klasse, die eine Strategy-Referenz hält und an sie delegiert',
            ar: 'Context: فئة تحتفظ بمرجع Strategy وتفوض إليها',
          },
          {
            de: 'Strategy Interface: Gemeinsame Schnittstelle für alle Algorithmus-Varianten',
            ar: 'واجهة Strategy: واجهة مشتركة لجميع متغيرات الخوارزمية',
          },
          {
            de: 'Vermeidet lange if-else- oder switch-Ketten durch polymorphen Aufruf',
            ar: 'يتجنب سلاسل if-else أو switch الطويلة من خلال الاستدعاء المتعدد الأشكال',
          },
        ],
        examples: [
          {
            de: 'Ein Zahlungssystem mit verschiedenen Strategien: interface Zahlungsstrategie { zahlen(betrag: number): void; }. Implementierungen: KreditkarteZahlung, PayPalZahlung, UeberweisungZahlung. Der Warenkorb wählt zur Laufzeit die passende Strategie.',
            ar: 'نظام دفع باستراتيجيات مختلفة: interface استراتيجية_الدفع { دفع(مبلغ: number): void; }. التنفيذات: دفع_بطاقة_ائتمان، دفع_PayPal، دفع_تحويل. السلة تختار الاستراتيجية المناسبة في وقت التشغيل.',
          },
        ],
        examRelevance: {
          de: 'Das Strategy Pattern wird oft in Kombination mit Polymorphismus abgefragt. Erkennen Sie es an der austauschbaren Verhaltenskapselung.',
          ar: 'نمط الاستراتيجية يُسأل غالباً بالاشتراك مع تعدد الأشكال. تعرّف عليه من تغليف السلوك القابل للتبادل.',
        },
        summary: {
          de: 'Das Strategy Pattern kapselt austauschbare Algorithmen hinter einem gemeinsamen Interface für flexible Verhaltensauswahl zur Laufzeit.',
          ar: 'نمط الاستراتيجية يغلف خوارزميات قابلة للتبادل خلف واجهة مشتركة لاختيار سلوك مرن في وقت التشغيل.',
        },
      },
    },
  ],
};
