import React from 'react'
import { Outlet, Navigate } from 'react-router';
import {UseAuthStatus} from '../Hooks/UseAuthStatus';

export default function PrivateRoutes() {
    const {loggedIn,checkingStatus} = UseAuthStatus();
    if(checkingStatus){
        return <h3>Loading... </h3>
    }
  return loggedIn ? <Outlet/> : <Navigate to="/sign-in"/>
}
