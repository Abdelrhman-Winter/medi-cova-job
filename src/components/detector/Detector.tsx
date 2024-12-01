"use client";
import React, { useState } from "react";

interface KeywordProps {
  initialKeywords: string[];
  info: string;
  header: string;
}

const Detector: React.FC<KeywordProps> = ({
  initialKeywords,
  info,
  header,
}) => {
  const [keywords, setKeywords] = useState<string[]>(initialKeywords);

  const handleRemoveKeyword = (keywordToRemove: string) => {
    setKeywords((prevKeywords) =>
      prevKeywords.filter((keyword) => keyword !== keywordToRemove)
    );
  };

  return (
    <div className="w-full py-6 shadow-sm">
      <label htmlFor="keywords" className="text-sm font-semibold  mb-2">
        {header}
      </label>
      <p className="text-sm text-gray-500 mb-4">{info}</p>
      <div id="keywords" className="flex flex-wrap gap-2 p-3 bg-white">
        {keywords.map((keyword) => (
          <span
            key={keyword}
            className="flex items-center bg-transparent border-sec border text-sec text-sm font-medium px-3 py-1 "
          >
            {keyword}
            <button
              onClick={() => handleRemoveKeyword(keyword)}
              className="ml-2 text-wro hover:text-teal-700 focus:outline-none"
              aria-label={`Remove ${keyword}`}
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Detector;
