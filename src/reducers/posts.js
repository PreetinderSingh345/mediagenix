import { ADD_POST, UPDATE_POSTS } from '../actions/actionTypes';

// defining the initial posts state

const initialPostsState = {
  posts: [],
  loading: true,
};

// defining and exporting the posts reducer

export default function posts(state = initialPostsState, action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return {
        posts: action.posts,
        loading: false,
      };

    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
      };

    default:
      return state;
  }
}
