import React from 'react'

const SummaryPreview = ({resumeInfo}) => {
  return (
    <div>
        <p className='text-xs'>
            {resumeInfo?.summary}
            
        </p>
    </div>
  )
}

export default SummaryPreview