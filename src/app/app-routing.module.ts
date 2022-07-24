import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';

const routes: Routes = [
  {
    path: '',
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
