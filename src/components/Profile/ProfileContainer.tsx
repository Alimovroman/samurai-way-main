import React, {FC} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, getStatus, updateStatus, UserProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type ProfilePropsType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamsType>
type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId!.toString()
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'} />
        }
        return (
            <Profile userProfile={this.props.userProfile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

type MapStateToPropsType = {
    userProfile: UserProfileType
    status: string
    isAuth: boolean
    authorizedUserId: number | null

}
type MapDispatchToProps = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.id
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
