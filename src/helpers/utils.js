import {getItem} from "@/helpers/persistenceStorage";

function range(start, end) {
    return [...Array(end).keys()].map(el => el + start)
}

function getAssessToken() {
    let authToken = getItem('accessToken')

    if(authToken) {
        authToken = `Token ${authToken}`
    }

    return authToken
}

export {
    range,
    getAssessToken
}