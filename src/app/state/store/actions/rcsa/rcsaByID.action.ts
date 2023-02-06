import { Action } from "@ngrx/store";
import { IFailure } from "src/app/models/failure/failure.model";
import { DetailByIDInterface } from "src/app/module/rcsa/dcor-head-rcsa/types/dcor.interface";

export const RCSA_BY_ID_FETCH_START = "[Rcsa]START Fetch Rcsa By ID";
export const RCSA_BY_ID_FETCH_SUCCESS = "[Rcsa]SUCCSES Fetch Rcsa By ID";
export const RCSA_BY_ID_FETCH_FAILURE = "[Rcsa]FAILURE Fetch Rcsa By ID";

export const RCSA_BY_ID_CREATED_START = "[Rcsa] Start Create Rcsa By ID";
export const RCSA_BY_ID_CREATED_SUCCESS = "[Rcsa] Success Create Rcsa By ID";
export const RCSA_BY_ID_CREATED_FAILURE = "[Rcsa] Failure Create Rcsa By ID";

export const RCSA_BY_ID_GET = "[Rcsa] GET Rcsa By ID";
export const RCSA_BY_ID_UPDATE = "[Rcsa] Updated Rcsa By ID";
export const RCSA_BY_ID_DELETE = "[Rcsa] Deleted Rcsa By ID";

export class RcsaByIDFetchStart implements Action {
    readonly type = RCSA_BY_ID_FETCH_START;
    constructor(public filter: any) { }
}

export class RcsaByIDFetchSuccess implements Action {
    readonly type = RCSA_BY_ID_FETCH_SUCCESS;
    constructor(public payload: DetailByIDInterface[], public totalPages: number, public currentPage: number, public pageSize:number,public totalElements : number) { }
}

export class RcsaByIDFetchFailure implements Action {
    readonly type = RCSA_BY_ID_FETCH_FAILURE;
    constructor(public payload: IFailure) { }
}

export class RcsaByIDCreateStart implements Action {
    readonly type = RCSA_BY_ID_CREATED_START;
    constructor(public payload: DetailByIDInterface) { }
}

export class RcsaByIDCreateSuccess implements Action {
    readonly type = RCSA_BY_ID_CREATED_SUCCESS;
    constructor(public payload: DetailByIDInterface) { }
}

export class RcsaByIDCreateFailure implements Action {
    readonly type = RCSA_BY_ID_CREATED_FAILURE;
    constructor(public payload: IFailure) { }
}

export class RcsaByIDGet implements Action {
    readonly type = RCSA_BY_ID_GET;
    constructor(public payload: DetailByIDInterface[]) { }
}

export class RcsaByIDUpdate implements Action {
    readonly type = RCSA_BY_ID_UPDATE;
    constructor(public payload: DetailByIDInterface) { }
}

export class RcsaByIDDelete implements Action {
    readonly type = RCSA_BY_ID_DELETE;
    constructor(public payload: DetailByIDInterface) { }
}

export type RcsaByIDActions = RcsaByIDFetchStart | RcsaByIDFetchSuccess | RcsaByIDFetchFailure | RcsaByIDCreateStart | RcsaByIDCreateSuccess | RcsaByIDCreateFailure | RcsaByIDGet | RcsaByIDUpdate | RcsaByIDDelete;
