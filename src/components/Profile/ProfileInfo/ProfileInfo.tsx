import React, {FC} from 'react';
import style from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import avatar from './../../assets/images/user_photo.jpg'

type PropsType = {
    userProfile: UserProfileType
}
const ProfileInfo: FC<PropsType> = ({userProfile}) => {
    if (!userProfile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={style.banner} src={'https://kipmu.ru/wp-content/uploads/rost.jpg'} alt={'banner'}/>
            </div>
            <div>
                <div>
                    <img src={userProfile.photos.large ? userProfile.photos.large : avatar} alt={'photos'}/>
                </div>
                <span>{userProfile.fullName}</span>
                <p>
                    {userProfile.aboutMe}
                </p>
                <div>
                    <h3>Contacts</h3>
                    <p>{userProfile.contacts.vk}</p>
                    <p>{userProfile.contacts.instagram}</p>
                    <p>{userProfile.contacts.facebook}</p>
                    <p>{userProfile.contacts.website}</p>
                    <p>{userProfile.contacts.twitter}</p>
                    <p>{userProfile.contacts.mainLink}</p>
                    <p>{userProfile.contacts.youtube}</p>
                </div>
                <p>
                    Поиск работы: {userProfile.lookingForAJob ? 'Yes' : 'No'}
                </p>
                <p>
                    {userProfile.lookingForAJobDescription}
                </p>
            </div>
        </div>
    );

};

export default ProfileInfo;