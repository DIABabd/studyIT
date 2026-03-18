import type { TopicGroup } from '../../../types';

export const networkBasics: TopicGroup = {
  id: 'group13',
  name: {
    de: 'Netzwerkgrundlagen',
    ar: 'أساسيات الشبكات',
  },
  description: {
    de: 'Grundlegende Netzwerkkonzepte: Netzwerktypen, Ethernet und MAC-Adressen',
    ar: 'مفاهيم الشبكات الأساسية: أنواع الشبكات وإيثرنت وعناوين MAC',
  },
  priority: 'low',
  topics: [
    {
      id: 'lan',
      name: {
        de: 'LAN (Local Area Network)',
        ar: 'شبكة محلية (LAN)',
      },
      content: {
        definition: {
          de: 'Ein LAN (Local Area Network) ist ein lokales Netzwerk, das Computer und Geräte in einem begrenzten geografischen Bereich verbindet – typischerweise ein Büro, ein Stockwerk oder ein Gebäude. LANs bieten hohe Bandbreiten und niedrige Latenz.',
          ar: 'شبكة LAN (شبكة محلية) هي شبكة تربط أجهزة الكمبيوتر والأجهزة في منطقة جغرافية محدودة – عادة مكتب أو طابق أو مبنى. توفر LAN عرض نطاق ترددي عالي وتأخير منخفض.',
        },
        keyPoints: [
          {
            de: 'Reichweite: Typisch bis zu wenigen Kilometern (Gebäude oder Campus)',
            ar: 'النطاق: عادة حتى بضعة كيلومترات (مبنى أو حرم)',
          },
          {
            de: 'Technologien: Ethernet (kabelgebunden), WLAN/WiFi (drahtlos)',
            ar: 'التقنيات: إيثرنت (سلكي)، WLAN/WiFi (لاسلكي)',
          },
          {
            de: 'Hohe Geschwindigkeit: Typisch 100 Mbit/s bis 10 Gbit/s',
            ar: 'سرعة عالية: عادة 100 Mbit/s إلى 10 Gbit/s',
          },
          {
            de: 'Komponenten: Switch, Router, Access Point, Kabel (Cat5e, Cat6, Glasfaser)',
            ar: 'المكونات: مبدّل (Switch)، موجه (Router)، نقطة وصول، كابلات (Cat5e, Cat6, ألياف ضوئية)',
          },
        ],
        examples: [
          {
            de: 'Das LAN eines Büros: 20 Arbeitsplatzrechner sind über einen Switch verbunden. Ein Router verbindet das LAN mit dem Internet. Ein WLAN-Access-Point ermöglicht drahtlosen Zugang für Laptops und Smartphones.',
            ar: 'شبكة LAN لمكتب: 20 حاسوب مكتبي متصلة عبر مبدّل. موجه يربط LAN بالإنترنت. نقطة وصول WLAN تتيح الوصول اللاسلكي للحواسب المحمولة والهواتف الذكية.',
          },
        ],
        examRelevance: {
          de: 'Kennen Sie die Unterschiede zwischen LAN, WAN, MAN und die typischen Komponenten und Geschwindigkeiten eines LANs.',
          ar: 'اعرف الفروقات بين LAN و WAN و MAN والمكونات والسرعات النموذجية لـ LAN.',
        },
        summary: {
          de: 'Ein LAN verbindet Geräte in einem begrenzten Bereich mit hoher Bandbreite über Ethernet oder WLAN.',
          ar: 'شبكة LAN تربط الأجهزة في منطقة محدودة بعرض نطاق ترددي عالي عبر إيثرنت أو WLAN.',
        },
      },
    },
    {
      id: 'san',
      name: {
        de: 'SAN (Storage Area Network)',
        ar: 'شبكة تخزين (SAN)',
      },
      content: {
        definition: {
          de: 'Ein SAN (Storage Area Network) ist ein spezialisiertes Hochgeschwindigkeitsnetzwerk, das Server mit Speichergeräten verbindet. Es stellt Speicher auf Blockebene bereit und ermöglicht den Zugriff auf zentrale Speicherressourcen, als wären sie lokal angeschlossen.',
          ar: 'شبكة SAN (شبكة منطقة التخزين) هي شبكة عالية السرعة متخصصة تربط الخوادم بأجهزة التخزين. توفر تخزيناً على مستوى الكتل وتتيح الوصول لموارد التخزين المركزية كما لو كانت متصلة محلياً.',
        },
        keyPoints: [
          {
            de: 'Blockbasierter Speicher: Server sehen SAN-Speicher wie lokale Festplatten',
            ar: 'تخزين على مستوى الكتل: الخوادم ترى تخزين SAN مثل أقراص محلية',
          },
          {
            de: 'Technologien: Fibre Channel (FC), iSCSI, FCoE',
            ar: 'التقنيات: Fibre Channel (FC)، iSCSI، FCoE',
          },
          {
            de: 'Vorteile: Zentrale Speicherverwaltung, hohe Verfügbarkeit, einfache Backups',
            ar: 'المزايا: إدارة تخزين مركزية، توفر عالي، نسخ احتياطية سهلة',
          },
        ],
        examples: [
          {
            de: 'Ein Rechenzentrum nutzt ein SAN mit Fibre Channel: 10 Server greifen auf ein zentrales Speicherarray mit 100 TB zu. Jeder Server sieht seinen zugewiesenen Speicherbereich als lokale Festplatte.',
            ar: 'مركز بيانات يستخدم SAN مع Fibre Channel: 10 خوادم تصل إلى مصفوفة تخزين مركزية بسعة 100 TB. كل خادم يرى منطقة التخزين المخصصة له كقرص محلي.',
          },
        ],
        examRelevance: {
          de: 'SAN wird im Vergleich mit NAS abgefragt. SAN = Blockebene (wie lokale Festplatte), NAS = Dateiebene (Netzwerklaufwerk). Kennen Sie den Unterschied.',
          ar: 'SAN يُسأل بالمقارنة مع NAS. SAN = مستوى الكتل (مثل قرص محلي)، NAS = مستوى الملفات (محرك شبكي). اعرف الفرق.',
        },
        summary: {
          de: 'Ein SAN ist ein spezialisiertes Netzwerk für blockbasierten Speicherzugriff, das zentrale Speicherressourcen für Server bereitstellt.',
          ar: 'SAN هو شبكة متخصصة للوصول للتخزين على مستوى الكتل توفر موارد تخزين مركزية للخوادم.',
        },
      },
    },
    {
      id: 'lpwan',
      name: {
        de: 'LPWAN (Low Power Wide Area Network)',
        ar: 'شبكة واسعة منخفضة الطاقة (LPWAN)',
      },
      content: {
        definition: {
          de: 'LPWAN (Low Power Wide Area Network) ist eine Klasse drahtloser Netzwerke, die speziell für IoT-Geräte (Internet of Things) entwickelt wurde. LPWANs bieten große Reichweiten (bis zu 15 km) bei sehr niedrigem Energieverbrauch, aber mit niedrigen Datenraten.',
          ar: 'LPWAN (شبكة واسعة منخفضة الطاقة) هي فئة من الشبكات اللاسلكية المصممة خصيصاً لأجهزة إنترنت الأشياء (IoT). توفر LPWAN نطاقات كبيرة (حتى 15 كم) مع استهلاك طاقة منخفض جداً لكن بمعدلات بيانات منخفضة.',
        },
        keyPoints: [
          {
            de: 'Große Reichweite: Bis zu 15 km in ländlichen Gebieten',
            ar: 'نطاق كبير: حتى 15 كم في المناطق الريفية',
          },
          {
            de: 'Niedriger Energieverbrauch: Batteriebetrieb über Jahre möglich',
            ar: 'استهلاك طاقة منخفض: تشغيل بالبطارية لسنوات ممكن',
          },
          {
            de: 'Niedrige Datenrate: Geeignet für kleine Datenpakete (Sensordaten)',
            ar: 'معدل بيانات منخفض: مناسب لحزم بيانات صغيرة (بيانات المستشعرات)',
          },
          {
            de: 'Technologien: LoRaWAN, Sigfox, NB-IoT',
            ar: 'التقنيات: LoRaWAN، Sigfox، NB-IoT',
          },
        ],
        examples: [
          {
            de: 'Intelligente Landwirtschaft: Bodenfeuchtesensoren auf einem großen Feld senden alle 15 Minuten Messwerte über LoRaWAN an eine Basisstation. Die Sensoren laufen mit einer Batterie, die 5 Jahre hält.',
            ar: 'الزراعة الذكية: مستشعرات رطوبة التربة في حقل كبير ترسل قراءات كل 15 دقيقة عبر LoRaWAN لمحطة قاعدية. تعمل المستشعرات ببطارية تدوم 5 سنوات.',
          },
        ],
        examRelevance: {
          de: 'LPWAN wird im Kontext von IoT abgefragt. Kennen Sie die Merkmale: große Reichweite, niedriger Energieverbrauch, niedrige Datenrate.',
          ar: 'LPWAN يُسأل في سياق IoT. اعرف الخصائص: نطاق كبير، استهلاك طاقة منخفض، معدل بيانات منخفض.',
        },
        summary: {
          de: 'LPWAN ermöglicht IoT-Kommunikation über große Reichweiten bei sehr niedrigem Energieverbrauch und niedrigen Datenraten.',
          ar: 'LPWAN يتيح اتصال IoT على نطاقات كبيرة باستهلاك طاقة منخفض جداً ومعدلات بيانات منخفضة.',
        },
      },
    },
    {
      id: 'ethernet',
      name: {
        de: 'Ethernet',
        ar: 'إيثرنت (Ethernet)',
      },
      content: {
        definition: {
          de: 'Ethernet ist die am weitesten verbreitete kabelgebundene Netzwerktechnologie für LANs. Es definiert Standards für die physische Verkabelung und die Datenübertragung auf Schicht 1 und 2 des OSI-Modells. Standardisiert in IEEE 802.3.',
          ar: 'إيثرنت هي أكثر تقنيات الشبكات السلكية انتشاراً لشبكات LAN. تحدد معايير الكابلات الفيزيائية ونقل البيانات على الطبقتين 1 و 2 من نموذج OSI. معيارية في IEEE 802.3.',
        },
        keyPoints: [
          {
            de: 'Geschwindigkeiten: Fast Ethernet (100 Mbit/s), Gigabit Ethernet (1 Gbit/s), 10 Gigabit Ethernet',
            ar: 'السرعات: Fast Ethernet (100 Mbit/s)، Gigabit Ethernet (1 Gbit/s)، 10 Gigabit Ethernet',
          },
          {
            de: 'Kabeltypen: Twisted-Pair (Cat5e, Cat6, Cat7), Glasfaser (Singlemode, Multimode)',
            ar: 'أنواع الكابلات: الأسلاك المجدولة (Cat5e, Cat6, Cat7)، الألياف الضوئية (وضع واحد، متعدد الأوضاع)',
          },
          {
            de: 'Ethernet-Rahmen (Frame): Enthält Ziel-MAC, Quell-MAC, Typ/Länge, Nutzdaten, Prüfsumme',
            ar: 'إطار إيثرنت (Frame): يحتوي MAC الوجهة، MAC المصدر، النوع/الطول، البيانات المفيدة، المجموع الاختباري',
          },
        ],
        examples: [
          {
            de: 'Ein Büronetzwerk wird mit Cat6-Kabeln verkabelt und unterstützt Gigabit Ethernet (1 Gbit/s). Jeder Arbeitsplatz ist über eine RJ45-Buchse mit dem Switch verbunden.',
            ar: 'شبكة مكتب مُوصلة بكابلات Cat6 وتدعم Gigabit Ethernet (1 Gbit/s). كل مكان عمل متصل عبر مقبس RJ45 بالمبدّل.',
          },
        ],
        examRelevance: {
          de: 'Kennen Sie die Ethernet-Geschwindigkeiten und Kabeltypen. Der Aufbau eines Ethernet-Frames kann in der Prüfung abgefragt werden.',
          ar: 'اعرف سرعات إيثرنت وأنواع الكابلات. بنية إطار إيثرنت يمكن أن تُسأل في الامتحان.',
        },
        summary: {
          de: 'Ethernet ist der LAN-Standard (IEEE 802.3) mit Geschwindigkeiten von 100 Mbit/s bis 10 Gbit/s über Twisted-Pair oder Glasfaser.',
          ar: 'إيثرنت هو معيار LAN (IEEE 802.3) بسرعات من 100 Mbit/s إلى 10 Gbit/s عبر أسلاك مجدولة أو ألياف ضوئية.',
        },
      },
    },
    {
      id: 'mac-address',
      name: {
        de: 'MAC-Adresse',
        ar: 'عنوان MAC',
      },
      content: {
        definition: {
          de: 'Eine MAC-Adresse (Media Access Control) ist eine weltweit eindeutige, 48-Bit lange Hardware-Adresse, die jeder Netzwerkschnittstelle werkseitig zugewiesen wird. Sie arbeitet auf Schicht 2 (Sicherungsschicht) des OSI-Modells und wird für die lokale Kommunikation im Netzwerk verwendet.',
          ar: 'عنوان MAC (التحكم في الوصول للوسائط) هو عنوان أجهزة فريد عالمياً بطول 48 بت يُعيَّن لكل واجهة شبكة في المصنع. يعمل على الطبقة 2 (طبقة ربط البيانات) من نموذج OSI ويُستخدم للتواصل المحلي في الشبكة.',
        },
        keyPoints: [
          {
            de: 'Format: 6 Byte (48 Bit), dargestellt als z.B. AA:BB:CC:DD:EE:FF',
            ar: 'الصيغة: 6 بايت (48 بت)، تُمثل مثلاً AA:BB:CC:DD:EE:FF',
          },
          {
            de: 'Erste 3 Bytes (OUI): Herstellerkennung, letzte 3 Bytes: Gerätespezifisch',
            ar: 'أول 3 بايت (OUI): معرّف الشركة المصنعة، آخر 3 بايت: خاص بالجهاز',
          },
          {
            de: 'Unterschied zu IP-Adresse: MAC = physische Adresse (Schicht 2), IP = logische Adresse (Schicht 3)',
            ar: 'الفرق مع عنوان IP: MAC = عنوان فيزيائي (الطبقة 2)، IP = عنوان منطقي (الطبقة 3)',
          },
        ],
        examples: [
          {
            de: 'MAC-Adresse: 00:1A:2B:3C:4D:5E. Die ersten 3 Bytes (00:1A:2B) identifizieren den Hersteller (z.B. Intel). Die letzten 3 Bytes (3C:4D:5E) identifizieren das spezifische Gerät.',
            ar: 'عنوان MAC: 00:1A:2B:3C:4D:5E. أول 3 بايت (00:1A:2B) تُعرّف الشركة المصنعة (مثل Intel). آخر 3 بايت (3C:4D:5E) تُعرّف الجهاز المحدد.',
          },
        ],
        examRelevance: {
          de: 'MAC-Adressen und ihr Aufbau (OUI + Geräte-ID) werden häufig gefragt. Kennen Sie den Unterschied zwischen MAC (Schicht 2) und IP (Schicht 3).',
          ar: 'عناوين MAC وبنيتها (OUI + معرّف الجهاز) تُسأل كثيراً. اعرف الفرق بين MAC (الطبقة 2) و IP (الطبقة 3).',
        },
        summary: {
          de: 'Die MAC-Adresse ist eine 48-Bit Hardware-Adresse (OUI + Geräte-ID) für die lokale Netzwerkkommunikation auf OSI-Schicht 2.',
          ar: 'عنوان MAC هو عنوان أجهزة بطول 48 بت (OUI + معرّف الجهاز) للتواصل الشبكي المحلي على الطبقة 2 من OSI.',
        },
      },
    },
  ],
};
