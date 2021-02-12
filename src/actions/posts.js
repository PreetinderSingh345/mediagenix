import { APIUrls } from '../helpers/urls';
import { ADD_POST, UPDATE_POSTS } from './actionTypes';
import { getAuthTokenFromLocalStorage, getFormBody } from '../helpers/utils';

// defining and exporting the action creators

// defining and exporting the fetchPosts function

export function fetchPosts() {
  return (dispatch) => {
    // getting some posts from the below api

    let url = APIUrls.fetchPosts();

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // dispatching an action to update the posts

        dispatch(updatePosts(data.data.posts));
      });
  };
}

// defining and exporting the updatePosts function

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts: posts,
  };
}

// defining and exporting the addPost function

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

// defining and exporting the createPost function

export function createPost(content) {
  return (dispatch) => {
    // getting the url

    const url = APIUrls.createPost();

    // dispatching a post request at the above url to create a post

    fetch(url, {
      method: 'POST',

      // specifying the headers(content type and authorization(to check that only a logged in user is making a post) properties) and body

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },

      body: getFormBody({
        content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // dispatching an action to add the post(providing the post) if the post has been created successfully

        if (data.success) {
          dispatch(addPost(data.data.post));
        }
      });
  };
}
