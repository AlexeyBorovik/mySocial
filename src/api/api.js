import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "9b628091-c69a-465d-ada9-41a885ed938c"
    }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then (response => {
            return response.data
        })
    }
}

export const followAPI = {
    UnFollow(userId) {
        return instance.delete(`follow/${userId}`)
        .then (response => {
            return response.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
        .then (response => {
            return response.data
        })
    }
}

export const profileAPI = {

    getUser(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data
        })
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
        .then(response => {
            return response.data
    })
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
    }
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
        .then(response => {
            return response.data
        })
    },
    logIn(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logOut() {
        return instance.delete('auth/login')
    }
}