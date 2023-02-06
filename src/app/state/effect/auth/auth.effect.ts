import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { map, switchMap } from 'rxjs/operators';
import { SetItem } from 'src/app/utils/helpers';
import {
  AuthenticateStart,
  AuthenticateSuccess,
  AUTHENTICATE_START,
  AUTHENTICATE_SUCCESS,
  LoginFail,
} from '../../store/actions/auth/auth.actions';

import { Auth, IAuthSuccess } from 'src/app/module/auth/types/auth.interface';
import { Response } from 'src/app/models/response.interface';
import { AuthService } from 'src/app/module/auth/services/auth.service';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authServices$: AuthService
  ) {}
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AUTHENTICATE_START),
    switchMap((authData: any) => {
      return this.authServices$.login(authData.payload).pipe(
        map((auth: Response<any>) => {
          if (!auth.success) {
            return new LoginFail(auth.errorMessages[0]);
          }
          let data = new Auth(
            auth.payload.nip,
            auth.payload.idUsers,
            auth.payload.accessToken,
            auth.payload.usersDetails

          );
          return new AuthenticateSuccess(data);
        })
      );

      // var data = this.authServices$.LoginAuth(authData.payload.email,authData.payload.password)
      // if(data == undefined){
      //   return new LoginFail("Data Not Found")
      // }
    })
  );
  @Effect({ dispatch: false })
  authSuccess = this.actions$.pipe(
    ofType(AUTHENTICATE_SUCCESS),
    map((authData: any) => {
      SetItem('users', authData.payload);
      SetItem('roles', authData.payload.payload.rcsaRoles);
      const role = authData.payload.payload.rcsaRoles;
      switch (role) {
        case Role.USER_ADMIN:
          this.router.navigate(['/rcsa/user']);
          break;
        case Role.RISK_ADMIN:
          this.router.navigate(['/rcsa/maintenance']);
          break;
        case Role.DEPT_HEAD:
          this.router.navigate(['/rcsa/dept-head']);
          break;
        case Role.DCOR:
          this.router.navigate(['/rcsa/dcor-head']);
          break;
        case Role.GROUP_HEAD:
          this.router.navigate(['/rcsa/group-head']);
          break;
        case Role.SORH:
          this.router.navigate(['/rcsa/sorh']);
          break;
      }
    })
  );
}
