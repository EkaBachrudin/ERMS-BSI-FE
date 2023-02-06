import { Action } from "@ngrx/store";
import { IFailure } from "src/app/models/failure/failure.model";
import { ControlInterface } from "src/app/module/rcsa/maintance/tabs/control/types/control.interface";

export const CONTROL_FETCH_START = "[Control]START Fetch Control";
export const CONTROL_FETCH_SUCCESS = "[Control]SUCCSES Fetch Control";
export const CONTROL_FETCH_FAILURE = "[Control]FAILURE Fetch Control";

export const CONTROL_CREATED_START = "[Control] Start Create Control";
export const CONTROL_CREATED_SUCCESS = "[Control] Success Create Control";
export const CONTROL_CREATED_FAILURE = "[Control] Failure Create Control";

export const CONTROL_GET = "[Control] GET Control";
export const CONTROL_UPDATE = "[Control] Updated Control";
export const CONTROL_DELETE = "[Control] Deleted Control";

export class ControlFetchStart implements Action {
    readonly type = CONTROL_FETCH_START;
    constructor(public page: number,public size : number){}
}

export class ControlFetchSuccess implements Action {
    readonly type = CONTROL_FETCH_SUCCESS;
    constructor(public payload: ControlInterface[]) { }
}

export class ControlFetchFailure implements Action {
    readonly type = CONTROL_FETCH_FAILURE;
    constructor(public payload: IFailure) { }
}

export class ControlCreateStart implements Action {
    readonly type = CONTROL_CREATED_START;
    constructor(public payload: ControlInterface) { }
}

export class ControlCreateSuccess implements Action {
    readonly type = CONTROL_CREATED_SUCCESS;
    constructor(public payload: ControlInterface) { }
}

export class ControlCreateFailure implements Action {
    readonly type = CONTROL_CREATED_FAILURE;
    constructor(public payload: IFailure) { }
}

export class ControlGet implements Action {
    readonly type = CONTROL_GET;
    constructor(public payload: ControlInterface[]) { }
}

export class ControlUpdate implements Action {
    readonly type = CONTROL_UPDATE;
    constructor(public payload: ControlInterface) { }
}

export class ControlDelete implements Action {
    readonly type = CONTROL_DELETE;
    constructor(public payload: ControlInterface) { }
}

export type ControlActions =
    | ControlFetchStart
    | ControlFetchSuccess
    | ControlFetchFailure
    | ControlCreateStart
    | ControlCreateSuccess
    | ControlCreateFailure
    | ControlGet
    | ControlUpdate
    | ControlDelete;