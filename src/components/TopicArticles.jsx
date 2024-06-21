import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesByTopic } from '../utils/api';
import ArticleCard from './ArticleCard';
import '../styles.css';

const TopicArticles = () => {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticlesByTopic(slug)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => console.error('Error fetching articles:', error));
  }, [slug]);

  return (
    <div className="topic-articles">
      <h2>Articles for {slug}</h2>
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default TopicArticles;