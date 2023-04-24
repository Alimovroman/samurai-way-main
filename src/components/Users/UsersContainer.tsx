import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getUserThunkCreator,
    setCurrentPage,
    toggleIsFollowingProgress,
    UserType, followed, unfollowed
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {
    getCurrentPage, getFollowingProgress,
    getIsFetching,
    getPageSizeUsers,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component<UsersPropsType> {
    setCurrentPage = (page: number) => {
        const {pageSizeUsers} = this.props
        this.props.getUserThunkCreator(page, pageSizeUsers)
    }

    componentDidMount() {
        const {currenPage, pageSizeUsers} = this.props
        this.props.getUserThunkCreator(currenPage, pageSizeUsers)

    }

    render() {
        return (
            <>
                {
                    this.props.isFetching && <Preloader/>
                }
                <Users
                    users={this.props.users}
                    currenPage={this.props.currenPage}
                    pageSizeUsers={this.props.pageSizeUsers}
                    totalUserCount={this.props.totalUserCount}
                    followingProgress={this.props.followingProgress}
                    setCurrentPage={this.setCurrentPage}
                    followed={this.props.followed}
                    unfollowed={this.props.unfollowed}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                />

            </>

        )
    }
}

export type UsersPropsType = MapStateToProps & MapDispatchToProps

type MapStateToProps = {
    users: UserType[]
    pageSizeUsers: number
    totalUserCount: number
    currenPage: number
    isFetching: boolean
    followingProgress: number[]

}
type MapDispatchToProps = {
    unfollowed: (userId: number) => void
    followed: (userId: number) => void
    setCurrentPage: (page: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void

    getUserThunkCreator: (currenPage: number, pageSizeUsers: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: getUsers(state),
        pageSizeUsers: getPageSizeUsers(state),
        totalUserCount: getTotalUserCount(state),
        currenPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {followed, unfollowed, setCurrentPage, toggleIsFollowingProgress, getUserThunkCreator})
)(UsersContainer)

