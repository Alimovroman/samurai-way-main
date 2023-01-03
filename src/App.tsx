import React from 'react';
import './App.css';



function App() {
    return (
        <div className="app">
            <header className={'header'}>
                <img className={'logo'} src={'https://sun9-82.userapi.com/s/v1/ig2/LLdk_N-fVpPSiwyNpF7h-B585nSmRYtB1ZNiNFAFfx6o0bUNC94OjOlbRChB9XxaKUIqEgEvVVEwUyFvrX6gSH0s.jpg?size=200x200&quality=95&crop=0,0,729,729&ava=1'} alt={'logo'} />
                Header
            </header>
            <nav className={'nav'}>
                <div>
                    <a href={'#'}>Profile</a>
                </div>
                <div>
                    <a href={'#'}>Message</a>
                </div>
                <div>
                    <a href={'#'}>News</a>
                </div>
                <div>
                    <a href={'#'}>Music</a>
                </div>
                <div>
                    <a href={'#'}>Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                    <img className={'banner'} src={'https://kipmu.ru/wp-content/uploads/rost.jpg'} alt={'banner'} />
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
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    );
}





export default App;
