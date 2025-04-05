import React, { useState } from 'react'
import ResumePreview from './ResumePreview'
import PersonalDetail from './forms/personalDetail'
import { ArrowLeft, ArrowRight ,Home,LayoutGrid} from 'lucide-react'
import Summary from './forms/Summary'
import ExperienceForm from './forms/Experience'
import EducationForm from './forms/EducationForm'
import ProjectForm from './forms/ProjectForm'
import { Link } from 'react-router-dom'
import Skills from './forms/SkillsFom'





const FormSection = () => {
  const [activeFormIndex,setActiveFormIndex]=useState(1);

  const [enableNext,setEnableNext]=useState(false)
  return (
    <div className="">

      <div className='flex justify-between items-center'>
        <div className='flex gap-3 '>
        <Link to={"/dashboard"}>
          <button className='btn btn-primary cursor-pointer'><Home/></button>
          </Link>
      
        <button  size="sm" className='btn btn-primary flex gap-2'><LayoutGrid /> Theme </button>
        </div>
          
        <div className='flex gap-2'>
          {activeFormIndex>1&&<button onClick={()=> setActiveFormIndex(activeFormIndex-1)} className='btn btn-primary' size="sm"><ArrowLeft/> </button>}
          <button disabled={!enableNext} onClick={()=> setActiveFormIndex(activeFormIndex+1)} className='btn btn-primary '> Next <ArrowRight/></button>
        </div>
      </div>
     
         {activeFormIndex==1? <PersonalDetail enableNext={
          (v)=>setEnableNext(v)
         } /> :activeFormIndex==2?<  EducationForm enableNext={
          (v)=>setEnableNext(v)
         }/>: activeFormIndex==3? <Skills enableNext={
          (v)=>setEnableNext(v)
         }/>:activeFormIndex==4?<ExperienceForm enableNext={
          (v)=>setEnableNext(v)
         } />:null} 
        
      

      
    </div>
  )
}

export default FormSection
