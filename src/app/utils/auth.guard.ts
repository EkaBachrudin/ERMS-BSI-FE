import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
	UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';

import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private location: Location,
		private store: Store<AppState>
	) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		router: RouterStateSnapshot
	): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
		let user = localStorage.getItem("users")
		if(user != null && router.url != "/login"){
			return true;
		}else if(user != null && router.url == "/login"){
			this.router.navigateByUrl("/dashboard/all");
			return false;	
		}else if(user == null && router.url == "/login"){
			return true;
		}
		this.location.back();
        return false
	}
}
