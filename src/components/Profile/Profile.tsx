import React, {FC} from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, PostType} from "../../redux/redux";


type ProfilePropsType = {
    profileState: {
        postData: Array<PostType>
        textPost: string
    }
    dispatch: (action: ActionType) => void
}
const Profile: FC<ProfilePropsType> = ({profileState, dispatch}) => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts postData={profileState.postData}
                     textPost={profileState.textPost}
                     dispatch={dispatch}
            />
        </div>
    );
};

export default Profile;