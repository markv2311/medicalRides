import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DispatchMainPageComponent} from './views/dispatch-main-page/dispatch-main-page.component';
import {DriverMainPageComponent} from './views/driver-main-page/driver-main-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dispatch', pathMatch: 'full' },
  { path: 'dispatch', component: DispatchMainPageComponent},
  { path: 'driver', component: DriverMainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DispatchMainPageComponent, DriverMainPageComponent];