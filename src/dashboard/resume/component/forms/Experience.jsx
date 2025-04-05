import React, { useContext, useEffect, useState } from 'react';
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext';
import { useParams } from 'react-router-dom';
import GlobalApi from '../../../../../service/GlobalApi';
import { LoaderCircle } from 'lucide-react';
import { AiChatSession } from '../../../../../service/AiModel';

const PROMPT = 'give a summaay with respect to experience Title : {ExperienceTitle} and Company name : {companyName} in one line focus on his work just one line summary nothing'

const formField = {
  experienceTitle: '',
  companyName: '',
  city: '',
  state: '',
  startDate1: '',
  endDate1: '',
  workSummery: '', 
};

function Experience({ enableNext }) {
  const [experienceList, setExperienceList] = useState([{ ...formField }]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
   const [summary,setSummary]=useState()

  useEffect(() => {
    // If experience exists in resumeInfo, use it instead of default
    if (resumeInfo?.Experience && resumeInfo.Experience.length > 0) {
      // Convert any existing fields to new field names
      const updatedExperience = resumeInfo.Experience.map(exp => {
        const updated = { ...exp };

        // Convert title to experienceTitle if needed
        if (exp.title && !exp.experienceTitle) {
          updated.experienceTitle = exp.title;
        }

        // Convert date fields if needed
        if (exp.startDate && !exp.startDate1) {
          updated.startDate1 = exp.startDate;
        }

        if (exp.endDate && !exp.endDate1) {
          updated.endDate1 = exp.endDate;
        }

        return updated;
      });

      setExperienceList(updatedExperience);
    }
  }, [resumeInfo?.Experience]);

  const GenerateSummaryFromAi=async()=>{
        setLoading(true)
        const prompt = PROMPT.replace('{experienceTitle}', formField.experienceTitle).replace('{companyName}',resumeInfo?.companyName) // Fixed replacement
        console.log(prompt);
        
        const result=await AiChatSession.sendMessage(prompt)
        const aiGeneratedText = await result.response.text(); // Await text extraction
        console.log(aiGeneratedText);
        
        // Set the AI output to the textarea
        setLoading(false)
        setSummary(aiGeneratedText)
      }

  const handleChange = (index, event) => {
    enableNext && enableNext(false);
    const newEntries = [...experienceList];
    const { name, value } = event.target;
    newEntries[index][name] = value;

    // Update local state
    setExperienceList(newEntries);

    // Update context with new experience list
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      Experience: newEntries,
    }));
  };

  const addNewExperience = () => {
    setExperienceList([...experienceList, { ...formField }]);
  };

  const removeExperience = () => {
    if (experienceList.length > 1) {
      setExperienceList(experienceList => experienceList.slice(0, -1));
    }
  };

  const onSave = async () => {
    setLoading(true);

    // Ensure resumeId exists
    if (!params.resumeId) {
      console.error("Error: Missing resumeId!");
      setLoading(false);
      return;
    }

    // Ensure experience list is not empty
    if (experienceList.length === 0) {
      console.error("Error: No experience details to save!");
      setLoading(false);
      return;
    }

    // Structure data correctly for Strapi v4
    const data = {
      experience: experienceList.map(exp => ({
        experienceTitle: exp.experienceTitle || '',
        companyName: exp.companyName || '',
        city: exp.city || '',
        state: exp.state || '',
        startDate1: exp.startDate1 || null,
        endDate1: exp.endDate1 || null,
        workSummery: exp.workSummery || ''
      }))
    };

    try {
      console.log("Sending data to API:", data); // Debug log
      const resp = await GlobalApi.updateResumeDetail(params.resumeId, { data });

      if (resp?.data?.data?.attributes?.Experience) {
        setResumeInfo((prevInfo) => ({
          ...prevInfo,
          Experience: resp.data.data.attributes.Experience,
        }));
      } else if (resp?.data?.data) {
        // Handle possible alternative response structure
        setResumeInfo((prevInfo) => ({
          ...prevInfo,
          Experience: experienceList,
        }));
      }

      enableNext && enableNext(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error("Error saving experience data:", error);
      if (error.response) {
        console.error("Error Response:", error.response.data);
        console.error("Status Code:", error.response.status);
        console.error("Full error details:", JSON.stringify(error.response.data, null, 2));
      }
    }

    setLoading(false);
  };

  return (
    <div>
      <div className='p-5 shadow-lg rounded-lg border-t-violet-600 border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Professional Experience</h2>
        <p>Add Your previous Job experience</p>

        {showToast && (
          <div className="toast alert alert-success">
            <div className="details updated">
              <span>Experience Details Updated</span>
            </div>
          </div>
        )}

        <div>
          {experienceList.map((item, index) => (
            <div key={index}>
              <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>

                <div>
                  <label className='text-xs'>Position Title</label>
                  <input
                    name="experienceTitle"
                    className="input"
                    value={item.experienceTitle || ""}
                    onChange={(event) => handleChange(index, event)}
                    required
                  />
                </div>
                <div>
                  <label className='text-xs'>Company Name</label>
                  <input
                    name="companyName"
                    className="input"
                    value={item.companyName || ""}
                    onChange={(event) => handleChange(index, event)}
                    required
                  />
                </div>
                <div>
                  <label className='text-xs'>City</label>
                  <input
                    name="city"
                    className="input"
                    value={item.city || ""}
                    onChange={(event) => handleChange(index, event)}
                    required
                  />
                </div>
                <div>
                  <label className='text-xs'>State</label>
                  <input
                    name="state"
                    className="input"
                    value={item.state || ""}
                    onChange={(event) => handleChange(index, event)}
                    required
                  />
                </div>
                <div>
                  <label className='text-xs'>Start Date</label>
                  <input
                    type="date"
                    name="startDate1"
                    className="input"
                    value={item.startDate1 || ""}
                    onChange={(event) => handleChange(index, event)}
                    required
                  />
                </div>
                <div>
                  <label className='text-xs'>End Date</label>
                  <input
                    type="date"
                    name="endDate1"
                    className="input"
                    value={item.endDate1 || ""}
                    onChange={(event) => handleChange(index, event)}
                    required
                  />
                </div>
                <div className='flex justify-between items-end'>
          <label htmlFor="">Add summary</label>
          <button type='button' onClick={()=>GenerateSummaryFromAi()} className='btn btn-primary bg-transparent text-black '>Generate from AI</button>
        </div>
                <div className='col-span-2'>
                
                  <textarea
                  value={summary}
                    name="workSummery"
                    className="input w-full h-32"

                    onChange={(event) => handleChange(index, event)}
                    placeholder="Describe your work responsibilities and achievements..."
                    required
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <button
              type="button"
              onClick={addNewExperience}
              className="btn btn-outline"
            >
              + Add More Experience
            </button>
            <button
              type="button"
              onClick={removeExperience}
              className="btn btn-outline"
            >
              - Remove
            </button>
          </div>
          <button
            className="btn btn-primary"
            disabled={loading}
            onClick={onSave}
          >
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Experience;