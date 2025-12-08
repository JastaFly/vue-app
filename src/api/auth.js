const baseUrl = '/api' // Теперь запрос идет на localhost:8080/api
console.log(`${baseUrl}/users/`)

function registration(registrationData) {
    return  fetch(`${baseUrl}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user: registrationData})
    })
}
export  {
    registration
}