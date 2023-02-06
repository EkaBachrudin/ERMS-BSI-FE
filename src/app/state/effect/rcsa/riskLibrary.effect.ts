import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { map, switchMap } from 'rxjs/operators';
import { GET_RCSA_BY_ID_FETCH_START, riskLibraryCreateSuccess, riskLibraryDetailFetchSuccess, riskLibraryFetchStart, riskLibraryFetchSuccess, RISKLIBRARY_CREATED_START, RISKLIBRARY_DETAIL_FETCH_START, RISKLIBRARY_FETCH_START, RISKLIBRARY_GET_START, riskRegisterFetchSuccess, RISK_REGISTER_FETCH_START, SUBMIT_RCSA_PUT } from '../../store/actions/rcsa/riskLibrary.action';
import { IRiskLibrary } from 'src/app/models/riskLibrary/riskLibrary.model';
import { RiskLibraryService } from 'src/app/module/rcsa/maintance/tabs/risk-library/services/risk-library.service';
import { ResponseSuccessInterface } from 'src/app/shared/types/responseSuccess.interface';
import { RiskLibraryFilterInterface, RiskLibraryInterface } from 'src/app/module/rcsa/maintance/tabs/risk-library/types/risklib.interface';
import { RiskLibraryDetailFilterInterface, RiskLibraryDetailInterface } from 'src/app/module/rcsa/maintance/tabs/risk-library/types/riskLibraryDetail.interface';
import { GetRiskRegisterInterface, RiskRegisterFilterInterface } from 'src/app/module/rcsa/maintance/tabs/risk-library/types/getRiskRegister.interface';

@Injectable()
export class RiskLibrbrayEffect {
  constructor(
    private actions$: Actions,
    private keyLibraryService: RiskLibraryService
  ) {}

  //Risk Library
  @Effect()
  fetchRiskLibrary = this.actions$.pipe(
    ofType(RISKLIBRARY_FETCH_START),
    switchMap((response : any) => {
      let filter : RiskLibraryFilterInterface = response.filter
      return this.keyLibraryService.getRiskLibrary(filter).pipe(
        map((riskLib: ResponseSuccessInterface<RiskLibraryInterface[]>) => {
            return new riskLibraryFetchSuccess(riskLib.payload, riskLib.pageable.totalElements, riskLib.pageable.pageNumber, riskLib.pageable.pageSize,riskLib.pageable.totalElements);
        })
      );
    })
  );

  //Risk Library Detail
  @Effect()
  fetchRiskLibraryDetail = this.actions$.pipe(
    ofType(RISKLIBRARY_DETAIL_FETCH_START),
    switchMap((response : any) => {
      let filter : RiskLibraryDetailFilterInterface = response.filter

      return this.keyLibraryService.getRiskLibraryDetails(filter).pipe(
        map((riskLib: ResponseSuccessInterface<RiskLibraryDetailInterface[]>) => {
            return new riskLibraryDetailFetchSuccess(riskLib.payload, riskLib.pageable.totalElements, riskLib.pageable.pageNumber, riskLib.pageable.pageSize,riskLib.pageable.totalElements);
        })
      );
    })
  );

  //RCSA Submit
  @Effect()
  rcsaSubmit = this.actions$.pipe(
    ofType(SUBMIT_RCSA_PUT),
    switchMap((response : any) => {
      console.log(response)
      return this.keyLibraryService.PutRiskLibrary(response.payload).pipe(map((e : any) =>{
       let  filter : RiskLibraryFilterInterface = {
          quarter : "",
          page :0,
          size : 10,
          yearOf : "",
          group : ""
        }
        return new riskLibraryFetchStart(filter)
      }));
    })
  );

  @Effect()
  fetchRiskRegsiter = this.actions$.pipe(
    ofType(RISK_REGISTER_FETCH_START),
    switchMap((response: any) => {
      return this.keyLibraryService.getRiskRegister(response.page, response.size).pipe(
          map((data: ResponseSuccessInterface<GetRiskRegisterInterface[]>) => {
            return new riskRegisterFetchSuccess(
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
