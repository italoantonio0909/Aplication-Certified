import { AuthenticationService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) { }
  canActivate(): boolean {
    if (this.authService.isLogged()) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;

    }
  }


}
