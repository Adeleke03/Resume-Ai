import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import PrivateNavbar from './PrivateNavbar';
import Footer from './Footer';

const PrivateLayout = ({ user, setUser }) => {
  // If no user is logged in, redirect to /signin
  if (user) {
    return <Navigate to="/signin" replace />;
  }

  // Otherwise, render the protected layout
  return (
    <>
      <PrivateNavbar user={user} setUser={setUser} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PrivateLayout;
