import {getItem} from '@/helpers/persistenceStorage'

function sendUserRequest(userData, partUrl = '') {
    return  fetch(`/api/users/${partUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user: userData})
    })
}

function registration(registrationData) {
    return  sendUserRequest(registrationData)
}

function login(loginData) {
    return sendUserRequest(loginData, 'login')
}

function getCurrentUser() {
    let authToken = getItem('accessToken')

    if(authToken) {
        authToken = `Token ${authToken}`
    }


    return fetch('/api/user/', {
        method: 'GET',
        headers: {
            'Authorization': authToken
        }
    })
}
export  {
    registration,
    login,
    getCurrentUser
}