// defining and exporting the action types

export const UPDATE_POSTS = 'UPDATE_POSTS';

// defining and exporting the action creators

// defining and exporting the fetchPosts function

export function fetchPosts() {
    
  return (dispatch) => {
    // getting some posts from the below api

    let url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=5';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // printing the data and dispatching an action to update the posts

        console.log(data);
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
