export const WORKFLOW_START = '[Workflow] Start workflow';
export const WORKFLOW_LOAD = '[Workflow] Get workflow';
export const NEXT_WORKFLOW_STEP = '[Workflow] Next workflow step';
export const PREVIOUS_WORKFLOW_STEP = '[Workflow] Previous workflow step';
export class GetWorkflow {
  static readonly type = '[Workflow] Get workflow';
}

export interface WorkflowPayload {
  category: string;
  productId: number;
}
export class StartWorkflow {
  static readonly type = WORKFLOW_START;
  constructor(public workflowPayload: WorkflowPayload) {}
}

export class NextWorkflowStep {
  static readonly type = NEXT_WORKFLOW_STEP;
  constructor(public data: any) {}
}

export class PreviousWorkflowStep {
  static readonly type = PREVIOUS_WORKFLOW_STEP;
}
