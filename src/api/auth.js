import {authGet} from "@/helpers/request";

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


    return authGet('/api/user/')
}
export  {
    registration,
    login,
    getCurrentUser
}