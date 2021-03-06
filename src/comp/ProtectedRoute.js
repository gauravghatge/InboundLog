import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({Component}:any) => {
  
    const auth = true; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return  <Component /> ;
}

export default ProtectedRoute;