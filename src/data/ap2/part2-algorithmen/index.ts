import type { ExamPart } from '../../../types';

import { coreBasics } from './group01-core-basics';
import { arraysCollections } from './group02-arrays-collections';
import { functionsMethods } from './group03-functions-methods';
import { ooAlgorithmTasks } from './group04-oo-algorithm-tasks';
import { sortingAlgorithms } from './group05-sorting-algorithms';
import { searchingAlgorithms } from './group06-searching-algorithms';
import { algorithmDesign } from './group07-algorithm-design';
import { softwareTesting } from './group08-software-testing';
import { databaseQueries } from './group09-database-queries';
import { databaseManipulation } from './group10-database-manipulation';
import { dataProcessing } from './group11-data-processing';
import { dataStructures } from './group12-data-structures';
import { errorHandling } from './group13-error-handling';
import { apiBackendLogic } from './group14-api-backend-logic';
import { mathematicalLogic } from './group15-mathematical-logic';

export const part2Algorithmen: ExamPart = {
  id: 'part2',
  name: {
    de: 'Entwicklung und Umsetzung von Algorithmen',
    ar: 'تطوير وتنفيذ الخوارزميات',
  },
  description: {
    de: 'Algorithmen, Datenstrukturen und Programmierkonzepte',
    ar: 'الخوارزميات وهياكل البيانات ومفاهيم البرمجة',
  },
  topicGroups: [
    coreBasics,
    arraysCollections,
    functionsMethods,
    ooAlgorithmTasks,
    sortingAlgorithms,
    searchingAlgorithms,
    algorithmDesign,
    softwareTesting,
    databaseQueries,
    databaseManipulation,
    dataProcessing,
    dataStructures,
    errorHandling,
    apiBackendLogic,
    mathematicalLogic,
  ],
};
