import {authGet} from "@/helpers/request";


export default function getFeedApi(url) {
    return authGet(`/api/${url}/`)
}