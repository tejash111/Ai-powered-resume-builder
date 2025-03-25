import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResumeCardItem = ({resume,key}) => {
  return (
    <Link to={'/dashboard/resume/'+resume.documentId+'/edit'}>
        <div className="p-14 py-24 flex items-center justify-center 
bg-blue-900/30 backdrop-blur-lg rounded-lg 
mt-10 h-70 hover:scale-105 transition-all 
hover:shadow-2xl shadow-black/50 cursor-pointer ml-4 
gap-5 border border-blue-500/20 hover:bg-blue-800/40 
hover:shadow-blue-500/30">
           <Notebook/>
        </div>
        <h2 className='text-center my-1 '>{resume.title}</h2>
       
    </Link>
  )
}

export default ResumeCardItem