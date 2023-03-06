import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfilePropsType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamsType>
type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        console.log(userId )
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
    setUserProfile: (UserProfile: UserProfileType) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

const WithURLDataProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})( WithURLDataProfileContainer)