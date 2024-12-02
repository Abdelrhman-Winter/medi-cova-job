"use client";
import Image from "next/image";
import { useState } from "react";

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState("Egypt");
  const [flagUrl, setFlagUrl] = useState("https://flagcdn.com/w320/eg.png");

  const countries = [
    { name: "Egypt", code: "eg", flagUrl: "https://flagcdn.com/w320/eg.png" },
    { name: "USA", code: "us", flagUrl: "https://flagcdn.com/w320/us.png" },
    { name: "France", code: "fr", flagUrl: "https://flagcdn.com/w320/fr.png" },
    // Add more countries as needed
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find((c) => c.name === e.target.value);
    if (country) {
      setSelectedCountry(country.name);
      setFlagUrl(country.flagUrl);
    }
  };

  return (
    <div className="w-full max-w-md min-w-[200px]">
      <label
        htmlFor="job-location"
        className="block text-base font-medium mb-2"
      >
        Job location <span className="text-red-500">*</span>
      </label>
      <div className="relative flex items-center border shadow-sm bg-gray-50 hover:border-sec focus-within:border-sec ">
        <Image
          src={flagUrl}
          alt={`${selectedCountry} flag`}
          className="w-8 h-5 ml-2 "
          width={100}
          height={100}
          priority
        />
        <select
          id="job-location"
          className="flex-1 py-2 pl-3 pr-8 text-gray-700 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-sec focus:border-sec"
          value={selectedCountry}
          onChange={handleChange}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default CountrySelector;
