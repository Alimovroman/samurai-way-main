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
export type User = {
    id: number
    followed: boolean
    name: string
    status: string
    location: LocationType
    photos: PhotosType
    uniqueUrlName: null | string
}
export type UsersStateType = {
    users: User[]
    pageSizeUsers: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]

}
type ActionType = ReturnType<typeof unfollowed>
    | ReturnType<typeof followed> | ReturnType<typeof setUsers>
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

export const unfollowed = (id: number) => ({type: UNFOLLOWED, id} as const)
export const followed = (id: number) => ({type: FOLLOWED, id} as const)
export const setUsers = (users: User[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (page: number) => ({type: 'SET-CURRENT-PAGE', page} as const)
export const setUsersTotalCount = (totalCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId} as const)