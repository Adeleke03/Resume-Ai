import React from 'react'
import CoverLetterGeneratorNav from '../layouts/CoverLetterGeneratorNav'
import CoverLetterGeneratorContent from '../features/CoverLetterGeneratorContent'

const CoverLetterGenerator = ({user, setUser}) => {
  return (
    <>
<header>
  <CoverLetterGeneratorNav/>
</header>
<main className="pt-[60px] lg:pt-[120px] bg-[#F5F5F5] h-screen w-full">  

  <CoverLetterGeneratorContent user={user} setUser={setUser}/>
  
</main>
    </>
  )
}

export default CoverLetterGenerator