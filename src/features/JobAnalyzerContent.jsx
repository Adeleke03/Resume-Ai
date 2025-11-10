import React, { useState } from 'react'
import Logo2 from "../assets/si_ai-line (1).png"
import Logo from "../assets/si_ai-line.png"
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import Logo3 from "../assets/Vector.png"
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import MyButton from "../components/MyButton.jsx"



const JobAnalyzerContent = () => {
     const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleAnalyze = () => {
    if (!jobDescription.trim()) return;
    setLoading(true);

    // Simulate AI analysis delay
    setTimeout(() => {
      setAnalysis({
        matchScore: 85,
        matchMessage:
          "Based on your profile, you’re a strong match for this position!",
        requiredSkills: [
          "React",
          "TypeScript",
          "Node.js",
          "Git",
          "Agile/Scrum",
          "Communication",
          "Problem Solving",
          "Team Collaboration",
        ],
        keywords: [
          "Frontend Development",
          "User Interface",
          "CI/CD",
          "Responsive design",
          "Testing",
          "Code Review",
        ],
        requirements: [
          "3+ years of experience in frontend development",
          "Strong proficiency in React and modern JavaScript",
          "Experience with TypeScript and state management",
          "Understanding of RESTful APIs and backend integration",
          "Excellent problem-solving and communication skills",
        ],
      });
      setLoading(false);
    }, 1500);
  };
  return (
    <>
    <section className='wrapper bg-[#F5F5F5]  '>

     {/* Layout */}
      <div className="w-full  lg:max-w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 h-fit">
          <h2 className="text-[20px] font-[500] text-[#353535] leading-[100%] tracking-[0%] mb-2">
            Paste Job Description
          </h2>
          <p className="lg:text-[20px] text-[#7A7A7A]  mb-4">
            Copy and paste the job description you want to analyze. Our AI will
            extract key skills, requirements and keywords.
          </p>

          <textarea id='analyzer-input'
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder={`Paste the job description here...\n\nExample:\nWe are looking for a creative and detail-oriented Product Designer...\nRequirements:\n3+ years of React experience\nStrong TypeScript skills\nExperience with modern frontend tooling...`}
            className="w-full h-45 p-3  bg-[#ECECF0] text-sm border border-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <MyButton
  onClick={handleAnalyze}
  disabled={loading || !jobDescription.trim()}
  className={`mt-4 w-full font-medium py-2 rounded-md transition flex items-center justify-center gap-2 ${
    loading || !jobDescription.trim()
      ? "bg-indigo-300 cursor-not-allowed text-white"
      : "bg-[#4F39F6] hover:bg-indigo-700 cursor-pointer text-white"
  }`}
>
  {loading ? (
    <>
      <img src={Logo2} alt="AI Logo" className="w-5 h-5 animate-spin" />
      Analyzing with AI...
    </>
  ) : (
    <>
      <img src={Logo2} alt="AI Logo" className="w-5 h-5" />
      Analyze with AI
    </>
  )}
</MyButton>

        </div>

        {/* Right Card */}
        <div className="space-y-6">
          {!analysis ? (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex flex-col justify-center items-center text-center">
              <div className="bg-indigo-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 text-2xl"><img src={Logo} alt="" /></span>
              </div>
              <h2 className="text-[20px]  font-[500] text-[#353535] mb-2">
                AI-Powered Analysis
              </h2>
              <p className="text-[20px] font-[500] text-[#7A7A7A]">
                Paste a job description on the left and click ‘Analyze with AI’
                to get detailed insights about required skills, keywords, and
                your match score.
              </p>
            </div>
          ) : (
              <>
              {/* Match Score */}
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[20px] text-[#1F1F1F] flex gap-[10px] font-medium text-gray-800">
                   <HiMiniArrowTrendingUp className='text-[#28A745]' size={25}/> Match Score
                  </h3>
                  <span className="text-[36px] font-medium text-green-600">
                    {analysis.matchScore}%
                  </span>
                </div>
                <p className="text-sm lg:text-[20px] text-[#7A7A7A]">{analysis.matchMessage}</p>
              </div>

              {/* Required Skills */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-[20px] font-medium text-[#1F1F1F] mb-3">
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {analysis.requiredSkills.map((skill, index) => (
                      <span
                      key={index}
                      className="bg-[#EDEBFE] text-[#4F39F6] px-3 py-1 rounded-[15px] text-sm"
                      >
                      {skill}
                    </span>
                  ))}
                </div>
                <MyButton className="w-full border border-[#B2B2B2] rounded-md py-2 text-[18px] font-bold flex items-center cursor-pointer justify-center gap-2 hover:bg-gray-50">
                 <img src={Logo3} alt="" /> Add to Resume
                </MyButton>
              </div>

              {/* Important Keywords */}
              <div className="bg-white rounded-lg shadow-sm border  border-gray-100 p-6">
                <h3 className="text-[20px] font-medium text-[#1F1F1F] mb-3">
                  Important Keywords
                </h3>
                <div className="flex gap-[10px] flex-wrap gap-2 mb-2">
                  {analysis.keywords.map((keyword, index) => (
                      <span
                      key={index}
                      className="border-[#B2B2B2] border-[0.6px] text-[#1F1F1F] px-3 py-1 rounded-[15px] text-[16px]"
                      >
                      {keyword}
                    </span>
                  ))}
                </div>
                <p className="text-[16px] font-[500] text-[#7A7A7A]">
                  Use these keywords in your resume and cover letter to improve
                  ATS compatibility.
                </p>
              </div>

              {/* Key Requirements */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-[#1F1F1F] font-medium text-[20px] mb-3">
                  Key Requirements
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {analysis.requirements.map((req, index) => (
                      <li key={index} className="flex items-start font-medium text-[18px] gap-2 text-[#4C4C4C]">
                      <span className="text-indigo-500 text-lg"><AiOutlineExclamationCircle/></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col font-bold text-[18px] gap sm:flex-row gap-[20px]">
                
                <MyButton className="flex-1 bg-black border-[#B2B2B2] text-white border py-2 rounded-md hover:bg-gray-800 cursor-pointer transition">
                  Update Resume
                </MyButton>
                <Link to='/coverlettergenerator' className='flex-1 text-center border-[0.6px] border-[#B2B2B2] text-gray-800 py-2 rounded-[10px] hover:bg-gray-50 animate-instant cursor-pointer transition'>
                <MyButton >
                  Create Cover Letter
                </MyButton>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
          </section>
    </>
  )
}

export default JobAnalyzerContent