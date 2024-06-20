import React, { useState } from 'react';
import { postComment } from '../utils/api';
import '../styles.css';

const AddComment = ({ articleId, onCommentAdded }) => {
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const newComment = {
      username: 'grumpy19', 
      body: comment,
    };

    postComment(articleId, newComment)
      .then((postedComment) => {
        setIsLoading(false);
        setComment('');
        onCommentAdded(postedComment);
      })
      .catch((err) => {
        setIsLoading(false);
        setError('Error posting comment. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment-form">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add your comment..."
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Posting...' : 'Post Comment'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default AddComment;