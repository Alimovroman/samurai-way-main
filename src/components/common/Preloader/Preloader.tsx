import React from 'react';
import preloader from "../../assets/images/preloader.svg";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={'preload'}/>
        </div>
    );
};

export default Preloader;