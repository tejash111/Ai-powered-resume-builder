import React, { useContext, useEffect, useState } from 'react'
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext'
import GlobalApi from '../../../../../service/GlobalApi'
import { useParams } from 'react-router-dom'
import { LoaderCircle } from 'lucide-react'
import { AiChatSession } from '../../../../../service/AiModel'

const prompt="Generate a compelling, professional, and concise 2-3 line summary for a resume. The candidate is applying for a job title: {jobTitle} position. The summary should highlight key strengths, industry-relevant skills, and contributions typically expected for this role. Keep it impactful, results-driven, and aligned with industry standards and also i want only one prompt nothing else ."

const Summary = ({enableNext}) => {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const [summary,setSummary]=useState('')
    const [loading,setLoading]=useState(false)
    const [showToast, setShowToast] = useState(false)
    const [output,setOutput]=useState()

    const params=useParams()
    
    useEffect(()=>{
        summary&&setResumeInfo({
            ...resumeInfo,
            summary:summary
        })
    },[summary])

    const GenerateSummaryFromAi=async()=>{
      setLoading(true)
      const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle) // Fixed replacement
      console.log(PROMPT);
      
      const result=await AiChatSession.sendMessage(PROMPT)
      const aiGeneratedText = await result.response.text(); // Await text extraction
      console.log(aiGeneratedText);
      
      setSummary(aiGeneratedText) // Set the AI output to the textarea
      setLoading(false)
    }

    const onSave = (e) => {
      e.preventDefault();
      setLoading(true);
    
      const data = { 
        data: { summary } 
      };
    
      GlobalApi.updateResumeDetail(params?.resumeId, data)
        .then(resp => {
          console.log("Update Success:", resp);
          setResumeInfo(prev => ({
            ...prev,
            summary: summary
          }));
          enableNext(true);
          setLoading(false);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        })
        .catch((error) => {
          console.error("Update Error:", error?.response?.data || error);
          setLoading(false);
        });
    };
    
  
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-violet-600 border-t-4 mt-10 '>
      <h2 className='font-bold text lg'>Summary</h2>
      <p>Add summary for your job title</p>

      {showToast && (
        <div className="toast alert alert-success">
          <div className="details updated">
            <span>Details Updated</span>
          </div>
        </div>
      )}

      <form className='mt-7' onSubmit={onSave}>
        <div className='flex justify-between items-end'>
          <label htmlFor="">Add summary</label>
          <button type='button' onClick={()=>GenerateSummaryFromAi()} className='btn btn-primary bg-transparent text-black '>Generate from AI</button>
        </div>
        <textarea 
          required 
          value={summary} // Controlled input
          onChange={(e)=>setSummary(e.target.value)} 
          className="textarea mt-5 w-full" 
          name='summary' 
          placeholder=""
        />
        <div className='mt-2 flex justify-end'>
          <button disabled={loading} type='submit' className='btn btn-primary'>
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Summary
