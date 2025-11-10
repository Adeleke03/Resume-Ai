import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';

const JobAnalyzerNav = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    };
  return (
    <>
<nav className="flex wrapper h-[60px] lg:h-[105px] items-center md:gap-[30px] gap-[15px] bg-white">
    <LiaLongArrowAltLeftSolid className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl' onClick={handleGoBack} />
      {/* Title */}
      <div className="flex items-center gap-[10px]">
        <CiSearch  className=" text-2xl md:text-3xl lg:text-4xl text-[#4F39F6]"/>
        <h1 className="font-[400] text-[20px] leading-[100%] tracking-[0%]">Job Analyzer</h1>
      </div>
        </nav>
    </>
  )
}

export default JobAnalyzerNav