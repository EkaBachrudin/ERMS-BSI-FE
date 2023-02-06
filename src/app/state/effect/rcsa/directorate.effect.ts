import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { directorateFetchSuccess, DIRECTORATE_FETCH_START } from '../../store/actions/rcsa/directorate.action';

import { map, switchMap } from 'rxjs/operators';
import { DirectorateService } from 'src/app/module/rcsa/user-management/services/directorate.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { DirectorateFilterInterface, DirectorateInterface } from 'src/app/module/rcsa/user-management/types/directorate.interface';

@Injectable()
export class DirectorateEffect {
  constructor(
    private actions$: Actions,
    private directorateService: DirectorateService
  ) {}

  @Effect()
  fetchDepartment = this.actions$.pipe(
    ofType(DIRECTORATE_FETCH_START),
    switchMap((response: any) => {

      return this.directorateService.getDirectorate(response.page, response.size).pipe(
        map((data: ResponseSuccessInterface<DirectorateInterface[]>) => {
          return new directorateFetchSuccess(
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
