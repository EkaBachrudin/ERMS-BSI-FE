import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import {
  letCreateSuccess,
  letFetchSuccess,
  LET_CREATED_START,
  LET_FETCH_START,
} from 'src/app/state/store/actions/rcsa/let.action';
import { LostEventTypeAction } from 'src/app/mock/services/let/lostEventType.service';
import { ILostEventType } from 'src/app/models/rcsa/let/let';
import { LetService } from 'src/app/module/rcsa/maintance/tabs/let/services/let.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { LetInterface } from 'src/app/module/rcsa/maintance/tabs/let/types/let.interface';

@Injectable()
export class LetEffect {
  constructor(private actions$: Actions, private letService: LetService) {}


  @Effect()
  fetchLet = this.actions$.pipe(
    ofType(LET_FETCH_START),
    switchMap((response: any) => {

      return this.letService.getLet(response.page, response.size).pipe(
        map((data: ResponseSuccessInterface<LetInterface[]>) => {
          return new letFetchSuccess(
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
