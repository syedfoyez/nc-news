import React from 'react';
import '../styles.css';

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p>{comment.body}</p>
      <p>By {comment.author} on {new Date(comment.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default CommentCard;