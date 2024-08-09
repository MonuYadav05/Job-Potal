import React from "react";
import RadioInput from "./RadioInput";

const JobPostingDate = ({ handleChange }) => {
  let now = new Date();

  let twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  let sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  let thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);
  return (
    <div className="mt-4">
      <h2 className="font-medium text-lg text-zinc-600 mb-2">
        Date of posting
      </h2>
      <div>
        <RadioInput
          handleChange={handleChange}
          title="All time"
          value=""
          name="Date"
        />
        <RadioInput
          handleChange={handleChange}
          title="Last 24 Hours"
          value={twentyFourHoursAgoDate}
          name="Date"
        />
        <RadioInput
          handleChange={handleChange}
          title="Last 7 Days"
          value={sevenDaysAgoDate}
          name="Date"
        />
        <RadioInput
          handleChange={handleChange}
          title="Last 30 Days"
          value={thirtyDaysAgoDate}
          name="Date"
        />
      </div>
    </div>
  );
};

export default JobPostingDate;
