import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  GROUP_FETCH_START,
  groupFetchSuccess,
} from '../../store/actions/rcsa/group.action';

import { map, switchMap } from 'rxjs/operators';
import { GroupService } from 'src/app/module/rcsa/user-management/services/group.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { GroupInterface } from 'src/app/module/rcsa/user-management/types/group.interface';
import { requestPaginationByID } from 'src/app/shared/components/Interface/paginationFilterByID.interface';

@Injectable()
export class GroupEffect {
  constructor(private actions$: Actions, private groupService: GroupService) {}

  @Effect()
  fetch = this.actions$.pipe(
    ofType(GROUP_FETCH_START),
    switchMap((response: any) => {

      return this.groupService.getGroup(response.page, response.size).pipe(
        map((data: ResponseSuccessInterface<GroupInterface[]>) => {
          return new groupFetchSuccess(
            data.payload, 
            data.pageable.totalElements, 
            data.pageable.totalPages, 
            data.pageable.pageNumber, 
            data.pageable.pageSize
          );
        })

      );
    })
  );
}
