import axios from "axios"

export const getServerData = (type) => {

    let token = localStorage.getItem('bearerToken')
    let getAnimalsUrl =
        type === 'today'
            ? 'https://acits-api.herokuapp.com/api/v1/prescriptions/today/'
            : 'https://acits-api.herokuapp.com/api/v1/animals/'

    return axios.get(
        getAnimalsUrl,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'current-shelter': 1
            }
        })
        .then(response => response.data.results)
}

export const getToken = (login, password) => {
    return axios
        .post(
            'https://acits-api.herokuapp.com/api/token/',
            {
                username: login,
                password: password,
            }
        )
        .then(response => response.data.access)
}