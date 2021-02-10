import { FETCH_FRIENDS_SUCCESS } from '../actions/actionTypes';

// initial friends state

const initialFriendsState = [];

// defining and exporting the userFriends reducer

export default function userFriends(state = initialFriendsState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return [...action.friends];

    default:
      return state;
  }
}
