import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from '../context/AuthContext';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import background from "../assets/netflix-bg.jpg";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LogIn = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const  [error, setError]=useState('')
  const { user, logIn } = userAuth();
  const navigate = useNavigate();

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const token = await user.getIdToken();
      sessionStorage.setItem('authToken', token);
      setOpenSnackbar(true);
      navigate('/movies');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passHandler = (e) => {
    setPassword(e.target.value);
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
          LogIn success
        </Alert>
      </Snackbar>

      <div className='w-full h-full'>
        <div className='hidden sm:block absolute h-full w-full object-cover top-0 left-0
        '>
          <img src={background} alt="" />
          <div className='bg-black/30 fixed top-0 left-0 w-full h-full'>
            <div className='fixed w-full px-4 py-24 z-50'>
              <div className='max-w-[450px] h-[650px]  z-50 bg-black/50 text-white mx-auto'>
                <div className='max-w-[320px] mx-auto py-16'>
                  <h1 className='text-3xl'>Log In</h1>
                  <form className='flex flex-col gap-5 pt-5 z-50' onSubmit={handleSubmit}>
                    <label htmlFor="">Email</label>
                    <input
                      className="py-2 bg-gray-600 rounded-lg"
                      type="email"
                      value={email}
                      onChange={emailHandler}
                    />
                    <label htmlFor="">Password</label>
                    <input
                      className="py-2 bg-gray-600 rounded-lg"
                      type="password"
                      value={password}
                      onChange={passHandler}
                    />
                    <button
                      className='py-2 bg-red-500 rounded-lg text-white'
                      type="submit"
                    >
                      
                      Log In
                    </button>
                    {error ? <p>Wrong password</p> : ''} 
                  </form>
                  <p className='pt-10'>Not a member? 
                  <span className='text-blue-400 underline px-3' ><Link to="/signup">Sign Up</Link></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;