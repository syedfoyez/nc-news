import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://new-public-repo-projectsetup.onrender.com/api"
});


export const getUserByUsername = (username) => {
    return ncNewsApi
    .get(`/users/${username}`)
    .then(({data})=>{
        return data;
    })
}

export const getAllArticles = () => {
    return ncNewsApi
    .get('/articles')
    .then(({data})=>{
        return data.articles
    })
}

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