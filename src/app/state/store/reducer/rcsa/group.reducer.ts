import { IGroup } from 'src/app/models/rcsa/group/gruop.model';
import {
  GROUP_FETCH_FAILURE,
  GROUP_FETCH_SUCCESS,
  GROUP_CREATED_SUCCESS,
  GroupActions,
} from '../../actions/rcsa/group.action';

const initialState = {
  group: null,
  totalElements: null,
  totalPages: null,
  currentPage: null,
  pageSize: null,
  error: null,
  isLoading: false,
};
export interface State {
  group: IGroup[];
  totalElements: null;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  error: string;
  isLoading: boolean;
}

export function GroupReducer(state = initialState, action: GroupActions) {
  switch (action.type) {
    case GROUP_FETCH_SUCCESS:
      return {
        ...state,
        group: [...action.payload],
        totalElements: action.totalElement,
        totalPages: action.totalPages,
        currentPage: action.currentPage,
        pageSize: action.pageSize,
        isLoading: false,
        error: null,
      };
    case GROUP_CREATED_SUCCESS:
      return {
        ...state,
        group: [...state.group, action.payload],
        isLoading: false,
        error: null,
      };
    case GROUP_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
}
