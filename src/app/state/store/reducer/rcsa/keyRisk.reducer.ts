import { IKeyRisk } from 'src/app/models/rcsa/key-risk/keyRisk';
import {
  keyRiskActions,
  KEYRISK_CREATED_SUCCESS,
  KEYRISK_DELETE,
  KEYRISK_FETCH_SUCCESS,
  KEYRISK_UPDATE_SUCCESS,
} from '../../actions/rcsa/keyRisk.action';

const initialState = {
  keyRisk: null,
  error: null,
  isLoading: false,
};
export interface State {
  keyRisk: IKeyRisk;
  isLoading: boolean;
}

export function keyRiskReducer(state = initialState, action: keyRiskActions) {
  switch (action.type) {
    case KEYRISK_FETCH_SUCCESS:
      return {
        ...state,
        keyRisk: [...action.payload],
        totalPages: action.totalPages,
        currentPage: action.currentPage,
        pageSize: action.pageSize,
        isLoading: false,
        error: null,
      };
    case KEYRISK_CREATED_SUCCESS:
      return {
        ...state,
        keyRisk: [...state.keyRisk, action.payload],
        isLoading: false,
        error: null,
      };
    case KEYRISK_UPDATE_SUCCESS:
      return state.keyRisk.map((keyRisk) => {
        if (keyRisk.id == action.payload.id) {
          return { ...keyRisk, ...action.payload };
        } else {
          return keyRisk;
        }
      });
    case KEYRISK_DELETE:
      return state.keyRisk.filter((key) => {
        return key.id != action.payload.id;
      });

    default:
      return { ...state };
  }
}
