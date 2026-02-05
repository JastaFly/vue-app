
import {getAssessToken} from "@/helpers/utils";

export default function getFeedApi(url) {
    return fetch(`/api/${url}/`, {
        method: 'GET',
        headers: {
            'Authorization': getAssessToken()
        }
    })
}