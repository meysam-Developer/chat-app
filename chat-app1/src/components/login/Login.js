import React from 'react'
import "./login.css";
//image
import google from "../../assets/google.svg"
import chat from "../../assets/chat.svg"
//auth
import {auth} from '../../firebase';
import firebase from 'firebase/app'
function Login() {
  return (
    <div className='container'>
      <div className='crad'>
        
        <h3>Please Sign in </h3>
        <img src={chat} className='big-icon'/>

        <div className='btn-card' onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
            <img src={google}/><span>Sign in with google</span>

        </div>
        
      </div>
    </div>
  )
}

export default Login