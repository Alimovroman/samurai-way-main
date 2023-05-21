import React, {ChangeEvent, FC, useState} from 'react';
import style from "./ProfileInfo.module.css";
import {ContactsType, UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import avatar from './../../assets/images/user_photo.jpg'
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";

type PropsType = {
    userProfile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (formData: UserProfileType) => Promise<void>
}

const ProfileInfo: FC<PropsType> = ({
                                        userProfile,
                                        status,
                                        updateStatus,
                                        isOwner,
                                        savePhoto,
                                        saveProfile
                                    }) => {
    const [editMode, setEditMode] = useState(false)
    if (!userProfile) {
        return <Preloader/>
    }

    const mainFotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const submit = (formData: UserProfileType) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }
    return (
        <div>
            <div>
                <img className={style.banner} src={'https://catherineasquithgallery.com/uploads/posts/2021-03/1614857449_178-p-fon-okeana-245.jpg'} alt={'banner'}/>
            </div>
            <div>
                <div>
                    <div className={style.avatarContainer}>
                        <img src={userProfile.photos.large || avatar} alt={'photos'} className={style.avatar}/>
                        <div>
                            {isOwner && <input type={"file"} onChange={mainFotoSelected} className={style.inputFile}/>}
                        </div>
                    </div>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    {editMode
                        ? <ProfileDataForm initialValues={userProfile} userProfile={userProfile} onSubmit={submit}/>
                        : <ProfileData userProfile={userProfile} isOwner={isOwner} changeEditMode={setEditMode}/>
                    }
                </div>
            </div>
        </div>
    );
};

export type ProfileDataPropsType = {
    userProfile: UserProfileType
    isOwner: boolean
    changeEditMode: (value: boolean) => void
}
const ProfileData: FC<ProfileDataPropsType> = ({userProfile, isOwner, changeEditMode}) => {
    if (!userProfile) {
        return null
    }
    return (
        <div>
            {isOwner && <div>
                <button onClick={() => changeEditMode(true)} className={style.button}>Edit</button>
            </div>
            }

            <span>{userProfile.fullName}</span>

            <p>About me: {userProfile.aboutMe}</p>
            <div>
                <h4>Contacts :</h4>
                {Object.keys(userProfile.contacts)
                    .map((key, i) => <Contact key={i}
                                              contactTitle={key}
                                              contactValue={userProfile.contacts[key as keyof ContactsType]}
                    />)}
            </div>
            <p>
                Поиск работы: {userProfile.lookingForAJob ? 'Yes' : 'No'}
            </p>
            <p>
                My professional skills: {userProfile.lookingForAJobDescription}
            </p>
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string | null
    contactValue: string | null
}
export const Contact: FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactValue ? <><b>{contactTitle}</b>: {contactValue}</> : null }
        </div>
    )
}

export default ProfileInfo;