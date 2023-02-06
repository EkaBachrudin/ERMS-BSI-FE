import { IKeyControl } from 'src/app/models/rcsa/key-control/keyControl';
import {
  keyControlActions,
  KEY_CONTROL_CREATED_SUCCESS,
  KEY_CONTROL_DELETE,
  KEY_CONTROL_FETCH_SUCCESS,
  KEY_CONTROL_UPDATE_SUCCESS,
} from '../../actions/rcsa/keyControl.action';

const initialState = {
  keyControl: null,
  error: null,
  isLoading: false,
};
export interface State {
  keyControl: IKeyControl[];
  error: string;
  isLoading: boolean;
}

export function KeyControlReducer(
  state = initialState,
  action: keyControlActions
) {
  switch (action.type) {
    case KEY_CONTROL_FETCH_SUCCESS:
      return {
        ...state,
        keyControl: [...action.payload],
        totalPages: action.totalPages,
        currentPage: action.currentPage,
        pageSize: action.pageSize,
        isLoading: false,
        error: null,
      };
    case KEY_CONTROL_CREATED_SUCCESS:
      return {
        ...state,
        keyControl: [...state.keyControl, action.payload],
        isLoading: false,
        error: null,
      };
    case KEY_CONTROL_UPDATE_SUCCESS:
      return state.keyControl.map((directorat) => {
        if (directorat.id == action.payload.id) {
          return { ...directorat, ...action.payload };
        } else {
          return directorat;
        }
      });
    case KEY_CONTROL_DELETE:
      return state.keyControl.filter((dir) => {
        return dir.id != action.payload.id;
      });

    default:
      return { ...state };
  }
}
