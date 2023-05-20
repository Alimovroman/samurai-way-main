import React, {FC} from 'react';
import style from './Post.module.css'
import {message} from "antd";

type PostType = {
    message: string
    counter: number
}
const Post:FC<PostType> = ({message, counter}) => {
    return (
        <div className={style.item}>
            <img src={'https://cs6.pikabu.ru/avatars/398/v398282.jpg?1343863926'} alt={'avatar'} />
            {message}
            <div>
                <span className={style.likes}>like {counter}</span>
            </div>
        </div>
    );
};

export default Post;