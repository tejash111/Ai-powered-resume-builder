import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../component/formSection'
import ResumePreview from '../../component/ResumePreview'
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext'
import { GalleryThumbnails } from 'lucide-react'
import GlobalApi from '../../../../../service/GlobalApi'

const EditResume = () => {
    const {resumeId}=useParams()
    const [resumeInfo,setResumeInfo]=useState()

    useEffect(()=>{
       
        GetResumeInfo();
    },[])

    const GetResumeInfo=()=>{
     GlobalApi.GetResumeById(resumeId).then(resp=>{
      console.log(resp.data.data);
      setResumeInfo(resp.data.data)
      
     })
    }

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