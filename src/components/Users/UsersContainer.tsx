import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followed,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching, toggleIsFollowingProgress,
    unfollowed,
    User
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersApi} from "../../api/api";



class UsersContainer extends React.Component<UsersPropsType> {
    setCurrentPage = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)

            usersApi.getUsers(page, this.props.pageSizeUsers).then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
            })

    }

    componentDidMount() {
        this.props.toggleIsFetching(true)

            usersApi.getUsers(this.props.currenPage, this.props.pageSizeUsers).then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setUsersTotalCount(response.totalCount)
            })
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
    users: User[]
    pageSizeUsers: number
    totalUserCount: number
    currenPage: number
    isFetching: boolean
    followingProgress: number[]

}
type MapDispatchToProps = {
    unfollowed: (userId: number) => void
    followed: (userId: number) => void
    setUsers: (users: User[]) => void
    setCurrentPage: (page: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
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
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleIsFollowingProgress
})(UsersContainer)
