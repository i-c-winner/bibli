function apiRequest () {
    return fetch('https://coralboat.online/v1/data')
    .then ((result)=>{       
        return result.json()
    })
}

export default apiRequest;
