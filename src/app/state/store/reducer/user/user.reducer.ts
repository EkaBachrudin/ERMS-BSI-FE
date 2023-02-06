import { IUser } from 'src/app/models/user/user';
import {
  userActions,
  USER_CREATED_SUCCESS,
  USER_DELETE,
  USER_FETCH_SUCCESS,
  USER_UPDATE_SUCCESS,
} from '../../actions/user/user.action';

const initialState = {
  user: null,
  totalPage: null,
  currentPage: null,
  pageSize: null,
  error: null,
  isLoading: false,
};
export interface State {
  user: IUser[];
  error: string;
  isLoading: boolean;
}

export function UserReducer(state = initialState, action: userActions) {
  switch (action.type) {
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        user: [...action.payload],
        totalPage: action.totalPages,
        currentPage: action.currentPage,
        pageSize: action.pageSize,
        isLoading: false,
        error: null,
      };
    case USER_CREATED_SUCCESS:
      return {
        ...state,
        user: [...state.user, action.payload],
        isLoading: false,
        error: null,
      };
    case USER_UPDATE_SUCCESS:
      return state.user.map((user) => {
        if (user.id == action.payload.id) {
          return { ...user, ...action.payload };
        } else {
          return user;
        }
      });
    case USER_DELETE:
      return state.user.filter((user) => {
        return user.id != action.payload.id;
      });

    default:
      return { ...state };
  }
}
