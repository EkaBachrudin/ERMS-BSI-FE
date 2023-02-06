import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { SettingTopRiskService } from 'src/app/mock/services/setting-top-risk/settingTopRating.service';
import {
  settingTopRiskCreateSuccess,
  settingTopRiskFetchSuccess,
  SETTING_TOP_RISK_CREATED_START,
  SETTING_TOP_RISK_FETCH_START,
} from '../../store/actions/rcsa/settingTopRisk.action';
import { ISettingTopRisk } from 'src/app/models/rcsa/setting-top-risk/settingTopRisk';

@Injectable()
export class SettingTopRiskEffect {
  constructor(
    private actions$: Actions,
    private settingTopRiskService: SettingTopRiskService
  ) {}

  @Effect()
  fetchDirectorate = this.actions$.pipe(
    ofType(SETTING_TOP_RISK_FETCH_START),
    map(() => {
      var data: ISettingTopRisk[] =
        this.settingTopRiskService.getSettingTopRisk();
      return new settingTopRiskFetchSuccess(data);
    })
  );
  @Effect()
  startCreated = this.actions$.pipe(
    ofType(SETTING_TOP_RISK_CREATED_START),
    map((data: any) => {
      //api
      var response: ISettingTopRisk = data.payload;
      return new settingTopRiskCreateSuccess(response);
    })
  );
}
