import React from 'react';

const Experience = ({ resumeInfo }) => {
  return (
    <div className="my-4">
      <h2 className="text-center font-bold text-xs mb-1" style={{ color: resumeInfo?.themeColor }}>
        Experience
      </h2>
      <hr className="border" style={{ borderColor: resumeInfo?.themeColor }} />

      <div className="mt-3">
        {resumeInfo?.experience?.map((job, index) => (
          <div key={index} className="mb-3 p-3 border rounded shadow-sm">
            <h3 className="font-semibold text-sm">{job.title} at {job.companyName}</h3>
            <p className="text-gray-600 text-xs">{job.place}</p>
            <p className="text-xs mt-1">
              <strong>Duration:</strong> {job.startDate} - {job.currentlyWorking ? "Present" : job.endDate}
            </p>
            <div className='text-xs' dangerouslySetInnerHTML={{__html:job?.workSummary}}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
