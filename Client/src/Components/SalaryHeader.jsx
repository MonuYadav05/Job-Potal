import React from "react";

const SalaryHeader = ({ title, path }) => {
  return (
    <div className="text-center ml-20">
      <div className="text-center mt-12 mx-auto">
        <div className="bg-[#FAFAFA] flex flex-col justify-center  w-11/12 h-52 ">
          <h1 className="text-3xl text-blue ">{title}</h1>
          <p>
            {" "}
            <a href="/">home</a> / {path}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalaryHeader;
