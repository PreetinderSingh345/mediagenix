import React from 'react';

// defining and exporting the Comment function(getting the comment as props)

function Comment({ comment }) {
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

export default Comment;
