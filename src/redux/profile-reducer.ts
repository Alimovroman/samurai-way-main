import {PhotosType} from "./users-reducer";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";
import {AppThunk} from "./redux-store";

const ADD_POST = "profile/ADD-POST"
const ADD_TEXT_IN_POST = 'profile/ADD-TEXT-IN-POST'

export type AddPostACType = ReturnType<typeof addPostAction>
export type SetUserProfileACType = ReturnType<typeof setUserProfile>
export type SetUserStatusACType = ReturnType<typeof setUserStatus>

export type PostType = {
    id: number
    message: string
    counter: number
}
export type ProfilePageType = {
    postData: Array<PostType>
    userProfile: UserProfileType
    status: string

}
export type ContactsType = {
    facebook: null | string
    github: null | string
    instagram: null | string
    mainLink: null | string
    twitter: null | string
    vk: null | string
    website: null | string
    youtube: null | string
}
export type UserProfileType = null | {
    aboutMe: string | null
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: PhotosType
    userId: number
}

const initialState: ProfilePageType = {
    postData: [
        {id: 1, message: 'Hello', counter: 3},
        {id: 2, message: 'how are you', counter: 5},
        {id: 3, message: 'it is ok', counter: 7},
        {id: 4, message: 'yo yo yo', counter: 13},
        {id: 5, message: 'yuck', counter: 23},
    ],
    userProfile: null,
    status: ''
}
export type ProfileActionsType =
    | AddPostACType
    | SetUserProfileACType
    | SetUserStatusACType
    | ReturnType<typeof deletePostAC>

const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 6, message: action.payload.post, counter: 0
            }
            return {
                ...state,
                textPost: '',
                postData: [...state.postData, newPost]
            }
        case "profile/DELETE-POST":
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.payload.id)
            }
        case "profile/SET-USER-PROFILE":
            return {
                ...state,
                userProfile: action.userProfile
            }
        case "profile/SET-USER-STATUS":
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }
}

export default profileReducer

export const addPostAction = (post: string) => ({
    type: ADD_POST,
    payload: {
        post
    }
} as const)
export const deletePostAC = (id: number) => ({type: 'profile/DELETE-POST', payload: {id}} as const)

export const setUserProfile = (userProfile: UserProfileType) => ({
    type: 'profile/SET-USER-PROFILE',
    userProfile
} as const)
export const setUserStatus = (status: string) => ({type: 'profile/SET-USER-STATUS', payload: {status}} as const)


export const getProfile = (userId: string): AppThunk => async (dispatch) => {
    const response = await profileApi.getProfile(userId)
    dispatch(setUserProfile(response.data))

}

export const getStatus = (userId: string): AppThunk => async (dispatch) => {
    const response = await profileApi.getStatus('6990')
    dispatch(setUserStatus(response.data))

}

export const updateStatus = (newStatus: string): AppThunk => async (dispatch) => {
    const response = await profileApi.updateStatus(newStatus)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(newStatus))
    }
}

