import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormService } from 'src/app/shared/services/form.service';
import { BaseComponent } from '../base/base.component';
import { WorkflowStep } from '../store/shared/models/workflow.model';
import { WorkflowState } from '../store/state/workflow.state';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss'],
})
export class Page4Component extends BaseComponent implements OnInit {
  constructor(store: Store, formService: FormService) {
    super(store, formService);
  }
}
