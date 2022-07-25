import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ProductCatalogGuard } from './shared/product-catalog.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [ProductCatalogGuard],
    component: ProductCatalogComponent,
  },
  {
    path: 'workflow',
    loadChildren: () =>
      import('./workflow/workflow.module').then((m) => m.WorkflowModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
