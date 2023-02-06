import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { map, switchMap } from 'rxjs/operators';
import {
  keyControlCreateSuccess,
  keyControlFetchSuccess,
  KEY_CONTROL_CREATED_START,
  KEY_CONTROL_FETCH_START,
} from '../../store/actions/rcsa/keyControl.action';
import { IKeyControl } from 'src/app/models/rcsa/key-control/keyControl';
import { KeyControlService } from 'src/app/module/rcsa/maintance/tabs/key-control/services/key-control.service';
import { keyControlInterface } from 'src/app/module/rcsa/maintance/tabs/key-control/types/key-control.interface';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';

@Injectable()
export class KeyControlEffect {
  constructor(
    private actions$: Actions,
    private keyControlService: KeyControlService
  ) {}

  @Effect()
  fetchDepartment = this.actions$.pipe(
    ofType(KEY_CONTROL_FETCH_START),
    switchMap((response : any) => {
      
      return this.keyControlService.getKeyControl(response.page,response.size).pipe(
        map((keyControl: ResponseSuccessInterface<keyControlInterface[]>) => {
            return new keyControlFetchSuccess(keyControl.payload, keyControl.pageable.totalElements, keyControl.pageable.pageNumber, keyControl.pageable.pageSize);
        })

      );
    })
  );
}
