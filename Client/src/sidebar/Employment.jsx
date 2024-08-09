import React from "react";
import RadioInput from "./RadioInput";

const Employment = ({ handleChange }) => {
  return (
    <div className="mt-4">
      <h2 className="font-medium text-lg text-zinc-600 mb-2">
        Type of employment
      </h2>
      <div>
        <RadioInput
          handleChange={handleChange}
          title="Any"
          value=""
          name="location"
        />
        <RadioInput
          handleChange={handleChange}
          title="Temporary"
          value="Temporary"
          name="location"
        />
        <RadioInput
          handleChange={handleChange}
          title="Full-time"
          value="Full-time"
          name="location"
        />
        <RadioInput
          handleChange={handleChange}
          title="Part-time"
          value="Part-time"
          name="location"
        />
      </div>
    </div>
  );
};

export default Employment;
