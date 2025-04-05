import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResumeCardItem = ({resume,key}) => {
  return (
    <Link to={'/dashboard/resume/'+resume.documentId+'/edit'}>
        <div className=" py-24 flex items-center justify-center 
bg-black  p-6 rounded-lg text-white backdrop-blur-lg 
mt-10 h-70 hover:scale-105 transition-all 
hover:shadow-2xl shadow-black/50 cursor-pointer ml-4 
gap-5  border-t-gray-600 border-t-4 p-14  bg-gradient-to-b
          from-pink-100 via-purple-200 to-blue-200
        h-[280px] 
          rounded-t-lg border-t-4">
           <div className='flex 
        items-center justify-center h-[180px] '>
                {/* <Notebook/> */}
                <img src="/cv.png" width={80} height={80} />
              </div>
        </div>
        <h2 className='text-center my-1 '>{resume.title}</h2>
       
    </Link>
  )
}

export default ResumeCardItem