import React from 'react'
import { useEffect, useState } from 'react';
import { profile } from '../utility/Fetchapi';
import {Box, Grid, TextField, Button} from '@mui/material'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginState } from '../service/reducer/loginReducer';

const Home = () => {
      const navigate = useNavigate();
      const dispatch = useDispatch();
  const [user, setUser] = useState({id: '',email: '',name: ''})
  useEffect(()=>{
    profile('api/profile').then((data)=>{
      console.log(data);
      setUser(data);
    })
  },[])
  
  return (
      <div style={{padding:30}}>
      <h1>{user.id}</h1>
      <h1>{user.email}</h1>
      <h1>{user.name}</h1>
        <Box>
        <Grid container spacing={3} direction={'column'} justifyContent={'center'} alignItems={'center'}>
          <Grid item xs={12}>
            <Button fullWidth> Update Profile </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth> Update Password </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={()=>{
               dispatch(setLoginState(false));
               navigate('/');
            }}> Logout </Button>
          </Grid>
          </Grid>
        </Box>
    </div>

  )
}

export default Home