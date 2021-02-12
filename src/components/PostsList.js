import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import CreatePost from './CreatePost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/posts.css';

// defining and exporting the PostsList class

class PostsList extends React.Component {
  render() {
    // getting the date from props

    const { posts, isLoggedIn } = this.props;

    return (
      // posts list

      <div id="posts-list">
        {/* showing the CreatePost component or the login message depending on whehter the user is logged in or not */}

        {isLoggedIn ? (
          <CreatePost />
        ) : (
          <div id="cannot-create-post">
            <span>Login to</span>
            <FontAwesomeIcon id="lock-icon" icon={faUnlockAlt} />
            <span>all features</span>
          </div>
        )}

        {/* posts container containing posts(each post having its unique key) */}

        <div id="posts-container">
          {posts.map((post) => (
            <Post post={post} isLoggedIn={isLoggedIn} key={post._id} />
          ))}
        </div>
      </div>
    );
  }
}

// defining the type of props of this PostList component

PostsList.propTypes = {
  // defining the posts prop to be a required array

  posts: PropTypes.array.isRequired,
};

export default PostsList;
