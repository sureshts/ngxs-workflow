import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { workflowData } from '../shared/data/workflow.data';
import { Workflow } from '../shared/models/workflow.model';
import { WorkflowStateModel } from '../state/workflow.state';

@Injectable({
  providedIn: 'root',
})
export class WorkflowService {
  constructor() {}

  getWorkflow(id?: number, name?: string) {
    const workflow = workflowData.find(
      (w) => w.id === id || w.name.toUpperCase() === name.toUpperCase()
    );
    const saveWorkflow: WorkflowStateModel = JSON.parse(
      localStorage.getItem('workflow')
    );
    if (saveWorkflow) {
      if (workflow.id === saveWorkflow.workflowId) {
        const steps = workflow.steps.map((s) => {
          return { ...s, ...{ steps: saveWorkflow.steps } };
        });
        const data = {
          id: workflow.id,
          name: workflow.name,
          steps: saveWorkflow.steps,
        };

        return of(data);
      }
    }
    return of(workflow);
  }
}
