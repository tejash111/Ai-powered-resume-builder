import React, { useState } from 'react'
import {SquarePlus} from "lucide-react"
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from '../../../service/GlobalApi';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';


const AddResume = () => {
 
  const [openDialog,setOpenDialog]=useState(false)
 const [resumeTitle,setResumeTitle]=useState()
 const {user}=useUser()
 const [loading,setLoading]=useState(false)
 const nagivation=useNavigate()

 const onCreate=async()=> {
  setLoading(true)
  const uuid=uuidv4()
  const data={
    data:{
      title:resumeTitle,
      resumeId:uuid,
      userEmail:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName
    }
  }

  GlobalApi.CreateNewResume(data).then(resp=>{
    console.log(resp.data.data.documentId);
    if(resp){
      setLoading(false)
      nagivation('/dashboard/resume/'+resp.data.data.documentId+'/edit')
    }
    
  },(error)=>{
    setLoading(false)
  })
 }
  return (
    <div>
    <div onClick={()=>setOpenDialog(true)} className='"p-14 py-24 flex items-center justify-center 
bg-gray-900/30 backdrop-blur-lg rounded-lg 
mt-10 h-70 hover:scale-105 transition-all 
hover:shadow-2xl shadow-black/50 cursor-pointer ml-4 
gap-5 border border-gray-500/20 hover:bg-gray-800/40 
hover:shadow-blue-500/30"'>
       <SquarePlus/>
    
    </div>
    

<dialog open={openDialog} id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Create New Resume</h3>
    <p className="py-1">Add a title for your resume</p>
    <input type="text" placeholder="Type here" className="input border-1 border-gray-800 mt-2 w-full" onChange={(e)=>setResumeTitle(e.target.value)} />
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <div className='flex gap-3'>
        <button onClick={()=>setOpenDialog(false)} className="btn">Cancel</button>
        <button disabled={!resumeTitle} onClick={() => {
    setOpenDialog(false);
    onCreate();
}}
 className='btn btn-primary'>Create</button>
        </div>
      </form>
    </div>
  </div>
</dialog>


    </div>
  )
}

export default AddResume