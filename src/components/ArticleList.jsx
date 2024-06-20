import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { getAllArticles } from '../utils/api';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then((articles) => setArticles(articles))
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;