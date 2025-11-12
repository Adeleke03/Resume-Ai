import React, {useState, useEffect} from 'react'
import MyButton from "../components/MyButton.jsx";
import Logo from "../assets/si_ai-line.png";
import {  FiDownload, FiEye } from "react-icons/fi";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';


const ResumeBuilderNav = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <nav className={`fixed bg-white top-0 left-0 w-full z-50 transition-all duration-900 ${
        isScrolled
          ? "bg-white/40 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-md"
      }`}>
        <div className='wrapper flex h-[60px] lg:h-[105px] items-center md:gap-[30px] justify-between'>
        {/* section for logo and title */}
        <section className='flex items-center gap-[30px]'>
            <LiaLongArrowAltLeftSolid className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl cursor-pointer" onClick={handleGoBack}/>
            <img src={Logo} className='cursor-pointer' alt="Logo" /> <span className='font-[400] text-[20px] leading-[100%] tracking-[0%]'>Resume Builder</span>
        </section>
        {/* section for buttons */}
        <section className='flex items-center gap-[10px]'>
            {/* <MyButton className='flex items-center border-[0.6px] border-[#B2B2B2] gap-[15px] rounded-[10px] py-[12px] px-[15px] font-[700]   text-[20px]'><FiEye/> Preview</MyButton>
            <MyButton className='flex items-center border-[0.6px] border-[#B2B2B2] gap-[15px] rounded-[10px] py-[12px] px-[15px] font-[700]   text-[20px]'><FiDownload/>Save</MyButton> */}
        </section>
        </div>
    </nav>

    </>
  )
}

export default ResumeBuilderNav