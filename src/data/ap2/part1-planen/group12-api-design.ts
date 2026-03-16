import type { TopicGroup } from '../../../types';

export const apiDesign: TopicGroup = {
  id: 'group12',
  name: {
    de: 'API-Design',
    ar: 'تصميم واجهات برمجة التطبيقات (API)',
  },
  description: {
    de: 'Grundlagen des API-Designs: REST-Architektur, HTTP-Methoden, Datenformate und Statuscodes',
    ar: 'أساسيات تصميم API: هندسة REST، أساليب HTTP، صيغ البيانات وأكواد الحالة',
  },
  topics: [
    {
      id: 'rest-architecture',
      name: {
        de: 'REST-Architektur',
        ar: 'هندسة REST',
      },
      content: {
        definition: {
          de: 'REST (Representational State Transfer) ist ein Architekturstil für verteilte Systeme, der auf HTTP basiert. RESTful APIs nutzen URLs zur Identifikation von Ressourcen und HTTP-Methoden für Operationen. Kernprinzipien sind Zustandslosigkeit, einheitliche Schnittstelle und ressourcenbasierte Adressierung.',
          ar: 'REST (نقل الحالة التمثيلية) هو أسلوب معماري للأنظمة الموزعة يعتمد على HTTP. واجهات RESTful تستخدم URLs لتعريف الموارد وأساليب HTTP للعمليات. المبادئ الأساسية هي انعدام الحالة والواجهة الموحدة والعنونة المبنية على الموارد.',
        },
        keyPoints: [
          {
            de: 'Zustandslosigkeit (Stateless): Jede Anfrage enthält alle benötigten Informationen',
            ar: 'انعدام الحالة (Stateless): كل طلب يحتوي جميع المعلومات المطلوبة',
          },
          {
            de: 'Ressourcenbasiert: URLs repräsentieren Ressourcen (z.B. /api/users/42)',
            ar: 'مبني على الموارد: URLs تمثل الموارد (مثل /api/users/42)',
          },
          {
            de: 'CRUD-Operationen werden auf HTTP-Methoden abgebildet: GET, POST, PUT, DELETE',
            ar: 'عمليات CRUD تُربط بأساليب HTTP: GET، POST، PUT، DELETE',
          },
          {
            de: 'Datenformat: Typischerweise JSON, seltener XML',
            ar: 'صيغة البيانات: عادة JSON، نادراً XML',
          },
        ],
        examples: [
          {
            de: 'RESTful API für Benutzerverwaltung: GET /api/users → Alle Benutzer abrufen, GET /api/users/42 → Benutzer 42 abrufen, POST /api/users → Neuen Benutzer erstellen, PUT /api/users/42 → Benutzer 42 aktualisieren, DELETE /api/users/42 → Benutzer 42 löschen.',
            ar: 'RESTful API لإدارة المستخدمين: GET /api/users ← جلب جميع المستخدمين، GET /api/users/42 ← جلب المستخدم 42، POST /api/users ← إنشاء مستخدم جديد، PUT /api/users/42 ← تحديث المستخدم 42، DELETE /api/users/42 ← حذف المستخدم 42.',
          },
        ],
        examRelevance: {
          de: 'REST ist eines der wichtigsten Prüfungsthemen. Kennen Sie die Zuordnung HTTP-Methode → CRUD-Operation und die Prinzipien der Zustandslosigkeit.',
          ar: 'REST من أهم مواضيع الامتحان. اعرف ربط أسلوب HTTP ← عملية CRUD ومبادئ انعدام الحالة.',
        },
        summary: {
          de: 'REST ist ein zustandsloser, ressourcenbasierter Architekturstil, der HTTP-Methoden für CRUD-Operationen auf Ressourcen nutzt.',
          ar: 'REST هو أسلوب معماري عديم الحالة ومبني على الموارد يستخدم أساليب HTTP لعمليات CRUD على الموارد.',
        },
      },
    },
    {
      id: 'http-methods',
      name: {
        de: 'HTTP-Methoden',
        ar: 'أساليب HTTP',
      },
      content: {
        definition: {
          de: 'HTTP-Methoden (Verben) definieren die gewünschte Aktion auf einer Ressource. Die wichtigsten Methoden sind GET (Lesen), POST (Erstellen), PUT (Aktualisieren/Ersetzen), PATCH (Teilweise Aktualisieren) und DELETE (Löschen).',
          ar: 'أساليب HTTP (الأفعال) تحدد الإجراء المطلوب على مورد. أهم الأساليب هي GET (قراءة)، POST (إنشاء)، PUT (تحديث/استبدال)، PATCH (تحديث جزئي) و DELETE (حذف).',
        },
        keyPoints: [
          {
            de: 'GET: Idempotent, sicher, keine Seiteneffekte – nur Daten lesen',
            ar: 'GET: متساوي النتائج، آمن، بدون آثار جانبية – قراءة البيانات فقط',
          },
          {
            de: 'POST: Nicht idempotent – erstellt neue Ressource, liefert 201 Created',
            ar: 'POST: غير متساوي النتائج – ينشئ مورد جديد، يعيد 201 Created',
          },
          {
            de: 'PUT: Idempotent – ersetzt die gesamte Ressource',
            ar: 'PUT: متساوي النتائج – يستبدل المورد بالكامل',
          },
          {
            de: 'DELETE: Idempotent – löscht die Ressource',
            ar: 'DELETE: متساوي النتائج – يحذف المورد',
          },
        ],
        examples: [
          {
            de: 'PUT vs. PATCH: PUT /api/users/42 mit Body { "name": "Max", "email": "max@test.de", "age": 30 } ersetzt den gesamten Benutzer. PATCH /api/users/42 mit Body { "age": 31 } ändert nur das Alter.',
            ar: 'PUT مقابل PATCH: PUT /api/users/42 مع Body { "name": "Max", "email": "max@test.de", "age": 30 } يستبدل المستخدم بالكامل. PATCH /api/users/42 مع Body { "age": 31 } يغير العمر فقط.',
          },
        ],
        examRelevance: {
          de: 'Die Zuordnung HTTP-Methode → CRUD ist Pflicht. Verstehen Sie auch Idempotenz: GET, PUT, DELETE sind idempotent; POST ist es nicht.',
          ar: 'ربط أسلوب HTTP ← CRUD إلزامي. افهم أيضاً تساوي النتائج: GET, PUT, DELETE متساوية النتائج؛ POST ليس كذلك.',
        },
        summary: {
          de: 'HTTP-Methoden ordnen CRUD-Operationen zu: GET (Read), POST (Create), PUT (Update), DELETE (Delete), wobei Idempotenz ein wichtiges Merkmal ist.',
          ar: 'أساليب HTTP تربط عمليات CRUD: GET (قراءة)، POST (إنشاء)، PUT (تحديث)، DELETE (حذف)، حيث تساوي النتائج خاصية مهمة.',
        },
      },
    },
    {
      id: 'request-response-structure',
      name: {
        de: 'Request/Response-Struktur',
        ar: 'بنية الطلب والاستجابة',
      },
      content: {
        definition: {
          de: 'HTTP-Kommunikation basiert auf dem Request-Response-Modell. Ein Request besteht aus Methode, URL, Headers und optional Body. Eine Response enthält Statuscode, Headers und Body. Diese Struktur ist die Grundlage jeder Web-API.',
          ar: 'اتصال HTTP يعتمد على نموذج الطلب والاستجابة. الطلب يتكون من الأسلوب و URL والرؤوس واختيارياً الجسم. الاستجابة تحتوي كود الحالة والرؤوس والجسم. هذه البنية أساس كل واجهة ويب.',
        },
        keyPoints: [
          {
            de: 'Request-Header: Content-Type (z.B. application/json), Authorization (z.B. Bearer Token)',
            ar: 'رؤوس الطلب: Content-Type (مثل application/json)، Authorization (مثل Bearer Token)',
          },
          {
            de: 'Request-Body: Enthält die zu sendenden Daten (bei POST, PUT, PATCH)',
            ar: 'جسم الطلب: يحتوي البيانات المراد إرسالها (عند POST, PUT, PATCH)',
          },
          {
            de: 'Response: Statuscode + Header + Body (z.B. JSON mit den angeforderten Daten)',
            ar: 'الاستجابة: كود الحالة + الرؤوس + الجسم (مثل JSON مع البيانات المطلوبة)',
          },
        ],
        examples: [
          {
            de: 'Request: POST /api/users, Header: Content-Type: application/json, Authorization: Bearer eyJhb..., Body: { "name": "Max", "email": "max@test.de" }. Response: 201 Created, Body: { "id": 42, "name": "Max", "email": "max@test.de" }.',
            ar: 'الطلب: POST /api/users، الرأس: Content-Type: application/json، Authorization: Bearer eyJhb...، الجسم: { "name": "Max", "email": "max@test.de" }. الاستجابة: 201 Created، الجسم: { "id": 42, "name": "Max", "email": "max@test.de" }.',
          },
        ],
        examRelevance: {
          de: 'In der Prüfung werden oft konkrete API-Aufrufe dargestellt. Können Sie Request und Response analysieren und die Bestandteile benennen.',
          ar: 'في الامتحان تُعرض غالباً استدعاءات API ملموسة. كن قادراً على تحليل الطلب والاستجابة وتسمية المكونات.',
        },
        summary: {
          de: 'HTTP-Kommunikation folgt dem Request-Response-Modell mit Methode, URL, Headers und Body als zentralen Bestandteilen.',
          ar: 'اتصال HTTP يتبع نموذج الطلب والاستجابة مع الأسلوب و URL والرؤوس والجسم كمكونات مركزية.',
        },
      },
    },
    {
      id: 'json-data-format',
      name: {
        de: 'JSON-Datenformat',
        ar: 'صيغة بيانات JSON',
      },
      content: {
        definition: {
          de: 'JSON (JavaScript Object Notation) ist ein leichtgewichtiges, textbasiertes Datenformat für den Datenaustausch. Es ist einfach lesbar für Menschen und Maschinen und das Standardformat für REST-APIs. JSON unterstützt Objekte, Arrays, Strings, Zahlen, Booleans und null.',
          ar: 'JSON (ترميز كائنات JavaScript) هو صيغة بيانات خفيفة ونصية لتبادل البيانات. سهلة القراءة للبشر والآلات وهي الصيغة القياسية لـ REST-APIs. تدعم JSON الكائنات والمصفوفات والنصوص والأرقام والقيم المنطقية و null.',
        },
        keyPoints: [
          {
            de: 'Objekte: { "key": "value" } – Schlüssel-Wert-Paare in geschweiften Klammern',
            ar: 'الكائنات: { "key": "value" } – أزواج مفتاح-قيمة في أقواس معقوفة',
          },
          {
            de: 'Arrays: [ "wert1", "wert2" ] – Geordnete Listen in eckigen Klammern',
            ar: 'المصفوفات: [ "wert1", "wert2" ] – قوائم مرتبة في أقواس مربعة',
          },
          {
            de: 'Datentypen: String (in Anführungszeichen), Number, Boolean (true/false), null, Object, Array',
            ar: 'أنواع البيانات: String (بين علامات اقتباس)، Number، Boolean (true/false)، null، Object، Array',
          },
        ],
        examples: [
          {
            de: '{ "name": "Max Müller", "alter": 28, "aktiv": true, "adresse": { "strasse": "Hauptstr. 1", "plz": "12345" }, "hobbys": ["Programmieren", "Lesen"], "partner": null }',
            ar: '{ "name": "Max Müller", "alter": 28, "aktiv": true, "adresse": { "strasse": "Hauptstr. 1", "plz": "12345" }, "hobbys": ["Programmieren", "Lesen"], "partner": null }',
          },
        ],
        examRelevance: {
          de: 'JSON lesen und schreiben müssen Sie sicher können. Häufige Fragen: Fehler in JSON finden (z.B. fehlendes Komma, einfache Anführungszeichen).',
          ar: 'يجب أن تتمكن من قراءة وكتابة JSON بثقة. أسئلة شائعة: إيجاد أخطاء في JSON (مثل فاصلة مفقودة، علامات اقتباس مفردة).',
        },
        summary: {
          de: 'JSON ist das Standard-Datenformat für APIs mit Objekten, Arrays und primitiven Datentypen in einer leicht lesbaren Textform.',
          ar: 'JSON هي صيغة البيانات القياسية للـ APIs بكائنات ومصفوفات وأنواع بيانات أولية في شكل نصي سهل القراءة.',
        },
      },
    },
    {
      id: 'status-codes',
      name: {
        de: 'HTTP-Statuscodes',
        ar: 'أكواد حالة HTTP',
      },
      content: {
        definition: {
          de: 'HTTP-Statuscodes sind dreistellige Zahlen, die der Server als Antwort auf eine Anfrage sendet. Sie informieren den Client über das Ergebnis der Anfrage. Codes werden in fünf Klassen eingeteilt: 1xx (Information), 2xx (Erfolg), 3xx (Umleitung), 4xx (Client-Fehler), 5xx (Server-Fehler).',
          ar: 'أكواد حالة HTTP هي أرقام من ثلاث خانات يرسلها الخادم كرد على طلب. تُخبر العميل عن نتيجة الطلب. تُقسم الأكواد إلى خمس فئات: 1xx (معلومات)، 2xx (نجاح)، 3xx (إعادة توجيه)، 4xx (خطأ عميل)، 5xx (خطأ خادم).',
        },
        keyPoints: [
          {
            de: '200 OK: Anfrage erfolgreich, 201 Created: Ressource erstellt, 204 No Content: Erfolgreich ohne Body',
            ar: '200 OK: الطلب ناجح، 201 Created: تم إنشاء المورد، 204 No Content: نجاح بدون جسم',
          },
          {
            de: '400 Bad Request: Fehlerhafte Anfrage, 401 Unauthorized: Nicht authentifiziert, 403 Forbidden: Keine Berechtigung, 404 Not Found: Ressource nicht gefunden',
            ar: '400 Bad Request: طلب خاطئ، 401 Unauthorized: غير مُصادق، 403 Forbidden: بدون صلاحية، 404 Not Found: المورد غير موجود',
          },
          {
            de: '500 Internal Server Error: Allgemeiner Serverfehler, 503 Service Unavailable: Server nicht verfügbar',
            ar: '500 Internal Server Error: خطأ خادم عام، 503 Service Unavailable: الخادم غير متوفر',
          },
        ],
        examples: [
          {
            de: 'GET /api/users/42 → 200 OK (Benutzer gefunden). POST /api/users → 201 Created (Benutzer erstellt). GET /api/users/999 → 404 Not Found (Benutzer existiert nicht). POST /api/users mit ungültigem JSON → 400 Bad Request.',
            ar: 'GET /api/users/42 ← 200 OK (المستخدم موجود). POST /api/users ← 201 Created (تم إنشاء المستخدم). GET /api/users/999 ← 404 Not Found (المستخدم غير موجود). POST /api/users مع JSON غير صالح ← 400 Bad Request.',
          },
        ],
        examRelevance: {
          de: 'Die wichtigsten Statuscodes (200, 201, 400, 401, 403, 404, 500) müssen Sie auswendig kennen. Ordnen Sie Szenarien den richtigen Codes zu.',
          ar: 'أكواد الحالة الأهم (200, 201, 400, 401, 403, 404, 500) يجب أن تحفظها. عيّن السيناريوهات للأكواد الصحيحة.',
        },
        summary: {
          de: 'HTTP-Statuscodes zeigen das Ergebnis einer Anfrage: 2xx = Erfolg, 4xx = Client-Fehler, 5xx = Server-Fehler.',
          ar: 'أكواد حالة HTTP تُظهر نتيجة الطلب: 2xx = نجاح، 4xx = خطأ عميل، 5xx = خطأ خادم.',
        },
      },
    },
  ],
};
