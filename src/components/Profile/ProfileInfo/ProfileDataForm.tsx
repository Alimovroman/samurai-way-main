import React, {FC} from "react";
import { UserProfileType} from "../../../redux/profile-reducer";
import {createField, Input, TextArea} from "../../common/FormsControl/FormControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../common/FormsControl/FormControls.module.css";

type ProfileDataFormType = {
    userProfile: UserProfileType
}

const ProfileDataForm: FC<InjectedFormProps<UserProfileType, ProfileDataFormType> & ProfileDataFormType> = ({
                                                                                                                userProfile,
                                                                                                                handleSubmit,
                                                                                                                error
                                                                                                            }) => {
    if (!userProfile) {
        return null
    }
    return (
        <form onSubmit={handleSubmit}>
            <button className={style.button}>Save</button>
            {error &&
                <div className={style.formSummuryError}>
                    {error}
                </div>
            }
            <div>
                <b>Full name</b>: {createField("Full name", "fullName", Input, [], '', {})}
            </div>
            <div>
                <b>Поиск работы</b>: {createField("", "lookingForAJob", Input, [], '', {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional
                    skills</b>: {createField("My professional skills", "lookingForAJobDescription", TextArea, [], '', {})}
            </div>
            <div>
                <b>About me</b>: {createField("about Me", "aboutMe", Input, [], '', {})}
            </div>
            <div>
                <h3>Contacts :</h3>
                {Object.keys(userProfile.contacts)
                    .map((key, i) => {
                            return <div>
                                <b>{key}</b>: {createField(key, `contacts.${key}`, Input, [], '', {})}

                            </div>
                        }
                    )}
            </div>


        </form>
    )
}

const ProfileDataReduxForm = reduxForm<UserProfileType, ProfileDataFormType>({
    form: 'editProfile'
})(ProfileDataForm)

export default ProfileDataReduxForm