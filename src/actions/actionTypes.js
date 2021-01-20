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
