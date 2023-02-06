import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { map, switchMap } from 'rxjs/operators';
import {
  keyRiskFetchSuccess,
  KEYRISK_FETCH_START,
} from '../../store/actions/rcsa/keyRisk.action';
import { KeyRiskService } from 'src/app/module/rcsa/maintance/tabs/key-risk/services/key-risk.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { KeyRiskInterface } from 'src/app/module/rcsa/maintance/tabs/key-risk/types/keyrisk.interface';

@Injectable()
export class KeyRIskEffect {
  constructor(
    private actions$: Actions,
    private keyriskService: KeyRiskService
  ) {}

  @Effect()
  fetchKeyRisk = this.actions$.pipe(
    ofType(KEYRISK_FETCH_START),
    switchMap((response: any) => {
      return this.keyriskService.getRisk(response.page, response.size).pipe(
        map((keyRisk: ResponseSuccessInterface<KeyRiskInterface[]>) => {
          return new keyRiskFetchSuccess(keyRisk.payload, keyRisk.pageable.totalElements, keyRisk.pageable.pageNumber, keyRisk.pageable.pageSize);
        })
      );
    })
  );
}
