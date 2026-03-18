import type { ExamPart } from '../../../types';
import { arbeitsrecht } from './group01-arbeitsrecht';
import { mitbestimmung } from './group02-mitbestimmung';
import { sozialversicherung } from './group03-sozialversicherung';
import { wirtschaftlicheGrundlagen } from './group04-wirtschaftliche-grundlagen';
import { wirtschaftskreislauf } from './group05-wirtschaftskreislauf';
import { unternehmensorganisation } from './group06-unternehmensorganisation';
import { finanzierungKostenrechnung } from './group07-finanzierung-kostenrechnung';
import { steuern } from './group08-steuern';
import { vertragsrecht } from './group09-vertragsrecht';
import { personalwesen } from './group10-personalwesen';
import { datenschutzItRecht } from './group11-datenschutz-it-recht';
import { nachhaltigkeit } from './group12-nachhaltigkeit';
import { internationalTrade } from './group13-international-trade';
import { digitalEconomy } from './group14-digital-economy';
import { basicAccounting } from './group15-basic-accounting';

export const part3Wiso: ExamPart = {
  id: 'part3',
  name: {
    de: 'Wirtschafts- und Sozialkunde (WiSo)',
    ar: 'الاقتصاد والشؤون الاجتماعية',
  },
  description: {
    de: 'Wirtschaftliche und soziale Grundlagen',
    ar: 'الأسس الاقتصادية والاجتماعية',
  },
  topicGroups: [
    // Sehr wichtig
    arbeitsrecht,
    sozialversicherung,
    vertragsrecht,
    finanzierungKostenrechnung,
    // Wichtig
    mitbestimmung,
    wirtschaftlicheGrundlagen,
    steuern,
    unternehmensorganisation,
    // Mittel
    wirtschaftskreislauf,
    datenschutzItRecht,
    personalwesen,
    digitalEconomy,
    // Weniger wichtig
    nachhaltigkeit,
    internationalTrade,
    basicAccounting,
  ],
};
