import React, {FC} from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";


type ProfilePropsType = {
    profileState: {
        postData: Array<PostType>
    }
}
const Profile: FC<ProfilePropsType> = ({profileState}) => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts postData={profileState.postData}/>
        </div>
    );
};

export default Profile;