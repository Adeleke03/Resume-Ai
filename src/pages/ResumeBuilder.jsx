import React from 'react'
import ResumeBuilderNav from "../layouts/ResumeBuilderNav.jsx";
import ResumeBuilderContent from "../features/ResumeBuilderContent.jsx"

const ResumeBuilder = ({user, setUser}) => {
  return (
    <>
    <header>
    <ResumeBuilderNav/>
    </header>
    <main className='pt-[60px] lg:pt-[120px] bg-[#F5F5F5]  w-full'>
      <div className='h-screen'>

    <ResumeBuilderContent user={user} setUser={setUser}/>
      </div>
      
    </main>
    </>
  )
}

export default ResumeBuilder