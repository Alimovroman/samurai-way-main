import React, {FC} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {profileApi} from "../../api/api";
import withAuthRedirect from "../../hoc/withAuthRedirect";

export type ProfilePropsType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamsType>
type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
    }

    render() {

        return (
            <Profile userProfile={this.props.userProfile}/>
        )
    }
}

type MapStateToPropsType = {
    userProfile: UserProfileType

}
type MapDispatchToProps = {
    getProfile: (userId: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile,

    }
}



const AuthRedirectComponent = withAuthRedirect(ProfileContainer)


const WithURLDataProfileContainer = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps,
    {getProfile})( WithURLDataProfileContainer)