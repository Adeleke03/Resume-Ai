import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import JobAnalyzerNav from "../layouts/JobAnalyzerNav";
import JobAnalyzerContent from "../features/JobAnalyzerContent";

const JobAnalyzer = () => {
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
    < >
      <JobAnalyzerNav />
      <JobAnalyzerContent />
    </>
  );
};

export default JobAnalyzer;
