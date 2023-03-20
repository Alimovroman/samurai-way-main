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

class UsersContainer extends React.Component<UsersPropsType> {
    setCurrentPage = (page: number) => {
        this.props.getUserThunkCreator(page, this.props.pageSizeUsers)
    }

    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currenPage, this.props.pageSizeUsers)

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
        users: state.usersPage.users,
        pageSizeUsers: state.usersPage.pageSizeUsers,
        totalUserCount: state.usersPage.totalUserCount,
        currenPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default connect(mapStateToProps, {
    followed,
    unfollowed,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUserThunkCreator
})(UsersContainer)
