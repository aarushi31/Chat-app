import axios from "axios";
import { useState } from "react";
import LoginForm from './LoginForm';
import {Link} from 'react-router-dom';


const SignupForm=()=>{

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [error,setError]=useState('');
    const [created,setCreated]=useState(false);
    
    const postData={
        username:"",
        secret:"",
        first_name:"",
        last_name:""

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const authObject={'PRIVATE-KEY':"c7e481b5-03b9-402d-8676-3a8fe504fa60"}
        
    postData.username=username;
    postData.secret=password;
    postData.first_name=fname;
    postData.last_name=lname;
    try{
        axios.post('https://api.chatengine.io/users/',postData,{headers:authObject})
        .then((res)=>{
            if(res.status===200){
                setError('User created. Login to continue');

            }
        })
        
    }catch(err){
        setError('Oops! Error')
    }
    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Set username" required/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Set Password" required/>
        <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} className="input" placeholder="First name" required/>
        <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)} className="input" placeholder="Last name" required/>
        <div align="center">
            <button type="submit" className="button" onClick={handleSubmit}>
                <span>Create new user</span>
            </button>
            <Link to="/login" type="submit" className="button">
                <span>Login</span>
            </Link>
        </div>
        <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
export default SignupForm