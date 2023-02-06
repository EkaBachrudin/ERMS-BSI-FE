import { IDcor } from "src/app/models/rcsa/dcor/dcor.model";
import {
    DCOR_FETCH_START,
    DCOR_FETCH_SUCCESS,
    DCOR_FETCH_FAILURE,
    DcorActions,
} from "../../actions/rcsa/dcor.action";

const initialState = {
    Dcor: null,
    totalPages: null,
    currentPage: null,
    totalElement: null,
    pageSize: null,
    error: null,
    isLoading: false,
};

export interface State {
    Dcor: IDcor[];
    totalPages: number;
    currentPage: number;
    totalElement: number;

  pageSize: number;
    error: string;
    isLoading: boolean;
}

export function DcorReducer(state = initialState, action: DcorActions) {
    switch (action.type) {
        case DCOR_FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case DCOR_FETCH_SUCCESS:
            return {
                ...state,
                Dcor: [...action.payload],
                totalPages: action.totalPages,
                currentPage: action.currentPage,
                pageSize: action.pageSize,
                totalElement: action.totalElements,
                isLoading: false,
                error: null,
            };
        case DCOR_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return { ...state };
    }
}
