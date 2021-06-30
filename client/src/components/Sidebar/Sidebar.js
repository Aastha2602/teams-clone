import React from 'react'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sideBar">

            <div className="upperSection"> 
                <Link to="/call"><div><PhoneOutlinedIcon /></div></Link>
                <Link to="/chat"><div> <ChatOutlinedIcon /> </div></Link>
                <Link to="/calendar"><div><CalendarTodayRoundedIcon /></div></Link>
            </div>
            <div className="lowerSection">  <HelpOutlineIcon /> <Link to="/">
            <div><button className="btn"><GetAppRoundedIcon /> </button> </div></Link></div>

        </div>
    )
}

export default Sidebar
