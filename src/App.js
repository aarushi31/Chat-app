import React from "react"
import {ChatEngine} from "react-chat-engine"
import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from "./components/ChatFeed"

function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
      height="100vh"
      projectID="1dd67852-57c9-4fa2-a469-de97f61fe9ff"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(props)=><ChatFeed {...props}/>}
    />
  );
}

export default App;
