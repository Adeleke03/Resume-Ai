import React from "react";
import { HiOutlineEnvelope, HiOutlineDocumentText } from "react-icons/hi2";
import Logo from "../assets/si_ai-line.png";
import { Link } from "react-router-dom";

const RecentActivity = () => {
  const recentActivityData = [
    {
      id: "1",
      title: "Senior Frontend Developer Resume",
      info: "Resume",
      time: "3 hours ago",
    },
    {
      id: "2",
      title: "Product Manager Cover Letter",
      info: "Cover Letter",
      time: "1 day ago",
    },
    {
      id: "1",
      title: "UX Design Job Analysis",
      info: "Analysis",
      time: "3 days ago",
    },
  ];
  return (
    <>
      <article className="grid gap-[35px] pt-10">
        <h2 className="text-[20px] text-[#4C4C4C] font-[500] leading-[100%] tracking-[0%]">
          Recent Activity
        </h2>
        {/* Recent Activity section */}
        <section>
          <div className="border-[#B1B1B1] border-[0.5px] rounded-[15px] h-fit  shadow-sm">
            {recentActivityData.map((activity, id) => (
              <div className="card card-side border-[#B1B1B1] border-b-[0.5px]     px-[8px]  bg-base-100">
                <div className="flex flex-row items-center w-full h-fit justify-between">
                  <HiOutlineDocumentText
                    size={60}
                    className="text-2xl bg-[#EDEBFE]  rounded-[10px] py-[14px] px-[15px]  text-[#4F39F6]"
                  />
                  <div className="card-body">
                    <h2 className="card-title font-[500] md:text-[24px] leading-[100%] tracking-[0%] text-[#353535]">
                      {activity.title}
                    </h2>
                    <p className="text-[#7A7A7A] md:text-[19px] font-[500] ">
                      {activity.info}.
                    </p>
                  </div>
                  <div className="card-actions justify-end#">
                    <p className="text-[#7A7A7A] md:text-[19px] font-[500]">
                      {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* footer Hero */}

        <section className="bg-[#EDEBFE] grid gap-[32px] items-center shadow-sm">
          <div className="card card-side w-[90%] mx-auto items-center bg-inherit flex ">
            <figure className="lg:h-[98px] lg:w-[98px]  lg:rounded-[102px] rounded-full bg-white p-3 shadow-lg border-[#B2B2B2] border-[0.6px]">
              <img
                src={Logo}
                alt="Logo"
              />
            </figure>
            <div className="card-body  gap-[20px] lg:w-[939px]">
              <h2 className="card-title lg:text-[24px] text-[#4C4C4C] font-[500]">AI Tip of the Day</h2>
              <p className="lg:text-[18px] text-[#7A7A7A] font-[500]">
                Tailor you resume for each job application. Use the Job Analyzer
                to identify key skills and incorporate them into your resume for
                better results.
              </p>
              <Link>
              <div className="card-actions justify-start">
                <button className="btn text-[20px] font-medium h-[51px] py-[12px] px-[25px] bg-[#FFFFFF] rounded-[15px]">Try Job Analyzer</button>
            </div>
              </Link>
              </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default RecentActivity;
