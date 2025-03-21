import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResumeCardItem = ({resume,key}) => {
  return (
    <Link to={'/dashboard/resume/'+resume.resumeId+'/edit'}>
        <div className='p-14 py-24 items-center flex justify-center bg-gray-300 rounded-lg mt-10 h-70 hover:scale-105 transition-all hover:shadow-md cursor-pointer ml-4 gap-5 hover:105  hover:border-1 border-black '>
           <Notebook/>
        </div>
        <h2 className='text-center my-1 '>{resume.title}</h2>
       
    </Link>
  )
}

export default ResumeCardItem