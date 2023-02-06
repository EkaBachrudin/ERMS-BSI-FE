import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { map, switchMap } from 'rxjs/operators';
import {
  ketentuanCreateSuccess,
  ketentuanFetchSuccess,
  KETENTUAN_CREATED_START,
  KETENTUAN_FETCH_START,
} from '../../store/actions/rcsa/ketentuan.action';
import { IKetentuan } from 'src/app/models/rcsa/ketentuan/ketentuan';
import { KetentuanService } from 'src/app/module/rcsa/maintance/tabs/ketentuan/services/ketentuan.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { KetentuanInterface } from 'src/app/module/rcsa/maintance/tabs/ketentuan/types/ketentuan.interface';

@Injectable()
export class KetentuanEffect {
  constructor(
    private actions$: Actions,
    private ketentuanService: KetentuanService
  ) {}

  @Effect()
  fetchDepartment = this.actions$.pipe(
    ofType(KETENTUAN_FETCH_START),
    switchMap((response : any) => {
      
      return this.ketentuanService.getKetentuan(response.page,response.size).pipe(
        map((data: ResponseSuccessInterface<KetentuanInterface[]>) => {
            return new ketentuanFetchSuccess(data.payload);
        })
      );
    })
  );
}
