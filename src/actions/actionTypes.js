// defining and exporting the action types

// post action type

export const UPDATE_POSTS = 'UPDATE_POSTS';

// login action types

// when the user requests to login from the client side, the server gives a successful/error response for the login request

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

// signup action types

// when the user requests to signup from the client side, the server gives a successful/error response for the signup request

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';

// authentication action type

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

// logout action type

export const LOGOUT = 'LOGOUT';

// clearing the authentication state action type

export const CLEAR_AUTH_STATE = 'CLEAR_AUTH_STATE';

// edit user action types

export const EDIT_USER_SUCCESSFUL = 'EDIT_USER_SUCCESSFUL';
export const EDIT_USER_FAILED = 'EDIT_USER_FAILED';

// user profile action types

export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
export const USER_PROFILE_FAILURE = 'USER_PROFILE_FAILURE';
export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';

// friend action types

export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

// post action type

export const ADD_POST = 'ADD_POST';
