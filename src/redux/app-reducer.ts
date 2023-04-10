
import {AppThunk} from "./redux-store";
import {getAuth} from "./auth-reducer";

export type InitialStateType = {
    initialized: boolean
}
const initialState: InitialStateType = {
    initialized: false
}
export type AppComponentActionsType = initializedSuccessACType

const appReducer = (state = initialState, action: AppComponentActionsType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'} as const)
export const initializeApp = (): AppThunk => (dispatch) => {
    const authResp = new Promise((res, rej) => {
        dispatch(getAuth());
        res('')
    }). then(res => {
        dispatch(initializedSuccess())
    })
    // const authResp = await dispatch(getAuth());
    // dispatch(initializedSuccess())


}

type initializedSuccessACType = ReturnType<typeof initializedSuccess>


export default appReducer