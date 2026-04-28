import {authDelete, authPost} from "@/helpers/request";

function getUrl(slug) {
    return `/api/articles/${slug}/favorite`
}
function addToFavorites(slug) {
    authPost(getUrl(slug))
}

function removeFromFavorites(slug) {
    authDelete(getUrl(slug))
}

function followToAuthor(user) {
    return authPost(`/api/profiles/${user}/follow`).then((response) => {
        return response.json()
    })
}

function unfollowFromAuthor(user) {
    return authDelete(`/api/profiles/${user}/follow`).then((response) => {
        return response.json()
    })
}

export {
    addToFavorites,
    removeFromFavorites,
    followToAuthor,
    unfollowFromAuthor
}