import React from 'react'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import GestureIcon from '@material-ui/icons/Gesture';
import EmojiSymbolsRoundedIcon from '@material-ui/icons/EmojiSymbolsRounded';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sideBar">
            <div className="upperSection"> 
                <Link to="/calendar"><div><CalendarTodayRoundedIcon /></div></Link>
                <Link to="/chat"><div> <ChatOutlinedIcon /> </div></Link>
                <Link to="/call"><div><PhoneOutlinedIcon /></div></Link>
                <Link to="/whiteboard"><div><GestureIcon /></div></Link>
                <Link to="/voiceText"><div><EmojiSymbolsRoundedIcon /></div></Link>
            </div>
            <div className="lowerSection">  
            <div><button className="btn"><GetAppRoundedIcon /></button> </div></div>
        </div>
    )
}

export default Sidebar
