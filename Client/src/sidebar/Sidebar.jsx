import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import JobPostingDate from "./JobPostingDate";
import WorkExperience from "./WorkExperience";
import Employment from "./Employment";

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className="ml-4 mt-4">
      <h3 className="font-semibold text-lg ">Filters</h3>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />
      <JobPostingDate handleChange={handleChange} />
      <WorkExperience handleChange={handleChange} />
      <Employment handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;
