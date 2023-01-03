import React, {FC} from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile: FC = () => {
    return (
        <div className={style.content}>
            <div>
                <img className={style.banner} src={'https://kipmu.ru/wp-content/uploads/rost.jpg'} alt={'banner'}/>
            </div>
            <div>
                avatar+description
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;