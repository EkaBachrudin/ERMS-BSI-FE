import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
	UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
	constructor(
		private router: Router,
		private location: Location,
		private store: Store<AppState>
	) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
		let roles = JSON.parse(localStorage.getItem("roles"))
		if (roles == route.data['role']) {
			return true;
		}
		if (roles == 'super_user') {
			return true;
		}
		this.router.navigateByUrl("/403");
		return false
	}
}
