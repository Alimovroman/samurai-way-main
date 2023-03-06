import React, {FC} from 'react';
import style from "./Users.module.css";
import userPhoto from "../assets/images/user_photo.jpg";
import {User} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    totalUserCount: number
    pageSizeUsers: number
    currenPage: number
    users: Array<User>

    setCurrentPage: (page: number) => void
    unfollowed: (userId: number) => void
    followed: (userId: number) => void

}

const Users: FC<PropsType> = (props) => {
    const totalPage = Math.ceil(props.totalUserCount / props.pageSizeUsers)
    let pages = []
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i)
    }

    return (
        <div className={style.root}>
            <div className={style.pages}>
                {pages.map((p, i) => {
                    return <span key={i}
                                 onClick={() => props.setCurrentPage(p)}
                                 className={p === props.currenPage ? style.currentPage : ''}>
                            {p}
                        </span>
                })}
            </div>
            {props.users.map(u => <div key={u.id} className={style.user}>
                <div>
                    <div>
                        <NavLink to={`profile/${u.id}`}>
                            <img src={u.photos.small ? u.photos.small : userPhoto}
                                 alt={'avatar'}
                                 className={style.avatar}
                            />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollowed(u.id)}>follow</button>
                            : <button onClick={() => props.followed(u.id)}>unfollow</button>}
                    </div>
                </div>
                <div className={style.userInfo}>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </div>
                </div>
            </div>)}
        </div>
    )
};

export default Users;