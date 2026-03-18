import type { TopicGroup } from '../../../types';

export const mathematicalLogic: TopicGroup = {
  id: 'group15-mathematical-logic',
  name: {
    de: 'Mathematische Logik und Berechnungen',
    ar: 'المنطق الرياضي والحسابات',
  },
  description: {
    de: 'Zähler, Statistiken, Prozentberechnungen, Differenz- und Zeitberechnungen',
    ar: 'العدادات والإحصائيات وحسابات النسب المئوية والفروقات والوقت',
  },
  priority: 'medium',
  topics: [
    {
      id: 'counters-statistics',
      name: { de: 'Zähler und Statistiken', ar: 'العدادات والإحصائيات' },
      content: {
        definition: {
          de: 'Zähler und Statistiken sind algorithmische Muster, die Daten auswerten: Häufigkeiten zählen, Verteilungen ermitteln und statistische Kennzahlen berechnen.',
          ar: 'العدادات والإحصائيات هي أنماط خوارزمية تقيّم البيانات: عد التكرارات وتحديد التوزيعات وحساب المؤشرات الإحصائية.',
        },
        keyPoints: [
          { de: 'Häufigkeitszählung: Wie oft kommt jeder Wert vor? Array als Zähler verwenden', ar: 'عد التكرارات: كم مرة تظهر كل قيمة؟ استخدام مصفوفة كعداد' },
          { de: 'Spannweite: Maximum - Minimum = Bereich der Werte', ar: 'المدى: القيمة القصوى - القيمة الدنيا = نطاق القيم' },
          { de: 'Bedingte Zählung: Anzahl der Elemente, die eine bestimmte Bedingung erfüllen', ar: 'العد المشروط: عدد العناصر التي تستوفي شرطاً معيناً' },
          { de: 'Mehrere Zähler parallel: Verschiedene Kategorien gleichzeitig zählen', ar: 'عدادات متعددة بالتوازي: عد فئات مختلفة في نفس الوقت' },
        ],
        examples: [
          { de: 'Notenverteilung: `int[] haeufigkeit = new int[6]; for (int note : noten) { haeufigkeit[note - 1]++; }` – haeufigkeit[0] = Anzahl Einsen, haeufigkeit[1] = Anzahl Zweien, etc.', ar: 'توزيع الدرجات: `int[] haeufigkeit = new int[6]; for (int note : noten) { haeufigkeit[note - 1]++; }` – haeufigkeit[0] = عدد الواحدات، haeufigkeit[1] = عدد الاثنينات، إلخ.' },
          { de: 'Mehrere Zähler: `int gut = 0, mittel = 0, schlecht = 0; for (int n : noten) { if (n <= 2) gut++; else if (n <= 4) mittel++; else schlecht++; }`', ar: 'عدادات متعددة: `int gut = 0, mittel = 0, schlecht = 0; for (int n : noten) { if (n <= 2) gut++; else if (n <= 4) mittel++; else schlecht++; }`' },
        ],
        examRelevance: { de: 'Zähler und statistische Auswertungen sind Kernaufgaben der IHK-AP2-Prüfung. Häufig in Kombination mit Objekt-Arrays.', ar: 'العدادات والتحليلات الإحصائية هي مهام أساسية في امتحان IHK-AP2. غالباً بالاقتران مع مصفوفات الكائنات.' },
        summary: { de: 'Zähler erfassen Häufigkeiten und Verteilungen. Mehrere Zähler für verschiedene Kategorien parallel verwenden.', ar: 'العدادات تسجل التكرارات والتوزيعات. استخدام عدادات متعددة لفئات مختلفة بالتوازي.' },
      },
    },
    {
      id: 'percentage-calculations',
      name: { de: 'Prozentberechnungen', ar: 'حسابات النسب المئوية' },
      content: {
        definition: {
          de: 'Prozentberechnungen drücken Anteile als Hundertstel aus. Der Prozentwert ergibt sich aus: (Anteil / Gesamtwert) × 100. In der Programmierung muss auf korrekte Typkonvertierung geachtet werden.',
          ar: 'حسابات النسب المئوية تعبر عن الحصص كأجزاء من المئة. القيمة المئوية تنتج من: (الحصة / القيمة الإجمالية) × 100. في البرمجة يجب الانتباه لتحويل النوع الصحيح.',
        },
        keyPoints: [
          { de: 'Prozentwert: `double prozent = (double) teil / gesamt * 100;` – Cast zu double vor der Division!', ar: 'القيمة المئوية: `double prozent = (double) teil / gesamt * 100;` – تحويل إلى double قبل القسمة!' },
          { de: 'Prozentualer Anteil: `double anteil = gesamt * prozent / 100;` – z.B. 19% MwSt von 100€ = 19€', ar: 'الحصة المئوية: `double anteil = gesamt * prozent / 100;` – مثل 19% ضريبة من 100€ = 19€' },
          { de: 'Prozentuale Veränderung: `(neuerWert - alterWert) / alterWert * 100`', ar: 'التغيير المئوي: `(neuerWert - alterWert) / alterWert * 100`' },
          { de: 'Runden: `Math.round(prozent * 100.0) / 100.0` – Rundet auf 2 Nachkommastellen', ar: 'التقريب: `Math.round(prozent * 100.0) / 100.0` – يقرب إلى منزلتين عشريتين' },
        ],
        examples: [
          { de: 'Bestehensquote: `int bestanden = 18; int gesamt = 25; double quote = (double) bestanden / gesamt * 100;` – Ergebnis: 72.0%', ar: 'نسبة النجاح: `int bestanden = 18; int gesamt = 25; double quote = (double) bestanden / gesamt * 100;` – النتيجة: 72.0%' },
          { de: 'Rabatt berechnen: `double preis = 120.0; double rabatt = 15; double neuerPreis = preis - (preis * rabatt / 100);` – 15% Rabatt: 120€ → 102€', ar: 'حساب الخصم: `double preis = 120.0; double rabatt = 15; double neuerPreis = preis - (preis * rabatt / 100);` – خصم 15%: 120€ → 102€' },
        ],
        examRelevance: { de: 'Prozentberechnungen sind ein Standardthema in der IHK-Prüfung, z.B. Bestehensquoten, Rabatte, Anteile berechnen.', ar: 'حسابات النسب المئوية هي موضوع قياسي في امتحان IHK، مثل نسب النجاح والخصومات وحساب الحصص.' },
        summary: { de: 'Prozent = (Teil / Gesamt) × 100. Cast zu double vor Division. Typische Anwendungen: Quoten, Rabatte, Veränderungen.', ar: 'النسبة المئوية = (الجزء / الكل) × 100. تحويل إلى double قبل القسمة. تطبيقات نموذجية: النسب والخصومات والتغييرات.' },
      },
    },
    {
      id: 'difference-calculations',
      name: { de: 'Differenzberechnungen', ar: 'حسابات الفروقات' },
      content: {
        definition: {
          de: 'Differenzberechnungen bestimmen den Unterschied zwischen zwei Werten. Sie werden eingesetzt für Vergleiche, Abweichungsanalysen und Veränderungsmessungen.',
          ar: 'حسابات الفروقات تحدد الاختلاف بين قيمتين. تُستخدم للمقارنات وتحليل الانحرافات وقياسات التغيير.',
        },
        keyPoints: [
          { de: 'Einfache Differenz: `ergebnis = wert1 - wert2;`', ar: 'فرق بسيط: `ergebnis = wert1 - wert2;`' },
          { de: 'Absolute Differenz: `Math.abs(wert1 - wert2)` – Vorzeichen wird entfernt', ar: 'الفرق المطلق: `Math.abs(wert1 - wert2)` – يتم إزالة الإشارة' },
          { de: 'Abweichung vom Mittelwert: Wie weit weicht ein einzelner Wert vom Durchschnitt ab?', ar: 'الانحراف عن المتوسط: كم يبتعد قيمة فردية عن المتوسط؟' },
        ],
        examples: [
          { de: 'Gewinnveränderung: `double vorjahr = 50000; double aktuell = 62000; double aenderung = aktuell - vorjahr; double prozent = aenderung / vorjahr * 100;` – Ergebnis: +24% Gewinnsteigerung.', ar: 'تغيير الربح: `double vorjahr = 50000; double aktuell = 62000; double aenderung = aktuell - vorjahr; double prozent = aenderung / vorjahr * 100;` – النتيجة: +24% زيادة في الربح.' },
          { de: 'Abweichung: `double avg = 3.2; for (double note : noten) { System.out.println("Abweichung: " + (note - avg)); }` – Zeigt, ob über oder unter Durchschnitt.', ar: 'الانحراف: `double avg = 3.2; for (double note : noten) { System.out.println("Abweichung: " + (note - avg)); }` – يُظهر ما إذا كانت فوق أو تحت المتوسط.' },
        ],
        examRelevance: { de: 'Differenzberechnungen kommen in IHK-Prüfungsszenarien wie Umsatzvergleich, Bestandsänderung oder Leistungsauswertung vor.', ar: 'حسابات الفروقات تظهر في سيناريوهات امتحان IHK مثل مقارنة الإيرادات وتغيير المخزون أو تقييم الأداء.' },
        summary: { de: 'Differenzen messen Unterschiede. Absolut (Math.abs) oder relativ (prozentual). Basis für Vergleiche und Analysen.', ar: 'الفروقات تقيس الاختلافات. مطلقة (Math.abs) أو نسبية (مئوية). أساس للمقارنات والتحليلات.' },
      },
    },
    {
      id: 'time-calculations-math',
      name: { de: 'Zeitberechnungen', ar: 'حسابات الوقت' },
      content: {
        definition: {
          de: 'Zeitberechnungen in der Programmierung umfassen das Umrechnen zwischen Zeiteinheiten, das Berechnen von Zeitdifferenzen und das Formatieren von Zeitangaben.',
          ar: 'حسابات الوقت في البرمجة تشمل التحويل بين وحدات الوقت وحساب فروقات الوقت وتنسيق بيانات الوقت.',
        },
        keyPoints: [
          { de: 'Umrechnung: 1 Stunde = 60 Minuten = 3600 Sekunden', ar: 'التحويل: 1 ساعة = 60 دقيقة = 3600 ثانية' },
          { de: 'Ganzzahldivision und Modulo: `stunden = minuten / 60;` `restMinuten = minuten % 60;`', ar: 'القسمة الصحيحة والباقي: `stunden = minuten / 60;` `restMinuten = minuten % 60;`' },
          { de: 'Zeitdifferenz: Endzeit - Startzeit (ggf. Pausen abziehen)', ar: 'فرق الوقت: وقت الانتهاء - وقت البدء (مع خصم الاستراحات عند الحاجة)' },
          { de: 'Datumsberechnungen: In SQL mit DATEDIFF(), in Java mit ChronoUnit oder einfacher Arithmetik', ar: 'حسابات التاريخ: في SQL بـ DATEDIFF()، في Java بـ ChronoUnit أو حساب بسيط' },
        ],
        examples: [
          { de: '135 Minuten umrechnen: `int stunden = 135 / 60;` → 2 Stunden. `int minuten = 135 % 60;` → 15 Minuten. Ergebnis: 2 Stunden 15 Minuten.', ar: 'تحويل 135 دقيقة: `int stunden = 135 / 60;` → ساعتان. `int minuten = 135 % 60;` → 15 دقيقة. النتيجة: ساعتان و 15 دقيقة.' },
          { de: 'Arbeitsstunden pro Woche: `int[] stundenProTag = {8, 7, 9, 8, 6}; int summe = 0; for (int s : stundenProTag) summe += s;` – Ergebnis: 38 Stunden.', ar: 'ساعات العمل في الأسبوع: `int[] stundenProTag = {8, 7, 9, 8, 6}; int summe = 0; for (int s : stundenProTag) summe += s;` – النتيجة: 38 ساعة.' },
        ],
        examRelevance: { de: 'Zeitberechnungen mit Modulo und Ganzzahldivision sind ein typisches IHK-Prüfungsthema, z.B. Arbeitszeiten oder Fristen berechnen.', ar: 'حسابات الوقت مع الباقي والقسمة الصحيحة هي موضوع نموذجي في امتحان IHK، مثل حساب أوقات العمل أو المواعيد النهائية.' },
        summary: { de: 'Zeitberechnungen nutzen / für Stunden und % für Restminuten. Endzeit - Startzeit = Dauer.', ar: 'حسابات الوقت تستخدم / للساعات و % للدقائق المتبقية. وقت الانتهاء - وقت البدء = المدة.' },
      },
    },
  ],
};
