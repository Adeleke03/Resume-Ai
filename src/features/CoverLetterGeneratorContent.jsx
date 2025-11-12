import React, { useState } from "react";
import { FiCopy, FiDownload } from "react-icons/fi";
import { HiOutlineEnvelope} from "react-icons/hi2";
import Logo2 from "../assets/si_ai-line (1).png";
import Logo from "../assets/si_ai-line.png";
import { Toaster, toast } from "sonner";
import MyButton from "../components/MyButton";
import Logo3 from "../assets/Vector.png"


const CoverLetterGeneratorContent = () => {
  const [coverLetterData, setCoverLetterData] = useState({
    jobTitle: "",
    companyName: "",
    tone: "Professional",
    additionalInfo: "",
  });

  const [letter, setLetter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Handle field input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoverLetterData((prev) => ({ ...prev, [name]: value }));
  };

  // Simulate AI letter generation
  const handleLetter = () => {
    const { jobTitle, companyName, tone, additionalInfo } = coverLetterData;

    if (!jobTitle.trim() || !companyName.trim()) {
      toast.error("Please fill in both Job Title and Company Name.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const generatedLetter = `
Hi [Hiring Manager’s Name],

I’m excited to apply for the ${jobTitle} role at ${companyName}. I’ve always been drawn to creating digital experiences that feel intuitive, useful, and human — not just visually appealing.

My background in ${tone.toLowerCase()} communication and product thinking allows me to bridge design, functionality, and strategy in a way that helps users achieve more with less friction.

${additionalInfo ? `Additional Info: ${additionalInfo}\n\n` : ""}
I’d love the opportunity to bring my creativity, design systems mindset, and problem-solving approach to the team at ${companyName}.

Thank you for considering my application.

Warm regards,  
Ayo Sackey  
[Your Email] | [Your Portfolio Link] | [Your LinkedIn]
      `;

      setLetter(generatedLetter);
      setLoading(false);
    }, 1500);
  };

  // Copy letter text
  const handleCopy = () => {
    navigator.clipboard.writeText(letter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Download letter as text file
  const handleDownload = () => {
    const blob = new Blob([letter], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "cover-letter.txt";
    link.click();
  };

  return (
    <section className="wrapper md:py-10 py-5">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left Form Card */}
        <div className="bg-white rounded-[15px] flex flex-col md:gap-[20px] gap-[15px] shadow-sm p-6 border-[0.6px] border-[#B2B2B2] h-fit">
          <h2 className="text-[24px] font-[500] text-[#353535] mb-2">
            Generate Your Cover Letter
          </h2>

          {/* Job Title */}
          <div className="flex flex-col md:gap-[10px]">
            <label htmlFor="jobTitle" className="block text-[#4C4C4C]  text-[20px] font-medium mb-2">
              Job Title
            </label>
            <input
            id="jobTitle"
              type="text"
              name="jobTitle"
              value={coverLetterData.jobTitle}
              onChange={handleChange}
              placeholder="e.g. Senior Frontend Developer"
              className="w-full bg-[#ECECF0] p-3 rounded-[10px]  animate-instant outline-none"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col md:gap-[10px]">
            <label htmlFor="companyName" className="block text-[#4C4C4C]  text-[20px] font-medium mb-2">
              Company Name
            </label>
            <input
            id="companyName"
              type="text"
              name="companyName"
              value={coverLetterData.companyName}
              onChange={handleChange}
              placeholder="e.g. Acme Corporation"
              className="w-full bg-[#ECECF0] p-3 rounded-[10px]  animate-instant outline-none"
            />
          </div>

          {/* Tone Dropdown */}
          <div className="flex flex-col md:gap-[10px]">
            <label htmlFor="tone" className="block text-[#4C4C4C]  text-[20px] font-medium mb-2">Tone</label>
            <select
            id="tone"
              name="tone"
              value={coverLetterData.tone}
              onChange={handleChange}
              className="w-full bg-[#ECECF0] py-3 rounded-[10px] px-3 animate-instant outline-none"
            >
              <option className="bg-white text-[#1F1F1F]">Professional</option>
              <option className="bg-white text-[#1F1F1F]">Friendly</option>
              <option className="bg-white text-[#1F1F1F]">Confident</option>
              <option className="bg-white text-[#1F1F1F]">Formal</option>
              <option className="bg-white text-[#1F1F1F]">Casual</option>
            </select>
            <p className="text-sm text-[#7A7A7A] font-[400]">
              Choose the tone that best matches the company culture
            </p>
          </div>

          {/* Additional Info */}
          <div className="flex flex-col md:gap-[10px]">
            <label htmlFor="additionalInfo" className="block text-[#4C4C4C]  text-[20px] font-medium mb-2">
              Additional Information (Optional)
            </label>
            <textarea
            id="additionalInfo"
              name="additionalInfo"
              value={coverLetterData.additionalInfo}
              onChange={handleChange}
              placeholder="Any specific achievements, skills, or reasons for applying..."
              className="w-full bg-[#ECECF0] p-3 rounded-[10px]  animate-instant outline-none"
              
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleLetter}
            disabled={loading}
            className={`w-full text-white font-medium py-2 rounded-md transition flex items-center justify-center gap-2 ${
              loading
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-[#4F39F6] hover:bg-indigo-700"
            }`}
          >
            {loading ? (
                <>
                  <img src={Logo2} alt="AI Logo" className="w-5 h-5 animate-spin" />
                 Generate Cover Letter
                </>
              ) : (
                <>
                  <img src={Logo2} alt="AI Logo" className="w-5 h-5" />
                 Generate Cover Letter
                </>
              )}
          </button>
        </div>

        {/* Right Card: Preview */}
        <div className="bg-white rounded-[15px] shadow-sm p-6 border border-gray-200 h-fit">

          {/* Header row: title + buttons */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[24px] font-[700] text-black">
              Your Cover Letter
            </h3>

            {/* Show buttons only if letter exists */}
            {letter && (
              <div className="flex flex-col md:flex-row items-center gap-[6px]">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-[9px] px-[9px] border-[#B2B2B2] py-[7px] border-[0.36px] border-black text-black rounded-[6px] bg-white hover:bg-[#ECECF0] transition-all text-sm"
                >
                  <FiCopy className="" />
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-[9px] px-[9px] border-[#B2B2B2] py-[7px] border-[0.36px] border-black text-black rounded-[6px] bg-white hover:bg-[#ECECF0] transition-all text-sm"
                >
                  <FiDownload />
                  Download
                </button>
              </div>
            )}
          </div>

          {/* Letter Display Area */}
          {!letter ? (
            <div className="flex flex-col items-center rounded-[15px] py-9 border-dashed border-[1px] border-[#B2B2B2] bg-[#F8FAFC] justify-center h-full text-center text-[#7A7A7A]">
              <div className="bg-[#EEF2FF]  w-16 h-16 rounded-full flex items-center justify-center my-4">
                <HiOutlineEnvelope size={40} className="text-xl bg-[#EFF6FF]  rounded-[10px] text-[#4F39F6]"/>
              </div>
              <h3 className="text-[20px] font-[500] text-[#353535] mb-2">
                No Cover Letter Yet
              </h3>
              <p className="max-w-xs text-sm font-[400]">
                Fill in the job details on the left and click “Generate Cover
                Letter” to create a personalized cover letter with AI.
              </p>
            </div>
          ) : (
        <div className="flex flex-col gap-[25px] py-3">

            <div className="bg-[#F8FAFC] p-5 rounded-md whitespace-pre-wrap text-[16px] text-[#7A7A7A] border border-dashed border-[#E5E7EB]">
              {letter}
            </div>
            {/* div for buttons  */}
            <div className="flex flex-col font-bold text-[18px] gap sm:flex-row gap-[20px]">

            <MyButton className="w-full border border-[#B2B2B2] rounded-[10px] py-2  text-[18px] font-bold flex items-center cursor-pointer justify-center gap-2 hover:bg-gray-50">
                 <img src={Logo3} alt="" /> Regenerate
                </MyButton>
            <MyButton className=" w-full border bg-black text-white py-2 rounded-[10px]">
            Save to Profile
            </MyButton>
            </div>
        </div>
            
          )}
        </div>
      </div>

      {/* Pro Tips */}
      <div className="pl-5 pr-2 mx-auto mt-4 gap-[10px] mb-11 w-full py-5 bg-[#EDEBFE] rounded-[15px]">
        {/* div for header and logo */}
        <div className="flex gap-[10px] pb-4 items-center">
            <img className="w-10" src={Logo} alt="logo" /> <span className="text-[24px] font-[500]  "> Pro Tips</span>
        </div>
        <ul className="list-disc pl-5 font-[500] text-[#4C4C4C] text-[18px] ">
            <li>Research the company culture to choose the right tone</li>
            <li>Mention specific achievements that relate to the job</li>
            <li>Keep it concise - ideally one page or less</li>
            <li>Customize each cover letter for the specific position</li>
        </ul>

      </div>
      <Toaster position="top-right" richColors />
    </section>
  );
};

export default CoverLetterGeneratorContent;
