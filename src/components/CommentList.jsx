import React from 'react';
import CommentCard from './CommentCard';
import '../styles.css';

const CommentList = ({ comments, onDelete }) => {
  return (
    <div className="comment-list">
      <h2>Comments</h2>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default CommentList;