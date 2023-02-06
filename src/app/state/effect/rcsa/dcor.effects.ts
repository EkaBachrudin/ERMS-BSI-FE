import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
    DcorCreateSuccess,
    DCOR_CREATED_START,
    DcorFetchStart,
    DCOR_FETCH_START,
    DcorFetchSuccess,
    DCOR_APPROVE_START,
    DCOR_REJECT_START,
} from 'src/app/state/store/actions/rcsa/dcor.action';

import { map, switchMap } from 'rxjs/operators';
import { DcorFilterInterface, DcorInterface } from 'src/app/module/rcsa/dcor-head-rcsa/types/dcor.interface';
import { DcorHeadService } from 'src/app/module/rcsa/dcor-head-rcsa/services/dcor-head.service';
import { ResponseSuccessInterface, ResponseSuccessInterfaceDcor } from 'src/app/shared/types/responseSuccess.interface';

@Injectable()
export class DcorEffect {
    constructor(private actions$: Actions, private DcorService: DcorHeadService) { }

    @Effect()
    fecthDcor = this.actions$.pipe(
        ofType(DCOR_FETCH_START),
        switchMap((response: any) => {
            let filter : DcorFilterInterface = response.filter
            return this.DcorService.getDcor(filter).pipe(
              map((data: ResponseSuccessInterfaceDcor<DcorInterface[]>) => {
                return new DcorFetchSuccess(data.payload, data.pageable.total_elements, data.pageable.page_number, data.pageable.page_size,data.pageable.total_elements);
              })
            );
        })
    );
    @Effect()
    approved = this.actions$.pipe(
      ofType(DCOR_APPROVE_START),
      switchMap((response: any) => {
          let filter : DcorFilterInterface = response.payload
          return this.DcorService.approveRcsa(filter).pipe(
            map((data: any) => {
              let RcsaByIDSetting: any = {
                page: 0,
                size: 10,
              }
            return new DcorFetchStart(RcsaByIDSetting);
            })
          );
      })
  );
  @Effect()
    reject = this.actions$.pipe(
      ofType(DCOR_REJECT_START),
      switchMap((response: any) => {
          let filter : any = {
            "noted" : response.payload.noted,
            "id" : response.payload.id
          }
          return this.DcorService.rejectRcsa(filter).pipe(
            map((data: any) => {
              let RcsaByIDSetting: any = {
                page: 0,
                size: 10,
              }
            return new DcorFetchStart(RcsaByIDSetting);
            })
          );
      })
  );
}
