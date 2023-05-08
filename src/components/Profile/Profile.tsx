import React, {FC} from 'react';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    userProfile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (formData: UserProfileType) => Promise<void>
}
const Profile: FC<ProfilePropsType> = React.memo((props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo userProfile={props.userProfile}
                         isOwner={props.isOwner}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    );
});

export default Profile;