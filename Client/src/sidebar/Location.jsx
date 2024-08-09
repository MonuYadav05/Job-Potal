import React from "react";
import RadioInput from "./RadioInput";

const Location = ({ handleChange }) => {
  return (
    <div className="mt-4">
      <h2 className="font-medium text-lg text-zinc-600 mb-2">Location</h2>
      <div>
        <RadioInput
          handleChange={handleChange}
          title="All"
          value=""
          name="location"
        />
        <RadioInput
          handleChange={handleChange}
          title="London"
          value="London"
          name="location"
        />
        <RadioInput
          handleChange={handleChange}
          title="Seattle"
          value="Seattle"
          name="location"
        />
        <RadioInput
          handleChange={handleChange}
          title="Madrid"
          value="Madrid"
          name="location"
        />
        <RadioInput
          handleChange={handleChange}
          title="Boston"
          value="Boston"
          name="location"
        />
      </div>
    </div>
  );
};

export default Location;
