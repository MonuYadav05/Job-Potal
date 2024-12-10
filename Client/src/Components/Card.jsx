import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`/job/${data._id}`}>
      <div className="card px-7 pt-8">
        <div className="w-full border flex gap-3 px-3 py-4 ">
          <div>
            <img src={data.companyLogo} alt="companyLogo" className="w-40" />
          </div>

          <div className="">
            <h2 className="text-sm text-neutral-600 mb-1 ">
              {data.companyName}
            </h2>
            <h3 className="font-semibold mb-1">{data.jobTitle}</h3>
            <div className=" gap-2 flex-wrap hidden md:flex">
              <span className="flex text-neutral-500 gap-1 items-center mb-1 md:gap-2">
                <CiLocationOn />
                {data.jobLocation}
              </span>
              <span className="flex text-neutral-500 gap-1 items-center mb-1 md:gap-2">
                <MdOutlineWatchLater />
                {data.employmentType}
              </span>
              <span className="flex text-neutral-500 gap-1 items-center mb-1 md:gap-2">
                <BsCurrencyDollar />
                {data.minPrice}-{data.maxPrice}k
              </span>
              <span className="flex text-neutral-500 gap-1 items-center mb-1 md:gap-2">
                <CiCalendarDate />
                {data.postingDate}
              </span>
            </div>
            <span className="text-neutral-500">{data.description}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
