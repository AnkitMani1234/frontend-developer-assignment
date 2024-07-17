import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Implement login logic
    setUser({ email });
  };

  const signup = (email, password, username) => {
    // Implement signup logic
    setUser({ email, username });
  };

  const logout = () => {
    setUser(null);
  };

  const loginWithGoogle = () => {
    // Implement Google login logic
    setUser({ email: 'googleuser@gmail.com' });
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
