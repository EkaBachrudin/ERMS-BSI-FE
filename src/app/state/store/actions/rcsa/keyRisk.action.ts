import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { KeyRiskInterface } from 'src/app/module/rcsa/maintance/tabs/key-risk/types/keyrisk.interface';

export const KEYRISK_FETCH_START = '[key risk]START Fetch Key Risk';
export const KEYRISK_FETCH_SUCCESS = '[key risk]SUCCSES Fetch Key Risk';
export const KEYRISK_FETCH_FAILURE = '[key risk]FAILURE Fetch Key Risk';

export const KEYRISK_CREATED_START = '[key risk] Start Create Key Risk';
export const KEYRISK_CREATED_SUCCESS = '[key risk] Success Create Key Risk';
export const KEYRISK_CREATED_FAILURE = '[key risk] Failure Create Key Risk';

export const KEYRISK_UPDATE_START = '[key risk] Start Update Key Risk';
export const KEYRISK_UPDATE_SUCCESS = '[key risk] Success Update Key Risk';
export const KEYRISK_UPDATE_FAILURE = '[key risk] Failure Update Key Risk';

export const KEYRISK_GET = '[key risk] GET Key Risk';

export const KEYRISK_DELETE = '[key risk] Deleted Key Risk';

export class keyRiskFetchStart implements Action {
  readonly type = KEYRISK_FETCH_START;
  constructor(public page: number, public size: number) {}
}

export class keyRiskFetchSuccess implements Action {
  readonly type = KEYRISK_FETCH_SUCCESS;
  constructor(public payload: KeyRiskInterface[], public totalPages: number, public currentPage:number, public pageSize: number) {}
}

export class keyRiskFetchFailure implements Action {
  readonly type = KEYRISK_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class keyRiskCreateStart implements Action {
  readonly type = KEYRISK_CREATED_START;
  constructor(public payload: KeyRiskInterface) {}
}

export class keyRiskCreateSuccess implements Action {
  readonly type = KEYRISK_CREATED_SUCCESS;
  constructor(public payload: KeyRiskInterface) {}
}

export class keyRiskCreateFailure implements Action {
  readonly type = KEYRISK_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class keyRiskUpdateStart implements Action {
  readonly type = KEYRISK_UPDATE_START;
  constructor(public payload: KeyRiskInterface) {}
}

export class keyRiskUpdateSuccess implements Action {
  readonly type = KEYRISK_UPDATE_SUCCESS;
  constructor(public payload: KeyRiskInterface) {}
}

export class keyRiskUpdateFailure implements Action {
  readonly type = KEYRISK_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class keyRiskGet implements Action {
  readonly type = KEYRISK_GET;
  constructor(public payload: KeyRiskInterface[]) {}
}
export class keyRiskDelete implements Action {
  readonly type = KEYRISK_DELETE;
  constructor(public payload: KeyRiskInterface) {}
}

export type keyRiskActions =
  | keyRiskFetchStart
  | keyRiskFetchSuccess
  | keyRiskFetchFailure
  | keyRiskCreateStart
  | keyRiskCreateSuccess
  | keyRiskCreateFailure
  | keyRiskGet
  | keyRiskUpdateStart
  | keyRiskUpdateSuccess
  | keyRiskUpdateFailure
  | keyRiskDelete;
