'use client';

import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserLoggedIn(true);
      setUserName("John Doe"); // You can replace this with extracting the user name from the token
    } else {
      setUserLoggedIn(false);
      setUserName("");
    }
  }, []);

  const login = (token, userName) => {
    localStorage.setItem("token", token);
    setUserLoggedIn(true);
    setUserName(userName);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUserLoggedIn(false);
    setUserName("");
  };

  return (
    <UserContext.Provider value={{ userLoggedIn, userName, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
