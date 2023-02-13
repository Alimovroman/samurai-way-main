import React, {FC} from "react";
import style from './NabBar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {FriendsSideBarType, SideBarType} from "../../redux/redux";
import {MyContext} from "../../StoreContext";

type NavbarPropsType = {}
const NavBar: FC<NavbarPropsType> = () => {
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
            <MyContext.Consumer>
                {store => {
                    const friends: FriendsSideBarType[] = store.getState().sideBar.friends
                    return <Friends friends={friends}/>
                }
                }
            </MyContext.Consumer>

        </nav>
    )
}

export default NavBar;