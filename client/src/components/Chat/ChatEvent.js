import React from 'react';
import { useHistory } from 'react-router-dom';
import './ChatEventStyle.scss';

function ChatEvent({event}) {
    const history = useHistory();
    const openChat = (id) => {
        history.push(`/chat/${id}`);
    }
    return (
        <div className="room__button">
            <h4 onClick={()=>{
                openChat(event.MeetingId)}}>{event.Subject}</h4><br></br>
        </div>
    )
}

export default ChatEvent
