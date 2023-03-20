import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {profileApi} from "../../api/api";

type ProfilePropsType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamsType>
type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
    }

    render() {
        if (!this.props.isAuthUser) return <Redirect to={'./login'} />
        return (
            <Profile userProfile={this.props.userProfile}/>
        )
    }
}

type MapStateToPropsType = {
    userProfile: UserProfileType
    isAuthUser: boolean
}
type MapDispatchToProps = {
    getProfile: (userId: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile,
        isAuthUser: state.auth.isAuth
    }
}

const WithURLDataProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps,
    {getProfile})( WithURLDataProfileContainer)