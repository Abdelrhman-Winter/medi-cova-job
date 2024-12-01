import React from "react";

interface CustomInputProps {
  label: string;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, placeholder }) => {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <label className="block mb-2 text-sm text-slate-600 ml-3 font-semibold opacity-70">
        {label}
        <span className="text-red-500">*</span>
      </label>
      <input
        className="w-full    bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#D6DDEB] px-3 py-2 transition duration-300 ease focus:outline-none focus:border-[#2EAE7D] hover:border-[#2EAE7D] shadow-sm focus:shadow bg-[rgba(214, 221, 235, 0.18)]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
