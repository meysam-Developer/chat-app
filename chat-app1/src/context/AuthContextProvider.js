import React,{createContext, useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import {auth} from '../firebase';

export const AuthContext=createContext();

function AuthContextProvider({children}) {

    const[loading,SetLoading]=useState(true);
    const[user,SetUser]=useState(false);
    const history = useHistory();
    


    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            SetUser(user);
            SetLoading(false);
            history.push('/chat');

        })

    },[history,user])

  return (
   <AuthContext.Provider value={user}>
    {!loading && children}

   </AuthContext.Provider>
  )
}

export default AuthContextProvider