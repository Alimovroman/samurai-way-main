import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followedAC, setUsersAC, unfollowedAC, User} from "../../redux/users-reducer";

export type UsersPropsType = MapStateToProps & MapDispatchToProps

type MapStateToProps = {
    users: User[]
}
type MapDispatchToProps = {
    unfollowed: (userId: number) => void
    followed: (userId: number) => void
    setUsers: (users: User[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        followed: (userId) => dispatch(followedAC(userId)),
        unfollowed: (userId) => dispatch(unfollowedAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer