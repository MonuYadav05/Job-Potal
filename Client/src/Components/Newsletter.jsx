import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";

const Newsletter = () => {
  return (
    <div>
      <div className="ml-4 mr-4 mt-6 mb-20 ">
        <p className=" flex gap-2 items-center font-semibold text-lg">
          <MdEmail /> Email me For Jobs
        </p>
        <p className="text-neutral-600 mt-3">
          Subscribe to our newsletter <br /> to receive the latest job
          <br />
          openings directly in your inbox.
        </p>
        <input
          type="email"
          name="email"
          placeholder="name@gamil.com"
          className="border rounded pr-7 pl-3 py-1.5 w-full mt-3 mr-3"
        />

        <button className="border rounded px-3 py-2 font-semibold w-full bg-blue mt-4 text-white">
          Subscribe
        </button>
      </div>
      <div className="ml-4 mr-4 mt-6  ">
        <p className=" flex gap-2 items-center font-semibold text-lg">
          <IoIosRocket />
          Get noticed faster
        </p>
        <p className="text-neutral-600 mt-3">
          Streamline your job search
          <br /> and land your dream job faster!
        </p>
        <button className="border rounded px-3 py-2 font-semibold w-full bg-blue mt-4 text-white">
          Upload your resume
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
