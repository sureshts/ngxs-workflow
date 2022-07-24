import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormService } from 'src/app/shared/services/form.service';
import { WorkflowStep } from '../store/shared/models/workflow.model';
import { WorkflowState } from '../store/state/workflow.state';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  activeStep$: Observable<WorkflowStep>;
  form: any;
  formGroup: FormGroup;
  constructor(private store: Store, private formService: FormService) {}

  ngOnInit(): void {
    this.activeStep$ = this.store.select(WorkflowState.getActiveStep);
    this.store.select(WorkflowState.getActiveStep).subscribe((s) => {
      let fgData = <any>{};
      for (let [key, value] of Object.entries(s.data)) {
        console.log(key + ':' + value);
        fgData = { ...fgData, ...{ [key]: new FormControl(value || '') } };
      }
      this.form = new FormGroup(fgData);
      this.formService.changeFormValues({
        value: this.form.value,
        isValid: this.form.valid,
      });
    });
    this.form.valueChanges.subscribe((value) => {
      this.formService.changeFormValues({
        value: this.form.value,
        isValid: this.form.valid,
      });
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
