import { ADD_COMMENT, ADD_POST, UPDATE_POSTS } from '../actions/actionTypes';

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

    case ADD_COMMENT:
      // adding the comment to the comments array of the post on which the comment has been made

      const newPosts = state.posts.map((post) => {
        if (post._id === action.postId) {
          return {
            ...post,
            comments: [action.comment, ...post.comments],
          };
        }

        return post;
      });

      // returning the state object with the new posts array

      return {
        ...state,
        posts: newPosts,
      };

    default:
      return state;
  }
}
