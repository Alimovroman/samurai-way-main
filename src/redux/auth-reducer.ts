import {Dispatch} from "redux";
import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./redux-store";

export type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    userPhoto: null | string
    isAuth: boolean
    captcha: string | null
}
const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    userPhoto: null,
    isAuth: false,
    captcha: null
}
export type AuthActionsType = SetAuthType | SetUserPhotoType | ReturnType<typeof setCaptchaUrl>

const authReducer = (state = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {

        case "auth/SET-AUTH":
            return {
                ...state,
                ...action.payload.data,
                isAuth: action.payload.isAuth
            }

        case "auth/SET-USER-PHOTO":
            return {
                ...state,
                userPhoto: action.payload.photo
            }
        case "auth/SET-CAPTCHA":
            return {
                ...state,
                captcha: action.payload.captcha
            }

        default:
            return state
    }
}

type SetAuthType = ReturnType<typeof setAuth>
export const setAuth = (id: number | null,
                        email: string | null,
                        login: string | null,
                        isAuth: boolean
) => {
    return {
        type: 'auth/SET-AUTH',
        payload: {
            data: {id, email, login},
            isAuth
        }
    } as const
}

type SetUserPhotoType = ReturnType<typeof setUserPhoto>
export const setUserPhoto = (photo: string) => {
    return {
        type: 'auth/SET-USER-PHOTO',
        payload: {
            photo
        }
    } as const
}
const setCaptchaUrl = (captcha: string) => ({type: 'auth/SET-CAPTCHA', payload: {captcha}} as const)

//Thunk

export const getAuth = (): AppThunk => async (dispatch) => {
    const response = await authApi.getAuthMe()
    if (response.resultCode === 0) {
        const {id, email, login} = response.data
        dispatch(setAuth(id, email, login, true))

        const responsePhoto = await authApi.getPhotoMe(id)
        dispatch(setUserPhoto(responsePhoto.photos.small))

    }

}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): AppThunk => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe, captcha)

    if (response.resultCode === 0) {
        dispatch(getAuth())
    } else {
        if(response.resultCode === 10) {
            dispatch(getCaptcha())
        }
            const message = response.messages.length > 0 ? response.messages : 'Some error'
            dispatch(stopSubmit("login", {_error: message}))

    }
}
export const getCaptcha = (): AppThunk => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl()
    const captcha = response.data.url
    dispatch(setCaptchaUrl(captcha))
}
export const logout = (): AppThunk => async (dispatch) => {
    const response = await authApi.logout()
    if (response.resultCode === 0) {
        dispatch(setAuth(null, null, null, false))
    }

}


export default authReducer