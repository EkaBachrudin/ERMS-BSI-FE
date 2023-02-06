import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { ITopRisk } from 'src/app/models/rcsa/TopRisk/TopRisk.model';
import { TopRiskInterface } from 'src/app/module/rcsa/maintance/tabs/top-risk/types/top-risk.interface';

export const TOPRISK_FETCH_START = '[TopRisk]START Fetch TopRisk';
export const TOPRISK_FETCH_SUCCESS = '[TopRisk]SUCCSES Fetch TopRisk';
export const TOPRISK_FETCH_FAILURE = '[TopRisk]FAILURE Fetch TopRisk';

export const TOPRISK_CREATED_START = '[TopRisk] Start Create TopRisk';
export const TOPRISK_CREATED_SUCCESS = '[TopRisk] Success Create TopRisk';
export const TOPRISK_CREATED_FAILURE = '[TopRisk] Failure Create TopRisk';

export const TOPRISK_GET = '[TopRisk] GET TopRisk';
export const TOPRISK_UPDATE = '[TopRisk] Updated TopRisk';
export const TOPRISK_DELETE = '[TopRisk] Deleted TopRisk';

export class TopRiskFetchStart implements Action {
    readonly type = TOPRISK_FETCH_START;
    constructor(public filter: any){}
    }

export class TopRiskFetchSuccess implements Action {
    readonly type = TOPRISK_FETCH_SUCCESS;
    constructor(public payload: TopRiskInterface[], public totalPages: number, public currentPage: number, public pageSize:number, public totalElements:number) {}
    }

export class TopRiskFetchFailure implements Action {
    readonly type = TOPRISK_FETCH_FAILURE;
    constructor(public payload: IFailure) {}
    }

export class TopRiskCreateStart implements Action {
    readonly type = TOPRISK_CREATED_START;
    constructor(public payload: ITopRisk) {}
    }

export class TopRiskCreateSuccess implements Action {
    readonly type = TOPRISK_CREATED_SUCCESS;
    constructor(public payload: ITopRisk) {}
    }

export class TopRiskCreateFailure implements Action {
    readonly type = TOPRISK_CREATED_FAILURE;
    constructor(public payload: IFailure) {}
    }

export class TopRiskGet implements Action {
    readonly type = TOPRISK_GET;
    constructor(public payload: ITopRisk[]) {}
    }

export class TopRiskUpdate implements Action {
    readonly type = TOPRISK_UPDATE;
    constructor(public payload: ITopRisk) {}
    }

export class TopRiskDelete implements Action {
    readonly type = TOPRISK_DELETE;
    constructor(public payload: ITopRisk) {}
    }

export type TopRiskActions =
    | TopRiskFetchStart
    | TopRiskFetchSuccess
    | TopRiskFetchFailure
    | TopRiskCreateStart
    | TopRiskCreateSuccess
    | TopRiskCreateFailure
    | TopRiskGet
    | TopRiskUpdate
    | TopRiskDelete;
    