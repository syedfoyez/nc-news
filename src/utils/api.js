import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://new-public-repo-projectsetup.onrender.com/api',
});

export const getUserByUsername = (username) => {
  return ncNewsApi.get(`/users/${username}`).then(({ data }) => {
    return data;
  });
};

export const getAllArticles = () => {
  return ncNewsApi.get('/articles').then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (articleId) => {
  return ncNewsApi.get(`/articles/${articleId}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (articleId) => {
  return ncNewsApi.get(`/articles/${articleId}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const voteOnArticle = (articleId, voteChange) => {
  return ncNewsApi.patch(`/articles/${articleId}`, { inc_votes: voteChange })
    .then(({ data }) => {
      return data.article;
    });
};

export const postComment = (articleId, comment) => {
  console.log('Posting comment:', comment);  
  console.log('Article ID:', articleId);    
  return ncNewsApi.post(`/articles/${articleId}/comments`, comment)
    .then(({ data }) => {
      console.log('Posted comment:', data); 
      return data.comment;
    })
    .catch((error) => {
      console.error('Error posting comment:', error.response); 
      throw error;
    });
};