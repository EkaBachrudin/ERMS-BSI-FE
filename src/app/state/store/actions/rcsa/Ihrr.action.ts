import { Action } from "@ngrx/store";
import { IFailure } from "src/app/models/failure/failure.model";
import { IhrrFilterInterface, IhrrInterface } from "src/app/module/rcsa/maintance/tabs/ihrr/types/ihrr.interface";

export const IHRR_FETCH_START = "[Ihrr]START Fetch Ihrr";
export const IHRR_FETCH_SUCCESS = "[Ihrr]SUCCSES Fetch Ihrr";
export const IHRR_FETCH_FAILURE = "[Ihrr]FAILURE Fetch Ihrr";

export const IHRR_CREATED_START = "[Ihrr] Start Create Ihrr";
export const IHRR_CREATED_SUCCESS = "[Ihrr] Success Create Ihrr";
export const IHRR_CREATED_FAILURE = "[Ihrr] Failure Create Ihrr";

export const IHRR_GET = "[Ihrr] GET Ihrr";
export const IHRR_UPDATE = "[Ihrr] Updated Ihrr";
export const IHRR_DELETE = "[Ihrr] Deleted Ihrr";

export class IhrrFetchStart implements Action {
    readonly type = IHRR_FETCH_START;
    constructor(public filter: IhrrFilterInterface){}
}

export class IhrrFetchSuccess implements Action {
    readonly type = IHRR_FETCH_SUCCESS;
    constructor(public payload: IhrrInterface[],public totalPage: number, public pageSize: number) { }
}

export class IhrrFetchFailure implements Action {
    readonly type = IHRR_FETCH_FAILURE;
    constructor(public payload: IFailure) { }
}

export class IhrrCreateStart implements Action {
    readonly type = IHRR_CREATED_START;
    constructor(public payload: IhrrInterface) { }
}

export class IhrrCreateSuccess implements Action {
    readonly type = IHRR_CREATED_SUCCESS;
    constructor(public payload: IhrrInterface) { }
}

export class IhrrCreateFailure implements Action {
    readonly type = IHRR_CREATED_FAILURE;
    constructor(public payload: IFailure) { }
}

export class IhrrGet implements Action {
    readonly type = IHRR_GET;
    constructor(public payload: IhrrInterface[]) { }
}

export class IhrrUpdate implements Action {
    readonly type = IHRR_UPDATE;
    constructor(public payload: IhrrInterface) { }
}

export class IhrrDelete implements Action {
    readonly type = IHRR_DELETE;
    constructor(public payload: IhrrInterface) { }
}

export type IhrrActions =
    | IhrrFetchStart
    | IhrrFetchSuccess
    | IhrrFetchFailure
    | IhrrCreateStart
    | IhrrCreateSuccess
    | IhrrCreateFailure
    | IhrrGet
    | IhrrUpdate
    | IhrrDelete;
