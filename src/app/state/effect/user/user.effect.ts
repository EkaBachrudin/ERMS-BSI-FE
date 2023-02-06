import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';

import { map, switchMap } from 'rxjs/operators';
import {
  userCreateSuccess,
  userFetchSuccess,
  USER_CREATED_START,
  USER_FETCH_START,
} from '../../store/actions/user/user.action';
import { UserService } from 'src/app/module/rcsa/user-management/services/user.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { UserInterface } from 'src/app/module/rcsa/user-management/types/user.interface';
import { requestPagination } from 'src/app/shared/components/Interface/PaginationFilter.interface';
@Injectable()
export class userEffect {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  fetctData = this.actions$.pipe(
    ofType(USER_FETCH_START),
    switchMap((response : any) => {
      let filter: requestPagination = response.filter
      return this.userService.getUser(filter).pipe(
        map((data: ResponseSuccessInterface<UserInterface[]>) => {
            return new userFetchSuccess(data.payload, data.pageable.totalElements, data.pageable.pageNumber, data.pageable.pageSize);
        })
      );
    })
  );
}
