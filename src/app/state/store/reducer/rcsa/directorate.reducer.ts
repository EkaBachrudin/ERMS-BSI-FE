import {
  Directorate,
  IDirectorate,
} from 'src/app/models/rcsa/directorate/directorate.model';
import {
  directorateActions,
  DIRECTORATE_GET,
  DIRECTORATE_DELETE,
  DIRECTORATE_CREATED_SUCCESS,
  DIRECTORATE_UPDATE_SUCCESS,
  DIRECTORATE_FETCH_SUCCESS,
} from '../../actions/rcsa/directorate.action';
const initialState = {
  directorate: null,
  totalPages: null,
  currentPage: null,
  pageSize: null,
  totalElements: null,
  error: null,
  isLoading: false,
};
export interface State {
  directorate: IDirectorate[];
  error: string;
  isLoading: boolean;
}

export function DirectorateReducer(
  state = initialState,
  action: directorateActions
) {
  switch (action.type) {
    case DIRECTORATE_FETCH_SUCCESS:
      return {
        ...state,
        directorate: [...action.payload],
        totalPage: action.totalPages,
        currentPage: action.currentPage,
        pageSize: action.pageSize,
        totalElements: action.totalElement,
        isLoading: false,
        error: null,
      };
    case DIRECTORATE_CREATED_SUCCESS:
      return {
        ...state,
        directorate: [...state.directorate, action.payload],
        isLoading: false,
        error: null,
      };
    case DIRECTORATE_UPDATE_SUCCESS:
      return state.directorate.map((directorat) => {
        if (directorat.id == action.payload.id) {
          return { ...directorat, ...action.payload };
        } else {
          return directorat;
        }
      });
    case DIRECTORATE_DELETE:
      return state.directorate.filter((dir) => {
        return dir.id != action.payload.id;
      });

    default:
      return { ...state };
  }
}
