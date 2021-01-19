import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from '../actions/actionTypes';

// defining the initial authentication state

const initialAuthState = {
  

  user: {},
  errorLogin: null,
  errorSignUp: null,
  isLoggedIn: false,
  inProgressLogin: false,
  inProgressSignUp: false,
};

// defining and exporting the authentication reducer

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgressLogin: true,
        errorLogin: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        errorLogin: null,
        user: action.user,
        isLoggedIn: true,
        inProgressLogin: false,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        errorLogin: action.error,
        inProgressLogin: false,
      };

    case SIGNUP_START:
      return {
        ...state,
        inProgressSignUp: true,
        errorSignUp: null,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        errorSignUp: null,
        user: action.user,
        isLoggedIn: true,
        inProgressSignUp: false,
      };

    case SIGNUP_FAILED:
      return {
        ...state,
        errorSignUp: action.error,
        inProgressSignUp: false,
      };

    default:
      return state;
  }
}
