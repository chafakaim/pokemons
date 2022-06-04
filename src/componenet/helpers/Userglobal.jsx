import React,{useEffect,createContext,useState} from 'react';
import { auth } from './configfirebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth';
export const context=createContext({})

export const Userglobal = ({children}) => {
    const [user,setUser]= useState(null);
    
    let createUser=function(email,password){
        return  createUserWithEmailAndPassword(auth,email,password)
    } 
    let SignIn= function(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    function toggleUser(user){
        setUser(user)
    }
   
    useEffect(() => {        
        const unsubscrib=onAuthStateChanged(auth,(currentuser)=>{
           setUser(currentuser);
        })
        return unsubscrib;
    },[]);
    return (
        
        <context.Provider value={ {user,
            SignIn,
            toggleUser,
            createUser}}>
             {children}
        </context.Provider>
    );
}

