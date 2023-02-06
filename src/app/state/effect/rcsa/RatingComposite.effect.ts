import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  RatingCompositeFetchStart,
  RATINGCOMPOSITE_FETCH_START,
  RatingCompositeFetchSuccess,
  RatingCompositeCreateSuccess,
  RATINGCOMPOSITE_CREATED_START
} from '../../store/actions/rcsa/RatingComposite.action';
import { map, switchMap } from 'rxjs/operators';
import { RatingCompositeService } from 'src/app/module/rcsa/maintance/tabs/rating-composite/services/rating-composite.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { RatingCompositeFilterInterface, RatingCompositeInterface } from 'src/app/module/rcsa/maintance/tabs/rating-composite/types/ratingComposite.interface';

@Injectable()
export class RatingCompositeEffect {
  constructor(private actions$: Actions, private ratingCompositeService: RatingCompositeService) { }

  @Effect()
  fetchDepartment = this.actions$.pipe(
    ofType(RATINGCOMPOSITE_FETCH_START),
    switchMap((response: any) => {
      let filter : RatingCompositeFilterInterface = response.filter
      return this.ratingCompositeService.getRatingComposite(
        filter
      ).pipe(
        map((department: ResponseSuccessInterface<RatingCompositeInterface[]>) => {
          return new RatingCompositeFetchSuccess(department.payload, department.pageable.totalElements, department.pageable.pageNumber, department.pageable.pageSize);
        })
      );
    })
  );
}