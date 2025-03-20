import React from 'react'
import AddResume from './components/AddResume'

const Dashboard = () => {
  return (
    <div className='p-10 md:px-20 ml:px-32'>
      <h2 className='text-4xl font-semibold'>My Resume</h2>
      <p >start creating resume for your next job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
      <AddResume/>
      </div>
    </div>
  )
}

export default Dashboard