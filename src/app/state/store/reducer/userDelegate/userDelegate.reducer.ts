import { IUserDelegate } from 'src/app/models/userDelegate/userDelegate';
import {
  userDelegateActions,
  USERDELEGATE_CREATED_SUCCESS,
  USERDELEGATE_DELETE,
  USERDELEGATE_FETCH_SUCCESS,
  USERDELEGATE_UPDATE_SUCCESS,
} from '../../actions/userDelegate/userDelegate.action';

const initialState = {
  userDelegate: null,
  error: null,
  isLoading: false,
};
export interface State {
  userDelegate: IUserDelegate[];
  error: string;
  isLoading: boolean;
}

export function UserDelegateReducer(
  state = initialState,
  action: userDelegateActions
) {
  switch (action.type) {
    case USERDELEGATE_FETCH_SUCCESS:
      return {
        ...state,
        userDelegate: [...action.payload],
        isLoading: false,
        error: null,
      };
    case USERDELEGATE_CREATED_SUCCESS:
      return {
        ...state,
        userDelegate: [...state.userDelegate, action.payload],
        isLoading: false,
        error: null,
      };
    case USERDELEGATE_UPDATE_SUCCESS:
      return state.userDelegate.map((user) => {
        if (user.id == action.payload.id) {
          return { ...user, ...action.payload };
        } else {
          return user;
        }
      });
    case USERDELEGATE_DELETE:
      return state.userDelegate.filter((user) => {
        return user.id != action.payload.id;
      });

    default:
      return { ...state };
  }
}
