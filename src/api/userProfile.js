import {authGet} from "@/helpers/request";

export default function getUserProfileRequest(slug) {
    return authGet(`/api/profiles/${slug}`).then((responce) => {

        return responce.json()
    })
}