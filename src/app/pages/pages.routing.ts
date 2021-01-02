import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {path: '', component: DashboardComponent, data:{title: 'Dashboard'}},
      {path: 'progress', component: ProgressComponent, data:{title: 'ProgressBar'}},
      {path: 'grafica1', component: Graficas1Component, data:{title: 'Gráficas'}},
      {path: 'account-settings', component: AccountSettingsComponent, data:{title: 'Ajustes'}},
      {path: 'promises', component: PromisesComponent, data:{title: 'Promesas'}},
      {path: 'rxjs', component: RxjsComponent, data:{title: 'RxJs'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
