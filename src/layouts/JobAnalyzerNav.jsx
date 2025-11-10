import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';

const JobAnalyzerNav = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bg-white top-0 left-0 w-full z-50 transition-all duration-900 ${
        isScrolled
          ? "bg-white/40 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      {/* ✅ wrapper only inside the nav, not on the nav itself */}
      <div className="wrapper flex h-[60px] lg:h-[105px] items-center md:gap-[30px] gap-[15px]">
        <LiaLongArrowAltLeftSolid
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl cursor-pointer"
          onClick={handleGoBack}
        />
        <div className="flex items-center gap-[10px]">
          <CiSearch className="text-2xl md:text-3xl lg:text-4xl text-[#4F39F6]" />
          <h1 className="font-[400] text-[20px] leading-[100%] tracking-[0%]">
            Job Analyzer
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default JobAnalyzerNav;
