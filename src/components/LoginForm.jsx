import axios from "axios";
import { useState } from "react"
import {Link} from 'react-router-dom';

const LoginForm=()=>{

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const authObject={'Project-ID':"1dd67852-57c9-4fa2-a469-de97f61fe9ff",
    'User-Name':username,'User-Secret':password}
    try{
        await axios.get('https://api.chatengine.io/chats',{headers:authObject})
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);
        window.location.reload();
    }catch(err){
        setError('Oops!Incorrect credentials')
    }
    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" required/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" required/>
        <div align="center">
            <Link to="/" type="submit" className="button" onClick={handleSubmit}>
                <span>Start Chatting</span>
            </Link>
            <br/><br/><br/><br/>
            <Link to="/signup" className="button">
                <span>Create new user</span>
            </Link>
        </div>
        <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm