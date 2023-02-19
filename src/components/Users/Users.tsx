import style from './Users.module.css'
import React, {FC} from 'react';
import {UsersPropsType} from "./UsersContainer";

const Users: FC<UsersPropsType> = ({
                                       users,
                                       setUsers,
                                       followed,
                                       unfollowed
                                   }) => {
    if (users.length === 0) {
        setUsers([
            {
                id: 1, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
                followed: true, fullName: 'Roman', location: {city: 'RZN', country: 'Russia'}, status: 'Super Man'
            },
            {
                id: 2, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
                followed: false, fullName: 'Alex', location: {city: 'RZN', country: 'Russia'}, status: 'Super Man'
            },
            {
                id: 3, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
                followed: true, fullName: 'Mari', location: {city: 'RZN', country: 'Russia'}, status: 'Super Man'
            },
            {
                id: 4, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
                followed: true, fullName: 'Boog', location: {city: 'RZN', country: 'Russia'}, status: 'Super Man'
            },
        ])
    }
    return (
        <div className={style.root}>
            {users.map(u => <div key={u.id} className={style.user}>
                <div>
                    <div>
                        <img src={u.photoUrl} alt={'avatar'} className={style.avatar}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => unfollowed(u.id)}>follow</button>
                            : <button onClick={() => followed(u.id)}>unfollow</button>}
                    </div>
                </div>
                <div className={style.userInfo}>
                    <div>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Users;