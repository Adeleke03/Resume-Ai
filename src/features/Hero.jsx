import React from "react";
import Logo from "../assets/si_ai-line.png";
import Logo2 from "../assets/si_ai-line (1).png"
import MyButton from "../components/MyButton";

const Hero = () => {
  return (
    <>
      <main className="flex flex-col pt-11   justify-between items-center ">
        <section className=" flex flex-col gap-[55px]">

        {/* header for Hero */}
        <article className="flex flex-col gap-[30px]">

        <div className="bg-[#EDEBFE] flex mx-auto lg:w-[285px] rounded-[27px] ">

        <figure className="flex gap-[5px] mx-auto items-center text-[#6D5BF8] text-[18px] font-400 leading-[100%] tracking-[0%]">
          <img src={Logo} alt="" />
          <figcaption>AI-Powered Career Assistant</figcaption>
        </figure>
        </div>
        {/* Hero context  */}
        <div className="flex  flex-col gap-[35px]">

        <h2 className="font-[500] text-[20px] leading-[100%] tracking-[0%] text-[#4C4C4C] text-center">Land Your Dream Job with AI-Powered Resume & Cover Letter Tools</h2>
        <p className="font-[500] text-[20px] leading-[100%] tracking-[0%] text-center text-[#7A7A7A]">
          Create standout resumes, analyze job description, and crraft
          compelling cover letters in minutes. Let AI handle the hard work while
          you focus on your career.
        </p>
        </div>
        </article>
        {/* Interactive buttons  */}
        <div className="flex flex-col md:flex-row gap-[25px]  mx-auto items-center justify-center">

        <MyButton className="flex bg-[#4F39F6]  btn gap-[10px] py-[10px] hover:bg-[#3728AC] px-[15px] text-white rounded-[10px] text-[20px]" >Build My Resume <span><img src={Logo2} alt="" /></span></MyButton>
        <MyButton className="border-[#4C4C4C] btn hover:bg-white hover:border-0 border-[0.6px] rounded-[10px] px-[25px] gap-[10px] py-[12px] font-[500] text-[20px] leading-[100%] tracking-[0%]">Analyze a Job</MyButton>
        </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
