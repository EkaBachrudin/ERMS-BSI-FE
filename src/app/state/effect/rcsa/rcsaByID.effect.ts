import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
    RcsaByIDCreateSuccess,
    RCSA_BY_ID_CREATED_START,
    RcsaByIDFetchStart,
    RCSA_BY_ID_FETCH_START,
    RcsaByIDFetchSuccess,
} from 'src/app/state/store/actions/rcsa/rcsaByID.action';

import { map, switchMap } from 'rxjs/operators';
import { DcorHeadService } from 'src/app/module/rcsa/dcor-head-rcsa/services/dcor-head.service';
import { DetailByIDFilterInterface, DetailByIDInterface } from 'src/app/module/rcsa/dcor-head-rcsa/types/dcor.interface';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';

@Injectable()
export class RcsaByIDEffect {
    constructor(private actions$: Actions, private DcorService: DcorHeadService) { }

    @Effect()
    fecthDcor = this.actions$.pipe(
        ofType(RCSA_BY_ID_FETCH_START),
        switchMap((response: any) => {
            let filter : DetailByIDFilterInterface = response.filter
            return this.DcorService.getDcorByID(filter).pipe(
              map((data: ResponseSuccessInterface<DetailByIDInterface[]>) => {
                return new RcsaByIDFetchSuccess(data.payload, data.pageable.totalElements, data.pageable.pageNumber, data.pageable.pageSize,data.pageable.totalElements);
              })
            );
        })
    );



    @Effect()
    startCreated = this.actions$.pipe(
        ofType(RCSA_BY_ID_CREATED_START),
        map((data: any) => {
            let response: DetailByIDInterface = data.payload;
            return new RcsaByIDCreateSuccess(response);
        })
    );
}
