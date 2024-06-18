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
