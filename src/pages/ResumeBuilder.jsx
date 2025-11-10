import React from 'react'

const ResumeBuilder = () => {
  return (
    <div>ResumeBuilder</div>
  )
}

export default ResumeBuilder


// import React, { useState } from 'react';

// const ResumeBuilder = () => {
//   const [activeTab, setActiveTab] = useState('personal');
//   const [resumeData, setResumeData] = useState({
//     personal: {
//       fullName: 'Silence Tailored',
//       email: 'tailored@example.com',
//       phone: '524-5955654322',
//       location: 'Open State, NGENIA',
//       summary: 'Professional summary with all evidence of expertise and achievements in the field.'
//     },
//     experience: [
//       {
//         id: 1,
//         jobTitle: 'Senior Developer',
//         company: 'Tech Solutions Inc',
//         period: '2020 - Present',
//         description: 'Description of your professional background and achievements in this role.'
//       }
//     ],
//     skills: ['JavaScript', 'React', 'Node.js', 'TypeScript'],
//     education: [
//       {
//         id: 1,
//         degree: 'Bachelor of Science in Computer Science',
//         institution: 'State University',
//         year: '2016 - 2020'
//       }
//     ]
//   });

//   const handleInputChange = (section, field, value) => {
//     setResumeData(prev => ({
//       ...prev,
//       [section]: {
//         ...prev[section],
//         [field]: value
//       }
//     }));
//   };

//   const handleExperienceChange = (index, field, value) => {
//     const updatedExperience = [...resumeData.experience];
//     updatedExperience[index] = {
//       ...updatedExperience[index],
//       [field]: value
//     };
//     setResumeData(prev => ({
//       ...prev,
//       experience: updatedExperience
//     }));
//   };

//   const addExperience = () => {
//     const newExperience = {
//       id: Date.now(),
//       jobTitle: 'New Job Title',
//       company: 'Company Name',
//       period: '2023 - Present',
//       description: 'Description of your role and achievements.'
//     };
//     setResumeData(prev => ({
//       ...prev,
//       experience: [...prev.experience, newExperience]
//     }));
//   };

//   const PreviewResume = () => (
//     <div className="preview-container p-6 bg-white border rounded-lg shadow-lg">
//       <div className="header mb-6">
//         <h1 className="text-3xl font-bold">{resumeData.personal.fullName}</h1>
//         <div className="contact-info flex flex-wrap gap-4 text-gray-600 mt-2">
//           <span>{resumeData.personal.email}</span>
//           <span>{resumeData.personal.phone}</span>
//           <span>{resumeData.personal.location}</span>
//         </div>
//       </div>

//       <div className="section mb-6">
//         <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-3">Professional Summary</h2>
//         <p className="text-gray-700">{resumeData.personal.summary}</p>
//       </div>

//       <div className="section mb-6">
//         <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-3">Experience</h2>
//         {resumeData.experience.map((exp, index) => (
//           <div key={exp.id} className="mb-4">
//             <div className="flex justify-between">
//               <h3 className="font-bold text-lg">{exp.jobTitle}</h3>
//               <span className="text-gray-600">{exp.period}</span>
//             </div>
//             <p className="text-gray-700 font-medium">{exp.company}</p>
//             <p className="text-gray-600 mt-1">{exp.description}</p>
//           </div>
//         ))}
//       </div>

//       <div className="section mb-6">
//         <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-3">Skills</h2>
//         <div className="flex flex-wrap gap-2">
//           {resumeData.skills.map((skill, index) => (
//             <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="section">
//         <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-3">Education</h2>
//         {resumeData.education.map((edu, index) => (
//           <div key={edu.id} className="mb-4">
//             <div className="flex justify-between">
//               <h3 className="font-bold text-lg">{edu.degree}</h3>
//               <span className="text-gray-600">{edu.year}</span>
//             </div>
//             <p className="text-gray-700">{edu.institution}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="resume-builder min-h-screen bg-gray-50 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <header className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Resume Builder</h1>
//           <div className="flex gap-4">
//             <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//               Preview
//             </button>
//             <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//               Save
//             </button>
//           </div>
//         </header>

