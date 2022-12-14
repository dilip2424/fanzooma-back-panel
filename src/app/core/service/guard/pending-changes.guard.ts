import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}


@Injectable({
  providedIn: 'root'
})


export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
    // if there are no pending changes, just allow deactivation; else confirm first
    if (component.canDeactivate()) {
      return true;
    } else {
      if (confirm('WARNING: You have unsaved changes. Press Cancel to go back and save these changes, or OK to lose these changes.')) {
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('channel_id');
        localStorage.removeItem('chenaldata');
        localStorage.removeItem('access_token');
        return true;
      }
    }

    // NOTE: this warning message will only be shown when navigating elsewhere within your angular app;
    // when navigating away from your angular app, the browser will show a generic warning message
    // see http://stackoverflow.com/a/42207299/7307355

  }
}