import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor'
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext'

const formFiled = {
  title:'',
  companyName:'',
  city:'',
  state:'',
  startDate:'',
  endDate:'',
  workSummary:''

}



const ExperienceForm = () => {
  const [experienceList,setExperienceList]=useState([formFiled])

  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

  const handleChange=(index,event)=>{
    const newEntries = experienceList.slice()
    const {name,value}=event.target
    newEntries[index][name]=value
    setExperienceList(newEntries)

  }

  const handleRichTextEditor=(e,name,index)=>{
    const newEntries = experienceList.slice()
    newEntries[index][name]=e.target.value
    setExperienceList(newEntries)

  }
  const AddExperienceList=()=>{
    setExperienceList([...experienceList,formFiled])
  }
  const RemoveExperience=()=>{
      setExperienceList(experienceList.slice(0,-1))
  }

  useEffect(()=>{
    setResumeInfo({
      ...resumeInfo,
      experience:experienceList
    })
  },[experienceList])
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-violet-600 border-t-4 mt-10 '>
      <h2 className='font-bold text lg'>Professional Experience</h2>
      <p>Add your previous experience (anything like club member,freelance,volunterring etc)</p>
      

      <div>
        {experienceList.map((item,index)=>(
            <div key={index}>
            <div className='grid grid-cols-2 gap-3 border-1 border-gray-300 p-3 my-5 rounded-lg'>
              <div > 
                  <label className='text-xs '>Position Title</label>
                  <input name='title' className='input' onChange={(event)=>handleChange(index,event)} />
              </div>
              <div> 
                  <label className='text-xs '>Comapany Name</label>
                  <input name='companyName' className='input' onChange={(event)=>handleChange(index,event)} />
              </div>
              <div> 
                  <label className='text-xs '>Place</label>
                  <input name='place' className='input' onChange={(event)=>handleChange(index,event)} />
              </div>
              <div> 
                  <label className='text-xs '>Start Date</label>
                  <input type='date' name='startDate' className='input' onChange={(event)=>handleChange(index,event)} />
              </div>
              <div> 
                  <label  className='text-xs '>End Date</label>
                  <input type='date' name='endDate' className='input' onChange={(event)=>handleChange(index,event)} />
              </div>
              <div className='col-span-2'>
                <RichTextEditor index={index} onRichTextEditorChange={(event)=>handleRichTextEditor(event,'workSummary',index)}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-between '>
        <div className='flex gap-2'>
        <button onClick={AddExperienceList} className='btn btn-outline'>+ Add More Experience</button>
        <button onClick={RemoveExperience} className='btn btn-outline'>- Remove Experience</button>
        </div>
        
        <button className='btn btn-primary'>Save</button>
      </div>

    </div>
  )
}

export default ExperienceForm