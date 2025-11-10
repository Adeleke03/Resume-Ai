import React from "react";
import JobAnalyzerNav from "../layouts/JobAnalyzerNav";
import JobAnalyzerContent from "../features/JobAnalyzerContent";

const JobAnalyzer = () => {
  return (
    <>
      <header>
        <JobAnalyzerNav />
      </header>

      {/* ✅ full-width background, wrapper applied inside content */}
      <main className="pt-[105px] lg:pt-[120px] bg-[#F5F5F5] h-fit w-full">
        <div className="wrapper">
          <JobAnalyzerContent />
        </div>
      </main>
    </>
  );
};

export default JobAnalyzer;
