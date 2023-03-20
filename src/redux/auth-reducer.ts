import {Dispatch} from "redux";
import {authApi} from "../api/api";

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
type ActionType = SetAuthType | SetUserPhotoType

const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {

        case "SET-AUTH":
            return {
                ...state,
                ...action.payload.data,
                isAuth: true
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
export const setAuth = (id: number, email: string, login: string) => {
    return {
        type: 'SET-AUTH',
        payload: {
            data: {id, email, login}
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

export const getAuth = () => (dispatch: Dispatch) => {
    authApi.getAuthMe().then(response => {
        if (response.resultCode === 0) {
            const {id, email, login} = response.data
            dispatch(setAuth(id, email, login))

            authApi.getPhotoMe(id).then(resp => {
                dispatch(setUserPhoto(resp.photos.small))
            })
        }
    })
}
export default authReducer