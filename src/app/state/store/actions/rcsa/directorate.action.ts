import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { DirectorateFilterInterface, DirectorateInterface } from 'src/app/module/rcsa/user-management/types/directorate.interface';

export const DIRECTORATE_FETCH_START = '[directorate]START Fetch Directorate';
export const DIRECTORATE_FETCH_SUCCESS =
  '[directorate]SUCCSES Fetch Directorate';
export const DIRECTORATE_FETCH_FAILURE =
  '[directorate]FAILURE Fetch Directorate';

export const DIRECTORATE_CREATED_START =
  '[directorate] Start Create Directorate';
export const DIRECTORATE_CREATED_SUCCESS =
  '[directorate] Success Create Directorate';
export const DIRECTORATE_CREATED_FAILURE =
  '[directorate] Failure Create Directorate';

export const DIRECTORATE_UPDATE_START =
  '[directorate] Start Update Directorate';
export const DIRECTORATE_UPDATE_SUCCESS =
  '[directorate] Success Update Directorate';
export const DIRECTORATE_UPDATE_FAILURE =
  '[directorate] Failure Update Directorate';

export const DIRECTORATE_GET = '[directorate] GET Directorates';

export const DIRECTORATE_DELETE = '[directorate] Deleted Directorates';

export class directorateFetchStart implements Action {
  readonly type = DIRECTORATE_FETCH_START;
  constructor(public page: number,public size : number){}
}

export class directorateFetchSuccess implements Action {
  readonly type = DIRECTORATE_FETCH_SUCCESS;
  constructor(
    public payload: DirectorateInterface[], 
    public totalElement:number,  
    public totalPages:number, 
    public currentPage: number, 
    public pageSize:number) {}
}

export class directorateFetchFailure implements Action {
  readonly type = DIRECTORATE_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class directorateCreateStart implements Action {
  readonly type = DIRECTORATE_CREATED_START;
  constructor(public payload: DirectorateInterface) {}
}

export class directorateCreateSuccess implements Action {
  readonly type = DIRECTORATE_CREATED_SUCCESS;
  constructor(public payload: DirectorateInterface) {}
}

export class directorateCreateFailure implements Action {
  readonly type = DIRECTORATE_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class directorateUpdateStart implements Action {
  readonly type = DIRECTORATE_UPDATE_START;
  constructor(public payload: DirectorateInterface) {}
}

export class directorateUpdateSuccess implements Action {
  readonly type = DIRECTORATE_UPDATE_SUCCESS;
  constructor(public payload: DirectorateInterface) {}
}

export class directorateUpdateFailure implements Action {
  readonly type = DIRECTORATE_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class directorateGet implements Action {
  readonly type = DIRECTORATE_GET;
  constructor(public payload: DirectorateInterface[]) {}
}
export class directorateDelete implements Action {
  readonly type = DIRECTORATE_DELETE;
  constructor(public payload: DirectorateInterface) {}
}

export type directorateActions =
  | directorateFetchStart
  | directorateFetchSuccess
  | directorateFetchFailure
  | directorateCreateStart
  | directorateCreateSuccess
  | directorateCreateFailure
  | directorateGet
  | directorateUpdateStart
  | directorateUpdateSuccess
  | directorateUpdateFailure
  | directorateDelete;
