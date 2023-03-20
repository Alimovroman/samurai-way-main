import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuth, setUserPhoto} from "../../redux/auth-reducer";

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

type MapStateToPropsType = {
    login: null | string,
    userPhoto: null | string
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getAuth: () => void
    setUserPhoto: (photo: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        userPhoto: state.auth.userPhoto,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getAuth, setUserPhoto})(HeaderContainer)