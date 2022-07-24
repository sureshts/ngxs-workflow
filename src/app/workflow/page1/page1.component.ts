import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormService } from 'src/app/shared/services/form.service';
import { BaseComponent } from '../base/base.component';
import { WorkflowStep } from '../store/shared/models/workflow.model';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component extends BaseComponent implements OnInit {
  constructor(store: Store, formService: FormService) {
    super(store, formService);
  }
}
