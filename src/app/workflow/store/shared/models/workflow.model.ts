export class Workflow {
  id: number;
  name: string;
  steps: WorkflowStep[];
}

export class WorkflowStep {
  id: number;
  url: string;
  data: any;
}
