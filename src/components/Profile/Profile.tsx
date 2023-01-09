import React, {FC} from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile: FC = () => {
    return (
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
};

export default Profile;