import React from 'react';
import { connect } from 'react-redux';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addLikeToStore } from '../actions/posts';

// defining and exporting the Comment class

class Comment extends React.Component {
  // function to handle the click on like comment icon

  handleCommentLike = () => {
    const { comment, user, postId } = this.props;

    this.props.dispatch(
      addLikeToStore(comment._id, 'Comment', user._id, postId)
    );
  };

  render() {
    // getting the data from props

    const { comment } = this.props;

    // getting the date at which the comment was created

    const date = new Date(Date.parse(comment.createdAt));

    return (
      // post comment item(each comment having its unique id)

      <div className="post-comment-item" id={comment._id}>
        {/* post comment header consisting of post comment author, posting time and likes */}

        <div className="post-comment-header">
          <div className="post-comment-author">{comment.user.name}</div>

          <div className="post-comment-time post-comment-time-likes">
            {`${date.toTimeString().slice(0, 8)} ${date.toLocaleDateString()}`}
          </div>

          <FontAwesomeIcon
            className="post-comment-like-icon"
            icon={faHeart}
            onClick={() => this.handleCommentLike()}
          />

          <div className="post-comment-likes post-comment-time-likes">
            {comment.likes.length}
          </div>
        </div>

        {/* post comment content */}

        <div className="post-comment-content thin-scrollbar">
          {comment.content}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
  };
}

export default connect(mapStateToProps)(Comment);
