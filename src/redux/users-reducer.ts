import {Dispatch} from "redux";
import {usersApi} from "../api/api";

const UNFOLLOWED = 'UNFOLLOWED'
const FOLLOWED = 'FOLLOWED'
const SET_USERS = 'SET-USERS'

export type LocationType = {
    city: string
    country: string
}
export type PhotosType = {
    small: null | string
    large: null | string
}
export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: LocationType
    photos: PhotosType
    uniqueUrlName: null | string
}
export type UsersStateType = {
    users: UserType[]
    pageSizeUsers: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]

}
type ActionType = ReturnType<typeof acceptUnfollowed>
    | ReturnType<typeof acceptFollowed> | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage> | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleIsFollowingProgress>

const initialState: UsersStateType = {
    users: [],
    pageSizeUsers: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

const usersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "UNFOLLOWED":
            return {
                ...state,
                users: state.users.map((u) => u.id === action.id
                    ? {...u, followed: false}
                    : u
                )
            }
        case "FOLLOWED":
            return {
                ...state,
                users: state.users.map((u) => u.id === action.id
                    ? {...u, followed: true}
                    : u
                )
            }
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.page
            }
        case "SET-USERS-TOTAL-COUNT":
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(u => u !== action.userId)
            }
        default:
            return state
    }
}

export default usersReducer

export const acceptUnfollowed = (id: number) => ({type: UNFOLLOWED, id} as const)
export const acceptFollowed = (id: number) => ({type: FOLLOWED, id} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (page: number) => ({type: 'SET-CURRENT-PAGE', page} as const)
export const setUsersTotalCount = (totalCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId} as const)

export const getUserThunkCreator = (currenPage: number, pageSizeUsers: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currenPage))

    usersApi.getUsers(currenPage, pageSizeUsers).then(response => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setUsersTotalCount(response.totalCount))
    })
}
export const unfollowed = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersApi.deleteFollow(userId).then(response => {
        if (response.resultCode === 0) {
            dispatch(acceptUnfollowed(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    })
}

export const followed = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersApi.postFollow(userId).then(response => {
        if (response.resultCode === 0) {
            dispatch(acceptFollowed(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    })
}
