import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
    ControlCreateSuccess,
    CONTROL_CREATED_START,
    ControlFetchStart,
    CONTROL_FETCH_START,
    ControlFetchSuccess,
} from '../../store/actions/rcsa/Control.action';

import { map, switchMap } from 'rxjs/operators';
import { IControl } from 'src/app/models/rcsa/Control/Control.model';
import { ControlService } from 'src/app/module/rcsa/maintance/tabs/control/services/control.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { ControlInterface } from 'src/app/module/rcsa/maintance/tabs/control/types/control.interface';

@Injectable()
export class ControlEffect {
    constructor(private actions$: Actions, private ControlService: ControlService) { }

    @Effect()
  fetchDepartment = this.actions$.pipe(
    ofType(CONTROL_FETCH_START),
    switchMap((response : any) => {
      
      return this.ControlService.getControl(response.page,response.size).pipe(
        map((data: ResponseSuccessInterface<ControlInterface[]>) => {
            return new ControlFetchSuccess(data.payload);
        })
      );
    })
  );
}