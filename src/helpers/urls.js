// defining the root part of the apis

const API_ROOT = 'http://codeial.codingninjas.com:8000/api/v2/';

// defining and exporting the api urls

export const APIUrls = {
  fetchPosts: (page = 1, limit = 25) =>
    `${API_ROOT}posts?page=${page}&limit=${limit}`,

  login: () => `${API_ROOT}users/login`,

  signup: () => `${API_ROOT}users/signup`,

  editProfile: () => `${API_ROOT}users/edit`,

  userProfile: (userId) => `${API_ROOT}users/${userId}`,

  userFriends: () => `${API_ROOT}friendship/fetch_user_friends`,

  addFriend: (userId) =>
    `${API_ROOT}friendship/create_friendship?user_id=${userId}`,

  removeFriend: (userId) =>
    `${API_ROOT}friendship/remove_friendship?user_id=${userId}`,

  createPost: () => `${API_ROOT}posts/create`,

  createComment: () => `${API_ROOT}comments`,

  // using a commmon toggle like function for api calls for liking a post/comment

  toggleLike: (id, likeType) =>
    `${API_ROOT}likes/toggle?likeable_id=${id}&likeable_type=${likeType}`,
};
