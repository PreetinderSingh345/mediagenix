import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from '../actions/actionTypes';

// defining the initial authentication state

const initialAuthState = {
  // defining the user object(obtained from the server), error(if any while logging in), is logged in(if the user is logged in or not) and in progress(to disable the login button when it is pressed, till the response comes) properties

  user: {},
  error: null,
  isLoggedIn: false,
  inProgress: false,
};

// defining and exporting the authentication reducer

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        user: action.user,
        isLoggedIn: true,
        inProgress: false,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
        inProgress: false,
      };

    default:
      return state;
  }
}
