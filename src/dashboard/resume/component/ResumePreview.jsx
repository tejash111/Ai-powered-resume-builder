import React, { useContext } from 'react'
import { ResumeInfoContext } from '../../../context/ResumeInfoContext'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummaryPreview from './preview/SummaryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import SkillsPreview from './preview/SkillsPreview'

const ResumePreview = () => {

  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px] border-gray-400 ' style={{borderColor:resumeInfo?.themeColor}}>
      
     
        {/* personal details  here why the question mark reqd*/}
          <PersonalDetailPreview resumeInfo={resumeInfo}/>
        {/* summary */}
          <SummaryPreview resumeInfo={resumeInfo}/>
        {/* professional experience */}
        <ExperiencePreview resumeInfo={resumeInfo}/>
        {/* education */}

        {/* skills */}
        <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview