import React, {FC} from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, PostType} from "../../redux/redux";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
}
const Profile: FC<ProfilePropsType> = () => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;