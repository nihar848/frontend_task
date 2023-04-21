import React, { useState } from 'react'
import { Box, Typography, Grid, TextField, Button } from '@mui/material'
import { signup } from '../utility/Fetchapi';
import {useNavigate} from 'react-router-dom';
const Signup = () => {
 const [intRegister, setIntRegister] = useState({
    email: '',
    name : '',
    password : ''
  });
  let {email, name, password} = intRegister;
  const navigate = useNavigate();
  const register = () => {
    signup('api/signup', {email,name,password}).then((data)=>{
      alert(data.message);
     navigate('/login');
    })
  }
  return (
    <div style={{ padding: 30 }}>
      <Box>
        <Grid container spacing={3} direction={'column'} justifyContent={'center'} alignItems={'center'}>
          <Grid item xs={12}>
            <TextField label="Email" value={email} onChange={(e)=>{
              email = e.target.value;
            }}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Name" value={name} onChange={(e)=>{
              name = e.target.value;
            }}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} value={password} onChange={(e)=>{
              password = e.target.value;
            }}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={register}> Sign Up </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={()=>navigate('/login')}> Login </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Signup