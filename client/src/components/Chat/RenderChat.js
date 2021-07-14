import TextField from "@material-ui/core/TextField";
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { useParams } from 'react-router-dom';
import { useAuth } from "../../Contexts/AuthContext";
import db from "../../firebase";
import chatLogo from '../../assets/chatGif.gif';

function RenderChat() {
    const {currentUser} = useAuth();
    const [ state, setState ] = useState({ message: "", name: currentUser.displayName })
    const [ chat, setChat ] = useState([])
    const { roomId } = useParams()
    const socketRef = useRef()
 
    useEffect(() => {
        if (roomId) {
            socketRef.current = io.connect("https://msteams-clone.herokuapp.com/")
            socketRef.current.emit('join room',roomId)
            socketRef.current.on("message", ({ name, message }) => {
                setChat(prevChat => [ ...prevChat, { name, message } ])
            })
        }
        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
        }
    }, [ roomId ])

    useEffect(() => {
        if (roomId) {
            db.collection('events').doc(roomId).get().then((doc) => {
                setChat(doc.data()?.Chats ? doc.data().Chats: []);
            })
        }
    }, [roomId])
 
    const onTextChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
 
    const onMessageSubmit = (e) => {
        const { name, message } = state
        socketRef.current.emit("message", { name, message })
        setChat(prevChat => [ ...prevChat, { name, message } ])
        db.collection('events').doc(roomId).update({
            Chats: [...chat, { name, message }],
        });
        e.preventDefault()
        setState({ message: "", name })
    }
 
    const renderChat = () => {
        return chat.map(({ name, message }, index) => (
            <div key={index}>
                <h3>
                    {name}: <span>{message}</span>
                </h3>
            </div>
        ))
    }
    if (roomId) {
        return (
            <div className="render-chat">
                <h1>Chat Log</h1>
                {renderChat()}
                <form onSubmit={onMessageSubmit}>
                
                <div>
                    <TextField
                        name="message"
                        onChange={(e) => onTextChange(e)}
                        value={state.message}
                        id="outlined-multiline-static"
                        variant="outlined"
                        label="Message"
                    />
                </div>
                <button className="sendMsg">Send Message</button>
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <div> <h2>Select the event room from left pane to start the chat with the participant present in the same room...</h2></div>
                <div><img className="chatLogo" src={chatLogo}></img></div>
            </div>
        )
    }
}

export default RenderChat
