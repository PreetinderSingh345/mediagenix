import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faThumbsUp,
  faComments,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
// defining and exporting the PostsList class

class PostsList extends React.Component {
  render() {
    // getting the posts

    const { posts } = this.props;

    return (
      // posts list

      <div id="posts-list">
        {posts.map((post) => {
          return (
            // post(each post having its unique id and key)

            <div className="post" id={posts._id} key={post._id}>
              {/* post header containing post avatar, author and posting time */}

              <div className="post-header">
                <div className="post-avatar">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="post-avatar-icon"
                  />
                </div>

                <div className="post-author-time-container">
                  <div className="post-author">{post.user.name}</div>

                  <div className="post-time">
                    <FontAwesomeIcon icon={faClock} className="time-icon" />
                    <span>a minute ago</span>
                  </div>
                </div>
              </div>

              {/* post content */}

              <div className="post-content thin-scrollbar">{post.content}</div>

              {/* post actions consisting of post list and comment */}

              <div className="post-actions">
                <div className="post-like like-comment">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="post-like-icon"
                  />

                  <div className="post-like-count like-comment-count">
                    {post.likes.length}
                  </div>
                </div>

                <div className="post-comment like-comment">
                  <FontAwesomeIcon
                    icon={faComments}
                    className="post-comment-icon"
                  />

                  <div className="post-comment-count like-comment-count">
                    {post.comments.length}
                  </div>
                </div>
              </div>

              {/* post comment form consisting of post input */}

              <div className="post-comment-form">
                <input
                  type="text"
                  placeholder="Comment here..."
                  className="post-comment-input"
                />
              </div>

              {/* post comments list */}

              <div className="post-comments-list thin-scrollbar">
                {/* post comment item */}

                <div className="post-comment-item">
                  {/* post comment header consisting of post comment author, posting time and likes */}

                  <div className="post-comment-header">
                    <div className="post-comment-author">John</div>
                    <div className="post-comment-time post-comment-time-likes">
                      an hour ago
                    </div>
                    <div className="post-comment-likes post-comment-time-likes">
                      22
                    </div>
                  </div>

                  {/* post comment content */}

                  <div className="post-comment-content thin-scrollbar">
                    a sample comment
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
