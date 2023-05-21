import React, {FC} from 'react';
import style from './Header.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

const Header: FC<HeaderPropsType> = (props) => {

    return (
        <header className={style.header}>
            <div className={style.logoWrapper}>
                <img className={style.logo}
                     src={'https://mobimg.b-cdn.net/v3/fetch/03/03dbc3fd2db7ebe89e961a1a547614bf.jpeg'}
                     alt={'logo'}/>
                <span>Social network</span>
            </div>
            <div className={style.authBlock}>
                {props.isAuth
                    ? <div className={style.userIsOnline}>
                        <img src={props.userPhoto!} alt={'avatar'} className={style.avatar}/>
                        {props.login}
                        <button onClick={props.logout} className={style.button}>Logout</button>
                    </div>
                    : <NavLink to={'/login'} className={style.button}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;