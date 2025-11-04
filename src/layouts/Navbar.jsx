import React from 'react'
import Logo from '../assets/si_ai-line.png'

const Navbar = () => {
  return (
    <>
    <main className='border-b-[0.5px]  border-b-[#7A7A7A]'>
<nav className='flex items-center justify-between bg-[#FFFFFF99] wrapper '>
      <div className='  flex items-center gap-2'>
        <img src={Logo} alt="" className='w-8 h-8' />
        <span className='md:text-[20px] leading-[100%] tracking-[0%] text-[#1F1F1F]'>ResumeAI</span>
      </div>
      <div>
        <p className='font-[500] md:text-[20px] leading-[100%] tracking-[0%] bg-inherit btn hover:bg-[#E2E2E2] border-0  hover:rounded-[10px] text-[#000000]'>Dashboard</p>
      </div>
    </nav>
    </main>
    
    </>
  )
}

export default Navbar
// <nav className='flex flex-col md:flex-row items-center justify-between p-4 bg-gray-800 text-white'>
//   {/* logo and name  */}
//   <div className='flex items-center gap-2'>
//     <img src={Logo} alt="Logo" className='w-8 h-8' />
//     <span className='text-xl  font-bold'>ResumeAI</span>
//   </div>
//   {/* dashboard section */}
//   <div className='flex items-center gap-4'>
//     <p className='text-lg'>Dashboard</p> 
//     {/* Add more nav items here */}
//   </div>
  
// </nav>