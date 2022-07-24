import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormService } from 'src/app/shared/services/form.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.scss'],
})
export class Page6Component extends BaseComponent implements OnInit {
  constructor(store: Store, formService: FormService) {
    super(store, formService);
  }
}
