import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { IUserDelegate } from 'src/app/models/userDelegate/userDelegate';

export const USERDELEGATE_FETCH_START =
  '[user delegate]START Fetch User Delegate';
export const USERDELEGATE_FETCH_SUCCESS =
  '[user delegate]SUCCSES Fetch User Delegate';
export const USERDELEGATE_FETCH_FAILURE =
  '[user delegate]FAILURE Fetch User Delegate';

export const USERDELEGATE_CREATED_START =
  '[user delegate] Start Create User Delegate';
export const USERDELEGATE_CREATED_SUCCESS =
  '[user delegate] Success Create User Delegate';
export const USERDELEGATE_CREATED_FAILURE =
  '[user delegate] Failure Create User Delegate';

export const USERDELEGATE_UPDATE_START =
  '[user delegate] Start Update User Delegate';
export const USERDELEGATE_UPDATE_SUCCESS =
  '[user delegate] Success Update User Delegate';
export const USERDELEGATE_UPDATE_FAILURE =
  '[user delegate] Failure Update User Delegate';

export const USERDELEGATE_GET = '[user delegate] GET user';

export const USERDELEGATE_DELETE = '[user delegate] Deleted user';

export class userDelegateFetchStart implements Action {
  readonly type = USERDELEGATE_FETCH_START;
}

export class userDelegateFetchSuccess implements Action {
  readonly type = USERDELEGATE_FETCH_SUCCESS;
  constructor(public payload: IUserDelegate[]) {}
}

export class userDelegateFetchFailure implements Action {
  readonly type = USERDELEGATE_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class userDelegateCreateStart implements Action {
  readonly type = USERDELEGATE_CREATED_START;
  constructor(public payload: IUserDelegate) {}
}

export class userDelegateCreateSuccess implements Action {
  readonly type = USERDELEGATE_CREATED_SUCCESS;
  constructor(public payload: IUserDelegate) {}
}

export class userDelegateCreateFailure implements Action {
  readonly type = USERDELEGATE_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class userDelegateUpdateStart implements Action {
  readonly type = USERDELEGATE_UPDATE_START;
  constructor(public payload: IUserDelegate) {}
}

export class userDelegateUpdateSuccess implements Action {
  readonly type = USERDELEGATE_UPDATE_SUCCESS;
  constructor(public payload: IUserDelegate) {}
}

export class userDelegateUpdateFailure implements Action {
  readonly type = USERDELEGATE_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class userDelegateGet implements Action {
  readonly type = USERDELEGATE_GET;
  constructor(public payload: IUserDelegate[]) {}
}
export class userDelegateDelete implements Action {
  readonly type = USERDELEGATE_DELETE;
  constructor(public payload: IUserDelegate) {}
}

export type userDelegateActions =
  | userDelegateFetchStart
  | userDelegateFetchSuccess
  | userDelegateFetchFailure
  | userDelegateCreateStart
  | userDelegateCreateSuccess
  | userDelegateCreateFailure
  | userDelegateGet
  | userDelegateUpdateStart
  | userDelegateUpdateSuccess
  | userDelegateUpdateFailure
  | userDelegateDelete;
