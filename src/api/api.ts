import axios, {AxiosResponse} from "axios";
import {UserProfileType} from "../redux/profile-reducer";


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
        return instance.post<FolloUnfollowResponse, AxiosResponse<FolloUnfollowResponse>, {userId: number}>(`follow/${userId}`)
            .then(response => response.data)
    },
    deleteFollow (userId: number) {
        return instance.delete<FolloUnfollowResponse>(`follow/${userId}`,)
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
        return instance.put(`profile/status`, {status})
    },
    setPhoto: (photo: File) => {
        const formData = new FormData();
        formData.append("image", photo)
        return instance.put( `profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile: (formData: UserProfileType) => {
        return instance.put("profile", formData)
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
    login: (email: string, password: string, rememberMe: boolean = false, captcha: string | null) => {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout: () => {
        return instance.delete(`auth/login`)
            .then(res => res.data)
    }
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}

export type FolloUnfollowResponse = {
    resultCode: 0 | 1 | 10
    messages: string[],
    data: {}
}
