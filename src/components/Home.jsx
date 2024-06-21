import React from 'react';
import ArticleList from './ArticleList';

const Home = () => {
  const user = {
    username: 'john_doe',
    name: 'John Doe',
  };

  return (
    <div>
      <ArticleList />
    </div>
  );
};

export default Home;