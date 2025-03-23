import React from 'react';

const Education = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Education
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      <div className="mt-4">
        {resumeInfo?.education?.map((edu, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-md">{edu.universityName}</h3>
            <p className="text-gray-600 text-sm">{edu.degree} in {edu.major}</p>
            <p className="text-sm mt-1">
              <strong>Duration:</strong> {edu.startDate} - {edu.endDate}
            </p>
            <p className="text-sm mt-1 text-gray-600">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
