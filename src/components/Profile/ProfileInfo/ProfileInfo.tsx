import React, {ChangeEvent, FC} from 'react';
import style from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import avatar from './../../assets/images/user_photo.jpg'
import ProfileStatus from "./ProfileStatus";

type PropsType = {
    userProfile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}
const ProfileInfo: FC<PropsType> = ({userProfile, status, updateStatus, isOwner, savePhoto}) => {
    if (!userProfile) {
        return <Preloader/>
    }

    const mainFotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length ) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <img className={style.banner} src={'https://kipmu.ru/wp-content/uploads/rost.jpg'} alt={'banner'}/>
            </div>
            <div>
                <div>
                    <img src={userProfile.photos.large || avatar} alt={'photos'}/>
                    <div>
                        {isOwner && <input type={"file"} onChange={mainFotoSelected}/>}
                    </div>
                </div>
                <span>{userProfile.fullName}</span>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                <p>{userProfile.aboutMe}</p>
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