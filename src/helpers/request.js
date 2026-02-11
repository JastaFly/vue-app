import {getItem} from "@/helpers/persistenceStorage";

function getAssessToken() {
    let authToken = getItem('accessToken')

    if(authToken) {
        authToken = `Token ${authToken}`
    }

    return authToken
}

function authGet(url) {
    return  fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': getAssessToken()
        }
    })
}

export {
    authGet
}