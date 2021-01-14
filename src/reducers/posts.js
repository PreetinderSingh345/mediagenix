import { UPDATE_POSTS } from '../actions/posts';

// defining the initial posts state

const initialPostsState = [];

// defining and exporting the posts reducer

export default function posts(state = initialPostsState, action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    default:
      return state;
  }
}
