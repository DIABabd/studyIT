import type { TopicGroup } from '../../../types';

export const errorHandling: TopicGroup = {
  id: 'group13-error-handling',
  name: {
    de: 'Fehlerbehandlung',
    ar: 'معالجة الأخطاء',
  },
  description: {
    de: 'Eingabevalidierung, Null-Checks, Fehlerbehandlungslogik und Grenzwertbedingungen',
    ar: 'التحقق من المدخلات، فحص Null، منطق معالجة الأخطاء والشروط الحدية',
  },
  topics: [
    {
      id: 'input-validation',
      name: { de: 'Eingabevalidierung', ar: 'التحقق من المدخلات' },
      content: {
        definition: {
          de: 'Eingabevalidierung prüft Benutzereingaben auf Korrektheit, bevor sie verarbeitet werden. Sie verhindert Programmabstürze und stellt sicher, dass nur gültige Daten weiterverarbeitet werden.',
          ar: 'التحقق من المدخلات يفحص مدخلات المستخدم للتأكد من صحتها قبل معالجتها. يمنع انهيار البرنامج ويضمن معالجة البيانات الصالحة فقط.',
        },
        keyPoints: [
          { de: 'Wertebereich prüfen: `if (alter >= 0 && alter <= 150)` – Sinnvoller Bereich', ar: 'فحص نطاق القيم: `if (alter >= 0 && alter <= 150)` – نطاق معقول' },
          { de: 'Typ prüfen: Ist die Eingabe wirklich eine Zahl? `try { int n = Integer.parseInt(eingabe); }`', ar: 'فحص النوع: هل المدخل حقاً رقم؟ `try { int n = Integer.parseInt(eingabe); }`' },
          { de: 'Leere Eingaben abfangen: `if (eingabe != null && !eingabe.isEmpty())`', ar: 'التقاط المدخلات الفارغة: `if (eingabe != null && !eingabe.isEmpty())`' },
          { de: 'Frühzeitiges Ablehnen: Ungültige Eingaben sofort zurückweisen (Guard Clauses)', ar: 'الرفض المبكر: رفض المدخلات غير الصالحة فوراً (Guard Clauses)' },
        ],
        examples: [
          { de: '`public void setAlter(int alter) { if (alter < 0 || alter > 150) { throw new IllegalArgumentException("Ungültiges Alter: " + alter); } this.alter = alter; }` – Validierung im Setter.', ar: '`public void setAlter(int alter) { if (alter < 0 || alter > 150) { throw new IllegalArgumentException("Ungültiges Alter: " + alter); } this.alter = alter; }` – التحقق في Setter.' },
          { de: 'Schleife bis gültige Eingabe: `int zahl; do { zahl = scanner.nextInt(); } while (zahl < 1 || zahl > 100);`', ar: 'حلقة حتى إدخال صالح: `int zahl; do { zahl = scanner.nextInt(); } while (zahl < 1 || zahl > 100);`' },
        ],
        examRelevance: { de: 'Eingabevalidierung ist ein wichtiger Aspekt in der IHK-Prüfung. Man muss Validierungslogik lesen und schreiben können.', ar: 'التحقق من المدخلات جانب مهم في امتحان IHK. يجب قراءة وكتابة منطق التحقق.' },
        summary: { de: 'Eingabevalidierung prüft Werte vor der Verarbeitung: Bereich, Typ, leere Eingaben. Ungültiges frühzeitig ablehnen.', ar: 'التحقق من المدخلات يفحص القيم قبل المعالجة: النطاق، النوع، المدخلات الفارغة. رفض غير الصالح مبكراً.' },
      },
    },
    {
      id: 'null-checks',
      name: { de: 'Null-Checks', ar: 'فحص Null' },
      content: {
        definition: {
          de: 'Null-Checks prüfen, ob eine Referenzvariable auf ein gültiges Objekt verweist. Der Zugriff auf Methoden oder Attribute einer null-Referenz führt zu einer NullPointerException.',
          ar: 'فحص Null يتحقق ما إذا كان متغير مرجعي يشير إلى كائن صالح. الوصول إلى طرق أو خصائص مرجع null يؤدي إلى NullPointerException.',
        },
        keyPoints: [
          { de: 'Vor jedem Methodenaufruf auf Objekten prüfen: `if (objekt != null)`', ar: 'قبل كل استدعاء طريقة على الكائنات فحص: `if (objekt != null)`' },
          { de: 'NullPointerException ist einer der häufigsten Laufzeitfehler in Java', ar: 'NullPointerException هو أحد أكثر أخطاء وقت التشغيل شيوعاً في Java' },
          { de: 'Objekt-Arrays können null-Einträge enthalten, wenn nicht alle Plätze belegt sind', ar: 'مصفوفات الكائنات يمكن أن تحتوي على إدخالات null إذا لم تُملأ جميع المواقع' },
        ],
        examples: [
          { de: '`for (int i = 0; i < mitarbeiter.length; i++) { if (mitarbeiter[i] != null) { System.out.println(mitarbeiter[i].getName()); } }` – Sicheres Durchlaufen eines nicht voll belegten Arrays.', ar: '`for (int i = 0; i < mitarbeiter.length; i++) { if (mitarbeiter[i] != null) { System.out.println(mitarbeiter[i].getName()); } }` – تمرير آمن لمصفوفة غير مكتملة.' },
          { de: '`String name = kunde.getName(); if (name != null && name.length() > 0) { ... }` – Prüft, ob Name vorhanden und nicht leer ist.', ar: '`String name = kunde.getName(); if (name != null && name.length() > 0) { ... }` – يفحص ما إذا كان الاسم موجوداً وغير فارغ.' },
        ],
        examRelevance: { de: 'Null-Checks in Algorithmen sind ein häufiges Thema der IHK-Prüfung, besonders bei Objekt-Arrays.', ar: 'فحص Null في الخوارزميات موضوع شائع في امتحان IHK، خاصة مع مصفوفات الكائنات.' },
        summary: { de: 'Null-Checks verhindern NullPointerExceptions. Vor Methodenaufrufen auf Objekten immer auf null prüfen.', ar: 'فحص Null يمنع NullPointerExceptions. قبل استدعاء الطرق على الكائنات دائماً فحص null.' },
      },
    },
    {
      id: 'error-handling-logic',
      name: { de: 'Fehlerbehandlungslogik', ar: 'منطق معالجة الأخطاء' },
      content: {
        definition: {
          de: 'Fehlerbehandlung mit try-catch-finally fängt Laufzeitfehler (Exceptions) ab und ermöglicht eine kontrollierte Reaktion statt eines Programmabsturzes.',
          ar: 'معالجة الأخطاء بـ try-catch-finally تلتقط أخطاء وقت التشغيل (Exceptions) وتتيح رد فعل مُتحكم بدلاً من انهيار البرنامج.',
        },
        keyPoints: [
          { de: 'try: Code, der einen Fehler verursachen könnte', ar: 'try: الكود الذي قد يسبب خطأ' },
          { de: 'catch: Behandelt den Fehler – `catch (Exception e) { ... }`', ar: 'catch: يعالج الخطأ – `catch (Exception e) { ... }`' },
          { de: 'finally: Wird immer ausgeführt, egal ob Fehler oder nicht (z.B. Ressourcen freigeben)', ar: 'finally: يُنفذ دائماً، سواء حدث خطأ أم لا (مثل تحرير الموارد)' },
          { de: 'Checked Exceptions müssen behandelt werden (try/catch oder throws), Unchecked nicht zwingend', ar: 'Checked Exceptions يجب معالجتها (try/catch أو throws)، Unchecked ليست إلزامية' },
        ],
        examples: [
          { de: '`try { int zahl = Integer.parseInt(eingabe); } catch (NumberFormatException e) { System.out.println("Keine gültige Zahl!"); }` – Fängt ungültige Zahleneingaben ab.', ar: '`try { int zahl = Integer.parseInt(eingabe); } catch (NumberFormatException e) { System.out.println("Keine gültige Zahl!"); }` – يلتقط مدخلات أرقام غير صالحة.' },
        ],
        examRelevance: { de: 'try-catch-Blöcke und Exception-Handling sind fester Bestandteil der IHK-Prüfung.', ar: 'كتل try-catch ومعالجة الاستثناءات جزء ثابت من امتحان IHK.' },
        summary: { de: 'try-catch-finally behandelt Laufzeitfehler kontrolliert. Spezifische Exceptions fangen für gezielte Fehlerbehandlung.', ar: 'try-catch-finally يعالج أخطاء وقت التشغيل بشكل مُتحكم. التقاط استثناءات محددة لمعالجة أخطاء مستهدفة.' },
      },
    },
    {
      id: 'boundary-conditions',
      name: { de: 'Grenzwertbedingungen', ar: 'الشروط الحدية' },
      content: {
        definition: {
          de: 'Grenzwertbedingungen (Edge Cases) sind Sonderfälle am Rand des gültigen Eingabebereichs, die besondere Aufmerksamkeit erfordern: leere Arrays, der Wert 0, das erste/letzte Element, oder maximale Werte.',
          ar: 'الشروط الحدية (Edge Cases) هي حالات خاصة على حدود نطاق الإدخال الصالح تتطلب اهتماماً خاصاً: مصفوفات فارغة، القيمة 0، العنصر الأول/الأخير، أو القيم القصوى.',
        },
        keyPoints: [
          { de: 'Leeres Array: `if (arr.length == 0)` – Vor Zugriff auf arr[0] prüfen', ar: 'مصفوفة فارغة: `if (arr.length == 0)` – فحص قبل الوصول إلى arr[0]' },
          { de: 'Division durch Null: `if (divisor != 0)` – Vor jeder Division prüfen', ar: 'القسمة على صفر: `if (divisor != 0)` – فحص قبل كل قسمة' },
          { de: 'Off-by-one: Schleifengrenzen genau prüfen (< vs. <= bei length)', ar: 'Off-by-one: فحص حدود الحلقة بدقة (< مقابل <= مع length)' },
          { de: 'Überlauf: Integer.MAX_VALUE + 1 wird negativ in Java', ar: 'الطفح: Integer.MAX_VALUE + 1 يصبح سالباً في Java' },
        ],
        examples: [
          { de: 'Sicherer Durchschnitt: `if (arr.length > 0) { double avg = (double) summe / arr.length; } else { System.out.println("Kein Wert vorhanden"); }`', ar: 'متوسط آمن: `if (arr.length > 0) { double avg = (double) summe / arr.length; } else { System.out.println("Kein Wert vorhanden"); }`' },
          { de: 'Letztes Element sicher abrufen: `if (liste.size() > 0) { return liste.get(liste.size() - 1); }`', ar: 'استرجاع العنصر الأخير بأمان: `if (liste.size() > 0) { return liste.get(liste.size() - 1); }`' },
        ],
        examRelevance: { de: 'Grenzwertbedingungen sind in der IHK-Prüfung relevant bei der Code-Analyse: Erkennen von Fehlern bei leeren Eingaben oder Randwerten.', ar: 'الشروط الحدية مهمة في امتحان IHK في تحليل الكود: اكتشاف الأخطاء مع المدخلات الفارغة أو القيم الحدية.' },
        summary: { de: 'Edge Cases beachten: leere Eingaben, Null, Division durch 0, Off-by-one-Fehler. Immer Grenzwerte testen.', ar: 'مراعاة الحالات الحدية: مدخلات فارغة، Null، القسمة على 0، أخطاء Off-by-one. دائماً اختبار القيم الحدية.' },
      },
    },
  ],
};
