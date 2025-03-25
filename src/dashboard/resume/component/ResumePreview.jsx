import React, { useContext } from 'react'
import { ResumeInfoContext } from '../../../context/ResumeInfoContext'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummaryPreview from './preview/SummaryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import SkillsPreview from './preview/SkillsPreview'
import Projects from './preview/Projects'
import Education from './preview/EducationalPreview'

const ResumePreview = () => {

  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

  return (
    <div className='shadow-2xl h-full p-14  border-gray-400 ' style={{borderColor:resumeInfo?.themeColor}}>
      
     
        {/* personal details  here why the question mark reqd*/}
          <PersonalDetailPreview resumeInfo={resumeInfo}/>
          
        {/* summary */}
          <SummaryPreview resumeInfo={resumeInfo}/>

        {/* skills */}
        <SkillsPreview resumeInfo={resumeInfo}/>
        {/* projects */}
        <Projects resumeInfo={resumeInfo}/>
        {/* education */}
        <Education resumeInfo={resumeInfo}/>
        {/* professional experience */}
         <ExperiencePreview  resumeInfo={resumeInfo}/> 
        

    </div>
  )
}

export default ResumePreview