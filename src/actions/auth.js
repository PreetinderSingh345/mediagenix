import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from './actionTypes';

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
    type: LOGIN_FAIL,
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
    // dispatching the above start login action(to set in progress to true)

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
        console.log('data', data);

        // dispatching an action to save the user if the login request is successful or a login failed action(providing the error message to the action) if the request is not successful

        if (data.success) {
          // dispatching action to save the user

          dispatch(loginSuccess(data.data.user));
        } else {
          dispatch(loginFailed(data.message));
        }
      });
  };
}
