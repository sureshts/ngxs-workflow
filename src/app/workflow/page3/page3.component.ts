import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { FormService } from 'src/app/shared/services/form.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component extends BaseComponent implements OnInit {
  constructor(store: Store, formService: FormService) {
    super(store, formService);
  }
}
