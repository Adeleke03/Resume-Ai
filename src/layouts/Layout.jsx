import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet /> {/* This renders the nested route components */}
      </main>
    <Footer/>
    </>
  )
}

export default Layout