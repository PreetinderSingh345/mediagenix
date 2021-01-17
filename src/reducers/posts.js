import { UPDATE_POSTS } from '../actions/posts';

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

    default:
      return state;
  }
}
