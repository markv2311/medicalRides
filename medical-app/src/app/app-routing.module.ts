import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DispatchMainPageComponent} from './views/dispatch-main-page/dispatch-main-page.component';
import {DispatcherOptionsComponent} from './views/dispatch-main-page/dispatcher-options/dispatcher-options.component';
import {DriverMainPageComponent} from './views/driver-main-page/driver-main-page.component';
import {DriverDetailsPageComponent} from './views/driver-main-page/driver-details-page/driver-details-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dispatch', pathMatch: 'full' },
  { path: 'dispatch', component: DispatchMainPageComponent},
  { path: 'dispatcher-options', component: DispatcherOptionsComponent},
  { path: 'driver', component: DriverMainPageComponent},
  { path: 'driver-details', component: DriverDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DispatchMainPageComponent, DispatcherOptionsComponent,DriverMainPageComponent, DriverDetailsPageComponent];
