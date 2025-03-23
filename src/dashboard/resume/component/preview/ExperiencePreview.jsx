import React from 'react';

const Experience = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      <div className="mt-4">
        {resumeInfo?.experience?.map((job, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-md">{job.title} at {job.companyName}</h3>
            <p className="text-gray-600 text-sm">{job.city}, {job.state}</p>
            <p className="text-sm mt-1">
              <strong>Duration:</strong> {job.startDate} - {job.currentlyWorking ? "Present" : job.endDate}
            </p>
            <p className="text-sm mt-2">{job.workSummary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;