function getItem (key) {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.error(error)

        return null
    }
}

function setItem(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
        console.error(error)

    }
}

export {getItem, setItem}