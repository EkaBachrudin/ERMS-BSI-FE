import { IGroupHead } from "src/app/models/rcsa/GroupHead/GroupHead.model";
import {
    GROUPHEAD_FETCH_START,
    GROUPHEAD_FETCH_SUCCESS,
    GROUPHEAD_FETCH_FAILURE,
    GroupHeadActions,
} from "../../actions/rcsa/GroupHead.action";

const initialState = {
    GroupHead: null,
    error: null,
    isLoading: false,
};

export interface State {
    GroupHead: IGroupHead[];
    error: string;
    isLoading: boolean;
}

export function GroupHeadReducer(state = initialState, action: GroupHeadActions) {
    switch (action.type) {
        case GROUPHEAD_FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case GROUPHEAD_FETCH_SUCCESS:
            return {
                ...state,
                GroupHead: [...action.payload],
                isLoading: false,
                error: null,
            };
        case GROUPHEAD_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return { ...state };
    }
}