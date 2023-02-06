import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { ISegmen } from 'src/app/models/rcsa/segmen/segmen';

export const SEGMEN_FETCH_START = '[segmen]START Fetch Segmen';
export const SEGMEN_FETCH_SUCCESS = '[segmen]SUCCSES Fetch Segmen';
export const SEGMEN_FETCH_FAILURE = '[segmen]FAILURE Fetch Segmen';

export const SEGMEN_CREATED_START = '[segmen] Start Create Segmen';
export const SEGMEN_CREATED_SUCCESS = '[segmen] Success Create Segmen';
export const SEGMEN_CREATED_FAILURE = '[segmen] Failure Create Segmen';

export const SEGMEN_UPDATE_START = '[segmen] Start Update Segmen';
export const SEGMEN_UPDATE_SUCCESS = '[segmen] Success Update Segmen';
export const SEGMEN_UPDATE_FAILURE = '[segmen] Failure Update Segmen';

export const SEGMEN_GET = '[segmen] GET Segmen';

export const SEGMEN_DELETE = '[segmen] Deleted Segmen';

export class segmenFetchStart implements Action {
  readonly type = SEGMEN_FETCH_START;
}

export class segmenFetchSuccess implements Action {
  readonly type = SEGMEN_FETCH_SUCCESS;
  constructor(public payload: ISegmen[]) {}
}

export class segmenFetchFailure implements Action {
  readonly type = SEGMEN_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class segmenCreateStart implements Action {
  readonly type = SEGMEN_CREATED_START;
  constructor(public payload: ISegmen) {}
}

export class segmenCreateSuccess implements Action {
  readonly type = SEGMEN_CREATED_SUCCESS;
  constructor(public payload: ISegmen) {}
}

export class segmenCreateFailure implements Action {
  readonly type = SEGMEN_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class segmenUpdateStart implements Action {
  readonly type = SEGMEN_UPDATE_START;
  constructor(public payload: ISegmen) {}
}

export class segmenUpdateSuccess implements Action {
  readonly type = SEGMEN_UPDATE_SUCCESS;
  constructor(public payload: ISegmen) {}
}

export class segmenUpdateFailure implements Action {
  readonly type = SEGMEN_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class segmenGet implements Action {
  readonly type = SEGMEN_GET;
  constructor(public payload: ISegmen[]) {}
}
export class segmenDelete implements Action {
  readonly type = SEGMEN_DELETE;
  constructor(public payload: ISegmen) {}
}

export type segmenActions =
  | segmenFetchStart
  | segmenFetchSuccess
  | segmenFetchFailure
  | segmenCreateStart
  | segmenCreateSuccess
  | segmenCreateFailure
  | segmenGet
  | segmenUpdateStart
  | segmenUpdateSuccess
  | segmenUpdateFailure
  | segmenDelete;
