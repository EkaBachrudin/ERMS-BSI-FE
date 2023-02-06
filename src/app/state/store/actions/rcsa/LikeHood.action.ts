import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { ILikeHood } from 'src/app/models/rcsa/LikeHood/LikeHood';
import { LikelihoodInterface } from 'src/app/module/rcsa/maintance/tabs/like-hood/types/likehood.interface';

export const LIKEHOOD_FETCH_START = '[LikeHood]START Fetch LikeHood';
export const LIKEHOOD_FETCH_SUCCESS = '[LikeHood]SUCCSES Fetch LikeHood';
export const LIKEHOOD_FETCH_FAILURE = '[LikeHood]FAILURE Fetch LikeHood';

export const LIKEHOOD_CREATED_START = '[LikeHood] Start Create LikeHood';
export const LIKEHOOD_CREATED_SUCCESS = '[LikeHood] Success Create LikeHood';
export const LIKEHOOD_CREATED_FAILURE = '[LikeHood] Failure Create LikeHood';

export const LIKEHOOD_GET = '[LikeHood] GET LikeHood';
export const LIKEHOOD_UPDATE = '[LikeHood] Updated LikeHood';
export const LIKEHOOD_DELETE = '[LikeHood] Deleted LikeHood';


export class LikeHoodFetchStart implements Action {
    readonly type = LIKEHOOD_FETCH_START;
    constructor(public page: number,public size : number){}
}

export class LikeHoodFetchSuccess implements Action {
    readonly type = LIKEHOOD_FETCH_SUCCESS;
    constructor(public payload: LikelihoodInterface[]) { }
}

export class LikeHoodFetchFailure implements Action {
    readonly type = LIKEHOOD_FETCH_FAILURE;
    constructor(public payload: IFailure) { }
}

export class LikeHoodCreateStart implements Action {
    readonly type = LIKEHOOD_CREATED_START;
    constructor(public payload: ILikeHood) { }
}

export class LikeHoodCreateSuccess implements Action {
    readonly type = LIKEHOOD_CREATED_SUCCESS;
    constructor(public payload: ILikeHood) { }
}

export class LikeHoodCreateFailure implements Action {
    readonly type = LIKEHOOD_CREATED_FAILURE;
    constructor(public payload: IFailure) { }
}

export class LikeHoodGet implements Action {
    readonly type = LIKEHOOD_GET;
    constructor(public payload: ILikeHood[]) { }
}

export class LikeHoodUpdate implements Action {
    readonly type = LIKEHOOD_UPDATE;
    constructor(public payload: ILikeHood) { }
}

export class LikeHoodDelete implements Action {
    readonly type = LIKEHOOD_DELETE;
    constructor(public payload: ILikeHood) { }
}

export type LikeHoodActions =
    | LikeHoodFetchStart
    | LikeHoodFetchSuccess
    | LikeHoodFetchFailure
    | LikeHoodCreateStart
    | LikeHoodCreateSuccess
    | LikeHoodCreateFailure
    | LikeHoodGet
    | LikeHoodUpdate
    | LikeHoodDelete;