import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (name) => {
    setUser({ name });
    // Vous ne devez pas utiliser navigate ici, retirez cette ligne
  };

  const logout = () => {
    setUser(null);
    // Vous ne devez pas utiliser navigate ici, retirez cette ligne
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
