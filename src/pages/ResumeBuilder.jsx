import React from 'react'
import ResumeBuilderNav from "../layouts/ResumeBuilderNav.jsx";
import ResumeBuilderContent from "../features/ResumeBuilderContent.jsx"

const ResumeBuilder = () => {
  return (
    <>
    <header>
    <ResumeBuilderNav/>
    </header>
    <main className='pt-[105px] lg:pt-[120px] bg-[#F5F5F5]  w-full'>
      <div className='h-screen'>

    <ResumeBuilderContent/>
      </div>
      
    </main>
    </>
  )
}

export default ResumeBuilder