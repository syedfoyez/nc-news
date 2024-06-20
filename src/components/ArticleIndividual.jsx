import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils/api';
import CommentList from './CommentList';
import '../styles.css';

const ArticleIndividual = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticleById(articleId)
      .then((article) => setArticle(article))
      .catch((error) => console.error('Error fetching article:', error));
  }, [articleId]);

  return (
    article ? (
      <div className="article-individual">
        <h1>{article.title}</h1>
        <p>By {article.author} on {new Date(article.created_at).toLocaleDateString()}</p>
        <p>{article.body}</p>
        <div className="article-footer">
          <span>Votes: {article.votes}</span>
          <span>Comments: {article.comment_count}</span>
        </div>
        <CommentList articleId={articleId} />
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default ArticleIndividual;