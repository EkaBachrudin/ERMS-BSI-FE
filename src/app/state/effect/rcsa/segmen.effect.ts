import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { SegmenService } from 'src/app/mock/services/segmen/segmen.service';
import {
  segmenCreateSuccess,
  segmenFetchSuccess,
  SEGMEN_CREATED_START,
  SEGMEN_FETCH_START,
} from '../../store/actions/rcsa/segmen.action';
import { ISegmen } from 'src/app/models/rcsa/segmen/segmen';

@Injectable()
export class SegmenEffect {
  constructor(
    private actions$: Actions,
    private segmenService: SegmenService
  ) {}

  @Effect()
  fetchDirectorate = this.actions$.pipe(
    ofType(SEGMEN_FETCH_START),
    map(() => {
      var data: ISegmen[] = this.segmenService.getSegmen();
      return new segmenFetchSuccess(data);
    })
  );
  @Effect()
  startCreated = this.actions$.pipe(
    ofType(SEGMEN_CREATED_START),
    map((data: any) => {
      //api
      var response: ISegmen = data.payload;
      return new segmenCreateSuccess(response);
    })
  );
}
