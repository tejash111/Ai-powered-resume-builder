import React, { useContext, useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext';
import GlobalApi from '../../../../../service/GlobalApi';
import { useParams } from 'react-router-dom';

function Skills({ enableNext }) {
  const [skillsList, setSkillsList] = useState([{
    name: '',
    rating: 0
  }]);
  
  const { resumeId } = useParams();
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  
  useEffect(() => {
    // If skills exists in resumeInfo, use it instead of default
    if (resumeInfo?.skills && resumeInfo.skills.length > 0) {
      setSkillsList(resumeInfo.skills);
    }
  }, [resumeInfo?.skills]);
  
  const handleChange = (index, name, value) => {
    enableNext && enableNext(false);
    const newEntries = [...skillsList];
    newEntries[index][name] = value;
    
    // Update local state
    setSkillsList(newEntries);
    
    // Update context with new skills list
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      skills: newEntries,
    }));
  };
  
  const addNewSkills = () => {
    setSkillsList([...skillsList, {
      name: '',
      rating: 0
    }]);
  };
  
  const removeSkills = () => {
    if (skillsList.length > 1) {
      setSkillsList(skillsList => skillsList.slice(0, -1));
    }
  };
  
  const onSave = async () => {
    setLoading(true);
    
    // Ensure resumeId exists
    if (!resumeId) {
      console.error("Error: Missing resumeId!");
      setLoading(false);
      return;
    }
    
    // Ensure skills list is not empty
    if (skillsList.length === 0) {
      console.error("Error: No skills to save!");
      setLoading(false);
      return;
    }
    
    // Structure data correctly
    const data = {
      data: {
        skills: skillsList.map(({ id, ...rest }) => rest)
      }
    };
    
    try {
      const resp = await GlobalApi.updateResumeDetail(resumeId, data);
      
      if (resp?.data?.data?.skills) {
        setResumeInfo((prevInfo) => ({
          ...prevInfo,
          skills: resp.data.data.skills,
        }));
      }
      
      enableNext && enableNext(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error("Error saving skills data:", error);
      if (error.response) {
        console.error("Error Response:", error.response.data);
        console.error("Status Code:", error.response.status);
      }
    }
    
    setLoading(false);
  };
  
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-violet-600 border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Skills</h2>
      <p>Add Your top professional key skills</p>
      
      {showToast && (
        <div className="toast alert alert-success">
          <div className="details updated">
            <span>Skills Details Updated</span>
          </div>
        </div>
      )}
      
      <div>
        {skillsList.map((item, index) => (
          <div key={index} className='flex justify-between mb-2 border rounded-lg p-3'>
            <div>
              <label className='text-xs'>Name</label>
              <input 
                className="input w-full"
                value={item.name || ""}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                required
              />
            </div>
            <div>
              <label className='text-xs'>Enter skill rating out of 100</label>
              <input 
                type="number"
                min="0"
                max="100"
                className='input'
                value={item.rating || 0}
                onChange={(e) => handleChange(index, 'rating', e.target.value)}
                required
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <button 
            type="button"
            onClick={addNewSkills}
            className="btn btn-outline"
          >
            + Add More Skill
          </button>
          <button 
            type="button"
            onClick={removeSkills}
            className="btn btn-outline"
          >
            - Remove
          </button>
        </div>
        <button 
          className='btn btn-primary'
          disabled={loading}
          onClick={onSave}
        >
          {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
        </button>
      </div>
    </div>
  );
}

export default Skills;