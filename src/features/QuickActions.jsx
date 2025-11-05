import React from 'react';
import { HiOutlineEnvelope, HiOutlineDocumentText } from "react-icons/hi2";
import { IoFlashOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';




const QuickActions = () => {
  const quickActionsData = [
    {
      icon: <HiOutlineDocumentText size={40} className="text-2xl text-[#4F39F6]" />,
      title: 'AI Resume Builder',
      text: 'Create professional resume with intelligent suggestions tailored to your experience.'
    },
    {
      icon: <CiSearch size={40} className="text-2xl text-[#4F39F6]" />,
      title: 'Job Description Analyzer',
      text: 'Instantly identify key skills and requirements from any job posting.'
    },
    {
      icon: <HiOutlineEnvelope size={40} className="text-2xl text-[#4F39F6]" />,
      title: 'Smart Cover Letters',
      text: 'Generate personalized cover letters that match your style and the job requirements.'
    },
    
    {
      icon: <IoFlashOutline size={40} className="text-2xl text-[#4F39F6] border rounded-full" />,
      title: 'Save & Organize',
      text: 'Keep track of all your application and documents in one convenient place.'
    }
  ];

  return (
    <>
      <main>
        {/* Section for Quick Actions */}
        <section className="grid py-20 md:grid-cols-2 gap-[20px] justify-between w-full ">
          {quickActionsData.map((action, index) => (
            <div key={index} className="card lg:w-auto bg-base-100 gap-[10px] shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="card-body py-[35px] px-[30px]">
                <div className=" items-start gap-4">
                  {/* Icon */}
                  <div className="pb-7">
                    {action.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1  ">
                    <h2 className="card-title text-lg text-[#4C4C4C] leading-[100%] tracking-[0%] text-[24px] font-[500]  pb-5">
                      {action.title}
                    </h2>
                    <p className="text-[#7A7A7A] text-[19px] font-Poppins ">
                      {action.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center mx-auto gap-[10px] mb-11 w-[80%] py-12 bg-[#EDEBFE] rounded-[15px]">
          <div className='flex flex-col gap-[65px]'>
            <div className=' flex flex-col gap-[35px]'>

          <h2 className="text-[24px] font-medium text-[#4C4C4C] text-gray-800 leading-[100%] tracking-[0%]">
            Ready to Transform Your Job Search?
          </h2>
          <p className='font-[500] font-medium md:text-[20px] leading-[100%] tracking-[0%] text-[#7A7A7A] '>Join thousands of job seekers who have successfully landed their dream jobs with our AI-powered tools.</p>
            </div>

         <Link to="/signup">
         <button className="btn btn-primary rounded-[10px] bg-[#4F39F6] border-[#4F39F6] hover:bg-[#3728AC] text-white md:text-[20px] leading-[100%] tracking-[0%] px-[15px] w-[80%] mx-auto py-[12px]">
            Get Started for Free
          </button>
         </Link> 
          </div>
        </section>
      </main>
    </>
  );
};

export default QuickActions;