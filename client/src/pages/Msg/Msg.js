import React from 'react'
import Chat from '../../Chat.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import './Msg.scss'

function Msg() {
    return (
        <div className="msg">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Msg
