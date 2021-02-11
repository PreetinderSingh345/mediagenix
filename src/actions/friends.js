import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import { ADD_FRIEND, FETCH_FRIENDS_SUCCESS } from './actionTypes';

// defining and exporting the fetch friends success function

export function fetchFriendsSuccess(friends) {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    friends,
  };
}

// defining and exporting the fetch user friends function

export function fetchUserFriends() {
  return (dispatch) => {
    const url = APIUrls.userFriends();

    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchFriendsSuccess(data.data.friends));
      });
  };
}

// defining and exporting the addFriend function

export function addFriend(friend) {
  return {
    type: ADD_FRIEND,
    friend,
  };
}
