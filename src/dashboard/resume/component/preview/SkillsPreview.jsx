import React from 'react'

const SkillsPreview = ({resumeInfo}) => {
  return (
    <div className='my-6'>
    <h2 className='text-center font-bold text-sm mb-2' style={{color:resumeInfo?.themeColor}}>Skills</h2>
    <hr style={{borderColor:resumeInfo?.themeColor}}/>
        <div>
            {
                resumeInfo?.skills.map((skills,index)=>(
                    <div key={index}>
                        <h2>{skills?.name}</h2>
                        <div className='h-2 bg-gray-200 w-[120px] '>
                            <div className='h-2' style={{backgroundColor:resumeInfo?.themeColor, width:skills?.rating+'%' }}></div>
                        </div>

                    </div>
                    
                ))
            }
        </div>
    </div>
  )
}

export default SkillsPreview