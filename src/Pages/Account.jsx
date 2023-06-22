import React from 'react'
import { useState, useEffect } from 'react';
import {userAuth} from '../context/AuthContext'

function Account() {
    const {user, userData} = userAuth()

    const [creationTime, setCreationTime] = useState(null);

    useEffect(() => {
      if (user) {
        const userCreationTime = new Date(user.metadata.creationTime);
        setCreationTime(userCreationTime.toLocaleString());
      }
    }, [user]);
  
    console.log(userData);
    console.log(user);



  return (
    <div className='px-10'>
      <h2 className='text-3xl text-white py-10'>Account info:</h2>
   <p className="text-lg text-gray-200 mb-4">Full Name: {userData?.fullName}</p>
    <p className="text-lg text-gray-200 mb-4">Address: {userData?.address}</p>
    <p className="text-lg text-gray-200 mb-4">Location: {userData?.location}</p>
    <p className="text-lg text-gray-200 mb-4">Email: {user?.email}</p>
    <p className="text-lg text-gray-200 mb-4">
          Account created at: {creationTime}
        </p>
  </div>
  )
}

export default Account