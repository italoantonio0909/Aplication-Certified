import { NavigationComponent } from './../shared/navigation/navigation.component';
import { AreaAdministratorComponent } from './administrator/area-administrator/area-administrator.component';
import { AreaCertifiedComponent } from './certified/area-certified/area-certified.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './citizen/area/area.component';
import { AuthenticatedGuard } from '../guards/authenticated.guard';


const routes: Routes = [

  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: '', component: DashboardComponent,canActivate:[AuthenticatedGuard] },
    ]
  },
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent,canActivate:[AuthenticatedGuard] },
    ]
  },

  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'area-certified', component: AreaCertifiedComponent,canActivate:[AuthenticatedGuard] },
    ]
  },

  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'area-citizen', component: AreaComponent,canActivate:[AuthenticatedGuard]},
    ]
  },
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'area-administrator', component: AreaAdministratorComponent,canActivate:[AuthenticatedGuard ]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertifiedRoutingModule { }
