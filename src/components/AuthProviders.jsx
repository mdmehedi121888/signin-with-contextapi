import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    } 

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const handleSignOut = ()=>{
        return signOut(auth)
    }
    const googleSignIn = () =>{
        return signInWithPopup(auth,provider);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,user =>{
            if(user){
               
                setUser(user);
            }
            else{
                
                setUser(null);
            }
        })
        return ()=>{
            unsubscribe();
        }

    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        handleSignOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
        
    );
};

export default AuthProviders;