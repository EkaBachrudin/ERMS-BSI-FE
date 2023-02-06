import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { LetInterface } from 'src/app/module/rcsa/maintance/tabs/let/types/let.interface';

export const LET_FETCH_START = '[let]START Fetch Let';
export const LET_FETCH_SUCCESS = '[let]SUCCSES Fetch Let';
export const LET_FETCH_FAILURE = '[let]FAILURE Fetch Let';

export const LET_CREATED_START = '[let] Start Create Let';
export const LET_CREATED_SUCCESS = '[let] Success Create Let';
export const LET_CREATED_FAILURE = '[let] Failure Create Let';

export const LET_UPDATE_START = '[let] Start Update Let';
export const LET_UPDATE_SUCCESS = '[let] Success Update Let';
export const LET_UPDATE_FAILURE = '[let] Failure Update Let';

export const LET_GET = '[let] GET Let';

export const LET_DELETE = '[let] Deleted Let';

export class letFetchStart implements Action {
  readonly type = LET_FETCH_START;
  constructor(public page: number, public size: number) {}
}

export class letFetchSuccess implements Action {
  readonly type = LET_FETCH_SUCCESS;
  constructor(
    public payload: LetInterface[],
    public totalElement:number,  
    public totalPages:number, 
    public currentPage: number, 
    public pageSize:number
    ) {}
}

export class letFetchFailure implements Action {
  readonly type = LET_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class letCreateStart implements Action {
  readonly type = LET_CREATED_START;
  constructor(public payload: LetInterface) {}
}

export class letCreateSuccess implements Action {
  readonly type = LET_CREATED_SUCCESS;
  constructor(public payload: LetInterface) {}
}

export class letCreateFailure implements Action {
  readonly type = LET_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class letUpdateStart implements Action {
  readonly type = LET_UPDATE_START;
  constructor(public payload: LetInterface) {}
}

export class letUpdateSuccess implements Action {
  readonly type = LET_UPDATE_SUCCESS;
  constructor(public payload: LetInterface) {}
}

export class letUpdateFailure implements Action {
  readonly type = LET_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class letGet implements Action {
  readonly type = LET_GET;
  constructor(public payload: LetInterface[]) {}
}
export class letDelete implements Action {
  readonly type = LET_DELETE;
  constructor(public payload: LetInterface) {}
}

export type letActions =
  | letFetchStart
  | letFetchSuccess
  | letFetchFailure
  | letCreateStart
  | letCreateSuccess
  | letCreateFailure
  | letGet
  | letUpdateStart
  | letUpdateSuccess
  | letUpdateFailure
  | letDelete;
