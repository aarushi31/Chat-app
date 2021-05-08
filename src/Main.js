import React from 'react'
import LoginForm from './components/LoginForm'
import ChatFeed from "./components/ChatFeed"
import SignupForm from "./components/SignupForm";
import {ChatEngine} from "react-chat-engine"
function Main() {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <div>
            <ChatEngine
      height="100vh"
      projectID="1dd67852-57c9-4fa2-a469-de97f61fe9ff"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(props)=><ChatFeed {...props}/>}
    />
        </div>
    )
}

export default Main
