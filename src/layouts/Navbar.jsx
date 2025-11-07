import React from 'react'
import Logo from '../assets/si_ai-line.png'
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

const Navbar = () => {
  return (
    <header className='border-b-[0.5px] border-b-[#7A7A7A]'>
      <nav className='flex items-center justify-between bg-[#FFFFFF99] wrapper'>
       <Link to="/">
        <div className='flex items-center gap-2'>
          <img src={Logo} alt="ResumeAI logo" className='w-8 h-8' />
          <span className='md:text-[20px] leading-[100%] tracking-[0%] text-[#1F1F1F]'>
            ResumeAI
          </span>
        </div>
       </Link>
        <Link to="/dashboard">
        <div>
          <p className='font-[500] md:text-[20px] leading-[100%] tracking-[0%] bg-inherit btn hover:bg-[#E2E2E2] border-0 hover:rounded-[10px] text-[#000000]'>
            Dashboard
          </p>
        </div>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
