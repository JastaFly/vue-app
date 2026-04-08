import {authGet, authPut} from "@/helpers/request";

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

    return sendUserRequest(loginData, 'login').then((responce) => {
        return responce.json()
    })
}

function getCurrentUser() {


    return authGet('/api/user/').then((responce) => {
        return responce.json()
    })
}

function updateCurrentUser(newUserData) {
return authPut('/api/user', {user: newUserData}).then((responce) => {

    return responce.json()
})
}
export  {
    registration,
    login,
    getCurrentUser,
    updateCurrentUser
}