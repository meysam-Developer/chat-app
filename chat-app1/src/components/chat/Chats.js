import React, { useContext, useState,useEffect} from 'react'
import Navbar from '../navigation/Navbar'

import {auth} from '../../firebase';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
//context
import {AuthContext} from "../../context/AuthContextProvider"
import axios from 'axios';


function Chats() {

    const [loading,setLoading]=useState(true);
    const user=useContext(AuthContext);
    const history=useHistory();

    useEffect(()=>{
        if(!user){
            history.push("/");
            return
        }

        axios.get("",{
            headers:{
                "project-id":"926c41d3-7b66-419f-a399-cd87ca27a924",
                "user-name":user.email,
                "user-secret":user.uid,
            }
        })

        .then(()=>{
            setLoading(false)
        })
        .catch(()=>{
            let formData=new FormData();
            formData.append("email",user.email);
            formData.append("username",user.email);
            formData.append("secret",user.uid);
            getFile(user.photoURL)
            .then(avatar=>{
                formData.append("avatar",avatar,avatar.name);
                axios.post("https://api.chatengine.io/user/",formData,{
                    headers:{
                        "private-key":"6ef37d97-78f3-4724-8349-e1238328d189"
                    }
                    
                })
                .then(()=>setLoading(false))
                .catch(error=>console.log(error));
            })


        })
    },[user,history])

    const getFile = async (url) => {
        const response=await fetch(url);
        const data=await response.blob();
        return new File([data],"userPhoto.jpg",{type:"image/jpeg"})

    }

    const logout=async()=>{
            await auth.signOut();
            history.push("/");

        }

         if(!user || loading) return "IS LOADING...."
    return (
      
        <div>
            <Navbar logout={logout}/>
            <ChatEngine
                height="calc(100vh-50px)"
                ProjectID="926c41d3-7b66-419f-a399-cd87ca27a924"
                userName={user.email}
                userSecret={user.uid}
            
            />

        </div>
    )
}

export default Chats
