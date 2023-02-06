import { IKeyProcessKantorPusat } from 'src/app/models/rcsa/key-process/keyprocessKantorPusat';
import {
  keyProcessKantorPusatActions,
  KEYPROCESS_KANTOR_PUSAT_CREATED_SUCCESS,
  KEYPROCESS_KANTOR_PUSAT_DELETE,
  KEYPROCESS_KANTOR_PUSAT_FETCH_SUCCESS,
  KEYPROCESS_KANTOR_PUSAT_UPDATE_SUCCESS,
} from '../../actions/rcsa/keyProcessKantorPusat.action';

const initialState = {
  keyProcess: null,
  error: null,
  isLoading: false,
};
export interface State {
  keyProcess: IKeyProcessKantorPusat
  isLoading: boolean;
}

export function KeyProcessKantorPusatReducer(
  state = initialState,
  action: keyProcessKantorPusatActions
) {
  switch (action.type) {
    case KEYPROCESS_KANTOR_PUSAT_FETCH_SUCCESS:
      return {
        ...state,
        keyProcess: [...action.payload],
        totalPages: action.totalPages,
        currentPage: action.currentPage,
        pageSize: action.pageSize,
        isLoading: false,
        error: null,
      };
    case KEYPROCESS_KANTOR_PUSAT_CREATED_SUCCESS:
      return {
        ...state,
        keyProcess: [...state.keyProcess, action.payload],
        isLoading: false,
        error: null,
      };
    case KEYPROCESS_KANTOR_PUSAT_UPDATE_SUCCESS:
      return state.keyProcess.map((keyprocess) => {
        if (keyprocess.id == action.payload.id) {
          return { ...keyprocess, ...action.payload };
        } else {
          return keyprocess;
        }
      });
    case KEYPROCESS_KANTOR_PUSAT_DELETE:
      return state.keyProcess.filter((key) => {
        return key.id != action.payload.id;
      });

    default:
      return { ...state };
  }
}
