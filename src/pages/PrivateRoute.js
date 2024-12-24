import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext'; // Chemin mis à jour

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user } = useContext(UserContext);

  return user && user.token ? <Component {...rest} /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
