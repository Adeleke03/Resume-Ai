import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import Logo from '../assets/si_ai-line.png'
import { Link } from 'react-router-dom';

const PrivateNavbar = ({user, setUser}) => {
  return (
    <>
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
        <div className='flex items-center'>
        <Link to="/">
          <p className='font-[500] md:text-[20px] leading-[100%] tracking-[0%] bg-inherit btn hover:bg-[#E2E2E2] border-0 hover:rounded-[10px] text-[#000000]'>
            Home
          </p>
        </Link>
        <Link to="/profile" >
        
          <p className='flex font-[500] md:text-[20px] leading-[100%] tracking-[0%] bg-inherit btn hover:bg-[#E2E2E2] border-0 hover:rounded-[10px] text-[#000000] items-center'><IoPersonOutline/> <span className='hidden md:block'>Profile</span></p>
        </Link>
        </div>
      </nav>
    </header>

    </>
  )
}

export default PrivateNavbar