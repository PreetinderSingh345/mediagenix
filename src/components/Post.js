import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Comment } from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faThumbsUp,
  faComments,
  faClock,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { createComment } from '../actions/posts';

// defining and exporting the Post component

class Post extends React.Component {
  // defining the constructor function

  constructor(props) {
    super(props);

    // defining the state consisting of the content

    this.state = {
      content: '',
    };
  }

  // function to handle the change in the comment input

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  // function to handle the click on the comment button

  handleClick = () => {
    // getting the data from props and state

    const { _id: postId } = this.props.post;
    const { content } = this.state;

    // dispatching an action to create a comment(passing to it the commment content and the id of the post for which the comment is being made)

    this.props.dispatch(createComment(content, postId));
  };

  render() {
    // getting the data from props

    const { post, isLoggedIn } = this.props;

    // getting the date at which the post was created

    const date = new Date(Date.parse(post.createdAt));

    return (
      // post(each post having its unique id)

      <div className="post" id={post._id}>
        {/* post header containing post avatar, author and posting time */}

        <div className="post-header">
          {/* link to the profile of the user */}

          <Link to={`/user/${post.user._id}`}>
            <div className="post-avatar">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="post-avatar-icon"
              />
            </div>
          </Link>

          <div className="post-author-time-container">
            <div className="post-author">{post.user.name}</div>

            <div className="post-time">
              <FontAwesomeIcon icon={faClock} className="time-icon" />

              {/* date of post creation */}

              <span>{`${date
                .toTimeString()
                .slice(0, 8)} ${date.toLocaleDateString()}`}</span>
            </div>
          </div>
        </div>

        {/* post content */}

        <div className="post-content thin-scrollbar">{post.content}</div>

        {/* post actions consisting of post list and comment */}

        <div className="post-actions">
          <div className="post-like like-comment">
            <FontAwesomeIcon icon={faThumbsUp} className="post-like-icon" />

            <div className="post-like-count like-comment-count">
              {post.likes.length}
            </div>
          </div>

          <div className="post-comment like-comment">
            <FontAwesomeIcon icon={faComments} className="post-comment-icon" />

            <div className="post-comment-count like-comment-count">
              {post.comments.length}
            </div>
          </div>
        </div>

        {/* post comment form consisting of post comment input and button(shown only when the user is logged in) */}

        {isLoggedIn && (
          <div className="post-comment-form">
            <input
              type="text"
              placeholder="Comment here..."
              className="post-comment-input"
              value={this.state.content}
              onChange={(event) => this.handleChange(event)}
            />

            <button
              className="post-comment-btn"
              onClick={() => this.handleClick()}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        )}

        {/* post comments list containing comments(each comment having its unique key) */}

        <div className="post-comments-list thin-scrollbar">
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment._id} id={comment._id} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect()(Post);
