import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';

// defining and exporting the root reducer

export default combineReducers({
  posts,
  auth,
});
