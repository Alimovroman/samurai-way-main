import React, {FC} from "react";
import {StoreType} from "./redux/redux";
import store from "./redux/redux-store";

export const MyContext = React.createContext({} as StoreType)

export type ProviderPropsType = {
    store: StoreType
    children: React.ReactNode
}
export const Provider: FC<ProviderPropsType> = (props) => {
    return <MyContext.Provider value={props.store}>
        {props.children}
    </MyContext.Provider>

}


