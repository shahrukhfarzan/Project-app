import './loginPage.css';
import loginApi from './Api/Login';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginForm = () =>{
    const [email, setEmail]= useState();
    const [password, setPassword]= useState();
    const navigate=useNavigate();

    const handleSubmit = () =>{
        
        if(email===undefined|| password===undefined){
            alert('email and password required');
        }else{
            let body = {
                email: email,
                password: password

            }
            loginApi(body)
            alert('login Success');
            navigate('/home');
        }
    }

    const getInput = (e)=>{
        e.target.name==='email' ? setEmail(e.target.value):setPassword(e.target.value);
    }
    return(
        <>
            <div className='form-container'>
                <div className='form-wrapper'>
                    <div className='input-wrapper'><label>Email</label>    
                <input type="text" name="email" onChange={(e)=>getInput(e)} value={email} className='Email' placeholder="Your Email" /></div>
                   <div className='input-wrapper'><label>Password</label>    
                <input type="Password" name="Password" onChange={(e)=>getInput(e)} value={password} className='Password' placeholder="Password" /></div>    
                 
                <input type="button" onClick={handleSubmit } name="log" className='btn' id="log" value="Log In Here" /> 
                </div>           
            </div>
        </>
    );
}

export default LoginForm;