import { createContext, useEffect, useState } from "react";
import React from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  //const[user , setUser] = useState(null);
  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || null;
  });


  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = (
    userCredentials_id,
    userCredentials_username,
    usersCredintials_rol
  ) => {
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
    <AuthContext.Provider
      value={contextValue}
      style={{ margin: "0", padding: "0" }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
