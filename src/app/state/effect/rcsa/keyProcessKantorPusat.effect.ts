import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';

import { map, switchMap } from 'rxjs/operators';
import { KeyProcessKantorPusatService } from 'src/app/mock/services/key-process/keyProcessKantorPusat.service';
import {
  keyProcessKantorPusatCreateSuccess,
  keyProcessKantorPusatFetchSuccess,
  KEYPROCESS_KANTOR_PUSAT_CREATED_START,
  KEYPROCESS_KANTOR_PUSAT_FETCH_START,
} from '../../store/actions/rcsa/keyProcessKantorPusat.action';
import { IKeyProcessKantorPusat } from 'src/app/models/rcsa/key-process/keyprocessKantorPusat';
import { KeyProcessService } from 'src/app/module/rcsa/maintance/tabs/key-process/services/key-process.service';
import { KeyPocessInterface } from 'src/app/module/rcsa/maintance/tabs/key-process/types/key-process.interface';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';

@Injectable()
export class KeyProcessKantorPusatEffect {
  constructor(
    private actions$: Actions,
    private keyProcessService: KeyProcessService
  ) { }

  @Effect()
  fetchDepartment = this.actions$.pipe(
    ofType(KEYPROCESS_KANTOR_PUSAT_FETCH_START),
    switchMap((response: any) => {

      return this.keyProcessService.getKeyprocess(response.page, response.size).pipe(
        map((keyprocess: ResponseSuccessInterface<KeyPocessInterface[]>) => {
          return new keyProcessKantorPusatFetchSuccess(keyprocess.payload, keyprocess.pageable.totalElements, keyprocess.pageable.pageNumber, keyprocess.pageable.pageSize);
        })

      );
    })
  );
}
