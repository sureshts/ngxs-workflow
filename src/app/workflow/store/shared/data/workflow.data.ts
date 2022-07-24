import { Workflow, WorkflowStep } from '../models/workflow.model';
const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getSteps = (limit: number) => {
  const steps: WorkflowStep[] = [];
  let count = 0;
  while (count < limit) {
    let id = getRandomInt(count + 1, 10);
    steps.push({
      id,
      url: `page${id}`,
      data: null,
    });
    count++;
  }
  return steps;
};
export const workflowData: Workflow[] = [
  {
    id: 1,
    name: 'volt',
    steps: [
      {
        id: 1,
        url: `page1`,
        data: {
          page1__value1: '',
          page1__value2: '',
          page1__value3: '',
        },
      },
      {
        id: 3,
        url: `page3`,
        data: {
          page3__value1: '',
          page3__value2: '',
          page3__value3: '',
        },
      },
      {
        id: 5,
        url: `page5`,
        data: {
          page5__value1: '',
          page5__value2: '',
          page5__value3: '',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'dual',
    steps: [
      {
        id: 2,
        url: `page2`,
        data: {
          value1: '',
          value2: '',
          value3: '',
        },
      },
      {
        id: 5,
        url: `page5`,
        data: null,
      },
      {
        id: 6,
        url: `page6`,
        data: null,
      },
      {
        id: 7,
        url: `page7`,
        data: null,
      },
    ],
  },
  {
    id: 3,
    name: 'broadband',
    steps: [
      {
        id: 2,
        url: `page2`,
        data: null,
      },
      {
        id: 5,
        url: `page5`,
        data: null,
      },
      {
        id: 8,
        url: `page8`,
        data: null,
      },
      {
        id: 9,
        url: `page9`,
        data: null,
      },
    ],
  },
];
