import { ISegmen } from 'src/app/models/rcsa/segmen/segmen';
import {
  segmenActions,
  SEGMEN_CREATED_SUCCESS,
  SEGMEN_DELETE,
  SEGMEN_FETCH_SUCCESS,
  SEGMEN_UPDATE_SUCCESS,
} from '../../actions/rcsa/segmen.action';

const initialState = {
  segmen: null,
  error: null,
  isLoading: false,
};
export interface State {
  segmen: ISegmen[];
  error: string;
  isLoading: boolean;
}

export function SegmenReducer(state = initialState, action: segmenActions) {
  switch (action.type) {
    case SEGMEN_FETCH_SUCCESS:
      return {
        ...state,
        segmen: [...action.payload],
        isLoading: false,
        error: null,
      };
    case SEGMEN_CREATED_SUCCESS:
      return {
        ...state,
        segmen: [...state.segmen, action.payload],
        isLoading: false,
        error: null,
      };
    case SEGMEN_UPDATE_SUCCESS:
      return state.segmen.map((directorat) => {
        if (directorat.id == action.payload.id) {
          return { ...directorat, ...action.payload };
        } else {
          return directorat;
        }
      });
    case SEGMEN_DELETE:
      return state.segmen.filter((dir) => {
        return dir.id != action.payload.id;
      });

    default:
      return { ...state };
  }
}
