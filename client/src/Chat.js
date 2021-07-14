import TextField from "@material-ui/core/TextField"
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import "./Chat.scss"
import { useParams } from 'react-router-dom';
import { useAuth } from "./Contexts/AuthContext";
import db from './firebase';
import ChatEvent from './components/Chat/ChatEvent.js';
import ChatRooms from './components/Chat/ChatRooms.js';
import RenderChat from './components/Chat/RenderChat.js';

function Chat() {
    return (
        <div className="card1">
            <div className="roomsFold"><ChatRooms /></div>
            <RenderChat />
        </div>
    )
}
 
export default Chat