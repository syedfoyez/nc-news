import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import { getCommentsByArticleId } from '../utils/api';
import '../styles.css';

const CommentList = ({ articleId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(articleId)
      .then((comments) => setComments(comments))
      .catch((error) => console.error('Error fetching comments:', error));
  }, [articleId]);

  return (
    <div className="comment-list">
      <h2>Comments</h2>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;