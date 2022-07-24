import { Component, OnInit } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { filter, Observable, take } from 'rxjs';
import { FormService } from 'src/app/shared/services/form.service';
import {
  WORKFLOW_START,
  PREVIOUS_WORKFLOW_STEP,
  NEXT_WORKFLOW_STEP,
} from '../store/action/workflow.action';
import { RouterSelectors } from '../store/selector/router.selectors';
import { WorkflowStep } from '../store/shared/models/workflow.model';
import { WorkflowState } from '../store/state/workflow.state';

@Component({
  selector: 'app-main-shell',
  templateUrl: './main-shell.component.html',
  styleUrls: ['./main-shell.component.scss'],
})
export class MainShellComponent implements OnInit {
  activeStep$: Observable<WorkflowStep>;
  isLastStep$: Observable<boolean>;
  isFirstStep$: Observable<boolean>;
  steps$: Observable<WorkflowStep[]>;
  form$: Observable<any>;
  formData: any;
  stepDetail$: Observable<{ current: number; total: number }>;
  queryParams: any;
  constructor(private store: Store, private formService: FormService) {}

  ngOnInit(): void {
    this.store
      .select(RouterSelectors.url)
      .pipe(
        filter((url) => url.startsWith('/workflow')),
        take(1)
      )
      .subscribe(() => {
        this.store
          .select(RouterSelectors.queryParams)
          .pipe(take(1))
          .subscribe((qp) => {
            this.store.dispatch({
              type: WORKFLOW_START,
              workflowPayload: qp,
            });
          });
      });

    this.stepDetail$ = this.store.select(WorkflowState.stepDetail);
    this.isLastStep$ = this.store.select(WorkflowState.isLastStep);
    this.isFirstStep$ = this.store.select(WorkflowState.isFirstStep);
    this.steps$ = this.store.select(WorkflowState.getStepList);
    this.activeStep$ = this.store.select(WorkflowState.getActiveStep);
    this.store.select(WorkflowState.getActiveStep).subscribe((step) => {
      console.log(step);
      this.store.dispatch(new Navigate([`/${step.url}`]));
    });
    this.form$ = this.formService.form$;
    this.formService.form$.subscribe((f) => {
      this.formData = f.value;
    });
  }

  onPreviousNextStep() {
    this.store.dispatch({ type: PREVIOUS_WORKFLOW_STEP });
  }
  onNextStep() {
    this.store.dispatch({ type: NEXT_WORKFLOW_STEP, data: this.formData });
  }
}
