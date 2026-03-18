import type { TopicGroup } from '../../../types';

export const databaseQueries: TopicGroup = {
  id: 'group09-database-queries',
  name: {
    de: 'Datenbankabfragen (SQL)',
    ar: 'استعلامات قواعد البيانات (SQL)',
  },
  description: {
    de: 'SELECT, WHERE, ORDER BY, JOIN, GROUP BY, HAVING und Aggregatfunktionen',
    ar: 'SELECT و WHERE و ORDER BY و JOIN و GROUP BY و HAVING ودوال التجميع',
  },
  priority: 'very-high',
  topics: [
    {
      id: 'sql-select',
      name: { de: 'SELECT', ar: 'SELECT' },
      content: {
        definition: {
          de: 'SELECT ist die grundlegende SQL-Anweisung zum Abfragen von Daten aus einer oder mehreren Tabellen. Sie bestimmt, welche Spalten im Ergebnis angezeigt werden.',
          ar: 'SELECT هي تعليمة SQL الأساسية لاستعلام البيانات من جدول أو أكثر. وهي تحدد أي الأعمدة تُعرض في النتيجة.',
        },
        keyPoints: [
          { de: '`SELECT *` wählt alle Spalten aus', ar: '`SELECT *` يختار جميع الأعمدة' },
          { de: '`SELECT spalte1, spalte2` wählt bestimmte Spalten', ar: '`SELECT spalte1, spalte2` يختار أعمدة محددة' },
          { de: '`SELECT DISTINCT spalte` entfernt Duplikate aus dem Ergebnis', ar: '`SELECT DISTINCT spalte` يزيل المكررات من النتيجة' },
          { de: 'Alias: `SELECT name AS Kundenname` gibt der Spalte einen anderen Anzeigenamen', ar: 'الاسم المستعار: `SELECT name AS Kundenname` يعطي العمود اسم عرض آخر' },
        ],
        examples: [
          { de: '`SELECT vorname, nachname FROM kunden;` – Zeigt nur Vor- und Nachname aller Kunden.', ar: '`SELECT vorname, nachname FROM kunden;` – يعرض فقط الاسم الأول والأخير لجميع العملاء.' },
          { de: '`SELECT DISTINCT abteilung FROM mitarbeiter;` – Zeigt jede Abteilung nur einmal.', ar: '`SELECT DISTINCT abteilung FROM mitarbeiter;` – يعرض كل قسم مرة واحدة فقط.' },
        ],
        examRelevance: { de: 'SELECT ist die Basis jeder SQL-Aufgabe in der IHK-Prüfung.', ar: 'SELECT هو أساس كل مهمة SQL في امتحان IHK.' },
        summary: { de: 'SELECT wählt Spalten aus Tabellen. Mit DISTINCT werden Duplikate entfernt, mit AS Aliase vergeben.', ar: 'SELECT يختار أعمدة من الجداول. مع DISTINCT تُزال المكررات، مع AS تُعطى أسماء مستعارة.' },
      },
    },
    {
      id: 'sql-where',
      name: { de: 'WHERE', ar: 'WHERE' },
      content: {
        definition: {
          de: 'Die WHERE-Klausel filtert Zeilen basierend auf einer Bedingung. Nur Zeilen, die die Bedingung erfüllen, erscheinen im Ergebnis.',
          ar: 'عبارة WHERE تصفي الصفوف بناءً على شرط. فقط الصفوف التي تستوفي الشرط تظهر في النتيجة.',
        },
        keyPoints: [
          { de: 'Vergleichsoperatoren: `=`, `<>`, `<`, `>`, `<=`, `>=`', ar: 'عوامل المقارنة: `=`, `<>`, `<`, `>`, `<=`, `>=`' },
          { de: 'BETWEEN: `WHERE alter BETWEEN 18 AND 30` – Bereichsabfrage', ar: 'BETWEEN: `WHERE alter BETWEEN 18 AND 30` – استعلام النطاق' },
          { de: 'LIKE: `WHERE name LIKE \'M%\'` – Mustervergleich (% = beliebig viele Zeichen, _ = ein Zeichen)', ar: 'LIKE: `WHERE name LIKE \'M%\'` – مقارنة الأنماط (% = أي عدد من الأحرف، _ = حرف واحد)' },
          { de: 'IN: `WHERE stadt IN (\'Berlin\', \'München\')` – Prüft gegen eine Werteliste', ar: 'IN: `WHERE stadt IN (\'Berlin\', \'München\')` – يفحص مقابل قائمة قيم' },
          { de: 'IS NULL / IS NOT NULL: Prüft auf fehlende Werte', ar: 'IS NULL / IS NOT NULL: يفحص القيم المفقودة' },
        ],
        examples: [
          { de: '`SELECT * FROM produkte WHERE preis > 50 AND kategorie = \'Elektronik\';` – Elektronik-Produkte über 50 Euro.', ar: '`SELECT * FROM produkte WHERE preis > 50 AND kategorie = \'Elektronik\';` – منتجات إلكترونية بأكثر من 50 يورو.' },
          { de: '`SELECT * FROM kunden WHERE email IS NOT NULL;` – Alle Kunden mit E-Mail-Adresse.', ar: '`SELECT * FROM kunden WHERE email IS NOT NULL;` – جميع العملاء بعنوان بريد إلكتروني.' },
        ],
        examRelevance: { de: 'WHERE-Klauseln mit verschiedenen Operatoren sind Kernbestandteil jeder SQL-Aufgabe in der IHK-Prüfung.', ar: 'عبارات WHERE بعوامل مختلفة هي جزء أساسي من كل مهمة SQL في امتحان IHK.' },
        summary: { de: 'WHERE filtert Zeilen nach Bedingungen. Operatoren: Vergleich, BETWEEN, LIKE, IN, IS NULL.', ar: 'WHERE يصفي الصفوف حسب الشروط. العوامل: مقارنة، BETWEEN، LIKE، IN، IS NULL.' },
      },
    },
    {
      id: 'sql-order-by',
      name: { de: 'ORDER BY', ar: 'ORDER BY' },
      content: {
        definition: {
          de: 'ORDER BY sortiert das Abfrageergebnis nach einer oder mehreren Spalten. Standardmäßig aufsteigend (ASC), mit DESC absteigend.',
          ar: 'ORDER BY يرتب نتيجة الاستعلام حسب عمود أو أكثر. تصاعدياً بشكل افتراضي (ASC)، تنازلياً مع DESC.',
        },
        keyPoints: [
          { de: '`ORDER BY spalte ASC` – Aufsteigend (Standard)', ar: '`ORDER BY spalte ASC` – تصاعدي (افتراضي)' },
          { de: '`ORDER BY spalte DESC` – Absteigend', ar: '`ORDER BY spalte DESC` – تنازلي' },
          { de: 'Mehrere Spalten: `ORDER BY nachname ASC, vorname ASC` – Erst nach Nachname, dann Vorname', ar: 'أعمدة متعددة: `ORDER BY nachname ASC, vorname ASC` – أولاً حسب الاسم الأخير، ثم الأول' },
        ],
        examples: [
          { de: '`SELECT * FROM produkte ORDER BY preis DESC;` – Produkte vom teuersten zum günstigsten.', ar: '`SELECT * FROM produkte ORDER BY preis DESC;` – المنتجات من الأغلى إلى الأرخص.' },
        ],
        examRelevance: { de: 'ORDER BY wird in fast jeder SQL-Aufgabe der IHK-Prüfung benötigt.', ar: 'ORDER BY مطلوب في كل مهمة SQL تقريباً في امتحان IHK.' },
        summary: { de: 'ORDER BY sortiert Ergebnisse. ASC = aufsteigend, DESC = absteigend. Mehrere Sortierspalten möglich.', ar: 'ORDER BY يرتب النتائج. ASC = تصاعدي، DESC = تنازلي. أعمدة ترتيب متعددة ممكنة.' },
      },
    },
    {
      id: 'sql-join',
      name: { de: 'JOIN', ar: 'JOIN' },
      content: {
        definition: {
          de: 'JOIN verbindet Daten aus zwei oder mehr Tabellen basierend auf einer gemeinsamen Spalte (meist Primär-/Fremdschlüssel-Beziehung).',
          ar: 'JOIN يربط البيانات من جدولين أو أكثر بناءً على عمود مشترك (عادةً علاقة مفتاح أساسي/أجنبي).',
        },
        keyPoints: [
          { de: 'INNER JOIN: Nur Zeilen mit Übereinstimmung in beiden Tabellen', ar: 'INNER JOIN: فقط الصفوف المتطابقة في كلا الجدولين' },
          { de: 'LEFT JOIN: Alle Zeilen der linken Tabelle + übereinstimmende der rechten', ar: 'LEFT JOIN: جميع صفوف الجدول الأيسر + المتطابقة من الأيمن' },
          { de: 'RIGHT JOIN: Alle Zeilen der rechten Tabelle + übereinstimmende der linken', ar: 'RIGHT JOIN: جميع صفوف الجدول الأيمن + المتطابقة من الأيسر' },
          { de: 'ON-Klausel definiert die Verknüpfungsbedingung: `ON tabelle1.id = tabelle2.fk_id`', ar: 'عبارة ON تحدد شرط الربط: `ON tabelle1.id = tabelle2.fk_id`' },
        ],
        examples: [
          { de: '`SELECT k.name, b.datum FROM kunden k INNER JOIN bestellungen b ON k.id = b.kunden_id;` – Zeigt Kundennamen mit ihren Bestelldaten.', ar: '`SELECT k.name, b.datum FROM kunden k INNER JOIN bestellungen b ON k.id = b.kunden_id;` – يعرض أسماء العملاء مع تواريخ طلباتهم.' },
          { de: '`SELECT k.name, b.datum FROM kunden k LEFT JOIN bestellungen b ON k.id = b.kunden_id;` – Zeigt alle Kunden, auch ohne Bestellungen (NULL bei Datum).', ar: '`SELECT k.name, b.datum FROM kunden k LEFT JOIN bestellungen b ON k.id = b.kunden_id;` – يعرض جميع العملاء، حتى بدون طلبات (NULL في التاريخ).' },
        ],
        examRelevance: { de: 'JOINs sind ein zentrales Thema der IHK-Prüfung. Man muss INNER, LEFT und RIGHT JOIN unterscheiden und korrekt formulieren können.', ar: 'JOINs هي موضوع مركزي في امتحان IHK. يجب التمييز بين INNER و LEFT و RIGHT JOIN وصياغتها بشكل صحيح.' },
        summary: { de: 'JOIN verbindet Tabellen über gemeinsame Spalten. INNER = nur Treffer, LEFT/RIGHT = alle aus einer Seite.', ar: 'JOIN يربط الجداول عبر أعمدة مشتركة. INNER = المتطابقات فقط، LEFT/RIGHT = الكل من جانب واحد.' },
      },
    },
    {
      id: 'sql-group-by',
      name: { de: 'GROUP BY', ar: 'GROUP BY' },
      content: {
        definition: {
          de: 'GROUP BY gruppiert Zeilen mit gleichen Werten in einer Spalte zusammen. In Kombination mit Aggregatfunktionen (COUNT, SUM, AVG) werden Berechnungen pro Gruppe durchgeführt.',
          ar: 'GROUP BY يجمع الصفوف ذات القيم المتشابهة في عمود معاً. بالاقتران مع دوال التجميع (COUNT, SUM, AVG) يتم إجراء الحسابات لكل مجموعة.',
        },
        keyPoints: [
          { de: 'Alle Spalten im SELECT müssen entweder in GROUP BY stehen oder in einer Aggregatfunktion', ar: 'جميع الأعمدة في SELECT يجب أن تكون إما في GROUP BY أو في دالة تجميع' },
          { de: 'GROUP BY wird nach WHERE, aber vor ORDER BY ausgeführt', ar: 'GROUP BY يُنفذ بعد WHERE لكن قبل ORDER BY' },
          { de: 'Mehrere Gruppierungsspalten möglich: `GROUP BY abteilung, standort`', ar: 'أعمدة تجميع متعددة ممكنة: `GROUP BY abteilung, standort`' },
        ],
        examples: [
          { de: '`SELECT abteilung, COUNT(*) AS anzahl FROM mitarbeiter GROUP BY abteilung;` – Zählt Mitarbeiter pro Abteilung.', ar: '`SELECT abteilung, COUNT(*) AS anzahl FROM mitarbeiter GROUP BY abteilung;` – يعد الموظفين لكل قسم.' },
          { de: '`SELECT kategorie, AVG(preis) AS durchschnittspreis FROM produkte GROUP BY kategorie;` – Durchschnittspreis pro Kategorie.', ar: '`SELECT kategorie, AVG(preis) AS durchschnittspreis FROM produkte GROUP BY kategorie;` – متوسط السعر لكل فئة.' },
        ],
        examRelevance: { de: 'GROUP BY mit Aggregatfunktionen ist eine häufige IHK-Aufgabe. Man muss wissen, welche Spalten gruppiert werden müssen.', ar: 'GROUP BY مع دوال التجميع مهمة IHK شائعة. يجب معرفة أي الأعمدة يجب تجميعها.' },
        summary: { de: 'GROUP BY gruppiert Zeilen für Aggregatberechnungen. Alle SELECT-Spalten müssen gruppiert oder aggregiert sein.', ar: 'GROUP BY يجمع الصفوف لحسابات التجميع. جميع أعمدة SELECT يجب أن تكون مُجمّعة أو مُجمّعة بدوال.' },
      },
    },
    {
      id: 'sql-having',
      name: { de: 'HAVING', ar: 'HAVING' },
      content: {
        definition: {
          de: 'HAVING filtert gruppierte Ergebnisse nach einer Bedingung, die auf Aggregatfunktionen basiert. Es ist das Äquivalent zu WHERE, aber für gruppierte Daten.',
          ar: 'HAVING يصفي النتائج المُجمّعة بناءً على شرط يعتمد على دوال التجميع. وهو مكافئ لـ WHERE، لكن للبيانات المُجمّعة.',
        },
        keyPoints: [
          { de: 'WHERE filtert einzelne Zeilen VOR der Gruppierung, HAVING filtert Gruppen NACH der Gruppierung', ar: 'WHERE يصفي الصفوف الفردية قبل التجميع، HAVING يصفي المجموعات بعد التجميع' },
          { de: 'HAVING kann nur mit GROUP BY verwendet werden', ar: 'HAVING يمكن استخدامه فقط مع GROUP BY' },
          { de: 'HAVING verwendet Aggregatfunktionen: `HAVING COUNT(*) > 5`', ar: 'HAVING يستخدم دوال التجميع: `HAVING COUNT(*) > 5`' },
        ],
        examples: [
          { de: '`SELECT abteilung, COUNT(*) FROM mitarbeiter GROUP BY abteilung HAVING COUNT(*) > 10;` – Nur Abteilungen mit mehr als 10 Mitarbeitern.', ar: '`SELECT abteilung, COUNT(*) FROM mitarbeiter GROUP BY abteilung HAVING COUNT(*) > 10;` – فقط الأقسام بأكثر من 10 موظفين.' },
        ],
        examRelevance: { de: 'Der Unterschied zwischen WHERE und HAVING ist ein häufiges IHK-Prüfungsthema.', ar: 'الفرق بين WHERE و HAVING هو موضوع امتحاني شائع في IHK.' },
        summary: { de: 'HAVING filtert gruppierte Ergebnisse. WHERE = vor Gruppierung, HAVING = nach Gruppierung.', ar: 'HAVING يصفي النتائج المُجمّعة. WHERE = قبل التجميع، HAVING = بعد التجميع.' },
      },
    },
    {
      id: 'sql-count',
      name: { de: 'COUNT', ar: 'COUNT' },
      content: {
        definition: {
          de: 'COUNT() ist eine Aggregatfunktion, die die Anzahl der Zeilen zählt. `COUNT(*)` zählt alle Zeilen, `COUNT(spalte)` zählt nur Zeilen mit Nicht-NULL-Werten in der Spalte.',
          ar: 'COUNT() هي دالة تجميع تعد عدد الصفوف. `COUNT(*)` يعد جميع الصفوف، `COUNT(spalte)` يعد فقط الصفوف بقيم غير NULL في العمود.',
        },
        keyPoints: [
          { de: '`COUNT(*)` zählt alle Zeilen inklusive NULL-Werte', ar: '`COUNT(*)` يعد جميع الصفوف بما في ذلك قيم NULL' },
          { de: '`COUNT(spalte)` ignoriert NULL-Werte', ar: '`COUNT(spalte)` يتجاهل قيم NULL' },
          { de: '`COUNT(DISTINCT spalte)` zählt nur unterschiedliche Werte', ar: '`COUNT(DISTINCT spalte)` يعد القيم المختلفة فقط' },
        ],
        examples: [
          { de: '`SELECT COUNT(*) FROM bestellungen;` – Gesamtanzahl aller Bestellungen.', ar: '`SELECT COUNT(*) FROM bestellungen;` – العدد الإجمالي لجميع الطلبات.' },
          { de: '`SELECT COUNT(DISTINCT kunden_id) FROM bestellungen;` – Anzahl verschiedener Kunden mit Bestellungen.', ar: '`SELECT COUNT(DISTINCT kunden_id) FROM bestellungen;` – عدد العملاء المختلفين الذين لديهم طلبات.' },
        ],
        examRelevance: { de: 'COUNT ist die am häufigsten verwendete Aggregatfunktion in IHK-Prüfungen.', ar: 'COUNT هي دالة التجميع الأكثر استخداماً في امتحانات IHK.' },
        summary: { de: 'COUNT zählt Zeilen. * = alle, spalte = ohne NULL, DISTINCT = nur verschiedene Werte.', ar: 'COUNT يعد الصفوف. * = الكل، عمود = بدون NULL، DISTINCT = القيم المختلفة فقط.' },
      },
    },
    {
      id: 'sql-sum',
      name: { de: 'SUM', ar: 'SUM' },
      content: {
        definition: {
          de: 'SUM() berechnet die Summe aller Werte in einer numerischen Spalte. NULL-Werte werden ignoriert.',
          ar: 'SUM() تحسب مجموع جميع القيم في عمود رقمي. قيم NULL تُتجاهل.',
        },
        keyPoints: [
          { de: 'Nur für numerische Spalten anwendbar', ar: 'قابلة للتطبيق على الأعمدة الرقمية فقط' },
          { de: 'Oft mit GROUP BY kombiniert für Summen pro Gruppe', ar: 'غالباً تُجمع مع GROUP BY لمجاميع كل مجموعة' },
          { de: 'NULL-Werte werden bei der Berechnung übersprungen', ar: 'قيم NULL تُتخطى في الحساب' },
        ],
        examples: [
          { de: '`SELECT SUM(betrag) AS gesamtumsatz FROM bestellungen;` – Gesamtumsatz aller Bestellungen.', ar: '`SELECT SUM(betrag) AS gesamtumsatz FROM bestellungen;` – إجمالي إيرادات جميع الطلبات.' },
          { de: '`SELECT kunden_id, SUM(betrag) FROM bestellungen GROUP BY kunden_id;` – Umsatz pro Kunde.', ar: '`SELECT kunden_id, SUM(betrag) FROM bestellungen GROUP BY kunden_id;` – الإيرادات لكل عميل.' },
        ],
        examRelevance: { de: 'SUM wird in der IHK-Prüfung für Umsatz- und Mengenberechnungen verwendet.', ar: 'SUM يُستخدم في امتحان IHK لحسابات الإيرادات والكميات.' },
        summary: { de: 'SUM berechnet die Summe numerischer Werte. Ignoriert NULL. Oft mit GROUP BY für Gruppensummen.', ar: 'SUM تحسب مجموع القيم الرقمية. تتجاهل NULL. غالباً مع GROUP BY لمجاميع المجموعات.' },
      },
    },
    {
      id: 'sql-avg',
      name: { de: 'AVG', ar: 'AVG' },
      content: {
        definition: {
          de: 'AVG() berechnet den Durchschnittswert einer numerischen Spalte. NULL-Werte werden bei der Berechnung nicht berücksichtigt.',
          ar: 'AVG() تحسب متوسط قيم عمود رقمي. قيم NULL لا تُؤخذ في الاعتبار عند الحساب.',
        },
        keyPoints: [
          { de: 'Berechnung: Summe aller Nicht-NULL-Werte / Anzahl der Nicht-NULL-Werte', ar: 'الحساب: مجموع جميع القيم غير NULL / عدد القيم غير NULL' },
          { de: 'Ergebnis kann Nachkommastellen haben, auch wenn die Spalte ganzzahlig ist', ar: 'النتيجة يمكن أن تحتوي على أرقام عشرية، حتى إذا كان العمود صحيحاً' },
          { de: 'ROUND(AVG(spalte), 2) rundet auf 2 Nachkommastellen', ar: 'ROUND(AVG(spalte), 2) يقرب إلى منزلتين عشريتين' },
        ],
        examples: [
          { de: '`SELECT AVG(gehalt) AS durchschnittsgehalt FROM mitarbeiter;` – Durchschnittliches Gehalt.', ar: '`SELECT AVG(gehalt) AS durchschnittsgehalt FROM mitarbeiter;` – متوسط الراتب.' },
          { de: '`SELECT abteilung, ROUND(AVG(gehalt), 2) FROM mitarbeiter GROUP BY abteilung;` – Durchschnittsgehalt pro Abteilung.', ar: '`SELECT abteilung, ROUND(AVG(gehalt), 2) FROM mitarbeiter GROUP BY abteilung;` – متوسط الراتب لكل قسم.' },
        ],
        examRelevance: { de: 'AVG wird in der IHK-Prüfung für Durchschnittsberechnungen verwendet, oft mit GROUP BY.', ar: 'AVG يُستخدم في امتحان IHK لحسابات المتوسطات، غالباً مع GROUP BY.' },
        summary: { de: 'AVG berechnet den Durchschnitt numerischer Werte ohne NULL. Mit ROUND() Nachkommastellen begrenzen.', ar: 'AVG تحسب متوسط القيم الرقمية بدون NULL. مع ROUND() تحديد المنازل العشرية.' },
      },
    },
    {
      id: 'sql-min-max',
      name: { de: 'MIN und MAX', ar: 'MIN و MAX' },
      content: {
        definition: {
          de: 'MIN() gibt den kleinsten Wert und MAX() den größten Wert einer Spalte zurück. Sie funktionieren mit numerischen, Text- und Datumswerten.',
          ar: 'MIN() تُرجع أصغر قيمة و MAX() تُرجع أكبر قيمة في عمود. تعمل مع القيم الرقمية والنصية وقيم التاريخ.',
        },
        keyPoints: [
          { de: 'Bei Text: MIN = alphabetisch erster, MAX = alphabetisch letzter Wert', ar: 'في النصوص: MIN = أول قيمة أبجدياً، MAX = آخر قيمة أبجدياً' },
          { de: 'Bei Datum: MIN = ältestes, MAX = neuestes Datum', ar: 'في التاريخ: MIN = أقدم تاريخ، MAX = أحدث تاريخ' },
          { de: 'NULL-Werte werden ignoriert', ar: 'قيم NULL تُتجاهل' },
        ],
        examples: [
          { de: '`SELECT MIN(preis) AS guenstigster, MAX(preis) AS teuerster FROM produkte;` – Günstigstes und teuerstes Produkt.', ar: '`SELECT MIN(preis) AS guenstigster, MAX(preis) AS teuerster FROM produkte;` – أرخص وأغلى منتج.' },
          { de: '`SELECT kategorie, MAX(preis) FROM produkte GROUP BY kategorie;` – Teuerster Preis pro Kategorie.', ar: '`SELECT kategorie, MAX(preis) FROM produkte GROUP BY kategorie;` – أغلى سعر لكل فئة.' },
        ],
        examRelevance: { de: 'MIN/MAX werden in der IHK-Prüfung für Extremwertbestimmungen und zusammen mit GROUP BY verwendet.', ar: 'MIN/MAX يُستخدمان في امتحان IHK لتحديد القيم المتطرفة ومع GROUP BY.' },
        summary: { de: 'MIN/MAX finden den kleinsten/größten Wert. Funktionieren mit Zahlen, Text und Datum.', ar: 'MIN/MAX تجد أصغر/أكبر قيمة. تعمل مع الأرقام والنصوص والتواريخ.' },
      },
    },
  ],
};
