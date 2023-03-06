import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followed,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching,
    unfollowed,
    User
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component<UsersPropsType> {
    setCurrentPage = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSizeUsers}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })

    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.pageSizeUsers}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
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
                    setCurrentPage={this.setCurrentPage}
                    followed={this.props.followed}
                    unfollowed={this.props.unfollowed}
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

}
type MapDispatchToProps = {
    unfollowed: (userId: number) => void
    followed: (userId: number) => void
    setUsers: (users: User[]) => void
    setCurrentPage: (page: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSizeUsers: state.usersPage.pageSizeUsers,
        totalUserCount: state.usersPage.totalUserCount,
        currenPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        followed: (userId) => dispatch(followed(userId)),
        unfollowed: (userId) => dispatch(unfollowed(userId)),
        setUsers: (users) => dispatch(setUsers(users)),
        setCurrentPage: (page) => dispatch(setCurrentPage(page)),
        setUsersTotalCount: (totalCount) => dispatch(setUsersTotalCount(totalCount)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetching(isFetching))
    }
}

export default connect(mapStateToProps, {
    followed,
    unfollowed,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
})(UsersContainer)
