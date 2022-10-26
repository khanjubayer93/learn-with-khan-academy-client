import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in 
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)

    }
    // sign in with google provider
    const googleProviderLogin =(provider)=>{
        return signInWithPopup(auth, provider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('auth state changing in inside', currentUser);
            
        })

        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = { 
        user,
        createUser,
         signIn ,
        googleProviderLogin
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;