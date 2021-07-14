import React from 'react';
import './MainPage.scss';
import { Link } from 'react-router-dom';
import pic from '../../assets/main.png'; 

function MainPage() {
    return (
        <div className = 'main-page_container background_main_color' >
            <div className = 'main-page_login_box background_secondary_color' >
                <div className = 'main-page_logo_container' >
                <img className = 'main-page_logo_image' src={pic} alt = 'VideoTalker' / >
                </div>
                <div className = 'main-page_button_container' >
                <Link to="/login"><div className="mainText">Welcome to Omega: The MS Teams Clone. <br></br> Start using MS TEAMS here...</div> </Link> 
                </div>
            </div> 
        </div>
    )
}

export default MainPage

