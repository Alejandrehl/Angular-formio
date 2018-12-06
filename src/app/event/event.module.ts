import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RegisterModule } from './register/register.module';

import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from 'angular-formio/resource';
import { ResourceComponent } from './resource/resource.component';
import { ViewComponent } from './view/view.component';

const eventRoutes: Routes = FormioResourceRoutes({
  resource: ResourceComponent,
  view: ViewComponent
});
eventRoutes[2].children.push({
  path: 'registrations',
  loadChildren: () => RegisterModule
});
@NgModule({
  declarations: [ResourceComponent, ViewComponent],
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes()),
    RouterModule.forChild(eventRoutes)
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'event',
      form: 'event'
    }}
  ]
})
export class EventModule { }
