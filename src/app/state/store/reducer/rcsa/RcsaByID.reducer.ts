import { DetailByIDInterface } from "src/app/module/rcsa/dcor-head-rcsa/types/dcor.interface";
import {
    RCSA_BY_ID_FETCH_START,
    RCSA_BY_ID_FETCH_SUCCESS,
    RCSA_BY_ID_FETCH_FAILURE,
    RcsaByIDActions,
} from "../../actions/rcsa/rcsaByID.action";

const initialState = {
    RcsaByID: null,
    error: null,
    isLoading: false,
};

export interface State {
    RcsaByID: DetailByIDInterface[];
    error: string;
    isLoading: boolean;
}

export function RcsaByIDReducer(state = initialState, action: RcsaByIDActions) {
    switch (action.type) {
        case RCSA_BY_ID_FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case RCSA_BY_ID_FETCH_SUCCESS:
            return {
                ...state,
                RcsaByID: [...action.payload],
                totalPage: action.totalPages,
                totalElements : action.totalElements,
                currentPage: action.currentPage,
                pageSize: action.pageSize,
                isLoading: false,
                error: null,
            };
        case RCSA_BY_ID_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return { ...state };
    }
}
