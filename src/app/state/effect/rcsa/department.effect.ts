import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';


import { map, switchMap } from 'rxjs/operators';
import { departmentFetchSuccess, DEPARTMENT_FETCH_START } from '../../store/actions/rcsa/department.action';
import { DepartmentService } from 'src/app/module/rcsa/user-management/services/department.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { DepartmentInterface } from 'src/app/module/rcsa/user-management/types/department.interface';
import { requestPaginationByID } from 'src/app/shared/components/Interface/paginationFilterByID.interface';

@Injectable()
export class DepartmentEffect {
  constructor(
    private actions$: Actions,
    private departmentservice: DepartmentService
  ) { }

  @Effect()
  fetchDepartment = this.actions$.pipe(
    ofType(DEPARTMENT_FETCH_START),
    switchMap((response: any) => {

      return this.departmentservice.getDeparment(response.page, response.size).pipe(
        map((data: ResponseSuccessInterface<DepartmentInterface[]>) => {
          return new departmentFetchSuccess(
            data.payload, 
            data.pageable.totalElements, 
            data.pageable.totalPages, 
            data.pageable.pageNumber, 
            data.pageable.pageSize);
        })

      );
    })
  );
}
