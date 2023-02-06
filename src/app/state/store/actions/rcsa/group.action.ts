import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { GroupInterface } from 'src/app/module/rcsa/user-management/types/group.interface';
import { requestPaginationByID } from 'src/app/shared/components/Interface/paginationFilterByID.interface';

export const GROUP_FETCH_START = '[group]START Fetch Group';
export const GROUP_FETCH_SUCCESS = '[group]SUCCSES Fetch Group';
export const GROUP_FETCH_FAILURE = '[group]FAILURE Fetch Group';

export const GROUP_CREATED_START = '[group] Start Create Group';
export const GROUP_CREATED_SUCCESS = '[group] Success Create Group';
export const GROUP_CREATED_FAILURE = '[group] Failure Create Group';

export const GROUP_GET = '[group] GET group';
export const GROUP_UPDATE = '[group] Updated group';
export const GROUP_DELETE = '[group] Deleted group';

export class groupFetchStart implements Action {
  readonly type = GROUP_FETCH_START;
  constructor(public page: number,public size : number){}
}

export class groupFetchSuccess implements Action {
  readonly type = GROUP_FETCH_SUCCESS;
  totalElements: any;
  constructor(public payload: GroupInterface[], 
    public totalElement:number,  
    public totalPages:number, 
    public currentPage: number, 
    public pageSize:number) {}
}

export class groupFetchFailure implements Action {
  readonly type = GROUP_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class groupCreateStart implements Action {
  readonly type = GROUP_CREATED_START;
  constructor(public payload: GroupInterface) {}
}

export class groupCreateSuccess implements Action {
  readonly type = GROUP_CREATED_SUCCESS;
  constructor(public payload: GroupInterface) {}
}

export class groupCreateFailure implements Action {
  readonly type = GROUP_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class groupGet implements Action {
  readonly type = GROUP_GET;
  constructor(public payload: GroupInterface[]) {}
}
export class groupUpdate implements Action {
  readonly type = GROUP_UPDATE;
  constructor(public payload: GroupInterface) {}
}
export class groupDelete implements Action {
  readonly type = GROUP_DELETE;
  constructor(public payload: GroupInterface) {}
}

export type GroupActions =
  | groupFetchStart
  | groupFetchSuccess
  | groupFetchFailure
  | groupCreateStart
  | groupCreateSuccess
  | groupCreateFailure
  | groupGet
  | groupUpdate
  | groupDelete;
