import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { RatingCompositeFilterInterface, RatingCompositeInterface } from 'src/app/module/rcsa/maintance/tabs/rating-composite/types/ratingComposite.interface';

export const RATINGCOMPOSITE_FETCH_START = '[RatingComposite]START Fetch RatingComposite';
export const RATINGCOMPOSITE_FETCH_SUCCESS = '[RatingComposite]SUCCSES Fetch RatingComposite';
export const RATINGCOMPOSITE_FETCH_FAILURE = '[RatingComposite]FAILURE Fetch RatingComposite';

export const RATINGCOMPOSITE_CREATED_START = '[RatingComposite] Start Create RatingComposite';
export const RATINGCOMPOSITE_CREATED_SUCCESS = '[RatingComposite] Success Create RatingComposite';
export const RATINGCOMPOSITE_CREATED_FAILURE = '[RatingComposite] Failure Create RatingComposite';

export const RATINGCOMPOSITE_GET = '[RatingComposite] GET RatingComposite';
export const RATINGCOMPOSITE_UPDATE = '[RatingComposite] Updated RatingComposite';
export const RATINGCOMPOSITE_DELETE = '[RatingComposite] Deleted RatingComposite';

export class RatingCompositeFetchStart implements Action {
    readonly type = RATINGCOMPOSITE_FETCH_START;
    constructor(public filter: RatingCompositeFilterInterface) { }
    }

export class RatingCompositeFetchSuccess implements Action {
    readonly type = RATINGCOMPOSITE_FETCH_SUCCESS;
    constructor(public payload: RatingCompositeInterface[], public totalPage: number, public currentPage: number, public pageSize: number) {}
    }

export class RatingCompositeFetchFailure implements Action {
    readonly type = RATINGCOMPOSITE_FETCH_FAILURE;
    constructor(public payload: IFailure) {}
    }

export class RatingCompositeCreateStart implements Action {
    readonly type = RATINGCOMPOSITE_CREATED_START;
    constructor(public payload: RatingCompositeInterface) {}
    }

export class RatingCompositeCreateSuccess implements Action {
    readonly type = RATINGCOMPOSITE_CREATED_SUCCESS;
    constructor(public payload: RatingCompositeInterface) {}
    }

export class RatingCompositeCreateFailure implements Action {
    readonly type = RATINGCOMPOSITE_CREATED_FAILURE;
    constructor(public payload: IFailure) {}
    }

export class RatingCompositeGet implements Action {
    readonly type = RATINGCOMPOSITE_GET;
    constructor(public payload: RatingCompositeInterface[]) {}
    }

export class RatingCompositeUpdate implements Action {
    readonly type = RATINGCOMPOSITE_UPDATE;
    constructor(public payload: RatingCompositeInterface) {}
    }

export class RatingCompositeDelete implements Action {
    readonly type = RATINGCOMPOSITE_DELETE;
    constructor(public payload: RatingCompositeInterface) {}
    }

export type RatingCompositeActions =
    | RatingCompositeFetchStart
    | RatingCompositeFetchSuccess
    | RatingCompositeFetchFailure
    | RatingCompositeCreateStart
    | RatingCompositeCreateSuccess
    | RatingCompositeCreateFailure
    | RatingCompositeGet
    | RatingCompositeUpdate
    | RatingCompositeDelete;
    