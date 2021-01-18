import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
import { LOGIN_START } from './actionTypes';

// defining and exporting the action creators

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function dispatch(email, password) {
  return (dispatch) => {
    // making a post request at the below url(default request type of fetch method is GET)

    const url = APIUrls.login();

    fetch(url, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: getFormBody({ email, password }),
    });
  };
}
