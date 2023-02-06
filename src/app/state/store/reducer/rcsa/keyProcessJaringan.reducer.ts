
import { IKeyProcessJaringan } from 'src/app/models/rcsa/key-process/keyproccessJaringan';
import {
  keyProcessJaringanActions,
  KEYPROCESS_JARINGAN_CREATED_SUCCESS,
  KEYPROCESS_JARINGAN_DELETE,
  KEYPROCESS_JARINGAN_FETCH_SUCCESS,
  KEYPROCESS_JARINGAN_UPDATE_SUCCESS,
} from '../../actions/rcsa/keyProcessJaringan.action';

const initialState = {
  keyProcessJaringan: null,
  error: null,
  isLoading: false,
};
export interface State {
  keyProcessJaringan: IKeyProcessJaringan
  isLoading: boolean;
}

export function KeyProcessJaringanReducer(
  state = initialState,
  action: keyProcessJaringanActions
) {
  switch (action.type) {
    case KEYPROCESS_JARINGAN_FETCH_SUCCESS:
      return {
        ...state,
        keyProcessJaringan: [...action.payload],
        isLoading: false,
        error: null,
      };
    case KEYPROCESS_JARINGAN_CREATED_SUCCESS:
      return {
        ...state,
        keyProcessJaringan: [...state.keyProcessJaringan, action.payload],
        isLoading: false,
        error: null,
      };
    case KEYPROCESS_JARINGAN_UPDATE_SUCCESS:
      return state.keyProcessJaringan.map((keyprocessJar) => {
        if (keyprocessJar.id == action.payload.id) {
          return { ...keyprocessJar, ...action.payload };
        } else {
          return keyprocessJar;
        }
      });
    case KEYPROCESS_JARINGAN_DELETE:
      return state.keyProcessJaringan.filter((key) => {
        return key.id != action.payload.id;
      });

    default:
      return { ...state };
  }
}
