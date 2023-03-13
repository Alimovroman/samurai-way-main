import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuth, setUserPhoto} from "../../redux/auth-reducer";
import {authApi} from "../../api/api";

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {

            authApi.getAuthMe().then(response => {
                if (response.resultCode === 0) {
                    const {id, email, login} = response.data
                    this.props.setAuth(id, email, login)

                        authApi.getPhotoMe(id).then(resp => {
                            this.props.setUserPhoto(resp.photos.small)
                        })
                }
            })
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
    setAuth: (id: number, email: string, login: string) => void
    setUserPhoto: (photo: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        userPhoto: state.auth.userPhoto,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuth, setUserPhoto})(HeaderContainer)