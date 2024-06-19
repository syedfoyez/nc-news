import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'


const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <h2><Link to={`/article/${article.article_id}`}>{article.title}</Link></h2>
      <p>By {article.author} on {new Date(article.created_at).toLocaleDateString()}</p>
      <img src={article.article_img_url}/>
      <div className="article-card-footer">
        <div>
          <button>Upvote</button>
          <button>Downvote</button>
          <span>{article.votes}</span>
        </div>
        <div>
          <span>{article.comment_count} comments</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;