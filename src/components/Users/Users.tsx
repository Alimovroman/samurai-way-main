import style from './Users.module.css'
import React, {FC} from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../assets/images/user_photo.jpg'

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div className={style.root}>
                {this.props.users.map(u => <div key={u.id} className={style.user}>
                    <div>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto}
                                 alt={'avatar'}
                                 className={style.avatar}
                            />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollowed(u.id)}>follow</button>
                                : <button onClick={() => this.props.followed(u.id)}>unfollow</button>}
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
    }
}

export default Users;