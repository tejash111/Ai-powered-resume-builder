import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from '../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';

const Dashboard = () => {
  const { user, isLoaded } = useUser();
    
    const [resumeList,setResumeList]=useState([]);

    useEffect(() => {
      if (isLoaded && user) {
          GetResumesList();
      }
  }, [isLoaded, user]);

    const GetResumesList=()=>{
      GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then(resp=>{
        
        setResumeList(resp.data.data)
      })
    }
  return (
    <div className='p-10 md:px-20 ml:px-32'>
      <h2 className='text-4xl font-semibold'>My Resume</h2>
      <p >start creating resume for your next job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
      <AddResume/>
      {resumeList.length>0&&resumeList.map((resume,index)=>(
        <ResumeCardItem resume={resume} key={index}/>
      ))}
      </div>
    </div>
  )
}

export default Dashboard