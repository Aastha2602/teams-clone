import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
import img from '../../assets/microsoft.png';

function Header() {
    return (
        <div className="header">
            <div className="header-menu"> <img className="img" src={img}></img> </div>
            <div className="header-leftfold"> <label classname="header-label"> Microsoft Teams </label></div>
            <div className="header-rightfold"> 
                <div className="header-search"> 
                    <i class="fi-rr-search"></i> <input placeholder="Search" />
                </div>
                <div className="header-profile"><div className="header-options"></div>
                    <Link to="/dash">
                        <img className="header-avatar" src="https://image.flaticon.com/icons/png/128/2922/2922510.png" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header

