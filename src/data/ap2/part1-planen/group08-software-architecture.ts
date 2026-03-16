import type { TopicGroup } from '../../../types';

export const softwareArchitecture: TopicGroup = {
  id: 'group08',
  name: {
    de: 'Softwarearchitektur',
    ar: 'هندسة البرمجيات',
  },
  description: {
    de: 'Architekturmuster und -stile für die Strukturierung von Softwaresystemen',
    ar: 'أنماط وأساليب معمارية لهيكلة أنظمة البرمجيات',
  },
  topics: [
    {
      id: 'client-server-architecture',
      name: {
        de: 'Client-Server-Architektur',
        ar: 'هندسة العميل-الخادم',
      },
      content: {
        definition: {
          de: 'Die Client-Server-Architektur teilt ein System in zwei Rollen: Der Client (Auftraggeber) sendet Anfragen, der Server (Dienstleister) verarbeitet diese und sendet Antworten zurück. Die Kommunikation erfolgt über ein Netzwerkprotokoll wie HTTP oder TCP.',
          ar: 'هندسة العميل-الخادم تقسم النظام إلى دورين: العميل (الطالب) يرسل طلبات والخادم (مزود الخدمة) يعالجها ويرسل الردود. يتم التواصل عبر بروتوكول شبكة مثل HTTP أو TCP.',
        },
        keyPoints: [
          {
            de: 'Thin Client: Wenig Logik auf Client-Seite, Server erledigt die Hauptarbeit',
            ar: 'عميل خفيف: منطق قليل على جانب العميل، الخادم يقوم بالعمل الرئيسي',
          },
          {
            de: 'Fat Client: Viel Logik auf Client-Seite, Server hauptsächlich für Datenhaltung',
            ar: 'عميل ثقيل: منطق كثير على جانب العميل، الخادم أساساً لحفظ البيانات',
          },
          {
            de: 'Vorteile: Zentrale Datenhaltung, einfache Wartung des Servers',
            ar: 'المزايا: حفظ بيانات مركزي، سهولة صيانة الخادم',
          },
          {
            de: 'Nachteile: Single Point of Failure (Server), Netzwerkabhängigkeit',
            ar: 'العيوب: نقطة فشل واحدة (الخادم)، الاعتماد على الشبكة',
          },
        ],
        examples: [
          {
            de: 'Ein Webbrowser (Client) sendet eine HTTP-GET-Anfrage an einen Webserver. Der Server verarbeitet die Anfrage, greift auf die Datenbank zu und sendet eine HTML-Seite als Antwort zurück.',
            ar: 'متصفح ويب (عميل) يرسل طلب HTTP-GET لخادم ويب. الخادم يعالج الطلب ويصل لقاعدة البيانات ويرسل صفحة HTML كرد.',
          },
        ],
        examRelevance: {
          de: 'Client-Server ist die Grundlage vieler Prüfungsfragen zu Netzwerk und Webentwicklung. Kennen Sie Thin vs. Fat Client.',
          ar: 'العميل-الخادم أساس كثير من أسئلة الامتحان حول الشبكات وتطوير الويب. اعرف الفرق بين العميل الخفيف والثقيل.',
        },
        summary: {
          de: 'Die Client-Server-Architektur trennt Anfrage (Client) und Verarbeitung (Server) für zentrale Datenhaltung und Dienstebereitstellung.',
          ar: 'هندسة العميل-الخادم تفصل الطلب (العميل) والمعالجة (الخادم) لحفظ بيانات مركزي وتقديم الخدمات.',
        },
      },
    },
    {
      id: 'layer-architecture',
      name: {
        de: 'Schichtenarchitektur',
        ar: 'الهندسة الطبقية',
      },
      content: {
        definition: {
          de: 'Die Schichtenarchitektur (Layer Architecture) strukturiert eine Anwendung in horizontale Schichten, wobei jede Schicht eine bestimmte Verantwortlichkeit hat. Die klassische Drei-Schichten-Architektur besteht aus Präsentation, Geschäftslogik und Datenzugriff.',
          ar: 'الهندسة الطبقية تهيكل التطبيق في طبقات أفقية حيث كل طبقة لها مسؤولية معينة. الهندسة الكلاسيكية ذات الثلاث طبقات تتكون من العرض ومنطق الأعمال والوصول للبيانات.',
        },
        keyPoints: [
          {
            de: 'Präsentationsschicht: Benutzeroberfläche, Ein-/Ausgabe',
            ar: 'طبقة العرض: واجهة المستخدم، الإدخال/الإخراج',
          },
          {
            de: 'Geschäftslogikschicht: Fachliche Regeln, Validierung, Berechnungen',
            ar: 'طبقة منطق الأعمال: القواعد المهنية، التحقق، الحسابات',
          },
          {
            de: 'Datenzugriffsschicht: Datenbankoperationen, Persistenz',
            ar: 'طبقة الوصول للبيانات: عمليات قاعدة البيانات، التخزين الدائم',
          },
          {
            de: 'Jede Schicht kommuniziert nur mit der direkt benachbarten Schicht',
            ar: 'كل طبقة تتواصل فقط مع الطبقة المجاورة مباشرة',
          },
        ],
        examples: [
          {
            de: 'Drei-Schichten-Architektur eines Online-Shops: Präsentation (React-Frontend) → Geschäftslogik (Node.js mit Bestellvalidierung, Preisberechnung) → Datenzugriff (PostgreSQL-Datenbankanbindung).',
            ar: 'هندسة ذات ثلاث طبقات لمتجر إلكتروني: العرض (واجهة React) ← منطق الأعمال (Node.js مع التحقق من الطلبات، حساب الأسعار) ← الوصول للبيانات (اتصال قاعدة بيانات PostgreSQL).',
          },
        ],
        examRelevance: {
          de: 'Die Drei-Schichten-Architektur ist ein häufiges Prüfungsthema. Ordnen Sie Komponenten den richtigen Schichten zu.',
          ar: 'الهندسة ذات الثلاث طبقات موضوع امتحان شائع. عيّن المكونات للطبقات الصحيحة.',
        },
        summary: {
          de: 'Die Schichtenarchitektur trennt Verantwortlichkeiten in Präsentation, Geschäftslogik und Datenzugriff für klare Struktur.',
          ar: 'الهندسة الطبقية تفصل المسؤوليات إلى العرض ومنطق الأعمال والوصول للبيانات لهيكل واضح.',
        },
      },
    },
    {
      id: 'microservices-architecture',
      name: {
        de: 'Microservices-Architektur',
        ar: 'هندسة الخدمات المصغرة',
      },
      content: {
        definition: {
          de: 'Microservices-Architektur zerlegt eine Anwendung in kleine, unabhängige Dienste, die jeweils eine spezifische Geschäftsfunktion abbilden. Jeder Microservice ist eigenständig deploybar, skalierbar und kann in unterschiedlichen Technologien implementiert sein.',
          ar: 'هندسة الخدمات المصغرة تفكك التطبيق إلى خدمات صغيرة ومستقلة تمثل كل منها وظيفة أعمال محددة. كل خدمة مصغرة قابلة للنشر والتوسيع بشكل مستقل ويمكن تنفيذها بتقنيات مختلفة.',
        },
        keyPoints: [
          {
            de: 'Jeder Service hat eigene Datenbank und eigenes Deployment',
            ar: 'كل خدمة لها قاعدة بيانات خاصة ونشر خاص',
          },
          {
            de: 'Kommunikation über REST-APIs oder Message Queues',
            ar: 'التواصل عبر REST-APIs أو قوائم الرسائل',
          },
          {
            de: 'Vorteile: Unabhängige Skalierung, Technologiefreiheit, Ausfallsicherheit',
            ar: 'المزايا: توسيع مستقل، حرية التقنيات، الحماية من الأعطال',
          },
          {
            de: 'Nachteile: Komplexität der Kommunikation, verteilte Datenhaltung, Monitoring-Aufwand',
            ar: 'العيوب: تعقيد التواصل، تخزين بيانات موزع، جهد المراقبة',
          },
        ],
        examples: [
          {
            de: 'Online-Shop als Microservices: UserService (Benutzerverwaltung), ProductService (Produktkatalog), OrderService (Bestellungen), PaymentService (Zahlung). Jeder Service läuft unabhängig und kommuniziert über REST.',
            ar: 'متجر إلكتروني كخدمات مصغرة: UserService (إدارة المستخدمين)، ProductService (كتالوج المنتجات)، OrderService (الطلبات)، PaymentService (الدفع). كل خدمة تعمل مستقلة وتتواصل عبر REST.',
          },
        ],
        examRelevance: {
          de: 'Microservices werden oft im Vergleich zu Monolithen abgefragt. Kennen Sie Vor- und Nachteile beider Ansätze.',
          ar: 'الخدمات المصغرة تُسأل غالباً بالمقارنة مع المونوليث. اعرف مزايا وعيوب كلا النهجين.',
        },
        summary: {
          de: 'Microservices zerlegen Anwendungen in unabhängige, eigenständig deploybare Dienste für maximale Flexibilität und Skalierbarkeit.',
          ar: 'الخدمات المصغرة تفكك التطبيقات إلى خدمات مستقلة قابلة للنشر بشكل منفرد لأقصى مرونة وقابلية توسيع.',
        },
      },
    },
    {
      id: 'monolithic-architecture',
      name: {
        de: 'Monolithische Architektur',
        ar: 'الهندسة المتراصة (Monolithic)',
      },
      content: {
        definition: {
          de: 'Eine monolithische Architektur ist ein Ansatz, bei dem die gesamte Anwendung als eine einzige, zusammenhängende Einheit entwickelt, gebaut und deployed wird. Alle Funktionen (UI, Geschäftslogik, Datenzugriff) befinden sich in einer Codebasis und werden gemeinsam ausgeliefert.',
          ar: 'الهندسة المتراصة هي نهج يتم فيه تطوير وبناء ونشر التطبيق بالكامل كوحدة واحدة متماسكة. جميع الوظائف (واجهة المستخدم، منطق الأعمال، الوصول للبيانات) في قاعدة كود واحدة وتُسلم معاً.',
        },
        keyPoints: [
          {
            de: 'Vorteile: Einfache Entwicklung am Anfang, einfaches Deployment, einfaches Testen',
            ar: 'المزايا: سهولة التطوير في البداية، نشر بسيط، اختبار بسيط',
          },
          {
            de: 'Nachteile: Schwer skalierbar, lange Build-Zeiten bei großem Code, Technologie-Lock-in',
            ar: 'العيوب: صعوبة التوسيع، أوقات بناء طويلة مع كود كبير، الارتباط بتقنية واحدة',
          },
          {
            de: 'Bei wachsender Komplexität wird der Monolith schwer wartbar (Big Ball of Mud)',
            ar: 'مع تزايد التعقيد يصبح المونوليث صعب الصيانة (Big Ball of Mud)',
          },
        ],
        examples: [
          {
            de: 'Eine traditionelle Java-EE-Anwendung, die als einzelne WAR-Datei deployed wird. Alle Module (Benutzerverwaltung, Bestellwesen, Reporting) befinden sich im selben Projekt und teilen sich eine Datenbank.',
            ar: 'تطبيق Java-EE تقليدي يُنشر كملف WAR واحد. جميع الوحدات (إدارة المستخدمين، الطلبات، التقارير) في نفس المشروع وتشترك في قاعدة بيانات واحدة.',
          },
        ],
        examRelevance: {
          de: 'Der Vergleich Monolith vs. Microservices ist ein beliebtes Prüfungsthema. Wann ist ein Monolith sinnvoll? Bei kleinen Teams und einfachen Projekten.',
          ar: 'المقارنة بين المونوليث والخدمات المصغرة موضوع امتحان شائع. متى يكون المونوليث مناسباً؟ مع فرق صغيرة ومشاريع بسيطة.',
        },
        summary: {
          de: 'Eine monolithische Architektur vereint alle Funktionen in einer Einheit – einfach am Anfang, aber schwer skalierbar bei Wachstum.',
          ar: 'الهندسة المتراصة تجمع جميع الوظائف في وحدة واحدة – بسيطة في البداية لكن صعبة التوسيع عند النمو.',
        },
      },
    },
    {
      id: 'soa',
      name: {
        de: 'Serviceorientierte Architektur (SOA)',
        ar: 'الهندسة الموجهة للخدمات (SOA)',
      },
      content: {
        definition: {
          de: 'SOA (Service-Oriented Architecture) ist ein Architekturstil, bei dem Geschäftsfunktionen als wiederverwendbare Dienste bereitgestellt werden. Dienste kommunizieren über standardisierte Protokolle und werden über einen Enterprise Service Bus (ESB) orchestriert.',
          ar: 'SOA (الهندسة الموجهة للخدمات) هي أسلوب معماري تُقدم فيه وظائف الأعمال كخدمات قابلة لإعادة الاستخدام. تتواصل الخدمات عبر بروتوكولات معيارية وتُنسق عبر ناقل خدمات المؤسسة (ESB).',
        },
        keyPoints: [
          {
            de: 'Dienste sind lose gekoppelt und wiederverwendbar',
            ar: 'الخدمات مقترنة بشكل مرن وقابلة لإعادة الاستخدام',
          },
          {
            de: 'ESB (Enterprise Service Bus) vermittelt zwischen den Diensten',
            ar: 'ESB (ناقل خدمات المؤسسة) يوسط بين الخدمات',
          },
          {
            de: 'Standardprotokolle: SOAP, WSDL, XML für Interoperabilität',
            ar: 'بروتوكولات معيارية: SOAP، WSDL، XML للتشغيل المتبادل',
          },
          {
            de: 'Unterschied zu Microservices: SOA nutzt einen zentralen ESB, Microservices sind dezentral',
            ar: 'الفرق مع الخدمات المصغرة: SOA تستخدم ESB مركزي، الخدمات المصغرة لا مركزية',
          },
        ],
        examples: [
          {
            de: 'Ein Versicherungsunternehmen stellt Geschäftsdienste bereit: Kundendienst, Vertragsdienst, Schadensdienst. Der ESB leitet Anfragen an den richtigen Dienst weiter und transformiert Datenformate.',
            ar: 'شركة تأمين تقدم خدمات أعمال: خدمة العملاء، خدمة العقود، خدمة المطالبات. ESB يوجه الطلبات للخدمة الصحيحة ويحول صيغ البيانات.',
          },
        ],
        examRelevance: {
          de: 'SOA wird oft im Vergleich zu Microservices abgefragt. Der Hauptunterschied: SOA = zentraler ESB, Microservices = dezentrale Kommunikation.',
          ar: 'SOA تُسأل غالباً بالمقارنة مع الخدمات المصغرة. الفرق الرئيسي: SOA = ESB مركزي، الخدمات المصغرة = تواصل لا مركزي.',
        },
        summary: {
          de: 'SOA stellt Geschäftsfunktionen als wiederverwendbare Dienste bereit, die über einen zentralen ESB kommunizieren.',
          ar: 'SOA تقدم وظائف الأعمال كخدمات قابلة لإعادة الاستخدام تتواصل عبر ESB مركزي.',
        },
      },
    },
  ],
};
