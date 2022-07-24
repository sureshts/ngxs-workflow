import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormService } from 'src/app/shared/services/form.service';
import { BaseComponent } from '../base/base.component';
import { WorkflowStep } from '../store/shared/models/workflow.model';
import { WorkflowState } from '../store/state/workflow.state';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss'],
})
export class Page5Component extends BaseComponent implements OnInit {
  constructor(store: Store, formService: FormService) {
    super(store, formService);
  }
}
