import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import './Header.scss';
import { Input } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="searchSection"> <label text="Search here:"> </label>
                <input type="search" placeholder="search" ></input> <SearchIcon /> </div>
            <div className="right"> <button> <MoreHorizIcon /> <PersonPinIcon /> </button> </div>
        </div>
    )
}

export default Header

