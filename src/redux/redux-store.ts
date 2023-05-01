import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./profile-reducer";
import dialogReducer, {DialogActionsType} from "./dialog-reducer";
import sideBarReducer, {SidebarActionsType} from "./sideBar-reducer";
import usersReducer, {UsersActionsType} from "./users-reducer";
import authReducer, {AuthActionsType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer, {AppComponentActionsType} from "./app-reducer";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    sideBar: sideBarReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type AppActionsType = AuthActionsType | ProfileActionsType | DialogActionsType | UsersActionsType | SidebarActionsType| AppComponentActionsType

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AppActionsType
>

//@ts-ignore
window.store = store

export default store