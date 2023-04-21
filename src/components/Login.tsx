import React, { useState } from 'react'
import {Box, Grid, TextField, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { login } from '../utility/Fetchapi';
import { useDispatch, useSelector } from 'react-redux'; //value store, value set
import { setLoginState } from '../service/reducer/loginReducer';

const Login = () => {
    const [intLogin, setIntLogin] = useState({
        email: '',
        password : ''
      });
      let {email, password} = intLogin;
      const navigate = useNavigate();
      const dispatch = useDispatch();

      const loginHandler = () => {
        login('api/login', {email,password}).then((data)=>{
          
          console.log(data);
          if(data.message == 'Login successfull'){           
            alert(data.message);
            dispatch(setLoginState(true));
            navigate('/');
          }if(data.message == 'User validation fail'){
            alert(data.message);
          }
         
        })
      }
  return (
    <div style={{padding:30}}>
        <Box>
        <Grid container spacing={3} direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={12}>
            <TextField label="Username" onChange={(e)=>{
              email = e.target.value;
            }}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} onChange={(e)=>{
              password = e.target.value;
            }}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={loginHandler}> Login </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={()=>{
              navigate('/Signup');
            }}> Sign up </Button>
          </Grid>
          </Grid>
        </Box>
    </div>
  )
}

export default Login