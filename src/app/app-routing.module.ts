import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMonitoringComponent } from './main-monitoring/main-monitoring.component';

const routes: Routes = [
  { path:'', redirectTo:'/', pathMatch:'full'},
  { path: '', component: MainMonitoringComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }