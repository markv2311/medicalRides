import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DispatchMainPageComponent } from './views/dispatch-main-page/dispatch-main-page.component';
import { BottomNavComponent } from './widgets/bottom-nav/bottom-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { DispatchActiveDriversComponent} from './views/dispatch-main-page/dispatch-active-drivers/dispatch-active-drivers.component';
import { DriverMainPageComponent } from './views/driver-main-page/driver-main-page.component';
import {DispatchJobQueueComponent} from './views/dispatch-main-page/dispatch-job-queue/dispatch-job-queue.component';
import { DriverDetailsPageComponent } from './views/driver-main-page/driver-details-page/driver-details-page.component';
import { DispatcherOptionsComponent } from './views/dispatch-main-page/dispatcher-options/dispatcher-options.component';

@NgModule({
  declarations: [
    AppComponent,
    DispatchMainPageComponent,
    BottomNavComponent,
    routingComponents,
    DispatchActiveDriversComponent,
    DriverMainPageComponent,
    DispatchJobQueueComponent,
    DriverDetailsPageComponent,
    DispatcherOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }