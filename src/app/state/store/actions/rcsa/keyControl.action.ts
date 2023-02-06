import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { IKeyControl } from 'src/app/models/rcsa/key-control/keyControl';
import { keyControlInterface } from 'src/app/module/rcsa/maintance/tabs/key-control/types/key-control.interface';

export const KEY_CONTROL_FETCH_START = '[Key Control]START Fetch key control';
export const KEY_CONTROL_FETCH_SUCCESS =
  '[Key Control]SUCCSES Fetch key control';
export const KEY_CONTROL_FETCH_FAILURE =
  '[Key Control]FAILURE Fetch key control';

export const KEY_CONTROL_CREATED_START =
  '[Key Control] Start Create key control';
export const KEY_CONTROL_CREATED_SUCCESS =
  '[Key Control] Success Create key control';
export const KEY_CONTROL_CREATED_FAILURE =
  '[Key Control] Failure Create key control';

export const KEY_CONTROL_UPDATE_START =
  '[Key Control] Start Update key control';
export const KEY_CONTROL_UPDATE_SUCCESS =
  '[Key Control] Success Update key control';
export const KEY_CONTROL_UPDATE_FAILURE =
  '[Key Control] Failure Update key control';

export const KEY_CONTROL_GET = '[Key Control] GET key control';

export const KEY_CONTROL_DELETE = '[Key Control] Deleted key control';

export class keyControlFetchStart implements Action {
  readonly type = KEY_CONTROL_FETCH_START;
  constructor(public page: number,public size : number){}

}

export class keyControlFetchSuccess implements Action {
  readonly type = KEY_CONTROL_FETCH_SUCCESS;
  constructor(public payload: keyControlInterface[], public totalPages: number, public currentPage: number, public pageSize:number) {}
}

export class keyControlFetchFailure implements Action {
  readonly type = KEY_CONTROL_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class keyControlCreateStart implements Action {
  readonly type = KEY_CONTROL_CREATED_START;
  constructor(public payload: IKeyControl) {}
}

export class keyControlCreateSuccess implements Action {
  readonly type = KEY_CONTROL_CREATED_SUCCESS;
  constructor(public payload: IKeyControl) {}
}

export class keyControlCreateFailure implements Action {
  readonly type = KEY_CONTROL_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class keyControlUpdateStart implements Action {
  readonly type = KEY_CONTROL_UPDATE_START;
  constructor(public payload: IKeyControl) {}
}

export class keyControlUpdateSuccess implements Action {
  readonly type = KEY_CONTROL_UPDATE_SUCCESS;
  constructor(public payload: IKeyControl) {}
}

export class keyControlUpdateFailure implements Action {
  readonly type = KEY_CONTROL_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class keyControlGet implements Action {
  readonly type = KEY_CONTROL_GET;
  constructor(public payload: IKeyControl[]) {}
}
export class keyControlDelete implements Action {
  readonly type = KEY_CONTROL_DELETE;
  constructor(public payload: IKeyControl) {}
}

export type keyControlActions =
  | keyControlFetchStart
  | keyControlFetchSuccess
  | keyControlFetchFailure
  | keyControlCreateStart
  | keyControlCreateSuccess
  | keyControlCreateFailure
  | keyControlGet
  | keyControlUpdateStart
  | keyControlUpdateSuccess
  | keyControlUpdateFailure
  | keyControlDelete;
