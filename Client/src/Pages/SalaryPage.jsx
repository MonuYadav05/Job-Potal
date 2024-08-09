import React, { useEffect, useState } from "react";
import SalaryHeader from "../Components/SalaryHeader";

const SalaryPage = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [salary, setSalary] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("salary.json")
      .then((res) => res.json())
      .then((data) => {
        setSalary(data);
        setIsLoading(false);
      });
  }, [searchText]);

  const handleSearch = () => {
    setIsLoading(true);
    const filter = salary.filter(
      (job) => job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    setSalary(filter);
    console.log(filter);
    setIsLoading(false);
  };

  return (
    <div>
      <SalaryHeader title={"Estimate Salary"} path={"salary"} />

      <div className=" flex justify-center mx-auto mt-8 w-6/12">
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setSearchText(e.target.value)}
          className="h-9 w-full text-sm border placeholder:text-gray-400 pl-2"
        />
        <button
          onClick={handleSearch}
          className=" px-5 w-1/5 h-9 bg-blue text-white font-semibold"
        >
          Search
        </button>
      </div>

      {/* display data */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-10 mx-20 my-20">
        {salary.map((data) => {
          return (
            <div key={data.id} className=" px-4 py-5 shadow-lg">
              <h1 className="text-xl font-semibold my-1">{data.title}</h1>
              <h1 className="text-blue text-lg font-normal my-1">
                {data.salary}
              </h1>
              <a href="/" className="underline text-grey-800 mr-4 my-1">
                {data.status}
              </a>
              <a href="/" className="underline my-1">
                {data.skills}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalaryPage;
