import {
  FETCH_USER_PROFILE,
  USER_PROFILE_FAILURE,
  USER_PROFILE_SUCCESS,
} from './actionTypes';

import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';

// defining and exporting the start user profile fetch function

export function startUserProfileFetch() {
  return {
    type: FETCH_USER_PROFILE,
  };
}

// defining and exporting the user profile success function

export function userProfileSuccess(user) {
  return {
    type: USER_PROFILE_SUCCESS,
    user,
  };
}

// defining and exporting the user profile failure function

export function userProfileFailure(errorMessage) {
  return {
    type: USER_PROFILE_FAILURE,
    error: errorMessage,
  };
}

// defining and exporting the fetch user profile function

export function fetchUserProfile(userId) {
  return (dispatch) => {
    //   dispatching an action to start the process of fetching the user profile

    dispatch(startUserProfileFetch());

    const url = APIUrls.userProfile(userId);

    // making a get request to the above url to get the user from its id(we have to pass the headers in this case)

    fetch(url, {
      // passing the content type and the jwt bearer token(needed for authorization as only logged in users can view other user's profiles) inside the headers

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // dispatching a success or failure user profile action with the required data i.e. user or error respectively

        if (data.success) {
          dispatch(userProfileSuccess(data.data.user));
        } else {
          dispatch(userProfileFailure(data.message));
        }
      });
  };
}
