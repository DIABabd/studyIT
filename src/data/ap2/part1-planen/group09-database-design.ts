import type { TopicGroup } from '../../../types';

export const databaseDesign: TopicGroup = {
  id: 'group09',
  name: {
    de: 'Datenbankentwurf',
    ar: 'تصميم قواعد البيانات',
  },
  description: {
    de: 'Grundlagen des Datenbankentwurfs: ER-Modell, Schlüssel, Normalisierung und relationale Strukturen',
    ar: 'أساسيات تصميم قواعد البيانات: نموذج ER، المفاتيح، التطبيع والهياكل العلائقية',
  },
  topics: [
    {
      id: 'er-model',
      name: {
        de: 'Entity-Relationship-Modell (ER-Modell)',
        ar: 'نموذج الكيان-العلاقة (ER)',
      },
      content: {
        definition: {
          de: 'Das Entity-Relationship-Modell (ER-Modell) ist eine grafische Methode zur Datenmodellierung. Es beschreibt die Struktur einer Datenbank durch Entitäten (Objekte), deren Attribute (Eigenschaften) und die Beziehungen (Relationen) zwischen ihnen.',
          ar: 'نموذج الكيان-العلاقة (ER) هو أسلوب رسومي لنمذجة البيانات. يصف بنية قاعدة البيانات من خلال الكيانات (الكائنات) وخصائصها (السمات) والعلاقات بينها.',
        },
        keyPoints: [
          {
            de: 'Entitäten werden als Rechtecke dargestellt, Attribute als Ellipsen, Beziehungen als Rauten',
            ar: 'تُمثل الكيانات كمستطيلات والسمات كأشكال بيضاوية والعلاقات كمعينات',
          },
          {
            de: 'Das ER-Modell ist die konzeptionelle Ebene des Datenbankentwurfs (vor der Implementierung)',
            ar: 'نموذج ER هو المستوى المفاهيمي لتصميم قاعدة البيانات (قبل التنفيذ)',
          },
          {
            de: 'Vom ER-Modell wird das relationale Modell (Tabellen) abgeleitet',
            ar: 'من نموذج ER يُشتق النموذج العلائقي (الجداول)',
          },
        ],
        examples: [
          {
            de: 'ER-Modell für eine Bibliothek: Entitäten: Buch (ISBN, Titel, Autor), Mitglied (MitgliedNr, Name). Beziehung: Mitglied „leiht aus" Buch mit Kardinalität n:m und Attribut „Ausleihdatum".',
            ar: 'نموذج ER لمكتبة: كيانات: كتاب (ISBN، العنوان، المؤلف)، عضو (رقم العضو، الاسم). العلاقة: عضو "يستعير" كتاب بكاردينالية n:m وسمة "تاريخ الاستعارة".',
          },
        ],
        examRelevance: {
          de: 'ER-Modelle werden häufig in der Prüfung als Zeichen- oder Leseaufgabe gestellt. Können Sie ein ER-Modell aus einer Textbeschreibung ableiten.',
          ar: 'نماذج ER تُطرح كثيراً في الامتحان كمهمة رسم أو قراءة. كن قادراً على اشتقاق نموذج ER من وصف نصي.',
        },
        summary: {
          de: 'Das ER-Modell beschreibt die Datenbankstruktur grafisch durch Entitäten, Attribute und Beziehungen als Basis für den Datenbankentwurf.',
          ar: 'نموذج ER يصف بنية قاعدة البيانات رسومياً من خلال كيانات وسمات وعلاقات كأساس لتصميم قاعدة البيانات.',
        },
      },
    },
    {
      id: 'entities',
      name: {
        de: 'Entitäten',
        ar: 'الكيانات (Entities)',
      },
      content: {
        definition: {
          de: 'Eine Entität ist ein eindeutig identifizierbares Objekt der realen Welt, das in einer Datenbank gespeichert werden soll. Ein Entitätstyp beschreibt eine Kategorie gleichartiger Entitäten (z.B. „Kunde"), eine Entitätsinstanz ist ein konkretes Objekt (z.B. „Max Müller").',
          ar: 'الكيان هو كائن يمكن تعريفه بشكل فريد من العالم الحقيقي يُراد تخزينه في قاعدة البيانات. نوع الكيان يصف فئة من كيانات متشابهة (مثل "عميل") ومثيل الكيان هو كائن ملموس (مثل "ماكس مولر").',
        },
        keyPoints: [
          {
            de: 'Jede Entität muss eindeutig identifizierbar sein (durch Primärschlüssel)',
            ar: 'كل كيان يجب أن يكون قابلاً للتعريف بشكل فريد (عبر المفتاح الأساسي)',
          },
          {
            de: 'Starke Entität: Hat eigenen Primärschlüssel',
            ar: 'كيان قوي: لديه مفتاح أساسي خاص',
          },
          {
            de: 'Schwache Entität: Braucht die Beziehung zu einer starken Entität für die Identifikation',
            ar: 'كيان ضعيف: يحتاج العلاقة مع كيان قوي للتعريف',
          },
        ],
        examples: [
          {
            de: 'Entitätstyp „Mitarbeiter" mit Instanzen: {1001, Max Müller, IT}, {1002, Anna Schmidt, HR}. Jeder Mitarbeiter ist eine eigene Entitätsinstanz, identifiziert durch die Personalnummer.',
            ar: 'نوع كيان "موظف" بمثيلات: {1001, ماكس مولر, IT}، {1002, أنا شميت, HR}. كل موظف هو مثيل كيان خاص، يُعرَّف برقم الموظف.',
          },
        ],
        examRelevance: {
          de: 'Verstehen Sie den Unterschied zwischen Entitätstyp und -instanz sowie zwischen starker und schwacher Entität.',
          ar: 'افهم الفرق بين نوع الكيان والمثيل وبين الكيان القوي والضعيف.',
        },
        summary: {
          de: 'Entitäten sind eindeutig identifizierbare Objekte der realen Welt, die als Entitätstypen in der Datenbank modelliert werden.',
          ar: 'الكيانات هي كائنات قابلة للتعريف بشكل فريد من العالم الحقيقي تُنمذج كأنواع كيانات في قاعدة البيانات.',
        },
      },
    },
    {
      id: 'attributes',
      name: {
        de: 'Attribute (Datenbank)',
        ar: 'السمات (قاعدة البيانات)',
      },
      content: {
        definition: {
          de: 'Attribute beschreiben die Eigenschaften einer Entität. Jedes Attribut hat einen Namen und einen Datentyp. Im ER-Modell werden sie als Ellipsen dargestellt, im relationalen Modell als Spalten einer Tabelle.',
          ar: 'السمات تصف خصائص الكيان. لكل سمة اسم ونوع بيانات. في نموذج ER تُمثل كأشكال بيضاوية وفي النموذج العلائقي كأعمدة في جدول.',
        },
        keyPoints: [
          {
            de: 'Schlüsselattribut: Dient zur eindeutigen Identifikation (wird unterstrichen)',
            ar: 'سمة المفتاح: تُستخدم للتعريف الفريد (تُوضع تحتها خط)',
          },
          {
            de: 'Zusammengesetztes Attribut: Besteht aus Teilattributen (z.B. Adresse → Straße, PLZ, Ort)',
            ar: 'سمة مركبة: تتكون من سمات فرعية (مثل العنوان ← الشارع، الرمز البريدي، المدينة)',
          },
          {
            de: 'Abgeleitetes Attribut: Wird aus anderen Attributen berechnet (z.B. Alter aus Geburtsdatum)',
            ar: 'سمة مشتقة: تُحسب من سمات أخرى (مثل العمر من تاريخ الميلاد)',
          },
        ],
        examples: [
          {
            de: 'Entität „Produkt": Attribute: produktNr (Schlüssel, int), bezeichnung (varchar), preis (decimal), gewicht (float). Im ER-Modell wird produktNr unterstrichen dargestellt.',
            ar: 'كيان "منتج": سمات: رقم المنتج (مفتاح، int)، الوصف (varchar)، السعر (decimal)، الوزن (float). في نموذج ER يُعرض رقم المنتج مع خط تحته.',
          },
        ],
        examRelevance: {
          de: 'Kennen Sie die verschiedenen Attributtypen und deren Darstellung im ER-Modell. Schlüsselattribute werden unterstrichen.',
          ar: 'اعرف أنواع السمات المختلفة وتمثيلها في نموذج ER. سمات المفتاح تُوضع تحتها خط.',
        },
        summary: {
          de: 'Attribute beschreiben Entitätseigenschaften und können einfach, zusammengesetzt, abgeleitet oder als Schlüssel fungieren.',
          ar: 'السمات تصف خصائص الكيانات ويمكن أن تكون بسيطة أو مركبة أو مشتقة أو مفتاحية.',
        },
      },
    },
    {
      id: 'relationships',
      name: {
        de: 'Beziehungen (Relationships)',
        ar: 'العلاقات (Relationships)',
      },
      content: {
        definition: {
          de: 'Beziehungen (Relationen) beschreiben die Verknüpfungen zwischen Entitäten im ER-Modell. Sie definieren, wie Entitäten zueinander in Beziehung stehen. Im relationalen Modell werden Beziehungen durch Fremdschlüssel oder Zwischentabellen umgesetzt.',
          ar: 'العلاقات تصف الروابط بين الكيانات في نموذج ER. تحدد كيف ترتبط الكيانات ببعضها. في النموذج العلائقي تُنفذ العلاقات عبر مفاتيح خارجية أو جداول وسيطة.',
        },
        keyPoints: [
          {
            de: '1:1-Beziehung: Ein Objekt ist genau einem anderen zugeordnet (z.B. Person – Personalausweis)',
            ar: 'علاقة 1:1: كائن واحد مرتبط بكائن آخر واحد بالضبط (مثل شخص – بطاقة هوية)',
          },
          {
            de: '1:n-Beziehung: Ein Objekt ist mehreren anderen zugeordnet (z.B. Abteilung – Mitarbeiter)',
            ar: 'علاقة 1:n: كائن واحد مرتبط بعدة كائنات أخرى (مثل قسم – موظفون)',
          },
          {
            de: 'n:m-Beziehung: Mehrere Objekte sind mehreren anderen zugeordnet (z.B. Student – Kurs)',
            ar: 'علاقة n:m: عدة كائنات مرتبطة بعدة كائنات أخرى (مثل طالب – مادة)',
          },
        ],
        examples: [
          {
            de: 'n:m-Beziehung: Student nimmt an Kurs teil. Umsetzung: Zwischentabelle „Teilnahme" mit student_id (FK) und kurs_id (FK) als zusammengesetztem Primärschlüssel, ggf. mit Attribut „Note".',
            ar: 'علاقة n:m: طالب يشارك في مادة. التنفيذ: جدول وسيط "المشاركة" مع student_id (FK) و kurs_id (FK) كمفتاح أساسي مركب، وربما بسمة "الدرجة".',
          },
        ],
        examRelevance: {
          de: 'Die Umsetzung von Beziehungen in Tabellen ist eine häufige Prüfungsaufgabe. Wichtig: n:m-Beziehungen brauchen eine Zwischentabelle.',
          ar: 'تنفيذ العلاقات في جداول مهمة امتحان شائعة. مهم: علاقات n:m تحتاج جدول وسيط.',
        },
        summary: {
          de: 'Beziehungen verknüpfen Entitäten als 1:1, 1:n oder n:m und werden im relationalen Modell durch Fremdschlüssel oder Zwischentabellen realisiert.',
          ar: 'العلاقات تربط الكيانات كـ 1:1 أو 1:n أو n:m وتُنفذ في النموذج العلائقي عبر مفاتيح خارجية أو جداول وسيطة.',
        },
      },
    },
    {
      id: 'cardinalities',
      name: {
        de: 'Kardinalitäten',
        ar: 'الكاردينالية',
      },
      content: {
        definition: {
          de: 'Kardinalitäten definieren die Anzahl der Entitäten, die an einer Beziehung teilnehmen können. Sie geben die minimale und maximale Anzahl der Beziehungspartner an. Gängige Notationen sind Chen-Notation (1, n, m) und Min-Max-Notation (0..1, 1..*, etc.).',
          ar: 'الكاردينالية تحدد عدد الكيانات التي يمكن أن تشارك في علاقة. تشير إلى الحد الأدنى والأقصى لعدد شركاء العلاقة. الترميزات الشائعة هي ترميز Chen (1, n, m) وترميز Min-Max (0..1, 1..*, إلخ).',
        },
        keyPoints: [
          {
            de: 'Chen-Notation: 1:1, 1:n, n:m',
            ar: 'ترميز Chen: 1:1، 1:n، n:m',
          },
          {
            de: 'Min-Max-Notation: (min, max) an jedem Ende der Beziehung',
            ar: 'ترميز Min-Max: (الحد الأدنى، الحد الأقصى) عند كل طرف من العلاقة',
          },
          {
            de: 'Optionale Teilnahme (0..) vs. verpflichtende Teilnahme (1..)',
            ar: 'المشاركة الاختيارية (0..) مقابل المشاركة الإلزامية (1..)',
          },
        ],
        examples: [
          {
            de: 'Beziehung Kunde-Bestellung: Ein Kunde hat 0 bis viele Bestellungen (0..*). Jede Bestellung gehört zu genau einem Kunden (1..1). In Chen-Notation: 1:n.',
            ar: 'علاقة عميل-طلب: عميل لديه 0 إلى عدة طلبات (0..*). كل طلب ينتمي لعميل واحد بالضبط (1..1). في ترميز Chen: 1:n.',
          },
        ],
        examRelevance: {
          de: 'Kardinalitäten korrekt aus einer Textbeschreibung ableiten ist eine Standardaufgabe. Üben Sie beide Notationen.',
          ar: 'اشتقاق الكاردينالية بشكل صحيح من وصف نصي مهمة قياسية. تدرب على كلا الترميزين.',
        },
        summary: {
          de: 'Kardinalitäten definieren, wie viele Entitäten an einer Beziehung teilnehmen können (1:1, 1:n, n:m).',
          ar: 'الكاردينالية تحدد عدد الكيانات المشاركة في علاقة (1:1، 1:n، n:m).',
        },
      },
    },
    {
      id: 'primary-keys',
      name: {
        de: 'Primärschlüssel',
        ar: 'المفتاح الأساسي (Primary Key)',
      },
      content: {
        definition: {
          de: 'Ein Primärschlüssel ist ein Attribut oder eine Kombination von Attributen, das/die jeden Datensatz in einer Tabelle eindeutig identifiziert. Der Primärschlüssel darf nicht NULL sein und muss in der Tabelle einzigartig sein.',
          ar: 'المفتاح الأساسي هو سمة أو مجموعة سمات تُعرّف كل سجل في جدول بشكل فريد. لا يمكن أن يكون NULL ويجب أن يكون فريداً في الجدول.',
        },
        keyPoints: [
          {
            de: 'Eindeutigkeit: Kein Wert darf doppelt vorkommen',
            ar: 'التفرد: لا يمكن أن تتكرر أي قيمة',
          },
          {
            de: 'NOT NULL: Der Primärschlüssel darf niemals leer sein',
            ar: 'NOT NULL: المفتاح الأساسي لا يمكن أن يكون فارغاً أبداً',
          },
          {
            de: 'Natürlicher Schlüssel (z.B. ISBN) vs. künstlicher Schlüssel (z.B. Auto-Increment ID)',
            ar: 'مفتاح طبيعي (مثل ISBN) مقابل مفتاح اصطناعي (مثل ID تلقائي)',
          },
          {
            de: 'Zusammengesetzter Schlüssel: Kombination mehrerer Attribute als Primärschlüssel',
            ar: 'مفتاح مركب: دمج عدة سمات كمفتاح أساسي',
          },
        ],
        examples: [
          {
            de: 'CREATE TABLE Kunde (kunden_id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE); – kunden_id ist ein künstlicher Primärschlüssel mit Auto-Increment.',
            ar: 'CREATE TABLE Kunde (kunden_id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE); – kunden_id مفتاح أساسي اصطناعي بزيادة تلقائية.',
          },
        ],
        examRelevance: {
          de: 'Primärschlüssel sind fundamentales Prüfungswissen. Kennen Sie die Eigenschaften und den Unterschied zwischen natürlichem und künstlichem Schlüssel.',
          ar: 'المفاتيح الأساسية معرفة أساسية للامتحان. اعرف الخصائص والفرق بين المفتاح الطبيعي والاصطناعي.',
        },
        summary: {
          de: 'Ein Primärschlüssel identifiziert Datensätze eindeutig, ist nie NULL und kann natürlich oder künstlich sein.',
          ar: 'المفتاح الأساسي يُعرّف السجلات بشكل فريد ولا يكون NULL أبداً ويمكن أن يكون طبيعياً أو اصطناعياً.',
        },
      },
    },
    {
      id: 'foreign-keys',
      name: {
        de: 'Fremdschlüssel',
        ar: 'المفتاح الخارجي (Foreign Key)',
      },
      content: {
        definition: {
          de: 'Ein Fremdschlüssel ist ein Attribut in einer Tabelle, das auf den Primärschlüssel einer anderen Tabelle verweist. Er stellt die referenzielle Integrität sicher und bildet Beziehungen zwischen Tabellen ab.',
          ar: 'المفتاح الخارجي هو سمة في جدول تشير إلى المفتاح الأساسي في جدول آخر. يضمن السلامة المرجعية ويمثل العلاقات بين الجداول.',
        },
        keyPoints: [
          {
            de: 'Referenzielle Integrität: Fremdschlüsselwerte müssen als Primärschlüssel in der referenzierten Tabelle existieren',
            ar: 'السلامة المرجعية: قيم المفتاح الخارجي يجب أن توجد كمفتاح أساسي في الجدول المرجعي',
          },
          {
            de: 'ON DELETE CASCADE: Löscht automatisch abhängige Datensätze',
            ar: 'ON DELETE CASCADE: يحذف تلقائياً السجلات التابعة',
          },
          {
            de: 'ON DELETE SET NULL: Setzt Fremdschlüssel auf NULL bei Löschung des referenzierten Datensatzes',
            ar: 'ON DELETE SET NULL: يضع المفتاح الخارجي على NULL عند حذف السجل المرجعي',
          },
        ],
        examples: [
          {
            de: 'CREATE TABLE Bestellung (bestell_id INT PRIMARY KEY, kunden_id INT, FOREIGN KEY (kunden_id) REFERENCES Kunde(kunden_id) ON DELETE CASCADE); – kunden_id verweist auf die Kundentabelle.',
            ar: 'CREATE TABLE Bestellung (bestell_id INT PRIMARY KEY, kunden_id INT, FOREIGN KEY (kunden_id) REFERENCES Kunde(kunden_id) ON DELETE CASCADE); – kunden_id يشير إلى جدول العملاء.',
          },
        ],
        examRelevance: {
          de: 'Fremdschlüssel und referenzielle Integrität sind Kernthemen. Kennen Sie die SQL-Syntax und die verschiedenen ON DELETE-Optionen.',
          ar: 'المفاتيح الخارجية والسلامة المرجعية مواضيع محورية. اعرف صياغة SQL وخيارات ON DELETE المختلفة.',
        },
        summary: {
          de: 'Fremdschlüssel verknüpfen Tabellen und sichern die referenzielle Integrität durch Verweis auf Primärschlüssel anderer Tabellen.',
          ar: 'المفاتيح الخارجية تربط الجداول وتضمن السلامة المرجعية من خلال الإشارة لمفاتيح أساسية في جداول أخرى.',
        },
      },
    },
    {
      id: 'normalization',
      name: {
        de: 'Normalisierung',
        ar: 'التطبيع (Normalization)',
      },
      content: {
        definition: {
          de: 'Normalisierung ist ein schrittweiser Prozess zur Strukturierung relationaler Datenbanken, um Redundanzen zu minimieren und Anomalien (Einfüge-, Änderungs- und Löschanomalien) zu vermeiden. Die Normalformen bauen aufeinander auf: 1NF → 2NF → 3NF.',
          ar: 'التطبيع هو عملية تدريجية لهيكلة قواعد البيانات العلائقية لتقليل التكرار وتجنب الشذوذ (شذوذ الإدراج والتعديل والحذف). الأشكال الطبيعية تُبنى على بعضها: 1NF ← 2NF ← 3NF.',
        },
        keyPoints: [
          {
            de: '1NF: Alle Attribute sind atomar (keine mehrwertigen oder zusammengesetzten Attribute)',
            ar: '1NF: جميع السمات ذرية (لا سمات متعددة القيم أو مركبة)',
          },
          {
            de: '2NF: 1NF + jedes Nicht-Schlüsselattribut ist voll funktional vom gesamten Primärschlüssel abhängig',
            ar: '2NF: 1NF + كل سمة غير مفتاحية تعتمد وظيفياً بالكامل على المفتاح الأساسي الكامل',
          },
          {
            de: '3NF: 2NF + kein Nicht-Schlüsselattribut ist transitiv von einem Schlüsselattribut abhängig',
            ar: '3NF: 2NF + لا توجد سمة غير مفتاحية تعتمد بشكل انتقالي على سمة مفتاحية',
          },
        ],
        examples: [
          {
            de: 'Unnormalisiert: Bestellung(BestellNr, KundenNr, KundenName, ProduktNr, ProduktName, Menge). Problem: KundenName hängt nur von KundenNr ab (partielle Abhängigkeit). Lösung: Aufteilen in Bestellung, Kunde und Bestellposition.',
            ar: 'غير مُطبَّع: Bestellung(رقم_الطلب، رقم_العميل، اسم_العميل، رقم_المنتج، اسم_المنتج، الكمية). المشكلة: اسم_العميل يعتمد فقط على رقم_العميل (تبعية جزئية). الحل: التقسيم إلى طلب وعميل وبند الطلب.',
          },
        ],
        examRelevance: {
          de: 'Normalisierung ist ein Prüfungsklassiker. Sie müssen erkennen, in welcher Normalform eine Tabelle ist, und sie in die 3NF überführen können.',
          ar: 'التطبيع كلاسيكي في الامتحان. يجب أن تتعرف على الشكل الطبيعي لجدول وتتمكن من تحويله إلى 3NF.',
        },
        summary: {
          de: 'Normalisierung beseitigt Redundanzen schrittweise durch Aufteilen von Tabellen in die Normalformen 1NF, 2NF und 3NF.',
          ar: 'التطبيع يزيل التكرار تدريجياً من خلال تقسيم الجداول إلى الأشكال الطبيعية 1NF و 2NF و 3NF.',
        },
      },
    },
    {
      id: 'third-normal-form',
      name: {
        de: 'Dritte Normalform (3NF)',
        ar: 'الشكل الطبيعي الثالث (3NF)',
      },
      content: {
        definition: {
          de: 'Eine Tabelle ist in der dritten Normalform (3NF), wenn sie in 2NF ist und kein Nicht-Schlüsselattribut transitiv (über ein anderes Nicht-Schlüsselattribut) vom Primärschlüssel abhängt. Anders gesagt: Jedes Nicht-Schlüsselattribut hängt direkt und ausschließlich vom Primärschlüssel ab.',
          ar: 'الجدول في الشكل الطبيعي الثالث (3NF) إذا كان في 2NF ولا توجد سمة غير مفتاحية تعتمد بشكل انتقالي (عبر سمة غير مفتاحية أخرى) على المفتاح الأساسي. بمعنى آخر: كل سمة غير مفتاحية تعتمد مباشرة وحصرياً على المفتاح الأساسي.',
        },
        keyPoints: [
          {
            de: 'Transitive Abhängigkeit: A → B → C (C hängt über B von A ab, nicht direkt)',
            ar: 'تبعية انتقالية: A ← B ← C (C يعتمد على A عبر B وليس مباشرة)',
          },
          {
            de: 'Lösung: Transitive Abhängigkeiten werden in separate Tabellen ausgelagert',
            ar: 'الحل: التبعيات الانتقالية تُنقل إلى جداول منفصلة',
          },
          {
            de: '3NF ist in der Praxis der angestrebte Standard für die meisten Datenbanken',
            ar: '3NF هو المعيار المستهدف عملياً لمعظم قواعد البيانات',
          },
        ],
        examples: [
          {
            de: 'Vor 3NF: Mitarbeiter(MitarbeiterNr, Name, AbteilungsNr, AbteilungsName). Transitive Abhängigkeit: MitarbeiterNr → AbteilungsNr → AbteilungsName. Nach 3NF: Mitarbeiter(MitarbeiterNr, Name, AbteilungsNr) und Abteilung(AbteilungsNr, AbteilungsName).',
            ar: 'قبل 3NF: موظف(رقم_الموظف، الاسم، رقم_القسم، اسم_القسم). تبعية انتقالية: رقم_الموظف ← رقم_القسم ← اسم_القسم. بعد 3NF: موظف(رقم_الموظف، الاسم، رقم_القسم) وقسم(رقم_القسم، اسم_القسم).',
          },
        ],
        examRelevance: {
          de: 'Die 3NF ist die in der Prüfung am häufigsten gefragte Normalform. Erkennen Sie transitive Abhängigkeiten und lösen Sie sie durch Tabellenaufteilung.',
          ar: '3NF هو الشكل الطبيعي الأكثر سؤالاً في الامتحان. تعرّف على التبعيات الانتقالية وحلها بتقسيم الجداول.',
        },
        summary: {
          de: 'Die 3NF eliminiert transitive Abhängigkeiten, sodass jedes Nicht-Schlüsselattribut direkt vom Primärschlüssel abhängt.',
          ar: '3NF يزيل التبعيات الانتقالية بحيث تعتمد كل سمة غير مفتاحية مباشرة على المفتاح الأساسي.',
        },
      },
    },
  ],
};
