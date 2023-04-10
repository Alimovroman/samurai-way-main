import {AppStateType} from "./redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getPageSizeUsers = (state: AppStateType) => {
    return state.usersPage.pageSizeUsers
}
export const getTotalUserCount= (state: AppStateType) => {
    return state.usersPage.totalUserCount
}
export const getCurrentPage= (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching= (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state: AppStateType) => {
    return state.usersPage.followingProgress
}