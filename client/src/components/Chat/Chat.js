import React, { useEffect, useState } from 'react';
import './Chat.css';
import io, { Socket } from 'socket.io-client';
import queryString from 'query-string';
import { useLocation } from 'react-router';

const Chat = () => {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const ENDPOINT = 'localhost:5000'

    let socket;

    const location = useLocation();

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT, { transports : ['websocket'] })

        setName(name)
        setRoom(room)

        socket.emit('join', {name, room})
    }, [ENDPOINT, location.search])

    return (
        <div>
            I a
        </div>
    );
};

export default Chat;