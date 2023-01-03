import React from "react";
import style from './NabBar.module.css'
const NavBar = () => {
    return (
        <nav className={style.nav}>
            <div>
                <a className={`${style.item} ${style.active}`} href={'#'}>Profile</a>
            </div>
            <div>
                <a className={style.item} href={'#'}>Message</a>
            </div>
            <div>
                <a className={style.item} href={'#'}>News</a>
            </div>
            <div>
                <a className={style.item} href={'#'}>Music</a>
            </div>
            <div>
                <a className={style.item} href={'#'}>Settings</a>
            </div>
        </nav>
    )
}

export default NavBar;