import React, { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword ,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // Google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Google login

  // GitHub login
  const gitHubLogin = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  // GitHub login

  // Email Password login

  //User Register
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //User Register

  // User Login
  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //User Login

  // Email Password login

  const authInfo = {
    userInfo,
    setUserInfo,
    googleLogin,
    gitHubLogin,
    register,
    SignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
