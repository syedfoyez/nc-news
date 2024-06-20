import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, voteOnArticle } from '../utils/api';
import CommentList from './CommentList';
import '../styles.css';

const ArticleIndividual = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [votes, setVotes] = useState(0);
  const [voteError, setVoteError] = useState(null);

  useEffect(() => {
    getArticleById(articleId)
    .then((article) => {
        setArticle(article);
        setVotes(article.votes);
    })
    .catch((error) => console.error('Error fetching article:', error));
  }, [articleId]);

  const handleVote = (voteChange) => {
    setVotes((currentVotes) => currentVotes + voteChange);
    setVoteError(null);

    voteOnArticle(articleId, voteChange).catch((error) => {
      setVotes((currentVotes) => currentVotes - voteChange);
      setVoteError('Error voting on article. Please try again.');
      console.error('Error voting on article:', error);
    });
  };

  return (
    article ? (
      <div className="article-individual">
        <h1>{article.title}</h1>
        <p>By {article.author} on {new Date(article.created_at).toLocaleDateString()}</p>
        <p>{article.body}</p>
        <div className="article-footer">
          <div>
            <button onClick={() => handleVote(1)}>Upvote</button>
            <button onClick={() => handleVote(-1)}>Downvote</button>
            <span>Votes: {votes}</span>
          </div>
          {voteError && <p className="error">{voteError}</p>}
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