import { ITopRisk } from "src/app/models/rcsa/TopRisk/TopRisk.model";
import {
    TOPRISK_FETCH_FAILURE,
    TOPRISK_FETCH_START,
    TOPRISK_CREATED_SUCCESS,
    TopRiskActions,
    TOPRISK_FETCH_SUCCESS,
} from "../../actions/rcsa/TopRisk.action";

const initialState = {
    TopRisk: null,
    totalPage : null,
    currentPage: null,
    pageSize: null,
    totalElements: null,
    error: null,
    isLoading: false,
};

export interface State {
    TopRisk: ITopRisk[];
    error: string;
    isLoading: boolean;
}

export function TopRiskReducer(state = initialState, action: TopRiskActions) {
    switch (action.type) {
        case TOPRISK_FETCH_SUCCESS:
            return {
                ...state,
                TopRisk: [...action.payload],
                totalPage: action.totalPages,
                currentPage: action.currentPage,
                pageSize : action.pageSize,
                totalElements: action.totalElements,
                isLoading: false,
                error: null,
            };
        case TOPRISK_CREATED_SUCCESS:
            return {
                ...state,
                TopRisk: [...state.TopRisk, action.payload],
                isLoading: false,
                error: null,
            };
        case TOPRISK_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return { ...state };
    }
}