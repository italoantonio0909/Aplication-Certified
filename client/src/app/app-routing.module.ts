import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './users/users.module#UsersModule',
   
  },

  {
    path: 'certified',
    loadChildren: './certified/certified.module#CertifiedModule',
    canActivate:[AuthenticatedGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
