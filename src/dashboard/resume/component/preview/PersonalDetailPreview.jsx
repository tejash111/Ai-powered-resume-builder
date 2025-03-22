import React from 'react'

const PersonalDetailPreview = ({resumeInfo}) => {
  return (
    <div>
        <h2 className='font-bold text-xl text-center'
        style={{color:resumeInfo?.themeColor}}
        >{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
        <h2 style={{color:resumeInfo?.themeColor}} className='text-center text-sm font-medium mt-1'>{resumeInfo?.jobTitle}</h2>
        <h2 style={{color:resumeInfo?.themeColor}} className='text-center font-normal'>{resumeInfo?.address}</h2>
    </div>
  )
}

export default PersonalDetailPreview