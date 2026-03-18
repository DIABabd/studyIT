import type { TopicGroup } from '../../../types';

export const dataProcessing: TopicGroup = {
  id: 'group11-data-processing',
  name: {
    de: 'Datenverarbeitung',
    ar: 'معالجة البيانات',
  },
  description: {
    de: 'Aggregation, Durchschnitts- und Differenzberechnung, Zeitberechnungen und Filterung',
    ar: 'التجميع، حساب المتوسطات والفروقات، حسابات الوقت والتصفية',
  },
  priority: 'high',
  topics: [
    {
      id: 'aggregating-values',
      name: { de: 'Werte aggregieren', ar: 'تجميع القيم' },
      content: {
        definition: {
          de: 'Aggregation fasst mehrere Einzelwerte zu einem zusammenfassenden Wert zusammen. Typische Aggregationen sind Summe, Durchschnitt, Minimum, Maximum und Anzahl.',
          ar: 'التجميع يجمع عدة قيم فردية في قيمة تلخيصية. التجميعات النموذجية هي المجموع والمتوسط والحد الأدنى والحد الأقصى والعدد.',
        },
        keyPoints: [
          { de: 'Summe: Alle Werte addieren – Grundlage für Umsatzberechnungen', ar: 'المجموع: جمع جميع القيم – أساس حسابات الإيرادات' },
          { de: 'Durchschnitt: Summe / Anzahl – Wichtig für Leistungsbewertungen', ar: 'المتوسط: المجموع / العدد – مهم لتقييم الأداء' },
          { de: 'Aggregation kann in Code (Schleifen) oder in SQL (Aggregatfunktionen) erfolgen', ar: 'التجميع يمكن أن يتم في الكود (الحلقات) أو في SQL (دوال التجميع)' },
        ],
        examples: [
          { de: 'In Java: `double summe = 0; for (Rechnung r : rechnungen) { summe += r.getBetrag(); }` – Gesamtbetrag aller Rechnungen.', ar: 'في Java: `double summe = 0; for (Rechnung r : rechnungen) { summe += r.getBetrag(); }` – إجمالي مبلغ جميع الفواتير.' },
          { de: 'In SQL: `SELECT abteilung, SUM(umsatz) as gesamt, AVG(umsatz) as schnitt FROM verkaeufe GROUP BY abteilung;`', ar: 'في SQL: `SELECT abteilung, SUM(umsatz) as gesamt, AVG(umsatz) as schnitt FROM verkaeufe GROUP BY abteilung;`' },
        ],
        examRelevance: { de: 'Aggregationsaufgaben kommen in der IHK-Prüfung sowohl als Programmier- als auch als SQL-Aufgabe vor.', ar: 'مهام التجميع تظهر في امتحان IHK كمهام برمجة ومهام SQL.' },
        summary: { de: 'Aggregation fasst Einzelwerte zusammen: Summe, Durchschnitt, Min, Max, Anzahl – in Code oder SQL.', ar: 'التجميع يلخص القيم الفردية: مجموع، متوسط، حد أدنى، حد أقصى، عدد – في الكود أو SQL.' },
      },
    },
    {
      id: 'calculating-averages',
      name: { de: 'Durchschnittsberechnung', ar: 'حساب المتوسطات' },
      content: {
        definition: {
          de: 'Die Durchschnittsberechnung ermittelt den Mittelwert einer Menge von Zahlen durch Division der Summe durch die Anzahl. Wichtig ist die korrekte Typkonvertierung, um Ganzzahldivision zu vermeiden.',
          ar: 'حساب المتوسط يحدد القيمة المتوسطة لمجموعة أرقام بقسمة المجموع على العدد. تحويل النوع الصحيح مهم لتجنب القسمة الصحيحة.',
        },
        keyPoints: [
          { de: 'Ganzzahldivision vermeiden: `(double) summe / anzahl` statt `summe / anzahl`', ar: 'تجنب القسمة الصحيحة: `(double) summe / anzahl` بدلاً من `summe / anzahl`' },
          { de: 'Division durch Null abfangen: Vor der Division prüfen, ob anzahl > 0', ar: 'تجنب القسمة على صفر: فحص أن العدد > 0 قبل القسمة' },
          { de: 'Gewichteter Durchschnitt: Berücksichtigt unterschiedliche Gewichtungen der Werte', ar: 'المتوسط المرجح: يأخذ في الاعتبار أوزان مختلفة للقيم' },
        ],
        examples: [
          { de: '`int[] noten = {2, 1, 3, 2, 4}; int summe = 0; for (int n : noten) summe += n; double schnitt = (double) summe / noten.length;` – Ergebnis: 2.4', ar: '`int[] noten = {2, 1, 3, 2, 4}; int summe = 0; for (int n : noten) summe += n; double schnitt = (double) summe / noten.length;` – النتيجة: 2.4' },
          { de: 'Bedingter Durchschnitt: `int sum = 0, count = 0; for (Mitarbeiter m : team) { if (m.getAbteilung().equals("IT")) { sum += m.getGehalt(); count++; } } double avg = count > 0 ? (double) sum / count : 0;`', ar: 'متوسط مشروط: `int sum = 0, count = 0; for (Mitarbeiter m : team) { if (m.getAbteilung().equals("IT")) { sum += m.getGehalt(); count++; } } double avg = count > 0 ? (double) sum / count : 0;`' },
        ],
        examRelevance: { de: 'Durchschnittsberechnungen mit korrektem Casting sind eine häufige IHK-Aufgabe.', ar: 'حسابات المتوسط مع تحويل النوع الصحيح مهمة IHK شائعة.' },
        summary: { de: 'Durchschnitt = Summe / Anzahl. Cast zu double für genaues Ergebnis. Division durch 0 abfangen.', ar: 'المتوسط = المجموع / العدد. تحويل إلى double لنتيجة دقيقة. تجنب القسمة على 0.' },
      },
    },
    {
      id: 'calculating-differences',
      name: { de: 'Differenzberechnung', ar: 'حساب الفروقات' },
      content: {
        definition: {
          de: 'Differenzberechnungen ermitteln den Unterschied zwischen zwei Werten. Sie werden für Vergleiche, Veränderungsraten und Abweichungsanalysen verwendet.',
          ar: 'حسابات الفروقات تحدد الاختلاف بين قيمتين. تُستخدم للمقارنات ومعدلات التغيير وتحليل الانحرافات.',
        },
        keyPoints: [
          { de: 'Absolute Differenz: `Math.abs(wert1 - wert2)` – Immer positiv', ar: 'الفرق المطلق: `Math.abs(wert1 - wert2)` – دائماً موجب' },
          { de: 'Prozentuale Veränderung: `(neuerWert - alterWert) / alterWert * 100`', ar: 'التغيير المئوي: `(neuerWert - alterWert) / alterWert * 100`' },
          { de: 'Abweichung vom Durchschnitt: `wert - durchschnitt` – Positiv = über Durchschnitt', ar: 'الانحراف عن المتوسط: `wert - durchschnitt` – موجب = فوق المتوسط' },
        ],
        examples: [
          { de: 'Preisänderung: `double alt = 100; double neu = 120; double aenderung = (neu - alt) / alt * 100;` – Ergebnis: 20% Erhöhung.', ar: 'تغيير السعر: `double alt = 100; double neu = 120; double aenderung = (neu - alt) / alt * 100;` – النتيجة: زيادة 20%.' },
          { de: 'Gehaltsunterschied: `double diff = manager.getGehalt() - mitarbeiter.getGehalt();`', ar: 'فرق الراتب: `double diff = manager.getGehalt() - mitarbeiter.getGehalt();`' },
        ],
        examRelevance: { de: 'Differenz- und Prozentberechnungen sind häufige Aufgaben in der IHK-Prüfung, besonders bei Datenanalyse-Szenarien.', ar: 'حسابات الفروقات والنسب المئوية مهام شائعة في امتحان IHK، خاصة في سيناريوهات تحليل البيانات.' },
        summary: { de: 'Differenzen berechnen Unterschiede zwischen Werten. Absolut mit Math.abs(), prozentual mit Bezug auf Ausgangswert.', ar: 'الفروقات تحسب الاختلافات بين القيم. مطلقة مع Math.abs()، مئوية بالنسبة للقيمة الأصلية.' },
      },
    },
    {
      id: 'time-calculations',
      name: { de: 'Zeitberechnungen', ar: 'حسابات الوقت' },
      content: {
        definition: {
          de: 'Zeitberechnungen ermitteln Zeitdifferenzen, Arbeitszeiten oder Fristen. In Prüfungsaufgaben wird oft mit Minuten, Stunden oder Datumsangaben gerechnet.',
          ar: 'حسابات الوقت تحدد فروقات الوقت وأوقات العمل أو المواعيد النهائية. في مهام الامتحان غالباً ما يُحسب بالدقائق أو الساعات أو التواريخ.',
        },
        keyPoints: [
          { de: 'Zeitdifferenz in Minuten: `endMinuten - startMinuten` (bei gleichem Tag)', ar: 'فرق الوقت بالدقائق: `endMinuten - startMinuten` (في نفس اليوم)' },
          { de: 'Umrechnung: `stunden = minuten / 60; restMinuten = minuten % 60;`', ar: 'التحويل: `stunden = minuten / 60; restMinuten = minuten % 60;`' },
          { de: 'Uhrzeit als Minuten: 14:30 Uhr = 14 * 60 + 30 = 870 Minuten seit Mitternacht', ar: 'الوقت بالدقائق: 14:30 = 14 * 60 + 30 = 870 دقيقة منذ منتصف الليل' },
        ],
        examples: [
          { de: 'Arbeitszeit: `int startMin = 8*60+30; // 8:30` `int endMin = 17*60+0; // 17:00` `int arbeitMin = endMin - startMin - 30; // minus 30 Min Pause` Ergebnis: 480 Min = 8 Stunden.', ar: 'وقت العمل: `int startMin = 8*60+30; // 8:30` `int endMin = 17*60+0; // 17:00` `int arbeitMin = endMin - startMin - 30; // ناقص 30 دقيقة استراحة` النتيجة: 480 دقيقة = 8 ساعات.' },
        ],
        examRelevance: { de: 'Zeitberechnungen kommen in Prüfungsszenarien vor, z.B. bei Arbeitszeiterfassung oder Lieferfristberechnung.', ar: 'حسابات الوقت تظهر في سيناريوهات الامتحان، مثل تسجيل أوقات العمل أو حساب مواعيد التسليم.' },
        summary: { de: 'Zeitberechnungen: Zeiten in Minuten umrechnen, Differenz bilden, mit / und % in Stunden und Minuten konvertieren.', ar: 'حسابات الوقت: تحويل الأوقات إلى دقائق، حساب الفرق، التحويل بـ / و % إلى ساعات ودقائق.' },
      },
    },
    {
      id: 'filtering-datasets',
      name: { de: 'Datensätze filtern', ar: 'تصفية مجموعات البيانات' },
      content: {
        definition: {
          de: 'Das Filtern von Datensätzen wählt aus einer größeren Datenmenge nur die Einträge aus, die bestimmte Kriterien erfüllen. Dies kann in Code (Schleifen mit Bedingungen) oder in SQL (WHERE) erfolgen.',
          ar: 'تصفية مجموعات البيانات تختار من مجموعة بيانات أكبر فقط الإدخالات التي تستوفي معايير معينة. يمكن أن يتم في الكود (حلقات مع شروط) أو في SQL (WHERE).',
        },
        keyPoints: [
          { de: 'Einfacher Filter: Eine Bedingung (z.B. Preis > 100)', ar: 'تصفية بسيطة: شرط واحد (مثل السعر > 100)' },
          { de: 'Kombinierter Filter: Mehrere Bedingungen mit AND/OR (z.B. Preis > 100 AND Kategorie = "A")', ar: 'تصفية مركبة: عدة شروط مع AND/OR (مثل السعر > 100 AND الفئة = "A")' },
          { de: 'Ergebnis in neue Sammlung schreiben oder direkt ausgeben', ar: 'كتابة النتيجة في مجموعة جديدة أو الإخراج مباشرة' },
        ],
        examples: [
          { de: '`ArrayList<Mitarbeiter> ergebnis = new ArrayList<>(); for (Mitarbeiter m : alle) { if (m.getGehalt() > 3000 && m.getAbteilung().equals("IT")) { ergebnis.add(m); } }` – IT-Mitarbeiter mit Gehalt über 3000.', ar: '`ArrayList<Mitarbeiter> ergebnis = new ArrayList<>(); for (Mitarbeiter m : alle) { if (m.getGehalt() > 3000 && m.getAbteilung().equals("IT")) { ergebnis.add(m); } }` – موظفو IT براتب أعلى من 3000.' },
        ],
        examRelevance: { de: 'Filteraufgaben sind allgegenwärtig in der IHK-Prüfung – als Programmieraufgabe oder SQL-Abfrage.', ar: 'مهام التصفية موجودة في كل مكان في امتحان IHK – كمهمة برمجة أو استعلام SQL.' },
        summary: { de: 'Filtern wählt Datensätze nach Kriterien aus. In Code mit if-Bedingungen, in SQL mit WHERE.', ar: 'التصفية تختار البيانات حسب المعايير. في الكود بشروط if، في SQL بـ WHERE.' },
      },
    },
  ],
};
