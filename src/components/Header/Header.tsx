import React, {FC} from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

const Header: FC<HeaderPropsType> = (props) => {

    return (
        <header className={style.header}>
            <div>
                <img className={style.logo}
                     src={'https://sun9-82.userapi.com/s/v1/ig2/LLdk_N-fVpPSiwyNpF7h-B585nSmRYtB1ZNiNFAFfx6o0bUNC94OjOlbRChB9XxaKUIqEgEvVVEwUyFvrX6gSH0s.jpg?size=200x200&quality=95&crop=0,0,729,729&ava=1'}
                     alt={'logo'}/>
            </div>
            <div className={style.authBlock}>
                {props.isAuth
                    ? <div className={style.userIsOnline}>
                        <img src={props.userPhoto!} alt={'avatar'}/>
                        {props.login}</div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;