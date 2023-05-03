import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { GoogleAuthProvider ,signInWithPopup} from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [userInfo ,setUserInfo]  = useState(null)
    const provider = new GoogleAuthProvider();

    const googleLogin = () =>{
        return signInWithPopup(auth, provider)
    }

    
    const authInfo = {
        userInfo,
        setUserInfo,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;