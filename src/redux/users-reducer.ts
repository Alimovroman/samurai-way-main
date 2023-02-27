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
}
type ActionType = ReturnType<typeof unfollowedAC> | ReturnType<typeof followedAC> | ReturnType<typeof setUsersAC>

const initialState: UsersStateType = {
    users: []
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
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export default usersReducer

export const unfollowedAC = (id: number) => ({type: UNFOLLOWED, id} as const)
export const followedAC = (id: number) => ({type: FOLLOWED, id} as const)
export const setUsersAC = (users: User[]) => ({type: SET_USERS, users} as const)