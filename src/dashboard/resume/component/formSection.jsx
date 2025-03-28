import React, { useState } from 'react'
import ResumePreview from './ResumePreview'
import PersonalDetail from './forms/personalDetail'
import { ArrowLeft, ArrowRight ,LayoutGrid} from 'lucide-react'
import Summary from './forms/Summary'
import ExperienceForm from './forms/Experience'
import Education from './preview/EducationalPreview'


const FormSection = () => {
  const [activeFormIndex,setActiveFormIndex]=useState(1);

  const [enableNext,setEnableNext]=useState(false)
  return (
    <div className="">

      <div className='flex justify-between items-center'>
        <button  variant="outline" size="sm" className='btn btn-primary flex gap-2'><LayoutGrid /> Theme </button>
        <div className='flex gap-2'>
          {activeFormIndex>1&&<button onClick={()=> setActiveFormIndex(activeFormIndex-1)} className='btn btn-primary' size="sm"><ArrowLeft/> </button>}
          <button disabled={!enableNext} onClick={()=> setActiveFormIndex(activeFormIndex+1)} className='btn btn-primary '> Next <ArrowRight/></button>
        </div>
      </div>
     
         {activeFormIndex==1? <PersonalDetail enableNext={
          (v)=>setEnableNext(v)
         } /> :activeFormIndex==2?<ExperienceForm enableNext={
          (v)=>setEnableNext(v)
         }/>: activeFormIndex==3? <Education enableNext={
          (v)=>setEnableNext(v)
         }/>:null }
      

      
    </div>
  )
}

export default FormSection
