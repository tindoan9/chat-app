import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase, { auth } from "../firebase/config";

const fbProvider = new firebase.auth.FacebookAuthProvider();
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const handleLoginFb = () => {
    auth.signInWithPopup(fbProvider);
  };

  return (
    <AuthContext.Provider value={{ handleLoginFb, user }}>
      {children}
    </AuthContext.Provider>
  );
};
