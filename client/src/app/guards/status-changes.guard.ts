import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanChanges {
  permission: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StatusChangesGuard implements CanDeactivate<CanChanges> {
  canDeactivate(component: CanChanges) {
    return component.permission ? component.permission() : true;
  }


}