//         <div className="flex gap-6">
//           {/* Left Sidebar - Navigation Tabs */}
//           <div className="w-64 bg-white rounded-lg shadow p-4">
//             <nav className="space-y-2">
//               {[
//                 { id: 'personal', label: 'Personal' },
//                 { id: 'experience', label: 'Experience' },
//                 { id: 'skills', label: 'Skills' },
//                 { id: 'education', label: 'Education' }
//               ].map(tab => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
//                     activeTab === tab.id 
//                       ? 'bg-blue-100 text-blue-700 font-medium' 
//                       : 'hover:bg-gray-100'
//                   }`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* Main Content Area */}
//           <div className="flex-1">
//             {activeTab === 'personal' && (
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       value={resumeData.personal.fullName}
//                       onChange={(e) => handleInputChange('personal', 'fullName', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         value={resumeData.personal.email}
//                         onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Phone
//                       </label>
//                       <input
//                         type="text"
//                         value={resumeData.personal.phone}
//                         onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Location
//                     </label>
//                     <input
//                       type="text"
//                       value={resumeData.personal.location}
//                       onChange={(e) => handleInputChange('personal', 'location', e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Professional Summary
//                     </label>
//                     <textarea
//                       value={resumeData.personal.summary}
//                       onChange={(e) => handleInputChange('personal', 'summary', e.target.value)}
//                       rows="4"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'experience' && (
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h2 className="text-xl font-semibold mb-4">Experience</h2>
//                 <div className="space-y-6">
//                   {resumeData.experience.map((exp, index) => (
//                     <div key={exp.id} className="border-b pb-6 last:border-b-0">
//                       <h3 className="text-lg font-medium mb-4">Experience {index + 1}</h3>
//                       <div className="space-y-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Job Title
//                           </label>
//                           <input
//                             type="text"
//                             value={exp.jobTitle}
//                             onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           />
//                         </div>
//                         <div className="grid grid-cols-2 gap-4">
//                           <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                               Company
//                             </label>
//                             <input
//                               type="text"
//                               value={exp.company}
//                               onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
//                               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                               Period
//                             </label>
//                             <input
//                               type="text"
//                               value={exp.period}
//                               onChange={(e) => handleExperienceChange(index, 'period', e.target.value)}
//                               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                           </div>
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Description
//                           </label>
//                           <textarea
//                             value={exp.description}
//                             onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
//                             rows="3"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
                  
//                   <button
//                     onClick={addExperience}
//                     className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
//                   >
//                     + Add Experience
//                   </button>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'skills' && (
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h2 className="text-xl font-semibold mb-4">Skills</h2>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Add Skills (comma separated)
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="JavaScript, React, Node.js, TypeScript"
//                       defaultValue={resumeData.skills.join(', ')}
//                       onBlur={(e) => {
//                         const skills = e.target.value.split(',').map(skill => skill.trim()).filter(skill => skill);
//                         setResumeData(prev => ({ ...prev, skills }));
//                       }}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {resumeData.skills.map((skill, index) => (
//                       <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'education' && (
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h2 className="text-xl font-semibold mb-4">Education</h2>
//                 <div className="space-y-4">
//                   {resumeData.education.map((edu, index) => (
//                     <div key={edu.id} className="border-b pb-4 last:border-b-0">
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Degree
//                           </label>
//                           <input
//                             type="text"
//                             value={edu.degree}
//                             onChange={(e) => {
//                               const updatedEducation = [...resumeData.education];
//                               updatedEducation[index] = { ...edu, degree: e.target.value };
//                               setResumeData(prev => ({ ...prev, education: updatedEducation }));
//                             }}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Institution
//                           </label>
//                           <input
//                             type="text"
//                             value={edu.institution}
//                             onChange={(e) => {
//                               const updatedEducation = [...resumeData.education];
//                               updatedEducation[index] = { ...edu, institution: e.target.value };
//                               setResumeData(prev => ({ ...prev, education: updatedEducation }));
//                             }}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           />
//                         </div>
//                       </div>
//                       <div className="mt-4">
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Year
//                         </label>
//                         <input
//                           type="text"
//                           value={edu.year}
//                           onChange={(e) => {
//                             const updatedEducation = [...resumeData.education];
//                             updatedEducation[index] = { ...edu, year: e.target.value };
//                             setResumeData(prev => ({ ...prev, education: updatedEducation }));
//                           }}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Sidebar - Live Preview */}
//           <div className="w-96">
//             <div className="bg-white rounded-lg shadow p-4 sticky top-4">
//               <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
//               <div className="preview-content max-h-[80vh] overflow-y-auto">
//                 <PreviewResume />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;