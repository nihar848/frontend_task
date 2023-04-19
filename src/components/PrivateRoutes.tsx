import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate,Outlet } from 'react-router-dom';
import { selectLoggedInState } from '../service/reducer/loginReducer';

const PrivateRoutes = () => {

    const isLoggedIn = useSelector(selectLoggedInState);
    console.log(isLoggedIn);
  return (
    isLoggedIn? <Outlet/> : <Navigate to='/'/>
  )
}

export default PrivateRoutes