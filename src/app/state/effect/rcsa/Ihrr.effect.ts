import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  IHRR_FETCH_START,
  IhrrFetchSuccess,
} from '../../store/actions/rcsa/Ihrr.action';

import { filter, map, switchMap } from 'rxjs/operators';
import { IhrrService } from 'src/app/module/rcsa/maintance/tabs/ihrr/services/ihrr.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { IhrrFilterInterface, IhrrInterface } from 'src/app/module/rcsa/maintance/tabs/ihrr/types/ihrr.interface';

@Injectable()
export class IhrrEffect {
  constructor(private actions$: Actions, private IhrrService: IhrrService) { }

  @Effect()
  fetchdata = this.actions$.pipe(
    ofType(IHRR_FETCH_START),
    switchMap((response: any) => {
      let filter : IhrrFilterInterface = response.filter
      return this.IhrrService.getIhrr(filter).pipe(
        map((data: ResponseSuccessInterface<IhrrInterface[]>) => {
          return new IhrrFetchSuccess(data.payload, data.pageable.totalElements, data.pageable.pageSize);
        })
      );
    })
  );
}