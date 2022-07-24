import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import {
  GetWorkflow,
  NextWorkflowStep,
  PreviousWorkflowStep,
  StartWorkflow,
} from '../action/workflow.action';
import { WorkflowService } from '../services/workflow.service';
import { WorkflowStep } from '../shared/models/workflow.model';

export class WorkflowStateModel {
  workflowId?: number;
  workflowName?: string;
  steps: WorkflowStep[];
  activeStep?: WorkflowStep;
  activeStepIndex?: number;
  productCategory?: string;
  productId: number;
  isFirstStep?: boolean;
  isLastStep?: boolean;
}

@State<WorkflowStateModel>({
  name: 'workflow',
  defaults: {
    steps: [],
    productId: 0,
    activeStep: null,
    productCategory: '',
  },
})
@Injectable()
export class WorkflowState {
  constructor(private workflowService: WorkflowService) {}

  @Selector()
  static getStepList(state: WorkflowStateModel) {
    return state.steps;
  }

  @Selector()
  static isLastStep(state: WorkflowStateModel) {
    return state.isLastStep;
  }

  @Selector()
  static isFirstStep(state: WorkflowStateModel) {
    return state.isFirstStep;
  }
  @Selector()
  static stepDetail(state: WorkflowStateModel) {
    return {
      current: state.activeStepIndex,
      total: state.steps.length,
    };
  }

  @Selector()
  static getActiveStep(state: WorkflowStateModel) {
    return state.activeStep;
  }

  @Action(NextWorkflowStep)
  nextWorkflowStep(
    ctx: StateContext<WorkflowStateModel>,
    action: NextWorkflowStep
  ) {
    const state = ctx.getState();

    if (state.steps[state.activeStepIndex + 1]) {
      const newSteps = state.steps.map((s) => {
        if (s.id === state.activeStep.id) {
          return { ...s, ...{ data: action.data } };
        }
        return s;
      });
      const newActiveStepIndex = state.activeStepIndex + 1;
      ctx.setState({
        ...state,
        ...{ steps: newSteps },
        activeStep: state.steps[newActiveStepIndex],
        activeStepIndex: newActiveStepIndex,
        isLastStep: newActiveStepIndex === state.steps.length - 1,
        isFirstStep: newActiveStepIndex === 0,
      });
    }
  }

  @Action(PreviousWorkflowStep)
  previousWorkflowStep({
    getState,
    setState,
  }: StateContext<WorkflowStateModel>) {
    const state = getState();
    const newActiveStepIndex = state.activeStepIndex - 1;
    setState({
      ...state,
      activeStep: state.steps[newActiveStepIndex],
      activeStepIndex: newActiveStepIndex,
      isFirstStep: newActiveStepIndex === 0,
      isLastStep: newActiveStepIndex === state.steps.length,
    });
  }
  @Action(StartWorkflow)
  startWorkflow(ctx: StateContext<WorkflowStateModel>, action: StartWorkflow) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      productCategory: action.workflowPayload.category,
      productId: action.workflowPayload.productId,
    });
    return this.workflowService
      .getWorkflow(null, action.workflowPayload.category)
      .pipe(
        tap((result) => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            workflowName: result.name,
            workflowId: result.id,
            steps: result.steps,
            activeStep: result.steps[0],
            activeStepIndex: 0,
          });
        })
      );
  }
}
