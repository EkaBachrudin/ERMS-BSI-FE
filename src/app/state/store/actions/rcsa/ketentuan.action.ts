import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { KetentuanInterface } from 'src/app/module/rcsa/maintance/tabs/ketentuan/types/ketentuan.interface';

export const KETENTUAN_FETCH_START = '[Ketentuan]START Fetch Ketentuan';
export const KETENTUAN_FETCH_SUCCESS = '[Ketentuan]SUCCSES Fetch Ketentuan';
export const KETENTUAN_FETCH_FAILURE = '[Ketentuan]FAILURE Fetch Ketentuan';

export const KETENTUAN_CREATED_START = '[Ketentuan] Start Create Ketentuan';
export const KETENTUAN_CREATED_SUCCESS = '[Ketentuan] Success Create Ketentuan';
export const KETENTUAN_CREATED_FAILURE = '[Ketentuan] Failure Create Ketentuan';

export const KETENTUAN_UPDATE_START = '[Ketentuan] Start Update Ketentuan';
export const KETENTUAN_UPDATE_SUCCESS = '[Ketentuan] Success Update Ketentuan';
export const KETENTUAN_UPDATE_FAILURE = '[Ketentuan] Failure Update Ketentuan';

export const KETENTUAN_GET = '[Ketentuan] GET Ketentuan';

export const KETENTUAN_DELETE = '[Ketentuan] Deleted Ketentuan';

export class ketentuanFetchStart implements Action {
  readonly type = KETENTUAN_FETCH_START;
  constructor(public page: number,public size : number){}
}

export class ketentuanFetchSuccess implements Action {
  readonly type = KETENTUAN_FETCH_SUCCESS;
  constructor(public payload: KetentuanInterface[]) {}
}

export class ketentuanFetchFailure implements Action {
  readonly type = KETENTUAN_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class ketentuanCreateStart implements Action {
  readonly type = KETENTUAN_CREATED_START;
  constructor(public payload: KetentuanInterface) {}
}

export class ketentuanCreateSuccess implements Action {
  readonly type = KETENTUAN_CREATED_SUCCESS;
  constructor(public payload: KetentuanInterface) {}
}

export class ketentuanCreateFailure implements Action {
  readonly type = KETENTUAN_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class ketentuanUpdateStart implements Action {
  readonly type = KETENTUAN_UPDATE_START;
  constructor(public payload: KetentuanInterface) {}
}

export class ketentuanUpdateSuccess implements Action {
  readonly type = KETENTUAN_UPDATE_SUCCESS;
  constructor(public payload: KetentuanInterface) {}
}

export class ketentuanUpdateFailure implements Action {
  readonly type = KETENTUAN_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class ketentuanGet implements Action {
  readonly type = KETENTUAN_GET;
  constructor(public payload: KetentuanInterface[]) {}
}
export class ketentuanDelete implements Action {
  readonly type = KETENTUAN_DELETE;
  constructor(public payload: KetentuanInterface) {}
}

export type ketentuanActions =
  | ketentuanFetchStart
  | ketentuanFetchSuccess
  | ketentuanFetchFailure
  | ketentuanCreateStart
  | ketentuanCreateSuccess
  | ketentuanCreateFailure
  | ketentuanGet
  | ketentuanUpdateStart
  | ketentuanUpdateSuccess
  | ketentuanUpdateFailure
  | ketentuanDelete;
