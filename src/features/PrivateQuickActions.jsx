import React from "react";
import { HiOutlineEnvelope, HiOutlineDocumentText } from "react-icons/hi2";
import { IoFlashOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BsFolder2Open } from "react-icons/bs";

const PrivateQuickActions = () => {
  const quickActionsInfo = [
    {
      id: "1",
      icon: (
        <HiOutlineDocumentText
          size={60}
          className="text-2xl bg-[#EDEBFE]  rounded-[10px] py-[14px] px-[15px]  text-[#4F39F6]"
        />
      ),
      title: "Create Resume",
      text: "Build a professional resume with AI assistance",
      path: "/resumebuilder",
    },
    {
      id: "2",
      icon: (
        <CiSearch
          size={60}
          className="text-2xl text-[#9810FA] bg-[#F8EDFF]  rounded-[10px] py-[14px] px-[15px]"
        />
      ),
      title: "Job Analyzer",
      text: "Analyzer job description and match your skills",
      path: "/jobanalyzer",
    },
    {
      id: "3",
      icon: (
        <HiOutlineEnvelope
          size={60}
          className="text-2xl bg-[#EFF6FF]  rounded-[10px] py-[14px] px-[15px] text-black"
        />
      ),
      title: "Cover Letter Generator",
      text: "Create tailored cover letters instantly",
      path: "/coverlettergenerator",
    },

    {
      id: "4",
      icon: (
        <BsFolder2Open
          size={60}
          className="text-2xl text-[#00B30C]  bg-[#F0FDF4]  rounded-[10px] py-[14px] px-[15px]"
        />
      ),
      title: "Saved Applications",
      text: "View and manage your saved applications",
      path: "/profile",
    },
  ];
  return (
    <>
      <article>
        <header className="py-10">
          <h2 className="text-[20px] font-medium text-[#4C4C4C]">
            Quick Actions
          </h2>
        </header>
        {/* Quick Actions Card */}
        <section className="grid py-2 lg:grid-cols-4 md:grid-cols-2 gap-[20px] ">
          {quickActionsInfo.map((quickaction, id) => (
            <Link to={quickaction.path}>
              <div
                key={id}
                className="card px-[20px]   border-[0.5px] border-[#9D9B9B]  bg-white card-md shadow-sm"
              >
                <div className="card-body">
                  <div className="">{quickaction.icon}</div>
                  <h2 className="card-title text-[18px] text-[#4C4C4C] font-medium leading-[100%] tracking-[0%] py-5">
                    {quickaction.title}
                  </h2>
                  <p className="text-[16px] text-[#7A7A7A] font-[400] leading-[100%] tracking-[0%]">
                    {quickaction.text}
                  </p>
                  <div className="justify-start card-actions">
                    <button className="flex pt-3  text-[#4F39F6] font-[500] text-[16px] leading-[100%] tracking-[0%] border-none ">
                      Get started <LiaLongArrowAltRightSolid />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </article>
    </>
  );
};

export default PrivateQuickActions;
