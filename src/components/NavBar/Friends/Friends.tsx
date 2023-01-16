import React, {FC} from 'react';
import {FriendsSideBarType} from "../../../redux/state";
import style from './Friends.module.css'

type FriendsPropsType = {
    friends: Array<FriendsSideBarType>
}

const Friends: FC<FriendsPropsType> = ({friends}) => {
    return (
        <div className={style.friendsBlock}>
            <h2>Friends</h2>
            <div className={style.friends}>
                {friends.map(f => {
                    return (
                        <div key={f.id}>
                            <img className={style.avatar} src={f.avatar} alt={'avatar'}/>
                            <div>
                                {f.name}
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Friends;