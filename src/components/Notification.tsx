import React, { useEffect } from 'react'
import { io } from 'socket.io-client'

const socket = io('https://demo-api.pritamdas.com')

const Notification = () => {
  useEffect(()=>{
    socket.on('notification:subscribe', (res)=>{
      console.log(res);
    })
    socket.on('notification:get', (res)=>{
      console.log(res);
    })
  }, []);
  return (
    <div>Notification</div>
  )
}

export default Notification