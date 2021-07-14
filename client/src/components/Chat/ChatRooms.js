import React, { useEffect,useState } from 'react'
import db from '../../firebase';
import ChatEvent from './ChatEvent.js'; 
import './ChatRoomsStyle.scss'

function ChatRooms() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        db.collection('events').get().then((docs)=>{
            docs.forEach((doc)=>{
                setEvents(prev=>[...prev,doc.data()])
            })
        })
    }, [])

    return (
        <div className="leftfold">
        {
            events.map((event)=>{
                return (
                    <ChatEvent event={event} /> 
                )
            })
        }
        </div>
    )
}

export default ChatRooms
