import React, {FC} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, UserProfileType} from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
