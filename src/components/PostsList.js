import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faThumbsUp,
  faComment,
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

                  <div className="post-time">a minute ago</div>
                </div>
              </div>

              {/* post content */}

              <div className="post-content">{post.content}</div>

              {/* post actions consisting of post list and comment */}

              <div className="post-actions">
                <div className="post-like">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="post-like-icon"
                  />

                  <div className="post-like-count">{post.likes.length}</div>
                </div>

                <div className="post-comment">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="post-comment-icon"
                  />

                  <div className="post-comment-count">
                    {post.comments.length}
                  </div>
                </div>
              </div>

              {/* post comment form consisting of post input */}

              <div className="post-comment-form">
                <input type="text" className="post-input" />
              </div>

              {/* post comments list */}

              <div className="post-comments-list">
                {/* post comment item */}

                <div className="post-comment-item">
                  {/* post comment header consisting of post comment author, posting time and likes */}

                  <div className="post-comment-header">
                    <div className="post-comment-author">John</div>
                    <div className="post-comment-time">an hour ago</div>
                    <div className="post-comment-likes">22</div>
                  </div>

                  {/* post comment content */}

                  <div className="post-comment-content">a sample comment</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PostsList;
