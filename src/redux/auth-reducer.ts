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

        case "SET-AUTH":
            return {
                ...state,
                ...action.payload.data,
                isAuth: action.payload.isAuth
            }

        case "SET-USER-PHOTO":
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
        type: 'SET-AUTH',
        payload: {
            data: {id, email, login},
            isAuth
        }
    } as const
}

type SetUserPhotoType = ReturnType<typeof setUserPhoto>
export const setUserPhoto = (photo: string) => {
    return {
        type: 'SET-USER-PHOTO',
        payload: {
            photo
        }
    } as const
}

export const getAuth = (): AppThunk => (dispatch) => {
    authApi.getAuthMe().then(response => {
        if (response.resultCode === 0) {
            const {id, email, login} = response.data
            dispatch(setAuth(id, email, login, true))

            authApi.getPhotoMe(id).then(resp => {
                dispatch(setUserPhoto(resp.photos.small))
            })
        }
    })
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authApi.login(email, password, rememberMe)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(getAuth())
            } else {
                const message = res.messages.length > 0 ? res.messages : 'Some error'
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}
export const logout = (): AppThunk => (dispatch) => {
    authApi.logout()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setAuth(null, null, null, false))
            }
        })
}


export default authReducer