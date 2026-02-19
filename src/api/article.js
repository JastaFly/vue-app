import {authGet} from "@/helpers/request";

export default function getArticleRequest(slug) {
    return authGet(`/api/articles/${slug}`).then((response) => {
        return response.json()
    })
}