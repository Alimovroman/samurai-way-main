import React, {FC} from "react";
import style from './NabBar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {FriendsSideBarType} from "../../redux/state";

type NavbarPropsType = {
    stateNavBar: {
        friends: Array<FriendsSideBarType>
    }
}
const NavBar: FC<NavbarPropsType> = ({stateNavBar}) => {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink className={style.item} activeClassName={style.active} to={'/profile'}>Profile</NavLink>
            </div>
            <div>
                <NavLink className={style.item} activeClassName={style.active} to={'/message'}>Message</NavLink>
            </div>
            <div>
                <NavLink className={style.item} activeClassName={style.active} to={'/news'}>News</NavLink>
            </div>
            <div>
                <NavLink className={style.item} activeClassName={style.active} to={'/music'}>Music</NavLink>
            </div>
            <div>
                <NavLink className={style.item} activeClassName={style.active} to={'/settings'}>Settings</NavLink>
            </div>
            <Friends friends={stateNavBar.friends}/>
        </nav>
    )
}

export default NavBar;