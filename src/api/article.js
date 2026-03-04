import {authGet, authPost} from "@/helpers/request";

function getArticleRequest(slug) {
    return authGet(`/api/articles/${slug}`).then((response) => {
        return response.json()
    })
}

function createArticleRequest(articleData) {
    return authPost('/api/articles/', {article: articleData}).then((response) => {

        return response.json()
    })
}

export {
    getArticleRequest,
    createArticleRequest
}