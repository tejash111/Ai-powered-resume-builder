import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../component/formSection'
import ResumePreview from '../../component/ResumePreview'
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext'
import data from '../../../../data/data'

const EditResume = () => {
    const params=useParams()
    const [resumeInfo,setResumeInfo]=useState(data)

    useEffect(()=>{
        setResumeInfo(data)
        
    },[])

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10 '>
      
        {/* form section */}
        <FormSection/>
        {/* previesection */}
         <ResumePreview/>

    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume