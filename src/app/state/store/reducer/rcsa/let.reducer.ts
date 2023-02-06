import { ILostEventType } from 'src/app/models/rcsa/let/let';
import {
  letActions,
  LET_CREATED_SUCCESS,
  LET_DELETE,
  LET_FETCH_SUCCESS,
  LET_UPDATE_SUCCESS,
} from '../../actions/rcsa/let.action';

const initialState = {
  let: null,
  totalPages: null,
  currentPage: null,
  pageSize: null,
  totalElements: null,
  error: null,
  isLoading: false,
};
export interface State {
  let: ILostEventType[];
  error: string;
  isLoading: boolean;
}

export function LetReducer(state = initialState, action: letActions) {
  switch (action.type) {
    case LET_FETCH_SUCCESS:
      return {
        ...state,
        let: [...action.payload],
        totalPage: action.totalPages,
        currentPage: action.currentPage,
        pageSize: action.pageSize,
        totalElements: action.totalElement,
        isLoading: false,
        error: null,
      };
    case LET_CREATED_SUCCESS:
      return {
        ...state,
        let: [...state.let, action.payload],
        isLoading: false,
        error: null,
      };
    case LET_UPDATE_SUCCESS:
      return state.let.map((directorat) => {
        if (directorat.id == action.payload.id) {
          return { ...directorat, ...action.payload };
        } else {
          return directorat;
        }
      });
    case LET_DELETE:
      return state.let.filter((lostEventType) => {
        return lostEventType.id != action.payload.id;
      });

    default:
      return { ...state };
  }
}
