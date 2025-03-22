import React from 'react'

const ExperiencePreview = ({resumeInfo}) => {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2' style={{color:resumeInfo?.themeColor}}>Professsional experience</h2>
        <hr style={{borderColor:resumeInfo?.themeColor}}/>
        {
            resumeInfo?.experience.map((experience,index)=>(
                <div key={index}>{experience?.title}</div>
            ))
        }
    </div>
  )
}

export default ExperiencePreview