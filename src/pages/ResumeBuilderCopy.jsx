import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import MyButton from "../components/MyButton";
import Logo2 from "../assets/si_ai-line (1).png";

const ResumeBuilderCopy = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    experience: "",
    skills: "",
    education: "",
  });

  const [resumePreview, setResumePreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGeneratePreview = () => {
  const { fullName, email, phone, location, summary, experience, skills, education } = resumeData;

  // Build each section only if it has content
  const sections = [];

  if (fullName || email || phone || location) {
    sections.push(`${fullName || ""}\n${[email, phone, location].filter(Boolean).join(" | ")}`);
  }

  if (summary) {
    sections.push(`\n🔹 PROFESSIONAL SUMMARY\n${summary.trim()}`);
  }

  if (experience) {
    sections.push(`\n💼 EXPERIENCE\n${experience.trim()}`);
  }

  if (skills) {
    // Format comma-separated skills into a clean bullet list
    const formattedSkills = skills
      .split(",")
      .map((skill) => `• ${skill.trim()}`)
      .join("\n");
    sections.push(`\n🧠 SKILLS\n${formattedSkills}`);
  }

  if (education) {
    sections.push(`\n🎓 EDUCATION\n${education.trim()}`);
  }

  // Join all sections together with double line breaks
  const preview = sections.join("\n\n");

  setResumePreview(preview || "No information added yet. Please fill out the fields on the left.");
};


  return (
    <section className="wrapper py-6 md:py-10">
      <div className="grid md:grid-cols-[1fr_1fr] gap-6 items-start">
        {/* LEFT SECTION */}
        <div className="bg-white rounded-[15px] shadow-sm border border-gray-200 p-6 flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[20px] md:text-[22px] font-medium text-[#353535]">
              ← Resume Builder
            </h2>

            <div className="flex items-center gap-2">
              <MyButton className="border border-[#B2B2B2] rounded-[10px] px-4 py-2 text-[14px] font-medium hover:bg-gray-50">
                Preview
              </MyButton>
              <MyButton className="bg-[#4F39F6] text-white rounded-[10px] px-4 py-2 text-[14px] font-medium hover:bg-indigo-700 flex items-center gap-2">
                <FiDownload />
                Save
              </MyButton>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
            {["personal", "experience", "skills", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize px-4 py-2 rounded-t-[10px] font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#EDEBFE] text-[#4F39F6]"
                    : "text-[#4C4C4C] hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="mt-2 flex flex-col gap-4">
            {activeTab === "personal" && (
              <div className="flex flex-col gap-4">
                <Input label="Full Name" name="fullName" value={resumeData.fullName} onChange={handleChange} />
                <Input label="Email" name="email" value={resumeData.email} onChange={handleChange} />
                <Input label="Phone" name="phone" value={resumeData.phone} onChange={handleChange} />
                <Input label="Location" name="location" value={resumeData.location} onChange={handleChange} />
                
                {/* Professional Summary */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[#4C4C4C] text-[18px] font-medium">Professional Summary</label>
                    <button className="text-[#4F39F6] text-[14px] font-medium hover:underline">
                      AI Enhance
                    </button>
                  </div>
                  <textarea
                    name="summary"
                    value={resumeData.summary}
                    onChange={handleChange}
                    placeholder="Brief summary of your background and career goals..."
                    className="w-full bg-[#ECECF0] p-3 rounded-[10px] outline-none text-[#353535]"
                    rows="4"
                  />
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="flex flex-col gap-3">
                <Textarea
                  label="Experience"
                  name="experience"
                  value={resumeData.experience}
                  onChange={handleChange}
                  placeholder="List your previous roles, responsibilities, and achievements..."
                />
                <MyButton className="w-full border border-[#B2B2B2] rounded-[10px] py-2 hover:bg-gray-50">
                  + Add Experience
                </MyButton>
              </div>
            )}

            {activeTab === "skills" && (
              <Textarea
                label="Skills"
                name="skills"
                value={resumeData.skills}
                onChange={handleChange}
                placeholder="List your skills separated by commas..."
              />
            )}

            {activeTab === "education" && (
              <Textarea
                label="Education"
                name="education"
                value={resumeData.education}
                onChange={handleChange}
                placeholder="Enter your education background..."
              />
            )}

            <MyButton
              onClick={handleGeneratePreview}
              className="w-full bg-[#4F39F6] text-white rounded-[10px] py-2 mt-3 hover:bg-indigo-700 flex items-center justify-center gap-2"
            >
              <img src={Logo2} alt="AI" className="w-5 h-5" />
              Generate Resume
            </MyButton>
          </div>
        </div>

        {/* RIGHT SECTION - LIVE PREVIEW */}
        <div className="bg-white rounded-[15px] shadow-sm border border-gray-200 p-6">
          <h3 className="text-[22px] font-[700] text-black mb-4">Live Preview</h3>

          {!resumePreview ? (
            <div className="flex flex-col items-center justify-center text-center py-10 border-dashed border border-[#B2B2B2] rounded-[15px] bg-[#F8FAFC] text-[#7A7A7A]">
              <div className="bg-[#EEF2FF] w-16 h-16 rounded-full flex items-center justify-center my-4">
                <HiOutlineDocumentText size={40} className="text-[#4F39F6]" />
              </div>
              <h3 className="text-[20px] font-[500] text-[#353535] mb-2">No Resume Preview Yet</h3>
              <p className="max-w-xs text-sm">Fill in your details and click “Generate Resume” to view it here.</p>
            </div>
          ) : (
            <div className="bg-[#F8FAFC] p-5 rounded-md whitespace-pre-wrap text-[16px] text-[#353535] border border-dashed border-[#E5E7EB]">
              {resumePreview}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/* Reusable Input + Textarea Components */
const Input = ({ label, name, value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[#4C4C4C] text-[18px] font-medium">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-[#ECECF0] p-3 rounded-[10px] outline-none text-[#353535]"
    />
  </div>
);

const Textarea = ({ label, name, value, onChange, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[#4C4C4C] text-[18px] font-medium">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows="4"
      className="w-full bg-[#ECECF0] p-3 rounded-[10px] outline-none text-[#353535]"
    />
  </div>
);

export default ResumeBuilderCopy;
