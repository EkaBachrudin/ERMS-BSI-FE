import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { ISettingTopRisk } from 'src/app/models/rcsa/setting-top-risk/settingTopRisk';

export const SETTING_TOP_RISK_FETCH_START =
  '[Set Top Risk]START Fetch Set Top Risk';
export const SETTING_TOP_RISK_FETCH_SUCCESS =
  '[Set Top Risk]SUCCSES Fetch Set Top Risk';
export const SETTING_TOP_RISK_FETCH_FAILURE =
  '[Set Top Risk]FAILURE Fetch Set Top Risk';

export const SETTING_TOP_RISK_CREATED_START =
  '[Set Top Risk] Start Create Set Top Risk';
export const SETTING_TOP_RISK_CREATED_SUCCESS =
  '[Set Top Risk] Success Create Set Top Risk';
export const SETTING_TOP_RISK_CREATED_FAILURE =
  '[Set Top Risk] Failure Create Set Top Risk';

export const SETTING_TOP_RISK_UPDATE_START =
  '[Set Top Risk] Start Update Set Top Risk';
export const SETTING_TOP_RISK_UPDATE_SUCCESS =
  '[Set Top Risk] Success Update Set Top Risk';
export const SETTING_TOP_RISK_UPDATE_FAILURE =
  '[Set Top Risk] Failure Update Set Top Risk';

export const SETTING_TOP_RISK_GET = '[Set Top Risk] GET Set Top Risks';

export const SETTING_TOP_RISK_DELETE = '[Set Top Risk] Deleted Set Top Risks';

export class settingTopRiskFetchStart implements Action {
  readonly type = SETTING_TOP_RISK_FETCH_START;
}

export class settingTopRiskFetchSuccess implements Action {
  readonly type = SETTING_TOP_RISK_FETCH_SUCCESS;
  constructor(public payload: ISettingTopRisk[]) {}
}

export class settingTopRiskFetchFailure implements Action {
  readonly type = SETTING_TOP_RISK_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class settingTopRiskCreateStart implements Action {
  readonly type = SETTING_TOP_RISK_CREATED_START;
  constructor(public payload: ISettingTopRisk) {}
}

export class settingTopRiskCreateSuccess implements Action {
  readonly type = SETTING_TOP_RISK_CREATED_SUCCESS;
  constructor(public payload: ISettingTopRisk) {}
}

export class settingTopRiskCreateFailure implements Action {
  readonly type = SETTING_TOP_RISK_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class settingTopRiskUpdateStart implements Action {
  readonly type = SETTING_TOP_RISK_UPDATE_START;
  constructor(public payload: ISettingTopRisk) {}
}

export class settingTopRiskUpdateSuccess implements Action {
  readonly type = SETTING_TOP_RISK_UPDATE_SUCCESS;
  constructor(public payload: ISettingTopRisk) {}
}

export class settingTopRiskUpdateFailure implements Action {
  readonly type = SETTING_TOP_RISK_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class settingTopRiskGet implements Action {
  readonly type = SETTING_TOP_RISK_GET;
  constructor(public payload: ISettingTopRisk[]) {}
}
export class settingTopRiskDelete implements Action {
  readonly type = SETTING_TOP_RISK_DELETE;
  constructor(public payload: ISettingTopRisk) {}
}

export type settingTopRiskActions =
  | settingTopRiskFetchStart
  | settingTopRiskFetchSuccess
  | settingTopRiskFetchFailure
  | settingTopRiskCreateStart
  | settingTopRiskCreateSuccess
  | settingTopRiskCreateFailure
  | settingTopRiskGet
  | settingTopRiskUpdateStart
  | settingTopRiskUpdateSuccess
  | settingTopRiskUpdateFailure
  | settingTopRiskDelete;
