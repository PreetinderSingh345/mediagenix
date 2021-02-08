// defining the root part of the apis

const API_ROOT = 'http://codeial.codingninjas.com:8000/api/v2/';

// defining and exporting the api urls

export const APIUrls = {
  fetchPosts: (page = 1, limit = 5) =>
    `${API_ROOT}posts?page=${page}&limit=${limit}`,

  login: () => `${API_ROOT}users/login`,

  signup: () => `${API_ROOT}users/signup`,

  editProfile: () => `${API_ROOT}users/edit`,
};
