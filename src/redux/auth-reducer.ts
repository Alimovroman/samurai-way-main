import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./redux-store";

export type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    userPhoto: null | string
    isAuth: boolean
}
const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    userPhoto: null,
    isAuth: false
}
export type AuthActionsType = SetAuthType | SetUserPhotoType

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

export const getAuth = (): AppThunk => async (dispatch) => {
    const response = await authApi.getAuthMe()
    if (response.resultCode === 0) {
        const {id, email, login} = response.data
        dispatch(setAuth(id, email, login, true))

        const responsePhoto = await authApi.getPhotoMe(id)
        dispatch(setUserPhoto(responsePhoto.photos.small))

    }

}
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe)

    if (response.resultCode === 0) {
        dispatch(getAuth())
    } else {
        const message = response.messages.length > 0 ? response.messages : 'Some error'
        dispatch(stopSubmit("login", {_error: message}))
    }

}
export const logout = (): AppThunk => async (dispatch) => {
    const response = await authApi.logout()
    if (response.resultCode === 0) {
        dispatch(setAuth(null, null, null, false))
    }

}


export default authReducer