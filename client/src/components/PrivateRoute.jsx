
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const authToken = localStorage.getItem('auth_token');

    if (!authToken) {
        
        return <Navigate to="/login" />;
    }

    
    return <Outlet />;
};

export default ProtectedRoute;


