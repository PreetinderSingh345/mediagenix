import {
  ADD_FRIEND,
  FETCH_FRIENDS_SUCCESS,
  REMOVE_FRIEND,
} from '../actions/actionTypes';

// defining the initial friends state

const initialFriendsState = {
  friends: [],
  loading: true,
};

// defining and exporting the userFriends reducer

export default function userFriends(state = initialFriendsState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return {
        friends: action.friends,
        loading: false,
      };

    case ADD_FRIEND:
      return {
        ...state,
        friends: state.friends.concat(action.friend),
      };

    case REMOVE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(
          (friend) => friend.to_user._id !== action.userId
        ),
      };

    default:
      return state;
  }
}
