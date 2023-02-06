import { Action } from "@ngrx/store";
import { IFailure } from "src/app/models/failure/failure.model";
import { IDeptHead } from "src/app/models/rcsa/DeptHead/DeptHead.model";
import { postScore } from "src/app/module/rcsa/dcor-head-rcsa/types/dcor.interface";

export const DEPTHEAD_FETCH_START = "[DeptHead]START Fetch DeptHead";
export const DEPTHEAD_FETCH_SUCCESS = "[DeptHead]SUCCSES Fetch DeptHead";
export const DEPTHEAD_FETCH_FAILURE = "[DeptHead]FAILURE Fetch DeptHead";

export const DEPTHEAD_CREATED_START = "[DeptHead] Start Create DeptHead";
export const DEPTHEAD_CREATED_SUCCESS = "[DeptHead] Success Create DeptHead";
export const DEPTHEAD_CREATED_FAILURE = "[DeptHead] Failure Create DeptHead";

export const DEPTHEAD_GET = "[DeptHead] GET DeptHead";
export const DEPTHEAD_UPDATE = "[DeptHead] Updated DeptHead";
export const DEPTHEAD_DELETE = "[DeptHead] Deleted DeptHead";

export const DEPTHEAD_SUBMIT_START = "[DeptHead]START Submit DeptHead";
export const DEPTHEAD_SUBMIT_FAILURE = "[DeptHead]FAILURE Submit DeptHead";

export class DeptheadSubmitStart implements Action {
  readonly type = DEPTHEAD_SUBMIT_START;
  constructor(public payload: any) {}
}

export class DeptHeadFetchStart implements Action {
    readonly type = DEPTHEAD_FETCH_START;
}

export class DeptHeadFetchSuccess implements Action {
    readonly type = DEPTHEAD_FETCH_SUCCESS;
    constructor(public payload: IDeptHead[]) { }
}

export class DeptHeadFetchFailure implements Action {
    readonly type = DEPTHEAD_FETCH_FAILURE;
    constructor(public payload: IFailure) { }
}

export class DeptHeadCreateStart implements Action {
    readonly type = DEPTHEAD_CREATED_START;
    constructor(public payload: postScore) { }
}


export class DeptHeadCreateFailure implements Action {
    readonly type = DEPTHEAD_CREATED_FAILURE;
    constructor(public payload: IFailure) { }
}

export class DeptHeadGet implements Action {
    readonly type = DEPTHEAD_GET;
    constructor(public payload: IDeptHead[]) { }
}

export class DeptHeadUpdate implements Action {
    readonly type = DEPTHEAD_UPDATE;
    constructor(public payload: IDeptHead) { }
}

export class DeptHeadDelete implements Action {
    readonly type = DEPTHEAD_DELETE;
    constructor(public payload: IDeptHead) { }
}

export type DeptHeadActions =
    | DeptHeadFetchStart
    | DeptHeadFetchSuccess
    | DeptHeadFetchFailure
    | DeptHeadCreateStart
    | DeptHeadCreateFailure
    | DeptHeadGet
    | DeptHeadUpdate
    | DeptHeadDelete;