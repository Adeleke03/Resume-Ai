import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import JobAnalyzerNav from "../layouts/JobAnalyzerNav";
import JobAnalyzerContent from "../features/JobAnalyzerContent";

const JobAnalyzer = () => {
  return (
    <>
      <header className=" ">
        <JobAnalyzerNav />
      </header>
      <main  className="pt-[105px] lg:pt-[120px] bg-[#F5F5F5] min-h-screen">
        <JobAnalyzerContent />
      </main>
    </>
  );
};

export default JobAnalyzer;
