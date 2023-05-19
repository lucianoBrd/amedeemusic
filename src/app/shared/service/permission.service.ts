import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { ConfigDB } from '../data/config';

@Injectable()
export class PermissionsService {

    constructor(
        private router: Router,
    ) {
    }

    canActivate(): boolean {
        if (ConfigDB.inMaintenance) {
            this.router.navigate(['/maintenance']);
            return false;
        } else {
            return true;
        }
    }

}

export const AuthGuardMaintenance: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): boolean => {
    return inject(PermissionsService).canActivate();
}