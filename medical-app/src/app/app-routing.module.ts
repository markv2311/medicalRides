import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DispatchMainPageComponent} from './views/dispatch-main-page/dispatch-main-page.component';
import {DispatchJobQueueComponent} from "./views/dispatch-main-page/dispatch-job-queue/dispatch-job-queue.component";

const routes: Routes = [
  { path: 'dispatch', component: DispatchMainPageComponent},
  { path: 'driver', component: DispatchJobQueueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DispatchMainPageComponent, DispatchJobQueueComponent];
