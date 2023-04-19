import React from 'react'
import { useEffect, useState } from 'react';
import { profile } from '../utility/Fetchapi';

const Home = () => {
  const [user, setUser] = useState({id: '',email: '',name: ''})
  useEffect(()=>{
    profile('api/profile').then((data)=>{
      console.log(data);
      setUser(data);
    })
  },[])
  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{user.email}</h1>
      <h1>{user.name}</h1>
    </div>
  )
}

export default Home