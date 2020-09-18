import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  intercept(request, next) {
    const requestCloneIncludeAuthorization = request.clone({
      setHeaders: {
        Authorization: `token ${this.authService.auth_token()}`
      }
    });
    return next.handle(requestCloneIncludeAuthorization);
  }

  constructor(private authService: AuthenticationService) { }
}