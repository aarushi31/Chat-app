import React from "react"
import Main from './Main'
import {Route,Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from "./components/ChatFeed"
import SignupForm from "./components/SignupForm";

function App() {
  
  return (
    
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/" component={Main}/>
    </Switch>
  
  );
}

export default App;
