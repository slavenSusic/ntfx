import React from 'react';
import Navbar from '../Components/Nav';
import { Outlet } from 'react-router-dom';


function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
       
      </main>
    </>
  );
}

export default RootLayout;
