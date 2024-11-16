// components/ProtectedRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.UserDetails.isLoggedIn);

    if (!isLoggedIn) {
        console.log('User not logged in, redirecting...');
        return <Navigate to="/login" />;
      }
    
      return children;
};

export default ProtectedRoute;
