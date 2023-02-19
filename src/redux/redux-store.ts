import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    sideBar: sideBarReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

let store = createStore(rootReducers)

export default store