import React from 'react'
import CoverLetterGeneratorNav from '../layouts/CoverLetterGeneratorNav'
import CoverLetterGeneratorContent from '../features/CoverLetterGeneratorContent'

const CoverLetterGenerator = () => {
  return (
    <>
<header>
  <CoverLetterGeneratorNav/>
</header>
<main className="pt-[105px] lg:pt-[120px] bg-[#F5F5F5] h-fit w-full">  

  <CoverLetterGeneratorContent/>
  
</main>
    </>
  )
}

export default CoverLetterGenerator