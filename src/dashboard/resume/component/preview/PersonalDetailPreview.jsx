import React from 'react'
import { Mail } from 'lucide-react';
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const PersonalDetailPreview = ({resumeInfo}) => {
  return (
    <div>
        <h1 className='font-bold text-2xl text-center'
        style={{color:resumeInfo?.themeColor}}
        >{resumeInfo?.firstName} {resumeInfo?.lastName}</h1>
        <h2 style={{color:resumeInfo?.themeColor}} className='text-center text-sm font-medium '>{resumeInfo?.jobTitle}</h2>
        <div className='flex justify-center gap-2 text-sm '>
          
        <h2  style={{color:resumeInfo?.themeColor}} className='text-center font-normal flex gap-1'><MdEmail   className='mt-1'/> {resumeInfo?.email}</h2>
        
        <h2 style={{color:resumeInfo?.themeColor}} className='text-center font-normal flex gap-1'><BsFillPhoneFill />{resumeInfo?.phone}</h2>
        </div>

        <div className='flex justify-center gap-2 text-sm '>
  
        <h2 style={{color:resumeInfo?.themeColor}} className='text-center font-normal flex gap-1'><FaGithub />{resumeInfo?.github}</h2>
        <h2 style={{color:resumeInfo?.themeColor}} className='text-center font-normal flex gap-1' ><FaLinkedin/>{resumeInfo?.linkedin}</h2>
        </div>
        
    </div>
  )
}

export default PersonalDetailPreview