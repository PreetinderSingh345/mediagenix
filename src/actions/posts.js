import { APIUrls } from '../helpers/urls';
import { UPDATE_POSTS } from './actionTypes';


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
