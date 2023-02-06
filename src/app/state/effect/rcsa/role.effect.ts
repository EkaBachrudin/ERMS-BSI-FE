import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import {
  ROLE_FETCH_START,
  ROLE_CREATED_START,
  roleCreateSuccess,
  roleFetchSuccess,
} from '../../store/actions/rcsa/role.action';

import { map, switchMap } from 'rxjs/operators';
import { IRole } from 'src/app/models/rcsa/role/role.model';
import { RoleService } from 'src/app/module/rcsa/user-management/services/role.service';
import { requestPagination } from 'src/app/shared/components/Interface/PaginationFilter.interface';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { Roles } from 'src/app/module/rcsa/user-management/types/role.interface';

@Injectable()
export class RoleEffect {
  constructor(private actions$: Actions, private roleService: RoleService) { }

  @Effect()
  fetchDirectorate = this.actions$.pipe(
    ofType(ROLE_FETCH_START),
    switchMap((response: any) => {
      let filter: requestPagination = response.filter
      return this.roleService.getRoles(filter).pipe(
        map((group: ResponseSuccessInterface<Roles[]>) => {
          return new roleFetchSuccess(group.payload, group.pageable.totalElements, group.pageable.pageNumber, group.pageable.pageSize);
        })
      );
    })
  );
}
