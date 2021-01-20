import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
import {
  AUTHENTICATE_USER,
  CLEAR_AUTH_STATE,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from './actionTypes';

// defining and exporting the action creators

// defining and exporting the start login function

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

// defining and exporting the login failed function

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

// defining and exporting the login success function

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user: user,
  };
}

// defining and exporting the login function

export function login(email, password) {
  return (dispatch) => {
    // dispatching the above start login action(to set in progress login to true)

    dispatch(startLogin());

    // making a post request at the below url(default request type of fetch method is GET)

    const url = APIUrls.login();

    fetch(url, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // dispatching an action to save the user if the login request is successful or a login failed action(providing the error message to the action) if the request is not successful

        if (data.success) {
          // storing the jwt provided by the server containing the user details inside the local storage

          localStorage.setItem('token', data.data.token);

          // dispatching action to save the user

          dispatch(loginSuccess(data.data.user));
        } else {
          dispatch(loginFailed(data.message));
        }
      });
  };
}

// defining and exporting the start sign up function

export function startSignUp() {
  return {
    type: SIGNUP_START,
  };
}

// defining and exporting the sign up success function

export function signUpSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user: user,
  };
}

// defining and exporting the sign up failed function

export function signUpFailed(errorMessage) {
  return {
    type: SIGNUP_FAILED,
    error: errorMessage,
  };
}
// defining and exporting the sign up function

export function signUp(name, email, password, confirmPassword) {
  return function (dispatch) {
    // dispatching the above start signup action(to set in progress sign up to true)

    dispatch(startSignUp());

    // making a post request at the below url(default request type of fetch method is GET)

    const url = APIUrls.signup();

    fetch(url, {
      method: 'POST',

      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

      body: getFormBody({
        name,
        email,
        password,
        confirm_password: confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // dispatching an action to register the user if the signup request is successful or a signup failed action(providing the error message to the action) if the request is not successful

        console.log('data', data);

        if (data.success) {
          // storing the jwt provided by the server containing the user details inside the local storage

          localStorage.setItem('token', data.data.token);

          // dispatching action to register the user

          dispatch(signUpSuccess(data.data.user));
        } else {
          dispatch(signUpFailed(data.message));
        }
      });
  };
}

// defining and exporting the authenticate user function

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user: user,
  };
}

// defining and exporting the logout user function

export function logout() {
  // removing the jwt from the local storage when the user logs out

  localStorage.removeItem('token');

  return {
    type: LOGOUT,
  };
}

// defining and exporting the clear authentication state function

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}
