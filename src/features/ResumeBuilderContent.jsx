import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import {  HiOutlineDocumentText } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";

import MyButton from "../components/MyButton";
import Logo3 from "../assets/Vector.png";
import Textarea from "../components/Textarea";
import Input from "../components/Input";
import { Toaster, toast } from "sonner";
import Logo from "../assets/si_ai-line.png";

const ResumeBuilderContent = () => {
const [activeTab, setActiveTab] = useState("personal");

const [resumeData, setResumeData] = useState({
  fullName: "",
  email: "",
  phone: "",
  location: "",
  summary: "",
  jobTitle: "",
  company: "",
  duration: "",
  overView: "",
  experience: "",
  skills: "",
  degree: "",
  school: "",
  year: "",
  education: "",
});

const [resumePreview, setResumePreview] = useState("");

const handleChange = (e) => {
  const { name, value } = e.target;
  setResumeData((prev) => ({ ...prev, [name]: value }));
};

const handleGeneratePreview = () => {
  const {
    fullName,
    email,
    phone,
    location,
    summary,
    jobTitle,
    company,
    duration,
    overView,
    experience,
    skills,
    degree,
    school,
    year,
    education,
  } = resumeData;

  const sections = [];

  // PERSONAL INFO
  if (fullName || email || phone || location) {
    const contactInfo = [email, phone, location].filter(Boolean).join(" | ");
    const personalSection = `${fullName || ""}\n${contactInfo}`;
    sections.push(personalSection);
  }

  // SUMMARY
  if (summary) sections.push(`\n🔹 PROFESSIONAL SUMMARY\n${summary.trim()}`);

  // EXPERIENCE
  if (jobTitle || company || duration || overView || experience) {
    const companyLine = [company, duration].filter(Boolean).join(" | ");
    const experienceLines = [
      jobTitle || "",
      companyLine,
      overView,
      experience?.trim() || "",
    ]
      .filter(Boolean)
      .join("\n");

    sections.push(`\n💼 EXPERIENCE\n${experienceLines}`);
  }

  // SKILLS
  if (skills) {
    const skillList = skills
      .split(/[,;\s]+/)
      .map((s) => s.trim())
      .filter(Boolean);
    const formattedSkills = skillList.map((s) => `• ${s}`).join("\n");
    sections.push(`\n🧠 SKILLS\n${formattedSkills}`);
  }

  // EDUCATION
  if (degree || school || year || education) {
    const educationLine = [degree, school, year].filter(Boolean).join(" | ");
    sections.push(`\n🎓 EDUCATION\n${educationLine}`);
  }

  // ✅ If no data, show toast instead of placeholder text
  if (sections.length === 0) {
    toast.error("Please fill in at least one field before generating preview.");
    setResumePreview("");
    return;
  }

  const preview = sections.join("\n\n");
  setResumePreview(preview);
  toast.success("Resume preview generated successfully!");
};


 // Download Resume as text file
const handleDownload = () => {
  if (!resumePreview.trim()) {
    toast.error("Please generate your resume preview before downloading.");
    return;
  }

  toast.info("Preparing your resume download...");

  setTimeout(() => {
    const fileName = `${resumeData.fullName || "resume"}.txt`;
    const blob = new Blob([resumePreview], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);

    toast.success("✅ Resume downloaded successfully!");
  }, 800);
};


return (
    <>
    <section className="wrapper md:py-10 py-5">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px] items-start">
        {/* Left Form  Card */}
        <div className="bg-white border-[0.6px] border-[#B2B2B2] rounded-[15px] shadow-sm p-6 gap-[15px] flex flex-col">
          {/* Tabs  */}
         <div className="flex flex-row bg-[#ECECF0] py-2 rounded-[22px] items-center 
  overflow-x-auto scrollbar-hide md:justify-around px-2 space-x-2 ">
  {["personal", "experience", "skills", "education"].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`capitalize flex-shrink-0 px-5 py-[6px] rounded-[44px] font-medium transition-all ${
        activeTab === tab
          ? "bg-white text-black"
          : "text-black hover:bg-white"
      }`}
    >
      {tab}
    </button>
  ))}
