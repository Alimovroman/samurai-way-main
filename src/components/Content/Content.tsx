import React from 'react';
import style from './Content.module.css'

const Content = () => {
    return (
        <div className={style.content}>
            <div>
                <img className={style.banner} src={'https://kipmu.ru/wp-content/uploads/rost.jpg'} alt={'banner'}/>
            </div>
            <div>
                avatar+description
            </div>
            <div>
                My posts
            </div>
            <div>
                New Posts
            </div>
            <div className={style.posts}>
                <div className={style.item}>
                    Post 1
                </div>
                <div className={style.item}>
                    Post 2
                </div>
            </div>
        </div>
    );
};

export default Content;