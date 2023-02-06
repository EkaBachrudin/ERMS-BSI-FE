import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { DepartmentInterface } from 'src/app/module/rcsa/user-management/types/department.interface';
import { requestPaginationByID } from 'src/app/shared/components/Interface/paginationFilterByID.interface';
export const DEPARTMENT_FETCH_START = '[department]START Fetch Department';
export const DEPARTMENT_FETCH_SUCCESS =
  '[department]SUCCSES Fetch Department';
export const DEPARTMENT_FETCH_FAILURE =
  '[department]FAILURE Fetch Department';

export const DEPARTMENT_CREATED_START =
  '[department] Start Create Department';
export const DEPARTMENT_CREATED_SUCCESS =
  '[department] Success Create Department';
export const DEPARTMENT_CREATED_FAILURE =
  '[department] Failure Create Department';

export const DEPARTMENT_UPDATE_START =
  '[department] Start Update Department';
export const DEPARTMENT_UPDATE_SUCCESS =
  '[department] Success Update Department';
export const DEPARTMENT_UPDATE_FAILURE =
  '[department] Failure Update Department';

export const DEPARTMENT_GET = '[department] GET Department';

export const DEPARTMENT_DELETE = '[department] Deleted Department';

export class departmentFetchStart implements Action {
  readonly type = DEPARTMENT_FETCH_START;
  constructor(public page: number,public size : number){}
}

export class departmentFetchSuccess implements Action {
  readonly type = DEPARTMENT_FETCH_SUCCESS;
  constructor(
    public payload: DepartmentInterface[], 
    public totalElement:number,  
    public totalPages:number, 
    public currentPage: number, 
    public pageSize:number) {}
}

export class departmentFetchFailure implements Action {
  readonly type = DEPARTMENT_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class departmentCreateStart implements Action {
  readonly type = DEPARTMENT_CREATED_START;
  constructor(public payload: DepartmentInterface) {}
}

export class departmentCreateSuccess implements Action {
  readonly type = DEPARTMENT_CREATED_SUCCESS;
  constructor(public payload: DepartmentInterface) {}
}

export class departmentCreateFailure implements Action {
  readonly type = DEPARTMENT_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class departmentUpdateStart implements Action {
  readonly type = DEPARTMENT_UPDATE_START;
  constructor(public payload: DepartmentInterface) {}
}

export class departmentUpdateSuccess implements Action {
  readonly type = DEPARTMENT_UPDATE_SUCCESS;
  constructor(public payload: DepartmentInterface) {}
}

export class departmentUpdateFailure implements Action {
  readonly type = DEPARTMENT_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class departmentGet implements Action {
  readonly type = DEPARTMENT_GET;
  constructor(public payload: DepartmentInterface[]) {}
}
export class departmentDelete implements Action {
  readonly type = DEPARTMENT_DELETE;
  constructor(public payload: DepartmentInterface) {}
}

export type departmentActions =
  | departmentFetchStart
  | departmentFetchSuccess
  | departmentFetchFailure
  | departmentCreateStart
  | departmentCreateSuccess
  | departmentCreateFailure
  | departmentGet
  | departmentUpdateStart
  | departmentUpdateSuccess
  | departmentUpdateFailure
  | departmentDelete;
