import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const { user } = useSelector((state) => state.profile);

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];

  const onSubmit = (data) => {
    data.skill = selectedOption;
    data.postedBy = user.email;
    console.log(data);
    axios
      .post(`${import.meta.env.VITE_API_URL}/post-job`, data)
      .then((res) => {
        console.log(res);
        navigate("/");
        alert("Job posted Successfull");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-[#FAFAFA] w-11/12 mx-auto mt-7">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-12 py-11">
          {/* row-1 */}
          <div className="md:flex justify-between mb-4">
            <div className="md:w-45p  flex flex-col gap-2">
              <label className="text-lg text-gray-800">Job Title</label>
              <input
                type="text"
                placeholder="Web Developer"
                {...register("jobTitle", { required: true, maxLength: 80 })}
                className="h-9 text-sm border placeholder:text-gray-400 pl-2"
              />
            </div>
            <div className="md:w-45p  flex flex-col gap-2">
              <label className="text-lg text-gray-800">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                {...register("companyName", { required: true, maxLength: 80 })}
                className="h-9 text-sm border placeholder:text-gray-400 pl-2"
              />
            </div>
          </div>

          {/* ROW-2 */}
          <div className="md:flex justify-between mb-4">
            <div className="md:w-45p  flex flex-col gap-2">
              <label className="text-lg text-gray-800">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice", { required: true, maxLength: 80 })}
                className="h-9 text-sm border placeholder:text-gray-400 pl-2"
              />
            </div>
            <div className="md:w-45p  flex flex-col gap-2">
              <label className="text-lg text-gray-800">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                {...register("maxPrice", { required: true, maxLength: 80 })}
                className="h-9 text-sm border placeholder:text-gray-400 pl-2"
              />
            </div>
          </div>

          {/* row-3 */}
          <div className="md:flex justify-between mb-4">
            <div className="md:w-45p  flex flex-col gap-2">
              <label className="text-lg text-gray-800">Salary Type</label>
              <select
                {...register("salaryType", { required: true })}
                className="h-9 text-sm border placeholder:text-gray-400 pl-2"
              >
                <option default value="">
                  Choose your salary
                </option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
                <option value="Hourly">Hourly</option>
              </select>
            </div>
            <div className="md:w-45p  flex flex-col gap-2">
              <label className="text-lg text-gray-800">Job Location</label>
              <input
                type="text"
                placeholder="Ex:New York"
                {...register("jobLocation", { required: true, maxLength: 80 })}
                className="h-9 text-sm border placeholder:text-gray-400 pl-2"
              />
            </div>
          </div>

          {/* row-4 */}
          <div className="md:flex justify-between mb-4">
            <div className="md:w-45p  flex flex-col gap-2">
              <label className="text-lg text-gray-800">Job Posting Date</label>
              <input
                type="date"
                placeholder="2023-11-05"
                {...register("postingDate", { required: true, maxLength: 80 })}
                className="h-9 text-sm border placeholder:text-gray-400 pl-2 pr-2"
              />
            </div>
            <div className="md:w-45p  flex flex-col gap-2">
              <label className="text-lg text-gray-800">Experience Level</label>
              <select
                {...register("experienceLevel", { required: true })}
                className="h-9 text-sm border placeholder:text-gray-400 pl-2"
              >
                <option default value="">
                  Choose your experience
                </option>
                <option value="Intership">Intership</option>
                <option value="Work remotely">Work remotely</option>
                <option value="Any experience">Any experience</option>
              </select>
            </div>
          </div>

          {/* row-5 */}
          <div className="mb-4">
            <label className="text-lg text-gray-800">
              Required Skill Sets:
            </label>
            <CreatableSelect
              isMulti
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              className="h-9 text-sm placeholder:text-gray-400 pl-2"
            />
          </div>

          {/* row-6 */}
          <div className="md:flex justify-between mb-4">
            <div className="md:w-45p  flex flex-col gap-2">
              <label className="text-lg text-gray-800">Company Logo</label>
              <input
                type="url "
                placeholder="Paste your image url:"
                {...register("companyLogo", { required: true })}
                className="h-9 text-sm border placeholder:text-gray-400 pl-2"
              />
            </div>
            <div className="md:w-45p  flex flex-col gap-2">
              <label className="text-lg text-gray-800">Employment Type</label>
              <select
                {...register("employmentType", { required: true })}
                className="h-9 text-sm border placeholder:text-gray-400 pl-2"
              >
                <option default value="">
                  Select your job type
                </option>
                <option value="Part-time">Part-time</option>
                <option value="Full-time">Full-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* row-7 */}
          <div className="md:w-full flex flex-col gap-2 mb-3">
            <label className="text-lg text-gray-800">Job Description</label>
            <textarea
              className="pl-3 pt-3"
              rows={6}
              name="description"
              placeholder="Write Description"
              {...register("description", { required: true })}
            ></textarea>
          </div>

          <input
            type="submit"
            className="my-5 px-7 border rounded h-10 bg-blue text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
