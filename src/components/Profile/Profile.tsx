import React, {FC} from 'react';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    userProfile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}
const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo userProfile={props.userProfile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;