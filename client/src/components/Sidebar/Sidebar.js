import React from 'react'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SvgIcon from '@material-ui/core/SvgIcon';
import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="sideBar">
            <div className="upperSection"> <NotificationsNoneOutlinedIcon /> <ChatOutlinedIcon /> <PeopleOutlineRoundedIcon /> 
            <CalendarTodayRoundedIcon /> <MoreHorizOutlinedIcon /> </div>
            <div className="lowerSection">  <HelpOutlineIcon /> </div>
        </div>
    )
}

export default Sidebar
