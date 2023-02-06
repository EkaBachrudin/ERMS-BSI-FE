import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { KeyProcessjaringanService } from 'src/app/mock/services/key-process/KeyProcessJaringan.service';
import { keyProcessJaringanCreateSuccess, keyProcessJaringanFetchSuccess, KEYPROCESS_JARINGAN_CREATED_START, KEYPROCESS_JARINGAN_FETCH_START } from '../../store/actions/rcsa/keyProcessJaringan.action';
import { IKeyProcessJaringan } from 'src/app/models/rcsa/key-process/keyproccessJaringan';


@Injectable()
export class KeyProcessJaringanEffect {
  constructor(
    private actions$: Actions,
    private keyProcessJaringanService: KeyProcessjaringanService
  ) {}

  @Effect()
  fetchKeyprocess = this.actions$.pipe(
    ofType(KEYPROCESS_JARINGAN_FETCH_START),
    map(() => {
      var data: IKeyProcessJaringan[] = this.keyProcessJaringanService.getkeyprocess();
      return new keyProcessJaringanFetchSuccess(data);
    })
  );
  @Effect()
  startCreated = this.actions$.pipe(
    ofType(KEYPROCESS_JARINGAN_CREATED_START),
    map((data: any) => {
      //api
      var response: IKeyProcessJaringan = data.payload;
      return new keyProcessJaringanCreateSuccess(response);
    })
  );
}
