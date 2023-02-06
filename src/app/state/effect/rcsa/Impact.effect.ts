import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
    ImpactCreateSuccess,
    IMPACT_CREATED_START,
    ImpactFetchStart,
    IMPACT_FETCH_START,
    ImpactFetchSuccess,
} from '../../store/actions/rcsa/Impact.action';

import { map, switchMap } from 'rxjs/operators';
import { IImpact } from 'src/app/models/rcsa/Impact/Impact.model';
import { ImpactService } from 'src/app/module/rcsa/maintance/tabs/impact/services/impact.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { ImpactInterface } from 'src/app/module/rcsa/maintance/tabs/impact/types/impact.interface';

@Injectable()
export class ImpactEffect {
    constructor(private actions$: Actions, private ImpactService: ImpactService) { }

    @Effect()
    fetchDepartment = this.actions$.pipe(
        ofType(IMPACT_FETCH_START),
        switchMap((response : any) => {
        
        return this.ImpactService.getImpact(response.page,response.size).pipe(
            map((data: ResponseSuccessInterface<ImpactInterface[]>) => {
                return new ImpactFetchSuccess(data.payload);
            })
        );
        })
    );
}