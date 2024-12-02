"use client";
import * as React from "react";

import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Checkbox,
} from "@mui/material";
import CustomInput from "../inputs/CustomInput";
import CustomSelector from "../inputs/CustomSelect";
import CountrySelector from "../inputs/CountrySelector";
export default function JobDetailsSection() {
  const [selectedValue1, setSelectedValue1] = React.useState(" ");
  const [selectedValue2, setSelectedValue2] = React.useState(" ");
  const [selectedValue3, setSelectedValue3] = React.useState(" ");
  const [selectedValue4, setSelectedValue4] = React.useState(" ");
  const [selectedValue5, setSelectedValue5] = React.useState(" ");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  // State for selections
  const [industries, setIndustries] = React.useState([
    { name: "Healthcare", current: true },
    { name: "Pharmaceutical", current: false },
    { name: "Education", current: false },
  ]);

  const [employmentTypes, setEmploymentTypes] = React.useState([
    { name: "Full Time", current: true },
    { name: "Part Time", current: false },
    { name: "Freelance", current: false },
    { name: "Volunteer", current: false },
  ]);

  const [genders, setGenders] = React.useState([
    { name: "Male", current: true },
    { name: "Female", current: false },
    { name: "Male&Female", current: false },
  ]);

  const [workPlaces, setWorkPlaces] = React.useState([
    { name: "On site", current: false },
    { name: "Remote", current: false },
    { name: "Hybrid", current: true },
  ]);

  // Update selection helper
  const handleSelection = (
    stateSetter: (arg0: (prev: any) => any) => void,
    index: any
  ) => {
    stateSetter((prev) =>
      prev.map((item: any, i: any) => ({ ...item, current: i === index }))
    );
  };

  return (
    <div className="min-h-screen  py-8 px-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center text-prim">
        Post Job Now
      </h1>
      <div className="bg-gray-50 shadow-md rounded-lg px-20 py-8 max-w-4xl w-full lg:gap-8">
        <div className="flex flex-row gap-8 items-center justify-center mt-4 mb-12 max-w-[700px] px-4 md:flex-row md:h-20 md:px-20">
          {/* Step 1 */}
          <div className="flex items-center relative">
            <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full bg-prim text-white font-medium text-base">
              1
            </div>
            <span className="text-prim font-semibold w-max mt-2 md:mt-0 md:top-9 md:right-[-45px] md:absolute text-[20px] md:text-sm absolute top-[calc(100%+5px)]">
              Job Details
            </span>
          </div>
          <div className="hidden md:flex flex-1 border-t border-gray-300 mx-4"></div>

          {/* Step 2 */}
          <div className="flex items-center relative">
            <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full bg-gray-300 text-white font-medium text-base">
              2
            </div>
            {/* Step 2 label will be hidden on smaller screens */}
            <span className="hidden md:block text-gray-600 w-max top-9 right-[-60px] absolute text-sm">
              Screening Questions
            </span>
          </div>
          <div className="hidden md:flex flex-1 border-t border-gray-300 mx-4"></div>

          {/* Step 3 */}
          <div className="flex items-center relative">
            <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full bg-gray-300 text-white font-medium text-base">
              3
            </div>
            {/* Step 3 label will be hidden on smaller screens */}
            <span className="hidden md:block text-gray-600 w-max top-9 right-[-60px] absolute text-sm">
              Review & Publish
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-8">
          {/* Job Title */}
          <div>
            <CustomInput label="Job Title" placeholder="" />
          </div>
          {/* Industry */}
          <div className="mb-6">
            <h2 className="text-base ml-3 font-medium mb-2">
              Industry <span className="text-red-500">*</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              {industries.map((industry, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  className="text-sm"
                  sx={{
                    borderRadius: "0px", // Rounded corners for modern look
                    color: industry.current ? "#2EAE7D" : "rgba(0, 0, 0, 0.59)",
                    borderColor: industry.current
                      ? "#2EAE7D"
                      : "rgba(0, 0, 0, 0.59)",
                    textTransform: "none",
                    width: { xs: "100%", sm: "125px" }, // Full width on small screens
                    minHeight: "41px",
                    "&:hover, &:focus": {
                      color: "#2EAE7D",
                      borderColor: "#2EAE7D",
                    },
                  }}
                >
                  {industry.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Sector, Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomSelector
              label="Sector"
              options={options}
              selectedValue={selectedValue1}
              onChange={setSelectedValue1}
            />
            <CustomSelector
              label="Category"
              options={options}
              selectedValue={selectedValue2}
              onChange={setSelectedValue2}
            />
          </div>

          {/* Specialty, Career Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomSelector
              label="Speciality"
              options={options}
              selectedValue={selectedValue3}
              onChange={setSelectedValue3}
            />
            <CustomSelector
              label="Career Level"
              options={options}
              selectedValue={selectedValue4}
              onChange={setSelectedValue4}
            />
          </div>

          {/* Type of Employment */}
          <div className="mb-6">
            <h2 className="text-base font-medium mb-2">
              Type of Employment <span className="text-red-500">*</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              {employmentTypes.map((employmentType, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  className="text-sm"
                  sx={{
                    borderRadius: "0px", // Rounded corners for modern look
                    color: employmentType.current
                      ? "#2EAE7D"
                      : "rgba(0, 0, 0, 0.59)",
                    borderColor: employmentType.current
                      ? "#2EAE7D"
                      : "rgba(0, 0, 0, 0.59)",
                    textTransform: "none",
                    width: { xs: "100%", sm: "125px" }, // Full width on small screens
                    minHeight: "41px",
                    "&:hover, &:focus": {
                      color: "#2EAE7D",
                      borderColor: "#2EAE7D",
                    },
                  }}
                >
                  {employmentType.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Work Place */}
          <div className="mb-6">
            <h2 className="text-base font-medium mb-2">
              Work Place <span className="text-red-500">*</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              {workPlaces.map((place, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  className="text-sm"
                  sx={{
                    borderRadius: "0px",
                    color: place.current ? "#2EAE7D" : "rgba(0, 0, 0, 0.59)",
                    borderColor: place.current
                      ? "#2EAE7D"
                      : "rgba(0, 0, 0, 0.59)",
                    textTransform: "none",
                    width: { xs: "100%", sm: "125px" },
                    minHeight: "41px",
                    "&:hover, &:focus": {
                      color: "#2EAE7D",
                      borderColor: "#2EAE7D",
                    },
                  }}
                >
                  {place.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div>
            <h2 className="text-base font-medium mb-2">
              Gender <span className="text-red-500">*</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              {genders.map((gender, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  className="text-sm"
                  sx={{
                    borderRadius: "0px",
                    color: gender.current ? "#2EAE7D" : "rgba(0, 0, 0, 0.59)",
                    borderColor: gender.current
                      ? "#2EAE7D"
                      : "rgba(0, 0, 0, 0.59)",
                    textTransform: "none",
                    width: { xs: "100%", sm: "126px" },
                    minHeight: "41px",
                    "&:hover, &:focus": {
                      color: "#2EAE7D",
                      borderColor: "#2EAE7D",
                    },
                  }}
                >
                  {gender.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Age Range */}
          <div className="mb-6">
            <h2 className="text-base font-medium mb-2">
              Age <span className="text-red-500">*</span>
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              {/* Minimum Age */}
              <FormControl
                sx={{
                  minWidth: { xs: "100px", sm: "125px" },
                  minHeight: "41px",
                }}
              >
                <InputLabel
                  sx={{
                    fontSize: "14px",
                    "&.Mui-focused": {
                      color: "#2EAE7D",
                    },
                  }}
                >
                  Min
                </InputLabel>
                <Select
                  sx={{
                    minWidth: { xs: "100px", sm: "125px" },
                    minHeight: "41px",
                    fontSize: "14px",
                    color: "#333",
                    border: "1px solid #D6DDEB",
                    borderRadius: "0px", // Slightly rounded corners
                    "&:hover": {
                      borderColor: "#2EAE7D",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#2EAE7D",
                    },
                  }}
                >
                  <MenuItem value="18">18</MenuItem>
                  <MenuItem value="19">19</MenuItem>
                  <MenuItem value="20">20</MenuItem>
                  <MenuItem value="21">21</MenuItem>
                </Select>
              </FormControl>

              <span className="text-gray-500">to</span>

              {/* Maximum Age */}
              <FormControl
                sx={{
                  minWidth: { xs: "100px", sm: "125px" },
                  minHeight: "41px",
                }}
              >
                <InputLabel
                  sx={{
                    fontSize: "14px",
                    "&.Mui-focused": {
                      color: "#2EAE7D",
                    },
                  }}
                >
                  Max
                </InputLabel>
                <Select
                  sx={{
                    minWidth: { xs: "100px", sm: "125px" },
                    minHeight: "41px",
                    fontSize: "14px",
                    color: "#333",
                    border: "1px solid #D6DDEB",
                    borderRadius: "0px",
                    "&:hover": {
                      borderColor: "#2EAE7D",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#2EAE7D",
                    },
                  }}
                >
                  <MenuItem value="18">18</MenuItem>
                  <MenuItem value="19">19</MenuItem>
                  <MenuItem value="20">20</MenuItem>
                  <MenuItem value="21">21</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          {/* Education Level */}
          <CustomSelector
            label="Education Level"
            options={options}
            selectedValue={selectedValue2}
            onChange={setSelectedValue2}
          />

          {/* Job Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CountrySelector />

            <CustomSelector
              label="City / Area"
              options={options}
              selectedValue={selectedValue5}
              onChange={setSelectedValue5}
            />
          </div>
          {/*Experince Range */}
          <div className="p-4">
            <h2 className="text-base font-medium mb-2">
              Years of Experience <span className="text-red-500">*</span>
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              {/* Min Selector */}
              <FormControl
                sx={{
                  minWidth: { xs: "100px", sm: "125px" },
                  maxWidth: "150px",
                  minHeight: "41px",
                }}
              >
                <InputLabel
                  sx={{
                    fontSize: "14px",
                    "&.Mui-focused": {
                      color: "#2EAE7D",
                    },
                  }}
                >
                  Min
                </InputLabel>
                <Select
                  sx={{
                    minWidth: { xs: "100px", sm: "125px" },
                    fontSize: "14px",
                    color: "#333",
                    border: "1px solid #D6DDEB",
                    borderRadius: "0",
                    "&:hover": {
                      borderColor: "#2EAE7D",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#2EAE7D",
                    },
                  }}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>

              {/* Divider */}
              <span className="text-gray-500">to</span>

              {/* Max Selector */}
              <FormControl
                sx={{
                  minWidth: { xs: "100px", sm: "125px" },
                  maxWidth: "150px",
                  minHeight: "41px",
                }}
              >
                <InputLabel
                  sx={{
                    fontSize: "14px",
                    "&.Mui-focused": {
                      color: "#2EAE7D",
                    },
                  }}
                >
                  Max
                </InputLabel>
                <Select
                  sx={{
                    minWidth: { xs: "100px", sm: "125px" },
                    fontSize: "14px",
                    color: "#333",
                    border: "1px solid #D6DDEB",
                    borderRadius: "0",
                    "&:hover": {
                      borderColor: "#2EAE7D",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#2EAE7D",
                    },
                  }}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          {/* Salary Range */}
          <div className="p-4">
            <h2 className="text-base font-medium mb-2">Salary Range</h2>
            <div className="flex flex-wrap gap-4 items-center">
              {/* Min Salary Input */}
              <div className="w-full max-w-[125px] sm:max-w-[150px]">
                <input
                  className="w-full h-[41px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#D6DDEB] px-3 py-2 transition duration-300 ease focus:outline-none focus:border-[#2EAE7D] hover:border-[#2EAE7D] shadow-sm focus:shadow bg-[rgba(214, 221, 235, 0.18)]"
                  placeholder="1000 EG"
                />
              </div>

              <span className="text-gray-500">to</span>

              {/* Max Salary Input */}
              <div className="w-full max-w-[125px] sm:max-w-[150px]">
                <input
                  className="w-full h-[41px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#D6DDEB] px-3 py-2 transition duration-300 ease focus:outline-none focus:border-[#2EAE7D] hover:border-[#2EAE7D] shadow-sm focus:shadow bg-[rgba(214, 221, 235, 0.18)]"
                  placeholder="120000 EG"
                />
              </div>

              {/* Currency Selector */}
              <FormControl
                sx={{
                  minWidth: "125px",
                  maxWidth: "150px",
                  maxHeight: "41px",
                }}
              >
                <InputLabel
                  sx={{
                    fontSize: "14px",
                    "&.Mui-focused": {
                      color: "#2EAE7D",
                    },
                  }}
                >
                  Currencies
                </InputLabel>
                <Select
                  sx={{
                    minWidth: "125px",
                    fontSize: "14px",
                    color: "#333",
                    border: "1px solid #D6DDEB",
                    borderRadius: "0",
                    "&:hover": {
                      borderColor: "#2EAE7D",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#2EAE7D",
                    },
                  }}
                >
                  <MenuItem value="1">EGP</MenuItem>
                  <MenuItem value="2">USD</MenuItem>
                  <MenuItem value="3">EUR</MenuItem>
                  <MenuItem value="4">GBP</MenuItem>
                </Select>
              </FormControl>

              <span className="text-gray-500">per</span>

              {/* Period Selector */}
              <FormControl
                sx={{
                  minWidth: "125px",
                  maxWidth: "150px",
                  maxHeight: "41px",
                }}
              >
                <InputLabel
                  sx={{
                    fontSize: "14px",
                    "&.Mui-focused": {
                      color: "#2EAE7D",
                    },
                  }}
                >
                  Period
                </InputLabel>
                <Select
                  sx={{
                    minWidth: "125px",
                    fontSize: "14px",
                    color: "#333",
                    border: "1px solid #D6DDEB",
                    borderRadius: "0",
                    "&:hover": {
                      borderColor: "#2EAE7D",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#2EAE7D",
                    },
                  }}
                >
                  <MenuItem value="1">Month</MenuItem>
                  <MenuItem value="2">Year</MenuItem>
                  <MenuItem value="3">Week</MenuItem>
                  <MenuItem value="4">Day</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Checkbox Section */}
            <div className="mt-4 flex items-center">
              <Checkbox />
              <span className="text-sm md:text-base text-prim font-semibold">
                Hide Salary in job post
              </span>
            </div>
          </div>

          {/* Additional Salary Details */}
          <div className="w-full ">
            <label className="text-base font-medium mb-2">
              Additional Salary Details
            </label>
            <textarea
              className="w-full   h-[90px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#D6DDEB] px-3 py-2 transition duration-300 ease focus:outline-none focus:border-[#2EAE7D] hover:border-[#2EAE7D] shadow-sm focus:shadow bg-[rgba(214, 221, 235, 0.18)]"
              placeholder="bonus"
            />
          </div>

          {/* Number of Vacancies */}
          <div>
            <h2 className="text-base font-medium mb-2 ">
              Number of Vacancies <span className="text-red-500">*</span>
            </h2>
            <div className="flex items-center gap-4">
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "0",
                  borderColor: "#2EAE7D",
                  textTransform: "none",
                  color: "#2EAE7D",
                  "&:hover, &:focus": {
                    borderColor: "#2EAE7D",
                  },
                }}
              >
                +
              </Button>
              <span>1</span>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "0",
                  borderColor: "#2EAE7D",
                  textTransform: "none",
                  color: "#2EAE7D",
                  "&:hover, &:focus": {
                    borderColor: "#2EAE7D",
                  },
                }}
              >
                -
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
