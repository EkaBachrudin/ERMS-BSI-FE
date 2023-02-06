import { Auth } from 'src/app/models/authentication/auth.model';
import { AuthActions,LOGOUT,LOGIN_FAIL,AUTHENTICATE_SUCCESS,AUTHENTICATE_START } from '../../actions/auth/auth.actions'; 

export interface State {
	user: Auth;
	error: string;
	isLoading: boolean;
}


const initialState = {
	user: null,
	error: null,
	isLoading: false
};
export function AuthReducer(state = initialState, action: AuthActions) {
	switch (action.type) {
		case AUTHENTICATE_SUCCESS:
			let user = new Auth(
				action.payload.email,
				"usersId",
				action.payload.token,
                action.payload.role
			);

			return {
				...state,
				isLoading: false,
				error: null,
				user
			};
		case AUTHENTICATE_START:
			return {
				...state,
				isLoading: true,
				error: null
			};

		case LOGIN_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		case LOGOUT:
			return {
				...state,
				error: null,
				user: null
			};

		default:
			return { ...state };
	}
}
