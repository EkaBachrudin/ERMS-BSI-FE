import { Action } from "@ngrx/store";
import { IFailure } from "src/app/models/failure/failure.model";
import { IGroupHead } from "src/app/models/rcsa/GroupHead/GroupHead.model";

export const GROUPHEAD_FETCH_START = "[GroupHead]START Fetch GroupHead";
export const GROUPHEAD_FETCH_SUCCESS = "[GroupHead]SUCCSES Fetch GroupHead";
export const GROUPHEAD_FETCH_FAILURE = "[GroupHead]FAILURE Fetch GroupHead";

export const GROUPHEAD_CREATED_START = "[GroupHead] Start Create GroupHead";
export const GROUPHEAD_CREATED_SUCCESS = "[GroupHead] Success Create GroupHead";
export const GROUPHEAD_CREATED_FAILURE = "[GroupHead] Failure Create GroupHead";

export const GROUPHEAD_GET = "[GroupHead] GET GroupHead";
export const GROUPHEAD_UPDATE = "[GroupHead] Updated GroupHead";
export const GROUPHEAD_DELETE = "[GroupHead] Deleted GroupHead";

export class GroupHeadFetchStart implements Action {
    readonly type = GROUPHEAD_FETCH_START;
}

export class GroupHeadFetchSuccess implements Action {
    readonly type = GROUPHEAD_FETCH_SUCCESS;
    constructor(public payload: IGroupHead[]) { }
}

export class GroupHeadFetchFailure implements Action {
    readonly type = GROUPHEAD_FETCH_FAILURE;
    constructor(public payload: IFailure) { }
}

export class GroupHeadCreateStart implements Action {
    readonly type = GROUPHEAD_CREATED_START;
    constructor(public payload: IGroupHead) { }
}

export class GroupHeadCreateSuccess implements Action {
    readonly type = GROUPHEAD_CREATED_SUCCESS;
    constructor(public payload: IGroupHead) { }
}

export class GroupHeadCreateFailure implements Action {
    readonly type = GROUPHEAD_CREATED_FAILURE;
    constructor(public payload: IFailure) { }
}

export class GroupHeadGet implements Action {
    readonly type = GROUPHEAD_GET;
    constructor(public payload: IGroupHead[]) { }
}

export class GroupHeadUpdate implements Action {
    readonly type = GROUPHEAD_UPDATE;
    constructor(public payload: IGroupHead) { }
}

export class GroupHeadDelete implements Action {
    readonly type = GROUPHEAD_DELETE;
    constructor(public payload: IGroupHead) { }
}

export type GroupHeadActions =
    | GroupHeadFetchStart
    | GroupHeadFetchSuccess
    | GroupHeadFetchFailure
    | GroupHeadCreateStart
    | GroupHeadCreateSuccess
    | GroupHeadCreateFailure
    | GroupHeadGet
    | GroupHeadUpdate
    | GroupHeadDelete;