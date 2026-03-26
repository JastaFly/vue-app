import {authPost, authDelete, authPut} from "@/helpers/request";


function getArticleRequest(slug) {
    return fetch(`/api/articles/${slug}`).then((response) => {
        return response.json()
    })
}

function createArticleRequest(articleData) {
    return authPost('/api/articles/', {article: articleData}).then((response) => {

        return response.json()
    })
}

function deleteArticleRequest(slug) {
   return authDelete(`/api/articles/${slug}`).then((response) => {


        return response
    })
}

function updateArticleRequest(slug, articleData) {

    return authPut(`/api/articles/${slug}`, {article: articleData}).then((response) => {

        return response.json()
    })
}

export {
    getArticleRequest,
    createArticleRequest,
    deleteArticleRequest,
    updateArticleRequest
}