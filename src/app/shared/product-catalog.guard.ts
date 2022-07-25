import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ResetWorkflow } from '../workflow/store/action/workflow.action';

@Injectable({
  providedIn: 'root',
})
export class ProductCatalogGuard implements CanActivate {
  constructor(private store: Store) {}
  canActivate() {
    this.store.dispatch(new ResetWorkflow());
    return true;
  }
}
