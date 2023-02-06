import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { IKeyProcessJaringan } from 'src/app/models/rcsa/key-process/keyproccessJaringan';

export const KEYPROCESS_JARINGAN_FETCH_START = '[key process jaringan]START Fetch Key Process';
export const KEYPROCESS_JARINGAN_FETCH_SUCCESS =
  '[key process jaringan]SUCCSES Fetch Key Process';
export const KEYPROCESS_JARINGAN_FETCH_FAILURE =
  '[key process jaringan]FAILURE Fetch Key Process';

export const KEYPROCESS_JARINGAN_CREATED_START =
  '[key process jaringan] Start Create Key Process';
export const KEYPROCESS_JARINGAN_CREATED_SUCCESS =
  '[key process jaringan] Success Create Key Process';
export const KEYPROCESS_JARINGAN_CREATED_FAILURE =
  '[key process jaringan] Failure Create Key Process';

export const KEYPROCESS_JARINGAN_UPDATE_START = '[key process jaringan] Start Update Key Process';
export const KEYPROCESS_JARINGAN_UPDATE_SUCCESS =
  '[key process jaringan] Success Update Key Process';
export const KEYPROCESS_JARINGAN_UPDATE_FAILURE =
  '[key process jaringan] Failure Update Key Process';

export const KEYPROCESS_JARINGAN_GET = '[key process jaringan] GET Key Processs';

export const KEYPROCESS_JARINGAN_DELETE = '[key process jaringan] Deleted Key Processs';

export class keyProcessJaringanFetchStart implements Action {
  readonly type = KEYPROCESS_JARINGAN_FETCH_START;
}

export class keyProcessJaringanFetchSuccess implements Action {
  readonly type = KEYPROCESS_JARINGAN_FETCH_SUCCESS;
  constructor(public payload: IKeyProcessJaringan[]) {}
}

export class keyProcessJaringanFetchFailure implements Action {
  readonly type = KEYPROCESS_JARINGAN_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class keyProcessJaringanCreateStart implements Action {
  readonly type = KEYPROCESS_JARINGAN_CREATED_START;
  constructor(public payload: IKeyProcessJaringan) {}
}

export class keyProcessJaringanCreateSuccess implements Action {
  readonly type = KEYPROCESS_JARINGAN_CREATED_SUCCESS;
  constructor(public payload: IKeyProcessJaringan) {}
}

export class keyProcessJaringanCreateFailure implements Action {
  readonly type = KEYPROCESS_JARINGAN_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class keyProcessJaringanUpdateStart implements Action {
  readonly type = KEYPROCESS_JARINGAN_UPDATE_START;
  constructor(public payload: IKeyProcessJaringan) {}
}

export class keyProcessJaringanUpdateSuccess implements Action {
  readonly type = KEYPROCESS_JARINGAN_UPDATE_SUCCESS;
  constructor(public payload: IKeyProcessJaringan) {}
}

export class keyProcessJaringanUpdateFailure implements Action {
  readonly type = KEYPROCESS_JARINGAN_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class keyProcessJaringanGet implements Action {
  readonly type = KEYPROCESS_JARINGAN_GET;
  constructor(public payload: IKeyProcessJaringan[]) {}
}
export class keyProcessJaringanDelete implements Action {
  readonly type = KEYPROCESS_JARINGAN_DELETE;
  constructor(public payload: IKeyProcessJaringan) {}
}

export type keyProcessJaringanActions =
  | keyProcessJaringanFetchStart
  | keyProcessJaringanFetchSuccess
  | keyProcessJaringanFetchFailure
  | keyProcessJaringanCreateStart
  | keyProcessJaringanCreateSuccess
  | keyProcessJaringanCreateFailure
  | keyProcessJaringanGet
  | keyProcessJaringanUpdateStart
  | keyProcessJaringanUpdateSuccess
  | keyProcessJaringanUpdateFailure
  | keyProcessJaringanDelete;
