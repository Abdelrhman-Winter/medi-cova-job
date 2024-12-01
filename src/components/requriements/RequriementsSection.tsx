import React from "react";

interface RequriementsSection {
  id: string;
  label: string;
}

const RequriementsSection: React.FC = () => {
  const requirements: RequriementsSection[] = [
    { id: "age", label: "Age" },
    { id: "experience", label: "Experience" },
    { id: "nationality", label: "Nationality" },
    { id: "education", label: "Education" },
    { id: "gender", label: "Gender" },
    { id: "major", label: "Major" },
    { id: "career-level", label: "Career Level" },
  ];

  return (
    <div className="h-max py-8 px-4 flex flex-col items-center">
      <div className="bg-gray-50 shadow-md rounded-lg px-12 py-8 max-w-4xl w-full">
        <div className="w-full max-w-4xl p-6">
          <h2 className="text-2xl font-bold mb-6  text-prim">
            Additional Requirements
          </h2>
          <div className="flex flex-wrap gap-3">
            {requirements.map((requirement) => (
              <button
                key={requirement.id}
                className="flex items-center border border-sec text-sec text-sm font-medium px-4 py-2  hover:bg-green-50 focus:outline-none focus:ring focus:ring-green-200"
              >
                <span className="text-sec font-bold mr-2">+</span>
                {requirement.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequriementsSection;
