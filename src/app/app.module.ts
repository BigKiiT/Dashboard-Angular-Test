import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMonitoringComponent } from './list-monitoring/list-monitoring.component';
import { MainMonitoringComponent } from './main-monitoring/main-monitoring.component';
import { ChartModule } from 'angular2-chartjs';
import { DetailMonitoringComponent } from './detail-monitoring/detail-monitoring.component';
import { ChartMonitoringComponent } from './chart-monitoring/chart-monitoring.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMonitoringComponent,
    MainMonitoringComponent,
    DetailMonitoringComponent,
    ChartMonitoringComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
