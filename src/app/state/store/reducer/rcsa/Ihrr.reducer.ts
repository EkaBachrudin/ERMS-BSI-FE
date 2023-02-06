import { IIhrr } from "src/app/models/rcsa/Ihrr/Ihrr.model";
import {
    IHRR_FETCH_FAILURE,
    IHRR_FETCH_START,
    IHRR_FETCH_SUCCESS,
    IhrrActions,
} from "../../actions/rcsa/Ihrr.action";

const initialState = {
    Ihrr: null,
    totalPage: null,
    pageSize: null,
    error: null,
    isLoading: false,
};

export interface State {
    Ihrr: IIhrr[];
    totalPage: number;
    pageSize: number;
    error: string;
    isLoading: boolean;
}

export function IhrrReducer(state = initialState, action: IhrrActions) {
    switch (action.type) {
        case IHRR_FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case IHRR_FETCH_SUCCESS:
            return {
                ...state,
                Ihrr: [...action.payload],
                totalPage: action.totalPage,
                pageSize: action.pageSize,
                isLoading: false,
                error: null,
            };
        case IHRR_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return { ...state };
    }
}