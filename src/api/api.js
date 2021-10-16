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
    unFollow(userId) {
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
    },

    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfile(profile) {
        return instance.put(`/profile`, profile)
    }
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
        .then(response => {
            return response.data
        })
    },
    logIn(email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logOut() {
        return instance.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url')
    }
}