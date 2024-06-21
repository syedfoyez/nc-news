import React, { useState } from 'react';
import { deleteCommentById } from '../utils/api';
import '../styles.css';

const CommentCard = ({ comment, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const loggedInUser = 'grumpy19';

  const handleDelete = () => {
    setIsDeleting(true);
    deleteCommentById(comment.comment_id)
      .then(() => {
        setIsDeleting(false);
        onDelete(comment.comment_id);
      })
      .catch((error) => {
        setIsDeleting(false);
        console.error('Error deleting comment:', error);
      });
  };

  return (
    <div className="comment-card">
      <p>{comment.body}</p>
      <p>By {comment.author} on {new Date(comment.created_at).toLocaleDateString()}</p>
      {comment.author === loggedInUser && (
        <button onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      )}
    </div>
  );
};

export default CommentCard;