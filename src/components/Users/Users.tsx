import React, {FC} from 'react';
import style from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type PropsType = {
    totalUserCount: number
    pageSizeUsers: number
    currenPage: number
    users: Array<UserType>
    followingProgress: number[]

    setCurrentPage: (page: number) => void
    unfollowed: (userId: number) => void
    followed: (userId: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void

}

const Users: FC<PropsType> = (props) => {
    return (
        <div className={style.root}>


            {props.users.map(u => <User key={u.id}
                                        user={u}
                                        followingProgress={props.followingProgress}
                                        unfollowed={props.unfollowed}
                                        followed={props.followed} />)}

            <div className={style.paginatorWrapper}>
                <Paginator currenPage={props.currenPage}
                           totalItemsCount={props.totalUserCount}
                           pageSizeUsers={props.pageSizeUsers}
                           setCurrentPage={props.setCurrentPage}
                           portionSize={10}/>
            </div>
        </div>
    )
};

export default Users;