import {
  ADD_COMMENT,
  ADD_POST,
  UPDATE_COMMENT_LIKE,
  UPDATE_POSTS,
  UPDATE_POST_LIKE,
} from '../actions/actionTypes';

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

    case UPDATE_POST_LIKE:
      // adding the id of the user who liked the post, to the post's like array

      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.postId) {
          return {
            ...post,
            likes: [...post.likes, action.userId],
          };
        }

        return post;
      });

      // returning the state object with the new posts array

      return {
        ...state,
        posts: updatedPosts,
      };

    case UPDATE_COMMENT_LIKE:
      // adding the id of the user who liked the comment, to the comment's like array

      const updatedPosts2 = state.posts.map((post) => {
        if (post._id === action.postId) {
          const updatedComments = post.comments.map((comment) => {
            if (comment._id === action.commentId) {
              return {
                ...comment,
                likes: [...comment.likes, action.userId],
              };
            }

            return comment;
          });

          return {
            ...post,
            comments: updatedComments,
          };
        }

        return post;
      });

      return {
        ...state,
        posts: updatedPosts2,
      };

    default:
      return state;
  }
}
