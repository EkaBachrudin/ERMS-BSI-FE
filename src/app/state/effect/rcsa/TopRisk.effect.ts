import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ITopRisk } from 'src/app/models/rcsa/TopRisk/TopRisk.model';
import {
    TopRiskCreateSuccess,
    TOPRISK_CREATED_START,
    TopRiskFetchStart,
    TOPRISK_FETCH_START,
    TopRiskFetchSuccess,
} from '../../store/actions/rcsa/TopRisk.action';
import { TopRiskService } from 'src/app/module/rcsa/maintance/tabs/top-risk/services/top-risk.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { TopRiskInterface } from 'src/app/module/rcsa/maintance/tabs/top-risk/types/top-risk.interface';
import { requestPagination } from 'src/app/shared/components/Interface/PaginationFilter.interface';

@Injectable()
export class TopRiskEffect {
    constructor(private actions$: Actions, private topRiskService: TopRiskService) { }

    @Effect()
    fecthTopRisk = this.actions$.pipe(
        ofType(TOPRISK_FETCH_START),
        switchMap((response: any) => {
            let filter : requestPagination = response.filter
            return this.topRiskService.getToprisk(filter).pipe(
                map((data: ResponseSuccessInterface<TopRiskInterface[]>) => {
                    return new TopRiskFetchSuccess(
                        data.payload,
                        data.pageable.totalPages,
                        data.pageable.pageNumber,
                        data.pageable.pageSize,
                        data.pageable.totalElements,
                    );
                })
            );
        })
    );

    @Effect()
    startCreated = this.actions$.pipe(
        ofType(TOPRISK_CREATED_START),
        map((data: any) => {
            var response: ITopRisk = data.payload;
            return new TopRiskCreateSuccess(response);
        })
    );
}