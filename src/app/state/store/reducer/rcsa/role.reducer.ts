import { IRole } from 'src/app/models/rcsa/role/role.model';
import {
  roleActions,
  ROLE_CREATED_SUCCESS,
  ROLE_FETCH_SUCCESS,
} from '../../actions/rcsa/role.action';
const initialState = {
  role: null,
  totalPage: null,
  currentPage: null,
  pageSize: null,
  error: null,
  isLoading: false,
};
export interface State {
  role: IRole[];
  error: string;
  isLoading: boolean;
}

export function RoleReducer(state = initialState, action: roleActions) {
  switch (action.type) {
    case ROLE_FETCH_SUCCESS:
      return {
        ...state,
        role: [...action.payload],
        totalPage: action.totalPages,
        currentPage: action.currentPage,
        pageSize: action.pageSize,
        isLoading: false,
        error: null,
      };
    case ROLE_CREATED_SUCCESS:
      return {
        ...state,
        role: [...state.role, action.payload],
        isLoading: false,
        error: null,
      };

    default:
      return { ...state };
  }
}
