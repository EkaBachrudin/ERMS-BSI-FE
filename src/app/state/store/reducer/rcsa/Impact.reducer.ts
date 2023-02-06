import { IImpact } from "src/app/models/rcsa/Impact/Impact.model";
import {
    IMPACT_FETCH_START,
    IMPACT_FETCH_SUCCESS,
    IMPACT_FETCH_FAILURE,
    ImpactActions,
} from "../../actions/rcsa/Impact.action";

const initialState = {
    Impact: null,
    error: null,
    isLoading: false,
};

export interface State {
    Impact: IImpact[];
    error: string;
    isLoading: boolean;
}

export function ImpactReducer(state = initialState, action: ImpactActions) {
    switch (action.type) {
        case IMPACT_FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case IMPACT_FETCH_SUCCESS:
            return {
                ...state,
                Impact: [...action.payload],
                isLoading: false,
                error: null,
            };
        case IMPACT_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return { ...state };
    }
}