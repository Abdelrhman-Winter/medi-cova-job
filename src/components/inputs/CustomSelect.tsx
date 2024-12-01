import React from "react";

interface CustomSelectorProps {
  label: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  selectedValue: string;
}

const CustomSelector: React.FC<CustomSelectorProps> = ({
  label,
  options,
  onChange,
  selectedValue,
}) => {
  return (
    <div className="w-full max-w-md min-w-[200px]">
      {/* Label */}
      <label className="block text-base font-medium mb-2">
        {label} <span className="text-red-500">*</span>
      </label>

      {/* Selector Container */}
      <div className="w-full h-[41px] border border-[#D6DDEB] bg-transparent px-3 py-2 transition-all duration-300 ease-in-out hover:border-[#2EAE7D] focus-within:border-[#2EAE7D] ">
        {/* Select Element */}
        <select
          className="w-full h-full bg-transparent text-slate-700 text-sm focus:outline-none"
          value={selectedValue}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            Select an option...
          </option>
          {options.map((option, index) => (
            <option
              key={index}
              value={option.value}
              className="bg-white text-slate-700 hover:bg-gray-100"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelector;
