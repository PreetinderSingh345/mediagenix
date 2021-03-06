import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import userProfile from './profile';
import userFriends from './friends';

// defining and exporting the root reducer

export default combineReducers({
  posts,
  auth,
  userProfile,
  userFriends,
});
