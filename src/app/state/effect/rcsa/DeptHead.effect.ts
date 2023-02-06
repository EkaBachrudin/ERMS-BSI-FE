import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
    // DeptHeadCreateSuccess,
    DEPTHEAD_CREATED_START,
    DeptHeadFetchStart,
    DEPTHEAD_FETCH_START,
    DeptHeadFetchSuccess,
    DEPTHEAD_SUBMIT_START,
} from 'src/app/state/store/actions/rcsa/DeptHead.action';

import { map, switchMap } from 'rxjs/operators';
import { IDeptHead } from 'src/app/models/rcsa/DeptHead/DeptHead.model';
import { DeptHeadService } from 'src/app/module/rcsa/dept-head-rcsa/services/dept-head.service';
import { DcorFilterInterface, DetailByIDFilterInterface, postScore } from 'src/app/module/rcsa/dcor-head-rcsa/types/dcor.interface';
import { DcorFetchStart } from '../../store/actions/rcsa/dcor.action';
import { RcsaByIDFetchStart } from '../../store/actions/rcsa/rcsaByID.action';

@Injectable()
export class DeptHeadEffect {
    constructor(private actions$: Actions, private DeptHeadService: DeptHeadService) { }

    // @Effect()
    // fecthDeptHead = this.actions$.pipe(
    //     ofType(DEPTHEAD_FETCH_START),
    //     map(() => {
    //         let data: IDeptHead[] = this.DeptHeadService.getDeptHead();
    //         return new DeptHeadFetchSuccess(data);
    //     })
    // );

    @Effect()
    startCreated = this.actions$.pipe(
        ofType(DEPTHEAD_CREATED_START),
        switchMap((data: any) => {
            let response: postScore = data.payload;
            return this.DeptHeadService.postScore(response).pipe(
                map((data: any) => {
                   let RcsaByIDSetting: DetailByIDFilterInterface = {
                        id: response.idRcsa,
                        page: response.page,
                        size: 10,
                      }
                      new DcorFetchStart({
                        page: response.rcsa,
                        size: 10,
                      })
                    return new RcsaByIDFetchStart(RcsaByIDSetting);
                })
            );
        })
    );
    @Effect()
    startSubmit = this.actions$.pipe(
        ofType(DEPTHEAD_SUBMIT_START),
        switchMap((data: any) => {
            let response: postScore = data.payload;
            return this.DeptHeadService.postSubmit(response).pipe(
                map((data: any) => {
                   let RcsaByIDSetting: any = {
                        page: 0,
                        size: 10,
                      }

                    return new DcorFetchStart(RcsaByIDSetting);
                })
            );
        })
    )
}
