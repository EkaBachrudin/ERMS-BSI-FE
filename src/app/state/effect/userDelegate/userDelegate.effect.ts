import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { UserDelegateService } from 'src/app/mock/services/userDelegate/userDelegate.service';
import {
  userDelegateCreateSuccess,
  userDelegateFetchSuccess,
  USERDELEGATE_CREATED_START,
  USERDELEGATE_FETCH_START,
} from '../../store/actions/userDelegate/userDelegate.action';
import { IUserDelegate } from 'src/app/models/userDelegate/userDelegate';

@Injectable()
export class userDelegateEffect {
  constructor(
    private actions$: Actions,
    private service: UserDelegateService
  ) {}

  @Effect()
  fetchDelegate = this.actions$.pipe(
    ofType(USERDELEGATE_FETCH_START),
    map(() => {
      var data: IUserDelegate[] = this.service.getUserDelegate();
      return new userDelegateFetchSuccess(data);
    })
  );
  @Effect()
  startCreated = this.actions$.pipe(
    ofType(USERDELEGATE_CREATED_START),
    map((data: any) => {
      //api
      var response: IUserDelegate = data.payload;
      return new userDelegateCreateSuccess(response);
    })
  );
  // @Effect()
  // startUpdate = this.actions$.pipe(
  //   ofType(USER_UPDATE_START),
  //   map((data: any) => {
  //     //api
  //     var response: IDelegate = data.payload;
  //     return new directorateUpdateSuccess(response);
  //   })
  // );
}
