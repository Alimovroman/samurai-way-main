import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToProps= {
    isAuthUser: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuthUser: state.auth.isAuth
    }
}

function withAuthRedirect <T>(Component: React.ComponentType<T>)  {
    function WrapperComponent(props: MapStateToProps) {
        let {isAuthUser, ...restProps} = props
        if (!isAuthUser) return <Redirect to={'./login'}/>
        return <Component {...restProps as T}/>
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToProps)(WrapperComponent)
    return ConnectedAuthRedirectComponent
};


export default withAuthRedirect