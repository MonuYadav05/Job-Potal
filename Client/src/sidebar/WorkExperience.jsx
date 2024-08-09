import React from "react";
import RadioInput from "./RadioInput";

const WorkExperience = ({ handleChange }) => {
  return (
    <div className="mt-4">
      <h2 className="font-medium text-lg text-zinc-600 mb-2">
        Work Experience
      </h2>
      <div>
        <RadioInput
          handleChange={handleChange}
          title="Intership"
          value="Intership"
          name="location"
        />
        <RadioInput
          handleChange={handleChange}
          title="Any experience"
          value="Any experience"
          name="location"
        />
        <RadioInput
          handleChange={handleChange}
          title="Work remotely"
          value="Work remotely"
          name="location"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
