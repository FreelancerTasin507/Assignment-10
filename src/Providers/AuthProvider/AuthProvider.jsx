import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { GoogleAuthProvider ,signInWithPopup} from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const user = {displayName : 'Tasin'}

    const googleLogin = () =>{
        return signInWithPopup(auth, provider)
    }

    
    const authInfo = {
        user,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;