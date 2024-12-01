import React from "react";

interface SecondaryButtonProps {
  label: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ label }) => {
  return (
    <button className="border border-gray-300  px-4 py-3 text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600">
      {label}
    </button>
  );
};

export default SecondaryButton;
