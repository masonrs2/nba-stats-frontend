import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
  );
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  const SetLoginAuth = () => {
    setIsAuthenticated(true);
  };
  
  const SetLogoutAuth = () => {
    setIsAuthenticated(false);
    console.log("Signout Auth: ", isAuthenticated)
  }

  useEffect(() => {
    // Fetch the authentication status from the backend
    if(localStorage.getItem('isAuthenticated') === null) {
        fetch('https://nba-stats-backend-production.up.railway.app/check-login/', {
            credentials: 'include',
        })
          .then(response => response.json())
          .then(data => {
            setIsAuthenticated(data.is_authenticated);
           
            if(data.is_authenticated) {
                setUser({ username: data.username, email: data.email })
            }
            setIsLoading(false);
          });
    }
  }, []);

  useEffect(() => {
    // Save isAuthenticated to localStorage whenever it changes
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    console.log("user: ", user)
  }, [isAuthenticated]);

//   if (isLoading) {
//     return <div>Loading...</div>; // Or your custom loading component
//   }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, SetLoginAuth, SetLogoutAuth, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};