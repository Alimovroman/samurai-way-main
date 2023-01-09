import React from 'react';
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.banner} src={'https://kipmu.ru/wp-content/uploads/rost.jpg'} alt={'banner'}/>
            </div>
            <div>
                avatar+description
            </div>
        </div>
    );
};

export default ProfileInfo;