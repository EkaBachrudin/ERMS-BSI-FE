import { IControl } from "src/app/models/rcsa/Control/Control.model";
import {
    CONTROL_FETCH_FAILURE,
    CONTROL_FETCH_START,
    CONTROL_FETCH_SUCCESS,
    ControlActions,
} from "../../actions/rcsa/Control.action";

const initialState = {
    control: null,
    error: null,
    isLoading: false,
};

export interface State {
    control: IControl[];
    error: string;
    isLoading: boolean;
}

export function SettingControlReducer(state = initialState, action: ControlActions) {
    switch (action.type) {
        case CONTROL_FETCH_START:
            return {
                ...state,
                isLoading: true,
            };
        case CONTROL_FETCH_SUCCESS:
            return {
                ...state,
                control: [...action.payload],
                isLoading: false,
                error: null,
            };
        case CONTROL_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return { ...state };
    }
}