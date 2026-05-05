
function range(start, end) {
    return [...Array(end).keys()].map(el => el + start)
}

function formatDate(sourceDate) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }).format(new Date(sourceDate))
}



export {
    range,
    formatDate
}