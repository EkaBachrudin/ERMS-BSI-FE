import { IKetentuan } from 'src/app/models/rcsa/ketentuan/ketentuan';
import {
  ketentuanActions,
  KETENTUAN_CREATED_SUCCESS,
  KETENTUAN_DELETE,
  KETENTUAN_FETCH_SUCCESS,
  KETENTUAN_UPDATE_SUCCESS,
} from '../../actions/rcsa/ketentuan.action';

const initialState = {
  ketentuan: null,
  error: null,
  isLoading: false,
};
export interface State {
  ketentuan: IKetentuan[];
  error: string;
  isLoading: boolean;
}

export function KetentuanReducer(
  state = initialState,
  action: ketentuanActions
) {
  switch (action.type) {
    case KETENTUAN_FETCH_SUCCESS:
      return {
        ...state,
        ketentuan: [...action.payload],
        isLoading: false,
        error: null,
      };
    default:
      return { ...state };
  }
}
