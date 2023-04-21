import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import {Button, IconButton, Snackbar} from '@mui/material'

const socket = io('https://demo-api.pritamdas.com')


const Notification = () => {
  const [notification, setNotification] = useState({id: '',title: '',body: ''})
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    socket.emit('notification:subscribe', (res:unknown)=>{
      console.log(res);
    })
    socket.on('notification:get', (res)=>{
      setNotification(res)
      setOpen(true);
      console.log(res);
    })
  }, [notification]);
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        {/* <CloseIcon fontSize="small" /> */}
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
       <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={notification.body}
        action={action}
      />
    </div>
  )
}

export default Notification