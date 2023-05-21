import React, {FC} from 'react';
import style from "./Users.module.css";
import userPhoto from "../assets/images/user_photo.jpg";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    user: UserType
    followingProgress: number[]
    unfollowed: (userId: number) => void
    followed: (userId: number) => void

}

const User: FC<PropsType> = ({user, followingProgress , followed, unfollowed}) => {
    return (
        <div className={style.user}>
            <div>
                <div>
                    <NavLink to={`profile/${user.id}`}>
                        <img src={user.photos.small ? user.photos.small : userPhoto}
                             alt={'avatar'}
                             className={style.avatar}
                        />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingProgress.some(id => id === user.id)}
                                  className={style.buttonSubscribe}
                                  onClick={() => {
                            unfollowed(user.id)
                        }}>
                            follow
                        </button>

                        : <button disabled={followingProgress.some(id => id === user.id)}
                                  className={style.buttonSubscribe}
                                  onClick={() => {
                            followed(user.id)
                        }}>
                            unfollow
                        </button>}
                </div>
            </div>
            <div className={style.userInfoWrapper}>
                <div className={style.userInfo}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </div>
            </div>
        </div>
    )
};

export default User;