import { IDeptHead } from "src/app/models/rcsa/DeptHead/DeptHead.model";
import {
    DEPTHEAD_FETCH_START,
    DEPTHEAD_FETCH_SUCCESS,
    DEPTHEAD_FETCH_FAILURE,
    DeptHeadActions,
} from "../../actions/rcsa/DeptHead.action";

const initialState = {
    DeptHead: null,
    error: null,
    isLoading: false,
};

export interface State {
    DeptHead: IDeptHead[];
    error: string;
    isLoading: boolean;
}

export function DeptHeadReducer(state = initialState, action: DeptHeadActions) {
    switch (action.type) {
        case DEPTHEAD_FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case DEPTHEAD_FETCH_SUCCESS:
            return {
                ...state,
                DeptHead: [...action.payload],
                isLoading: false,
                error: null,
            };
        case DEPTHEAD_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return { ...state };
    }
}