import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { Roles } from 'src/app/module/rcsa/user-management/types/role.interface';
import { requestPagination } from 'src/app/shared/components/Interface/PaginationFilter.interface';

export const ROLE_FETCH_START = '[role]START Fetch role';
export const ROLE_FETCH_SUCCESS = '[role]SUCCSES Fetch role';
export const ROLE_FETCH_FAILURE = '[role]FAILURE Fetch role';

export const ROLE_CREATED_START = '[role] Start Create role';
export const ROLE_CREATED_SUCCESS = '[role] Success Create role';
export const ROLE_CREATED_FAILURE = '[role] Failure Create role';

export const ROLE_UPDATE_START = '[role] Start Update role';
export const ROLE_UPDATE_SUCCESS = '[role] Success Update role';
export const ROLE_UPDATE_FAILURE = '[role] Failure Update role';

export const ROLE_GET = '[directorate] GET Directorates';

export const ROLE_DELETE = '[directorate] Deleted Directorates';

export class roleFetchStart implements Action {
  readonly type = ROLE_FETCH_START;
  constructor(public filter: requestPagination) {}
}

export class roleFetchSuccess implements Action {
  readonly type = ROLE_FETCH_SUCCESS;
  constructor(public payload: Roles[], public totalPages: number, public currentPage: number, public pageSize:number) {}
}

export class roleFetchFailure implements Action {
  readonly type = ROLE_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class roleCreateStart implements Action {
  readonly type = ROLE_CREATED_START;
  constructor(public payload: Roles) {}
}

export class roleCreateSuccess implements Action {
  readonly type = ROLE_CREATED_SUCCESS;
  constructor(public payload: Roles) {}
}

export class roleCreateFailure implements Action {
  readonly type = ROLE_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class roleUpdateStart implements Action {
  readonly type = ROLE_UPDATE_START;
  constructor(public payload: Roles) {}
}

export class roleUpdateSuccess implements Action {
  readonly type = ROLE_UPDATE_SUCCESS;
  constructor(public payload: Roles) {}
}

export class roleUpdateFailure implements Action {
  readonly type = ROLE_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class roleGet implements Action {
  readonly type = ROLE_GET;
  constructor(public payload: Roles[]) {}
}
export class roleDelete implements Action {
  readonly type = ROLE_DELETE;
  constructor(public payload: Roles) {}
}

export type roleActions =
  | roleFetchStart
  | roleFetchSuccess
  | roleFetchFailure
  | roleCreateStart
  | roleCreateSuccess
  | roleCreateFailure
  | roleGet
  | roleUpdateStart
  | roleUpdateSuccess
  | roleUpdateFailure
  | roleDelete;
