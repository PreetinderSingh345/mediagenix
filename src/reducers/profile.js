import {
  FETCH_USER_PROFILE,
  USER_PROFILE_FAILURE,
  USER_PROFILE_SUCCESS,
} from '../actions/actionTypes';

// defining the initial user profile state

const initialUserProfileState = {
  user: {},
  error: null,
  inProgress: false,
};

// defining and exporting the user profile reducer

export default function userProfile(state = initialUserProfileState, action) {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.user,
        error: null,
        inProgress: false,
      };

    case USER_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error,
        inProgress: false,
      };

    case FETCH_USER_PROFILE:
      return {
        ...state,
        inProgress: true,
      };

    default:
      return state;
  }
}
