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
            projectID="ed1f4ca3-2d7a-4d81-a519-08656273b235"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) =>  
            <ChatFeed { ... chatAppProps}/> 
            }
        />
    )
}

export default App;
 