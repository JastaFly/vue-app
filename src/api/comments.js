import {authDelete, authGet, authPost} from '@/helpers/request'

function createCommentRequest(articleSlug, commentData) {
    return authPost(`/api/articles/${articleSlug}/comments`, commentData).then((responce) => {
        return responce.json()
    })
}

function getCommentsRequest(articleSlug) {
    return authGet(`/api/articles/${articleSlug}/comments`).then(responce => {
        return responce.json()
    })
}

function deleteCommentRequest(articleSlug, commentId) {
    return authDelete(`/api/articles/${articleSlug}/comments/${commentId}`).then(responce => {
        return responce.json()
    })
}

export {
    createCommentRequest,
    getCommentsRequest,
    deleteCommentRequest
}