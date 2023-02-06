import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { UserInterface } from 'src/app/module/rcsa/user-management/types/user.interface';
import { requestPagination } from 'src/app/shared/components/Interface/PaginationFilter.interface';

export const USER_FETCH_START = '[user]START Fetch User';
export const USER_FETCH_SUCCESS = '[user]SUCCSES Fetch User';
export const USER_FETCH_FAILURE = '[user]FAILURE Fetch User';

export const USER_CREATED_START = '[user] Start Create User';
export const USER_CREATED_SUCCESS = '[user] Success Create User';
export const USER_CREATED_FAILURE = '[user] Failure Create User';

export const USER_UPDATE_START = '[user] Start Update User';
export const USER_UPDATE_SUCCESS = '[user] Success Update User';
export const USER_UPDATE_FAILURE = '[user] Failure Update User';

export const USER_GET = '[user] GET user';

export const USER_DELETE = '[user] Deleted user';

export class userFetchStart implements Action {
  readonly type = USER_FETCH_START;
  constructor(public filter: requestPagination){}
}

export class userFetchSuccess implements Action {
  readonly type = USER_FETCH_SUCCESS;
  constructor(public payload: UserInterface[], public totalPages: number, public currentPage: number, public pageSize:number) {}
}

export class userFetchFailure implements Action {
  readonly type = USER_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class userCreateStart implements Action {
  readonly type = USER_CREATED_START;
  constructor(public payload: UserInterface) {}
}

export class userCreateSuccess implements Action {
  readonly type = USER_CREATED_SUCCESS;
  constructor(public payload: UserInterface) {}
}

export class userCreateFailure implements Action {
  readonly type = USER_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class userUpdateStart implements Action {
  readonly type = USER_UPDATE_START;
  constructor(public payload: UserInterface) {}
}

export class userUpdateSuccess implements Action {
  readonly type = USER_UPDATE_SUCCESS;
  constructor(public payload: UserInterface) {}
}

export class userUpdateFailure implements Action {
  readonly type = USER_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class userGet implements Action {
  readonly type = USER_GET;
  constructor(public payload: UserInterface[]) {}
}
export class userDelete implements Action {
  readonly type = USER_DELETE;
  constructor(public payload: UserInterface) {}
}

export type userActions =
  | userFetchStart
  | userFetchSuccess
  | userFetchFailure
  | userCreateStart
  | userCreateSuccess
  | userCreateFailure
  | userGet
  | userUpdateStart
  | userUpdateSuccess
  | userUpdateFailure
  | userDelete;
