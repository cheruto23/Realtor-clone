import React from 'react'
import { Outlet, Navigate } from 'react-router';
import {UseAuthStatus} from '../Hooks/UseAuthStatus';
import Spinnerr from './Spinner';

export default function PrivateRoutes() {
    const {loggedIn,checkingStatus} = UseAuthStatus();
    if(checkingStatus){
        return <Spinnerr/>
    }
  return loggedIn ? <Outlet/> : <Navigate to="/sign-in"/>
}
