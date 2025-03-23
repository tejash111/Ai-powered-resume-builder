import React from 'react'

const SummaryPreview = ({resumeInfo}) => {
  return (
    <div className='mt-2'>
        <p className='text-xs'>
            {resumeInfo?.summary}
            
        </p>
    </div>
  )
}

export default SummaryPreview