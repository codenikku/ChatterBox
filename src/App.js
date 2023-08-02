import { ChatEngine } from 'react-chat-engine';

import React from 'react';

import './App.css'

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App =  () =>{

    if(!localStorage.getItem('username'))return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="f26dd7c8-7751-4d8e-ab81-12c340dedf82"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) =>  
            <ChatFeed { ... chatAppProps}/> 
            }
        />
    )
}

export default App;
 