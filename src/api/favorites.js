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

export {
    addToFavorites,
    removeFromFavorites
}