import { Action } from "@ngrx/store";
import { IFailure } from "src/app/models/failure/failure.model";
import { ImpactInterface } from "src/app/module/rcsa/maintance/tabs/impact/types/impact.interface";

export const IMPACT_FETCH_START = "[Impact]START Fetch Impact";
export const IMPACT_FETCH_SUCCESS = "[Impact]SUCCSES Fetch Impact";
export const IMPACT_FETCH_FAILURE = "[Impact]FAILURE Fetch Impact";

export const IMPACT_CREATED_START = "[Impact] Start Create Impact";
export const IMPACT_CREATED_SUCCESS = "[Impact] Success Create Impact";
export const IMPACT_CREATED_FAILURE = "[Impact] Failure Create Impact";

export const IMPACT_GET = "[Impact] GET Impact";
export const IMPACT_UPDATE = "[Impact] Updated Impact";
export const IMPACT_DELETE = "[Impact] Deleted Impact";

export class ImpactFetchStart implements Action {
    readonly type = IMPACT_FETCH_START;
    constructor(public page: number,public size : number){}
}

export class ImpactFetchSuccess implements Action {
    readonly type = IMPACT_FETCH_SUCCESS;
    constructor(public payload: ImpactInterface[]) { }
}

export class ImpactFetchFailure implements Action {
    readonly type = IMPACT_FETCH_FAILURE;
    constructor(public payload: IFailure) { }
}

export class ImpactCreateStart implements Action {
    readonly type = IMPACT_CREATED_START;
    constructor(public payload: ImpactInterface) { }
}

export class ImpactCreateSuccess implements Action {
    readonly type = IMPACT_CREATED_SUCCESS;
    constructor(public payload: ImpactInterface) { }
}

export class ImpactCreateFailure implements Action {
    readonly type = IMPACT_CREATED_FAILURE;
    constructor(public payload: IFailure) { }
}

export class ImpactGet implements Action {
    readonly type = IMPACT_GET;
    constructor(public payload: ImpactInterface[]) { }
}

export class ImpactUpdate implements Action {
    readonly type = IMPACT_UPDATE;
    constructor(public payload: ImpactInterface) { }
}

export class ImpactDelete implements Action {
    readonly type = IMPACT_DELETE;
    constructor(public payload: ImpactInterface) { }
}

export type ImpactActions =
    | ImpactFetchStart
    | ImpactFetchSuccess
    | ImpactFetchFailure
    | ImpactCreateStart
    | ImpactCreateSuccess
    | ImpactCreateFailure
    | ImpactGet
    | ImpactUpdate
    | ImpactDelete;
    