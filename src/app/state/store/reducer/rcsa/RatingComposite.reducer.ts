import { IRatingComposite } from "src/app/models/rcsa/RatingComposite/RatingComposite.model";
import {
    RATINGCOMPOSITE_FETCH_FAILURE,
    RATINGCOMPOSITE_FETCH_SUCCESS,
    RATINGCOMPOSITE_CREATED_SUCCESS,
    RatingCompositeActions,
} from "../../actions/rcsa/RatingComposite.action";

const initialState = {
    ratingComposite: null,
    totalPage: null,
    currentPage: null,
    pageSize: null,
    error: null,
    isLoading: false,
};

export interface State {
    ratingComposite: IRatingComposite[];
    totalPage: number;
    currentPage: number;
    pageSize: number;
    error: string;
    isLoading: boolean;
}

export function RatingCompositeReducer(state = initialState, action: RatingCompositeActions) {
    switch (action.type) {
        case RATINGCOMPOSITE_FETCH_SUCCESS:
            return {
                ...state,
                ratingComposite: [...action.payload],
                totalPage: action.totalPage,
                currentPage: action.currentPage,
                pageSize: action.pageSize,
                isLoading: false,
                error: null,
            };
        case RATINGCOMPOSITE_CREATED_SUCCESS:
            return {
                ...state,
                ratingComposite: [...state.ratingComposite, action.payload],
                isLoading: false,
                error: null,
            };
        case RATINGCOMPOSITE_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return { ...state };
    }
}