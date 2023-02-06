import { Action } from "@ngrx/store";
import { IFailure } from "src/app/models/failure/failure.model";
import { DcorInterface } from "src/app/module/rcsa/dcor-head-rcsa/types/dcor.interface";

export const DCOR_FETCH_START = "[Dcor]START Fetch Dcor";
export const DCOR_FETCH_SUCCESS = "[Dcor]SUCCSES Fetch Dcor";
export const DCOR_FETCH_FAILURE = "[Dcor]FAILURE Fetch Dcor";

export const DCOR_CREATED_START = "[Dcor] Start Create Dcor";
export const DCOR_CREATED_SUCCESS = "[Dcor] Success Create Dcor";
export const DCOR_CREATED_FAILURE = "[Dcor] Failure Create Dcor";

export const DCOR_GET = "[Dcor] GET Dcor";
export const DCOR_UPDATE = "[Dcor] Updated Dcor";
export const DCOR_DELETE = "[Dcor] Deleted Dcor";

export const DCOR_APPROVE_START = "[Dcor] Start Approve Dcor"
export const DCOR_REJECT_START = "[Dcor] Start Reject Dcor"


export class DcorApproveStart implements Action {
    readonly type =  DCOR_APPROVE_START;
    constructor(public payload: any) { }
}

export class DcorRejectStart implements Action {
    readonly type =  DCOR_REJECT_START;
    constructor(public payload: any) { }
}



export class DcorFetchStart implements Action {
    readonly type = DCOR_FETCH_START;
    constructor(public filter: any) { }
}

export class DcorFetchSuccess implements Action {
    readonly type = DCOR_FETCH_SUCCESS;
    constructor(public payload: DcorInterface[], public totalPages: number, public currentPage: number, public pageSize:number,public totalElements:number) { }
}

export class DcorFetchFailure implements Action {
    readonly type = DCOR_FETCH_FAILURE;
    constructor(public payload: IFailure) { }
}

export class DcorCreateStart implements Action {
    readonly type = DCOR_CREATED_START;
    constructor(public payload: DcorInterface) { }
}

export class DcorCreateSuccess implements Action {
    readonly type = DCOR_CREATED_SUCCESS;
    constructor(public payload: DcorInterface) { }
}

export class DcorCreateFailure implements Action {
    readonly type = DCOR_CREATED_FAILURE;
    constructor(public payload: IFailure) { }
}

export class DcorGet implements Action {
    readonly type = DCOR_GET;
    constructor(public payload: DcorInterface[]) { }
}

export class DcorUpdate implements Action {
    readonly type = DCOR_UPDATE;
    constructor(public payload: DcorInterface) { }
}

export class DcorDelete implements Action {
    readonly type = DCOR_DELETE;
    constructor(public payload: DcorInterface) { }
}

export type DcorActions =
    | DcorFetchStart
    | DcorFetchSuccess
    | DcorFetchFailure
    | DcorCreateStart
    | DcorCreateSuccess
    | DcorCreateFailure
    | DcorGet
    | DcorUpdate
    | DcorDelete;
