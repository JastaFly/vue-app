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

function authPost(url, data) {
    return  fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': getAssessToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

function authDelete(url) {
    return  fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': getAssessToken()
        }
    })
}

export {
    authGet,
    authPost,
    authDelete
}