import {Dispatch} from "redux";
import {FolloUnfollowResponse, usersApi} from "../api/api";
import {AppThunk} from "./redux-store";
import {updateObjectInArray} from "../utils/object-helpers";

const UNFOLLOWED = 'users/UNFOLLOWED'
const FOLLOWED = 'users/FOLLOWED'
const SET_USERS = 'users/SET-USERS'

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
export type UsersActionsType = ReturnType<typeof acceptUnfollowed>
    | ReturnType<typeof acceptFollowed> | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage> | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleIsFollowingProgress>

const initialState: UsersStateType = {
    users: [],
    pageSizeUsers: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

const usersReducer = (state = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case UNFOLLOWED:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, false)
            }
        case FOLLOWED:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, true)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case "users/SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.page
            }
        case "users/SET-USERS-TOTAL-COUNT":
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        case "users/TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "users/TOGGLE-IS-FOLLOWING-PROGRESS":
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
export const setCurrentPage = (page: number) => ({type: 'users/SET-CURRENT-PAGE', page} as const)
export const setUsersTotalCount = (totalCount: number) => ({type: 'users/SET-USERS-TOTAL-COUNT', totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'users/TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'users/TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching,
    userId
} as const)

export const getUserThunkCreator = (currenPage: number, pageSizeUsers: number): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currenPage))

    const response = await usersApi.getUsers(currenPage, pageSizeUsers)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setUsersTotalCount(response.totalCount))
}
const followUnfollowFlow = async (dispatch: Dispatch,
                                  userId: number,
                                  apiMethod: (userId: number) => Promise<FolloUnfollowResponse>,
                                  actionCreator: (userId: number) => ReturnType<typeof acceptUnfollowed> | ReturnType<typeof acceptFollowed>
) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}
export const unfollowed = (userId: number): AppThunk => async (dispatch) => {
    let apiMethod = usersApi.deleteFollow.bind(usersApi)

    followUnfollowFlow(dispatch, userId, apiMethod, acceptUnfollowed)
}

export const followed = (userId: number): AppThunk => async (dispatch) => {
    let apiMethod = usersApi.postFollow.bind(usersApi)

    followUnfollowFlow(dispatch, userId, apiMethod, acceptFollowed)

}
