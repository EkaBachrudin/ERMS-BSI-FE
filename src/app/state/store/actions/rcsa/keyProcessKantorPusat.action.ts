import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { IKeyProcessKantorPusat } from 'src/app/models/rcsa/key-process/keyprocessKantorPusat';
import { KeyPocessInterface } from 'src/app/module/rcsa/maintance/tabs/key-process/types/key-process.interface';

export const KEYPROCESS_KANTOR_PUSAT_FETCH_START = '[key process kantor pusat]START Fetch Key Process';
export const KEYPROCESS_KANTOR_PUSAT_FETCH_SUCCESS =
  '[key process kantor pusat]SUCCSES Fetch Key Process';
export const KEYPROCESS_KANTOR_PUSAT_FETCH_FAILURE =
  '[key process kantor pusat]FAILURE Fetch Key Process';

export const KEYPROCESS_KANTOR_PUSAT_CREATED_START =
  '[key process kantor pusat] Start Create Key Process';
export const KEYPROCESS_KANTOR_PUSAT_CREATED_SUCCESS =
  '[key process kantor pusat] Success Create Key Process';
export const KEYPROCESS_KANTOR_PUSAT_CREATED_FAILURE =
  '[key process kantor pusat] Failure Create Key Process';

export const KEYPROCESS_KANTOR_PUSAT_UPDATE_START = '[key process kantor pusat] Start Update Key Process';
export const KEYPROCESS_KANTOR_PUSAT_UPDATE_SUCCESS =
  '[key process kantor pusat] Success Update Key Process';
export const KEYPROCESS_KANTOR_PUSAT_UPDATE_FAILURE =
  '[key process kantor pusat] Failure Update Key Process';

export const KEYPROCESS_KANTOR_PUSAT_GET = '[key process kantor pusat] GET Key Processs';

export const KEYPROCESS_KANTOR_PUSAT_DELETE = '[key process kantor pusat] Deleted Key Processs';

export class keyProcessKantorPusatFetchStart implements Action {
  readonly type = KEYPROCESS_KANTOR_PUSAT_FETCH_START;
  constructor(public page: number,public size : number){}
}

export class keyProcessKantorPusatFetchSuccess implements Action {
  readonly type = KEYPROCESS_KANTOR_PUSAT_FETCH_SUCCESS;
  constructor(public payload: KeyPocessInterface[], public totalPages:number, public currentPage: number, public pageSize:number) {}
  
}

export class keyProcessKantorPusatFetchFailure implements Action {
  readonly type = KEYPROCESS_KANTOR_PUSAT_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class keyProcessKantorPusatCreateStart implements Action {
  readonly type = KEYPROCESS_KANTOR_PUSAT_CREATED_START;
  constructor(public payload: IKeyProcessKantorPusat) {}
}

export class keyProcessKantorPusatCreateSuccess implements Action {
  readonly type = KEYPROCESS_KANTOR_PUSAT_CREATED_SUCCESS;
  constructor(public payload: IKeyProcessKantorPusat) {}
}

export class keyProcessKantorPusatCreateFailure implements Action {
  readonly type = KEYPROCESS_KANTOR_PUSAT_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class keyProcessKantorPusatUpdateStart implements Action {
  readonly type = KEYPROCESS_KANTOR_PUSAT_UPDATE_START;
  constructor(public payload: IKeyProcessKantorPusat) {}
}

export class keyProcessKantorPusatUpdateSuccess implements Action {
  readonly type = KEYPROCESS_KANTOR_PUSAT_UPDATE_SUCCESS;
  constructor(public payload: IKeyProcessKantorPusat) {}
}

export class keyProcessKantorPusatUpdateFailure implements Action {
  readonly type = KEYPROCESS_KANTOR_PUSAT_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class keyProcessKantorPusatGet implements Action {
  readonly type = KEYPROCESS_KANTOR_PUSAT_GET;
  constructor(public payload: IKeyProcessKantorPusat[]) {}
}
export class keyProcessKantorPusatDelete implements Action {
  readonly type = KEYPROCESS_KANTOR_PUSAT_DELETE;
  constructor(public payload: IKeyProcessKantorPusat) {}
}

export type keyProcessKantorPusatActions =
  | keyProcessKantorPusatFetchStart
  | keyProcessKantorPusatFetchSuccess
  | keyProcessKantorPusatFetchFailure
  | keyProcessKantorPusatCreateStart
  | keyProcessKantorPusatCreateSuccess
  | keyProcessKantorPusatCreateFailure
  | keyProcessKantorPusatGet
  | keyProcessKantorPusatUpdateStart
  | keyProcessKantorPusatUpdateSuccess
  | keyProcessKantorPusatUpdateFailure
  | keyProcessKantorPusatDelete;
