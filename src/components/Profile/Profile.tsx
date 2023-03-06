import React, {FC} from 'react';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    userProfile: UserProfileType
}
const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;