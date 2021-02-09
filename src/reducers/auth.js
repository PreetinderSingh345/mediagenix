import {
  AUTHENTICATE_USER,
  CLEAR_AUTH_STATE,
  EDIT_USER_FAILED,
  EDIT_USER_SUCCESSFUL,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from '../actions/actionTypes';

// defining the initial authentication state

const initialAuthState = {
  user: {},
  error: null,
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
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        user: action.user,
        isLoggedIn: true,
        inProgressLogin: false,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        inProgressLogin: false,
      };

    case SIGNUP_START:
      return {
        ...state,
        inProgressSignUp: true,
        error: null,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
        user: action.user,
        isLoggedIn: true,
        inProgressSignUp: false,
      };

    case SIGNUP_FAILED:
      return {
        ...state,
        error: action.error,
        inProgressSignUp: false,
      };

    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        error: null,
      };

    case EDIT_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.user,
        error: false,
      };

    case EDIT_USER_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
