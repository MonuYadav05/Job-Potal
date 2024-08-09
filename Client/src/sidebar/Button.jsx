import React from "react";

const Button = ({ handleClick, value, title }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        value={value}
        className="border px-3 py-1 hover:bg-blue hover:text-white"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
