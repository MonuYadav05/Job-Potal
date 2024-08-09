import React from "react";

const RadioInput = ({ handleChange, title, value, name }) => {
  return (
    <div>
      <label className="inline-flex items-center gap-2 mb-2 ">
        <input
          type="radio"
          name={name}
          value={value}
          className="form-radio h-5 w-5 bg-blue radio"
          onChange={handleChange}
        />
        <span className="ml-2 text-gray-600">{title}</span>
      </label>
    </div>
  );
};

export default RadioInput;
