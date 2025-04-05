import React, { useContext, useState, useEffect } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi";
import { LoaderCircle } from "lucide-react";

const formField = {
  id: null,
  niversityName: "",
  courseName: "",
  startDate: "",
  endDate: ""
};

const EducationForm = ({ enableNext }) => {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [educationList, setEducationList] = useState([{ ...formField }]);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // If education exists in resumeInfo, use it instead of default
    if (resumeInfo?.education && resumeInfo.education.length > 0) {
      setEducationList(resumeInfo.education);
    }
  }, [resumeInfo?.education]);

  const handleChange = (index, event) => {
    enableNext && enableNext(false);
    const newEntries = [...educationList];
    const { name, value } = event.target;
    newEntries[index][name] = value;

    // Update local state
    setEducationList(newEntries);

    // Update context with new education list
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      education: newEntries,
    }));
  };

  const addEducationList = () => {
    const newId =
      educationList.length > 0
        ? Math.max(...educationList.map((edu) => edu.id || 0)) + 1
        : 1;

    const newEntries = [
      ...educationList,
      {
        ...formField,
        id: newId,
      },
    ];

    // Update local state
    setEducationList(newEntries);

    // Update context with new education list
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      education: newEntries,
    }));
  };

  const removeEducation = () => {
    if (educationList.length > 1) {
      const newEntries = educationList.slice(0, -1);

      // Update local state
      setEducationList(newEntries);

      // Update context with new education list
      setResumeInfo((prevInfo) => ({
        ...prevInfo,
        education: newEntries,
      }));
    }
  };

  const onSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    //  Ensure resumeId exists
    if (!params.resumeId) {
      console.error(" Error: Missing resumeId!");
      setLoading(false);
      return;
    }

    // Ensure education list is not empty
    if (educationList.length === 0) {
      console.error(" Error: No education details to save!");
      setLoading(false);
      return;
    }

    //  Structure data correctly
    const data = {
      data: {
        education: educationList.map((edu) => ({
          universityName: edu.universityName,
          courseName: edu.courseName,
          startDate: edu.startDate,
          endDate: edu.endDate,
        })),
      },
    };

    console.log(" Sending data:", JSON.stringify(data, null, 2));

    try {
      const resp = await GlobalApi.updateResumeDetail(params.resumeId, data);


      if (resp?.data?.data?.education) {
        setResumeInfo((prevInfo) => ({
          ...prevInfo,
          education: resp.data.data.education,
        }));
      }
      enableNext(true)
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error(" Error saving education data:", error);
      if (error.response) {
        console.error("Error Response:", error.response.data);
        console.error("Status Code:", error.response.status);
        console.error("Headers:", error.response.headers);
      }
    }
    
    setLoading(false);
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-violet-600 border-t-4 mt-10">
      <h2 className="font-bold text lg">Education</h2>
      <p>Add your Educational Details</p>

      {showToast && (
        <div className="toast alert alert-success">
          <div className="details updated">
            <span>Education Details Updated</span>
          </div>
        </div>
      )}

      <form onSubmit={onSave}>
        <div>
          {educationList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border-1 border-gray-300 p-3 my-5 rounded-lg">
                <div>
                  <label className="text-xs">University Name</label>
                  <input
                    name="universityName"
                    className="input"
                    value={item.universityName || ""}
                    onChange={(event) => handleChange(index, event)}
                    required
                    defaultValue={item?.universityName}
                  />
                </div>
                <div>
                  <label className="text-xs">Course Name</label>
                  <input
                    name="courseName"
                    className="input"
                    value={item.courseName || ""}
                    onChange={(event) => handleChange(index, event)}
                    required
                  />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    className="input"
                    value={item.startDate || ""}
                    onChange={(event) => handleChange(index, event)}
                    required
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    className="input"
                    value={item.endDate || ""}
                    onChange={(event) => handleChange(index, event)}
                    required
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={addEducationList}
              className="btn btn-outline"
            >
              + Add More Education
            </button>
            <button
              type="button"
              onClick={removeEducation}
              className="btn btn-outline"
            >
              - Remove Education
            </button>
          </div>
          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
