import type { ExamPart } from '../../../types';

import { softwareDevProcess } from './group01-software-dev-process';
import { projectManagement } from './group02-project-management';
import { requirementsEngineering } from './group03-requirements-engineering';
import { umlModeling } from './group04-uml-modeling';
import { umlRelationships } from './group05-uml-relationships';
import { ooDesign } from './group06-oo-design';
import { designPatterns } from './group07-design-patterns';
import { softwareArchitecture } from './group08-software-architecture';
import { databaseDesign } from './group09-database-design';
import { uiUxDesign } from './group10-ui-ux-design';
import { securityDataProtection } from './group11-security-data-protection';
import { apiDesign } from './group12-api-design';
import { networkBasics } from './group13-network-basics';
import { softwareQualityTesting } from './group14-software-quality-testing';
import { documentation } from './group15-documentation';

export const part1Planen: ExamPart = {
  id: 'part1',
  name: {
    de: 'Planen eines Softwareproduktes',
    ar: 'تخطيط منتج برمجي',
  },
  description: {
    de: 'Planung, Entwurf und Design von Softwareprodukten',
    ar: 'تخطيط وتصميم المنتجات البرمجية',
  },
  topicGroups: [
    softwareDevProcess,
    projectManagement,
    requirementsEngineering,
    umlModeling,
    umlRelationships,
    ooDesign,
    designPatterns,
    softwareArchitecture,
    databaseDesign,
    uiUxDesign,
    securityDataProtection,
    apiDesign,
    networkBasics,
    softwareQualityTesting,
    documentation,
  ],
};
