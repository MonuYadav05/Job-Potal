import React from "react";
import Button from "./Button";
import RadioInput from "./RadioInput";
const Salary = ({ handleChange, handleClick }) => {
  return (
    <div className="mt-4">
      <h2 className="font-medium text-lg text-zinc-600 mb-2">Salary</h2>
      <div className="flex">
        <Button handleClick={handleClick} value="Hourly" title="Hourly" />
        <Button handleClick={handleClick} value="Monthly" title="Monthly" />
        <Button handleClick={handleClick} value="Yearly" title="Yearly" />
      </div>
      <div className="mt-3">
        <RadioInput
          handleChange={handleChange}
          title="All"
          value=""
          name="Salary"
        />
        <RadioInput
          handleChange={handleChange}
          title="< 30k"
          value="30"
          name="Salary"
        />
        <RadioInput
          handleChange={handleChange}
          title="< 50k"
          value="50"
          name="Salary"
        />
        <RadioInput
          handleChange={handleChange}
          title="< 80k"
          value="80"
          name="Salary"
        />
        <RadioInput
          handleChange={handleChange}
          title="< 100k"
          value="100"
          name="Salary"
        />
      </div>
    </div>
  );
};

export default Salary;
