import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
  );
  const [isLoading, setIsLoading] = useState(true);

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
        fetch('http://127.0.0.1:8000/check-login/', {
            credentials: 'include',
        })
          .then(response => response.json())
          .then(data => {
            setIsAuthenticated(data.is_authenticated);
            // setIsLoading(false);
          });
    }
  }, []);

  useEffect(() => {
    // Save isAuthenticated to localStorage whenever it changes
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

//   if (isLoading) {
//     return <div>Loading...</div>; // Or your custom loading component
//   }

  return (
    <AuthContext.Provider value={{ isAuthenticated, SetLoginAuth, SetLogoutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};