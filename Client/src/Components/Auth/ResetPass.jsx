import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { resetPass } from "../../services/operations/authApi";

const ResetPass = () => {
  const randomString = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    console.log(randomString);
    try {
      dispatch(
        resetPass(
          formData.password,
          formData.confirmPassword,
          randomString,
          navigate
        )
      );
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center mt-5 justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-md space-y-4"
        style={{ borderColor: "#3575e2" }}
      >
        <h2
          className="text-2xl font-semibold text-center"
          style={{ color: "#3575e2" }}
        >
          Set a new Password
        </h2>

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="p-2 w-full border rounded focus:outline-none focus:ring-2"
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="p-2 w-full border rounded focus:outline-none focus:ring-2"
        />
        <button
          type="submit"
          className="w-full bg-[#3575e2] text-white p-2 rounded-md hover:bg-blue-600"
        >
          Update Password
        </button>
        <p className="text-center">
          <Link
            className="text-[#3575e2] font-semibold underline"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPass;
