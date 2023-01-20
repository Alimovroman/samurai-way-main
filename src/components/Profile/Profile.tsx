import React, {FC} from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addTextInPost, PostType} from "../../redux/state";


type ProfilePropsType = {
    profileState: {
        postData: Array<PostType>
        textPost: string
    }
    addPost: (postMessage: string) => void
    addTextInPost: (text: string) => void
}
const Profile: FC<ProfilePropsType> = ({profileState, addPost, addTextInPost}) => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts postData={profileState.postData}
                     addPostCallBack={addPost}
                     addTextInPost={addTextInPost}
                     textPost={profileState.textPost}
            />
        </div>
    );
};

export default Profile;