import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from '../context/AuthContext';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import background from "../assets/netflix-bg.jpg";

const SignUp = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const { user, signUp } = userAuth();
  const navigate = useNavigate();

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
    try {
      await signUp(email, password,fullName, address, location);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
    setPassword('');
    setEmail('');
    setFullName('');
    setAddress('');
    setLocation('');
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passHandler = (e) => {
    setPassword(e.target.value);
  };

  const fullNameHandler = (e) => {
    setFullName(e.target.value);
  };
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };

  const locationHandler = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          User registered
        </Alert>
      </Snackbar>

      <div className='w-full h-full'>
        <div className='hidden sm:block absolute top-0 object-cover'>
          <img src={background} alt="" />
          <div className='bg-black/30 fixed top-0 left-0 w-full h-full'>
            <div className='fixed w-full px-4 py-6 z-50'>
              <div className='max-w-[450px] h-[650px]  z-50 bg-black/50 text-white mx-auto'>
                <div className='max-w-[320px] mx-auto '>
                  <h1 className='text-3xl pt-8'>Sign Up </h1>
                  <form className='flex flex-col gap-1 py-2 z-50' onSubmit={handleSumbit}>
                    <label htmlFor="">Email</label>
                    <input
                      className="py-1 bg-gray-600 rounded-lg"
                      type="email"
                      value={email}
                      onChange={emailHandler}
                    />
                    <label htmlFor="">Password</label>
                    <input
                      className="py-1 bg-gray-600 rounded-lg"
                      type="password"
                      value={password}
                      onChange={passHandler}
                    />
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      className="py-1 bg-gray-600 rounded-lg"
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={fullNameHandler}
                    />
                    <label htmlFor="address">Address</label>
                    <input
                      className="py-1 bg-gray-600 rounded-lg"
                      type="text"
                      id="address"
                      value={address}
                      onChange={addressHandler}
                    />
                    <label htmlFor="location">Location</label>
                    <input
                      className="py-1 bg-gray-600 rounded-lg"
                      type="text"
                      id="location"
                      value={location}
                      onChange={locationHandler}
                    />
                    <div className='py-3'>
                    <button className='bg-red-500 w-full py-2'>Sign Up</button>
                      </div>
                  
                  </form>
                  <div className='flex justify-between items-center pt-4'>
                    <div className='flex gap-3'>
                      <input type="checkbox" /><p>Remember me</p>
                    </div>
                    <p>Need help?</p>
                  </div>
                  <p className='pt-5'>Already subscribed? <Link to="/login" className='text-blue-500 underline'>SignIn</Link> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
