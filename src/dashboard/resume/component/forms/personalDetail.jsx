import { useContext, useEffect, useState } from 'react'
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext'
import { useParams } from 'react-router-dom'
import GlobalApi from '../../../../../service/GlobalApi'
import { LoaderCircle } from 'lucide-react'


const PersonalDetail = ({ enableNext }) => {

  const params = useParams()

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)

  const [formData, setFormData] = useState()
  const [loading, setLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {

  }, [])

  const handleInputChange = (e) => {
    enableNext(false)
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
    setResumeInfo({
      ...resumeInfo,
      [name]: value
    })
  }

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true)

    const data = {
      data: formData
    }

    GlobalApi.updateResumeDetail(params?.resumeId, data).then(resp => {
      enableNext(true)
      setLoading(false)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000) // Hide toast after 3 seconds

    }, (error) => {
      setLoading(false)
    })
  }

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-violet-600 border-t-4 mt-10 '>
      <h2 className='font-bold text lg'>Personal Detail</h2>
      <p>Get started with personal info</p>

      {showToast && (
        <div className="toast alert alert-success">
          <div className="details updated">
            <span>Details Updated</span>
          </div>
        </div>
      )}

      <form onSubmit={onSave}>
        <div className='grid grid-cols-2 mt-5 gap-3'>
          <div>
            <label htmlFor="">First name</label>
            <input defaultValue={resumeInfo?.firstName} className='text-sm input mt-1' type="text" name='firstName' onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input defaultValue={resumeInfo?.lastName} className='text-sm input mt-1' type="text" name='lastName' onChange={handleInputChange} required />
          </div>
          <div className='col-span-2'>
            <label htmlFor="">Job title</label>
            <input defaultValue={resumeInfo?.jobTitle} className='text-sm input mt-1 w-full' type="text" name='jobTitle' onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input defaultValue={resumeInfo?.email} className='text-sm input mt-1' type="text" name='email' onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <input defaultValue={resumeInfo?.phone} className='text-sm input mt-1' type="text" name='phone' onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="">github</label>
            <input defaultValue={resumeInfo?.github} className='text-sm input mt-1' type="text" name='github' onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="">Linkedin </label>
            <input defaultValue={resumeInfo?.linkedin} className='text-sm input mt-1' type="text" name='linkedin' onChange={handleInputChange} />
          </div>
        </div>
        <div className='mt-3 flex justify-end'>
          <button disabled={loading} type='submit' className='btn btn-primary'>{loading ? <LoaderCircle className='animate-spin' /> : 'Save'}</button>
        </div>
      </form>
    </div>
  )
}

export default PersonalDetail