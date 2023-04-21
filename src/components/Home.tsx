import React from 'react'
import { useEffect, useState } from 'react';
import { profile } from '../utility/Fetchapi';
import {Box, Grid, TextField, Button, Snackbar} from '@mui/material'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginState } from '../service/reducer/loginReducer';
import Notification from './Notification';


const Home = () => {
      const navigate = useNavigate();
      const dispatch = useDispatch(); 
  const [user, setUser] = useState({id: '',email: '',name: ''})
  useEffect(()=>{
    profile('api/profile').then((data)=>{
      console.log(data);
      setUser(data.user);
    })
  },[]) 

  const updateHandler = () =>{
    
   console.log(user.name)
  }
  return (
      <div style={{padding:30}}>
      <h3>Email : {user.email}</h3>
      <h3>Name: {user.name}</h3>
        <Box>
        <Grid container spacing={3} direction={'column'} justifyContent={'center'} alignItems={'center'}>
          <Grid item xs={12}>
          <Button fullWidth onClick={updateHandler}> Update profile </Button>
            {/* <UpdateProfile props={name}/> */}
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={updateHandler}> Update Password </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={()=>{
               dispatch(setLoginState(false));
               navigate('/login');
            }}> Logout </Button>
          </Grid>
          </Grid>
        </Box>
         <Notification/>
          
    </div>

  )
}

export default Home