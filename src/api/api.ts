import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ffdb5a84-7670-48ab-a1c2-5437e028d270'
    }
})

export const usersApi = {
    getUsers (currenPage: number, pageSizeUsers: number) {
        return instance.get(`users?page=${currenPage}&count=${pageSizeUsers}`)
            .then(response => response.data)
    },
    postFollow (userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    deleteFollow (userId: number) {
        return instance.delete(`follow/${userId}`,)
            .then(response => response.data)
    }
}

export const profileApi = {
    getProfile: (userId: string) => {
        return instance.get(`profile/${userId}`)
    },
    getStatus: (userId: string) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: (status: string) => {
        return instance.put(`/profile/status`, {status})
    }
}

export const authApi = {
    getAuthMe: () => {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getPhotoMe: (id: string) => {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    logout: () => {
        return instance.delete(`auth/login`)
            .then(res => res.data)
    }
}
