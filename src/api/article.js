import {authPost, authDelete} from "@/helpers/request";


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

export {
    getArticleRequest,
    createArticleRequest,
    deleteArticleRequest
}