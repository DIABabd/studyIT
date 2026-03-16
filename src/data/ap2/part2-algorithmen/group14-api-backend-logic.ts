import type { TopicGroup } from '../../../types';

export const apiBackendLogic: TopicGroup = {
  id: 'group14-api-backend-logic',
  name: {
    de: 'API- und Backend-Logik',
    ar: 'منطق API والخلفية',
  },
  description: {
    de: 'HTTP-Anfragen, API-Endpunkte, Response-Erzeugung und Datenfilterung im Backend',
    ar: 'طلبات HTTP، نقاط نهاية API، إنشاء الاستجابة وتصفية البيانات في الخلفية',
  },
  topics: [
    {
      id: 'http-request-handling',
      name: { de: 'HTTP-Anfragenbehandlung', ar: 'معالجة طلبات HTTP' },
      content: {
        definition: {
          de: 'HTTP-Anfragen sind Nachrichten, die ein Client (z.B. Browser) an einen Server sendet. Die wichtigsten Methoden sind GET (Daten abrufen), POST (Daten senden), PUT (Daten aktualisieren) und DELETE (Daten löschen).',
          ar: 'طلبات HTTP هي رسائل يرسلها العميل (مثل المتصفح) إلى الخادم. أهم الطرق هي GET (استرجاع البيانات)، POST (إرسال البيانات)، PUT (تحديث البيانات) و DELETE (حذف البيانات).',
        },
        keyPoints: [
          { de: 'GET: Daten vom Server abrufen – keine Seiteneffekte (idempotent)', ar: 'GET: استرجاع البيانات من الخادم – بدون آثار جانبية (idempotent)' },
          { de: 'POST: Neue Daten an den Server senden (z.B. Formular, neuer Datensatz)', ar: 'POST: إرسال بيانات جديدة إلى الخادم (مثل نموذج، سجل جديد)' },
          { de: 'PUT: Bestehende Daten vollständig aktualisieren', ar: 'PUT: تحديث البيانات الموجودة بالكامل' },
          { de: 'DELETE: Daten auf dem Server löschen', ar: 'DELETE: حذف البيانات على الخادم' },
          { de: 'Statuscodes: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error)', ar: 'رموز الحالة: 200 (OK)، 201 (Created)، 400 (Bad Request)، 404 (Not Found)، 500 (Server Error)' },
        ],
        examples: [
          { de: 'GET /api/kunden – Gibt alle Kunden zurück. GET /api/kunden/42 – Gibt den Kunden mit ID 42 zurück. POST /api/kunden – Erstellt einen neuen Kunden. DELETE /api/kunden/42 – Löscht Kunden 42.', ar: 'GET /api/kunden – يُرجع جميع العملاء. GET /api/kunden/42 – يُرجع العميل بالمعرف 42. POST /api/kunden – ينشئ عميلاً جديداً. DELETE /api/kunden/42 – يحذف العميل 42.' },
        ],
        examRelevance: { de: 'HTTP-Methoden und Statuscodes sind in der IHK-Prüfung relevant, besonders im Kontext von REST-APIs.', ar: 'طرق HTTP ورموز الحالة مهمة في امتحان IHK، خاصة في سياق REST-APIs.' },
        summary: { de: 'HTTP-Methoden: GET (lesen), POST (erstellen), PUT (aktualisieren), DELETE (löschen). Statuscodes zeigen Erfolg/Fehler an.', ar: 'طرق HTTP: GET (قراءة)، POST (إنشاء)، PUT (تحديث)، DELETE (حذف). رموز الحالة تُظهر النجاح/الخطأ.' },
      },
    },
    {
      id: 'api-endpoints',
      name: { de: 'API-Endpunkte', ar: 'نقاط نهاية API' },
      content: {
        definition: {
          de: 'API-Endpunkte sind URLs, über die bestimmte Ressourcen oder Funktionen einer Anwendung angesprochen werden. REST-APIs verwenden URL-Pfade zusammen mit HTTP-Methoden für verschiedene Operationen.',
          ar: 'نقاط نهاية API هي عناوين URL يتم من خلالها الوصول إلى موارد أو وظائف معينة للتطبيق. REST-APIs تستخدم مسارات URL مع طرق HTTP لعمليات مختلفة.',
        },
        keyPoints: [
          { de: 'RESTful Konventionen: Ressourcen als Nomen im Plural: `/api/produkte`, `/api/kunden`', ar: 'اصطلاحات RESTful: الموارد كأسماء بالجمع: `/api/produkte`، `/api/kunden`' },
          { de: 'Einzelne Ressource: `/api/produkte/{id}` – z.B. `/api/produkte/5`', ar: 'مورد فردي: `/api/produkte/{id}` – مثل `/api/produkte/5`' },
          { de: 'Query-Parameter für Filter: `/api/produkte?kategorie=elektronik&maxPreis=500`', ar: 'معاملات الاستعلام للتصفية: `/api/produkte?kategorie=elektronik&maxPreis=500`' },
        ],
        examples: [
          { de: 'Endpunkt-Design für einen Online-Shop: GET /api/produkte – Alle Produkte. GET /api/produkte/5 – Produkt mit ID 5. POST /api/bestellungen – Neue Bestellung. GET /api/kunden/3/bestellungen – Bestellungen von Kunde 3.', ar: 'تصميم نقاط النهاية لمتجر إلكتروني: GET /api/produkte – جميع المنتجات. GET /api/produkte/5 – المنتج بالمعرف 5. POST /api/bestellungen – طلبية جديدة. GET /api/kunden/3/bestellungen – طلبيات العميل 3.' },
        ],
        examRelevance: { de: 'REST-API-Design und Endpunkt-Konventionen werden in der IHK-Prüfung abgefragt.', ar: 'تصميم REST-API واصطلاحات نقاط النهاية يُسأل عنها في امتحان IHK.' },
        summary: { de: 'API-Endpunkte = URL + HTTP-Methode. RESTful: Ressourcen im Plural, IDs im Pfad, Filter als Query-Parameter.', ar: 'نقاط نهاية API = URL + طريقة HTTP. RESTful: الموارد بالجمع، المعرفات في المسار، التصفية كمعاملات استعلام.' },
      },
    },
    {
      id: 'response-generation',
      name: { de: 'Response-Erzeugung', ar: 'إنشاء الاستجابة' },
      content: {
        definition: {
          de: 'Die Response-Erzeugung erstellt die Antwort des Servers an den Client. Sie enthält einen Statuscode, Header-Informationen und optional einen Body (häufig im JSON-Format).',
          ar: 'إنشاء الاستجابة ينشئ رد الخادم للعميل. يحتوي على رمز حالة ومعلومات رأس وجسم اختياري (غالباً بتنسيق JSON).',
        },
        keyPoints: [
          { de: 'JSON-Format: `{"name": "Max", "alter": 25}` – Standard für Datenaustausch in APIs', ar: 'تنسيق JSON: `{"name": "Max", "alter": 25}` – المعيار لتبادل البيانات في APIs' },
          { de: 'Passender Statuscode: 200 für Erfolg, 201 für neue Ressource, 404 wenn nicht gefunden', ar: 'رمز الحالة المناسب: 200 للنجاح، 201 لمورد جديد، 404 إذا لم يُعثر عليه' },
          { de: 'Content-Type Header: `application/json` für JSON-Antworten', ar: 'رأس Content-Type: `application/json` لاستجابات JSON' },
        ],
        examples: [
          { de: 'Erfolgreiche Antwort: Status 200, Body: `{"id": 1, "name": "Laptop", "preis": 999.99}`. Fehler: Status 404, Body: `{"error": "Produkt nicht gefunden"}`.', ar: 'استجابة ناجحة: الحالة 200، الجسم: `{"id": 1, "name": "Laptop", "preis": 999.99}`. خطأ: الحالة 404، الجسم: `{"error": "Produkt nicht gefunden"}`.' },
        ],
        examRelevance: { de: 'JSON-Format und HTTP-Statuscodes werden in der IHK-Prüfung im API-Kontext abgefragt.', ar: 'تنسيق JSON ورموز حالة HTTP يُسأل عنها في امتحان IHK في سياق API.' },
        summary: { de: 'Responses enthalten Statuscode und Body (meist JSON). Richtiger Statuscode für jede Situation wählen.', ar: 'الاستجابات تحتوي على رمز الحالة والجسم (عادةً JSON). اختيار رمز الحالة الصحيح لكل حالة.' },
      },
    },
    {
      id: 'backend-data-filtering',
      name: { de: 'Datenfilterung in Backend-Methoden', ar: 'تصفية البيانات في طرق الخلفية' },
      content: {
        definition: {
          de: 'Backend-Methoden filtern, sortieren und transformieren Daten, bevor sie als Response an den Client gesendet werden. Die Geschäftslogik wird serverseitig implementiert.',
          ar: 'طرق الخلفية تصفي وترتب وتحول البيانات قبل إرسالها كاستجابة إلى العميل. يتم تنفيذ منطق الأعمال على جانب الخادم.',
        },
        keyPoints: [
          { de: 'Filterung nach Kriterien: Nur relevante Datensätze an den Client senden', ar: 'التصفية حسب المعايير: إرسال السجلات ذات الصلة فقط إلى العميل' },
          { de: 'Sortierung: Daten in der gewünschten Reihenfolge zurückgeben', ar: 'الترتيب: إرجاع البيانات بالترتيب المطلوب' },
          { de: 'Pagination: Große Datenmengen in Seiten aufteilen (z.B. 20 Einträge pro Seite)', ar: 'التقسيم الصفحي: تقسيم مجموعات البيانات الكبيرة إلى صفحات (مثل 20 إدخالاً لكل صفحة)' },
          { de: 'Transformation: Daten für die Antwort aufbereiten (z.B. Passwort-Felder entfernen)', ar: 'التحويل: تجهيز البيانات للاستجابة (مثل إزالة حقول كلمات المرور)' },
        ],
        examples: [
          { de: '`public List<Produkt> sucheProdukte(String kategorie, double maxPreis) { List<Produkt> ergebnis = new ArrayList<>(); for (Produkt p : alleProdukte) { if (p.getKategorie().equals(kategorie) && p.getPreis() <= maxPreis) { ergebnis.add(p); } } return ergebnis; }`', ar: '`public List<Produkt> sucheProdukte(String kategorie, double maxPreis) { List<Produkt> ergebnis = new ArrayList<>(); for (Produkt p : alleProdukte) { if (p.getKategorie().equals(kategorie) && p.getPreis() <= maxPreis) { ergebnis.add(p); } } return ergebnis; }`' },
        ],
        examRelevance: { de: 'Backend-Filtermethoden werden in der IHK-Prüfung als Programmieraufgaben gestellt. Man muss Daten nach Kriterien filtern und aufbereiten können.', ar: 'طرق تصفية الخلفية تُطرح في امتحان IHK كمهام برمجة. يجب تصفية البيانات حسب المعايير وتجهيزها.' },
        summary: { de: 'Backend-Methoden filtern und transformieren Daten vor dem Senden. Geschäftslogik serverseitig, JSON an den Client.', ar: 'طرق الخلفية تصفي وتحول البيانات قبل الإرسال. منطق الأعمال على الخادم، JSON إلى العميل.' },
      },
    },
  ],
};
