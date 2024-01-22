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

  const SetAccountInfo = (username, email, firstName, lastName ) => {
    const user = { 
      username: username, 
      email: email,
      first_name: firstName,
      last_name: lastName,
    };
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
};

  const SetUserAccountInfro = 

  useEffect(() => {
    // Fetch the authentication status from the backend
    if(localStorage.getItem('isAuthenticated') === null) {
      console.log("isAuthenticated is null")
        fetch('https://nba-stats-backend-production.up.railway.app/check-login/', {
            credentials: 'include',
        })
          .then(response => response.json())
          .then(data => {
            setIsAuthenticated(data.is_authenticated);
           
            if(data.is_authenticated && !user) {
                setUser({ 
                    username: data.username, 
                    email: data.email,
                    first_name: data.first_name,
                    last_name: data.last_name,
                });
            }
            setIsLoading(false);
          });
    }
  }, []);

  const [localUser, setLocalUser] = useState(
    () => JSON.parse(localStorage.getItem('User')) || {}
  );

  useEffect(() => {
    console.log("")
  }, [localUser])

  useEffect(() => {
    // Save isAuthenticated to localStorage whenever it changes
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    console.log("user(auth context): ", user);
  }, [user]);

//   if (isLoading) {
//     return <div>Loading...</div>; // Or your custom loading component
//   }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser, SetLoginAuth, SetLogoutAuth, isLoading, SetAccountInfo }}>
      {children}
    </AuthContext.Provider>
  );
};