</div>
{/* Tab content */}
<div className="flex flex-col gap-4 pt-2">
  {/* Personal Tab Content */}
  {activeTab === "personal" && (
              <div className="flex flex-col gap-4">
                <Input label="Full Name" name="fullName" value={resumeData.fullName} placeholder="Full Name" onChange={handleChange} />
                <Input label="Email" placeholder="Sackey@example.com" name="email" value={resumeData.email} onChange={handleChange} />
                <Input label="Phone" placeholder='+234 9055854282' name="phone" value={resumeData.phone} onChange={handleChange} />
                <Input placeholder='Ogun State, NIGERIA' label="Location" name="location" value={resumeData.location} onChange={handleChange} />
                
                {/* Professional Summary */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[#4C4C4C] text-[18px] font-medium">Professional Summary</label>
                    <button className="text-[#4F39F6] flex items-center text-[14px] font-medium hover:underline"> <img src={Logo} alt="" />
                     <span>AI Enhance</span> 
                    </button>
                  </div>
                  <textarea
                    name="summary"
                    value={resumeData.summary}
                    onChange={handleChange}
                    placeholder="Brief summary of your background and career goals..."
                    className="w-full bg-[#ECECF0] p-3 rounded-[10px] outline-none text-[#353535]"
                    
                  />
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="flex flex-col gap-3  ">
                <section className="bg-[#F8FAFC] border-[0.6px] rounded-[15px] border-[#B2B2B2] ">

                
                <header className="p-2">
                  <h1 className="text-[#4C4C4C] font-medium text-[18px] pb-3">Experience 1</h1>
                </header>
              <div className="flex flex-col gap-[20px] p-2">

                <Input
                  label="Job Title"
                  name="jobTitle"
                  value={resumeData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job Title"
                />
                <div className="lg:flex justify-between ">

                <Input
                  label="Company"
                  name="company"
                  value={resumeData.company}
                  onChange={handleChange}
                  placeholder="Company"
                />
                <Input
                  label="Duration"
                  name="duration"
                  value={resumeData.duration}
                  onChange={handleChange}
                  placeholder="2020 - Present"
                />
                </div>
                <Textarea
                  label="Overview"
                  name="overView"
                  value={resumeData.overView}
                  onChange={handleChange}
                  placeholder="Brief overview of your professional background and key achievements..."
                  />
                  </div>
                  </section>
                <MyButton className="w-full border border-[#B2B2B2] rounded-[10px] py-2 hover:bg-gray-50">
                  + Add Experience
                </MyButton>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="flex flex-col gap-3">

                <Textarea
                  label="Skills"
                  name="skills"
                  value={resumeData.skills}
                  onChange={handleChange}
                  placeholder="List your skills separated by comma, space or semicolon; ..."
                />
                <MyButton className="w-full mx-auto gap-[5px] lg:gap-[15px] h-[52px] justify-center flex items-center border-[0.6px] border-[#B2B2B2] font-bold lg:text-[20px] rounded-[10px] py-2 hover:bg-gray-50"><img src={Logo3} alt="" /><span>Suggest Skills Based on Experience</span></MyButton>
              </div>
              
            )}
            {activeTab === "education" && (
               <div className="flex flex-col gap-3  ">
                <section className="bg-[#F8FAFC] border-[0.6px] rounded-[15px] border-[#B2B2B2] ">

                
                <header className="p-2">
                  <h1 className="text-[#4C4C4C] font-medium text-[18px] pb-3">Education 1</h1>
                </header>
              <div className="flex flex-col gap-[20px] p-2">

                <Input
                  label="Degree"
                  name="degree"
                  value={resumeData.degree}
                  onChange={handleChange}
                  placeholder="Degree (e.g. Bachelor of Science in Computer Science)"
                />
                <div className="lg:flex justify-between ">

                <Input
                  label="School"
                  name="school"
                  value={resumeData.school}
                  onChange={handleChange}
                  placeholder="School/University"
                />
                <Input
                  label="Year"
                  name="year"
                  value={resumeData.year}
                  onChange={handleChange}
                  placeholder="2018 - 2023"
                />
                </div>
                
                  </div>
                  </section>
                <MyButton className="w-full border font-bold border-[#B2B2B2] rounded-[10px] py-[12px] hover:bg-gray-50">
                  + Add Education
                </MyButton>
              </div>
            )}

</div>


        </div>
        {/* Right Live Preview Card */}
        <div className="bg-white border-[0.6px] border-[#B2B2B2] rounded-[15px] shadow-sm p-6 gap-[15px] flex flex-col">
          <header className="flex justify-between  items-center">
            <div className="text-[24px] flex  items-center font-bold gap-[12px]">

            <IoEyeOutline className="text-xl md:text-2xl lg:text-3xl"/> <h1 >Live Preview</h1>
            </div>
            <div className="gap-[10px] flex flex-col lg:flex-row  ">
              <button className="gap-[15px] flex items-center py-[12px] px-[10px] border-[0.6px] border-[#B2B2B2] font-[700] rounded-[10px] " onClick={handleGeneratePreview}><IoEyeOutline/> Preview</button>
              <button
  onClick={handleDownload}
  className={`gap-[10px] flex items-center py-[12px] px-[15px] border-[0.6px] border-[#B2B2B2] font-[700] rounded-[10px] 
    ${!resumePreview.trim() ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-50 cursor-pointer"}`}
>
  <FiDownload /> Save
</button>

              
            </div>
          </header>
          {!resumePreview ? (
            <div className="flex flex-col items-center ">
              <div className="bg-[#EEF2FF] w-16 h-16 rounded-full flex items-center justify-center my-4">
                              <HiOutlineDocumentText size={40} className="text-[#4F39F6]" />
                            </div>
                             <h3 className="text-[20px] font-[500] text-[#353535] mb-2">No Resume Preview Yet</h3>
              <p className="max-w-xs text-sm font-[400]">Fill in your details and click “Preview” to view it here.</p>

            </div>
          ) : (
            <div className="bg-[#F8FAFC] p-5 rounded-md whitespace-pre-wrap text-[16px] text-[#353535] border border-dashed border-[#E5E7EB]">
                {resumePreview}
            </div>
          ) }

        </div>

      </div>
<Toaster position="top-right" richColors />
    </section>

    </>
  )
}

export default ResumeBuilderContent