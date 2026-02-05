import {getAssessToken} from "@/helpers/utils";

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


    return fetch('/api/user/', {
        method: 'GET',
        headers: {
            'Authorization': getAssessToken()
        }
    })
}
export  {
    registration,
    login,
    getCurrentUser
}