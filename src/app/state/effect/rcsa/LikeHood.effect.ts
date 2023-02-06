import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
    LikeHoodCreateSuccess,
    LIKEHOOD_CREATED_START,
    LikeHoodFetchStart,
    LIKEHOOD_FETCH_START,
    LikeHoodFetchSuccess,
} from '../../store/actions/rcsa/LikeHood.action';

import { map, switchMap } from 'rxjs/operators';
import { ILikeHood } from 'src/app/models/rcsa/LikeHood/LikeHood';
import { LikeHoodService } from 'src/app/module/rcsa/maintance/tabs/like-hood/services/like-hood.service';
import { LikelihoodInterface } from 'src/app/module/rcsa/maintance/tabs/like-hood/types/likehood.interface';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';

@Injectable()
export class LikeHoodEffect {
    constructor(private actions$: Actions, private LikeHoodService: LikeHoodService) { }

    @Effect()
  fetchDepartment = this.actions$.pipe(
    ofType(LIKEHOOD_FETCH_START),
    switchMap((response : any) => {
      
      return this.LikeHoodService.getLikelihood(response.page,response.size).pipe(
        map((data: ResponseSuccessInterface<LikelihoodInterface[]>) => {
            return new LikeHoodFetchSuccess(data.payload);
        })
      );
    })
  );
}