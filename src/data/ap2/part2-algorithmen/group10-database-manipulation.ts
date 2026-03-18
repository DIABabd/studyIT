import type { TopicGroup } from '../../../types';

export const databaseManipulation: TopicGroup = {
  id: 'group10-database-manipulation',
  name: {
    de: 'Datenmanipulation (SQL DML/DDL)',
    ar: 'معالجة البيانات (SQL DML/DDL)',
  },
  description: {
    de: 'INSERT, UPDATE, DELETE, ALTER TABLE und Daten-Constraints',
    ar: 'INSERT و UPDATE و DELETE و ALTER TABLE وقيود البيانات',
  },
  priority: 'high',
  topics: [
    {
      id: 'sql-insert',
      name: { de: 'INSERT', ar: 'INSERT' },
      content: {
        definition: {
          de: 'INSERT fügt neue Datensätze (Zeilen) in eine Tabelle ein. Man kann alle oder nur bestimmte Spalten befüllen – nicht angegebene Spalten erhalten ihren Standardwert oder NULL.',
          ar: 'INSERT يدرج سجلات (صفوف) جديدة في جدول. يمكن ملء جميع الأعمدة أو أعمدة محددة فقط – الأعمدة غير المحددة تحصل على قيمتها الافتراضية أو NULL.',
        },
        keyPoints: [
          { de: 'Vollständig: `INSERT INTO tabelle VALUES (wert1, wert2, ...);` – Alle Spalten in Reihenfolge', ar: 'كامل: `INSERT INTO tabelle VALUES (wert1, wert2, ...);` – جميع الأعمدة بالترتيب' },
          { de: 'Selektiv: `INSERT INTO tabelle (spalte1, spalte2) VALUES (wert1, wert2);` – Nur bestimmte Spalten', ar: 'انتقائي: `INSERT INTO tabelle (spalte1, spalte2) VALUES (wert1, wert2);` – أعمدة محددة فقط' },
          { de: 'Strings in einfachen Anführungszeichen: `\'Text\'`, Zahlen ohne Anführungszeichen', ar: 'النصوص بعلامات اقتباس مفردة: `\'Text\'`، الأرقام بدون علامات اقتباس' },
        ],
        examples: [
          { de: '`INSERT INTO kunden (name, email, stadt) VALUES (\'Max Müller\', \'max@mail.de\', \'Berlin\');` – Fügt einen neuen Kunden ein.', ar: '`INSERT INTO kunden (name, email, stadt) VALUES (\'Max Müller\', \'max@mail.de\', \'Berlin\');` – يدرج عميلاً جديداً.' },
          { de: '`INSERT INTO bestellungen (kunden_id, produkt, menge) VALUES (1, \'Laptop\', 2);` – Fügt eine Bestellung ein.', ar: '`INSERT INTO bestellungen (kunden_id, produkt, menge) VALUES (1, \'Laptop\', 2);` – يدرج طلبية.' },
        ],
        examRelevance: { de: 'INSERT-Anweisungen müssen in der IHK-Prüfung korrekt formuliert werden, besonders mit der richtigen Spaltenreihenfolge.', ar: 'تعليمات INSERT يجب صياغتها بشكل صحيح في امتحان IHK، خاصة بترتيب الأعمدة الصحيح.' },
        summary: { de: 'INSERT fügt neue Zeilen ein. Spalten können explizit angegeben werden. Strings in einfachen Anführungszeichen.', ar: 'INSERT يدرج صفوفاً جديدة. يمكن تحديد الأعمدة صراحة. النصوص بعلامات اقتباس مفردة.' },
      },
    },
    {
      id: 'sql-update',
      name: { de: 'UPDATE', ar: 'UPDATE' },
      content: {
        definition: {
          de: 'UPDATE ändert bestehende Datensätze in einer Tabelle. Mit SET werden die neuen Werte angegeben, mit WHERE wird festgelegt, welche Zeilen geändert werden. Ohne WHERE werden ALLE Zeilen geändert!',
          ar: 'UPDATE يغير السجلات الموجودة في جدول. بـ SET تُحدد القيم الجديدة، بـ WHERE يُحدد أي الصفوف تُغيَّر. بدون WHERE تُغيَّر جميع الصفوف!',
        },
        keyPoints: [
          { de: 'Syntax: `UPDATE tabelle SET spalte = neuerWert WHERE bedingung;`', ar: 'الصياغة: `UPDATE tabelle SET spalte = neuerWert WHERE bedingung;`' },
          { de: 'ACHTUNG: Ohne WHERE werden alle Zeilen der Tabelle geändert!', ar: 'تحذير: بدون WHERE تُغيَّر جميع صفوف الجدول!' },
          { de: 'Mehrere Spalten: `SET spalte1 = wert1, spalte2 = wert2`', ar: 'أعمدة متعددة: `SET spalte1 = wert1, spalte2 = wert2`' },
          { de: 'Berechnungen möglich: `SET preis = preis * 1.1` – Erhöht alle Preise um 10%', ar: 'الحسابات ممكنة: `SET preis = preis * 1.1` – يزيد جميع الأسعار بنسبة 10%' },
        ],
        examples: [
          { de: '`UPDATE mitarbeiter SET gehalt = gehalt * 1.05 WHERE abteilung = \'IT\';` – 5% Gehaltserhöhung für die IT-Abteilung.', ar: '`UPDATE mitarbeiter SET gehalt = gehalt * 1.05 WHERE abteilung = \'IT\';` – زيادة 5% في الراتب لقسم تكنولوجيا المعلومات.' },
          { de: '`UPDATE produkte SET status = \'inaktiv\' WHERE bestand = 0;` – Setzt alle ausverkauften Produkte auf inaktiv.', ar: '`UPDATE produkte SET status = \'inaktiv\' WHERE bestand = 0;` – يعيّن جميع المنتجات المنفدة كغير نشطة.' },
        ],
        examRelevance: { de: 'UPDATE-Anweisungen mit WHERE-Bedingung sind ein Standardthema der IHK-Prüfung. Die Gefahr fehlender WHERE-Klauseln wird gerne abgefragt.', ar: 'تعليمات UPDATE بشرط WHERE هي موضوع قياسي في امتحان IHK. خطر عبارات WHERE المفقودة يُسأل عنه كثيراً.' },
        summary: { de: 'UPDATE ändert bestehende Daten mit SET und WHERE. Ohne WHERE: Alle Zeilen betroffen!', ar: 'UPDATE يغير البيانات الموجودة بـ SET و WHERE. بدون WHERE: جميع الصفوف تتأثر!' },
      },
    },
    {
      id: 'sql-delete',
      name: { de: 'DELETE', ar: 'DELETE' },
      content: {
        definition: {
          de: 'DELETE entfernt Datensätze aus einer Tabelle. Mit WHERE wird festgelegt, welche Zeilen gelöscht werden. Ohne WHERE werden ALLE Zeilen gelöscht!',
          ar: 'DELETE يحذف السجلات من جدول. بـ WHERE يُحدد أي الصفوف تُحذف. بدون WHERE تُحذف جميع الصفوف!',
        },
        keyPoints: [
          { de: 'Syntax: `DELETE FROM tabelle WHERE bedingung;`', ar: 'الصياغة: `DELETE FROM tabelle WHERE bedingung;`' },
          { de: 'ACHTUNG: `DELETE FROM tabelle;` ohne WHERE löscht ALLE Datensätze', ar: 'تحذير: `DELETE FROM tabelle;` بدون WHERE يحذف جميع السجلات' },
          { de: 'Fremdschlüssel-Constraints können das Löschen verhindern (referentielle Integrität)', ar: 'قيود المفتاح الأجنبي يمكن أن تمنع الحذف (التكامل المرجعي)' },
        ],
        examples: [
          { de: '`DELETE FROM bestellungen WHERE datum < \'2020-01-01\';` – Löscht alle Bestellungen vor 2020.', ar: '`DELETE FROM bestellungen WHERE datum < \'2020-01-01\';` – يحذف جميع الطلبات قبل 2020.' },
          { de: '`DELETE FROM kunden WHERE id = 42;` – Löscht den Kunden mit ID 42.', ar: '`DELETE FROM kunden WHERE id = 42;` – يحذف العميل بالمعرف 42.' },
        ],
        examRelevance: { de: 'DELETE-Anweisungen und die Bedeutung der WHERE-Klausel sind IHK-relevant. Auch referentielle Integrität beim Löschen wird gefragt.', ar: 'تعليمات DELETE وأهمية عبارة WHERE مهمة لـ IHK. التكامل المرجعي عند الحذف يُسأل عنه أيضاً.' },
        summary: { de: 'DELETE löscht Zeilen. WHERE-Klausel unbedingt verwenden! Fremdschlüssel können Löschung verhindern.', ar: 'DELETE يحذف الصفوف. استخدم عبارة WHERE بالتأكيد! المفاتيح الأجنبية يمكن أن تمنع الحذف.' },
      },
    },
    {
      id: 'sql-alter-table',
      name: { de: 'ALTER TABLE', ar: 'ALTER TABLE' },
      content: {
        definition: {
          de: 'ALTER TABLE ändert die Struktur einer bestehenden Tabelle. Man kann Spalten hinzufügen, entfernen, ändern oder Constraints anpassen.',
          ar: 'ALTER TABLE يغير هيكل جدول موجود. يمكن إضافة أعمدة أو إزالتها أو تغييرها أو تعديل القيود.',
        },
        keyPoints: [
          { de: 'Spalte hinzufügen: `ALTER TABLE tabelle ADD spalte datentyp;`', ar: 'إضافة عمود: `ALTER TABLE tabelle ADD spalte datentyp;`' },
          { de: 'Spalte löschen: `ALTER TABLE tabelle DROP COLUMN spalte;`', ar: 'حذف عمود: `ALTER TABLE tabelle DROP COLUMN spalte;`' },
          { de: 'Datentyp ändern: `ALTER TABLE tabelle MODIFY spalte neuerDatentyp;`', ar: 'تغيير نوع البيانات: `ALTER TABLE tabelle MODIFY spalte neuerDatentyp;`' },
        ],
        examples: [
          { de: '`ALTER TABLE kunden ADD telefon VARCHAR(20);` – Fügt eine Telefonspalte hinzu.', ar: '`ALTER TABLE kunden ADD telefon VARCHAR(20);` – يضيف عمود هاتف.' },
          { de: '`ALTER TABLE produkte DROP COLUMN farbe;` – Entfernt die Farbspalte.', ar: '`ALTER TABLE produkte DROP COLUMN farbe;` – يحذف عمود اللون.' },
        ],
        examRelevance: { de: 'ALTER TABLE kommt in der IHK-Prüfung vor, wenn Tabellenstrukturen angepasst werden müssen.', ar: 'ALTER TABLE يظهر في امتحان IHK عندما يجب تعديل هياكل الجداول.' },
        summary: { de: 'ALTER TABLE ändert Tabellenstruktur: ADD, DROP COLUMN, MODIFY zum Anpassen von Spalten.', ar: 'ALTER TABLE يغير هيكل الجدول: ADD و DROP COLUMN و MODIFY لتعديل الأعمدة.' },
      },
    },
    {
      id: 'data-constraints',
      name: { de: 'Daten-Constraints (NOT NULL etc.)', ar: 'قيود البيانات (NOT NULL إلخ)' },
      content: {
        definition: {
          de: 'Constraints (Einschränkungen) sind Regeln, die für Tabellenspalten gelten und die Datenintegrität sicherstellen. Sie verhindern ungültige Daten.',
          ar: 'القيود (Constraints) هي قواعد تنطبق على أعمدة الجداول وتضمن سلامة البيانات. وهي تمنع البيانات غير الصالحة.',
        },
        keyPoints: [
          { de: 'NOT NULL: Spalte darf keinen NULL-Wert enthalten', ar: 'NOT NULL: العمود لا يجوز أن يحتوي على قيمة NULL' },
          { de: 'UNIQUE: Jeder Wert in der Spalte muss eindeutig sein', ar: 'UNIQUE: كل قيمة في العمود يجب أن تكون فريدة' },
          { de: 'PRIMARY KEY: Kombination aus NOT NULL und UNIQUE – identifiziert jeden Datensatz eindeutig', ar: 'PRIMARY KEY: مزيج من NOT NULL و UNIQUE – يحدد كل سجل بشكل فريد' },
          { de: 'FOREIGN KEY: Verweist auf den Primärschlüssel einer anderen Tabelle (referentielle Integrität)', ar: 'FOREIGN KEY: يشير إلى المفتاح الأساسي لجدول آخر (التكامل المرجعي)' },
          { de: 'CHECK: Prüft eine Bedingung, z.B. `CHECK (alter >= 0)`', ar: 'CHECK: يفحص شرطاً، مثل `CHECK (alter >= 0)`' },
          { de: 'DEFAULT: Setzt einen Standardwert, wenn kein Wert angegeben wird', ar: 'DEFAULT: يعيّن قيمة افتراضية عندما لا تُحدد قيمة' },
        ],
        examples: [
          { de: '`CREATE TABLE kunden (id INT PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE, alter INT CHECK (alter >= 0), status VARCHAR(20) DEFAULT \'aktiv\');`', ar: '`CREATE TABLE kunden (id INT PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE, alter INT CHECK (alter >= 0), status VARCHAR(20) DEFAULT \'aktiv\');`' },
          { de: '`CREATE TABLE bestellungen (id INT PRIMARY KEY, kunden_id INT, FOREIGN KEY (kunden_id) REFERENCES kunden(id));` – Fremdschlüssel auf Kunden-Tabelle.', ar: '`CREATE TABLE bestellungen (id INT PRIMARY KEY, kunden_id INT, FOREIGN KEY (kunden_id) REFERENCES kunden(id));` – مفتاح أجنبي على جدول العملاء.' },
        ],
        examRelevance: { de: 'Constraints sind ein wichtiges Thema der IHK-Prüfung. Man muss wissen, welcher Constraint wann eingesetzt wird und was er bewirkt.', ar: 'القيود هي موضوع مهم في امتحان IHK. يجب معرفة أي قيد يُستخدم متى وما يفعله.' },
        summary: { de: 'Constraints sichern Datenintegrität: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT.', ar: 'القيود تضمن سلامة البيانات: NOT NULL، UNIQUE، PRIMARY KEY، FOREIGN KEY، CHECK، DEFAULT.' },
      },
    },
  ],
};
