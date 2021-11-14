import { createContext, useState } from "react";
import React from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  //const[user , setUser] = useState(null);
  const [user, setUser] = useState(null);
  

  const login = (userCredentials_id, userCredentials_username) => {
    setUser({
      id: userCredentials_id,
      username: userCredentials_username,
    });
  };

  const register = (userCredentials_id, userCredentials_username) => {
    setUser({
      id: userCredentials_id,
      username: userCredentials_username,
    });
  };
  const logout = () => {
    setUser(null);
  };

  const isLogged = () => !!user;

  const contextValue = {
    user,
    isLogged,
    login,
    logout,
    register,
    
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;