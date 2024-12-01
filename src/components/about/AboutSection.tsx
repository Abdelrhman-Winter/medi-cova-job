import * as React from "react";

import CustomTextArea from "../textArea/CustomTextArea";

import Detector from "../detector/Detector";
export default function AboutSection() {
  return (
    <div className="h-max py-8 px-4 flex flex-col items-center">
      <div className="bg-gray-50 shadow-md rounded-lg px-12 py-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-6  text-prim">About the job</h1>
        <CustomTextArea label="Job Description" />
        <CustomTextArea label="Job Requirements" />

        <Detector
          initialKeywords={[
            "Healthcare",
            "Medical Services",
            "Education healthcare",
          ]}
          info={""}
          header={"Skills related to the job post "}
        />
        <Detector
          initialKeywords={[
            "Healthcare",
            "Medical Services",
            "Education healthcare",
          ]}
          info={
            "Enter keywords including any related job titles, technologies, or keywords the candidate should have in his CV."
          }
          header={"Keywords"}
        />
      </div>
    </div>
  );
}
