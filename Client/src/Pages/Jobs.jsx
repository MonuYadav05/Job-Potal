import React from "react";

const Jobs = ({ result }) => {
  return (
    <div>
      {result.length > 0 ? (
        <h3 className="text-slate-800 font-semibold text-2xl">
          {result.length} Jobs
        </h3>
      ) : (
        ""
      )}
      {result}
    </div>
  );
};

export default Jobs;
