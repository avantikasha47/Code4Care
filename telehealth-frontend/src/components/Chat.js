// src/components/Chat.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Chat = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Chat Page for Doctor ID: {id}</h1>
        </div>
    );
};

export default Chat;
