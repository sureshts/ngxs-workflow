import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule, STORAGE_ENGINE } from '@ngxs/storage-plugin';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import {
  NgxsRouterPluginModule,
  RouterStateSerializer,
} from '@ngxs/router-plugin';
import { WorkflowModule } from './workflow/workflow.module';
import { CustomRouterStateSerializer } from './shared/models/router-state.serializer';
import { WorkflowState } from './workflow/store/state/workflow.state';
import { NgXSStorageEngine } from './workflow/store/shared/ngxs-storage';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductCatalogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([WorkflowState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: ['workflow'],
    }),
    WorkflowModule,
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    {
      provide: STORAGE_ENGINE,
      useClass: NgXSStorageEngine,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
