import { ILikeHood } from "src/app/models/rcsa/LikeHood/LikeHood";
import {
    LIKEHOOD_FETCH_SUCCESS,
    LIKEHOOD_FETCH_FAILURE,
    LIKEHOOD_CREATED_START,
    LikeHoodActions,
} from "../../actions/rcsa/LikeHood.action";

const initialState = {
    LikeHood: null,
    error: null,
    isLoading: false,
};

export interface State {
    LikeHood: ILikeHood[];
    error: string;
    isLoading: boolean;
}

export function LikeHoodReducer(state = initialState, action: LikeHoodActions) {
    switch (action.type) {
        case LIKEHOOD_FETCH_SUCCESS:
            return {
                ...state,
                LikeHood: [...action.payload],
                isLoading: false,
                error: null,
            };
        case LIKEHOOD_CREATED_START:
            return {
                ...state,
                LikeHood: [...state.LikeHood, action.payload],
                isLoading: false,
                error: null,
            };
        case LIKEHOOD_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return { ...state };
    }
}