import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private form: Subject<any> = new BehaviorSubject<any>([]);

  get form$() {
    return this.form.asObservable();
  }
  changeFormValues(data: any) {
    this.form.next(data);
  }
}
