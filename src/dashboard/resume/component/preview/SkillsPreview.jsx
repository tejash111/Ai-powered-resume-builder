import React from "react";

const SkillsPreview = ({ resumeInfo }) => {
  return (
    <div className="my-2">
      <h2
        className="text-center font-bold text-xl mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Skills
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {/* Languages */}
      <div className="mt-2">
        <h3 className="font-semibold text-sm mb-2">Programming Languages</h3>
        <div className="grid grid-cols-5 gap-3">
        {resumeInfo?.skills[0]?.languages?.map((language, index) => (
          <div key={index} className="mb-2">
            <h4 className="text-xs mb-2">{language.name}</h4>
            <div className="h-2 bg-gray-200 w-[80px] rounded">
              <div
                className="h-2 rounded"
                style={{
                  backgroundColor: resumeInfo?.themeColor,
                  width: `${language.rating}%`,
                }}
                
              ></div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Technologies & Tools */}
      <div className="mt-4">
        <h3 className="font-semibold text-sm mb-2">Technologies & Tools</h3>
        <p className="text-xs">{resumeInfo?.skills[1]?.techologiesAndTools}</p>
      </div>
    </div>
  );
};

export default SkillsPreview;
